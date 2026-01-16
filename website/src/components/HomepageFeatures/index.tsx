import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [

  {
    title: 'DDD C#版',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        ドメイン駆動設計（DDD）の基本概念と、<br/>C#を用いた実践的な実装パターンを学びます。<br/>戦略的設計から戦術的設計まで。<br/>
      </>
    ),
    link: '/docs/ddd_cs/ddd_cs_index',
  },
  {
    title: 'ADR C#版',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Architecture Decision Records（ADR）の<br/>書き方と運用方法を学びます。<br/>C#プロジェクトでの実践例を中心に。<br/>
      </>
    ),
    link: '/docs/adr_cs/adr_cs_index',
  },
  {
    title: 'ADR TS版',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        TypeScript/Reactプロジェクトにおける<br/>ADRの活用方法を学びます。<br/>フロントエンド特有の設計判断の記録。<br/>
      </>
    ),
    link: '/docs/adr_ts/adr_ts_index',
  },
  {
    title: 'YAGNI C#版',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        C#で学ぶYAGNI（You Aren't Gonna Need It）。<br/>「今必要なものだけ作る」技術と<br/>過剰な作り込みを防ぐ設計判断。<br/>
      </>
    ),
    link: '/docs/yagni_cs/yagni_cs_index',
  },
  {
    title: 'YAGNI TS版',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        TypeScriptで実践するYAGNI。<br/>フロントエンド開発における<br/>MVP思考とスコープ管理。<br/>
      </>
    ),
    link: '/docs/yagni_ts/yagni_ts_index',
  },
  {
    title: 'KISS C#版',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        C#版KISS（Keep It Simple, Stupid）。<br/>複雑さを排除し、<br/>読みやすく変更しやすいコードを書く。<br/>
      </>
    ),
    link: '/docs/kiss_cs/kiss_cs_index',
  },
  {
    title: 'KISS TS版',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        TypeScript版KISS。<br/>型安全性と単純さのバランス、<br/>AIを活用したリファクタリング。<br/>
      </>
    ),
    link: '/docs/kiss_ts/kiss_ts_index',
  },
  {
    title: 'SOLID C#版',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        C#で学ぶSOLID原則。<br/>オブジェクト指向設計の基礎から実践まで、<br/>変更に強いコードの書き方を学びます。<br/>
      </>
    ),
    link: '/docs/solid_cs/solid_cs_index',
  },
  {
    title: 'SOLID TS版',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        TypeScriptで学ぶSOLID原則。<br/>React/Node.js開発に活かす設計の基礎。<br/>型安全と柔軟性のバランス。<br/>
      </>
    ),
    link: '/docs/solid_ts/solid_ts_index',
  },
];

function Feature({title, Svg, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Link to={link}>
          <Svg className={styles.featureSvg} role="img" />
        </Link>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
