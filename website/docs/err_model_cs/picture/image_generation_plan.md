# Image Generation Plan: Error Modeling (C#) Study Roadmap

This plan outlines the visual assets required to enhance the study materials (`err_model_cs_study_*.md`). The goal is to provide intuitive, schematic visualizations that clarify abstract error handling and architectural concepts.

## 共通設定 (Based on Style Guide)
*   **Style**: Modern Flat Vector (Clean Line Art).
*   **Visual Metaphors**: Use metaphors (Railway, Guard, Castle, Shield) over complex UML diagrams.
*   **Color Palette**:
    *   **Success/Domain**: Green / Teal / Blue
    *   **Infra/Warning**: Orange / Amber
    *   **Failure/Bug**: Red
*   **Target Audience**: Beginner Japanese developers.
*   **Text Rules**:
    *   **NO Text** generally preferred.
    *   If unavoidable: **English** for Code (e.g., `Result`, `Error`), **Japanese** for Concepts.

## 🖼️ Image List by Chapter

### Chapter 1: Failure as Specification
*   **err_model_cs_study_001_failure_route.png**
    *   *Visual*: A path splitting into two. Top path "Success" (Green). Bottom path "Failure" (Red). Both are cleanly drawn as "Designed Routes".
    *   **Prompt**: `Concept diagram. A flowchart path splitting into two. Top path 'Success' (Green). Bottom path 'Failure' (Red). Both paths are cleanly drawn and labeled as 'Designed'. Flat vector.`
*   **Status**: [ ] Unprocessed

*   **err_model_cs_study_001_purchase_flow.png**
    *   *Visual*: Flowchart of purchasing merch. Success path (Product -> Cart -> Pay). Failure checks (No Stock, No Budget, Network Error) branching off.
    *   **Prompt**: `Flowchart diagram. Main path: 'Product' -> 'Cart' -> 'Payment'. Branching red failure paths: 'No Stock', 'No Budget', 'Network Error'. A comprehensive view of failure points. Clean flat vector.`
    *   **Status**: [ ] Unprocessed

### Chapter 2: Development Environment
*   **err_model_cs_study_002_tech_stack.png**
    *   *Visual*: Icons for VS 2026, .NET 10, C# 14. Futuristic and clean.
    *   **Prompt**: `Tech stack illustration. Icons for 'Visual Studio 2026' (Purple), '.NET 10' (Purple/Blue), 'C# 14' (Green). Futuristic flat style.`
*   **Status**: [ ] Unprocessed

### Chapter 3: Exception Stack Trace
*   **err_model_cs_study_003_throw_vs_throw_ex.png**
    *   *Visual*: Compare "throw;" (Long continuous line) vs "throw ex;" (Line cut short).
    *   **Prompt**: `Comparison diagram. Top: 'throw;' showing a long, continuous timeline of events. Bottom: 'throw ex;' showing the timeline cut short, losing history. Red cut mark. Minimalist.`
*   **Status**: [ ] Unprocessed

*   **err_model_cs_study_003_try_catch_finally.png**
    *   *Visual*: Flow diagram. 'Try' block execution. Arrow to 'Catch' on error. Both arrows meeting at 'Finally'.
    *   **Prompt**: `Flow diagram. Box 'Try'. Arrow to 'Catch' (Red, labeled 'Error'). Both flow into 'Finally' (Blue). 'Finally' runs in all cases. Clean lines flat vector.`
    *   **Status**: [ ] Unprocessed

*   **err_model_cs_study_003_inner_exception_chain.png**
    *   *Visual*: A transparent box (Outer Exception) containing another box (Inner Exception).
    *   **Prompt**: `Concept illustration. A large transparent box labeled 'Outer Exception'. Inside it, a smaller box labeled 'Inner Exception'. Wrapping/Chaining metaphor. Modern flat style.`
    *   **Status**: [ ] Unprocessed

### Chapter 4: Anti-Patterns
*   **err_model_cs_study_004_swallowing_exceptions.png**
    *   *Visual*: A black hole (Empty Catch Block) swallowing a bomb (Exception). A warning sign overlay.
    *   **Prompt**: `Warning metaphor. A cartoon 'catch block' represented as a black hole swallowing a 'Time Bomb' (Error). Red 'No' sign overlay. Don't swallow errors.`
*   **Status**: [ ] Unprocessed

