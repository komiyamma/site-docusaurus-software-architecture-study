# 第8章　DI（依存性注入）入門：コンストラクタ注入🎁🔌

この章のゴールはこれっ✨
**「`new` を“使う側”から消して、部品を外から渡せるようにする（＝差し替えOKにする）」** だよ〜😊🎉
（※DIコンテナの話は次章で“自動組み立て機🤖”としてやるので、ここではまず **手で組む** 感覚を固めるよ✋🧩）

> ちなみに本日時点では **.NET 10（LTS） / C# 14 / Visual Studio 2026** が最新ラインだよ〜📌✨ ([Microsoft for Developers][1])

---

## 1) DIってなに？超ざっくり🍀

**DI（Dependency Injection）= 依存（Dependency）を、外から注入（Injection）すること**🎁
つまり…

* ❌「クラスの中で `new` して部品を固定しちゃう」
* ✅「必要な部品は“外から渡してもらう”】【差し替え可能🔁】

.NETのドキュメントでも、DIは **依存関係を管理して疎結合にするための定番パターン**として説明されてるよ📚 ([Microsoft Learn][2])

---

## 2) まずは“コンストラクタ注入”だけ覚えよう🎁✨

![Dependency Injection](./picture/isa_hasa_cs_study_008_dependency_injection.png)

DIにもいろいろあるけど、最初はこれだけでOK🙆‍♀️

### ✅ コンストラクタ注入（Constructor Injection）って？

**「必要な部品を、コンストラクタ引数で受け取る」** 方式だよ〜😊

* “このクラスはこれがないと動けない！”が一目で分かる👀
* テストで差し替えしやすい✅
* `null` が入ると困る依存も守りやすい🛡️

---

## 3) 何を注入するの？判断のコツ🌪️

注入すると効果が出やすいのは、だいたいこのへん👇

### ✅ 注入しがちなもの（変わりやすい／外に出るもの）

* 時刻（例：`DateTime.Now`）⌚
* 乱数（例：`Random`）🎲
* 外部I/O（ファイル、DB、HTTP、メールなど）📁🌐📨
* 環境依存（OS、マシン名、環境変数）🪟

### ✅ 注入しなくてもいいことが多いもの（安定＆純粋）

* ただの計算や変換（文字列整形とか）🧮
* 変更されにくいルール（ただし将来ルールが増えるならStrategyへ…は第10章🎭）

---

## 4) ハンズオン🧪：時計⌚・乱数🎲・外部I/O📁を差し替え可能にする

### 題材：今日の「ラッキー割引メッセージ」アプリ🍀💌

* 今日の日付でログを残す⌚
* ランダムにメッセージ選ぶ🎲
* ファイルに読み書きする📁

---

### 4-1) まずは“DIなし”のダメ例（つらい例）😇

```csharp
using System;

public class LuckyMessageService
{
    public string Create(string userName)
    {
        // 👇 依存がベタ書き（固定）で、テストが超だるい…
        var now = DateTimeOffset.Now;          // ⌚ 時刻が固定できない
        var rng = new Random();                // 🎲 乱数が固定できない
        var lines = File.ReadAllLines("messages.txt"); // 📁 ファイル依存が重い

        var pick = lines[rng.Next(lines.Length)];
        File.AppendAllText("log.txt", $"{now:u} {userName} -> {pick}{Environment.NewLine}");

        return $"{userName}さん✨ {pick}";
    }
}
```

**このコードの困りポイント**😵‍💫

* いつ実行しても結果が変わる（時刻＆乱数）→テストしにくい⌚🎲
* `messages.txt` が無いと落ちる →テスト環境がつらい📁
* ログが実ファイルに出る →テストで後片付け地獄🧹

---

### 4-2) 依存を“外から渡せる形”にする（DI化）🎁✨

#### (A) 依存のインターフェースを作る🧩

```csharp
using System;

public interface IClock
{
    DateTimeOffset Now { get; }
}

public interface IRandom
{
    int Next(int maxExclusive);
}

public interface ITextFile
{
    string[] ReadAllLines(string path);
    void AppendAllText(string path, string text);
}
```

