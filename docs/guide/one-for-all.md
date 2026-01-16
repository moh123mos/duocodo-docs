<!-- <meta charset="utf-8"> -->
<!--  -->
<!-- <script src="https://unpkg.com/pagedjs/dist/paged.polyfill.js"></script> -->

<style>
  :root {
    --primary: #2c3e50;
    --secondary: #3498db;
    --accent: #e74c3c;
    --light: #f8f9fa;
    --dark: #343a40;
    --success: #28a745;
    --warning: #ffc107;
    --info: #17a2b8;
  }
    
  .one-for-all {
    position: relative;
    font-family: 'Times New Roman', Times, serif !important;

    ul, ul ul, ul ul ul {
      list-style-type: none;
    }

    ul, ol {
      margin: 15px 0;
      padding-left: 30px;
    }

    ul li {
      margin: 8px 0;
      position: relative;
    }

    ul li::before {
      content: "▸";
      color: var(--secondary);
      font-weight: bold;
      position: absolute;
      left: -20px;
    }

    ul ul li::before {
      content: "\25Aa";
      color: var(--secondary);
      font-weight: bold;
      position: absolute;
      left: -20px;
    }

    ul ul ul li::before {
      content: "\25AB";
      color: var(--secondary);
      font-weight: bold;
      position: absolute;
      left: -20px;
    }

    ol li::before {
      color: var(--secondary);
      font-weight: bold;
      position: absolute;
      left: -25px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      border-radius: 5px;
      overflow: hidden;
    }

    th {
      background: var(--primary);
      color: white;
      padding: 12px 15px;
      text-align: left;
      font-weight: 600;
    }

    td {
      padding: 10px 15px;
      border-bottom: 1px solid #dee2e6;
    }

    tr:nth-child(even) {
      background: var(--light);
        color: var(--dark);
    }

    code {
      background: #f8f9fa;
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
      font-size: 0.9em;
      border: 1px solid #e9ecef;
    }

    strong {
      font-weight: 700;
      padding: 2px 4px;
    }

    p, strong, li {
      word-spacing: 5px;
      letter-spacing: 0.5px;
    }

    li::marker {
      word-spacing: normal;
      letter-spacing: normal;
    }

    figure {
      margin: 20px auto;
      text-align: center;
      padding: 10px;
      border: 1px solid #dee2e6;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }

    figure img {
      max-width: 100%;
      height: auto;
      border-radius: 5px;
      break-after: avoid;
    }

    figure figcaption {
      margin-top: 10px;
      font-size: 0.9em;
      font-style: italic;
      break-before: avoid;
    }

    .highlight-box {
      background: #e8f4fc;
      border-left: 4px solid var(--secondary);
      padding: 15px 20px;
      margin: 20px 0;
      color: #333;
      border-radius: 0 5px 5px 0;
    }

    .chapter {
      background: var(--primary);
      color: white;
      padding: 12px 20px;
      /* margin: 40px 0 20px 0; */
      border-radius: 5px;
      font-size: 20px;
      font-weight: bold;
    }

    .chapter::before {
      content: "Chapter";
      background: var(--secondary);
      padding: 4px 10px;
      border-radius: 3px;
      font-size: 14px;
      margin-right: 10px;
    }

    .section {
      color: var(--primary);
      border-left: 4px solid var(--secondary);
      padding: 8px 15px;
      margin: 25px 0 15px 0;
      background: var(--light);
      font-size: 18px;
      font-weight: 600;
      border-start-end-radius: 5px;
      border-end-end-radius: 5px;
    }

    .subsection {
      border-bottom: 2px solid var(--secondary);
      padding-bottom: 8px;
      margin: 20px 0 12px 0;
      font-size: 16px;
      font-weight: 600;
    }

    .chapter {
      break-before: page;
    }

    .section, .subsection, .figure, .highlight-box, table, ul {
      break-inside: avoid;
    }

    h1, h2, h3, h4, h5, h6 {
      page-break-after: avoid;
    }

    h2 {
      border-top: none;
    }
  }

  /* Use Case Title Styling */
  .usecase-title {
    color: var(--primary);
    padding: 12px 20px;
    margin: 30px 0 20px 0;
    border-radius: 5px;
    font-size: 20px;
    font-weight: bold;
    background: white;
    border: 2px solid var(--secondary);
    border-left: 6px solid var(--secondary);
    box-shadow: 0 2px 4px rgba(0,0,0,0.08);
    position: relative;
  }

  .usecase-title::before {
    content: "UC";
    background: var(--secondary);
    color: white;
    padding: 3px 8px;
    border-radius: 3px;
    font-size: 12px;
    margin-right: 12px;
    font-weight: 600;
  }

  /* Brief Format - Minimal styling */
  .brief-usecase {
    background: var(--light);
    border-left: 4px solid var(--info);
    padding: 15px 20px;
    margin: 15px 0;
    border-radius: 0 5px 5px 0;
  }

  .brief-usecase .title {
    font-weight: bold;
    color: var(--primary);
    font-size: 16px;
    margin-bottom: 8px;
  }

  .brief-usecase .description {
    color: #555;
    font-size: 14px;
  }

  /* Casual & Fully Dressed Format Metadata */
  .usecase-meta {
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    padding: 15px 20px;
    margin: 15px 0;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }

  .usecase-meta .meta-item {
    margin: 8px 0;
    display: flex;
    align-items: baseline;
  }

  .usecase-meta .meta-label {
    font-weight: 700;
    color: var(--primary);
    min-width: 180px;
    position: relative;
    padding-left: 20px;
  }

  .usecase-meta .meta-label::before {
    content: "▸";
    color: var(--secondary);
    position: absolute;
    left: 0;
    font-weight: bold;
  }

  .usecase-meta .meta-value {
    color: var(--dark);
    flex: 1;
  }

  /* Stakeholders section */
  .stakeholders {
    background: #f8f9fa;
    border-left: 3px solid var(--info);
    padding: 12px 18px;
    margin: 12px 0;
    border-radius: 0 4px 4px 0;
  }

  .stakeholders .stakeholder-item {
    margin: 8px 0;
  }

  .stakeholders .stakeholder-role {
    font-weight: 700;
    color: var(--primary);
  }

  /* Main Success Scenario */
  .main-scenario {
    margin: 20px 0;
  }

  .scenario-header {
    background: var(--primary);
    color: white;
    padding: 10px 18px;
    font-weight: 600;
    font-size: 16px;
    border-radius: 5px 5px 0 0;
    margin-bottom: 0;
  }

  .scenario-steps {
    background: white;
    border: 2px solid var(--primary);
    border-top: none;
    border-radius: 0 0 5px 5px;
    padding: 20px 25px;
    counter-reset: step-counter;
  }

  .scenario-steps .step {
    margin: 12px 0;
    padding-left: 35px;
    position: relative;
    counter-increment: step-counter;
  }

  .scenario-steps .step::before {
    content: counter(step-counter) ".";
    position: absolute;
    left: 0;
    font-weight: bold;
    color: var(--secondary);
    font-size: 15px;
  }

  /* Sub-steps */
  .scenario-steps .sub-step {
    margin: 8px 0 8px 25px;
    padding-left: 25px;
    position: relative;
    font-size: 14px;
    color: #555;
  }

  .scenario-steps .sub-step::before {
    content: "◦";
    position: absolute;
    left: 0;
    color: var(--secondary);
    font-weight: bold;
  }

  /* System messages */
  .system-message {
    background: #e8f4fc;
    border-left: 3px solid var(--info);
    padding: 8px 15px;
    margin: 8px 0 8px 35px;
    border-radius: 0 4px 4px 0;
    font-style: italic;
    color: #2c3e50;
    font-size: 14px;
  }

  .system-message::before {
    content: "💬 ";
    margin-right: 5px;
  }

  /* Alternative Scenarios */
  .alternative-scenarios {
    margin: 25px 0;
  }

  .alt-scenario-header {
    background: var(--warning);
    color: var(--dark);
    padding: 10px 18px;
    font-weight: 600;
    font-size: 16px;
    border-radius: 5px 5px 0 0;
    margin-bottom: 0;
  }

  .alt-scenarios-container {
    background: #fffbf0;
    border: 2px solid var(--warning);
    border-top: none;
    border-radius: 0 0 5px 5px;
    padding: 20px 25px;
  }

  .alt-scenario-item {
    margin: 20px 0;
    padding: 15px;
    background: white;
    border-left: 4px solid var(--warning);
    border-radius: 0 5px 5px 0;
  }

  .alt-scenario-item .alt-title {
    font-weight: 700;
    color: var(--accent);
    font-size: 15px;
    margin-bottom: 8px;
  }

  .alt-scenario-item .alt-description {
    margin: 5px 0 5px 15px;
    color: #555;
  }

  /* Extensions */
  .extensions {
    margin: 25px 0;
  }

  .extensions-header {
    background: var(--success);
    color: white;
    padding: 10px 18px;
    font-weight: 600;
    font-size: 16px;
    border-radius: 5px 5px 0 0;
    margin-bottom: 0;
  }

  .extensions-container {
    background: #f0f9f4;
    border: 2px solid var(--success);
    border-top: none;
    border-radius: 0 0 5px 5px;
    padding: 20px 25px;
  }

  .extension-item {
    margin: 20px 0;
    padding: 15px;
    background: white;
    border-left: 4px solid var(--success);
    border-radius: 0 5px 5px 0;
  }

  .extension-item .ext-title {
    font-weight: 700;
    color: var(--success);
    font-size: 15px;
    margin-bottom: 8px;
  }

  /* Special Requirements */
  .special-requirements {
    background: #fff3e0;
    border: 2px solid var(--warning);
    border-radius: 5px;
    padding: 20px;
    margin: 20px 0;
  }

  .special-requirements .req-header {
    font-weight: 700;
    color: var(--primary);
    font-size: 16px;
    margin-bottom: 12px;
    padding-bottom: 8px;
    border-bottom: 2px solid var(--warning);
  }

  .special-requirements ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  .special-requirements li {
    margin: 8px 0;
    padding-left: 25px;
    position: relative;
  }

  .special-requirements li::before {
    content: "⚡";
    position: absolute;
    left: 0;
    color: var(--warning);
  }

  /* Frequency & Open Issues */
  .metadata-section {
    background: var(--light);
    border-left: 4px solid var(--secondary);
    padding: 15px 20px;
    margin: 15px 0;
    border-radius: 0 5px 5px 0;
  }

  .metadata-section .section-label {
    font-weight: 700;
    color: var(--primary);
    font-size: 15px;
    margin-bottom: 8px;
  }

  .metadata-section .section-content {
    color: #555;
    margin-left: 15px;
  }

  /* Horizontal separator */
  .usecase-separator {
    border: none;
    border-top: 3px double var(--secondary);
    margin: 40px 0;
  }

  /* General list styling within use cases */
  .scenario-steps ul,
  .alt-scenarios-container ul,
  .extensions-container ul {
    list-style: none;
    padding-left: 0;
    margin: 10px 0;
  }

  .scenario-steps ul li,
  .alt-scenarios-container ul li,
  .extensions-container ul li {
    margin: 6px 0;
    padding-left: 20px;
    position: relative;
  }

  .scenario-steps ul li::before,
  .alt-scenarios-container ul li::before,
  .extensions-container ul li::before {
    content: "▸";
    color: var(--secondary);
    font-weight: bold;
    position: absolute;
    left: 0;
  }

  /* Page break rules for use cases */
  .usecase-title,
  .scenario-header,
  .alt-scenario-header,
  .extensions-header,
  .req-header {
    break-after: avoid;
  }

  @page {
    border: 4px double #3398da;
    margin: 2cm 1.5cm;
    padding: 25px 25px;
    color: var(--vp-c-text-1);
    background: var(--vp-c-bg);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;

    .section {
      color: var(--primary);
    }

    .subsection {
      color: var(--dark);
    }
  }

  @counter-style three-digit {
    system: extends decimal;
    pad: 3 "0";
  }

  @page:right {
    @bottom-right {
      content: counter(page, three-digit);
      font-family: 'Montserrat', sans-serif;
      font-size: 7pt;
      font-weight: 200;
      color: #00d4ff;
      
      display: table-cell;
      vertical-align: middle;
      text-align: center;
      
      width: 25px;
      height: 15px;
      
      background: linear-gradient(180deg, #1a2f3f 0%, #0d1821 100%);
      border: 1px solid #00d4ff;
      border-radius: 8px;
      margin-top: 10px;
      margin-left: -12px;
    }
  }
  
  @page:left {
    @bottom-left {
      content: counter(page, three-digit);
      font-family: 'Montserrat', sans-serif;
      font-size: 7pt;
      font-weight: 200;
      color: #00d4ff;
      
      display: table-cell;
      vertical-align: middle;
      text-align: center;
      
      width: 25px;
      height: 15px;
      
      background: linear-gradient(180deg, #1a2f3f 0%, #0d1821 100%);
      border: 1px solid #00d4ff;
      border-radius: 8px;
      margin-top: 10px;
      margin-left: 12px;
    }
  }
  
  .toc {
    page-break-after: always;
    padding: 20px;
    margin: 40px 0;
    border: 1px solid #e0e0e0;
    background-color: #fafafa;
  }

  .toc-header {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 30px;
    padding-bottom: 15px;
    border-bottom: 2px solid #3498db;
  }

  .toc ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  .toc > ul > li {
    margin-bottom: 15px;
  }

  .toc ul ul {
    padding-left: 30px;
    margin-top: 8px;
  }

  .toc ul ul li {
    margin-bottom: 8px;
  }

  .toc a {
    text-decoration: none;
    color: #2c3e50;
    display: block;
    position: relative;
    padding-right: 40px;
    line-height: 1.8;
    padding-bottom: 8px;
  }

  .toc a::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 40px;
    border-bottom: 1px dotted #bdc3c7;
  }

  .toc a::after {
    content: target-counter(attr(href), page);
    position: absolute;
    right: 0;
    bottom: 0;
    font-weight: normal;
    color: black;
    background-color: #fafafa;
    padding-left: 5px;
    padding-bottom: 6px;
  }

  .toc > ul > li > a {
    font-weight: bold;
    font-size: 16px;
    color: #2c3e50;
  }

  .toc ul ul a {
    font-size: 14px;
    font-weight: normal;
    color: #555;
  }

  .toc a:hover {
    color: #3498db;
  }

  .lof {
    page-break-after: always;
    padding: 20px;
    margin: 40px 0;
    border: 1px solid #e0e0e0;
    background-color: #fafafa;
  }

  .lof-header {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 30px;
    padding-bottom: 15px;
    border-bottom: 2px solid #3498db;
  }

  .lof ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  .lof > ul > li {
    margin-bottom: 15px;
  }

  .lof a {
    text-decoration: none;
    color: #2c3e50;
    display: block;
    position: relative;
    padding-right: 40px;
    line-height: 1.8;
    padding-bottom: 18px;
  }

  .lof a::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 40px;
    border-bottom: 1px dotted #bdc3c7;
  }

  .lof a::after {
    content: target-counter(attr(href), page);
    position: absolute;
    right: 0;
    bottom: 0;
    font-weight: bold;
    color: black;
    background-color: #fafafa;
    padding-left: 5px;
    padding-bottom: 15px;
  }

  .lof > ul > li > a {
    font-weight: normal;
    font-size: 14px;
    color: #555;
  }

  .lof a:hover {
    color: #3498db;
  }
</style>

<div class="toc">

#### <div class="toc-header">Table of Contents</div>

<!-- toc -->

- [Chapter 1: Project Overview](#chapter-1-project-overview)
  * [1.1 Main Idea](#main-idea)
  * [1.2 Project Scope](#project-scope)
  * [1.3 Problem Statement](#problem-statement)
  * [1.4 Solution Approach](#solution-approach)
  * [1.5 Project Objectives](#project-objectives)
- [Chapter 2: Project Background](#chapter-2-project-background)
  * [2.1 Project Background](#project-background)
  * [2.2 Related Work](#related-work)
  * [2.3 Summary](#summary)
- [Chapter 3: Feasibility and Project Planning](#chapter-3-feasibility-and-project-planning)
  * [3.1 Feasibility Study](#feasibility-study)
  * [3.2 Risk Management](#risk-management)
  * [3.3 Project plan](#project-plan)
  * [3.4 Gantt Chart](#gantt-chart)
- [Chapter 4: System Analysis](#chapter-4-system-analysis)
  * [4.1 Function Requirements](#function-requireements)
  * [4.2 Non-Function Requirements](#non-function-requirements)
  * [4.3 Functional Decomposition](#functional-decomposition)
- [Chapter 5: System Architecture](#chapter-5-system-architecture)
  * [5.1 Actor-goal List](#actor-goal-list)
  * [5.2 Use Cases Diagram](#use-cases-diagram)
  * [5.3 Use Cases Format](#use-cases-format)
  * [5.4 Sequence Diagram](#sequence-diagram)
  * [5.5 Class Diagram](#class-diagram)
- [Chapter 6: Database Design](#chapter-6-database-design)
  * [6.1 Entity Relationship Diagram](#entity-relationship-diagram)
  * [6.2 Database Schema](#database-schema)

<!-- tocstop -->

</div>

<div class="lof">

#### <div class="lof-header">List of Figures</div>

- [Figure 3.1: Development Team Roles](#Figure31)
- [Figure 3.2: Net Profit per Year](#Figure32)
- [Figure 3.3: Cumulative Revenue vs Cumulative Cost](#Figure33)
- [Figure 4.1: Decomposition Diagram Part 1](#Figure41)
- [Figure 4.2: Decomposition Diagram Part 2](#Figure42)
- [Figure 5.1: Use Cases Diagram](#Figure51)
- [Figure 5.2: Manage User Accounts](#Figure52)
- [Figure 5.3: Assign User Role](#Figure53)
- [Figure 5.4: Monitor Platform Analytics](#Figure54)
- [Figure 5.5: Review And Filter System Logs](#Figure55)
- [Figure 5.6: Remove Inappropriate Content](#Figure56)
- [Figure 5.7: Issue User Warning](#Figure57)
- [Figure 5.8: Design Learning Path](#Figure58)
- [Figure 5.9: Register Account](#Figure59)
- [Figure 5.10: Login to System](#Figure510)
- [Figure 5.11: Create Course](#Figure511)
- [Figure 5.12: Create Lesson](#Figure512)
- [Figure 5.13: Add Multimedia Content](#Figure513)
- [Figure 5.14: Localize Content](#Figure514)
- [Figure 5.15: Categorize Exercise Difficulty](#Figure515)
- [Figure 5.16: Udate Course Materials](#Figure516)
- [Figure 5.17: Review Student Submissions](#Figure517)
- [Figure 5.18: Manage Course Structure](#Figure518)
- [Figure 5.19: Create Coding Exercise](#Figure519)
- [Figure 5.20: Validate Exercise before Publishing](#Figure520)
- [Figure 5.21: Contribute to Learning Path](#Figure521)
- [Figure 5.22: Register Account](#Figure522)
- [Figure 5.23: Login to System](#Figure523)
- [Figure 5.24: Recover password](#Figure524)
- [Figure 5.25: Choose Learning Path](#Figure525)
- [Figure 5.26: View Lesson Content](#Figure526)
- [Figure 5.27: Complete Exercise](#Figure527)
- [Figure 5.28: Track Progress](#Figure528)
- [Figure 5.29: Learn XP and Level Up](#Figure529)
- [Figure 5.30: Set Language Preferences](#Figure530)
- [Figure 5.31: Bookmark Lesson](#Figure531)
- [Figure 5.32: Share Solution](#Figure532)
- [Figure 5.33: Enable Two-factor Authontecation](#Figure533)
- [Figure 5.34: Practice Coding](#Figure534)
- [Figure 5.35: Practice Coding with Blockly Editor](#Figure535)
- [Figure 5.36: Receive AI-Powered Hints](#Figure536)
- [Figure 5.37: Complete Certification Track](#Figure537)
- [Figure 5.38: Class Diagram - Core User and Authentication System](#Figure538)
- [Figure 5.39: Class Diagram - Learning Content Management](#Figure539)
- [Figure 5.40: Class Diagram - Submissions and Code Execution](#Figure540)
- [Figure 5.41: Class Diagram - Exercises, Attempts and Code Analysis](#Figure541)
- [Figure 5.42: Class Diagram - Certification and Gamification](#Figure542)
- [Figure 5.43: Class Diagram - Administration and Platform Management](#Figure543)
- [Figure 6.1: Entity Relationship Diagram - User Management and Authentication](#Figure61)
- [Figure 6.2: Entity Relationship Diagram - Learning Content and Course Structure](#Figure62)
- [Figure 6.3: Entity Relationship Diagram - Submissions and Code Execution](#Figure63)
- [Figure 6.4: Entity Relationship Diagram - Exercises, Attempts and Code Analysis](#Figure64)
- [Figure 6.5: Entity Relationship Diagram - Certification and Gamification](#Figure65)
- [Figure 6.6: Entity Relationship Diagram - Administration and System Management](#Figure66)
- [Figure 6.7: Database Schema - User Management and Authentication](#Figure67)
- [Figure 6.8: Database Schema - Learning Content and Course Structure](#Figure68)
- [Figure 6.9: Database Schema - Submissions and COde Execution](#Figure69)
- [Figure 6.10: Database Schema - Exercises, Attempts and Code Analysis](#Figure610)
- [Figure 6.11: Database Schema - Certification and Gamification](#Figure611)
- [Figure 6.12: Database Schema - Administration and System Management](#Figure612)

</div>

<div class="lof">

#### <div class="lof-header">List of Tables</div>

- [Table 2.1: Elzero Web School](#table1)
- [Table 2.2: Codeforces](#table2)
- [Table 2.3: CodeChef](#table3)
- [Table 2.4: HackerRank](#table4)
- [Table 2.5: LeetCode](#table5)
- [Table 2.6: TopCoder](#table6)
- [Table 2.7: AtCoder](#table7)
- [Table 2.8: CodinGame](#table8)
- [Table 2.9: CodeCombat](#table9)
- [Table 2.10: Codewars](#table10)
- [Table 2.11: CheckiO](#table11)
- [Table 3.1: Development and Operational Costs](#table12)
- [Table 3.2: Financial Projections](#table13)
- [Table 3.3: Technical Risks](#table14)
- [Table 3.4: Project Management Risks](#table15)
- [Table 3.5: Legal and Compliance Risks](#table16)
- [Table 5.1: Actors and Goals List](#table17)

</div>

<div class="one-for-all">

## <div id="chapter-1-project-overview" class="chapter">Chapter 1: Project Overview</div>

### <div id="main-idea" class="section">1.1 Main Idea</div>

We aim to create a Duolingo-inspired programming education platform that transforms how beginners learn to code by eliminating overwhelm through structured, gamified micro-lessons. Unlike fragmented resources, this platform provides a clear, progressive learning path—from core programming fundamentals to advanced topics like OOP, algorithms, and web development—all delivered via multi-format explanations (articles, videos, and guided walkthroughs).  

At its core, the platform seamlessly integrates:  
<ol>
  <div class="highlight-box">
    <li>
      <bold>Interactive Practice & Feedback:</bold>
      <ul>
        <li>An in-browser code editor (supporting Python and JavaScript) with real-time execution, syntax highlighting, and instant error diagnostics.</li>
        <li>Hands-on exercises featuring model solutions and optional complexity analysis to deepen understanding of code efficiency.</li>
      </ul>
    </li>
  </div>
  <div class="highlight-box">
    <li>
      <bold>Motivational Gamification:</bold>
      <ul>
        <li>XP systems, unlockable levels, daily streaks, and skill badges to reward consistency.</li>
        <li>Global leaderboards competitions to fuel engagement.</li>
      </ul>
    </li>
  </div>
  <div class="highlight-box">
    <li>
      <bold>Personalized Progress Tracking:</bold>
      <ul>
        <li>Visual roadmaps highlighting completed, active, and upcoming modules.</li>
        <li>Mastery dashboards quantifying skill growth and retention.</li>
      </ul>
    </li>
  </div>
</ol>

By combining structured curriculum, instant feedback, and social accountability, the platform turns programming education into an addictive, confidence-building journey—making learning feel like play while ensuring tangible skill development.


### <div id="project-scope" class="section">1.2 Project Scope</div>

## Extended Project Scope  

#### <div class="subsection">1. Comprehensive Curriculum & Content  </div>
   - Structured Learning Path:  
     - Tiered modules from absolute fundamentals (variables, loops) to advanced domains (OOP, algorithms, web frameworks, databases).  
     - Specialized tracks for Python, JavaScript, and full-stack development.  
   - Multi-Format Delivery:  
     - Concept primers: Short videos + annotated articles.  
     - Interactive Chat Learning: AI mascot chatbot for conversational explanations.  

#### <div class="subsection">2. Intelligent Code Editor  </div>
   - Multi-Language Support:
     - Browser-based execution for Python, JavaScript, HTML/CSS, and more.  
   - Enhanced Developer Experience:
     - Real-time syntax + error highlighting, auto-completion, and debugging hints.  
   - Accessibility:
     - Dark/light mode, keyboard shortcuts.  

#### <div class="subsection">3. Dynamic Interactive Exercises  </div>
   - Adaptive Challenges:  
     - Exercises auto-adjust difficulty based on user performance.  
     - "Fix-the-Bug" tasks: Debug pre-written flawed code.  
   - Deep-Dive Analysis:  
     - Runtime complexity breakdowns (Big O notation).  
     - Memory/performance metrics for optimization practice.  
   - Solution Libraries:  
     - Model answers + multiple approach comparisons (e.g., iterative vs. recursive).  

#### <div class="subsection">4. Advanced Gamification System  </div>
   - Engagement Mechanics:  
     - Daily streaks, skill-specific badges (e.g., "Algorithm Ace"), and XP bonuses for consistency.  
     - Unlockable content: Secret lessons or tools for high achievers.  
   - Competitive Elements:  
     - Global/weekly leaderboards (XP-based).  

#### <div class="subsection">5. Personalized Progress Ecosystem  </div>
   - Learning Analytics:  
     - Mastery dashboards showing skill proficiency (e.g., "Data Structures: 85%").  
     - Time-tracking: Session duration, concepts revisited.  

#### <div class="subsection">6. Accessibility & Scalability  </div>
   - Mobile-responsive design: Seamless tablet/phone access.  
   - Offline mode: Download lessons/exercises for practice without internet.  

---  

### <div id="problem-statement" class="section">1.3 Problem Statement</div>

Learning programming remains a daunting barrier for beginners, exacerbated by *four core gaps* in existing solutions:  

1. Structural Deficiency:  
   - Resources are fragmented (video tutorials, disjointed exercises) with no coherent progression, leaving learners adrift.  
   - *Advanced topics* (OOP, algorithms) feel inaccessible without scaffolded skill-building.  

2. Practice-Explanation Misalignment:  
   - Passive video/article consumption fails to translate to coding competence.  
   - Feedback is delayed or absent, leading to reinforcement of errors and frustration.  

3. Motivation Erosion:  
   - Isolated learning lacks psychological hooks (rewards, social accountability) to sustain consistency.  
   - *80% of beginners quit within 3 months* due to diminishing confidence.  


### <div id="solution-approach" class="section">1.4 Solution Approach</div>

To bridge these gaps, the platform leverages Duolingo’s engagement model fused with developer-centric depth:  

#### <div class="subsection">A. Structured Yet Adaptive Onboarding  </div>
<div class="highlight-box">
  <ul>
    <li>Skill Tree Curriculum:</li>  
    <ul>
      <li><i>Tiered modules</i> map concepts from syntax basics → real-world stacks (e.g., Flask/React).</li>
      <li>Diagnostic quizzes auto-route learners to optimal starting points.</li>
    </ul>
    <li>Bite-Sized, Multi-Modal Lessons:</li> 
    <ul>
      <li>Concepts taught via &lt 5-min videos, annotated snippets, and interactive sandboxes—all in one flow.</li>
    </ul>
  </ul>
</div>

#### <div class="subsection">B. Contextual Practice Engine  </div>
<div class="highlight-box">
  <ul>
    <li>AI-Assisted Feedback:</li>
    <ul>
      <li>
          Real-time error explanations + debugging hints (e.g., “Your loop exits early: check conditionals!”).
      </li>
    </ul>
    <li>Exercise Evolution:</li>
    <ul>
      <li>Adaptive difficulty: Problems scale complexity based on user mastery.</li>
      <li>Project Sprints: Build <i>portfolio-ready micro-apps</i> (e.g., API-driven weather dashboard).</li>
    </ul>
  </ul>
</div>

#### <div class="subsection">C. Gamification × Depth  </div>
<div class="highlight-box">
  <ul>
    <li>Progressive Unlock System:</li>
    <ul>
      <li>Earn XP/badges for <i>accuracy</i>, <i>efficiency</i> (e.g., “O(1) Solver”), and <i>streaks</i>.</li>
    </ul>
    <li>Competitive Depth:</li>
    <ul>
      <li>Leaderboards rank speed (solved in 30s) vs. elegance (least code lines).</li>
    </ul>
    <li>Complexity Playgrounds:</li>
    <ul>
      <li>Visualize Big O trade-offs via interactive graph comparisons (e.g., O(n²) vs. O(n log n)).</li>
    </ul>
  </ul>
</div>

#### <div class="subsection">D. Personalized Reinforcement  </div>
<div class="highlight-box">
  <ul>
    <li>Predictive Roadmaps:</li>
    <ul>
      <li>Weakness-targeted challenges (e.g., “Struggling with callbacks? Try these 3 exercises!”).</li>
    </ul>
    <li>Mastery Analytics:</li>
    <ul>
      <li>Heatmaps track concept retention + time-to-proficiency across skills.</li>
    </ul>
  </ul>
</div>  

---  

### <div id="project-objectives" class="section">1.5 Project Objectives</div>

#### <div class="subsection">1. Deliver a Progressive, Mastery-Based Curriculum  </div>
- Modular Skill Tiers: Implement 10+ competency levels (Novice → Architect) with checkpoint assessments for each tier.  
- Cross-Language Tracks: Offer specialized paths for Python (Data Science/Backend), JavaScript (Frontend/Full-Stack), and Algorithms.  
- Real-World Alignment: Integrate industry frameworks (e.g., React, Flask) and tools (Git, APIs) into advanced modules.  

#### <div class="subsection">2. Build an Intelligent, Adaptive Practice Ecosystem  </div>
- AI-Driven Exercise Engine:  
  - Generate personalized problem sets targeting weak areas (e.g., "80% accuracy on recursion? Try these 5 challenges!").  
  - Auto-graded projects with rubrics for code quality, efficiency, and creativity.  
- Multi-Layer Feedback:  
  - Provide instant syntax corrections, runtime error diagnostics, and performance benchmarks (CPU/memory usage).  

#### <div class="subsection">3. Gamify Learning with Depth & Nuance  </div>
- Tiered Reward System:  
  - Award skill-specific badges (e.g., "Memory Optimizer") + rarity tiers (Bronze → Platinum).  
  - "Double-or-Quit" streaks: Bonus XP for consecutive days, reset on skip.  
- Competitive Arenas:  
  - Host weekly efficiency leagues (lowest Big O wins) and speed sprints (fastest debugger).  

#### <div class="subsection">4. Enable Hyper-Personalized Tracking  </div>
- Predictive Analytics Dashboard:  
  - Visualize skill decay (e.g., "Arrays mastery ↓15% in 2 weeks") and recommend refreshers.  
  - Track efficiency gains (e.g., "Reduced solution time by 40% this month").  
- Custom Roadmapping:  
  - Let users build goal-oriented playlists ("Prep for FAANG Interviews" → auto-adds relevant exercises).  

#### <div class="subsection">5. Ensure Accessibility & Scalability  </div>
- Inclusive Design:  
  - Support screen readers, keyboard navigation, and color-blind modes.  
  - Offer text-to-speech explanations for complex concepts.  
- Infrastructure Goals:  
  - Offline-first capability: Download modules + editor for remote learning.  
  - API extensibility: Integrate with GitHub/LMS platforms for portfolio syncing.  

  By achieving these objectives, the platform will not only demystify programming for beginners but also cultivate a motivated, skilled community ready to tackle real-world coding challenges.

---

## <div id="chapter-2-project-background" class="chapter">Chapter 2: Project Background</div>

### <div id="project-background" class="section">2.1 Project Background</div>

<div class="highlight-box">
  <p>
    <strong>Figma</strong> is a versatile, cloud‑based design platform widely used for crafting user interfaces, wireframes, and interactive prototypes. It enables designers and stakeholders to collaborate in real time, streamlining the design process from ideation to final output. Figma’s rich feature set — including vector editing, component‑based design, version history, and a robust plugin ecosystem — makes it central to modern UI/UX workflows. As a browser‑based tool, it removes installation barriers and ensures cross‑device accessibility.</p>
    <p>For more detailed imformation. you can refer to <a href="https://www.figma.com/">Figma</a>.</p>
</div>


<div class="highlight-box">
  <p>
    <strong>Nuxt.js</strong> is a high-level framework built on Vue.js, optimized for developing server-rendered applications and static websites. It offers features like automatic routing, server-side rendering (SSR), static site generation, and a modular architecture. With built-in support for SEO, performance optimizations, and a rich community-driven ecosystem, Nuxt simplifies the development of scalable, high‑performance web apps.</p>
    <p>For more detailed imformation. you can refer to <a href="https://nuxt.com/">Nuxt.js</a>.</p>
</div>


<div class="highlight-box">
  <p>
    <strong>.NET</strong> is a powerful, open-source development platform created by Microsoft for building modern, scalable, and high-performance applications. It supports multiple languages such as C#, F#, and VB.NET, and enables developers to create applications across web, desktop, mobile, cloud, and IoT environments. Known for its strong type system, robust security features, and extensive class libraries, .NET streamlines development while ensuring reliability and maintainability. With the introduction of .NET Core and now .NET 8, it offers cross-platform support and exceptional performance.
  </p>
  <p>
    For more detailed information, you can refer to <a href="https://dotnet.microsoft.com/">.NET</a>.
  </p>
</div>


<div class="highlight-box">
  <p>
    <strong>Microsoft SQL Server</strong> is a robust, enterprise-grade relational database management system (RDBMS) developed by Microsoft. It is designed to store, manage, and retrieve data efficiently while ensuring high performance, security, and reliability. SQL Server supports both structured query language (SQL) for relational data and JSON for semi-structured data, making it suitable for diverse modern applications. It offers advanced features such as ACID compliance, indexing, views, triggers, stored procedures, and built-in analytics through SQL Server Analysis Services (SSAS). With strong support for scalability, data integrity, and transaction management, SQL Server is widely used in enterprise environments for web applications, business intelligence, and large-scale data solutions.
  </p>
  <p>
      For more detailed information, you can refer to <a href="https://www.microsoft.com/en-us/sql-server">Microsoft SQL Server</a>.
  </p>
</div>


<div class="highlight-box">
  <p>
    <strong>OpenRouter</strong> is an open‑source API platform that offers a unified interface to multiple large language models (LLMs). It enables developers to seamlessly integrate AI features—such as natural language processing, chat interfaces, and content generation—while managing authentication, fallback strategies, and cost efficiency. OpenRouter simplifies switching between or combining models from different providers.</p>
    <p>For more detailed imformation. you can refer to <a href="https://openrouter.ai/">OpenRouter</a>.</p>
</div>


<div class="highlight-box">
  <p>
    <strong>Gemini API</strong> is a developer-friendly interface provided by Google to access the capabilities of its Gemini family of large language models (LLMs). It allows developers to integrate advanced AI features into their applications, including natural language understanding, code generation, content summarization, and multi-modal reasoning (text, image, and more). The Gemini API is accessible through Google AI Studio and is designed to support rapid prototyping and scalable deployment of generative AI solutions. With robust security, comprehensive documentation, and seamless integration with Google Cloud, the Gemini API enables powerful, flexible AI experiences across a wide range of use cases.</p>
    <p>For more detailed imformation. you can refer to <a href="https://ai.google.dev/gemini-api/docs">Gemini API documentation</a>.</p>
</div>


<div class="highlight-box">
  <p>
    <strong>Monaco Editor</strong> is the highly customizable, in‑browser code editor that powers Visual Studio Code. It supports syntax highlighting, IntelliSense, code folding, and more. Lightweight yet powerful, Monaco is perfect for embedding code editing experiences within web applications such as educational platforms, developer tools, or live coding playgrounds.</p>
    <p>For more detailed imformation. you can refer to <a href="https://microsoft.github.io/monaco-editor/">Monaco Editor</a>.</p>
</div>


<div class="highlight-box">
  <p>
    <strong>Cloudflare</strong> is a leading web performance and security platform that provides a wide range of services to protect and accelerate websites, APIs, and applications. It acts as a reverse proxy between users and web servers, offering features such as DDoS protection, content delivery network (CDN), SSL/TLS encryption, firewall rules, and performance optimization. By caching content at global edge locations and filtering malicious traffic, Cloudflare helps improve loading speeds, reduce server load, and enhance overall security. It also offers developer tools like Cloudflare Pages and Workers for deploying scalable, serverless applications.</p>
    <p>For more detailed imformation. you can refer to: <a href="https://www.cloudflare.com/">CloudFlare</a>.</p>
</div>


### <div id="related-work" class="section">2.2 Related Work</div>

#### <div class="subsection">Elzero Web School</div>

<div id="table1">

| Description | Techniques Used | Advantages | Disadvantages |
|------------|------------------|------------|----------------|
| Elzero Web School is an excellent free resource for Arabic-speaking beginners and intermediate learners who want to build strong web development skills through structured, practical learning. | - External resources and useful tool recommendations included<br>- A Q&A section to ask questions and receive community support | - Step-by-step structured study plans for better learning flow<br>- Dedicated learning paths for Frontend, Backend, and Full Stack | - No built-in progress tracking to monitor course completion<br>- Users cannot rate or review courses or lessons |
</div>

**Reference:** https://elzero.org


#### <div class="subsection">Codeforces</div>

<div id="table2">

| Description | Techniques Used | Advantages | Disadvantages |
|------------|------------------|------------|----------------|
| A well-known platform that hosts regular contests like Div 1 and Div 2. It includes a robust rating system and editorial support to develop algorithmic thinking. | - Mathematical algorithms<br>- Rating system<br>- Editorial learning | - Regular contests with large community participation<br>- Detailed editorial explanations<br>- Transparent and active rating system | - Interface can be intimidating for beginners<br>- Problems often require deep mathematical insight |
</div>

**Reference:** https://codeforces.com


#### <div class="subsection">CodeChef</div>

<div id="table3">

| Description | Techniques Used | Advantages | Disadvantages |
|------------|------------------|------------|----------------|
| An Indian educational platform hosting contests like Long Challenge and Lunchtime, with a vast problem archive and community engagement. | - Long format contests (Long Challenge)<br>- Short contests (Lunchtime)<br>- Tutorial-based learning | - Great for long-term learning with multiple contest formats<br>- Offers tutorials and mentorship programs | - Sometimes suffers from server lags during contests<br>- Problems can be less curated compared to Codeforces or LeetCode |
</div>

**Reference:** https://www.codechef.com


#### <div class="subsection">HackerRank</div>

<div id="table4">

| Description | Techniques Used | Advantages | Disadvantages |
|------------|------------------|------------|----------------|
| Focuses on algorithms, SQL, and data structures with a live coding environment, widely used for tech interviews. | - Structured learning paths<br>- Auto-grading system<br>- Skill-specific tracks (SQL, AI, etc.)<br>- Live coding interface | - Beginner-friendly interface and structured learning paths<br>- Great for practicing specific skills (e.g. SQL, AI)<br>- Instant feedback and auto-grading | - Contest competitiveness is relatively low<br>- Less challenging for advanced users |
</div>

**Reference:** https://www.hackerrank.com


#### <div class="subsection">LeetCode</div>

<div id="table5">

| Description | Techniques Used | Advantages | Disadvantages |
|------------|------------------|------------|----------------|
| A premier platform for coding interview prep with 2,500+ problems and company-specific questions. | - Interview prep questions<br>- Company-tagged problems<br>- Weekly contests<br>- Solution discussions | - Focused on technical interview preparation<br>- Community solutions and tutorials<br>- Weekly contests to benchmark skills | - Some premium features are behind a paywall<br>- Less emphasis on advanced algorithms |
</div>

**Reference:** https://leetcode.com


#### <div class="subsection">TopCoder</div>

<div id="table6">

| Description | Techniques Used | Advantages | Disadvantages |
|------------|------------------|------------|----------------|
| One of the oldest platforms, known for SRM (Single Round Matches) and Marathon Matches focusing on complex, long-term problems. | - SRM (Single Round Match)<br>- Marathon Match<br>- High-difficulty algorithm challenges<br>- Real-world modeling problems | - Highly competitive and professional-grade problems<br>- Real-world challenges and big prizes<br>- Community of expert coders | - Interface feels outdated<br>- Steeper learning curve for newcomers |
</div>

**Reference:** https://www.topcoder.com


#### <div class="subsection">AtCoder</div>

<div id="table7">

| Description | Techniques Used | Advantages | Disadvantages |
|------------|------------------|------------|----------------|
| A Japanese platform offering well-structured contests (ABC, ARC, AGC) with a focus on clean problem statements and difficulty progression. | - ABC, ARC, AGC contests<br>- Clean and structured problems<br>- Difficulty progression<br>- On-time weekly contests | - High-quality problems and fair difficulty curve<br>- Regular, punctual contests<br>- Structured for serious learners | - Japanese-first interface; some translations may be rough<br>- Smaller international community than others |
</div>

**Reference:** https://atcoder.jp


#### <div class="subsection">CodinGame</div>

<div id="table8">

| Description | Techniques Used | Advantages | Disadvantages |
|------------|------------------|------------|----------------|
| Gamifies coding challenges with multiplayer and story-based games like Clash of Code and Code vs Zombies. | - Game-based problem solving<br>- Real-time multiplayer coding<br>- Visual programming challenges<br>- Language flexibility (25+) | - Fun and visual way to learn coding<br>- Supports 25+ programming languages<br>- Great for casual or team play | - Not focused on algorithm depth<br>- Less suitable for serious competitive programming |
</div>

**Reference:** https://www.codingame.com


#### <div class="subsection">CodeCombat</div>

<div id="table9">

| Description | Techniques Used | Advantages | Disadvantages |
|------------|------------------|------------|----------------|
| An RPG-style platform that teaches Python, JavaScript, and HTML through story-driven games and challenges. | - RPG-style game interface<br>- Code-to-play mechanics<br>- Curriculum-based learning<br>- Beginner visual feedback | - Ideal for children and beginners<br>- Game-based engagement with rewards<br>- Offers structured curriculum | - Too basic for experienced developers<br>- Some content requires a subscription |
</div>

**Reference:** https://codecombat.com


#### <div class="subsection">Codewars</div>

<div id="table10">

| Description | Techniques Used | Advantages | Disadvantages |
|------------|------------------|------------|----------------|
| Uses "Kata" - short coding exercises - to improve coding progressively with ranking and community feedback. | - Community challenge creation<br>- Rank-based progression<br>- Peer-reviewed solutions | - Unique ranking and progression system<br>- Community-driven challenges and solutions<br>- Good for practicing idiomatic code | - Lacks formal contest system<br>- Quality of community challenges can vary |
</div>

**Reference:** https://www.codewars.com


#### <div class="subsection">CheckiO</div>

<div id="table11">

| Description | Techniques Used | Advantages | Disadvantages |
|------------|------------------|------------|----------------|
| Offers gamified learning of Python and JavaScript through short, interactive problem-solving challenges. | - Gamified challenges<br>- Code review mechanism<br>- Puzzle solving<br>- Interactive feedback | - Fun and visual interface<br>- Encourages reviewing others' code<br>- Python-focused challenges are especially polished | - Less suitable for advanced algorithm training<br>- Limited language support |
</div>

**Reference:** https://checkio.org


### <div id="summary" class="section">2.3 Summary</div>
In this chapter, the tools that will be used in implementation like (Node.js, Nuxt.js, Figma, Gemini API, OpenRouter, Monaco Editor, and CloudFlare). were described.
Then the related work was described, (Which is listed in the previous table), and the advantages, disadvantages, and benefits of each one, then compared with the project.

---


## <div id="chapter-3-feasibility-and-project-planning" class="chapter">Chapter 3: Feasibility and Project Planning</div>

### <div id="feasibility-study" class="section">3.1 Feasibility Study</div>

#### <div class="subsection">3.1.1 Technical Feasibility</div>

- **Familiarity with Applications:** 
  - The target learners and educators in our region are already familiar with mobile educational apps and interactive tutorials (e.g. Duolingo, Code.org) in Arabic. Using a gamified, Arabic-language interface makes the platform intuitive; users require no extra training to log in, practice coding, or track progress.  
  - Core team members have experience building web/mobile learning tools, so we understand typical user workflows (account setup, interactive lessons).  
  - Because the UI and content are in Arabic, language barriers are eliminated, further smoothing the learning curve for beginners.

- **Familiarity with Technology:**  
  - Our team has strong expertise in the chosen tech stack: we have built Vue/Nuxt.js and .NET applications before and are proficient with SQL Server databases. This means we can efficiently develop the front-end UI and the back-end server.  
  - We have experience with embedding real-time code editors (the platform will use Microsoft’s Monaco Editor, the same engine as VS Code) and handling Python and JavaScript code execution on the server.  
  - We are comfortable working with AI APIs; in past projects we have integrated services (e.g. OpenAI APIs) and we can similarly use OpenRouter to connect to the Gemini API for intelligent hints. Overall, **our familiarity is high** and we have confidence that we have the coding, design, and integration skills needed to implement all planned features.

- **Project Size:**  
  - The core team will include about 6 members (detailed below), which is appropriate for a mid-size project.  
  - The platform’s scope involves a moderate variety of features: a real-time code editor (supporting Python and JS), gamification mechanics (XP, badges, streaks, daily goals), AI-driven hints. This is a mid-level complexity for an experienced team.  
  - The development timeline is relatively tight: with a target launch by May 2026 (about 6 months from planning start), the schedule is ambitious. However, by assigning parallel sprints for front-end, back-end, and content creation, and by leveraging reusable components (Nuxt/Vue libraries, Monaco Editor, etc.), we believe the team can meet this deadline.


#### <div class="section">3.1.2 Organizational Feasibility</div>

- **Project Advisor:** Dr. Rehab Emad El-Dein

- **Project Manager:** Eng. Mohamed Farag

- **Champion:** The development team and supervisors provide time and effort for the system.

- **System Users:**  
  1. **Learners:** Arabic-speaking students and self-learners who use the platform to learn programming through structured courses, interactive exercises, and real-time code challenges. They earn XP, badges, and streaks as they progress.  
  2. **Mentors/Instructors:** More experienced developers or educators who contribute by answering questions, reviewing user code, curating content, and moderating the community. Mentors help ensure quality and provide additional support (similar to Duolingo “language mentors”).  
  3. **Administrators/Content Creators:** A small team of admins who upload new course material, monitor the system, and handle technical support.


- **Development Team Breakdown:** The team is organized into specialized roles with overlapping collaboration to ensure flexibility:  

  - **Back-end Developers (2):**  
    Build and maintain the server-side logic in .NET, manage the SQL Server database, and implement APIs. One of the back-end developers will also take on DevOps responsibilities, handling cloud infrastructure, CI/CD pipelines, and security. Together, they will also implement real-time code execution and integration with AI APIs.

  - **Front-end Developers (2):**  
    Develop the user interface using Nuxt.js, ensuring a responsive and intuitive design across desktop and mobile browsers. They will integrate the Monaco editor, implement gamification features (XP, badges, leaderboards), and collaborate closely with the mobile developer to keep design consistent.  

  - **Mobile Developer (1):**  
    Focuses on building and optimizing the mobile application version of the platform, ensuring a smooth experience on iOS and Android. Works with front-end and back-end teams for synchronization and performance.  

  - **AI Engineer (1):**  
    Specializes in integrating AI features, including intelligent hints and personalized feedback, through APIs like OpenRouter/Gemini. This role also explores adaptive learning models to tailor exercises to each learner’s progress.  

  - **Content & Instructional Design (shared responsibility):**  
    Instead of dedicated content creators, **all team members will collaborate** on producing and localizing course material in Arabic. This includes designing structured lessons, writing exercises, and embedding gamification mechanics. Team members’ technical expertise ensures content is accurate, while shared responsibility distributes workload evenly.  
    
<figure id="Figure31">
  <img src="../public/assets/CH03/Figure_3.1_Development_Team_Roles.svg" alt = "Figure 3.1: Development Team Roles">
  <figcaption>Figure 3.1: Development Team Roles</figcaption>
</figure>

#### <div class="section">3.1.3 Economic Feasibility</div>

- **Tangible Benefits:**  
  - **Course Revenue:** With a pay-per-course model at an average price of $30 per course, enrolling 5,000 users in Year 1 (our target) would generate roughly $150,000 in Year-1 sales. As user growth continues, Year 2 and 3 revenues could be, for example, $225,000 and $300,000 (assuming 50% year-over-year user growth).  
  - **Additional Revenue Streams:** We can develop premium content or certification services in later years (e.g. advanced courses, official completion certificates) to create new revenue. Partnerships or bulk licenses with schools or companies could also add income.  
  - **Economies of Scale:** Because hosting and maintenance costs (see below) are largely fixed per year, each additional user above Year 1 yields mostly profit. For instance, once we cover the $20,000/year hosting expense and $50,000/year marketing, further enrollments significantly improve margins.

- **Intangible Benefits:**  
  - **Learner Engagement:** The gamified, Duolingo-style approach will keep students motivated. Studies show gamification (points, streaks, badges) significantly boosts user engagement and retention. By making coding fun and rewarding, we help learners persist.  
  - **Education Impact:** Providing coding education in Arabic removes language barriers and makes computer science more accessible. This can broaden participation in tech education and help develop local talent in programming.  
  - **Brand and Market Position:** Successfully launching this platform will position our team as innovators in Arabic EdTech. Positive reputation and user testimonials will attract future investments, partnerships, and possibly expansion into new topics or markets.

---

**Development and Operational Costs (Years 0–3):**

<div id="table12">

| Item                       | Year 0       | Year 1      | Year 2      | Year 3      | Total        |
| -------------------------- | ------------ | ----------- | ----------- | ----------- | ------------ |
| **Development (one-time)** | $280,000     | $0          | $0          | $0          | $280,000     |
| Dev team salaries          | $180,000     | –           | –           | –           | $180,000     |
| Content creation           | $100,000     | –           | –           | –           | $100,000     |
| **Hosting/AI/maint.**      | $0           | $20,000     | $20,000     | $20,000     | $60,000      |
| **Marketing**              | $0           | $50,000     | $50,000     | $50,000     | $150,000     |
| **Total Cost**             | **$280,000** | **$70,000** | **$70,000** | **$70,000** | **$490,000** |
</div>

**ROI and Cumulative Net:**

<div id="table13">

| Metric             | Year 0    | Year 1    | Year 2   | Year 3   | Total    |
| ------------------ | --------- | --------- | -------- | -------- | -------- |
| **Revenue**        | $0        | $150,000  | $225,000 | $300,000 | $675,000 |
| **Total Cost**     | $280,000  | $70,000   | $70,000  | $70,000  | $490,000 |
| **Net Profit**     | -$280,000 | $80,000   | $155,000 | $230,000 | $185,000 |
| **Cumulative Net** | -$280,000 | -$200,000 | -$45,000 | $185,000 | —        |
</div>

> **3-Year ROI:** $185,000 ÷ $490,000 ≈ **37.8%**

<figure id="Figure32">
  <img src="../public/assets/CH03/Figure_3.2_Net_Profit_per_Year.svg" alt="Figure 3.2: Net Profit per Year">
  <figcaption>Figure 3.2: Net Profit per Year</figcaption>
</figure>

---

**Break-even Analysis** 

The **break-even point** occurs when cumulative revenue surpasses cumulative costs:  

- **Year 1:** Cumulative revenue = $150,000, cumulative cost = $350,000 → still negative (-$200,000).  
- **Year 2:** Cumulative revenue = $375,000, cumulative cost = $420,000 → still negative (-$45,000).  
- **Year 3:** Cumulative revenue = $675,000, cumulative cost = $490,000 → **positive cumulative net ($185,000)**.  

Therefore, the project is expected to **break even during Year 3**, after which all additional revenue contributes to profit.  

To illustrate:  

- **Break-even revenue threshold:** $490,000 (total 3-year cost).  
- Achieved at ~**16,333 paid enrollments** (490,000 ÷ $30).  
- Based on projected growth, this milestone will be reached in the **third year of operation**.  

<figure id="Figure33">
  <img src="../public/assets/CH03/Figure_3.3_Cumulative_Revenue_vs_Cumulative_Cost.svg" alt="Figure 3.3: Cumulative Revenue vs Cumulative Cost - Chart showing break-even point analysis over a 3-year period">
  <figcaption>Figure 3.3: Cumulative Revenue vs Cumulative Cost</figcaption>
</figure>


### <div id="risk-management" class="section">3.2 Risk Management</div>

This section identifies key risks for the coding education platform across technical, operational, and legal domains. Each risk is assessed with a likelihood (Low/Medium/High), impact (Low/Medium/High), and mitigation strategies. Where appropriate, a qualitative risk matrix is used to emphasize prioritization.  

#### <div class="subsection">3.2.1 Technical Risks</div>

<div id="table14">

| **Risk**                     | **Description**                                                                                                                                                     | **Likelihood** | **Impact** | **Mitigation**                                                                                                                                                                                         |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Scalability & Uptime**     | High traffic or data growth could overwhelm the platform. Without modular architecture and robust testing, performance bottlenecks and downtime can occur.          | High           | High       | Design a scalable, microservices-based architecture; use horizontal scaling (load balancing, CDN, caching); implement automated testing and monitoring to detect and prevent bottlenecks.              |
| **External API Integration** | Reliance on third-party APIs (e.g. Gemini, OpenRouter) can introduce outages or unpredictable behavior. Third-party services may have downtime or breaking changes. | Medium         | High       | Vet and monitor external APIs closely (uptime/SLA checks); implement timeouts and retries; use circuit breakers to protect against surges; prepare fallback or degraded modes if an API fails.         |
| **Real-time Code Execution** | Running user-submitted code in real time is error-prone. Sandbox failures, resource exhaustion, or vulnerabilities could crash the executor, harming reliability.   | Medium         | High       | Isolate execution in secure sandboxes or containers; enforce resource limits (memory/time); continuously test with diverse workloads; scale the execution engine separately; monitor and auto-recover. |
</div>

#### <div class="subsection">3.2.2 Operational Risks</div>

<div id="table15">

| Risk                                | Description                                                                                                                          | Likelihood | Impact | Mitigation                                                                                                                                                     |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Timeline Delays**                 | Requirement changes, scope creep, or underestimation can derail schedules. Over-optimistic estimates may lead to extended deadlines. | High       | High   | Use thorough upfront planning and clear requirements; apply realistic time estimates with contingency; use agile sprints for incremental delivery and reviews. |
| **Resource Constraints**            | Limited team size or skill shortages create bottlenecks.                                                                             | Medium     | High   | Cross-train staff and onboard talent early; use contingent resources; maintain a pipeline of developers; forecast and reallocate workloads proactively.        |
| **Content Development Bottlenecks** | Creating high-quality, engaging coding lessons and exercises is time-consuming, which can delay releases or reduce quality.          | Medium     | Medium | Develop content iteratively with SMEs; reuse or adapt existing materials; employ instructional designers; prioritize high-impact modules first.                |
</div>

#### <div class="subsection">3.2.3 Legal & Compliance Risks</div>

<div id="table16">

| Risk                            | Description                                                                                                                                        | Likelihood | Impact | Mitigation                                                                                                                                                          |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Data Privacy (Minors)**       | Collecting data on children raises strict legal requirements (e.g., COPPA, GDPR). Failure to comply can cause severe penalties.                    | Medium     | High   | Apply "privacy by design": minimize data collection, encrypt sensitive data, obtain parental consent, maintain clear privacy policies, and conduct regular audits.  |
| **Copyright & Licensing**       | Using third-party or community code/assets risks license infringement. Even one noncompliant license could result in legal or financial penalties. | Low        | Medium | Enforce strict review of all content/code; use license scanners; prefer permissive or original content; educate users on plagiarism; remediate infringing material. |
| **Terms-of-Service Violations** | Users may post disallowed content (hate speech, copyrighted code, malicious submissions) or cheat, violating the platform's ToS.                   | Medium     | Medium | Publish comprehensive ToS; implement moderation and reporting tools; enforce rules via filters and manual review; respond promptly and revise policies regularly.   |
</div>

---


### <div id="project-plan" class="section">3.3 Project plan</div>

  **TO DO**

---

### <div id="gantt-chart" class="section">3.4 Gantt Chart</div>

  **TO DO**

---

## <div id="chapter-4-system-analysis" class="chapter">Chapter 4: System Analysis</div>

### <div id="function-requireements" class="section">4.1 Function Requireements</div>

#### <div class="subsection">4.1.1 User Management System</div>

**User Registration and Authentication**

- **FR-1.1:** System shall allow users to create accounts using email, username, and password.
- **FR-1.2:** System shall support social login (Google, GitHub) for quick registration.
- **FR-1.3:** System shall implement email verification for new accounts.
- **FR-1.4:** System shall provide secure password reset functionality via email.
- **FR-1.5:** System shall enforce strong password policies (minimum 8 characters, special characters).
- **FR-1.6:** System shall implement two-factor authentication (2FA) as an additional security feature.

<div class="highlight-box">
  <strong>Optional Feature:</strong> Two-factor authentication (2FA).
</div>

**User Profiles and Settings**

- **FR-1.7:** System shall allow users to create and edit personal profiles with avatar, bio, and learning goals.
- **FR-1.8:** System shall allow users to select preferred programming languages (Python, JavaScript, etc.).
- **FR-1.9:** System shall support multiple language interface options (Arabic, English).

<div class="highlight-box">
  <strong>Optional Feature:</strong> Language interface options.
</div>

**User Roles and Permissions**

- **FR-1.10:** System shall support multiple user roles: Learner, Administrator, Content Creator.
- **FR-1.11:** System shall implement role-based access control for different platform features.

---

#### <div class="subsection">4.1.2 Learning Management System</div>

**Course Structure and Navigation**

- **FR-2.1:** System shall organize content into structured learning paths from fundamentals to advanced topics.
- **FR-2.2:** System shall implement prerequisite-based lesson unlocking mechanisms.
- **FR-2.3:** System shall provide a visual learning roadmap showing completed, current, and locked modules.
- **FR-2.4:** System shall support multiple learning tracks (Python, JavaScript, Web Development, OOP, Algorithms).

<div class="highlight-box">
  <strong>Optional Feature:</strong> Lesson bookmarking.
</div>

**Lesson Content Delivery**

- **FR-2.5:** System shall support multi-format lesson content (text, videos, interactive demos).
- **FR-2.6:** System shall provide step-by-step coding walkthroughs with highlighted code segments.
- **FR-2.7:** System shall include conceptual explanations before practical exercises.
- **FR-2.8:** System shall support rich text formatting, code syntax highlighting, and embedded media.

<div class="highlight-box">
  <strong>Optional Feature:</strong> Estimated completion time per lesson.
</div>

**Adaptive Learning Features**

- **FR-2.9:** System shall track user performance and recommend personalized learning paths.
- **FR-2.10:** System shall adjust exercise difficulty based on user success rates.
- **FR-2.11:** System shall provide spaced repetition reminders for previously learned concepts.

---

#### <div class="subsection">4.1.3 Code Editor and Execution Environment</div>

**In-Browser Code Editor**

- **FR-3.1:** System shall embed Monaco Editor for in-browser code editing.
- **FR-3.2:** System shall support syntax highlighting for Python, JavaScript, etc.
- **FR-3.3:** System shall provide auto-completion and IntelliSense features.
- **FR-3.4:** System shall include line numbering, code folding, and bracket matching.
- **FR-3.5:** System shall support multiple editor themes (dark/light mode).
- **FR-3.6:** System shall provide keyboard shortcuts for common coding operations.

**Code Execution and Testing**

- **FR-3.7:** System shall execute user code securely using APIs.
- **FR-3.8:** System shall display real-time output and error messages.

<div class="highlight-box">
  <strong>Optional Feature:</strong> Test case validation, execution performance metrics.
</div>

**Code Analysis and Feedback**

- **FR-3.9:** System shall provide instant syntax error detection and suggestions.
- **FR-3.10:** System shall offer code optimization suggestions and best practices.
- **FR-3.11:** System shall compare user solutions with model answers.
- **FR-3.12:** System shall highlight potential bugs or logical errors using LLM.

<div class="highlight-box">
  <strong>Optional Feature:</strong> Code complexity analysis with Big O insights.
</div>

**Blockly Integration**

- **FR-3.13:** System shall provide a block-based workspace with customizable categories (Logic, Math, Control, Events, etc.).
- **FR-3.14:** System shall allow users to generate source code (JavaScript/Python) from block structures.
- **FR-3.15:** System shall enable code execution within the application environment.
- **FR-3.16:** System shall support saving and loading block configurations in XML/JSON format.

<div class="highlight-box">
  <strong>Optional Feature:</strong> Custom block expansion.
</div>

---

#### <div class="subsection">4.1.4 Interactive Exercise System</div>

**Exercise Types and Structure**

- **FR-4.1:** System shall support coding challenges, bug fixing, code completion, and multiple-choice exercises.
- **FR-4.2:** System shall provide clear problem statements with input/output examples.
- **FR-4.3:** System shall include starter code templates when appropriate.
- **FR-4.4:** System shall support progressive difficulty within exercise sets.
- **FR-4.5:** System shall offer optional hints and explanations.

**Validation and Grading**

- **FR-4.6:** System shall automatically validate solutions against test cases.
- **FR-4.7:** System shall track solution attempts and provide retry mechanisms.

<div class="highlight-box">
  <strong>Optional Feature:</strong> Immediate feedback, partial credit.
</div>

**Solution Management**

- **FR-4.8:** System shall provide "section of solutions" after successful completion.
- **FR-4.9:** System shall allow users to submit multiple approaches to the same problem.

<div class="highlight-box">
  <strong>Optional Feature:</strong> Save and version solutions.
</div>

---

#### <div class="subsection">4.1.5 Gamification System</div>

**Points and Experience (XP)**

- **FR-5.1:** System shall award XP for completed lessons, exercises, and achievements.
- **FR-5.2:** System shall implement progressive XP requirements for level advancement.
- **FR-5.3:** System shall provide XP bonuses for consecutive learning streaks.
- **FR-5.4:** System shall award bonus points for first attempts.
- **FR-5.5:** System shall display XP progress bars and level indicators.

**Achievement System**

- **FR-5.6:** System shall implement badge categories (completion, mastery, collaboration).
- **FR-5.7:** System shall provide rare and legendary badges for exceptional achievements.
- **FR-5.8:** System shall display badge galleries on user profiles.
- **FR-5.9:** System shall notify users upon earning new achievements.

<div class="highlight-box">
  <strong>Optional Feature:</strong> Skill-specific badges.
</div>

**Leaderboards and Competition**

- **FR-5.10:** System shall maintain global and weekly leaderboards.
- **FR-5.11:** System shall support friend-based leaderboards and challenges.
- **FR-5.12:** System shall provide leaderboard filtering by time, skill level, or language.

**Streaks and Daily Goals**

- **FR-5.13:** System shall track daily learning streaks with visual indicators.
- **FR-5.14:** System shall send streak reminder notifications.
- **FR-5.15:** System shall provide streak recovery options.

<div class="highlight-box">
  <strong>Optional Feature:</strong> Personalized daily goals.
</div>

**Certification Management**

- **FR-5.16:** System shall display all available certifications with details.
- **FR-5.17:** System shall allow eligible users to enroll in certification tracks.
- **FR-5.18:** System shall create a certification dashboard showing progress and deadlines.

---

#### <div class="subsection">4.1.6 Progress Tracking and Analytics</div>

**Individual Progress Monitoring**

- **FR-6.1:** System shall maintain comprehensive learning history per user.
- **FR-6.2:** System shall calculate and display skill mastery percentages.
- **FR-6.3:** System shall track time spent on topics and exercises.
- **FR-6.4:** System shall identify strengths and weaknesses.

**Performance Analytics**

- **FR-6.5:** System shall track accuracy rates and improvement trends.
- **FR-6.6:** System shall monitor learning velocity.
- **FR-6.7:** System shall calculate estimated completion time for coursework.

**Visual Progress Representation**

- **FR-6.8:** System shall provide interactive progress roadmaps.
- **FR-6.9:** System shall display skill trees showing mastered and locked concepts.

<div class="highlight-box">
  <strong>Optional Feature:</strong> Charts and graphs for analytics.
</div>

---

#### <div class="subsection">4.1.7 AI-Powered Features</div>

**Intelligent Hints and Assistance**

- **FR-7.1:** System shall integrate AI APIs (Gemini via OpenRouter) for contextual hints.
- **FR-7.2:** System shall provide progressive hint levels.
- **FR-7.3:** System shall analyze user code and suggest improvements.
- **FR-7.4:** System shall generate explanations for complex programming concepts.
- **FR-7.5:** System shall adapt hint complexity based on user skill.

**Personalized Learning Recommendations**

- **FR-7.6:** System shall suggest relevant exercises when users struggle.

<div class="highlight-box">
  <strong>Optional Feature:</strong> Learning schedules, AI practice problems.
</div>

**Automated Content Generation**

- **FR-7.7:** System shall generate variations of exercises for extra practice.
- **FR-7.8:** System shall generate code examples for abstract concepts.

---

#### <div class="subsection">4.1.8 Content Management System</div>

**Course and Lesson Administration**

- **FR-8.1:** System shall provide a content creation interface for authorized users.

<div class="highlight-box">
  <strong>Optional Feature:</strong> Content scheduling, review workflows.
</div>

**Exercise and Assessment Management**

- **FR-8.2:** System shall allow creation of coding exercises with test cases.
- **FR-8.3:** System shall support exercise difficulty categorization.
- **FR-8.4:** System shall validate exercises before publication.

<div class="highlight-box">
  <strong>Optional Feature:</strong> Exercise cloning and templates.
</div>

**Multimedia Content Support**

- **FR-8.5:** System shall support video upload or embedding.
- **FR-8.6:** System shall support content localization for multiple languages.

<div class="highlight-box">
  <strong>Optional Feature:</strong> Image embedding and interactive content creation.
</div>

---

#### <div class="subsection">4.1.9 System Administration</div>

**User Management**

- **FR-9.1:** System shall provide an administrative dashboard for managing user accounts.
- **FR-9.2:** System shall support user role assignment and permission management.

**Platform Monitoring and Analytics**

- **FR-9.3:** System shall maintain system logs and audit trails.
- **FR-9.4:** System shall provide usage statistics and dashboards.

**Content Moderation**

- **FR-9.5:** System shall support manual content review and moderation workflows.
- **FR-9.6:** System shall maintain content removal and user warning systems.

---

#### <div class="subsection">4.1.10 Integration and API Features</div>

**Third-Party Integrations**

- **FR-10.1:** System shall integrate with external authentication providers (OAuth or BetterAuth).
- **FR-10.2:** System shall connect with AI services (OpenRouter, Gemini API).

**Platform APIs**

- **FR-10.3:** System shall provide RESTful APIs for web and mobile apps.
- **FR-10.4:** System shall support webhook integrations.

**Mobile and Cross-Platform Support**

- **FR-10.5:** System shall deliver a responsive web interface optimized for mobile.
- **FR-10.6:** System shall provide mobile-specific features (push notifications).
- **FR-10.7:** System shall ensure cross-browser compatibility.

<div class="highlight-box">
  <strong>Optional Feature:</strong> Offline content caching.
</div>

---

#### <div class="subsection">4.1.11 Security and Privacy</div>

**Data Protection**

- **FR-11.1:** System shall encrypt sensitive user data at rest and in transit.
- **FR-11.2:** System shall implement secure session management and timeouts.
- **FR-11.3:** System shall provide privacy controls and data deletion options.
- **FR-11.4:** System shall comply with GDPR and COPPA standards.

**Platform Security**

- **FR-11.5:** System shall implement input validation and sanitization.
- **FR-11.6:** System shall protect against XSS, CSRF, and SQL injection.
- **FR-11.7:** System shall secure API endpoints with authentication and authorization.
- **FR-11.8:** System shall implement rate limiting and DDoS protection.


### <div id="non-function-requirements" class="section">4.2 Non-Function Requirements</div>

#### <div class="subsection">4.2.1 Performance</div>

**NFR-1.1:** Response Time
- Landing page load: **2 seconds** (3G or better)
- Monaco editor initialization: **3 seconds**
- Code execution results: **5 seconds** (standard exercises)
- API responses: **1 second** (login, save, submit)
- Search/filtering: **2 seconds**

---

**NFR-1.2:** Throughput
- Concurrent users: **1,000+** without degradation
- Simultaneous code executions: **500+**
- Peak submissions: **10,000/hour**

---

**NFR-1.3:** Resource Utilization
- Client memory: ≤ **500MB**
- Monaco editor: ≤ **200MB**
- Database queries: **100ms** (95% of operations)
- CDN cache hit rate: **90%+**

---

**NFR-1.4:** Rendering Performance
- Interactive elements response: **100ms**
- Animation frame rate: **60 FPS**
- Roadmap rendering (100 nodes): **1.5 seconds**

#### <div class="subsection">4.2.2 Availability</div>

**NFR-2.1:** System Uptime
- Annual uptime: **99.5%** (~43.8 hours downtime)
- Maintenance windows: ≤ **4 hours/month** (low-usage periods)

---

**NFR-2.2:** Service Availability
- Core features: **24/7** availability
- AI hints: **95%** uptime
- Leaderboards: **98%** uptime

---

**NFR-2.3:** Geographic Availability
- Global accessibility with focus on Arabic-speaking regions

---

**NFR-2.4:** Graceful Degradation
- AI unavailable → pre-generated hints available
- Execution service down → lessons & content accessible


#### <div class="subsection">4.2.3 Scalability</div>

**NFR-3.1:** Horizontal Scalability
- Stateless architecture for seamless load balancing
- Connection pooling for efficient resource management

---

**NFR-3.2:** User Growth
- Year 1: **50,000** users
- Year 3: **200,000** users (without major changes)

---

**NFR-3.3:** Content Scalability
- Launch: **500 lessons**, **5,000 exercises**
- Future: **2,000 lessons**, **20,000 exercises**
- Support new languages without refactoring

---

**NFR-3.4:** Database Scalability
- PostgreSQL with read replicas
- Quarterly query plan reviews

#### <div class="subsection">4.2.4 Reliability</div>

**NFR-4.1:** Error Rate
- System error rate: **&lt0.5%**
- Code execution failures: **&lt1%** (system errors only)

---

**NFR-4.2:** Data Integrity
- ACID compliance for progress data (Atomicity, Consistency, Isolation, Durability)
- Daily backups with 30-day point-in-time recovery

---

**NFR-4.3:** Fault Tolerance
- No single point of failure
- Database failover: **60 seconds** automatic

---

**NFR-4.4:** Data Consistency
- Leaderboards: eventual consistency within **5 minutes**
- User profiles: immediate consistency
- Cache invalidation: **30 seconds**

#### <div class="subsection">4.2.5 Interoperability</div>

**NFR-5.1:** API Standards
- RESTful design with standard HTTP methods
- JSON responses with consistent structure
- OpenAPI/Swagger documentation

---

**NFR-5.2:** Third-Party Integration
- OAuth 2.0 (Google, GitHub)
- Webhook support with JSON payloads

---

**NFR-5.3:** Data Exchange
- Export formats: JSON, CSV
- Version-control compatible storage

---

**NFR-5.4:** Browser Compatibility
- Chrome, Firefox, Safari, Edge (latest versions)
- Browsers released within **2 years**

---

**NFR-5.5:** Mobile Compatibility
- Responsive: **320px–2560px**
- Native notifications (FCM/APNs)

#### <div class="subsection">4.2.6 Usability</div>

**NFR-6.1:** Learnability
- Account setup → first lesson: **5 minutes**
- Interactive tutorial: **&lt10 minutes**

---

**NFR-6.2:** UI Design
- Material Design principles
- Arabic (RTL) and English (LTR) support
- 3 font size options

---

**NFR-6.3:** Accessibility
- Keyboard navigation (tab, arrows, enter)
- ARIA labels and semantic HTML
- Color-blind modes with alternative indicators

---

**NFR-6.4:** Error Handling
- User-friendly messages (Arabic/English)
- Contextual help tooltips
- Searchable help center accessible from all pages

---

**NFR-6.5:** Localization
- Full Arabic/English localization
- Language switching without progress loss
- Regional date, time, and number formatting

---

**NFR-6.6:** Responsiveness
- Immediate visual feedback
- Progress indicators for operations > **1 second**

#### <div class="subsection">4.2.7 Maintainability</div>

**NFR-7.1:** Code Quality
- Test coverage: **≥ 80%** (critical components)
- Peer review required before merge

---

**NFR-7.2:** Documentation
- API docs with examples and schemas
- Architecture diagrams (system, database, data flow)
- Code comments for complex logic

---

**NFR-7.3:** Modularity
- Reusable, independently testable components
- Versioned migration scripts

---

**NFR-7.4:** Logging & Monitoring
- Centralized logs with **90-day** retention
- Automated alerts for critical errors

---

**NFR-7.5:** Deployment
- Automated CI/CD pipelines
- Rollback capability: **10 minutes**

#### <div class="subsection">4.2.8 Recovery</div>

**NFR-8.1:** Backup & Restore
- Daily full + 6-hour incremental backups
- 30-day point-in-time recovery
- Weekly integrity verification

---

**NFR-8.2:** Disaster Recovery
- Semi-annual testing
- **RTO**: 4 hours
- **RPO**: ≤ 1 hour data loss

---

**NFR-8.3:** Failure Detection
- Alert within **2 minutes** of critical failure

---

**NFR-8.4:** Data Recovery
- Individual account restoration
- Checksum validation with automatic rollback

---

**NFR-8.5:** Service Recovery
- Resume after maintenance: **5 minutes**
- Automatic session restoration
- Clear incident messaging

---

**NFR-8.6:** Transaction Recovery
- Automatic completion or manual review
- Transaction log maintenance

---

### <div id="functional-decomposition" class="section">4.3 Functional Decomposition</div>

**Decomposition Diagram - Part 1**

<figure id="Figure41">
  <img src="../public/assets/CH04/Figure_4.1_decomposition_diagram.svg" alt="Figure 4.1: Decomposition Diagram Part 1">
  <figcaption>Figure 4.1: Decomposition Diagram Part 1</figcaption>
</figure>

**Decomposition Diagram - Part 2**

<figure id="Figure42">
  <img src="../public/assets/CH04/Figure_4.2_decomposition_diagram.svg" alt="Figure 4.2: Decomposition Diagram Part 2">
  <figcaption>Figure 4.2: Decomposition Diagram Part 2</figcaption>
</figure>

---

## <div id="chapter-5-system-architecture" class="chapter">Chapter 5: System Architecture</div>

### <div id="actor-goal-list" class="section">5.1 Actor-goal List</div>

<div id="table17">

| Actor | Goals |
|-------|-------|
| **Learner** | 1. Register, log in, and manage their own profiles.<br>2. Choose preferred programming languages and interface languages.<br>3. Follow structured learning paths and unlock lessons progressively.<br>4. Learn via text, videos, and interactive demos.<br>5. Practice coding using Monaco Editor with syntax highlighting, auto-completion, and real-time feedback.<br>6. Receive AI-powered hints, explanations, and recommendations.<br>7. Complete exercises, earn XP, badges, and certifications.<br>8. Track progress, mastery, and performance analytics.<br>9. Participate in leaderboards, streaks, and challenges. |
| **Content Creator / Instructor** | 1. Create and manage courses, lessons, and coding exercises.<br>2. Categorize exercises by difficulty and validate before publishing.<br>3. Add multimedia (videos, images) and localized content.<br>4. Review and update educational materials.<br>5. Generate content in different formats (text, code, interactive demos). |
| **Administrator** | 1. Manage user accounts and assign roles/permissions.<br>2. Monitor platform analytics and logs.<br>3. Moderate content and enforce warnings or removals.<br>4. Oversee data security, backups, and system performance. **"*-*"**<br>5. Configure integrations and APIs for external services. **"*-*"** |
| **AI System<br>(Gemini / OpenRouter)** | 1. Provide contextual hints and adaptive learning recommendations.<br>2. Analyze learner code to detect errors and suggest improvements.<br>3. Generate additional exercises and code examples. **"*-*"**<br>4. Adjust hint complexity based on user skill level. **"*-*"** |
</div>

### <div id="use-cases-diagram" class="section">5.2 Use Cases Diagram</div>

<figure id="Figure51">
  <img src="../public/assets/CH05/Figure_5.1_use_case_diagram.svg" alt="Figure 5.1: Use Cases Diagram">
  <figcaption>Figure 5.1: Use Cases Diagram</figcaption>
</figure>

---


### <div id="use-cases-format" class="section">5.3 Use Cases Format</div>
This section presents use cases for the DuoCodo platform organized by user role. The cases progress from administrative functions through content creation to learner interactions, using three format levels: Brief (one-line), Casual (structured scenarios), and Fully Dressed (comprehensive specifications).
#### <div class="subsection">5.3.1 Administrator Use Cases</div>
**Brief Format Use Cases**

<div class="brief-usecase">
<div class="usecase-title">1. View System Logs</div>
<div class="description">
The administrator views system activity logs, error reports, and security events to monitor platform health.
</div>
</div>
<hr class="usecase-separator">
<div class="brief-usecase">
<div class="usecase-title">2. Check Platform Statistics</div>
<div class="description">
The administrator views key metrics including total users, active learners, course enrollments, and system performance indicators.
</div>
</div>
<hr class="usecase-separator">
<div class="brief-usecase">
<div class="usecase-title">3. View User List</div>
<div class="description">
The administrator displays a searchable list of all registered users with basic information and account status.
</div>
</div>
<hr class="usecase-separator">

**Casual Format Use Cases**

<div class="usecase-title">4. Manage User Accounts</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Actor</div>
<div class="meta-value">Administrator</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The administrator logs into the admin dashboard.</div>
<div class="step">The administrator navigates to the "User Management" section.</div>
<div class="step">The system displays a searchable, filterable user list with columns:</div>
<div class="sub-step">Username</div>
<div class="sub-step">Email</div>
<div class="sub-step">Role (Learner/Content Creator/Admin)</div>
<div class="sub-step">Account status (Active/Suspended/Deactivated)</div>
<div class="sub-step">Registration date</div>
<div class="sub-step">Last login</div>
<div class="sub-step">Total XP/Activity level</div>
<div class="step">The administrator can search by username, email, or user ID.</div>
<div class="step">The administrator can filter by:</div>
<div class="sub-step">Role type</div>
<div class="sub-step">Account status</div>
<div class="sub-step">Registration date range</div>
<div class="sub-step">Activity level (active/inactive)</div>
<div class="step">The administrator selects a specific user to view details.</div>
<div class="step">The system displays comprehensive user profile:</div>
<div class="sub-step">Personal information</div>
<div class="sub-step">Enrolled courses</div>
<div class="sub-step">Progress statistics</div>
<div class="sub-step">Activity history</div>
<div class="sub-step">Violation reports (if any)</div>
<div class="step">The administrator can perform actions:</div>
<div class="sub-step">Edit user information</div>
<div class="sub-step">Reset password</div>
<div class="sub-step">Change account status</div>
<div class="sub-step">Adjust user role</div>
<div class="sub-step">View security logs</div>
<div class="step">The administrator makes necessary changes and clicks "Save."</div>
<div class="step">The system updates user information and logs the administrative action.</div>
<div class="step">The affected user receives notification of account changes (if applicable).</div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. User Not Found</div>
<div class="alt-description">At Step 4, if search returns no results:</div>
<div class="system-message">"No users found matching '[search term]'. Try different keywords or check spelling."</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A2. Concurrent Admin Actions</div>
<div class="alt-description">At Step 9, if another admin is editing the same user:</div>
<div class="system-message">"Administrator [Name] is currently editing this account. Changes may conflict."</div>
<div class="alt-description">System prevents conflicting simultaneous edits.</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A3. Cannot Modify Super Admin</div>
<div class="alt-description">At Step 8, if attempting to change super admin permissions:</div>
<div class="system-message">"Super Administrator accounts cannot be modified. Contact platform owner for changes."</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A4. Bulk Action Requested</div>
<div class="alt-description">At Step 8, if admin selects multiple users:</div>
<div class="alt-description">The system offers bulk actions: suspend, send message, export data</div>
<div class="alt-description">Admin confirms bulk action</div>
<div class="alt-description">System processes with progress indicator</div>
</div>
</div>
</div>
<hr class="usecase-separator">
<div class="usecase-title">5. Assign User Roles</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Actor</div>
<div class="meta-value">Administrator</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The administrator navigates to "Role Management" in the admin panel.</div>
<div class="step">The system displays available roles:</div>
<div class="sub-step">Learner (default)</div>
<div class="sub-step">Content Creator</div>
<div class="sub-step">Mentor/Reviewer</div>
<div class="sub-step">Administrator</div>
<div class="sub-step">Super Administrator</div>
<div class="step">The administrator searches for a specific user.</div>
<div class="step">The administrator selects the user and clicks "Change Role."</div>
<div class="step">The system displays current role and available role options.</div>
<div class="step">The administrator selects the new role from the dropdown.</div>
<div class="step">If promoting to Content Creator or higher, the system prompts:</div>
<div class="system-message">"This role grants elevated permissions. Confirm you want to proceed?"</div>
<div class="step">The administrator confirms the role change.</div>
<div class="step">The system updates the user's role and permissions.</div>
<div class="step">The system sends notification to the user:</div>
<div class="system-message">"Your account role has been updated to [New Role]. You now have access to [features]."</div>
<div class="step">The system logs the role change with timestamp and admin identifier.</div>
<div class="step">The user's interface updates to reflect new capabilities on next login.</div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. Insufficient Permissions</div>
<div class="alt-description">At Step 6, if the admin lacks authority to assign certain roles:</div>
<div class="system-message">"You cannot assign [Role Name]. Only Super Administrators can grant this role."</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A2. User Already Has Role</div>
<div class="alt-description">At Step 6, if attempting to assign current role:</div>
<div class="system-message">"This user already has the [Role Name] role."</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A3. Content Creator Requirements Not Met</div>
<div class="alt-description">At Step 8, if promoting to Content Creator but user hasn't met criteria:</div>
<div class="system-message">"This user hasn't completed Content Creator training. Assign role anyway?"</div>
<div class="alt-description">Admin can proceed with override or require training first.</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A4. Demoting Active Content Creator</div>
<div class="alt-description">At Step 8, if demoting a creator with published content:</div>
<div class="system-message">"This user has [X] published courses. Demoting will affect content management. Reassign content?"</div>
<div class="alt-description">Admin must decide how to handle existing content.</div>
</div>
</div>
</div>
<hr class="usecase-separator">
<div class="usecase-title">6. Monitor Platform Analytics</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Actor</div>
<div class="meta-value">Administrator</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The administrator logs into the admin dashboard.</div>
<div class="step">The administrator navigates to "Platform Analytics."</div>
<div class="step">The system displays a comprehensive analytics dashboard with widgets:</div>
<div class="sub-step">User Metrics: Total users, new registrations, active users (daily/weekly/monthly)</div>
<div class="sub-step">Engagement Metrics: Average session duration, lessons completed, exercises submitted</div>
<div class="sub-step">Content Metrics: Total courses, lessons, exercises; most popular content</div>
<div class="sub-step">Performance Metrics: System uptime, response times, error rates</div>
<div class="sub-step">Revenue Metrics: Enrollments, certification purchases, subscription status</div>
<div class="sub-step">Geographic Distribution: User locations, regional activity</div>
<div class="step">The administrator can customize the date range (last 7 days, 30 days, 90 days, custom).</div>
<div class="step">The administrator can filter by:</div>
<div class="sub-step">User segment (learners, content creators)</div>
<div class="sub-step">Course categories</div>
<div class="sub-step">Learning paths</div>
<div class="sub-step">Device types (desktop, mobile)</div>
<div class="step">The administrator views detailed charts and graphs:</div>
<div class="sub-step">User growth trends (line graph)</div>
<div class="sub-step">Enrollment distribution (pie chart)</div>
<div class="sub-step">Peak usage times (heatmap)</div>
<div class="sub-step">Course completion rates (bar chart)</div>
<div class="step">The administrator can drill down into specific metrics:</div>
<div class="sub-step">Clicks on "Course Completion Rate"</div>
<div class="sub-step">System shows breakdown by course, difficulty level, and time period</div>
<div class="step">The administrator identifies trends:</div>
<div class="sub-step">Notice a drop in engagement on weekends</div>
<div class="sub-step">See spike in mobile usage</div>
<div class="sub-step">Identify popular learning paths</div>
<div class="step">The administrator can export reports in multiple formats:</div>
<div class="sub-step">PDF (executive summary)</div>
<div class="sub-step">Excel (detailed data)</div>
<div class="sub-step">CSV (raw data)</div>
<div class="step">The administrator schedules automated reports:</div>
<div class="sub-step">Weekly summary email</div>
<div class="sub-step">Monthly executive dashboard</div>
<div class="sub-step">Quarterly performance review</div>
<div class="step">The system saves admin's preferred dashboard configuration.</div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. Insufficient Data</div>
<div class="alt-description">At Step 3, if platform is newly launched with minimal data:</div>
<div class="system-message">"Limited data available. Analytics become more meaningful after 30+ days of activity."</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A2. Data Loading Delays</div>
<div class="alt-description">At Step 3, if analytics take time to compile:</div>
<div class="system-message">"Loading analytics... This may take a minute for large datasets."</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A3. Export Limit Exceeded</div>
<div class="alt-description">At Step 9, if requesting very large data export:</div>
<div class="system-message">"This export contains 100,000+ records. It will be processed in the background and emailed when ready."</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A4. Real-Time Data Unavailable</div>
<div class="alt-description">At Step 3, if requesting real-time metrics during system maintenance:</div>
<div class="system-message">"Real-time data temporarily unavailable. Showing last cached data from [timestamp]."</div>
</div>
</div>
</div>
<hr class="usecase-separator">
<div class="usecase-title">7. Review and Filter System Logs</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Actor</div>
<div class="meta-value">Administrator</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The administrator navigates to "System Logs" in the admin panel.</div>
<div class="step">The system displays log categories:</div>
<div class="sub-step">Security logs (authentication, failed logins, permission changes)</div>
<div class="sub-step">Error logs (application errors, API failures)</div>
<div class="sub-step">User activity logs (major actions, submissions)</div>
<div class="sub-step">Content logs (course creation, updates, deletions)</div>
<div class="sub-step">System performance logs (response times, resource usage)</div>
<div class="step">The administrator selects "Security Logs."</div>
<div class="step">The system displays recent security events with details:</div>
<div class="sub-step">Timestamp</div>
<div class="sub-step">Event type</div>
<div class="sub-step">User involved</div>
<div class="sub-step">IP address</div>
<div class="sub-step">Action taken</div>
<div class="sub-step">Outcome (success/failure)</div>
<div class="step">The administrator can filter logs by:</div>
<div class="sub-step">Date/time range</div>
<div class="sub-step">Event severity (info, warning, error, critical)</div>
<div class="sub-step">User or IP address</div>
<div class="sub-step">Event type</div>
<div class="step">The administrator searches for specific events (e.g., "failed login attempts from IP X").</div>
<div class="step">The system highlights matching log entries.</div>
<div class="step">The administrator can expand log entries for detailed information:</div>
<div class="sub-step">Full error stack trace</div>
<div class="sub-step">Request parameters</div>
<div class="sub-step">System state at time of event</div>
<div class="step">The administrator can export filtered logs for analysis.</div>
<div class="step">The system allows the administrator to flag logs for follow-up investigation.</div>
<div class="step">The administrator can set up alerts for specific log patterns:</div>
<div class="sub-step">Multiple failed logins from same IP → possible attack</div>
<div class="sub-step">Spike in errors → system issue requiring attention</div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. Excessive Log Volume</div>
<div class="alt-description">At Step 4, if millions of log entries exist:</div>
<div class="system-message">"Showing most recent 10,000 entries. Narrow your search or time range for specific logs."</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A2. Sensitive Information in Logs</div>
<div class="alt-description">At Step 8, if logs contain sensitive data:</div>
<div class="alt-description">The system masks passwords, tokens, personal data</div>
<div class="alt-description">Only super admins can view unmasked logs with additional authentication</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A3. Log Storage Full</div>
<div class="alt-description">At Step 2, if log storage approaching limit:</div>
<div class="system-message">"Warning: Log storage at 85% capacity. Archive or delete old logs to prevent data loss."</div>
</div>
</div>
</div>
<hr class="usecase-separator">
<div class="usecase-title">8. Remove Inappropriate Content</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Actor</div>
<div class="meta-value">Administrator</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The administrator receives a content flagging notification or browses flagged content.</div>
<div class="step">The administrator navigates to "Content Moderation" section.</div>
<div class="step">The system displays pending moderation queue:</div>
<div class="sub-step">Flagged courses</div>
<div class="sub-step">Flagged exercises</div>
<div class="sub-step">Flagged forum posts</div>
<div class="sub-step">Flagged solutions</div>
<div class="sub-step">Reported user profiles</div>
<div class="step">Each item shows:</div>
<div class="sub-step">Content preview</div>
<div class="sub-step">Reporter information</div>
<div class="sub-step">Reason for flag</div>
<div class="sub-step">Timestamp</div>
<div class="sub-step">Content creator</div>
<div class="step">The administrator selects a flagged item to review.</div>
<div class="step">The system displays the full content with context.</div>
<div class="step">The administrator evaluates against platform guidelines:</div>
<div class="sub-step">Offensive language</div>
<div class="sub-step">Plagiarized content</div>
<div class="sub-step">Inappropriate images</div>
<div class="sub-step">Misleading information</div>
<div class="sub-step">Spam or advertising</div>
<div class="sub-step">Copyright violations</div>
<div class="step">If content violates guidelines, the administrator chooses action:</div>
<div class="sub-step">Remove content immediately</div>
<div class="sub-step">Require revision by creator</div>
<div class="sub-step">Issue warning to creator</div>
<div class="sub-step">Suspend creator account</div>
<div class="step">The administrator selects "Remove Content."</div>
<div class="step">The system prompts for removal reason (required for transparency).</div>
<div class="step">The administrator enters: "Contains plagiarized code from [source]. Violates copyright policy."</div>
<div class="step">The system removes the content from public view.</div>
<div class="step">The system notifies the content creator:</div>
<div class="system-message">"Your content '[Title]' has been removed for: [Reason]. You may appeal this decision or create compliant content."</div>
<div class="step">If repeat violation, the system automatically escalates to account suspension.</div>
<div class="step">The system logs all moderation actions for audit trail.</div>
<div class="step">The reporter receives notification that their flag was reviewed and action taken.</div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. Content Doesn't Violate Guidelines</div>
<div class="alt-description">At Step 8, if content is acceptable:</div>
<div class="alt-description">Administrator selects "Dismiss Flag"</div>
<div class="alt-description">Enters reason: "Content reviewed - no violation found. Appropriate educational material."</div>
<div class="alt-description">Reporter notified that content was reviewed but approved</div>
<div class="alt-description">Flag dismissed from queue</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A2. Borderline Content</div>
<div class="alt-description">At Step 8, if content is questionable but not clearly violating:</div>
<div class="alt-description">Administrator selects "Request Revision"</div>
<div class="alt-description">Specifies improvements needed</div>
<div class="alt-description">Creator has 7 days to revise</div>
<div class="alt-description">If not revised, content is removed</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A3. False/Malicious Reporting</div>
<div class="alt-description">At Step 7, if multiple flags from same user are consistently dismissed:</div>
<div class="system-message">"User [X] has filed 5+ false reports. Possible abuse of flagging system."</div>
<div class="alt-description">Administrator can warn or restrict user's flagging ability</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A4. Emergency Content Removal</div>
<div class="alt-description">At Step 1, for severe violations (illegal content, safety concerns):</div>
<div class="alt-description">Administrator uses "Emergency Remove" option</div>
<div class="alt-description">Content immediately removed without notification delay</div>
<div class="alt-description">Account automatically suspended pending investigation</div>
<div class="alt-description">Legal team notified if necessary</div>
</div>
</div>
</div>
<hr class="usecase-separator">
<div class="usecase-title">9. Issue User Warnings</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Actor</div>
<div class="meta-value">Administrator</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The administrator identifies a policy violation (minor infraction).</div>
<div class="step">The administrator navigates to the user's account.</div>
<div class="step">The administrator clicks "Issue Warning."</div>
<div class="step">The system displays warning form with fields:</div>
<div class="sub-step">Violation type (dropdown: spam, inappropriate language, plagiarism, etc.)</div>
<div class="sub-step">Severity (Minor, Moderate, Severe)</div>
<div class="sub-step">Description of violation</div>
<div class="sub-step">Evidence (attach screenshots, links)</div>
<div class="sub-step">Suggested corrective action</div>
<div class="step">The administrator fills in the form:</div>
<div class="sub-step">Violation: "Inappropriate forum language"</div>
<div class="sub-step">Severity: Minor</div>
<div class="sub-step">Description: "Used profanity in discussion thread on [date]"</div>
<div class="sub-step">Action: "Please review community guidelines and maintain respectful communication"</div>
<div class="step">The administrator selects "Send Warning."</div>
<div class="step">The system records the warning on user's account.</div>
<div class="step">The system sends notification to the user:</div>
<div class="sub-step">Email and in-platform notification</div>
<div class="sub-step">Clear explanation of violation</div>
<div class="sub-step">Link to relevant policy</div>
<div class="sub-step">Consequences of repeated violations</div>
<div class="step">The warning appears on user's account record (visible to admins only).</div>
<div class="step">The system tracks warning count:</div>
<div class="sub-step">1st warning: Notice only</div>
<div class="sub-step">2nd warning: 24-hour activity restriction</div>
<div class="sub-step">3rd warning: 7-day suspension</div>
<div class="sub-step">4th warning: Permanent ban</div>
<div class="step">User can acknowledge warning or submit an appeal.</div>
<div class="step">The system logs the warning issuance.</div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. User Appeals Warning</div>
<div class="alt-description">After Step 11, if user submits appeal:</div>
<div class="alt-description">Administrator reviews appeal and additional context</div>
<div class="alt-description">Can uphold, modify, or rescind warning</div>
<div class="alt-description">User notified of appeal decision with explanation</div>
<div class="alt-description">Decision is final unless escalated to senior admin</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A2. Warning Escalation Required</div>
<div class="alt-description">At Step 5, if violation is more serious than initially assessed:</div>
<div class="alt-description">Administrator changes severity to "Severe"</div>
<div class="system-message">"This user has [X] prior warnings. Escalated action may be warranted."</div>
<div class="alt-description">Administrator can proceed with suspension instead</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A3. Pattern of Violations</div>
<div class="alt-description">At Step 3, if user has prior warnings:</div>
<div class="system-message">"This user has [X] prior warnings. Escalated action may be warranted."</div>
<div class="alt-description">Suggests automatic penalties based on policy</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A4. Warning Expiration</div>
<div class="alt-description">Warnings expire after 90 days of good behavior</div>
<div class="alt-description">System automatically archives expired warnings</div>
<div class="alt-description">User's slate cleaned if no violations in 90 days</div>
</div>
</div>
</div>
<hr class="usecase-separator">

**Fully Dressed Format Use Cases**

<div class="usecase-title">10. Design Learning Path</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Primary Actor</div>
<div class="meta-value">Administrator</div>
</div>
</div>
<div class="stakeholders">
<div class="stakeholder-item">
<span class="stakeholder-role">Administrator:</span> Wants to design a coherent, strategic curriculum that aligns with platform goals.
</div>
<div class="stakeholder-item">
<span class="stakeholder-role">Content Creators:</span> Need clear assignments and guidance on what content to create.
</div>
<div class="stakeholder-item">
<span class="stakeholder-role">Learners:</span> Need a clear, logical progression that builds on previous knowledge.
</div>
<div class="stakeholder-item">
<span class="stakeholder-role">Platform:</span> Needs well-structured paths that improve learning outcomes and retention.
</div>
</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Preconditions</div>
<div class="meta-value">
<div>Administrator must be logged in with appropriate privileges.</div>
<div>Multiple courses and lessons should exist in the system (or be planned).</div>
<div>Administrator should have curriculum design knowledge.</div>
</div>
</div>
</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Postconditions</div>
<div class="meta-value">
<div>A complete learning path structure is created.</div>
<div>Content creators are assigned to specific modules/tiers.</div>
<div>Path is organized into skill tiers with clear progression.</div>
<div>Path is ready for content creation phase.</div>
<div>Path can be published when all content is completed.</div>
</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The administrator navigates to "Learning Path Management" in the admin panel.</div>
<div class="step">The administrator clicks "Create New Learning Path."</div>
<div class="step">The system displays the path creation wizard with fields:</div>
<div class="sub-step">Path name (e.g., "Python Full-Stack Developer")</div>
<div class="sub-step">Path description and learning objectives</div>
<div class="sub-step">Target audience (beginners, intermediate, advanced)</div>
<div class="sub-step">Estimated total duration (e.g., 6 months, 200 hours)</div>
<div class="sub-step">Career outcomes or certifications earned</div>
<div class="sub-step">Prerequisites (if any)</div>
<div class="step">The administrator enters the basic path information.</div>
<div class="step">Step 1: Define Skill Tiers Structure</div>
<div class="sub-step">The system displays a visual canvas for organizing content</div>
<div class="sub-step">The administrator creates skill tiers (levels):</div>
<div class="system-message">Tier 1: Foundation (variables, data types, basic syntax)</div>
<div class="system-message">Tier 2: Core Concepts (loops, functions, data structures)</div>
<div class="system-message">Tier 3: Intermediate (OOP, file handling, APIs)</div>
<div class="system-message">Tier 4: Advanced (frameworks, databases, deployment)</div>
<div class="system-message">Tier 5: Mastery (architecture, optimization, real projects)</div>
<div class="step">For each tier, the administrator defines:</div>
<div class="sub-step">Tier name and description</div>
<div class="sub-step">Learning objectives</div>
<div class="sub-step">Expected number of courses/lessons</div>
<div class="sub-step">Estimated time to complete tier</div>
<div class="sub-step">Tier completion criteria</div>
<div class="step">Step 2: Assign Content Requirements</div>
<div class="sub-step">For each tier, the administrator specifies required content types:</div>
<div class="system-message">Number of video lessons needed</div>
<div class="system-message">Number of coding exercises needed</div>
<div class="system-message">Number of quizzes/assessments needed</div>
<div class="step">Step 3: Set Prerequisites and Dependencies</div>
<div class="sub-step">The administrator defines relationships between tiers:</div>
<div class="system-message">Tier 2 requires 100% completion of Tier 1</div>
<div class="system-message">Tier 3 requires 80% mastery of Tier 2 skills</div>
<div class="system-message">Optional branches for advanced learners</div>
<div class="step">The system visualizes dependencies as a flowchart.</div>
<div class="step">Step 4: Assign Content Creators to Tiers</div>
<div class="sub-step">For each tier/module, the administrator clicks "Assign Creator."</div>
<div class="sub-step">The system displays a list of available content creators with:</div>
<div class="system-message">Expertise areas</div>
<div class="system-message">Current workload</div>
<div class="system-message">Previous content quality ratings</div>
<div class="system-message">Availability status</div>
<div class="step">The administrator selects one or multiple creators for each tier:</div>
<div class="sub-step">Primary creator (responsible for main content)</div>
<div class="sub-step">Contributing creators (assist with specific topics)</div>
<div class="sub-step">Reviewer (quality checks)</div>
<div class="step">The system displays assignment summary showing which creators are assigned where.</div>
<div class="step">Step 5: Create Content Creation Timeline</div>
<div class="sub-step">The administrator sets deadlines for each tier:</div>
<div class="system-message">Tier 1 content: Due in 4 weeks</div>
<div class="system-message">Tier 2 content: Due in 8 weeks</div>
<div class="system-message">And so on...</div>
<div class="sub-step">The administrator can set milestones (e.g., "50% of Tier 1 lessons by week 2")</div>
<div class="step">Step 6: Configure Assessment Checkpoints</div>
<div class="sub-step">The administrator adds evaluation points between tiers:</div>
<div class="system-message">End-of-tier quizzes (specify passing score: 70%)</div>
<div class="system-message">Portfolio projects (define requirements)</div>
<div class="system-message">Skill validation exercises</div>
<div class="step">The administrator defines checkpoint passing criteria.</div>
<div class="step">Step 7: Set Adaptive Learning Rules (Optional)</div>
<div class="sub-step">The administrator configures adaptive progression rules:</div>
<div class="system-message">If learner struggles with topic X → recommend supplementary exercises</div>
<div class="system-message">If learner excels → offer accelerated track options</div>
<div class="system-message">If learner abandons for 7+ days → send encouragement notification</div>
<div class="step">Step 8: Define Milestones and Rewards</div>
<div class="sub-step">The administrator creates milestone achievements:</div>
<div class="system-message">25% completion → "Python Beginner" badge + 500 XP</div>
<div class="system-message">50% completion → "Python Intermediate" badge + 1000 XP</div>
<div class="system-message">75% completion → "Python Advanced" badge + 1500 XP</div>
<div class="system-message">100% completion → Certificate + "Python Master" badge + 3000 XP</div>
<div class="step">Step 9: Configure Enrollment Options</div>
<div class="sub-step">The administrator sets:</div>
<div class="system-message">Enrollment type: Free / Paid / Premium</div>
<div class="system-message">Entry requirements: Diagnostic quiz score / Prior experience</div>
<div class="system-message">Maximum concurrent enrollments (if limited)</div>
<div class="system-message">Certification fee (if applicable)</div>
<div class="step">The administrator writes a compelling path overview for learners:</div>
<div class="sub-step">What you'll learn (detailed breakdown)</div>
<div class="sub-step">Career opportunities (job roles, salary ranges)</div>
<div class="sub-step">Success stories from graduates (if available)</div>
<div class="step">The administrator adds preview content (free introductory lessons).</div>
<div class="step">The administrator reviews the complete path structure.</div>
<div class="step">The administrator clicks "Validate Learning Path."</div>
<div class="step">System Validation Process:</div>
<div class="sub-step">Checks for circular dependencies (A requires B, B requires A)</div>
<div class="sub-step">Verifies all tiers have assigned creators</div>
<div class="sub-step">Ensures prerequisite logic is sound</div>
<div class="sub-step">Validates that content requirements are reasonable</div>
<div class="sub-step">Estimates total time commitment is realistic</div>
<div class="step">The system reports validation results.</div>
<div class="step">If validation passes, the administrator sees: "✓ Learning path structure validated successfully."</div>
<div class="step">The administrator sets the path status:</div>
<div class="sub-step">Draft (visible only to admin and assigned creators)</div>
<div class="sub-step">In Development (creators can start working)</div>
<div class="sub-step">Beta (open to limited testers once content is ready)</div>
<div class="sub-step">Published (publicly available after all content is completed)</div>
<div class="step">The administrator selects "In Development" to activate content creation.</div>
<div class="step">Step 10: Notify Assigned Content Creators</div>
<div class="sub-step">The system sends notifications to all assigned creators:</div>
<div class="system-message">"You've been assigned to create content for '[Path Name]' - [Tier/Module Name]."</div>
<div class="sub-step">Notification includes:</div>
<div class="system-message">Content requirements</div>
<div class="system-message">Deadlines</div>
<div class="system-message">Guidelines and templates</div>
<div class="system-message">Contact info for coordination</div>
<div class="step">Assigned creators receive task assignments in their dashboards.</div>
<div class="step">The system creates a project management view showing:</div>
<div class="sub-step">Content creation progress for each tier</div>
<div class="sub-step">Creator task statuses</div>
<div class="sub-step">Upcoming deadlines</div>
<div class="sub-step">Bottlenecks or delays</div>
<div class="step">The administrator can monitor progress and send reminders.</div>
<div class="step">The system displays: "Learning path '[Path Name]' created successfully! Content creators have been notified."</div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. Circular Dependency Detected</div>
<div class="alt-description">At Step 23, if prerequisites create a loop:</div>
<div class="system-message">"✗ Circular dependency detected: Tier A → Tier B → Tier C → Tier A"</div>
<div class="alt-description">Shows visual diagram of the problematic chain</div>
<div class="alt-description">Validation fails; administrator must restructure</div>
<div class="alt-description">Suggests which prerequisite to remove to break cycle</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A2. No Content Creators Available</div>
<div class="alt-description">At Step 10-11, if no creators match the required expertise:</div>
<div class="system-message">"⚠ No content creators with '[Skill]' expertise are currently available."</div>
<div class="alt-description">Administrator options:</div>
<div class="alt-description">Recruit new creators</div>
<div class="alt-description">Assign less experienced creator with mentor support</div>
<div class="alt-description">Delay tier creation until suitable creator is available</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A3. Content Creator Declines Assignment</div>
<div class="alt-description">After Step 28, if a creator declines:</div>
<div class="alt-description">Creator provides reason (workload, expertise mismatch, timeline)</div>
<div class="alt-description">System notifies administrator</div>
<div class="alt-description">Administrator must reassign to another creator</div>
<div class="alt-description">Timeline may need adjustment</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A4. Unrealistic Time Commitment</div>
<div class="alt-description">At Step 23, if total estimated time is excessive:</div>
<div class="system-message">"⚠ This path requires ~500 hours. Average learner completion for similar paths is 6-12 months. Consider breaking into multiple paths or reducing content."</div>
<div class="alt-description">Shows completion rate data for paths of similar length</div>
<div class="alt-description">Administrator can proceed or revise</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A5. Content Requirements Exceed Creator Capacity</div>
<div class="alt-description">At Step 13, if deadlines are too aggressive:</div>
<div class="system-message">"⚠ Current assignments require 200 hours of content creation in 4 weeks. Assigned creators have capacity for 120 hours. Adjust timeline or add creators."</div>
<div class="alt-description">Administrator must revise timeline or add more creators</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A6. Tier Without Learning Objectives</div>
<div class="alt-description">At Step 6, if a tier lacks clear objectives:</div>
<div class="system-message">"⚠ Tier [X] has no defined learning objectives. Creators need clear goals."</div>
<div class="alt-description">Administrator must add objectives before proceeding</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A7. Missing Assessment Checkpoints</div>
<div class="alt-description">At Step 14-15, if few or no checkpoints exist:</div>
<div class="system-message">"⚠ This path lacks assessment checkpoints. Learners may progress without adequate skill validation."</div>
<div class="alt-description">Recommends adding checkpoints every 20-30 hours of content</div>
<div class="alt-description">Administrator can add checkpoints or acknowledge and proceed</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A8. Duplicate or Overlapping Path</div>
<div class="alt-description">At Step 22, if a very similar path exists:</div>
<div class="system-message">"⚠ A similar learning path exists: '[Path Name]'. Overlap: 60% of content. This may confuse learners or dilute enrollments."</div>
<div class="alt-description">Shows comparison of content overlap</div>
<div class="alt-description">Administrator options:</div>
<div class="alt-description">Differentiate the new path clearly</div>
<div class="alt-description">Merge with existing path</div>
<div class="alt-description">Archive old path if replacing it</div>
<div class="alt-description">Proceed with justification</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A9. Creator Workload Imbalance</div>
<div class="alt-description">At Step 11-12, if one creator is overloaded:</div>
<div class="system-message">"⚠ [Creator Name] is assigned to 3 tiers with deadlines in the same month. Consider redistributing workload."</div>
<div class="alt-description">Suggests alternative creators</div>
<div class="alt-description">Administrator can adjust assignments</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A10. Budget Constraints for Paid Creators</div>
<div class="alt-description">At Step 11, if assigning paid creators:</div>
<div class="system-message">"⚠ Current assignments will cost $[X], exceeding the $[Y] budget. Adjust assignments or increase budget."</div>
<div class="alt-description">Administrator must optimize assignments</div>
</div>
</div>
</div>
<div class="extensions">
<div class="extensions-header">Extensions</div>
<div class="extensions-container">
<div class="extension-item">
<div class="ext-title">E1. Path Branching</div>
<div class="alt-description">Administrator can design choice points in the path:</div>
<div class="alt-description">After Core Python, learner chooses:</div>
<div class="alt-description">Branch A: Data Science specialization</div>
<div class="alt-description">Branch B: Web Development specialization</div>
<div class="alt-description">Branch C: Automation/DevOps specialization</div>
<div class="alt-description">Each branch has unique content, assigned to specialized creators</div>
</div>
<div class="extension-item">
<div class="ext-title">E2. Collaborative Path Design</div>
<div class="alt-description">Multiple administrators can co-design a path:</div>
<div class="alt-description">Each contributes expertise in specific areas</div>
<div class="alt-description">System tracks changes and responsibilities</div>
<div class="alt-description">Approval workflow for major structural changes</div>
</div>
<div class="extension-item">
<div class="ext-title">E3. Path Templates</div>
<div class="alt-description">Administrator can use templates for common path types:</div>
<div class="alt-description">"Beginner to Professional" template</div>
<div class="alt-description">"Specialization Track" template</div>
<div class="alt-description">"Certification Prep" template</div>
<div class="alt-description">Templates include suggested tier structures and checkpoints</div>
</div>
<div class="extension-item">
<div class="ext-title">E4. Content Reuse from Existing Paths</div>
<div class="alt-description">Administrator can import tiers/modules from other successful paths:</div>
<div class="alt-description">Select existing content to include</div>
<div class="alt-description">System links to original content (doesn't duplicate)</div>
<div class="alt-description">Credits original creators</div>
<div class="alt-description">Useful for building hybrid or cross-domain paths</div>
</div>
<div class="extension-item">
<div class="ext-title">E5. Dynamic Path Updates</div>
<div class="alt-description">After publication, administrator can update path without disrupting active learners:</div>
<div class="alt-description">Add new optional modules</div>
<div class="alt-description">Deprecate outdated content (remains accessible to enrolled learners)</div>
<div class="alt-description">Update prerequisites if needed</div>
<div class="alt-description">System notifies active learners of updates with opt-in</div>
</div>
<div class="extension-item">
<div class="ext-title">E6. Path Analytics Dashboard (Post-Publication)</div>
<div class="alt-description">After content is created and path is published, administrator accesses analytics:</div>
<div class="alt-description">Enrollment trends over time</div>
<div class="alt-description">Completion rates per tier</div>
<div class="alt-description">Common drop-off points</div>
<div class="alt-description">Average time per module</div>
<div class="alt-description">Learner satisfaction ratings</div>
<div class="alt-description">Employment outcomes (if tracked)</div>
<div class="alt-description">Creator performance metrics</div>
<div class="alt-description">Data informs path improvements</div>
</div>
<div class="extension-item">
<div class="ext-title">E7. Certification Integration</div>
<div class="alt-description">Administrator can configure official certification:</div>
<div class="alt-description">Final comprehensive exam specifications</div>
<div class="alt-description">Portfolio review criteria</div>
<div class="alt-description">Interview simulation requirements</div>
<div class="alt-description">Digital credential design</div>
<div class="alt-description">Verification method (blockchain, QR code)</div>
</div>
<div class="extension-item">
<div class="ext-title">E8. Corporate/Academic Partnerships</div>
<div class="alt-description">Paths designed for institutions:</div>
<div class="alt-description">Align with specific curriculum standards</div>
<div class="alt-description">Include institutional branding</div>
<div class="alt-description">Provide instructor dashboard for monitoring groups</div>
<div class="alt-description">Export transcripts and grades</div>
<div class="alt-description">Bulk enrollment management</div>
</div>
</div>
</div>
<div class="special-requirements">
<div class="req-header">Special Requirements</div>
<ul>
<li>The visual path designer must support drag-and-drop for organizing tiers.</li>
<li>The system must prevent circular dependencies through real-time validation.</li>
<li>Administrator must be able to visualize the entire path structure at a glance.</li>
<li>All creator assignments must be logged with timestamps.</li>
<li>System must send automated reminders to creators as deadlines approach.</li>
<li>Content creation progress must be trackable in real-time.</li>
<li>Administrators must be able to export path structure as PDF for documentation.</li>
<li>The system must support versioning for path updates.</li>
<li>All prerequisite logic must be clearly documented and testable.</li>
<li>System must handle paths with 50+ courses without performance degradation.</li>
<li>Path analytics must aggregate data without exposing individual learner privacy.</li>
<li>Paths must support localization for international audiences.</li>
</ul>
</div>
<div class="metadata-section">
<div class="section-label">Frequency of Use</div>
<div class="section-content">
Moderate frequency by administrators.
Typically 1-2 new major paths per quarter.
High usage during platform expansion or curriculum revisions.
Ongoing monitoring and updates for existing paths.
</div>
</div>
<div class="metadata-section">
<div class="section-label">Open Issues</div>
<div class="section-content">
Should administrators require approval from senior management for new paths?
How do we handle creator disputes over assignments or deadlines?
Should there be financial incentives for creators who meet quality/timeline goals?
Can AI assist in recommending optimal path structures based on learning science?
How do we measure ROI for paths (enrollments vs. development cost)?
Should learning paths have expiration dates or version numbers?
</div>
</div>
<hr class="usecase-separator">

#### <div class="subsection">5.3.2 Content Creator Use Cases</div>
**Brief Format Use Cases**

<div class="brief-usecase">
<div class="usecase-title">1. View Created Content</div>
<div class="description">The content creator views a list of all courses, lessons, and exercises they have authored.</div>
</div>
<hr class="usecase-separator">
<div class="brief-usecase">
<div class="usecase-title">2. Preview Lesson</div>
<div class="description">The content creator previews how learners will see and interact with a lesson before publishing.</div>
</div>
<hr class="usecase-separator">
<div class="brief-usecase">
<div class="usecase-title">3. Duplicate Exercise</div>
<div class="description">The content creator clones an existing exercise as a template for creating similar challenges.</div>
</div>
<hr class="usecase-separator">
<div class="brief-usecase">
<div class="usecase-title">4. Delete Draft</div>
<div class="description">The content creator removes unpublished course materials or exercises from their drafts.</div>
</div>
<hr class="usecase-separator">

**Casual Format Use Cases**

<div class="usecase-title">5. Register Account</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Actor</div>
<div class="meta-value">Content Creator</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The Content Creator navigates to the "Sign Up" page of the platform.</div>
<div class="step">The Content Creator selects the "Content Creator" role from account type options.</div>
<div class="step">The Content Creator provides required details:
<div class="sub-step">Full name</div>
<div class="sub-step">Email address</div>
<div class="sub-step">Password (with confirmation)</div>
<div class="sub-step">Username</div>
<div class="sub-step">Resume/CV upload</div>
</div>
<div class="step">The Content Creator agrees to Terms and Conditions and submits the form.</div>
<div class="step">The system validates input (email format, password strength, username uniqueness, resume/CV format).</div>
<div class="step">The system sends a verification email to the provided address.</div>
<div class="step">The Content Creator clicks the OTP in the email.</div>
<div class="step">Admin activates the account after reviewing the resume/CV.</div>
<div class="step">The system redirects to the login page.</div>
<div class="step">The Content Creator logs in successfully and sees a welcome message.</div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. Email Already Exists</div>
<div class="alt-description">At Step 5, if the email is already registered, the system displays:</div>
<div class="system-message">"An account with this email already exists. Please log in or use a different email."</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A2. Weak Password</div>
<div class="alt-description">At Step 5, if the password doesn't meet security criteria (minimum 8 characters with uppercase, lowercase, numbers, special characters), the system displays:</div>
<div class="system-message">"Your password must be at least 8 characters long and include uppercase, lowercase, numbers, and symbols."</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A3. Username Taken</div>
<div class="alt-description">At Step 5, if the username is already in use, the system displays:</div>
<div class="system-message">"This username is already taken. Please choose a different one."</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A4. Admin Reject Resume/CV</div>
<div class="alt-description">At Step 8, if the admin rejects the uploaded resume/CV after review, the system displays:</div>
<div class="system-message">"Your resume/CV did not meet our criteria. Please update and resubmit."</div>
</div>
</div>
</div>
<hr class="usecase-separator">
<div class="usecase-title">6. Login to System</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Actor</div>
<div class="meta-value">Content Creator</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The content creator navigates to the login page.</div>
<div class="step">The content creator enters their email and password.</div>
<div class="step">The content creator clicks "Login."</div>
<div class="step">The system validates credentials.</div>
<div class="step">The system authenticates the content creator and redirects to the dashboard.</div>
<div class="step">The content creator sees their personalized dashboard with progress and recommendations.</div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. Incorrect Credentials</div>
<div class="alt-description">At Step 4, if credentials are invalid, the system displays:</div>
<div class="system-message">"Incorrect email or password. Please try again."</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A2. Account Not Verified</div>
<div class="alt-description">At Step 4, if the email is not verified, the system displays:</div>
<div class="system-message">"Please verify your email address before logging in. Check your inbox for the OTP."</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A3. Account Suspended</div>
<div class="alt-description">At Step 4, if the account is suspended, the system displays:</div>
<div class="system-message">"Your account has been suspended. Please contact support for assistance."</div>
</div>
</div>
</div>
<hr class="usecase-separator">
<div class="usecase-title">7. Create Course</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Actor</div>
<div class="meta-value">Content Creator</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The content creator logs into the platform.</div>
<div class="step">The content creator navigates to "Content Management" section.</div>
<div class="step">The content creator clicks "Create New Course."</div>
<div class="step">The system displays a course creation form with fields:
<div class="sub-step">Course title</div>
<div class="sub-step">Course description</div>
<div class="sub-step">Programming language (Python/JavaScript/Multi-language)</div>
<div class="sub-step">Difficulty level (Beginner/Intermediate/Advanced)</div>
<div class="sub-step">Estimated duration</div>
<div class="sub-step">Prerequisites</div>
<div class="sub-step">Course thumbnail image</div>
</div>
<div class="step">The content creator fills in all required information.</div>
<div class="step">The content creator organizes the course into modules:
<div class="sub-step">Adds module titles</div>
<div class="sub-step">Orders modules sequentially</div>
<div class="sub-step">Assigns estimated time per module</div>
</div>
<div class="step">The content creator clicks "Create Course."</div>
<div class="step">The system validates all inputs and generates a unique course ID.</div>
<div class="step">The system creates the course structure and saves it as a draft.</div>
<div class="step">The system displays:
<div class="system-message">"Course created successfully! Now you can add lessons and exercises."</div>
</div>
<div class="step">The content creator is redirected to the course dashboard to begin adding content.</div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. Missing Required Fields</div>
<div class="alt-description">At Step 7, if required fields are empty:</div>
<div class="system-message">"Please complete all required fields: [Field Names]."</div>
<div class="alt-description">Incomplete fields are highlighted in red.</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A2. Duplicate Course Title</div>
<div class="alt-description">At Step 8, if a course with the same title exists:</div>
<div class="system-message">"A course with this title already exists. Please choose a different title or modify the existing course."</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A3. Invalid Image Format</div>
<div class="alt-description">At Step 5, if the thumbnail isn't in an accepted format:</div>
<div class="system-message">"Please upload an image in JPG, PNG, or WebP format."</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A4. Course Creation Limit Reached</div>
<div class="alt-description">At Step 3, if the creator has reached their course limit:</div>
<div class="system-message">"You've reached the maximum number of draft courses (5). Please publish or delete existing drafts."</div>
</div>
</div>
</div>
<hr class="usecase-separator">
<div class="usecase-title">8. Create Lesson</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Actor</div>
<div class="meta-value">Content Creator</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The content creator selects an existing course from their dashboard.</div>
<div class="step">The content creator selects a module within the course.</div>
<div class="step">The content creator clicks "Add New Lesson."</div>
<div class="step">The system displays the lesson creation interface with sections:
<div class="sub-step">Lesson title</div>
<div class="sub-step">Lesson objectives</div>
<div class="sub-step">Content type selection (Text/Video)</div>
<div class="sub-step">Estimated completion time</div>
</div>
<div class="step">The content creator enters the lesson title and objectives.</div>
<div class="step">The content creator creates multi-format content:
<div class="sub-step">Writes explanatory text with rich formatting</div>
<div class="sub-step">Uploads or embeds video tutorial</div>
</div>
<div class="step">The content creator adds code snippets with syntax highlighting.</div>
<div class="step">The content creator sets lesson order within the module.</div>
<div class="step">The content creator can mark the lesson as:
<div class="sub-step">Draft (not visible to learners)</div>
<div class="sub-step">Published (immediately available)</div>
<div class="sub-step">Scheduled (available on specific date)</div>
</div>
<div class="step">The content creator clicks "Save Lesson."</div>
<div class="step">The system validates content and saves the lesson.</div>
<div class="step">The system displays:
<div class="system-message">"Lesson saved successfully!"</div>
</div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. Video Upload Fails</div>
<div class="alt-description">At Step 6, if video upload encounters an error:</div>
<div class="system-message">"Video upload failed. Please ensure the file is under 500MB and in MP4 format."</div>
<div class="alt-description">Text content is saved as draft automatically.</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A2. Content Too Short</div>
<div class="alt-description">At Step 11, if the lesson content is minimal:</div>
<div class="system-message">"This lesson appears brief. Consider adding more detail to help learners understand the concept."</div>
<div class="alt-description">The creator can proceed or add more content.</div>
</div>
</div>
</div>
<hr class="usecase-separator">
<div class="usecase-title">9. Add Multimedia Content</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Actor</div>
<div class="meta-value">Content Creator</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The content creator is editing a lesson.</div>
<div class="step">The content creator clicks "Add Media" in the content editor.</div>
<div class="step">The system displays media upload options:
<div class="sub-step">Upload video file</div>
<div class="sub-step">Embed YouTube/Vimeo link</div>
<div class="sub-step">Upload images/diagrams</div>
<div class="sub-step">Add audio explanations</div>
</div>
<div class="step">The content creator selects "Upload Video."</div>
<div class="step">The content creator selects a video file from their device.</div>
<div class="step">The system validates file size (max 500MB) and format (MP4, WebM).</div>
<div class="step">The system displays upload progress bar.</div>
<div class="step">The video uploads successfully to cloud storage.</div>
<div class="step">The system generates a video player preview.</div>
<div class="step">The content creator positions the video within the lesson content.</div>
<div class="step">The content creator adds captions or transcripts (optional).</div>
<div class="step">The content creator saves the lesson with embedded media.</div>
<div class="step">The system confirms:
<div class="system-message">"Media added successfully!"</div>
</div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. File Size Exceeds Limit</div>
<div class="alt-description">At Step 6, if the video is larger than 500MB:</div>
<div class="system-message">"Video file is too large. Please compress to under 500MB or use an external hosting link."</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A2. Unsupported Format</div>
<div class="alt-description">At Step 6, if the file format isn't supported:</div>
<div class="system-message">"This format is not supported. Please upload MP4 or WebM files."</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A3. Upload Interrupted</div>
<div class="alt-description">At Step 7, if internet connection drops:</div>
<div class="alt-description">The system attempts to resume upload.</div>
<div class="alt-description">If unsuccessful after 3 attempts:</div>
<div class="system-message">"Upload interrupted. Please try again."</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A4. Embed Link Invalid</div>
<div class="alt-description">At Step 4, if an external video link doesn't work:</div>
<div class="system-message">"Unable to embed this link. Please verify the URL and privacy settings."</div>
</div>
</div>
</div>
<hr class="usecase-separator">
<div class="usecase-title">10. Localize Content</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Actor</div>
<div class="meta-value">Content Creator</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The content creator selects a published course or lesson.</div>
<div class="step">The content creator clicks "Add Translation."</div>
<div class="step">The system displays available languages (Arabic, English).</div>
<div class="step">The content creator selects the target language (e.g., Arabic).</div>
<div class="step">The system creates a duplicate content template with original text.</div>
<div class="step">The content creator translates:
<div class="sub-step">Lesson titles and descriptions</div>
<div class="sub-step">Content paragraphs</div>
<div class="sub-step">Code comments</div>
<div class="sub-step">Exercise instructions</div>
</div>
<div class="step">The content creator adjusts formatting for RTL (right-to-left) if translating to Arabic.</div>
<div class="step">The content creator can use AI-assisted translation for initial draft.</div>
<div class="step">The content creator reviews and refines the AI-generated translation.</div>
<div class="step">The content creator saves the localized version.</div>
<div class="step">The system marks the content as available in multiple languages.</div>
<div class="step">Learners can now switch between languages when viewing the content.</div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. AI Translation Unavailable</div>
<div class="alt-description">At Step 8, if AI service is down:</div>
<div class="system-message">"AI translation is temporarily unavailable. Please translate manually."</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A2. Incomplete Translation</div>
<div class="alt-description">At Step 10, if some sections remain untranslated:</div>
<div class="system-message">"Some content is still in [Original Language]. Do you want to save anyway?"</div>
<div class="alt-description">The creator can save as draft or complete translation.</div>
</div>
</div>
</div>
<hr class="usecase-separator">
<div class="usecase-title">11. Categorize Exercise Difficulty</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Actor</div>
<div class="meta-value">Content Creator</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The content creator is creating or editing an exercise.</div>
<div class="step">The system displays difficulty level options:
<div class="sub-step">Beginner (Basic syntax and concepts)</div>
<div class="sub-step">Intermediate (Multiple concepts, logic building)</div>
<div class="sub-step">Advanced (Complex algorithms, optimization)</div>
<div class="sub-step">Expert (Real-world problems, system design)</div>
</div>
<div class="step">The content creator selects the appropriate difficulty.</div>
<div class="step">The system displays difficulty criteria to guide selection.</div>
<div class="step">The content creator assigns skill tags (e.g., "loops", "arrays", "recursion").</div>
<div class="step">The system estimates average completion time based on difficulty.</div>
<div class="step">The content creator can test the exercise themselves to verify difficulty.</div>
<div class="step">The content creator saves the categorization.</div>
<div class="step">The system uses this information for:
<div class="sub-step">Adaptive learning path recommendations</div>
<div class="sub-step">Filtering in course catalog</div>
<div class="sub-step">XP reward calculation</div>
</div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. Difficulty Mismatch Detected</div>
<div class="alt-description">At Step 8, if the system's AI analysis suggests different difficulty:</div>
<div class="system-message">"Our analysis suggests this exercise may be [Suggested Level]. Would you like to review?"</div>
<div class="alt-description">The creator can keep their choice or adjust.</div>
</div>
</div>
</div>
<hr class="usecase-separator">
<div class="usecase-title">12. Update Course Materials</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Actor</div>
<div class="meta-value">Content Creator</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The content creator navigates to "My Courses."</div>
<div class="step">The content creator selects a published course.</div>
<div class="step">The content creator identifies content to update (lesson, exercise, video).</div>
<div class="step">The content creator clicks "Edit."</div>
<div class="step">The system loads the content in edit mode.</div>
<div class="step">The content creator makes changes:
<div class="sub-step">Updates outdated information</div>
<div class="sub-step">Fixes errors or typos</div>
<div class="sub-step">Improves explanations</div>
<div class="sub-step">Adds new examples</div>
</div>
<div class="step">The content creator saves changes.</div>
<div class="step">The system creates a new version and maintains version history.</div>
<div class="step">If the course has active learners, the system displays:
<div class="system-message">"[X] students are enrolled. Notify them of updates?"</div>
</div>
<div class="step">The content creator chooses to send update notification.</div>
<div class="step">Enrolled learners receive:
<div class="system-message">"[Course Name] has been updated with new content!"</div>
</div>
<div class="step">The system logs all changes for audit trail.</div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. Breaking Changes</div>
<div class="alt-description">At Step 6, if changes affect exercise solutions or grading:</div>
<div class="system-message">"This change may affect existing student submissions. Consider creating a new exercise instead."</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A2. Multiple Editors Conflict</div>
<div class="alt-description">At Step 5, if another creator is editing simultaneously:</div>
<div class="system-message">"[Creator Name] is currently editing this content. Changes may conflict."</div>
<div class="alt-description">The system locks editing or enables collaborative editing mode.</div>
</div>
</div>
</div>
<hr class="usecase-separator">
<div class="usecase-title">13. Review Student Submissions</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Actor</div>
<div class="meta-value">Content Creator</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The content creator navigates to "Course Management" dashboard.</div>
<div class="step">The content creator selects a lesson in specific course to review submissions.</div>
<div class="step">The system displays recent submissions for the creator's lesson.</div>
<div class="step">The content creator filters by:
<div class="sub-step">Execution metrics (time/memory)</div>
<div class="sub-step">Test case pass rate</div>
<div class="sub-step">Submission date</div>
</div>
<div class="step">The content creator selects a student submission to review.</div>
<div class="step">The system displays:
<div class="sub-step">Student information (anonymous option available)</div>
<div class="sub-step">Problem statement</div>
<div class="sub-step">Student's code solution</div>
<div class="sub-step">Test case results</div>
<div class="sub-step">Execution metrics</div>
</div>
<div class="step">The content creator reviews the code for:
<div class="sub-step">Correctness</div>
<div class="sub-step">Code quality and style</div>
<div class="sub-step">Efficiency</div>
<div class="sub-step">Best practices</div>
</div>
<div class="step">The content creator provides written feedback.</div>
<div class="step">The content creator clicks "Submit Review."</div>
<div class="step">The system saves the review and updates the student's grade.</div>
<div class="step">The student receives notification with feedback.</div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. Auto-Graded Exercise</div>
<div class="alt-description">At Step 4, if the exercise is automatically graded:</div>
<div class="system-message">"This exercise was automatically graded. Manual review is optional."</div>
<div class="alt-description">The creator can still provide additional feedback.</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A2. Plagiarism Suspected</div>
<div class="alt-description">At Step 6, if the system detects potential plagiarism:</div>
<div class="alt-description">The system flags the submission with similarity score.</div>
<div class="alt-description">The creator investigates and can report if confirmed.</div>
</div>
</div>
</div>
<hr class="usecase-separator">
<div class="usecase-title">14. Manage Course Structure</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Actor</div>
<div class="meta-value">Content Creator</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The content creator selects a course from their dashboard.</div>
<div class="step">The content creator clicks "Edit Course Structure."</div>
<div class="step">The system displays the course outline with all modules and lessons.</div>
<div class="step">The content creator can:
<div class="sub-step">Drag and drop to reorder modules</div>
<div class="sub-step">Drag and drop to reorder lessons within modules</div>
<div class="sub-step">Add new modules</div>
<div class="sub-step">Rename modules</div>
<div class="sub-step">Delete modules (with confirmation)</div>
</div>
<div class="step">The content creator sets prerequisites:
<div class="sub-step">Marks lessons that must be completed before others unlock</div>
<div class="sub-step">Creates skill dependencies</div>
</div>
<div class="step">The content creator saves the new structure.</div>
<div class="step">The system validates that prerequisites don't create circular dependencies.</div>
<div class="step">The system updates the course structure.</div>
<div class="step">If students are enrolled, the system adjusts their progress tracking.</div>
<div class="step">The system displays: <div class="system-message">"Course structure updated successfully!"</div></div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. Circular Dependency Detected</div>
<div class="alt-description">At Step 7, if prerequisites create a loop:</div>
<div class="system-message">"Error: This creates a circular dependency. Lesson A cannot require Lesson B if Lesson B requires Lesson A."</div>
<div class="alt-description">Changes are not saved until resolved.</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A2. Active Students Affected</div>
<div class="alt-description">At Step 6, if reordering affects students mid-course:</div>
<div class="system-message">"[X] students are currently progressing through this course. Major restructuring may confuse them."</div>
<div class="alt-description">The creator can proceed with caution or schedule changes.</div>
</div>
</div>
</div>
<hr class="usecase-separator">

**Fully Dressed Format Use Cases**

<div class="usecase-title">15. Create Coding Exercise</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Primary Actor</div>
<div class="meta-value">Content Creator</div>
</div>
</div>
<div class="stakeholders">
<div class="stakeholder-item">
<span class="stakeholder-role">Content Creator:</span> Wants to design effective, fair exercises that test specific skills.
</div>
<div class="stakeholder-item">
<span class="stakeholder-role">Learners:</span> Need clear instructions, fair test cases, and appropriate difficulty.
</div>
<div class="stakeholder-item">
<span class="stakeholder-role">Platform:</span> Needs quality-controlled exercises that can be auto-graded reliably.
</div>
</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Preconditions</div>
<div class="meta-value">
<div>Content creator must be logged in and authorized.</div>
<div>Content creator must have at least one course created.</div>
<div>Content creator must have completed platform training on exercise creation.</div>
</div>
</div>
</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Postconditions</div>
<div class="meta-value">
<div>Exercise is created with complete problem statement, test cases, and model solution.</div>
<div>Exercise is saved as draft and ready for validation.</div>
<div>Exercise metadata is stored in the database.</div>
</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The content creator navigates to a course lesson.</div>
<div class="step">The content creator clicks "Add Exercise."</div>
<div class="step">The system displays the exercise creation wizard with tabs:
<div class="sub-step">Problem Details</div>
<div class="sub-step">Test Cases</div>
<div class="sub-step">Model Solution</div>
<div class="sub-step">Hints</div>
<div class="sub-step">Metadata</div>
</div>
<div class="step"><strong>Problem Details Tab:</strong> The content creator enters:
<div class="sub-step">Exercise title (clear, concise)</div>
<div class="sub-step">Problem statement with context</div>
<div class="sub-step">Input format explanation</div>
<div class="sub-step">Output format explanation</div>
<div class="sub-step">Example inputs and outputs (2-3 examples)</div>
<div class="sub-step">Constraints (time limits, input ranges)</div>
</div>
<div class="step">The content creator writes starter code template (optional).</div>
<div class="step"><strong>Test Cases Tab:</strong> The content creator creates test cases:
<div class="sub-step">At least 5 test cases (minimum requirement)</div>
<div class="sub-step">Mix of edge cases, typical cases, and boundary cases</div>
<div class="sub-step">For each test case: input data, expected output, visibility (public/hidden)</div>
<div class="sub-step">Test case descriptions explaining what is being tested</div>
</div>
<div class="step">The content creator marks 2-3 test cases as public (visible to learners).</div>
<div class="step">The content creator marks remaining cases as hidden (for final validation).</div>
<div class="step"><strong>Model Solution Tab:</strong> The content creator writes a reference solution:
<div class="sub-step">Correct, efficient code in the target language</div>
<div class="sub-step">Well-commented for educational value</div>
<div class="sub-step">Multiple approaches (optimal, brute-force, alternative methods)</div>
</div>
<div class="step">The content creator runs the model solution against all test cases.</div>
<div class="step">The system validates that the model solution passes all test cases.</div>
<div class="step"><strong>Hints Tab:</strong> The content creator creates progressive hints:
<div class="sub-step">Level 1: Conceptual hint (approach suggestion)</div>
<div class="sub-step">Level 2: Algorithmic hint (specific strategy)</div>
<div class="sub-step">Level 3: Implementation hint (code structure)</div>
</div>
<div class="step"><strong>Metadata Tab:</strong> The content creator sets:
<div class="sub-step">Difficulty level (Beginner/Intermediate/Advanced)</div>
<div class="sub-step">Estimated time to complete</div>
<div class="sub-step">Skill tags (e.g., "arrays", "sorting", "dynamic-programming")</div>
<div class="sub-step">XP reward value</div>
</div>
<div class="step">The content creator clicks "Save as Draft."</div>
<div class="step">The system saves the exercise in draft status.</div>
<div class="step">The system displays: <div class="system-message">"Exercise saved successfully! Proceed to validation when ready."</div></div>
<div class="step">The content creator can:
<div class="sub-step">Continue editing</div>
<div class="sub-step">Submit for validation (goes to Use Case 16)</div>
<div class="sub-step">Delete draft</div>
</div>
<div class="step">The content creator clicks "Submit for Validation."</div>
<div class="step">The system transitions to Use Case 16 (Validate Exercise Before Publishing).</div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. Insufficient Test Cases</div>
<div class="alt-description">At Step 14, if fewer than 5 test cases exist:</div>
<div class="system-message">"Add at least 5 test cases before saving."</div>
<div class="alt-description">Save is blocked until minimum requirement is met.</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A2. Model Solution Fails Test Cases</div>
<div class="alt-description">At Step 11, if the model solution doesn't pass all tests:</div>
<div class="system-message">"Your model solution failed test case [X]. Expected: [Y], Got: [Z]."</div>
<div class="alt-description">The creator must fix either the solution or the test case before saving.</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A3. Missing Required Fields</div>
<div class="alt-description">At Step 14, if mandatory fields are empty:</div>
<div class="system-message">"Complete all required fields: [List]"</div>
<div class="alt-description">Incomplete sections are highlighted in red.</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A4. Auto-Save During Creation</div>
<div class="alt-description">Throughout the process, the system auto-saves progress every 2 minutes.</div>
<div class="alt-description">If creator closes browser, they can resume from last saved state.</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A5. Multiple Programming Languages</div>
<div class="alt-description">At Step 9, if the exercise supports multiple languages:</div>
<div class="alt-description">Creator must provide model solutions in each language.</div>
<div class="alt-description">Each solution is validated independently before saving.</div>
<div class="alt-description">Language-specific hints may be needed.</div>
</div>
</div>
</div>
<div class="extensions">
<div class="extensions-header">Extensions</div>
<div class="extensions-container">
<div class="extension-item">
<div class="ext-title">E1. Complexity Analysis Addition</div>
<div class="alt-description">Creator adds Big O notation explanations:</div>
<div class="alt-description">
<div class="sub-step">Time complexity of optimal solution</div>
<div class="sub-step">Space complexity analysis</div>
<div class="sub-step">Comparison with alternative approaches</div>
</div>
<div class="alt-description">This enhances educational value.</div>
</div>
<div class="extension-item">
<div class="ext-title">E2. Interactive Test Case Builder</div>
<div class="alt-description">System provides GUI to build test cases:</div>
<div class="alt-description">
<div class="sub-step">Generate random inputs within constraints</div>
<div class="sub-step">Automatically compute expected outputs using model solution</div>
<div class="sub-step">Visualize test coverage</div>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E3. Import from External Sources</div>
<div class="alt-description">Creator can import exercise templates from:</div>
<div class="alt-description">
<div class="sub-step">Other platforms (with proper attribution)</div>
<div class="sub-step">Previous exercises (as starting point)</div>
<div class="sub-step">Community-contributed templates</div>
</div>
</div>
</div>
</div>
<div class="special-requirements">
<div class="req-header">Special Requirements</div>
<ul>
<li>All data must be auto-saved every 2 minutes to prevent loss.</li>
<li>Draft exercises are only visible to the creator.</li>
<li>Model solutions must be encrypted in database.</li>
<li>System must support Python, JavaScript, and eventually Java/C++.</li>
<li>Problem statements must pass basic grammar check before saving.</li>
<li>Exercise creation interface must be accessible via keyboard navigation.</li>
</ul>
</div>
<div class="metadata-section">
<div class="section-label">Frequency of Use</div>
<div class="section-content">
High frequency during initial course development. Moderate ongoing use as creators add content. Estimated 10-20 exercises created per active content creator per month.
</div>
</div>
<div class="metadata-section">
<div class="section-label">Open Issues</div>
<div class="section-content">
<div>Should we allow saving incomplete exercises with warnings?</div>
<div>How long should drafts be retained before auto-deletion?</div>
<div>Should creators earn points for creating quality exercises?</div>
</div>
</div>
<hr class="usecase-separator">
<div class="usecase-title">16. Validate Exercise Before Publishing</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Primary Actor</div>
<div class="meta-value">Content Creator</div>
</div>
</div>
<div class="stakeholders">
<div class="stakeholder-item">
<span class="stakeholder-role">Content Creator:</span> Wants assurance that the exercise functions correctly before peer review.
</div>
<div class="stakeholder-item">
<span class="stakeholder-role">Learners:</span> Need exercises that work properly without technical issues or unfair test cases.
</div>
<div class="stakeholder-item">
<span class="stakeholder-role">Platform Quality Team:</span> Wants to maintain high content standards.
</div>
<div class="stakeholder-item">
<span class="stakeholder-role">Peer Reviewers:</span> Need well-validated exercises to review efficiently.
</div>
</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Preconditions</div>
<div class="meta-value">
<div>Exercise must be created and saved as draft (Use Case 15 completed).</div>
<div>Content creator must be logged in.</div>
<div>Validation API and code execution environment must be operational.</div>
<div>Exercise must have minimum required components (problem, test cases, solution).</div>
</div>
</div>
</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Postconditions</div>
<div class="meta-value">
<div>Exercise is thoroughly tested and validated.</div>
<div>Validation report is generated and stored.</div>
<div>If validation passes, exercise is ready for peer review assignment.</div>
<div>If validation fails, creator receives detailed feedback for improvements.</div>
</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The content creator has completed exercise creation (from Use Case 15).</div>
<div class="step">The content creator clicks "Submit for Validation."</div>
<div class="step">The system displays: <div class="system-message">"Beginning comprehensive validation... This may take 30-60 seconds."</div></div>
<div class="step"><strong>Step 1: Model Solution Validation</strong>
<div class="sub-step">System executes model solution against all test cases</div>
<div class="sub-step">Measures execution time and memory usage</div>
<div class="sub-step">Checks for runtime errors or infinite loops</div>
<div class="sub-step">Validates against time and memory constraints</div>
</div>
<div class="step">The system confirms: <div class="system-message">"✓ Model solution passes all [X] test cases."</div></div>
<div class="step"><strong>Step 2: Test Case Quality Check</strong>
<div class="sub-step">System analyzes test case diversity</div>
<div class="sub-step">Checks for edge cases: empty inputs, maximum values, negative numbers, boundary conditions</div>
<div class="sub-step">Verifies hidden tests differ meaningfully from public tests</div>
<div class="sub-step">Ensures test cases cover multiple solution approaches</div>
<div class="sub-step">Validates test case descriptions are clear</div>
</div>
<div class="step">The system reports: <div class="system-message">"✓ Test cases provide adequate coverage."</div></div>
<div class="step"><strong>Step 3: Problem Statement Analysis</strong>
<div class="sub-step">AI reviews problem statement for clarity and completeness</div>
<div class="sub-step">Checks grammar and spelling</div>
<div class="sub-step">Identifies ambiguous phrasing</div>
<div class="sub-step">Verifies examples match expected input/output format</div>
<div class="sub-step">Ensures constraints are clearly defined</div>
</div>
<div class="step">The system reports: <div class="system-message">"✓ Problem statement is clear and complete."</div></div>
<div class="step"><strong>Step 4: Difficulty Calibration</strong>
<div class="sub-step">System estimates difficulty based on:</div>
<div class="sub-step">Solution complexity (cyclomatic complexity, lines of code)</div>
<div class="sub-step">Required concepts (data structures, algorithms)</div>
<div class="sub-step">Test case difficulty</div>
<div class="sub-step">Compares with creator's assigned difficulty</div>
</div>
<div class="step">The system reports: <div class="system-message">"✓ Estimated difficulty matches assigned level (Intermediate)."</div></div>
<div class="step"><strong>Step 5: Hint Quality Assessment</strong>
<div class="sub-step">Validates that hints don't reveal complete solution</div>
<div class="sub-step">Checks hint progression (conceptual → specific → implementation)</div>
<div class="sub-step">Ensures hints are appropriate for difficulty level</div>
</div>
<div class="step">The system reports: <div class="system-message">"✓ Hints provide appropriate guidance without spoiling solution."</div></div>
<div class="step"><strong>Step 6: Security and Fairness Check</strong>
<div class="sub-step">Ensures no hardcoded test cases in problem description</div>
<div class="sub-step">Validates that public test cases don't make hidden cases obvious</div>
<div class="sub-step">Checks for potential exploitation methods</div>
</div>
<div class="step">The system reports: <div class="system-message">"✓ Exercise meets security and fairness standards."</div></div>
<div class="step">The system compiles a comprehensive validation report showing all checks.</div>
<div class="step">The system displays final status: <div class="system-message">"✓ Validation Complete: PASSED"</div></div>
<div class="step">The content creator reviews the full validation report.</div>
<div class="step">The system offers options:
<div class="sub-step"><strong>Assign for Peer Review</strong> (proceed to step 20)</div>
<div class="sub-step"><strong>Make Revisions</strong> (return to editing)</div>
<div class="sub-step"><strong>Save for Later</strong> (keep in validated draft status)</div>
</div>
<div class="step">The content creator clicks "Assign for Peer Review."</div>
<div class="step">The system displays peer reviewer selection interface.</div>
<div class="step">The system recommends 1-3 qualified reviewers based on:
<div class="sub-step">Expertise in relevant programming language</div>
<div class="sub-step">Experience with similar difficulty levels</div>
<div class="sub-step">Current review workload</div>
<div class="sub-step">Reviewer ratings and reliability</div>
</div>
<div class="step">The content creator selects reviewers (1-3 reviewers).</div>
<div class="step">The system sends notifications to selected reviewers:
<div class="system-message">"You've been assigned to review exercise '[Title]'. Please complete within 3-5 business days."</div>
</div>
<div class="step">The exercise is added to each reviewer's review queue.</div>
<div class="step">The system sets review deadline (5 business days from assignment).</div>
<div class="step">The system displays to creator: <div class="system-message">"Exercise assigned for peer review. You'll be notified when reviews are complete."</div></div>
<div class="step">The exercise status changes to "Under Peer Review."</div>
<div class="step">The creator receives a confirmation summary:
<div class="sub-step">Validation results</div>
<div class="sub-step">Assigned reviewers</div>
<div class="sub-step">Expected review completion date</div>
</div>
<div class="step">The system transitions to peer review workflow (not detailed in this use case).</div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. Model Solution Fails Test Cases</div>
<div class="alt-description">At Step 4-5, if model solution fails any test:</div>
<div class="system-message">"✗ Model solution failed test case #[X]"</div>
<div class="alt-description">Shows: Input provided, Expected output, Actual output, Error message</div>
<div class="alt-description">Validation status: <strong>FAILED</strong></div>
<div class="alt-description">Creator options:</div>
<div class="alt-description">
<div class="sub-step">Fix model solution</div>
<div class="sub-step">Modify test case</div>
<div class="sub-step">Add explanation if intentional</div>
</div>
<div class="alt-description">Cannot proceed to peer review until resolved</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A2. Missing Edge Cases</div>
<div class="alt-description">At Step 6-7, if edge case coverage is insufficient:</div>
<div class="system-message">"⚠ Test cases may not cover edge scenarios: [empty input, single element, maximum constraints]"</div>
<div class="alt-description">Validation status: <strong>PASSED WITH WARNINGS</strong></div>
<div class="alt-description">Creator can:</div>
<div class="alt-description">
<div class="sub-step">Add recommended edge cases</div>
<div class="sub-step">Proceed to peer review with warning documented</div>
</div>
<div class="alt-description">Peer reviewers will see this warning</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A3. Problem Statement Unclear</div>
<div class="alt-description">At Step 8-9, if AI detects ambiguity:</div>
<div class="system-message">"⚠ Problem statement may be unclear: '[specific phrase]' could be interpreted multiple ways."</div>
<div class="alt-description">Provides revision suggestions with examples</div>
<div class="alt-description">Validation status: <strong>PASSED WITH WARNINGS</strong></div>
<div class="alt-description">Creator should clarify but can proceed</div>
<div class="alt-description">Peer reviewers will be asked to verify clarity</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A4. Difficulty Mismatch</div>
<div class="alt-description">At Step 10-11, if estimated difficulty differs significantly:</div>
<div class="system-message">"⚠ This exercise appears to be [Advanced] but is marked [Intermediate]. Consider adjusting."</div>
<div class="alt-description">Shows difficulty scoring breakdown</div>
<div class="alt-description">Validation status: <strong>PASSED WITH WARNINGS</strong></div>
<div class="alt-description">Creator can:</div>
<div class="alt-description">
<div class="sub-step">Adjust difficulty level</div>
<div class="sub-step">Provide justification for current level</div>
<div class="sub-step">Proceed with warning (reviewers will validate)</div>
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A5. Execution Timeout</div>
<div class="alt-description">At Step 4, if model solution exceeds time limit:</div>
<div class="system-message">"✗ Model solution exceeded [N]-second time limit. Execution time: [X]s"</div>
<div class="alt-description">Validation status: <strong>FAILED</strong></div>
<div class="alt-description">Creator must:</div>
<div class="alt-description">
<div class="sub-step">Optimize solution</div>
<div class="sub-step">Adjust time constraints</div>
<div class="sub-step">Reconsider problem complexity</div>
</div>
<div class="alt-description">Cannot proceed until resolved</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A6. Test Cases Too Similar</div>
<div class="alt-description">At Step 6, if hidden tests are predictable:</div>
<div class="system-message">"⚠ Hidden test cases appear similar to public tests. Add more diverse scenarios."</div>
<div class="alt-description">Suggests specific missing scenarios</div>
<div class="alt-description">Validation status: <strong>PASSED WITH WARNINGS</strong></div>
<div class="alt-description">Creator should improve diversity</div>
<div class="alt-description">Reviewers will test with their own approaches</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A7. No Available Reviewers</div>
<div class="alt-description">At Step 22-23, if no suitable reviewers available:</div>
<div class="system-message">"No reviewers currently available with matching expertise. Options:"</div>
<div class="alt-description">
<div class="sub-step">Wait for reviewers to become available (estimated: X days)</div>
<div class="sub-step">Expand reviewer criteria</div>
<div class="sub-step">Request admin to assign reviewers</div>
</div>
<div class="alt-description">Exercise remains in validated draft status</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A8. Creator Cancels Review Assignment</div>
<div class="alt-description">At Step 23, if creator changes mind:</div>
<div class="alt-description">Creator clicks "Cancel Assignment"</div>
<div class="alt-description">Exercise returns to validated draft status</div>
<div class="alt-description">Can be edited or assigned later</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A9. Grammatical Errors</div>
<div class="alt-description">At Step 8-9, if grammar issues detected:</div>
<div class="alt-description">System highlights errors with suggestions</div>
<div class="alt-description">Auto-correct offered for minor issues</div>
<div class="alt-description">Validation status: <strong>PASSED WITH WARNINGS</strong></div>
<div class="alt-description">Creator should review and fix</div>
<div class="alt-description">Reviewers will verify corrections</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A10. Validation Service Unavailable</div>
<div class="alt-description">At Step 3, if validation API fails:</div>
<div class="system-message">"Validation service temporarily unavailable. Options:"</div>
<div class="alt-description">
<div class="sub-step">Retry now</div>
<div class="sub-step">Save and retry later</div>
<div class="sub-step">Contact support if issue persists</div>
</div>
<div class="alt-description">Exercise saved but not validated</div>
<div class="alt-description">Creator notified when service resumes</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A11. Multiple Languages, Different Results</div>
<div class="alt-description">At Step 4-5, if exercise supports Python and JavaScript:</div>
<div class="alt-description">If Python solution passes but JavaScript fails:</div>
<div class="alt-description">
<div class="sub-step">System reports issues separately by language</div>
<div class="sub-step">Validation status: <strong>PARTIALLY FAILED</strong></div>
<div class="sub-step">Creator must fix failing language implementation</div>
</div>
<div class="alt-description">All language versions must pass before proceeding</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A12. Hints Reveal Too Much</div>
<div class="alt-description">At Step 12-13, if hints are too specific:</div>
<div class="system-message">"⚠ Hint level [X] may reveal too much of the solution. Consider making it more conceptual."</div>
<div class="alt-description">Validation status: <strong>PASSED WITH WARNINGS</strong></div>
<div class="alt-description">Shows which hints are problematic</div>
<div class="alt-description">Reviewers will test hint effectiveness</div>
</div>
</div>
</div>
<div class="extensions">
<div class="extensions-header">Extensions</div>
<div class="extensions-container">
<div class="extension-item">
<div class="ext-title">E1. Automated Test Generation Suggestions</div>
<div class="alt-description">After validation, system offers to generate additional test cases:</div>
<div class="alt-description">
<div class="sub-step">Creates random inputs within constraints</div>
<div class="sub-step">Uses model solution to compute expected outputs</div>
<div class="sub-step">Creator reviews and approves generated tests</div>
<div class="sub-step">Re-validates with new tests</div>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E2. Validation Report Export</div>
<div class="alt-description">Creator can download detailed validation report as PDF</div>
<div class="alt-description">Includes:</div>
<div class="alt-description">
<div class="sub-step">All validation checks and scores</div>
<div class="sub-step">Recommendations for improvement</div>
<div class="sub-step">Comparison with similar exercises</div>
<div class="sub-step">Quality metrics</div>
</div>
<div class="alt-description">Useful for documentation or training</div>
</div>
<div class="extension-item">
<div class="ext-title">E3. Incremental Validation</div>
<div class="alt-description">For large exercises with many test cases:</div>
<div class="alt-description">
<div class="sub-step">System validates in stages, showing progress</div>
<div class="sub-step">Creator can cancel if early stages reveal issues</div>
<div class="sub-step">Partial results saved for faster re-validation</div>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E4. A/B Testing Suggestion</div>
<div class="alt-description">If exercise is similar to existing ones:</div>
<div class="alt-description">
<div class="sub-step">System suggests A/B testing with learners</div>
<div class="sub-step">Tracks which version performs better</div>
<div class="sub-step">Informs future exercise design</div>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E5. Reviewer Self-Selection</div>
<div class="alt-description">Instead of creator assigning reviewers:</div>
<div class="alt-description">
<div class="sub-step">Creator can post exercise to "Review Marketplace"</div>
<div class="sub-step">Qualified reviewers volunteer to review</div>
<div class="sub-step">Creator selects from volunteers</div>
<div class="sub-step">Faster assignment in active communities</div>
</div>
</div>
</div>
</div>
<div class="special-requirements">
<div class="req-header">Special Requirements</div>
<ul>
<li>Validation must complete within 60 seconds for standard exercises.</li>
<li>All validation checks must be logged for quality assurance auditing.</li>
<li>Validation must detect common anti-patterns (hardcoded solutions, trivial test cases).</li>
<li>System should cache validation results; re-validation only needed if exercise changes.</li>
<li>Validation API must handle concurrent requests from multiple creators.</li>
<li>Failed validations must provide actionable guidance, not just error messages.</li>
<li>Warnings must be clearly documented for peer reviewers.</li>
<li>Reviewer recommendations must consider expertise, workload, and reliability.</li>
<li>System must prevent assigning reviewers who have conflicts of interest.</li>
</ul>
</div>
<div class="metadata-section">
<div class="section-label">Frequency of Use</div>
<div class="section-content">
Every exercise must be validated before peer review (100% usage). Re-validation after any exercise modification. Estimated 50-100 validations per active content creator over platform lifetime.
</div>
</div>
<div class="metadata-section">
<div class="section-label">Open Issues</div>
<div class="section-content">
<div>Should we implement tiered validation (basic, standard, rigorous) based on difficulty?</div>
<div>How do we handle edge cases where automated validation gives false positives?</div>
<div>Should validation scores affect creator reputation?</div>
<div>Can we use machine learning to improve validation accuracy over time?</div>
<div>Should we allow creators to skip certain validation checks with justification?</div>
<div>How do we balance validation thoroughness with creator experience?</div>
</div>
</div>
<hr class="usecase-separator">
<div class="usecase-title">17. Contribute to Learning Path</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Primary Actor</div>
<div class="meta-value">Content Creator</div>
</div>
</div>
<div class="stakeholders">
<div class="stakeholder-item">
<span class="stakeholder-role">Content Creator:</span> Wants clear requirements and reasonable deadlines for content creation.
</div>
<div class="stakeholder-item">
<span class="stakeholder-role">Administrator:</span> Needs quality content delivered on time to complete the learning path.
</div>
<div class="stakeholder-item">
<span class="stakeholder-role">Learners:</span> Will benefit from well-crafted, cohesive content within the path.
</div>
</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Preconditions</div>
<div class="meta-value">
<div>Content creator must be logged in and authorized.</div>
<div>Administrator must have created a learning path and assigned the creator to a specific tier/module.</div>
<div>Content creator must have received assignment notification.</div>
</div>
</div>
</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Postconditions</div>
<div class="meta-value">
<div>Required content (lessons, exercises) is created within the assigned tier.</div>
<div>Content meets quality standards and aligns with path objectives.</div>
<div>Administrator can review and approve the content.</div>
<div>Tier is marked as complete and ready for integration.</div>
</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The content creator receives a notification: <div class="system-message">"You've been assigned to create content for '[Path Name]' - [Tier/Module Name]."</div></div>
<div class="step">The content creator navigates to "My Assignments" in their dashboard.</div>
<div class="step">The system displays the learning path assignment with details:
<div class="sub-step">Path name and overall objectives</div>
<div class="sub-step">Assigned tier/module name</div>
<div class="sub-step">Content requirements:</div>
<div class="sub-step">Number of lessons to create (e.g., 5 video lessons)</div>
<div class="sub-step">Number of exercises to create (e.g., 10 coding challenges)</div>
<div class="sub-step">Learning objectives for this tier</div>
<div class="sub-step">Target audience and skill level</div>
<div class="sub-step">Deadline for completion</div>
<div class="sub-step">Guidelines and templates provided by administrator</div>
<div class="sub-step">Contact information for coordination</div>
</div>
<div class="step">The content creator reviews the requirements and clicks "Accept Assignment."</div>
<div class="step">The system creates a task board for the creator showing:
<div class="sub-step">Checklist of required content items</div>
<div class="sub-step">Progress tracker (0% complete)</div>
<div class="sub-step">Deadline countdown</div>
</div>
<div class="step"><strong>Step 1: Plan Content Structure</strong>
<div class="sub-step">The creator outlines topics to cover in each lesson</div>
<div class="sub-step">Maps exercises to specific learning objectives</div>
<div class="sub-step">Designs project requirements</div>
</div>
<div class="step">The creator can request clarification from the administrator if objectives are unclear.</div>
<div class="step"><strong>Step 2: Create Lessons</strong>
<div class="sub-step">The creator follows Use Case 8 (Create Lesson) for each required lesson</div>
<div class="sub-step">Ensures lessons align with tier objectives</div>
<div class="sub-step">Covers prerequisite knowledge appropriately</div>
<div class="sub-step">Follows platform style guidelines</div>
</div>
<div class="step">The system tracks completed lessons and updates progress (e.g., 30% complete).</div>
<div class="step"><strong>Step 3: Create Exercises</strong>
<div class="sub-step">The creator follows Use Case 15-16 (Create and Validate Coding Exercise) for each exercise</div>
<div class="sub-step">Ensures difficulty aligns with tier level</div>
<div class="sub-step">Ties exercises to specific lesson concepts</div>
<div class="sub-step">Creates diverse problem types</div>
</div>
<div class="step">The system tracks completed exercises and updates progress (e.g., 60% complete).</div>
<div class="step"><strong>Step 5: Review Content Cohesion</strong>
<div class="sub-step">The creator reviews all created content for the tier</div>
<div class="sub-step">Ensures logical flow between lessons</div>
<div class="sub-step">Verifies exercises progressively build skills</div>
<div class="sub-step">Checks that project appropriately challenges learners</div>
</div>
<div class="step">The creator can preview the entire tier as a learner would experience it.</div>
<div class="step"><strong>Step 6: Internal Quality Check</strong>
<div class="sub-step">The creator runs through their own content:</div>
<div class="sub-step">Tests all code examples</div>
<div class="sub-step">Verifies exercise solutions</div>
<div class="sub-step">Checks for typos or errors</div>
<div class="sub-step">Ensures multimedia loads correctly</div>
</div>
<div class="step">The creator makes any necessary revisions.</div>
<div class="step"><strong>Step 7: Mark as Ready for Review</strong>
<div class="sub-step">The creator clicks "Submit for Administrator Review."</div>
<div class="sub-step">The system prompts: <div class="system-message">"Are you sure all content is complete and meets quality standards?"</div></div>
</div>
<div class="step">The creator confirms submission.</div>
<div class="step">The system notifies the administrator: <div class="system-message">"[Creator Name] has submitted content for '[Tier Name]' in '[Path Name]'. Ready for review."</div></div>
<div class="step">The system changes the tier status to "Under Administrator Review."</div>
<div class="step">The creator's task board shows "Awaiting Review" status.</div>
<div class="step"><strong>Administrator Review Phase:</strong>
<div class="sub-step">Administrator reviews all content (separate use case)</div>
<div class="sub-step">Administrator can approve, request revisions, or reject</div>
</div>
<div class="step">If approved:
<div class="sub-step">Creator receives notification: <div class="system-message">"Your content for '[Tier Name]' has been approved! Great work."</div></div>
<div class="sub-step">Creator earns XP/badges for completing assignment</div>
<div class="sub-step">Content is integrated into the learning path</div>
</div>
<div class="step">If revisions requested:
<div class="sub-step">Creator receives detailed feedback with specific issues</div>
<div class="sub-step">Creator makes requested changes</div>
<div class="sub-step">Creator resubmits (returns to Step 17)</div>
</div>
<div class="step">The system tracks the creator's contribution for analytics and reputation.</div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. Creator Declines Assignment</div>
<div class="alt-description">At Step 4, if the creator cannot accept:</div>
<div class="alt-description">Creator clicks "Decline Assignment"</div>
<div class="alt-description">System prompts for reason (workload, expertise mismatch, timeline)</div>
<div class="alt-description">System notifies administrator to reassign</div>
<div class="alt-description">Creator is removed from assignment</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A2. Deadline Extension Needed</div>
<div class="alt-description">Before deadline, if creator needs more time:</div>
<div class="alt-description">Creator clicks "Request Extension"</div>
<div class="alt-description">Provides justification and proposed new deadline</div>
<div class="alt-description">Administrator reviews and approves/denies</div>
<div class="alt-description">If approved, deadline is updated</div>
<div class="alt-description">If denied, creator must meet original deadline or decline</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A3. Clarification Required</div>
<div class="alt-description">At Step 7, if objectives are unclear:</div>
<div class="alt-description">Creator clicks "Request Clarification"</div>
<div class="alt-description">Sends specific questions to administrator</div>
<div class="alt-description">Administrator responds with guidance</div>
<div class="alt-description">Creator proceeds with clarified understanding</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A4. Content Requirements Change</div>
<div class="alt-description">During content creation, if administrator updates requirements:</div>
<div class="alt-description">Creator receives notification of changes</div>
<div class="alt-description">System highlights what changed</div>
<div class="alt-description">Creator acknowledges changes</div>
<div class="alt-description">Deadline may be adjusted if significant changes</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A5. Missed Deadline</div>
<div class="alt-description">If creator doesn't submit by deadline:</div>
<div class="alt-description">System sends urgent reminder 3 days before deadline</div>
<div class="alt-description">If still missed:</div>
<div class="alt-description">
<div class="sub-step">Administrator is notified</div>
<div class="sub-step">Administrator can extend deadline or reassign</div>
<div class="sub-step">Creator's reputation may be affected</div>
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A6. Revisions Requested Multiple Times</div>
<div class="alt-description">At Step 24, if content is rejected twice:</div>
<div class="alt-description">Administrator and creator have a coordination meeting</div>
<div class="alt-description">Discuss issues and expectations</div>
<div class="alt-description">If third submission also fails:</div>
<div class="alt-description">
<div class="sub-step">Assignment may be reassigned</div>
<div class="sub-step">Creator's compensation/reputation affected</div>
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A7. Technical Issues During Creation</div>
<div class="alt-description">If system errors prevent content creation:</div>
<div class="alt-description">Creator reports issue to support</div>
<div class="alt-description">System logs the issue</div>
<div class="alt-description">Deadline may be extended if issue is system-wide</div>
<div class="alt-description">Creator can save drafts to prevent data loss</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A8. Collaborating with Other Creators</div>
<div class="alt-description">If multiple creators are assigned to the same tier:</div>
<div class="alt-description">System provides shared workspace</div>
<div class="alt-description">Creators can see each other's progress</div>
<div class="alt-description">Chat/comment feature for coordination</div>
<div class="alt-description">One creator designated as "lead" to avoid conflicts</div>
</div>
</div>
</div>
<div class="extensions">
<div class="extensions-header">Extensions</div>
<div class="extensions-container">
<div class="extension-item">
<div class="ext-title">E1. Early Completion Bonus</div>
<div class="alt-description">If creator completes high-quality content ahead of schedule:</div>
<div class="alt-description">
<div class="sub-step">Creator earns "Early Bird" badge</div>
<div class="sub-step">May receive bonus XP or recognition</div>
<div class="sub-step">Reputation score increases</div>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E2. Feedback and Iteration</div>
<div class="alt-description">After path is published and learners use the content:</div>
<div class="alt-description">Creator receives analytics on their tier:</div>
<div class="alt-description">
<div class="sub-step">Completion rates</div>
<div class="sub-step">Average time spent</div>
<div class="sub-step">Learner satisfaction ratings</div>
<div class="sub-step">Common misconceptions</div>
</div>
<div class="alt-description">Creator can update content based on feedback</div>
</div>
<div class="extension-item">
<div class="ext-title">E3. Content Reuse Permission</div>
<div class="alt-description">Creator can request to reuse tier content in personal courses:</div>
<div class="alt-description">
<div class="sub-step">Submits request to administrator</div>
<div class="sub-step">If approved, content can be adapted for other uses</div>
<div class="sub-step">Original path retains rights to the content</div>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E4. Compensation Tracking</div>
<div class="alt-description">For paid creators:</div>
<div class="alt-description">
<div class="sub-step">System tracks time spent on assignment</div>
<div class="sub-step">Milestones trigger partial payments</div>
<div class="sub-step">Final approval triggers full payment</div>
<div class="sub-step">Invoicing generated automatically</div>
</div>
</div>
</div>
</div>
<div class="special-requirements">
<div class="req-header">Special Requirements</div>
<ul>
<li>The task board must clearly show progress and remaining work.</li>
<li>Creators must be able to save work-in-progress at any time (auto-save every 2 minutes).</li>
<li>System must support version history for all created content.</li>
<li>Communication between creator and administrator must be logged.</li>
<li>Deadline reminders must be sent at 7 days, 3 days, and 1 day before due date.</li>
<li>Content submission must include a checklist confirmation (all requirements met).</li>
<li>Administrator feedback must be clear, actionable, and specific.</li>
</ul>
</div>
<div class="metadata-section">
<div class="section-label">Frequency of Use</div>
<div class="section-content">
Moderate to high frequency depending on path creation activity. Each creator may have 2-5 active assignments at any time. Typically takes 2-6 weeks per tier assignment depending on complexity.
</div>
</div>
<div class="metadata-section">
<div class="section-label">Open Issues</div>
<div class="section-content">
<div>Should creators be able to collaborate in real-time on the same content?</div>
<div>How do we handle disputes between creator and administrator on content direction?</div>
<div>Should there be peer review before administrator review?</div>
<div>Can AI assist in identifying content gaps or quality issues?</div>
</div>
</div>
<hr class="usecase-separator">

#### <div class="subsection">5.3.3 Learner Use Cases</div>
**Brief Format Use Cases**

<div class="brief-usecase">
<div class="title">1. View Profile</div>
<div class="description">The learner views their profile information including avatar, bio, learning goals, and XP progress.</div>
</div>
<hr class="usecase-separator">
<div class="brief-usecase">
<div class="title">2. Change Theme</div>
<div class="description">The learner switches between dark and light mode in the editor settings (or using switch sun/moon icon).</div>
</div>
<hr class="usecase-separator">
<div class="brief-usecase">
<div class="title">3. View Badges</div>
<div class="description">The learner views their earned badges and achievements in their profile gallery.</div>
</div>
<hr class="usecase-separator">
<div class="brief-usecase">
<div class="title">4. Check Streak</div>
<div class="description">The learner checks their current daily learning streak and streak milestones.</div>
</div>
<hr class="usecase-separator">
<div class="brief-usecase">
<div class="title">5. View Leaderboard</div>
<div class="description">The learner views global, weekly, or friend-based leaderboards showing XP rankings.</div>
</div>
<hr class="usecase-separator">
<div class="brief-usecase">
<div class="title">6. Update Avatar</div>
<div class="description">The learner uploads or changes their profile picture.</div>
</div>
<hr class="usecase-separator">

**Casual Format Use Cases**

<div class="usecase-title">7. Register Account</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Actor</div>
<div class="meta-value">Learner</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The learner navigates to the "Sign Up" page of the platform or app.</div>
<div class="step">The learner selects the "Learner" role from account type options.</div>
<div class="step">The learner provides required details:
<div class="sub-step">Full name</div>
<div class="sub-step">Email address</div>
<div class="sub-step">Password (with confirmation)</div>
<div class="sub-step">Username</div>
</div>
<div class="step">The learner can register using social media accounts (Google, Github, LinkedIn) as an alternative.</div>
<div class="step">The learner agrees to Terms and Conditions and submits the form.</div>
<div class="step">The system validates input (email format, password strength, username uniqueness).</div>
<div class="step">The system sends a verification email to the provided address.</div>
<div class="step">The learner clicks the OTP in the email.</div>
<div class="step">The system activates the account and redirects to the login page.</div>
<div class="step">The learner logs in successfully and sees a welcome message.</div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. Email Already Exists</div>
<div class="alt-description">At Step 5, if the email is already registered, the system displays:</div>
<div class="system-message">"An account with this email already exists. Please log in or use a different email."</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A2. Weak Password</div>
<div class="alt-description">At Step 5, if the password doesn't meet security criteria (minimum 8 characters with uppercase, lowercase, numbers, special characters), the system displays:</div>
<div class="system-message">"Your password must be at least 8 characters long and include uppercase, lowercase, numbers, and symbols."</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A3. Username Taken</div>
<div class="alt-description">At Step 5, if the username is already in use, the system displays:</div>
<div class="system-message">"This username is already taken. Please choose a different one."</div>
</div>
</div>
</div>
<hr class="usecase-separator">
<div class="usecase-title">8. Login to System</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Actor</div>
<div class="meta-value">Learner</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The learner navigates to the login page in the platform or app.</div>
<div class="step">The learner enters their email and password.</div>
<div class="step">The learner can choose to log in using social media accounts (Google, Github, LinkedIn) as an alternative.</div>
<div class="step">The learner clicks "Login."</div>
<div class="step">The system validates credentials.</div>
<div class="step">The system authenticates the learner and redirects to the dashboard.</div>
<div class="step">The learner sees their personalized dashboard with progress and recommendations.</div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. Incorrect Credentials</div>
<div class="alt-description">At Step 4, if credentials are invalid, the system displays:</div>
<div class="system-message">"Incorrect email or password. Please try again."</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A2. Account Not Verified</div>
<div class="alt-description">At Step 4, if the email is not verified, the system displays:</div>
<div class="system-message">"Please verify your email address before logging in. Check your inbox for the OTP."</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A3. Account Suspended</div>
<div class="alt-description">At Step 4, if the account is suspended, the system displays:</div>
<div class="system-message">"Your account has been suspended. Please contact support for assistance."</div>
</div>
</div>
</div>
<hr class="usecase-separator">
<div class="usecase-title">9. Recover Password</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Actor</div>
<div class="meta-value">Learner</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The learner clicks "Forgot Password" on the login page.</div>
<div class="step">The learner enters their registered email address.</div>
<div class="step">The system validates the email.</div>
<div class="step">The system sends a password OTP to the email.</div>
<div class="step">The learner enters the OTP received.</div>
<div class="step">The learner enters and confirms a new password.</div>
<div class="step">The system updates the password.</div>
<div class="step">The learner sees confirmation: <div class="system-message">"Password reset successfully. You can now log in."</div></div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. Email Not Found</div>
<div class="alt-description">At Step 3, if the email isn't registered, the system displays:</div>
<div class="system-message">"No account found with this email address."</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A2. Link Expired</div>
<div class="alt-description">At Step 5, if the OTP expired, the system displays:</div>
<div class="system-message">"This link has expired. Please request a new password reset."</div>
</div>
</div>
</div>
<hr class="usecase-separator">
<div class="usecase-title">10. Choose Learning Path</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Actor</div>
<div class="meta-value">Learner</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The learner logs into the platform or app.</div>
<div class="step">The learner navigates to the "Learning Paths" section.</div>
<div class="step">The system displays available tracks (Fundamentals, Machine Learning, Cybersecurity, Full-Stack Development).</div>
<div class="step">The learner selects their preferred learning path.</div>
<div class="step">The system shows a detailed overview including modules, estimated time, and prerequisites.</div>
<div class="step">The learner confirms their selection by clicking "Start Path."</div>
<div class="step">The system updates the learner's dashboard with the selected path.</div>
<div class="step">The learner receives a confirmation message:
<div class="system-message">"You've successfully enrolled in the [Path Name] learning path! Let's start coding."</div>
</div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. Prerequisite Not Met</div>
<div class="alt-description">At Step 6, if the learner lacks prerequisite skills, the system displays:</div>
<div class="system-message">"This path requires basic programming knowledge. We recommend starting with [Beginner Path]."</div>
<div class="alt-description">The system offers to take a diagnostic quiz to determine the appropriate starting point.</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A2. Already Enrolled in Path</div>
<div class="alt-description">At Step 6, if the learner is already enrolled, the system displays:</div>
<div class="system-message">"You're already enrolled in this path. Continue learning from your dashboard."</div>
</div>
</div>
</div>
<hr class="usecase-separator">
<div class="usecase-title">11. View Lesson Content</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Actor</div>
<div class="meta-value">Learner</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The learner navigates to their enrolled course from the dashboard.</div>
<div class="step">The learner selects a module and clicks on a specific lesson.</div>
<div class="step">The system displays the lesson content including:
<div class="sub-step">Text explanation</div>
<div class="sub-step">Video tutorial</div>
</div>
<div class="step">The learner reads/watches the content at their own pace.</div>
<div class="step">The learner can pause, rewind, or fast-forward video content.</div>
<div class="step">The system tracks time spent on the lesson.</div>
<div class="step">The lesson is marked as complete when finished.</div>
<div class="step">The system updates progress and unlocks the next lesson.</div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. Lesson Locked</div>
<div class="alt-description">At Step 2, if prerequisites aren't completed, the system displays:</div>
<div class="system-message">"Complete the previous lessons to unlock this content."</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A2. Content Loading Error</div>
<div class="alt-description">At Step 3, if content fails to load, the system displays:</div>
<div class="system-message">"We're having trouble loading this lesson. Please refresh or try again later."</div>
</div>
</div>
</div>
<hr class="usecase-separator">
<div class="usecase-title">12. Complete Exercise</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Actor</div>
<div class="meta-value">Learner</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The learner navigates to the exercises section of a lesson.</div>
<div class="step">The learner selects an available coding challenge.</div>
<div class="step">The system displays the problem statement, input/output examples, and starter code.</div>
<div class="step">The learner writes code in the Code Editor in platform.</div>
<div class="step">The learner drag/drop blocks of code in the blockly Editor in app.</div>
<div class="step">The learner clicks "Run Tests" to validate their solution.</div>
<div class="step">The system executes the code against test cases.</div>
<div class="step">The system displays results showing passed/failed test cases.</div>
<div class="step">If all tests pass, the learner clicks "Submit Solution."</div>
<div class="step">The system awards XP and updates skill mastery.</div>
<div class="step">The learner receives a success message with earned points.</div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. Tests Failed</div>
<div class="alt-description">At Step 7, if some tests fail, the system displays:</div>
<div class="system-message">"Some test cases failed. Review the expected vs. actual output and try again."</div>
<div class="alt-description">The learner can request hints or revise their code.</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A2. Syntax Error</div>
<div class="alt-description">At Step 6, if the code has syntax errors, the system displays:</div>
<div class="system-message">"Syntax Error: [Error Description]. Check line [X]."</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A3. Runtime Error</div>
<div class="alt-description">At Step 6, if the code causes a runtime error, the system displays:</div>
<div class="system-message">"Runtime Error: [Error Description]. Your code crashed during execution."</div>
</div>
</div>
</div>
<hr class="usecase-separator">
<div class="usecase-title">13. Track Progress and View Learning Analytics</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Actor</div>
<div class="meta-value">Learner</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The learner navigates to the "Progress & Analytics" section from the dashboard.</div>
<div class="step">The system displays a comprehensive dashboard with two main views:
<div class="sub-step">**Progress Overview**</div>
<div class="sub-step">**Detailed Analytics**</div>
</div>
<div class="step">**Progress Overview Section** displays:
<div class="sub-step">Completed modules and lessons</div>
<div class="sub-step">Current XP and level</div>
<div class="sub-step">Skill mastery percentages</div>
<div class="sub-step">Time spent learning</div>
<div class="sub-step">Streak information</div>
</div>
<div class="step">**Detailed Analytics Section** displays:
<div class="sub-step">Accuracy rates per skill</div>
<div class="sub-step">Time-to-completion trends</div>
<div class="sub-step">Learning velocity</div>
<div class="sub-step">Performance metrics with charts and graphs</div>
</div>
<div class="step">The system highlights weak areas and recommends improvement exercises based on analytics.</div>
<div class="step">The learner can view predictions and insights:
<div class="sub-step">Estimated time to complete current path</div>
<div class="sub-step">Suggested focus areas</div>
</div>
<div class="step">The system provides actionable recommendations based on combined progress and analytics data.</div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. No Progress Data</div>
<div class="alt-description">At Step 2, if the learner hasn't completed any content:
<div class="sub-step">The system displays: <div class="system-message">"Start your learning journey! Complete lessons to see your progress and analytics here."</div></div>
<div class="sub-step">Shows sample analytics dashboard with demo data</div>
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A2. Insufficient Data for Detailed Analytics</div>
<div class="alt-description">At Step 4, if there's not enough activity for meaningful analytics:
<div class="sub-step">The system displays: <div class="system-message">"Complete more lessons (at least 10) to unlock detailed analytics and insights."</div></div>
<div class="sub-step">Shows basic progress metrics only</div>
<div class="sub-step">Detailed analytics sections are grayed out with unlock requirements</div>
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A3. Data Loading Delays</div>
<div class="alt-description">At Step 2, if analytics take time to compile:
<div class="sub-step">The system displays progress indicator: <div class="system-message">"Loading your analytics... This may take a moment."</div></div>
<div class="sub-step">Shows cached data with timestamp while fresh data loads</div>
</div>
</div>
</div>
</div>
<hr class="usecase-separator">
<div class="usecase-title">14. Earn XP and Level Up</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Actor</div>
<div class="meta-value">Learner</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The learner completes a lesson, exercise, or challenge.</div>
<div class="step">The system calculates earned XP based on:
<div class="sub-step">Task difficulty</div>
<div class="sub-step">Completion time</div>
<div class="sub-step">Accuracy</div>
<div class="sub-step">Streak bonuses</div>
</div>
<div class="step">The system adds XP to the learner's total.</div>
<div class="step">If the learner reaches a level threshold, the system triggers level-up animation.</div>
<div class="step">The learner sees a congratulatory message with new level badge.</div>
<div class="step">The system unlocks new content or features appropriate to the new level.</div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. Bonus XP Earned</div>
<div class="alt-description">At Step 2, if the learner completes on the first attempt or maintains a streak, the system displays:</div>
<div class="system-message">"Bonus XP! You earned +[X] extra points for [reason]."</div>
</div>
</div>
</div>
<hr class="usecase-separator">
<div class="usecase-title">15. Set Language Preferences</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Actor</div>
<div class="meta-value">Learner</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The learner navigates to Settings.</div>
<div class="step">The learner selects "Language Preferences."</div>
<div class="step">The system displays options for:
<div class="sub-step">Interface language (Arabic/English)</div>
<div class="sub-step">Primary programming language (Python/JavaScript) in platform.</div>
</div>
<div class="step">The learner makes selections and clicks "Save."</div>
<div class="step">The system updates preferences and refreshes the interface.</div>
<div class="step">The learner sees confirmation: <div class="system-message">"Preferences updated successfully."</div></div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. Save Error</div>
<div class="alt-description">At Step 5, if saving fails, the system displays:</div>
<div class="system-message">"Unable to save preferences. Please try again."</div>
</div>
</div>
</div>
<hr class="usecase-separator">
<div class="usecase-title">16. Bookmark Lesson</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Actor</div>
<div class="meta-value">Learner</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The learner is viewing a lesson.</div>
<div class="step">The learner clicks the "Bookmark" icon.</div>
<div class="step">The system adds the lesson to the learner's bookmarks.</div>
<div class="step">The learner sees confirmation: <div class="system-message">"Lesson bookmarked!"</div></div>
<div class="step">The learner can access bookmarks from their profile.</div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. Already Bookmarked</div>
<div class="alt-description">At Step 3, if the lesson is already bookmarked, the system removes it and displays:</div>
<div class="system-message">"Bookmark removed."</div>
</div>
</div>
</div>
<hr class="usecase-separator">
<div class="usecase-title">17. Share Solution</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Actor</div>
<div class="meta-value">Learner</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The learner completes an exercise successfully.</div>
<div class="step">The learner navigates to the "Solution Gallery" section.</div>
<div class="step">The learner clicks "Share My Solution."</div>
<div class="step">The learner adds optional comments or explanations.</div>
<div class="step">The learner submits the solution for community viewing.</div>
<div class="step">The system publishes the solution with the learner's profile.</div>
<div class="step">Other learners can view, upvote, and comment.</div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. Solution Not Approved</div>
<div class="alt-description">At Step 6, if the solution violates guidelines, moderators reject it with feedback.</div>
</div>
</div>
</div>
<hr class="usecase-separator">

**Fully Dressed Format Use Cases**

<div class="usecase-title">18. Enable Two-Factor Authentication</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Primary Actor</div>
<div class="meta-value">Learner</div>
</div>
</div>
<div class="stakeholders">
<div class="stakeholder-item">
<span class="stakeholder-role">Learner:</span> Wants enhanced account security to protect personal data and progress.
</div>
<div class="stakeholder-item">
<span class="stakeholder-role">Platform:</span> Needs to reduce account compromise and unauthorized access.
</div>
<div class="stakeholder-item">
<span class="stakeholder-role">Security Team:</span> Wants to enforce best practices for account protection.
</div>
</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Preconditions</div>
<div class="meta-value">
<div class="sub-step">Learner must be logged in.</div>
<div class="sub-step">Learner must have a verified email address.</div>
<div class="sub-step">Learner must have access to a mobile device or authenticator app.</div>
</div>
</div>
</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Postconditions</div>
<div class="meta-value">
<div class="sub-step">2FA is enabled on the learner's account.</div>
<div class="sub-step">Future logins require both password and verification code.</div>
<div class="sub-step">Backup codes are generated and stored securely.</div>
</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The learner navigates to Account Settings.</div>
<div class="step">The learner selects "Security" tab.</div>
<div class="step">The learner clicks "Enable Two-Factor Authentication."</div>
<div class="step">The system displays 2FA setup options:
<div class="sub-step">Authenticator app (recommended)</div>
<div class="sub-step">Email verification code</div>
</div>
<div class="step">The learner selects "Authenticator App."</div>
<div class="step">The system generates a QR code and secret key.</div>
<div class="step">The system displays instructions:
<div class="sub-step">"Scan this QR code with your authenticator app (Google Authenticator, Authy, etc.)"</div>
</div>
<div class="step">The learner opens their authenticator app and scans the QR code.</div>
<div class="step">The authenticator app adds the DuoCodo account and begins generating codes.</div>
<div class="step">The system prompts: "Enter the 6-digit code from your authenticator app to confirm setup."</div>
<div class="step">The learner enters the current code from their app.</div>
<div class="step">The system validates the code.</div>
<div class="step">The system generates 10 backup recovery codes.</div>
<div class="step">The system displays the recovery codes with instructions:
<div class="sub-step">"Save these codes securely. Each can be used once if you lose access to your authenticator."</div>
</div>
<div class="step">The learner downloads or copies the recovery codes.</div>
<div class="step">The learner confirms they've saved the codes by checking a box.</div>
<div class="step">The system enables 2FA on the account.</div>
<div class="step">The learner sees confirmation: <div class="system-message">"Two-Factor Authentication is now active. Your account is more secure!"</div></div>
<div class="step">The system logs out all other sessions for security.</div>
<div class="step">Future logins now require:
<div class="sub-step">Email/username + password</div>
<div class="sub-step">6-digit code from authenticator app</div>
</div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. Invalid Verification Code</div>
<div class="alt-description">At Step 12, if the code is incorrect:</div>
<div class="system-message">"Invalid code. Please ensure you're entering the current 6-digit code from your authenticator app."</div>
<div class="alt-description">
<div class="sub-step">The learner can try again (up to 5 attempts).</div>
<div class="sub-step">After 5 failed attempts, setup is cancelled and must restart.</div>
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A2. Backup Codes Not Saved</div>
<div class="alt-description">At Step 16, if the learner tries to continue without confirming:</div>
<div class="system-message">"Please confirm you've saved your backup codes. You won't be able to view them again."</div>
<div class="alt-description">The "Continue" button remains disabled until confirmed.</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A3. Learner Chooses Email Method</div>
<div class="alt-description">At Step 5, if the learner selects email verification:
<div class="sub-step">The system uses the registered email address.</div>
<div class="sub-step">The system sends a test verification code via email.</div>
<div class="sub-step">The learner enters the code to confirm.</div>
<div class="sub-step">Setup completes with email as the 2FA method.</div>
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A4. QR Code Won't Scan</div>
<div class="alt-description">At Step 8, if the learner can't scan the QR code:
<div class="sub-step">The learner clicks "Can't scan? Enter code manually."</div>
<div class="sub-step">The system displays the secret key as text.</div>
<div class="sub-step">The learner manually enters the key into their authenticator app.</div>
<div class="sub-step">Setup continues from Step 10.</div>
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A5. Lost Authenticator Device</div>
<div class="alt-description">After 2FA is enabled, if the learner loses access:
<div class="sub-step">During login, the learner clicks "Use backup code instead."</div>
<div class="sub-step">The learner enters one of their saved recovery codes.</div>
<div class="sub-step">The system validates the code and grants access.</div>
<div class="sub-step">The system prompts the learner to reconfigure 2FA.</div>
<div class="sub-step">The used recovery code is marked as consumed.</div>
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A6. All Backup Codes Used</div>
<div class="alt-description">If all 10 backup codes are exhausted:
<div class="sub-step">The learner must contact support with identity verification.</div>
<div class="sub-step">Support verifies identity through:
<div class="sub-step">Email verification</div>
<div class="sub-step">Security questions</div>
<div class="sub-step">Recent activity verification</div>
</div>
<div class="sub-step">Support can temporarily disable 2FA or reset it.</div>
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A7. Technical Error During Setup</div>
<div class="alt-description">At any step, if a system error occurs:</div>
<div class="system-message">"We encountered an error during 2FA setup. Please try again or contact support."</div>
<div class="alt-description">
<div class="sub-step">The setup is rolled back; 2FA is not enabled.</div>
<div class="sub-step">The learner can retry after a few minutes.</div>
</div>
</div>
</div>
</div>
<div class="extensions">
<div class="extensions-header">Extensions</div>
<div class="extensions-container">
<div class="extension-item">
<div class="ext-title">E1. Disable 2FA</div>
<div class="alt-description">
<div class="sub-step">The learner navigates to Security settings.</div>
<div class="sub-step">The learner clicks "Disable Two-Factor Authentication."</div>
<div class="sub-step">The system requires current password + 2FA code for confirmation.</div>
<div class="sub-step">The system warns about reduced security.</div>
<div class="sub-step">If confirmed, 2FA is disabled and all backup codes are invalidated.</div>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E2. Regenerate Backup Codes</div>
<div class="alt-description">If the learner loses their backup codes:
<div class="sub-step">The learner navigates to Security settings.</div>
<div class="sub-step">The learner authenticates with password + 2FA code.</div>
<div class="sub-step">The learner clicks "Generate New Backup Codes."</div>
<div class="sub-step">The system creates 10 new codes and invalidates old ones.</div>
<div class="sub-step">The learner saves the new codes securely.</div>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E3. Change 2FA Method</div>
<div class="alt-description">The learner can switch from SMS to authenticator app (or vice versa):
<div class="sub-step">The learner navigates to Security settings.</div>
<div class="sub-step">The learner selects "Change 2FA Method."</div>
<div class="sub-step">The system requires current 2FA verification.</div>
<div class="sub-step">Setup for new method proceeds as in main scenario.</div>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E4. Trusted Devices</div>
<div class="alt-description">After successful 2FA login:
<div class="sub-step">The system offers: "Trust this device for 30 days?"</div>
<div class="sub-step">If accepted, 2FA is not required on this device for 30 days.</div>
<div class="sub-step">Trusted devices can be managed in Security settings.</div>
</div>
</div>
</div>
</div>
<div class="special-requirements">
<div class="req-header">Special Requirements</div>
<ul>
<li>2FA codes must expire after 30 seconds (standard TOTP protocol).</li>
<li>Backup codes must be cryptographically secure random strings.</li>
<li>The system must support time-based one-time passwords (TOTP) standard.</li>
<li>SMS delivery must occur within 60 seconds.</li>
<li>Recovery codes must be hashed in the database, not stored in plain text.</li>
<li>The system must rate-limit 2FA verification attempts (max 5 per 15 minutes).</li>
<li>All 2FA setup and verification events must be logged for security auditing.</li>
</ul>
</div>
<div class="metadata-section">
<div class="section-label">Frequency of Use</div>
<div class="section-content">
<div class="sub-step">One-time setup for security-conscious learners.</div>
<div class="sub-step">Estimated adoption rate: 25-40% of active users.</div>
<div class="sub-step">Daily use during login for enrolled users.</div>
</div>
</div>
<div class="metadata-section">
<div class="section-label">Open Issues</div>
<div class="section-content">
<div class="sub-step">Should 2FA be mandatory for learners with certification credentials?</div>
<div class="sub-step">Should we support hardware security keys (FIDO2/U2F)?</div>
<div class="sub-step">How do we handle learners in regions with poor SMS delivery?</div>
</div>
</div>
<hr class="usecase-separator">
<div class="usecase-title">19. Practice Coding with Code Editor (Platform)</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Primary Actor</div>
<div class="meta-value">Learner</div>
</div>
</div>
<div class="stakeholders">
<div class="stakeholder-item">
<span class="stakeholder-role">Learner:</span> Wants to write, execute, and debug code efficiently in a professional environment on web platform.
</div>
<div class="stakeholder-item">
<span class="stakeholder-role">Platform:</span> Needs to provide secure, real-time code execution with helpful feedback.
</div>
</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Preconditions</div>
<div class="meta-value">
<div class="sub-step">Learner must be logged in to the web platform.</div>
<div class="sub-step">Learner must have access to a lesson or exercise with a coding component.</div>
<div class="sub-step">Code Editor and execution APIs must be operational.</div>
<div class="sub-step">Learner must be using desktop or laptop computer with modern web browser.</div>
</div>
</div>
</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Postconditions</div>
<div class="meta-value">
<div class="sub-step">Code is written, executed, and results are displayed.</div>
<div class="sub-step">Progress is tracked and saved.</div>
<div class="sub-step">Learner receives feedback on their solution.</div>
</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The learner navigates to a coding exercise or lesson on the web platform.</div>
<div class="step">The system loads the Code Editor with syntax highlighting for the selected language (Python/JavaScript).</div>
<div class="step">The system displays:
<div class="sub-step">Problem statement on the left panel</div>
<div class="sub-step">Code Editor in the center</div>
<div class="sub-step">Output console at the bottom</div>
<div class="sub-step">Starter code (if any) pre-loaded in the editor</div>
</div>
<div class="step">The learner writes their code in the Code Editor.</div>
<div class="step">The editor provides professional IDE features:
<div class="sub-step">**IntelliSense** auto-completion</div>
<div class="sub-step">**Syntax highlighting** with color-coded keywords</div>
<div class="sub-step">**Real-time error detection** with red underlines</div>
<div class="sub-step">**Code folding** for functions and blocks</div>
<div class="sub-step">**Multiple cursor editing**</div>
<div class="sub-step">**Find and replace functionality**</div>
<div class="sub-step">**Code formatting** (Ctrl+Shift+F)</div>
<div class="sub-step">**Bracket matching**</div>
</div>
<div class="step">The learner can customize editor settings:
<div class="sub-step">Font size adjustment</div>
<div class="sub-step">Theme selection (dark/light mode)</div>
<div class="sub-step">Tab size configuration</div>
<div class="sub-step">Line numbers toggle</div>
</div>
<div class="step">The learner clicks "Run Code" to test their solution.</div>
<div class="step">The system sends the code to the secure execution API via HTTPS.</div>
<div class="step">The execution API runs the code in an isolated Docker sandbox environment.</div>
<div class="step">The system returns execution results:
<div class="sub-step">Standard output (console.log, print statements)</div>
<div class="sub-step">Execution time (in milliseconds)</div>
<div class="sub-step">Memory usage (in MB)</div>
<div class="sub-step">Error messages with line numbers (if any)</div>
<div class="sub-step">Return values</div>
</div>
<div class="step">The results are displayed in the output console below the editor with syntax highlighting.</div>
<div class="step">The learner can view detailed execution metrics in an expandable panel.</div>
<div class="step">If the output matches expected results, the learner clicks "Submit Solution."</div>
<div class="step">The system validates the solution against all test cases (visible and hidden).</div>
<div class="step">The system displays test results:
<div class="sub-step">Passed test cases (✓ in green)</div>
<div class="sub-step">Failed test cases (✗ in red) with input/output comparison</div>
<div class="sub-step">Edge cases handled correctly</div>
</div>
<div class="step">If all tests pass:
<div class="sub-step">The system awards XP based on:
<div class="sub-step">First attempt bonus (+50 XP)</div>
<div class="sub-step">Code efficiency score</div>
<div class="sub-step">Time taken to solve</div>
</div>
<div class="sub-step">Updates skill mastery metrics</div>
<div class="sub-step">Saves the code to learner's solution history</div>
</div>
<div class="step">The learner sees a success message with:
<div class="sub-step">Earned XP and badges</div>
<div class="sub-step">Performance comparison with other learners</div>
<div class="sub-step">Suggestions for optimization (if applicable)</div>
</div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. Syntax Error Detected</div>
<div class="alt-description">At Step 5, if the learner's code contains syntax errors:
<div class="sub-step">Code Editor underlines the error in red with wavy line</div>
<div class="sub-step">Hovering shows tooltip: <div class="system-message">"Syntax Error: [Description] at line [X], column [Y]"</div></div>
<div class="sub-step">Error panel shows detailed message with suggested fixes</div>
<div class="sub-step">The learner corrects the error and continues</div>
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A2. Runtime Error During Execution</div>
<div class="alt-description">At Step 10, if the code crashes during execution:</div>
<div class="system-message">
✗ Runtime Error: IndexError
Your code encountered an issue at line 15
Stack Trace:
File "main.py", line 15, in &lt;module&gt;
print(arr[10])
IndexError: list index out of range
</div>
<div class="alt-description">
<div class="sub-step">The learner can view full stack trace</div>
<div class="sub-step">System suggests debugging tips based on error type</div>
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A3. Execution Timeout</div>
<div class="alt-description">At Step 9, if code execution exceeds 5 seconds:</div>
<div class="system-message">
Execution Timeout
Your code took longer than 5 seconds to run.
Possible issues:
- Infinite loop detected
- Inefficient algorithm (O(n²) or worse)
Suggestion: Consider optimizing your approach
</div>
<div class="alt-description">The learner can review algorithm complexity</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A4. Memory Limit Exceeded</div>
<div class="alt-description">At Step 10, if memory usage exceeds 512MB:</div>
<div class="system-message">
Memory Limit Exceeded
Your code used more than 512MB of memory.
Consider:
- Reducing data structure sizes
- Using generators instead of lists
- Implementing streaming solutions
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A5. Test Cases Failed</div>
<div class="alt-description">At Step 14-15, if some test cases fail:</div>
<div class="system-message">
Test Case 3: ✗ Failed
Input: [1, 2, 3, 4, 5]
Expected Output: 15
Your Output: 14
Difference: Off by 1 (check array indexing)
</div>
<div class="alt-description">
<div class="sub-step">The learner can revise and resubmit</div>
<div class="sub-step">Hint button becomes available after 2 failed attempts</div>
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A6. Code Execution Service Unavailable</div>
<div class="alt-description">At Step 8, if the execution API is down:</div>
<div class="system-message">
Execution Service Temporarily Unavailable
The code execution service is currently down.
Your code has been saved as a draft.
Please try again in a few minutes.
</div>
<div class="alt-description">
<div class="sub-step">Code is auto-saved every 30 seconds</div>
<div class="sub-step">Learner can continue working offline</div>
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A7. Browser Crash or Tab Closed</div>
<div class="alt-description">If browser crashes or tab is accidentally closed:
<div class="sub-step">On return, system displays:</div>
</div>
<div class="system-message">
Restored from Auto-Save
Last saved: 30 seconds ago
Would you like to continue where you left off?
[Restore Code] [Start Fresh]
</div>
</div>
</div>
</div>
<div class="extensions">
<div class="extensions-header">Extensions</div>
<div class="extensions-container">
<div class="extension-item">
<div class="ext-title">E1. Code Snapshotting</div>
<div class="alt-description">
<div class="sub-step">The learner can save multiple versions of their solution</div>
<div class="sub-step">Click "Save Snapshot" button (Ctrl+S)</div>
<div class="sub-step">System stores code with timestamp: "Version 1 - 14:30:25"</div>
<div class="sub-step">Learner can compare versions side-by-side</div>
<div class="sub-step">Restore any previous version with one click</div>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E2. Code Sharing</div>
<div class="alt-description">
<div class="sub-step">After successful submission, learner can share solution</div>
<div class="sub-step">Click "Share Code" generates unique URL</div>
<div class="sub-step">Other learners can view (not edit) the code</div>
<div class="sub-step">Solution appears in "Community Solutions" gallery</div>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E3. Accessing Model Solutions</div>
<div class="alt-description">
<div class="sub-step">After successful submission, "View Solutions" button appears</div>
<div class="sub-step">System displays 3-5 model solutions:
<div class="sub-step">**Optimal Solution** (best time/space complexity)</div>
<div class="sub-step">**Beginner-Friendly** (easiest to understand)</div>
<div class="sub-step">**Alternative Approaches** (different algorithms)</div>
</div>
<div class="sub-step">Each includes:
<div class="sub-step">Big O complexity analysis</div>
<div class="sub-step">Line-by-line explanations</div>
<div class="sub-step">When to use this approach</div>
</div>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E4. Code Execution History</div>
<div class="alt-description">Learner can view all previous runs:
<div class="sub-step">Timestamp of execution</div>
<div class="sub-step">Output results</div>
<div class="sub-step">Performance metrics</div>
<div class="sub-step">Can re-run any previous version</div>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E5. Split Screen View</div>
<div class="alt-description">Learner can enable split-screen mode:
<div class="sub-step">Problem description on left</div>
<div class="sub-step">Code editor on right</div>
<div class="sub-step">Resizable panels</div>
<div class="sub-step">Useful for referencing requirements while coding</div>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E6. Keyboard Shortcuts</div>
<div class="alt-description">Code Editor supports VS Code shortcuts:
<div class="sub-step">`Ctrl+/` - Toggle line comment</div>
<div class="sub-step">`Ctrl+D` - Select next occurrence</div>
<div class="sub-step">`Alt+Up/Down` - Move line up/down</div>
<div class="sub-step">`Ctrl+Shift+K` - Delete line</div>
<div class="sub-step">`F12` - Go to definition</div>
<div class="sub-step">Full shortcut reference available in help menu</div>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E7. Code Formatting</div>
<div class="alt-description">
<div class="sub-step">Learner clicks "Format Code" or presses `Ctrl+Shift+F`</div>
<div class="sub-step">System auto-formats code following PEP 8 (Python) or StandardJS style</div>
<div class="sub-step">Fixes indentation and spacing</div>
<div class="sub-step">Improves code readability</div>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E8. Collaborative Coding (Future)</div>
<div class="alt-description">
<div class="sub-step">Multiple learners can work on same exercise together</div>
<div class="sub-step">Real-time cursor positions visible</div>
<div class="sub-step">Chat panel for discussion</div>
<div class="sub-step">Useful for pair programming exercises</div>
</div>
</div>
</div>
</div>
<div class="special-requirements">
<div class="req-header">Special Requirements</div>
<ul>
<li>Code Editor must load within 2 seconds</li>
<li>Editor must support Python 3.10+ and ES6+ JavaScript</li>
<li>Code execution must complete within 5 seconds for standard exercises</li>
<li>The sandbox environment must prevent:
<ul>
<li>File system access</li>
<li>Network requests</li>
<li>System command execution</li>
<li>Resource exhaustion attacks</li>
</ul>
</li>
<li>All code submissions must be encrypted during transmission (TLS 1.3)</li>
<li>The editor must be fully keyboard-accessible (WCAG 2.1 AA compliant)</li>
<li>Dark and light themes must both have sufficient contrast ratios</li>
<li>Editor must work on screens as small as 1024x768</li>
<li>Auto-save must occur every 30 seconds</li>
<li>Maximum code file size: 10,000 lines</li>
<li>Support for multiple programming languages must be extensible</li>
</ul>
</div>
<div class="metadata-section">
<div class="section-label">Frequency of Use</div>
<div class="section-content">
<div class="sub-step">This is the most frequently used feature on web platform</div>
<div class="sub-step">Average: 15-20 code executions per active session</div>
<div class="sub-step">Daily active users spend 60% of their time in Code Editor</div>
</div>
</div>
<div class="metadata-section">
<div class="section-label">Open Issues</div>
<div class="section-content">
<div class="sub-step">Should we support additional languages (Java, C++, Ruby) in future releases?</div>
<div class="sub-step">How do we handle collaborative coding exercises without real-time sync?</div>
<div class="sub-step">Should we implement code review features for peer learning?</div>
<div class="sub-step">What's the optimal balance between sandbox security and execution speed?</div>
</div>
</div>
<hr class="usecase-separator">
<div class="usecase-title">Practice Coding with Blockly Editor (Mobile App)</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Primary Actor</div>
<div class="meta-value">Learner</div>
</div>
</div>
<div class="stakeholders">
<div class="stakeholder-item">
<span class="stakeholder-role">Learner:</span> Wants an intuitive, visual way to learn programming concepts on mobile devices without typing code.
</div>
<div class="stakeholder-item">
<span class="stakeholder-role">Platform:</span> Needs to make coding accessible to beginners and younger learners through mobile-friendly interface.
</div>
<div class="stakeholder-item">
<span class="stakeholder-role">Educators:</span> Want a tool that teaches computational thinking before syntax complexity.
</div>
</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Preconditions</div>
<div class="meta-value">
<ul>
<li>Learner must be logged in to the mobile app (iOS/Android).</li>
<li>Learner must have access to a lesson or exercise supporting block-based coding.</li>
<li>Blockly library and execution engine must be operational.</li>
<li>Device must have touchscreen capability.</li>
</ul>
</div>
</div>
</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Postconditions</div>
<div class="meta-value">
<ul>
<li>Visual block program is created and executed.</li>
<li>Generated code (Python/JavaScript) is executed successfully.</li>
<li>Progress is tracked and saved.</li>
<li>Learner understands the underlying code structure.</li>
</ul>
</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The learner navigates to a coding exercise on the mobile app.</div>
<div class="step">The system detects the device type and loads the Blockly visual editor.</div>
<div class="step">The system displays:
<div class="sub-step">Problem statement at the top (collapsible)</div>
<div class="sub-step"><strong>Blockly workspace</strong> in the center (main area)</div>
<div class="sub-step"><strong>Block toolbox</strong> on the left side (categorized blocks)</div>
<div class="sub-step"><strong>Output console</strong> at the bottom (expandable)</div>
<div class="sub-step"><strong>Block bin/trash</strong> for removing blocks</div>
</div>
<div class="step">The problem requires building a simple program (e.g., "Calculate sum of numbers in a list").</div>
<div class="step">The learner taps the toolbox to browse available block categories:
<div class="sub-step"><strong>Logic blocks</strong> (if/else, comparison, boolean)</div>
<div class="sub-step"><strong>Loop blocks</strong> (for, while, repeat)</div>
<div class="sub-step"><strong>Math blocks</strong> (arithmetic, random, functions)</div>
<div class="sub-step"><strong>Text blocks</strong> (string operations, concatenation)</div>
<div class="sub-step"><strong>List blocks</strong> (create, add, get, length)</div>
<div class="sub-step"><strong>Variable blocks</strong> (create, set, get)</div>
<div class="sub-step"><strong>Function blocks</strong> (define, call, return)</div>
</div>
<div class="step">The learner selects a "create variable" block and names it `sum`.</div>
<div class="step">The learner drags a "set variable to" block to the workspace.</div>
<div class="step">The learner adds a "for each item in list" loop block.</div>
<div class="step">Inside the loop, learner adds a "set sum to sum + item" block.</div>
<div class="step">Blocks automatically snap together when compatible (visual feedback):
<div class="sub-step"><strong>Green outline</strong> when blocks can connect</div>
<div class="sub-step"><strong>Red outline</strong> when blocks are incompatible</div>
<div class="sub-step"><strong>Magnetic snap</strong> when released near compatible blocks</div>
</div>
<div class="step">The learner can:
<div class="sub-step"><strong>Drag blocks</strong> with finger/stylus</div>
<div class="sub-step"><strong>Pinch to zoom</strong> for better view</div>
<div class="sub-step"><strong>Pan</strong> the workspace by dragging background</div>
<div class="sub-step"><strong>Duplicate blocks</strong> by long-press</div>
<div class="sub-step"><strong>Delete blocks</strong> by dragging to trash icon</div>
</div>
<div class="step">The system shows real-time validation:
<div class="sub-step">Incomplete blocks highlighted in yellow</div>
<div class="sub-step">Required connections shown with puzzle piece icons</div>
<div class="sub-step">Error indicators if logic is invalid</div>
</div>
<div class="step">The learner taps "Run Code" button.</div>
<div class="step">The system converts blocks to executable code (Python or JavaScript):
<div class="sub-step">
```python
sum = 0
list = [1, 2, 3, 4, 5]
for item in list:
sum = sum + item
print(sum)
```
</div>
</div>
<div class="step">The generated code is displayed in a collapsible "View Code" panel.</div>
<div class="step">The learner can switch between:
<div class="sub-step"><strong>Block View</strong> (visual programming)</div>
<div class="sub-step"><strong>Code View</strong> (text-based equivalent)</div>
<div class="sub-step"><strong>Split View</strong> (both simultaneously)</div>
</div>
<div class="step">The system sends the generated code to the execution API.</div>
<div class="step">The execution API runs the code in a secure sandbox.</div>
<div class="step">The output console displays results:
<div class="sub-step">Console output: `15`</div>
<div class="sub-step">Execution time: `0.02s`</div>
<div class="sub-step">Memory used: `12MB`</div>
</div>
<div class="step">If output is correct, the learner taps "Submit Solution."</div>
<div class="step">The system validates against test cases:
<div class="sub-step"><strong>Test 1:</strong> Input `[1, 2, 3]` → Expected `6` ✓</div>
<div class="sub-step"><strong>Test 2:</strong> Input `[10, 20, 30]` → Expected `60` ✓</div>
<div class="sub-step"><strong>Test 3:</strong> Input `[]` → Expected `0` ✓</div>
</div>
<div class="step">If all tests pass:
<div class="sub-step">Confetti animation plays on mobile screen</div>
<div class="sub-step">Success sound effect (optional, can be muted)</div>
<div class="sub-step">XP points awarded with animation</div>
<div class="sub-step">Badge earned (e.g., "Loop Master" for completing loop exercises)</div>
</div>
<div class="step">The learner sees a summary screen:
<div class="system-message">Exercise Completed!</div>
<div class="sub-step">XP earned: +30 XP</div>
<div class="sub-step">Total XP: 450 XP</div>
<div class="sub-step">Next exercise unlocked</div>
</div>
<div class="step">The block program is saved to the learner's solution history.</div>
<div class="step">The learner can share their block solution as an image on social media.</div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. Blocks Won't Connect (Type Mismatch)</div>
<div class="alt-description">At Step 10, if learner tries to connect incompatible blocks:</div>
<div class="alt-description">
<ul>
<li>Blocks shake and show red outline</li>
<li>Tooltip displays: <em>"❌ Cannot connect: Expected NUMBER, got TEXT"</em></li>
<li>Blocks bounce back to original position</li>
<li>Learner must use correct block type</li>
</ul>
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A2. Missing Required Blocks</div>
<div class="alt-description">At Step 13, if program is incomplete:</div>
<div class="system-message">⚠️ Your program is incomplete. Missing: output block</div>
<div class="alt-description">
<ul>
<li>Incomplete blocks flash yellow</li>
<li>"Run Code" button is disabled until complete</li>
<li>Hint suggests which category has needed blocks</li>
</ul>
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A3. Infinite Loop Detected</div>
<div class="alt-description">At Step 18, if blocks create infinite loop:</div>
<div class="alt-description">
<ul>
<li>Execution is terminated after 3 seconds</li>
<li>System displays:
<div class="system-message">
Infinite Loop Detected<br>
Your loop ran more than 1000 times.<br>
Check your loop condition to ensure it can exit.
</div>
</li>
<li>Problematic loop block is highlighted in red</li>
<li>Learner can review loop logic</li>
</ul>
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A4. Runtime Error in Generated Code</div>
<div class="alt-description">At Step 18, if execution fails:</div>
<div class="alt-description">
<ul>
<li>System displays error in simple terms:
<div class="system-message">
Error: Division by Zero<br>
Your program tried to divide by 0 at this block:<br>
[Highlights the specific block causing error]<br>
Tip: Check if denominator can be zero
</div>
</li>
<li>Problematic block glows red</li>
<li>Learner can tap block for more details</li>
</ul>
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A5. Test Cases Failed</div>
<div class="alt-description">At Step 21, if some tests fail:</div>
<div class="alt-description">
<ul>
<li>System shows which tests failed:
<div class="system-message">
Test 2: ❌ Failed<br>
Input: [10, 20, 30]<br>
Expected: 60<br>
Your Output: 50<br>
Issue: Check your addition logic
</div>
</li>
<li>Learner can revise blocks and retry</li>
</ul>
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A6. Accidental Block Deletion</div>
<div class="alt-description">At Step 11, if learner accidentally deletes important blocks:</div>
<div class="alt-description">
<ul>
<li>"Undo" button appears for 5 seconds</li>
<li>Tapping "Undo" restores deleted blocks</li>
<li>After 5 seconds, deletion is permanent</li>
<li>Learner can recreate blocks from toolbox</li>
</ul>
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A7. Device Orientation Change</div>
<div class="alt-description">If device is rotated during exercise:</div>
<div class="alt-description">
<ul>
<li>System saves current block positions</li>
<li>Re-layouts workspace for new orientation</li>
<li><strong>Portrait mode:</strong> Toolbox becomes bottom drawer</li>
<li><strong>Landscape mode:</strong> Toolbox on left sidebar</li>
<li>All blocks remain in same relative positions</li>
</ul>
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A8. App Crashes or Closed</div>
<div class="alt-description">If app crashes or is closed:</div>
<div class="alt-description">
<ul>
<li>On relaunch, system displays:
<div class="system-message">
Restore Previous Session?<br>
You were working on: "Sum Calculator"<br>
Last saved: 2 minutes ago<br>
[Restore] [Start New]
</div>
</li>
<li>Auto-save occurs every 20 seconds</li>
</ul>
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A9. Network Unavailable</div>
<div class="alt-description">At Step 17, if no internet connection:</div>
<div class="system-message">📡 No Internet - Code saved locally</div>
<div class="alt-description">
<ul>
<li>Execution is queued</li>
<li>When connection restores, code executes automatically</li>
<li>Learner receives notification when results are ready</li>
</ul>
</div>
</div>
</div>
</div>
<div class="extensions">
<div class="extensions-header">Extensions</div>
<div class="extensions-container">
<div class="extension-item">
<div class="ext-title">E1. Block Customization</div>
<div class="alt-description">Learner can customize block colors:</div>
<div class="alt-description">
<ul>
<li>Tap block settings icon</li>
<li>Choose from color palette</li>
<li>Useful for organizing complex programs</li>
<li>Custom colors saved per learner</li>
</ul>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E2. Voice Input for Block Names</div>
<div class="alt-description">Learner can name variables using voice:</div>
<div class="alt-description">
<ul>
<li>Tap microphone icon</li>
<li>Say variable name: "total score"</li>
<li>System creates variable with that name</li>
<li>Useful for accessibility</li>
</ul>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E3. Block Animation</div>
<div class="alt-description">During execution, blocks light up sequentially:</div>
<div class="alt-description">
<ul>
<li>Shows program flow in real-time</li>
<li>Helps learners understand execution order</li>
<li>Speed can be adjusted (slow/normal/fast)</li>
<li>Can be paused at any block</li>
</ul>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E4. Tutorial Hints with Arrows</div>
<div class="alt-description">For first-time users:</div>
<div class="alt-description">
<ul>
<li>Animated arrows point to next action</li>
<li>Speech bubbles explain each step</li>
<li>"Try dragging this block here 👉"</li>
<li>Tutorial can be skipped or replayed</li>
</ul>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E5. Block Library Favorites</div>
<div class="alt-description">Learner can mark frequently-used blocks as favorites:</div>
<div class="alt-description">
<ul>
<li>Star icon on blocks</li>
<li>Favorites appear in "My Blocks" category</li>
<li>Speeds up program building</li>
</ul>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E6. Convert to Text Code</div>
<div class="alt-description">After mastering blocks, learner can transition:</div>
<div class="alt-description">
<ul>
<li>Tap "Convert to Code" button</li>
<li>System generates Python/JavaScript</li>
<li>Opens in Code Editor (if on tablet/larger screen)</li>
<li>Learner can edit and learn text-based syntax</li>
</ul>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E7. Collaborative Block Coding</div>
<div class="alt-description">Learner can invite friend to code together:</div>
<div class="alt-description">
<ul>
<li>Share session code</li>
<li>Both see blocks in real-time</li>
<li>Each user's cursor shown with name</li>
<li>Chat feature for discussion</li>
<li>Useful for pair programming</li>
</ul>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E8. Block Challenges with Timers</div>
<div class="alt-description">Timed challenges for competitive learning:</div>
<div class="alt-description">
<ul>
<li>Build program in 3 minutes</li>
<li>Leaderboard for fastest correct solutions</li>
<li>Bonus XP for speed</li>
<li>Encourages efficiency</li>
</ul>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E9. Parent/Teacher Monitoring</div>
<div class="alt-description">Parents or teachers can view learner's block programs:</div>
<div class="alt-description">
<ul>
<li>Dashboard shows completed exercises</li>
<li>Can view block solutions</li>
<li>Progress reports</li>
<li>Useful for tracking learning at home/school</li>
</ul>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E10. Block Export as Image</div>
<div class="alt-description">Learner can export block program as PNG:</div>
<div class="alt-description">
<ul>
<li>Tap "Share" button</li>
<li>System generates image of blocks</li>
<li>Can post to social media</li>
<li>Useful for showcasing progress</li>
</ul>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E11. Adaptive Block Difficulty</div>
<div class="alt-description">System adjusts available blocks based on skill level:</div>
<div class="alt-description">
<ul>
<li><strong>Beginner:</strong> Basic blocks only (print, variables, simple loops)</li>
<li><strong>Intermediate:</strong> Add functions, lists, conditions</li>
<li><strong>Advanced:</strong> Classes, recursion, advanced data structures</li>
<li>Prevents overwhelming beginners with too many options</li>
</ul>
</div>
</div>
</div>
</div>
<div class="special-requirements">
<div class="req-header">Special Requirements</div>
<ul>
<li>Blockly editor must load within 1.5 seconds on mobile devices</li>
<li>Touch targets must be at least 44x44 pixels (Apple HIG standard)</li>
<li>Blocks must have high contrast for visibility in sunlight</li>
<li>Pinch-to-zoom must support 50% to 200% zoom range</li>
<li>Drag operations must have 150ms delay to prevent accidental moves</li>
<li>Block snapping must have haptic feedback (vibration) on compatible devices</li>
<li>Workspace must support up to 100 blocks without performance degradation</li>
<li>App must work offline with local execution for basic exercises</li>
<li>All block actions must have undo/redo support (up to 50 steps)</li>
<li>Block colors must be colorblind-friendly (use patterns/icons in addition to colors)</li>
<li>Text on blocks must be readable at minimum 16px font size</li>
<li>Auto-save must occur every 20 seconds</li>
<li>Generated code must be syntactically correct and executable</li>
<li>Block toolbox must be searchable for finding specific blocks quickly</li>
</ul>
</div>
<div class="metadata-section">
<div class="section-label">Frequency of Use</div>
<div class="section-content">
<ul>
<li>Very high frequency among mobile learners (ages 8-16 primary users)</li>
<li>Average: 10-15 block exercises per active mobile session</li>
<li>70% of mobile app users prefer Blockly over text-based coding initially</li>
<li>Gateway to text-based programming (users transition after 3-6 months)</li>
</ul>
</div>
</div>
<div class="metadata-section">
<div class="section-label">Open Issues</div>
<div class="section-content">
<ul>
<li>Should we support custom block creation for advanced users?</li>
<li>How do we handle very complex programs (100+ blocks) on small screens?</li>
<li>Should we implement AR (Augmented Reality) mode for 3D block visualization?</li>
<li>Can we integrate voice coding ("add a loop block") for hands-free operation?</li>
<li>Should there be a "block marketplace" where users share custom block libraries?</li>
<li>How do we transition users from Blockly to Code smoothly?</li>
<li>Should we support multiple languages (Spanish, Arabic) for block text?</li>
</ul>
</div>
</div>
<hr class="usecase-separator">
<div class="usecase-title">Receive AI-Powered Hints</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Primary Actor</div>
<div class="meta-value">Learner</div>
</div>
</div>
<div class="stakeholders">
<div class="stakeholder-item">
<span class="stakeholder-role">Learner:</span> Wants contextual, progressive hints that guide without giving away the complete solution.
</div>
<div class="stakeholder-item">
<span class="stakeholder-role">Platform:</span> Needs to provide intelligent assistance that enhances learning without creating dependency.
</div>
<div class="stakeholder-item">
<span class="stakeholder-role">AI System (Gemini/OpenRouter/Custom model):</span> Provides adaptive hints based on code analysis.
</div>
</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Preconditions</div>
<div class="meta-value">
<ul>
<li>Learner must be working on an exercise.</li>
<li>Learner must be logged in.</li>
<li>AI API services (OpenRouter/Gemini/Custom model) must be operational.</li>
<li>Learner must have made at least one attempt at the exercise.</li>
</ul>
</div>
</div>
</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Postconditions</div>
<div class="meta-value">
<ul>
<li>Appropriate hint is provided based on learner's current code and skill level.</li>
<li>Hint usage is tracked for analytics.</li>
<li>Learner can progress with better understanding.</li>
</ul>
</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The learner is working on a coding exercise and encounters difficulty.</div>
<div class="step">The learner clicks the "Get Hint" button.</div>
<div class="step">The system analyzes the learner's current code and attempt history.</div>
<div class="step">The system determines the learner's skill level and hint count for this exercise.</div>
<div class="step">The system sends a request to the AI API with:
<div class="sub-step">Problem statement</div>
<div class="sub-step">Learner's current code</div>
<div class="sub-step">Skill level</div>
<div class="sub-step">Previous hint history</div>
<div class="sub-step">Requested hint level</div>
</div>
<div class="step">The AI API processes the request and generates an appropriate hint.</div>
<div class="step">The AI returns a hint that:
<div class="sub-step">Doesn't reveal the complete solution</div>
<div class="sub-step">Addresses the learner's specific issue</div>
<div class="sub-step">Matches the learner's comprehension level</div>
</div>
<div class="step">The system displays the hint in a panel below the editor.</div>
<div class="step">The hint includes:
<div class="sub-step">Conceptual guidance</div>
<div class="sub-step">Suggested approach</div>
<div class="sub-step">Relevant examples (if needed)</div>
</div>
<div class="step">The learner reads the hint and applies the guidance.</div>
<div class="step">The system tracks the hint usage and adjusts XP rewards accordingly.</div>
<div class="step">If the learner needs additional help, they can request more specific hints (progressive levels).</div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. No Attempt Made Yet</div>
<div class="alt-description">At Step 2, if the learner hasn't written any code:</div>
<div class="system-message">Try writing some code first! Hints are most helpful after you've made an attempt.</div>
<div class="alt-description">
<ul>
<li>The "Get Hint" button remains disabled until code is written.</li>
</ul>
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A2. Maximum Hints Reached</div>
<div class="alt-description">At Step 4, if the learner has used all available hints for this exercise:</div>
<div class="system-message">You've used all available hints. Try applying what you've learned or view the model solution.</div>
<div class="alt-description">
<ul>
<li>The learner is offered the option to view the complete solution (with loss XP reward).</li>
</ul>
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A3. AI Service Unavailable</div>
<div class="alt-description">At Step 6, if the AI API is down or unresponsive:</div>
<div class="system-message">AI hints are temporarily unavailable. Here's a pre-generated hint for this problem.</div>
<div class="alt-description">
<ul>
<li>The system provides a fallback hint from the database.</li>
</ul>
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A4. Request Timeout</div>
<div class="alt-description">At Step 6, if the AI API doesn't respond within 10 seconds:</div>
<div class="system-message">The hint service is taking longer than usual. Please try again.</div>
<div class="alt-description">
<ul>
<li>The request is logged for admin review.</li>
</ul>
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A5. Inappropriate Code Detected</div>
<div class="alt-description">At Step 5, if the learner's code contains inappropriate content:</div>
<div class="system-message">Please ensure your code is appropriate before requesting hints.</div>
<div class="alt-description">
<ul>
<li>The system doesn't send to AI and displays the message.</li>
</ul>
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A6. Hint Too Advanced</div>
<div class="alt-description">At Step 7, if the AI generates a hint beyond the learner's level:</div>
<div class="alt-description">
<ul>
<li>The system uses natural language processing to simplify the hint.</li>
<li>If simplification fails, a pre-generated hint is used instead.</li>
</ul>
</div>
</div>
</div>
</div>
<div class="extensions">
<div class="extensions-header">Extensions</div>
<div class="extensions-container">
<div class="extension-item">
<div class="ext-title">E1. Progressive Hint Levels</div>
<div class="alt-description">
<ul>
<li>First hint: Conceptual guidance only</li>
<li>Second hint: Specific approach suggestion</li>
<li>Third hint: Pseudocode or example structure</li>
<li>Fourth hint: Partial code implementation</li>
<li>Fifth hint: Complete solution with explanation</li>
</ul>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E2. Code Analysis Insights</div>
<div class="alt-description">The AI identifies specific issues in the learner's code:</div>
<div class="alt-description">
<ul>
<li>Logic errors</li>
<li>Incorrect algorithm choice</li>
<li>Edge case handling</li>
<li>The hint addresses these specific issues.</li>
</ul>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E3. Hint History</div>
<div class="alt-description">
<ul>
<li>The learner can view all previously received hints.</li>
<li>The learner clicks "Previous Hints" to review earlier guidance.</li>
<li>This helps reinforce learning without requesting duplicate hints.</li>
</ul>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E4. Contextual Examples</div>
<div class="alt-description">
<ul>
<li>If the hint references a concept, the system includes a link to relevant lesson content.</li>
<li>The learner can click to review the concept before continuing.</li>
</ul>
</div>
</div>
</div>
</div>
<div class="special-requirements">
<div class="req-header">Special Requirements</div>
<ul>
<li>AI hints must not reveal complete solutions directly.</li>
<li>Hint generation must complete within 10 seconds.</li>
<li>The system must track hint usage for XP calculation (fewer hints = more XP).</li>
<li>Hints must be appropriate for the learner's skill level.</li>
<li>The AI API must be rate-limited to prevent abuse.</li>
<li>All API communications must be encrypted.</li>
<li>Fallback hints must be available for all exercises.</li>
</ul>
</div>
<div class="metadata-section">
<div class="section-label">Frequency of Use</div>
<div class="section-content">
<ul>
<li>Moderate to high frequency, especially among beginner learners.</li>
<li>Expected usage: 30-40% of learners per exercise.</li>
</ul>
</div>
</div>
<div class="metadata-section">
<div class="section-label">Open Issues</div>
<div class="section-content">
<ul>
<li>Should we implement a "hint cost" using virtual currency?</li>
<li>How do we balance hint availability with learning independence?</li>
<li>Should hints be personalized based on learning style preferences?</li>
</ul>
</div>
</div>
<hr class="usecase-separator">
<div class="usecase-title">Complete Certification Track</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Primary Actor</div>
<div class="meta-value">Learner</div>
</div>
</div>
<div class="stakeholders">
<div class="stakeholder-item">
<span class="stakeholder-role">Learner:</span> Wants to earn a credential that validates completion of their learning path and acquired programming skills.
</div>
<div class="stakeholder-item">
<span class="stakeholder-role">Platform:</span> Needs to ensure certification standards are maintained and verifiable.
</div>
<div class="stakeholder-item">
<span class="stakeholder-role">Potential Employers/Institutions:</span> Want assurance that certifications represent genuine path completion and competency.
</div>
<div class="stakeholder-item">
<span class="stakeholder-role">Content Creators:</span> Want their learning paths to offer valuable credentials that motivate completion.
</div>
</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Preconditions</div>
<div class="meta-value">
<ul>
<li>Learner must be logged in.</li>
<li>Learner must be enrolled in a learning path (from Use Case 10: Choose Learning Path).</li>
<li>Learner must have completed at least 95% of the learning path requirements.</li>
<li>The final challenge of the learning path must be unlocked.</li>
</ul>
</div>
</div>
</div>
<div class="usecase-meta">
<div class="meta-item">
<div class="meta-label">Postconditions</div>
<div class="meta-value">
<ul>
<li>Learning path is marked as 100% complete.</li>
<li>Learner receives a digital certificate for the completed path.</li>
<li>Certificate is added to learner's profile and portfolio.</li>
<li>Certification data is recorded in the system with timestamp.</li>
<li>Certificate can be verified and shared publicly.</li>
</ul>
</div>
</div>
</div>
<div class="main-scenario">
<div class="scenario-header">Main Success Scenario</div>
<div class="scenario-steps">
<div class="step">The learner is enrolled in a learning path (e.g., "Python Full-Stack Developer" from Use Case 10).</div>
<div class="step">The learner progresses through the path by completing courses, lessons, and exercises across all tiers:
<div class="sub-step">Tier 1: Foundation modules completed</div>
<div class="sub-step">Tier 2: Core concepts mastered</div>
<div class="sub-step">Tier 3: Intermediate skills acquired</div>
<div class="sub-step">Tier 4: Advanced topics finished</div>
</div>
<div class="step">The system tracks progress in the learner's dashboard:
<div class="sub-step">Progress bar shows: 95% complete</div>
<div class="sub-step">Status: "Final Challenge Unlocked"</div>
</div>
<div class="step">The learner navigates to the learning path dashboard.</div>
<div class="step">The system displays:
<div class="system-message">🎉 You're almost there! Complete the final challenge to earn your certification.</div>
</div>
<div class="step">The learner clicks "Start Final Challenge."</div>
<div class="step">The system displays the final challenge details:
<div class="sub-step">Challenge title: "Build a Full-Stack Task Management Application"</div>
<div class="sub-step">Requirements:
<ul>
<li>Implement frontend interface</li>
<li>Create backend API</li>
<li>Database integration</li>
<li>User authentication</li>
<li>Deployment instructions</li>
</ul>
</div>
<div class="sub-step">Time limit: 3-7 days (self-paced)</div>
<div class="sub-step">Submission format: GitHub repository link + deployed app URL</div>
</div>
<div class="step">The learner works on the final challenge project using skills learned throughout the path.</div>
<div class="step">The learner tests their application thoroughly.</div>
<div class="step">The learner clicks "Submit Final Challenge."</div>
<div class="step">The system prompts for submission details:
<div class="sub-step">GitHub repository URL</div>
<div class="sub-step">Live deployment URL</div>
<div class="sub-step">Project description (optional)</div>
<div class="sub-step">Technologies used</div>
</div>
<div class="step">The learner provides all required information and clicks "Confirm Submission."</div>
<div class="step">The system validates submission:
<div class="sub-step">Checks if URLs are accessible</div>
<div class="sub-step">Verifies repository contains code</div>
<div class="sub-step">Scans for plagiarism using code similarity detection</div>
</div>
<div class="step"><strong>Automated Evaluation Process:</strong>
<div class="sub-step">The system runs automated tests on the submitted project:
<ul>
<li>Code quality analysis (linting, formatting)</li>
<li>Functionality tests (API endpoints work correctly)</li>
<li>Security checks (no obvious vulnerabilities)</li>
<li>Performance benchmarks (response times acceptable)</li>
</ul>
</div>
</div>
<div class="step"><strong>Scoring System:</strong>
<div class="sub-step">The system calculates a score based on:
<ul>
<li>Functionality: 40 points (all features work correctly)</li>
<li>Code quality: 30 points (clean, well-documented code)</li>
<li>Creativity: 15 points (innovative features, UI/UX)</li>
<li>Best practices: 15 points (security, performance, structure)</li>
</ul>
</div>
<div class="sub-step">Minimum passing score: 70/100</div>
</div>
<div class="step">If the learner achieves 70+ points:
<div class="system-message">✅ Congratulations! Your project meets certification standards.</div>
</div>
<div class="step"><strong>Certificate Generation:</strong>
<div class="sub-step">The system generates a digital certificate including:
<ul>
<li>Learner's full name</li>
<li>Learning path title: "Python Full-Stack Developer"</li>
<li>Completion date</li>
<li>Unique certificate ID (e.g., DCD-PY-2025-12345)</li>
<li>Platform logo and signature</li>
<li>QR code for verification</li>
<li>Path details (total hours, skills acquired)</li>
</ul>
</div>
</div>
<div class="step">The system displays certificate preview with animation:
<div class="sub-step">Confetti effect</div>
<div class="sub-step">Achievement sound</div>
<div class="sub-step">Certificate appears with fade-in animation</div>
</div>
<div class="step">The system updates learner's profile:
<div class="sub-step">Badge: "Python Full-Stack Developer Certified"</div>
<div class="sub-step">Total XP bonus: +5000 XP</div>
<div class="sub-step">New level unlocked (if applicable)</div>
<div class="sub-step">Certificate added to "My Certificates" section</div>
</div>
<div class="step">The system sends congratulatory email with:
<div class="sub-step">Certificate PDF attachment (high-resolution, printable)</div>
<div class="sub-step">Certificate verification link</div>
<div class="sub-step">Social sharing templates</div>
<div class="sub-step">LinkedIn credential integration link</div>
</div>
<div class="step">The learner can now:
<div class="sub-step">Download certificate as PDF</div>
<div class="sub-step">Share on social media (LinkedIn, Twitter, Facebook)</div>
<div class="sub-step">Add to digital portfolio</div>
<div class="sub-step">Print for display</div>
</div>
<div class="step"><strong>Certificate Verification:</strong>
<div class="sub-step">Each certificate has unique URL: `duocodo.com/verify/DCD-PY-2025-12345`</div>
<div class="sub-step">Anyone can verify authenticity by:
<ul>
<li>Scanning QR code on certificate</li>
<li>Entering certificate ID on verification page</li>
</ul>
</div>
<div class="sub-step">Verification page displays:
<ul>
<li>Learner name</li>
<li>Path completed</li>
<li>Completion date</li>
<li>" This certificate is authentic and verified by DuoCodo"</li>
</ul>
</div>
</div>
<div class="step">The learning path is marked as "Completed" in learner's dashboard.</div>
<div class="step">The system recommends next learning paths:
<div class="sub-step">"Advanced Python Development"</div>
<div class="sub-step">"DevOps for Full-Stack Developers"</div>
<div class="sub-step">"React Native Mobile Development"</div>
</div>
<div class="step">The learner's portfolio automatically showcases:
<div class="sub-step">The certificate</div>
<div class="sub-step">Final challenge project</div>
<div class="sub-step">All portfolio projects from the path</div>
</div>
</div>
</div>
<div class="alternative-scenarios">
<div class="alt-scenario-header">Alternative Scenarios</div>
<div class="alt-scenarios-container">
<div class="alt-scenario-item">
<div class="alt-title">A1. Final Challenge Score Below 70</div>
<div class="alt-description">At Step 16, if score is 60-69 points:</div>
<div class="system-message">Your project scored [X]/100. You need 70+ to pass. Review the feedback and resubmit.</div>
<div class="alt-description">The system provides detailed feedback:
<div class="system-message">
Areas for improvement:<br>
- Functionality: Missing user logout feature (-5 points)<br>
- Code quality: Inconsistent naming conventions (-8 points)<br>
- Security: API endpoints not protected (-7 points)<br>
<br>
Recommendations:<br>
- Review authentication lessons in Tier 4<br>
- Study API security best practices<br>
- Fix identified issues and resubmit
</div>
</div>
<div class="alt-description">
<ul>
<li>The learner can revise and resubmit (up to 3 attempts total).</li>
<li>Each attempt must wait 48 hours for review.</li>
</ul>
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A2. Plagiarism Detected</div>
<div class="alt-description">At Step 13, if code similarity exceeds 80% with existing projects:</div>
<div class="alt-description">
<ul>
<li>The system flags submission for manual review.</li>
<li>Admin investigates source of similarity.</li>
<li>If confirmed plagiarism:
<ul>
<li>Submission is rejected.</li>
<li>The system displays: <em>"Your submission contains plagiarized content. Certification requires original work."</em></li>
<li>Learner receives warning.</li>
<li>Must create new project from scratch.</li>
<li>Serious violations may result in temporary suspension.</li>
</ul>
</li>
</ul>
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A3. Submission URLs Invalid</div>
<div class="alt-description">At Step 13, if provided URLs are broken or inaccessible:</div>
<div class="system-message">Unable to access your project. Please ensure URLs are correct and publicly accessible.</div>
<div class="alt-description">
<ul>
<li>Learner must fix URLs and resubmit.</li>
<li>Submission is not counted as an attempt if URLs are invalid.</li>
</ul>
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A4. Technical Issues During Submission</div>
<div class="alt-description">At Step 12, if submission fails due to system error:</div>
<div class="system-message">Submission failed due to technical issues. Your work has been saved as draft.</div>
<div class="alt-description">
<ul>
<li>Learner can retry submission.</li>
<li>Support team is notified automatically.</li>
<li>Deadline is extended by 24 hours if system was at fault.</li>
</ul>
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A5. Maximum Attempts Reached (3 Failed Submissions)</div>
<div class="alt-description">After 3rd failed submission:</div>
<div class="system-message">You've reached the maximum submission attempts. To earn certification, you must:</div>
<div class="alt-description">
<ul>
<li>Option 1: Retake specific path modules and retry after 30 days</li>
<li>Option 2: Schedule mentorship session for guidance</li>
<li>Option 3: Restart learning path from Tier 3</li>
<li>The learner must choose an option to continue.</li>
</ul>
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A6. Deadline Expired (If Path Has Time Limit)</div>
<div class="alt-description">If learner doesn't submit within path deadline (e.g., 6 months):</div>
<div class="system-message">Your enrollment period has ended. To earn certification, re-enroll in the next cohort.</div>
<div class="alt-description">
<ul>
<li>Progress is saved but path must be re-enrolled.</li>
<li>Learner can view what they completed.</li>
</ul>
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A7. Learning Path Not Fully Completed</div>
<div class="alt-description">At Step 6, if learner tries to start final challenge prematurely:</div>
<div class="system-message">Complete all path requirements before attempting final challenge. Current progress: [X]%</div>
<div class="alt-description">
<ul>
<li>Shows remaining incomplete modules/exercises.</li>
<li>"Start Final Challenge" button remains disabled.</li>
</ul>
</div>
</div>
<div class="alt-scenario-item">
<div class="alt-title">A8. Project Repository Private</div>
<div class="alt-description">At Step 13, if GitHub repository is set to private:</div>
<div class="system-message">Repository must be public for evaluation. Please change repository visibility settings.</div>
<div class="alt-description">
<ul>
<li>Provides instructions on making repository public.</li>
<li>Submission is not processed until accessible.</li>
</ul>
</div>
</div>
</div>
</div>
<div class="extensions">
<div class="extensions-header">Extensions</div>
<div class="extensions-container">
<div class="extension-item">
<div class="ext-title">E1. Certificate Levels Based on Performance</div>
<div class="alt-description">Certificates are tiered by final challenge score:</div>
<div class="alt-description">
<ul>
<li><strong>Bronze Certificate:</strong> 70-79 points (Pass)</li>
<li><strong>Silver Certificate:</strong> 80-89 points (Merit)</li>
<li><strong>Gold Certificate:</strong> 90-100 points (Distinction)</li>
<li>Certificate design and badge reflect achievement level.</li>
<li>Higher tiers may unlock additional benefits (e.g., featured portfolio, mentor access).</li>
</ul>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E2. LinkedIn Integration</div>
<div class="alt-description">After certificate issuance:</div>
<div class="alt-description">
<ul>
<li>Learner clicks "Add to LinkedIn" button.</li>
<li>System auto-populates LinkedIn credential form:
<ul>
<li>Credential name: "Python Full-Stack Developer"</li>
<li>Issuing organization: DuoCodo</li>
<li>Issue date: [Completion date]</li>
<li>Credential ID: [Certificate ID]</li>
<li>Credential URL: [Verification link]</li>
</ul>
</li>
<li>Learner confirms and posts to LinkedIn profile.</li>
</ul>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E3. Portfolio Project Showcase</div>
<div class="alt-description">Final challenge project is featured prominently:</div>
<div class="alt-description">
<ul>
<li>Public portfolio page displays:
<ul>
<li>Project demo video/screenshots</li>
<li>Live project link</li>
<li>GitHub repository</li>
<li>Technologies used</li>
<li>Project description</li>
</ul>
</li>
<li>Other learners can view and learn from completed projects.</li>
<li>Recruiters can discover learners through project showcase.</li>
</ul>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E4. Peer Recognition</div>
<div class="alt-description">Other learners can congratulate certificate earners:</div>
<div class="alt-description">
<ul>
<li>"Congratulate" button sends encouragement message.</li>
<li>Achievement appears in community feed.</li>
<li>Builds motivational community culture.</li>
</ul>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E5. Multiple Learning Paths</div>
<div class="alt-description">Learners can pursue multiple certifications:</div>
<div class="alt-description">
<ul>
<li>Each completed path earns separate certificate.</li>
<li>Dashboard shows all earned certificates.</li>
<li>"Collection" badges for completing related paths:
<ul>
<li>"Web Development Master" (3 web paths completed)</li>
<li>"Data Science Expert" (4 data science paths completed)</li>
</ul>
</li>
</ul>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E6. Certificate Renewal/Updates</div>
<div class="alt-description">For technology-focused paths that evolve:</div>
<div class="alt-description">
<ul>
<li>Certificates remain valid but note version: "Python Full-Stack Developer (2025)"</li>
<li>Learners notified when path is significantly updated.</li>
<li>Optional: Complete update modules for refreshed certificate.</li>
<li>Keeps certifications current with industry standards.</li>
</ul>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E7. Employer Verification Portal</div>
<div class="alt-description">Employers can verify certificates in bulk:</div>
<div class="alt-description">
<ul>
<li>Upload list of certificate IDs.</li>
<li>System validates all certificates.</li>
<li>Generates report of verified credentials.</li>
<li>Useful for HR departments during hiring.</li>
</ul>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E8. Certificate Analytics</div>
<div class="alt-description">Learner can view certificate statistics:</div>
<div class="alt-description">
<ul>
<li>How many people completed this path</li>
<li>Average completion time</li>
<li>Most common career outcomes</li>
<li>Salary ranges for certificate holders (if data available)</li>
</ul>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E9. Blockchain Verification (Advanced)</div>
<div class="alt-description">Certificate hash stored on blockchain:</div>
<div class="alt-description">
<ul>
<li>Immutable proof of achievement.</li>
<li>Cannot be forged or tampered with.</li>
<li>Blockchain explorer link included.</li>
<li>Future-proof credential verification.</li>
</ul>
</div>
</div>
<div class="extension-item">
<div class="ext-title">E10. Custom Certificate Frames</div>
<div class="alt-description">Learners can choose certificate design themes:</div>
<div class="alt-description">
<ul>
<li>Professional (formal design)</li>
<li>Modern (colorful, vibrant)</li>
<li>Minimalist (clean, simple)</li>
<li>Personalization makes certificates more meaningful.</li>
</ul>
</div>
</div>
</div>
</div>
<div class="special-requirements">
<div class="req-header">Special Requirements</div>
<ul>
<li>Certificate generation must complete within 10 seconds of passing final challenge.</li>
<li>Certificates must be high-resolution (300 DPI) for printing.</li>
<li>PDF certificates must be accessible (screen reader compatible).</li>
<li>Certificate IDs must be cryptographically unique (collision-resistant).</li>
<li>Verification URLs must remain valid indefinitely (no expiration).</li>
<li>All certificate data must be backed up securely.</li>
<li>The system must handle concurrent certificate generation (100+ simultaneous).</li>
<li>Certificate templates must support multiple languages (English/Arabic).</li>
<li>Plagiarism detection must have &lt;5% false positive rate.</li>
<li>Automated project evaluation must complete within 5 minutes.</li>
<li>Manual review (if needed) must complete within 2 business days.</li>
</ul>
</div>
<div class="metadata-section">
<div class="section-label">Frequency of Use</div>
<div class="section-content">
<ul>
<li>Moderate frequency (20-30% of enrolled learners complete paths).</li>
<li>Peak certification periods: End of quarter, year-end, academic semesters.</li>
<li>Average time from path enrollment to certification: 3-6 months.</li>
<li>Completion rate varies by path difficulty and learner commitment.</li>
</ul>
</div>
</div>
<div class="metadata-section">
<div class="section-label">Open Issues</div>
<div class="section-content">
<ul>
<li>Should certificates expire after a certain period (e.g., 3 years)?</li>
<li>How do we handle certificate revocation if plagiarism is discovered later?</li>
<li>Should we offer physical printed certificates for premium users?</li>
<li>Can certificates be transferable or sold (NFT certificates)?</li>
<li>How do we price premium certifications vs. free learning paths?</li>
<li>Should we partner with universities for academic credit recognition?</li>
<li>What level of manual review is needed vs. automated evaluation?</li>
<li>How do we keep certification standards consistent as platform scales?</li>
</ul>
</div>
</div>

---
### <div id="sequence-diagram" class="section">5.4 Sequence Diagram</div>

Sequence diagrams were created only for casual and fully-dressed use cases, as these provide sufficient interaction detail to model system behavior. Brief use cases were excluded since they describe high-level functionality without internal system collaboration.

<figure id="Figure52">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.2_Manage_User_Accounts.svg" alt="Figure 5.2: Manage User Accounts">
  <figcaption>Figure 5.2: Manage User Accounts</figcaption>
</figure>

---

<figure id="Figure53">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.3_Assign_User_Role.svg" alt="Figure 5.3: Assign User Role">
  <figcaption>Figure 5.3: Assign User Role</figcaption>
</figure>

---

<figure id="Figure54">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.4_Monitor_Platform_Analytics.svg" alt="Figure 5.4: Monitor Platform Analytics">
  <figcaption>Figure 5.4: Monitor Platform Analytics</figcaption>
</figure>

---

<figure id="Figure55">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.5_Review_And_Filter_System_Logs.svg" alt="Figure 5.5: Review And Filter System Logs">
  <figcaption>Figure 5.5: Review And Filter System Logs</figcaption>
</figure>

---

<figure id="Figure56">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.6_Remove_Inappropriate_Content.svg" alt="Figure 5.6: Remove Inappropriate Content">
  <figcaption>Figure 5.6: Remove Inappropriate Content</figcaption>
</figure>

---

<figure id="Figure57">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.7_Issue_User_Warning.svg" alt="Figure 5.7: Issue User Warning">
  <figcaption>Figure 5.7: Issue User Warning</figcaption>
</figure>

---

<figure id="Figure58">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.8_Design_Learning_Path.svg" alt="Figure 5.8: Design Learning Path">
  <figcaption>Figure 5.8: Design Learning Path</figcaption>
</figure>

---

<figure id="Figure59">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.9_Register_Account.svg" alt="Figure 5.9: Register Account">
  <figcaption>Figure 5.9: Register Account</figcaption>
</figure>

---

<figure id="Figure510">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.10_Login_to_System.svg" alt="Figure 5.10: Login to System">
  <figcaption>Figure 5.10: Login to System</figcaption>
</figure>

---

<figure id="Figure511">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.11_Create_Course.svg" alt="Figure 5.11: Create Course">
  <figcaption>Figure 5.11: Create Course</figcaption>
</figure>

---

<figure id="Figure512">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.12_Create_Lesson.svg" alt="Figure 5.12: Create Lesson">
  <figcaption>Figure 5.12: Create Lesson</figcaption>
</figure>

---

<figure id="Figure513">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.13_Add_Multimedia_Content.svg" alt="Figure 5.13: Add Multimedia Content">
  <figcaption>Figure 5.13: Add Multimedia Content</figcaption>
</figure>

---

<figure id="Figure514">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.14_Localize_Content.svg" alt="Figure 5.14: Localize Content">
  <figcaption>Figure 5.14: Localize Content</figcaption>
</figure>

---

<figure id="Figure515">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.15_Categorize_Exercise_Difficulty.svg" alt="Figure 5.15: Categorize Exercise Difficulty">
  <figcaption>Figure 5.15: Categorize Exercise Difficulty</figcaption>
</figure>

---

<figure id="Figure516">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.16_Udate_Course_Materials.svg" alt="Figure 5.16: Udate Course Materials">
  <figcaption>Figure 5.16: Udate Course Materials</figcaption>
</figure>

---

<figure id="Figure517">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.17_Review_Student_Submissions.svg" alt="Figure 5.17: Review Student Submissions">
  <figcaption>Figure 5.17: Review Student Submissions</figcaption>
</figure>

---

<figure id="Figure518">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.18_Manage_Course_Structure.svg" alt="Figure 5.18: Manage Course Structure">
  <figcaption>Figure 5.18: Manage Course Structure</figcaption>
</figure>

---

<figure id="Figure519">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.19_Create_Coding_Exercise.svg" alt="Figure 5.19: Create Coding Exercise">
  <figcaption>Figure 5.19: Create Coding Exercise</figcaption>
</figure>

---

<figure id="Figure520">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.20_Validate_Exercise_before_Publishing.svg" alt="Figure 5.20: Validate Exercise before Publishing">
  <figcaption>Figure 5.20: Validate Exercise before Publishing</figcaption>
</figure>

---

<figure id="Figure521">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.21_Contribute_to_Learning_Path.svg" alt="Figure 5.21: Contribute to Learning Path">
  <figcaption>Figure 5.21: Contribute to Learning Path</figcaption>
</figure>

---

<figure id="Figure522">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.22_Register_Account.svg" alt="Figure 5.22: Register Account">
  <figcaption>Figure 5.22: Register Account</figcaption>
</figure>

---

<figure id="Figure523">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.23_Login_to_System.svg" alt="Figure 5.23: Login to System">
  <figcaption>Figure 5.23: Login to System</figcaption>
</figure>

---

<figure id="Figure524">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.24_Recover_password.svg" alt="Figure 5.24: Recover password">
  <figcaption>Figure 5.24: Recover password</figcaption>
</figure>

---

<figure id="Figure525">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.25_Choose_Learning_Path.svg" alt="Figure 5.25: Choose Learning Path">
  <figcaption>Figure 5.25: Choose Learning Path</figcaption>
</figure>

---

<figure id="Figure526">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.26_View_Lesson_Content.svg" alt="Figure 5.26: View Lesson Content">
  <figcaption>Figure 5.26: View Lesson Content</figcaption>
</figure>

---

<figure id="Figure527">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.27_Complete_Exercise.svg" alt="Figure 5.27: Complete Exercise">
  <figcaption>Figure 5.27: Complete Exercise</figcaption>
</figure>

---

<figure id="Figure528">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.28_Track_Progress.svg" alt="Figure 5.28: Track Progress">
  <figcaption>Figure 5.28: Track Progress</figcaption>
</figure>

---

<figure id="Figure529">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.29_Learn_XP_and_Level_Up.svg" alt="Figure 5.29: Learn XP and Level Up">
  <figcaption>Figure 5.29: Learn XP and Level Up</figcaption>
</figure>

---

<figure id="Figure530">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.30_Set_Language_Preferences.svg" alt="Figure 5.30: Set Language Preferences">
  <figcaption>Figure 5.30: Set Language Preferences</figcaption>
</figure>

---

<figure id="Figure531">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.31_Bookmark_Lesson.svg" alt="Figure 5.31: Bookmark Lesson">
  <figcaption>Figure 5.31: Bookmark Lesson</figcaption>
</figure>

---

<figure id="Figure532">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.32_Share_Solution.svg" alt="Figure 5.32: Share Solution">
  <figcaption>Figure 5.32: Share Solution</figcaption>
</figure>

---

<figure id="Figure533">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.33_Enable_Two-factor_Authontecation.svg" alt="Figure 5.33: Enable Two-factor Authontecation">
  <figcaption>Figure 5.33: Enable Two-factor Authontecation</figcaption>
</figure>

---

<figure id="Figure534">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.34_Practice_Coding.svg" alt="Figure 5.34: Practice Coding">
  <figcaption>Figure 5.34: Practice Coding</figcaption>
</figure>

---

<figure id="Figure535">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.35_Practice_Coding_with_Blockly_Editor.svg" alt="Figure 5.35: Practice Coding with Blockly Editor">
  <figcaption>Figure 5.35: Practice Coding with Blockly Editor</figcaption>
</figure>

---

<figure id="Figure536">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.36_Receive_AI-Powered_Hints.svg" alt="Figure 5.36: Receive AI-Powered Hints">
  <figcaption>Figure 5.36: Receive AI-Powered Hints</figcaption>
</figure>

---

<figure id="Figure537">
  <img src="../public/assets/CH05/Sequence-Diagram/Figure_5.37_Complete_Certification_Track.svg" alt="Figure 5.37: Complete Certification Track">
  <figcaption>Figure 5.37: Complete Certification Track</figcaption>
</figure>

---

### <div id="class-diagram" class="section">5.5 Class Diagram</div>

Class diagrams are structural diagrams that show the static structure of the system, including its classes, attributes, operations, and the relationships among objects. They provide a detailed view of the system's architecture and design.

---

**Part 1:** Core User and Authentication System

This section presents the foundational classes for user management, authentication, and authorization within the DuoCodo platform. It includes user roles, profile management, and security features.

<figure id="Figure538">
    <img src="../public/assets/CH05/Class-Diagrams/Figure_5.38_Class-part1.svg" alt="Figure 5.38: Core User and Authentication System">
    <figcaption>Figure 5.38: Class Diagram - Core User and Authentication System</figcaption>
</figure>

---

**Part 2:** Learning Content Management

This section illustrates the classes responsible for managing educational content, including courses, lessons, exercises, and learning paths. It shows how content is structured and organized within the platform.

<figure id="Figure539">
    <img src="../public/assets/CH05/Class-Diagrams/Figure_5.39_Class-part2.svg" alt="Figure 5.39: Learning Content Management">
    <figcaption>Figure 5.39: Class Diagram - Learning Content Management</figcaption>
</figure>

---

**Part 3:** Submissions and Code Execution

This section demonstrates the classes that handle submission and code execution. It shows how the platform motivates and engages learners.

<figure id="Figure540">
    <img src="../public/assets/CH05/Class-Diagrams/Figure_5.40_Class-part3.svg" alt="Figure 5.40: Progress Tracking and Gamification">
    <figcaption>Figure 5.40: Class Diagram - Submissions and Code Execution</figcaption>
</figure>

---

**Part 4:** Exercises, Attempts and Code Analysis

This section presents the classes that enable exercises, attempts and code analysis, including comments, discussions, friend connections, sharing capabilities, and community engagement features.

<figure id="Figure541">
    <img src="../public/assets/CH05/Class-Diagrams/Figure_5.41_Class-part4.svg" alt="Figure 5.41: Social and Community Features">
    <figcaption>Figure 5.41: Class Diagram - Exercises, Attempts and Code Analysis</figcaption>
</figure>

---

**Part 5:** Certification and Gamification

This section shows the classes related to certification and gamification, and validation mechanisms. It demonstrates how the platform evaluates learner competency and awards credentials.

<figure id="Figure542">
    <img src="../public/assets/CH05/Class-Diagrams/Figure_5.42_Class-part5.svg" alt="Figure 5.42: Assessment and Certification">
    <figcaption>Figure 5.42: Class Diagram - Certification and Gamification</figcaption>
</figure>

---

**Part 6:** Administration and Platform Management

This section illustrates the classes responsible for platform administration, including system monitoring, analytics, content moderation, user management, and reporting capabilities.

<figure id="Figure543">
    <img src="../public/assets/CH05/Class-Diagrams/Figure_5.43_Class-part6.svg" alt="Figure 5.43: Administration and Platform Management">
    <figcaption>Figure 5.43: Class Diagram - Administration and Platform Management</figcaption>
</figure>

---

**Key Design Patterns and Relationships**

The class diagrams above illustrate several important design patterns and relationships:

- **Inheritance**: User roles (Administrator, Content Creator, Learner) inherit from a base User class
- **Composition**: Courses are composed of Lessons, which contain Exercises
- **Association**: Many-to-many relationships between Learners and Courses through enrollment
- **Aggregation**: Learning Paths aggregate multiple Courses
- **Dependency**: Classes depend on authentication and authorization services

These diagrams provide a comprehensive view of the DuoCodo platform's architecture, showing how different components interact to deliver a complete learning experience.

---

## <div id="chapter-6-database-design" class="chapter">Chapter 6: Database Design</div>

### <div id="entity-relationship-diagram" class="section">6.1 Entity Relationship Diagram</div>

Entity Relationship Diagrams (ERD) represent the data model of the DuoCodo platform, showing the entities, their attributes, and the relationships between them. This comprehensive database design ensures data integrity, efficient querying, and scalability.

---

**Part 1: User Management and Authentication**

This section presents the core entities for user management, including user accounts, roles, authentication mechanisms, and profile information. It establishes the foundation for user identity and access control.

<figure id="Figure61">
    <img src="../public/assets/CH06/ERD/Figure_6.1_ERD-Part1.svg" alt="Figure 6.1: User Management and Authentication ERD">
    <figcaption>Figure 6.1: Entity Relationship Diagram - User Management and Authentication</figcaption>
</figure>

---

**Part 2: Learning Content and Course Structure**

This section illustrates the entities related to educational content organization, including courses, lessons, modules, exercises, and learning paths. It shows how content is structured and interconnected within the platform.

<figure id="Figure62">
    <img src="../public/assets/CH06/ERD/Figure_6.2_ERD-Part2.svg" alt="Figure 6.2: Learning Content and Course Structure ERD">
    <figcaption>Figure 6.2: Entity Relationship Diagram - Learning Content and Course Structure</figcaption>
</figure>

---

**Part 3: Submissions and Code Execution**

This section demonstrates the entities that track submission and code execution. It shows how the platform motivates learners through gamification elements.

<figure id="Figure63">
    <img src="../public/assets/CH06/ERD/Figure_6.3_ERD-part3.svg" alt="Figure 6.3: Progress Tracking and Gamification ERD">
    <figcaption>Figure 6.3: Entity Relationship Diagram - Submissions and Code Execution</figcaption>
</figure>

---

**Part 4: Exercises, Attempts and Code Analysis**

This section shows the entities for exercises, attempts and code analysis. It demonstrates how the platform evaluates learner competency and issues credentials.

<figure id="Figure64">
    <img src="../public/assets/CH06/ERD/Figure_6.4_ERD-part4.svg" alt="Figure 6.4: Assessment and Certification ERD">
    <figcaption>Figure 6.4: Entity Relationship Diagram - Exercises, Attempts and Code Analysis</figcaption>
</figure>

---

**Part 5: Certification and Gamification**

This section presents the entities that enable certification and gamification, including comments, discussions, friend connections, notifications, sharing, and community engagement features.

<figure id="Figure65">
    <img src="../public/assets/CH06/ERD/Figure_6.5_ERD-part5.svg" alt="Figure 6.5: Social Features and Community ERD">
    <figcaption>Figure 6.5: Entity Relationship Diagram - Certification and Gamification</figcaption>
</figure>

---

**Part 6: Administration and System Management**

This section illustrates the entities for platform administration, including system logs, analytics, content moderation, reports, backups, and monitoring capabilities.

<figure id="Figure66">
    <img src="../public/assets/CH06/ERD/Figure_6.6_ERD-part6.svg" alt="Figure 6.6: Administration and System Management ERD">
    <figcaption>Figure 6.6: Entity Relationship Diagram - Administration and System Management</figcaption>
</figure>

---

**Database Design Principles**

The ERD design follows these key principles:

- **Normalization**: Entities are normalized to reduce data redundancy and improve data integrity
- **Referential Integrity**: Foreign key relationships ensure data consistency across tables
- **Scalability**: Design supports horizontal and vertical scaling for growing user base
- **Performance**: Indexed fields and optimized relationships for efficient queries
- **Flexibility**: Schema allows for future extensions and feature additions
- **Security**: Sensitive data fields include encryption and access control mechanisms

These diagrams provide a comprehensive view of the DuoCodo platform's data architecture, showing how information is stored, organized, and related to support all system functionalities.

---

### <div id="database-schema" class="section">6.2 Database Schema</div>

Database Schema represents the logical structure of the DuoCodo platform database, showing tables, columns, data types, constraints, and relationships. This detailed schema design ensures optimal performance, data integrity, and supports all platform functionalities.

---

**Part 1: User Management and Authentication**

This section presents the database tables for user management, including user accounts, roles, authentication mechanisms, and profile information. It establishes the foundation for user identity and access control with detailed field specifications.

<figure id="Figure67">
    <img src="../public/assets/CH06/Schema/Figure_6.7_schema-part1.svg" alt="Figure 6.7: User Management and Authentication Schema">
    <figcaption>Figure 6.7: Database Schema - User Management and Authentication</figcaption>
</figure>

---

**Part 2: Learning Content and Course Structure**

This section illustrates the database tables related to educational content organization, including courses, lessons, modules, exercises, and learning paths. It shows how content is structured and stored within the database with proper data types and constraints.

<figure id="Figure68">
    <img src="../public/assets/CH06/Schema/Figure_6.8_schema-part2.svg" alt="Figure 6.8: Learning Content and Course Structure Schema">
    <figcaption>Figure 6.8: Database Schema - Learning Content and Course Structure</figcaption>
</figure>

---

**Part 3: Submissions and Code Execution**

This section demonstrates the database tables that track learner progress, achievements, experience points (XP), badges, streaks, and leaderboard rankings. It shows how the platform stores and manages gamification elements with appropriate indexing.

<figure id="Figure69">
    <img src="../public/assets/CH06/Schema/Figure_6.9_schema-part3.svg" alt="Figure 6.9: Progress Tracking and Gamification Schema">
    <figcaption>Figure 6.9: Database Schema - Submissions and Code Execution</figcaption>
</figure>

---

**Part 4: Exercises, Attempts and Code Analysis**

This section shows the database tables for quizzes, assessments, test cases, submissions, grading, and certifications. It demonstrates how the platform stores evaluation data and manages credentials with proper validation constraints.

<figure id="Figure610">
    <img src="../public/assets/CH06/Schema/Figure_6.10_schema-part4.svg" alt="Figure 6.10: Assessment and Certification Schema">
    <figcaption>Figure 6.10: Database Schema - Exercises, Attempts and Code Analysis</figcaption>
</figure>

---

**Part 5: Certification and Gamification**

This section presents the database tables that enable social interactions, including comments, discussions, friend connections, notifications, sharing, and community engagement features with optimized query structures.

<figure id="Figure611">
    <img src="../public/assets/CH06/Schema/Figure_6.11_schema-part5.svg" alt="Figure 6.11: Social Features and Community Schema">
    <figcaption>Figure 6.11: Database Schema - Certification and Gamification</figcaption>
</figure>

---

**Part 6: Administration and System Management**

This section illustrates the database tables for platform administration, including system logs, analytics, content moderation, reports, backups, and monitoring capabilities with appropriate data retention policies.

<figure id="Figure612">
    <img src="../public/assets/CH06/Schema/Figure_6.12_schema-part6.svg" alt="Figure 6.12: Administration and System Management Schema">
    <figcaption>Figure 6.12: Database Schema - Administration and System Management</figcaption>
</figure>

---

**Database Schema Specifications**

The database schema implementation follows these key specifications:

- **Data Types**: Appropriate data types chosen for optimal storage and performance
- **Constraints**: Primary keys, foreign keys, unique constraints, and check constraints ensure data integrity
- **Indexing**: Strategic indexes on frequently queried columns for optimal performance
- **Normalization**: Tables normalized to 3NF (Third Normal Form) to eliminate redundancy
- **Referential Integrity**: Foreign key relationships maintain consistency across related tables
- **Security**: Sensitive fields include encryption specifications and access control measures
- **Scalability**: Schema design supports partitioning and sharding for future growth
- **Backup Strategy**: Tables include timestamp fields for incremental backup operations

This detailed schema provides the implementation blueprint for the DuoCodo platform's database, ensuring robust data management and optimal query performance across all system components.



</div>