### Chapter 5: Expected vs Unexpected
*   **err_model_cs_study_005_decision_scale.png**
    *   *Visual*: A balance scale. Left side: "Domain Error" (Blue Box). Right side: "Bug" (Red Bomb).
    *   **Prompt**: `Balance scale illustration. Left tray: 'Domain Error' (Blue Box) labeled 'Expected'. Right tray: 'Bug' (Red Bomb) labeled 'Unexpected'. different handling strategies.`
*   **Status**: [ ] Unprocessed

### Chapter 6: Three Categories
*   **err_model_cs_study_006_error_categories.png**
    *   *Visual*: Three distinct buckets/circles. Domain (Blue), Infra (Orange), Bug (Red).
    *   **Prompt**: `Three pillars diagram. Left: 'Domain' (Blue). Center: 'Infrastructure' (Orange). Right: 'Bug' (Red). Classification of error types. Clean flat vector.`
*   **Status**: [ ] Unprocessed

*   **err_model_cs_study_006_classification_flow.png**
    *   *Visual*: A flowchart for classifying errors. Q1 "Domain?" -> Blue. Q2 "Infra?" -> Orange. Q3 "Bug?" -> Red.
    *   **Prompt**: `Flowchart diagram. Step 1: 'Domain Rule?' (Yes -> Blue). Step 2: 'External I/O?' (Yes -> Orange). Step 3: 'Unexpected?' (Yes -> Red). A decision tree for error classification. Clean flat vector.`
    *   **Status**: [ ] Unprocessed

### Chapter 7: Domain Error Record
*   **err_model_cs_study_007_error_card.png**
    *   *Visual*: An ID card representing an Error. Fields shown: Code, Message.
    *   **Prompt**: `Data structure visualization. An ID card labeled 'Error'. Fields: 'Code' (Tag), 'Message' (Speech Bubble), 'Retryable' (Refresh Icon). Flat design.`
*   **Status**: [ ] Unprocessed

*   **err_model_cs_study_007_input_vs_domain.png**
    *   *Visual*: Comparison. Input Error (Format check) vs Domain Error (Business Rule).
    *   **Prompt**: `Comparison illustration. Left: 'Input Error' showing a form field with invalid email format (Red). Right: 'Domain Error' showing a 'Sold Out' tag on a valid product request. Different validation layers.`
    *   **Status**: [ ] Unprocessed