#### (B) “本番用”の実装（リアル部品）を作る🧰

```csharp
using System;

public sealed class SystemClock : IClock
{
    public DateTimeOffset Now => DateTimeOffset.Now;
}

public sealed class SystemRandom : IRandom
{
    public int Next(int maxExclusive) => Random.Shared.Next(maxExclusive);
}

public sealed class RealTextFile : ITextFile
{
    public string[] ReadAllLines(string path) => File.ReadAllLines(path);
    public void AppendAllText(string path, string text) => File.AppendAllText(path, text);
}
```

#### (C) サービスは **コンストラクタ注入** で受け取る🎁

```csharp
using System;

public class LuckyMessageService
{
    private readonly IClock _clock;
    private readonly IRandom _random;
    private readonly ITextFile _file;

    public LuckyMessageService(IClock clock, IRandom random, ITextFile file)
    {
        _clock = clock ?? throw new ArgumentNullException(nameof(clock));
        _random = random ?? throw new ArgumentNullException(nameof(random));
        _file = file ?? throw new ArgumentNullException(nameof(file));
    }

    // 依存関係の図
    // ```mermaid
    // classDiagram
    //     class LuckyMessageService
    //     class IClock { <<interface>> }
    //     class IRandom { <<interface>> }
    //     class ITextFile { <<interface>> }
    // 
    //     LuckyMessageService --> IClock : 依存
    //     LuckyMessageService --> IRandom : 依存
    //     LuckyMessageService --> ITextFile : 依存
    // ```


    public string Create(string userName)
    {
        var now = _clock.Now;
        var lines = _file.ReadAllLines("messages.txt");

        var pick = lines[_random.Next(lines.Length)];
        _file.AppendAllText("log.txt", $"{now:u} {userName} -> {pick}{Environment.NewLine}");

        return $"{userName}さん✨ {pick}";
    }
}
```

#### (D) 組み立ては“組み立て場所”で（前章のComposition Root🌳🧩）

```csharp
using System;

public static class Program
{
    public static void Main()
    {
        var service = new LuckyMessageService(
            new SystemClock(),
            new SystemRandom(),
            new RealTextFile()
        );

        Console.Write("名前を入れてね👉 ");
        var name = Console.ReadLine() ?? "あなた";
        Console.WriteLine(service.Create(name));
    }
}
```

✅ これで **サービスの中から `new` がほぼ消えた**🎉
差し替えがめっちゃ簡単になるよ〜🔁✨

---

## 5) テストが一気にラクになる✅⚡（ミニ体験）

### (A) テスト用のFakeを作る🧸

```csharp
using System;
using System.Collections.Generic;

public sealed class FixedClock : IClock
{
    public FixedClock(DateTimeOffset now) => Now = now;
    public DateTimeOffset Now { get; }
}

public sealed class PredictableRandom : IRandom
{
    private readonly int _value;
    public PredictableRandom(int value) => _value = value;
    public int Next(int maxExclusive) => _value % maxExclusive;
}

public sealed class FakeTextFile : ITextFile
{
    private readonly Dictionary<string, string[]> _readMap = new();
    public readonly List<(string path, string text)> Appends = new();

    public void SetReadAllLines(string path, params string[] lines)
        => _readMap[path] = lines;

    public string[] ReadAllLines(string path)
        => _readMap.TryGetValue(path, out var lines) ? lines : Array.Empty<string>();

    public void AppendAllText(string path, string text)
        => Appends.Add((path, text));
}
```

### (B) “固定の結果”を検証できる🎯

```csharp
using System;