### Chapter 8: Infrastructure Errors
*   **err_model_cs_study_008_transient_vs_permanent.png**
    *   *Visual*: Left: Rain Cloud (Transient - Wait and it clears). Right: Collapsed Bridge (Permanent - Waiting won't help).
    *   **Prompt**: `Comparison concept. Left: 'Transient' showing a rain cloud (temporary). Right: 'Permanent' showing a collapsed bridge (requires repair). Blue vs Orange theme.`
*   **Status**: [ ] Unprocessed

*   **err_model_cs_study_008_retry_decision_logic.png**
    *   *Visual*: A logic flow. "Transient (503)" leads to a Green "Retry Loop". "Permanent (401)" leads to a Red "Stop".
    *   **Prompt**: `Decision logic diagram. Input: 'Error Type'. Path A: 'Transient (e.g. 503)' -> Green 'Retry Loop'. Path B: 'Permanent (e.g. 401)' -> Red 'Stop'. Clear logic flow. Flat vector.`
    *   **Status**: [ ] Unprocessed

### Chapter 9: Fail Fast
*   **err_model_cs_study_009_fail_fast_guard.png**
    *   *Visual*: A security guard stopping Invalid Input at the very gate.
    *   **Prompt**: `Security guard illustration. A guard stopping a red 'Invalid Input' block at the very entrance gate. 'Fail Fast' label. Shield icon.`
*   **Status**: [ ] Unprocessed

### Chapter 10: Exception Boundary
*   **err_model_cs_study_010_castle_wall.png**
    *   *Visual*: A castle wall. Outside arrows (Exceptions) bounce off. Inside is calm (Results).
    *   **Prompt**: `Boundary defense diagram. A castle wall. Outside: 'Exceptions' (Spiky shapes) bouncing off. Inside: 'Results' (Smooth round shapes). Protection metaphor.`
*   **Status**: [ ] Unprocessed

### Chapter 11: Dependency Injection
*   **err_model_cs_study_011_plug_and_socket.png**
    *   *Visual*: Domain (Socket/Interface) and Infra (Plug/Implementation) connecting.
    *   **Prompt**: `Plug and socket illustration. 'Domain' represented as a socket (Interface). 'Infrastructure' represented as a plug (Implementation). Connecting together. Clean lines.`
*   **Status**: [ ] Unprocessed

*   **err_model_cs_study_011_layer_architecture.png**
    *   *Visual*: Concentric circles. Center: 'Domain'. Middle: 'UseCase'. Outer: 'Infra'.
    *   **Prompt**: `Layered architecture diagram. Concentric circles. Core center: 'Domain Errors' (Blue). Middle ring: 'Application' (Green). Outer ring: 'Infrastructure' (Orange). Arrows pointing inward. Clean flat vector.`
    *   **Status**: [ ] Unprocessed

### Chapter 12: Converting Exceptions
*   **err_model_cs_study_012_conversion_machine.png**
    *   *Visual*: A machine taking a jagged Rock (Exception) and turning it into a polished Gem (InfraError).
    *   **Prompt**: `Conversion machine. Input: 'Exception' (Jagged red rock). Processing: Gears turning. Output: 'InfraError' (Polished orange gem). Transformation metaphor.`
*   **Status**: [ ] Unprocessed

### Chapter 13: Error Catalog
*   **err_model_cs_study_013_catalog_book.png**
    *   *Visual*: A well-organized library book labeled "Error Catalog".
    *   **Prompt**: `Icon illustration. A thick book labeled 'Error Catalog'. Open pages showing strict codes and definitions. Organized and structured.`
*   **Status**: [ ] Unprocessed

### Chapter 14: Value-Based Equality
*   **err_model_cs_study_014_record_equality.png**
    *   *Visual*: Two identical Error cards with an "=" sign.
    *   **Prompt**: `Equality check. Two separate but identical index cards labeled 'Error'. An '=' sign between them. Represents value-based equality. Flat vector.`
*   **Status**: [ ] Unprocessed

### Chapter 15: Result Pattern
*   **err_model_cs_study_015_result_box.png**
    *   *Visual*: A box labeled "Result". It can contain a Checkmark (Success) OR an X (Failure), never both.
    *   **Prompt**: `Concept icon. A box labeled 'Result<T>'. Inside, it can hold either a 'Value' (Green Check) OR an 'Error' (Red X), but never both. Exclusive content.`
*   **Status**: [ ] Unprocessed

### Chapter 16: Result States
*   **err_model_cs_study_016_toggle_switch.png**
    *   *Visual*: A toggle switch. Up is Success (Green). Down is Failure (Red).
    *   **Prompt**: `Toggle switch illustration. Position A: 'Success' (Green Light). Position B: 'Failure' (Red Light). Only one state active at a time.`
*   **Status**: [ ] Unprocessed

### Chapter 17: AppError Anatomy
*   **err_model_cs_study_017_app_error_structure.png**
    *   *Visual*: An exploded view of an AppError object. Core: Code. Orbiting: UserMsg, Category, Action.
    *   **Prompt**: `Infographic of an error object. Central core: 'Code'. Satellites: 'UserMsg' (Bubble), 'Category' (Color), 'Retryable' (Icon). Deconstructive view.`
    *   **Status**: [ ] Unprocessed

*   **err_model_cs_study_017_ui_vs_log.png**
    *   *Visual*: Split screen. Left: UI showing a simple toast "Out of Stock". Right: Log showing a detailed JSON block. Separation of concerns.
    *   **Prompt**: `Comparison illustration. Split screen. Left side: 'UI' showing a simple phone notification 'Out of Stock'. Right side: 'Log' showing a detailed JSON data block with internal IDs. separation of concerns. Flat vector.`
    *   **Status**: [ ] Unprocessed

### Chapter 18: Railway Switching
*   **err_model_cs_study_018_railway_switch.png**
    *   *Visual*: Train tracks splitting. Main line (Success). Siding (Failure).
    *   **Prompt**: `Railway tracks splitting. Main track enters 'Match'. Splits into 'Success' path (Green scenery) and 'Failure' path (Red warning signs). Flow control.`
*   **Status**: [ ] Unprocessed

### Chapter 19: Propagation
*   **err_model_cs_study_019_railway_stations.png**
    *   *Visual*: A train line with 3 stations. Success train passes all. Failure train takes an early exit at station 1 or 2.
    *   **Prompt**: `Railway Oriented Programming diagram. Three stations in a row. Green track connects them all. Red exit tracks at each station. 'Early Return' concept.`
*   **Status**: [ ] Unprocessed

*   **err_model_cs_study_019_guard_clause_stairs.png**
    *   *Visual*: Comparison. Nested (Deep stairs) vs Guard Clause (Flat road).
    *   **Prompt**: `Comparison metaphor. Left: 'Nested Code' shown as deep, dangerous stairs going down. Right: 'Guard Clause' shown as a flat, straight road with small side exits. Readability visualization.`
    *   **Status**: [ ] Unprocessed

### Chapter 20: Mapping Table
*   **err_model_cs_study_020_translation_map.png**
    *   *Visual*: A table mapping "Exception" to "Error Code". Arrows connecting them.
    *   **Prompt**: `Translation table. Left column: 'Exceptions' (Code text). Right column: 'Error Codes' (Tags). Arrows connecting them. Mapping logic.`
*   **Status**: [ ] Unprocessed

### Chapter 21: Status Buckets
*   **err_model_cs_study_021_http_traffic_lights.png**
    *   *Visual*: Traffic lights. Green (200), Yellow (4xx), Red (5xx).
    *   **Prompt**: `Traffic lights metaphor. '200 OK' (Green Light). '400 Bad Request' (Yellow/Orange Light). '500 Server Error' (Red Light). Status buckets.`
*   **Status**: [ ] Unprocessed

*   **err_model_cs_study_021_status_decision_tree.png**
    *   *Visual*: A long vertical decision tree. Auth? -> 401. Exists? -> 404. Validation? -> 400. Logic? -> 409.
    *   **Prompt**: `Decision tree for HTTP status. Top node: 'Auth?'. Branches to '401/403'. Next node: 'Exists?'. Branches to '404'. Next node: 'Input?'. Branches to '400'. Vertical flow. Flat vector.`
    *   **Status**: [ ] Unprocessed

*   **err_model_cs_study_021_409_vs_422.png**
    *   *Visual*: Comparison. 409 (Conflict) vs 422 (Unprocessable).
    *   **Prompt**: `Comparison metaphor. '409 Conflict': Two cars trying to park in the same spot. '422 Unprocessable': A machine rejecting a weirdly shaped part (correct material, wrong shape). Status code visual.`
    *   **Status**: [ ] Unprocessed

### Chapter 22: ProblemDetails
*   **err_model_cs_study_022_problem_details_doc.png**
    *   *Visual*: A standardized document icon labeled RFC 9457. Sections: type, title, status.
    *   **Prompt**: `Document icon. A sheet of paper labeled 'RFC 9457'. structured sections: 'type', 'title', 'status'. Standardized format symbol.`
*   **Status**: [ ] Unprocessed

### Chapter 23: UI Feedback Types
*   **err_model_cs_study_023_ui_feedback.png**
    *   *Visual*: A screen showing a Toast (Network Error) and an Input Error (Field).
    *   **Prompt**: `UI composition. Top: A toaster notification labeled 'Network Error'. Bottom: A red input field labeled 'Invalid Email'. Different error presentations.`
*   **Status**: [ ] Unprocessed

*   **err_model_cs_study_023_ui_patterns.png**
    *   *Visual*: 4 UI patterns. Field, Banner, Dialog, Toast.
    *   **Prompt**: `UI patterns catalog. Four mini-screens arranged in a grid. 1. Field Error (Red text). 2. Top Banner (Warning). 3. Center Dialog (Critical). 4. Bottom Toast (Info). Web design components.`
    *   **Status**: [ ] Unprocessed

### Chapter 24: Structured Logging
*   **err_model_cs_study_024_structured_log.png**
    *   *Visual*: A clean JSON block representing a log entry. Searchable.
    *   **Prompt**: `Data visualization. A log entry shown as a neat JSON block. Keys: 'UserId', 'Path', 'Error'. Searchable structure metaphor.`
*   **Status**: [ ] Unprocessed

### Chapter 25: Correlation Trace
*   **err_model_cs_study_025_correlation_thread.png**
    *   *Visual*: A glowing thread connecting User -> API -> DB. Labeled "TraceID".
    *   **Prompt**: `Traceability diagram. A simplified glowing thread passing through 'Client', 'API', 'DB'. The thread is labeled 'TraceID'. Continuity metaphor.`
*   **Status**: [ ] Unprocessed