public static class MiniTest
{
    public static void Run()
    {
        var clock = new FixedClock(new DateTimeOffset(2026, 1, 15, 12, 0, 0, TimeSpan.FromHours(9)));
        var rng = new PredictableRandom(1);
        var file = new FakeTextFile();
        file.SetReadAllLines("messages.txt", "大吉💮", "中吉🌸", "吉😊");

        var service = new LuckyMessageService(clock, rng, file);

        var msg = service.Create("運勢太郎");
        Console.WriteLine(msg);

        // 期待：index=1 → "中吉🌸" が選ばれる
        if (!msg.Contains("中吉🌸")) throw new Exception("テスト失敗😢");

        // ログ書き込みも確認できる
        if (file.Appends.Count != 1) throw new Exception("ログが書かれてない😢");
    }
}
```

**ポイント**🫶

* 時刻も乱数もファイルも **全部コントロールできる**
* “たまたま通った”が消える✅
* テストが速い⚡

---

## 6) .NETの“最新寄り”小ネタ：TimeProvider って選択肢もあるよ⌚✨

最近の.NETでは、時間を抽象化する標準クラスとして **`TimeProvider`** が用意されてるよ🕰️
テスト可能＆予測可能にするための仕組みとして説明されてる📚 ([Microsoft Learn][3])

「自分で `IClock` 作るのもOK」だし、
「`TimeProvider` をそのまま注入する」でもOK🙆‍♀️
（好みで選んでね〜🌸）

---

## 7) よくある事故パターン⚠️（ここだけ注意！）

### ❌ 事故1：クラス内で `new` に戻っちゃう

「注入したのに、途中で `new` して台無し」あるある🥲
→ **依存は“外から渡す”を徹底**🎁

### ❌ 事故2：注入が増えすぎる（コンストラクタが長い）

それ、だいたい **責務が多すぎサイン**🚨
→ クラスを分割するチャンス✂️✨

### ❌ 事故3：`IServiceProvider` を中で引き回す（サービスロケータ）

DIしてるように見えて、依存が見えなくなる😵‍💫
→ **依存は引数で見える形に**👀
（この辺は次章のDIコンテナ回で“やりすぎ注意🪄❌”として触れるよ）

---

## 8) AI活用コーナー🤖🫶（Copilot / Codex 前提の使い方）

### 使えるお願い例（そのまま貼ってOK）💬✨

* 「このクラスの `new` を消して、コンストラクタ注入に直して。インターフェースも提案して」🔧
* 「`DateTimeOffset.Now` と `Random` と `File` を差し替え可能にしたい。最小の設計で」🎁
* 「依存が多すぎるなら、責務分割案を3つ出して」✂️

### AIの回答チェックのコツ🔍

* “注入したのにまた `new` してない？”👀
* “クラスの目的がブレてない？”🎯
* “インターフェース名が役割を表してる？”📝

---

## 9) 章末ミニ課題🎒✨（15分×2つ）

### 課題A⌚：`DateTimeOffset.Now` を排除せよ！

* どこかのクラスで `Now` を使ってる場所を探す
* `IClock` か `TimeProvider` を注入に変更🎁

### 課題B🎲：乱数を固定してテスト可能にせよ！

* `Random` を直接使ってる箇所を `IRandom` に置き換え
* テスト用 `PredictableRandom` を作る🧸

---

## まとめ🍀✨

* DIは「部品を外から渡して差し替え可能にする」考え方🎁🔁
* 最初は **コンストラクタ注入** だけでOK🙆‍♀️
* “時刻⌚・乱数🎲・外部I/O📁” は注入効果が激アツ🔥
* テストが速くて安定する✅⚡

次章はついに… **DIコンテナ（自動組み立て機🤖🧰）** で、手動 `new` をさらに減らしていくよ〜！🎉

[1]: https://devblogs.microsoft.com/dotnet/announcing-dotnet-10/?utm_source=chatgpt.com "Announcing .NET 10"
[2]: https://learn.microsoft.com/en-us/dotnet/core/extensions/dependency-injection?utm_source=chatgpt.com "Dependency injection - .NET"
[3]: https://learn.microsoft.com/en-us/dotnet/standard/datetime/timeprovider-overview?utm_source=chatgpt.com "What is the TimeProvider class - .NET"
