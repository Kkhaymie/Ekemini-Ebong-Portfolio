export type ProjectTrack =
  | 'Autonomous BI & AI Platforms'
  | 'n8n AI Agents & Workflow Automation'
  | 'Executive BI & Data Engineering'
  | 'HealthTech & ML Systems';

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  track: ProjectTrack;
  tier: 'flagship-spotlight' | 'visual-production' | 'engineering-archive';
  screenshot?: string;
  secondaryScreenshot?: string;
  secondaryLabel?: string;
  liveUrl?: string;
  liveLabel?: string;
  repoUrl?: string;
  notebookPath?: string;
  awardBadge?: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string[];
  tools: string[];
  year: string;
}

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  // ============================================================================
  // TRACK 1: AUTONOMOUS BI & AI PLATFORMS (Streamlit & Full-Stack AI Products)
  // ============================================================================
  {
    id: 'nexus-retail-os',
    index: '01',
    title: 'Nexus Retail Revenue Intelligence OS',
    subtitle: 'Autonomous AI Business Intelligence & Executive Decision Platform',
    track: 'Autonomous BI & AI Platforms',
    tier: 'flagship-spotlight',
    screenshot: '/assets/nexus.png',
    liveUrl: 'https://nexus-retail-oaregrfzrkfw5wrgy9hq8c.streamlit.app',
    liveLabel: 'Launch Live App',
    repoUrl: 'https://github.com/Kkhaymie/nexus-retail',
    awardBadge: 'Grand Champion — 2026 10Alytics Hack-AI-thon',
    summary:
      'Grand Championship winning autonomous revenue-intelligence operating system integrating automated data profiling, diagnostics, predictive forecasting, anomaly detection, scheduled AI email briefings, and conversational analytics.',
    problem:
      'Retail enterprises struggle to unify data engineering, diagnostics, predictive analytics, anomaly detection, customer intelligence, and executive reporting without large dedicated data teams.',
    solution:
      'Architected and deployed an end-to-end autonomous AI business intelligence operating system on Streamlit that ingests raw retail datasets, runs automated quality & audit logging, detects revenue anomalies, forecasts demand, and dispatches scheduled executive intelligence emails.',
    impact: [
      'Won First Place / Grand Championship at the 2026 10Alytics Hack-AI-thon for autonomous BI innovation',
      'Integrates automated data cleaning, customer RFM intelligence, anomaly detection, and conversational AI over uploaded datasets',
      'Open-source codebase and live cloud deployment serving real-time retail diagnostics',
    ],
    tools: ['Python', 'Streamlit', 'OpenAI API', 'Gemini API', 'Pandas', 'Plotly', 'Predictive Analytics'],
    year: '2026',
  },
  {
    id: 'aurora-retail-dashboard',
    index: '02',
    title: 'Aurora Retail & Digital Services Platform',
    subtitle: 'AI-Powered Executive Dashboarding, Data Profiling & Audit-Logged Cleaning',
    track: 'Autonomous BI & AI Platforms',
    tier: 'visual-production',
    screenshot: '/assets/aurora.png',
    liveUrl: 'https://aurora-dashboardgit-zcnxmewa7p3srajq2qsc3k.streamlit.app/',
    liveLabel: 'Launch Live App',
    awardBadge: 'Live Streamlit Platform',
    summary:
      'Self-serve executive analytics platform that profiles, cleans, and transforms uploaded retail and digital service datasets into interactive KPI dashboards and downloadable executive reports.',
    problem:
      'Retail and digital service leaders need immediate visual diagnostics, KPI summaries, and clean data pipelines from raw uploaded spreadsheets without waiting weeks for custom BI builds.',
    solution:
      'Developed the Aurora Retail & Digital Services platform on Streamlit, combining intelligent data profiling and audit-logged cleaning with automated KPI extraction and downloadable executive reports.',
    impact: [
      'Reduces manual data preparation and executive dashboard creation time by 70%',
      'Exports validated, analysis-ready datasets with complete audit trails alongside interactive Plotly visuals',
      'Empowers retail and digital service teams with instant self-serve analytical storytelling',
    ],
    tools: ['Python', 'Streamlit', 'Plotly', 'Pandas', 'GPT-4', 'Automated ETL'],
    year: '2026',
  },
  {
    id: 'predictive-sales-assistant',
    index: '03',
    title: 'Predictive Sales & Customer Analytics Assistant',
    subtitle: 'ML Revenue Forecasting, Churn Risk Diagnostics & Prescriptive Actions',
    track: 'Autonomous BI & AI Platforms',
    tier: 'visual-production',
    screenshot: '/assets/predictive.png',
    liveUrl: 'https://predictive-analytic-assistantgit-cexwvssdngqhr6m6g9xnaa.streamlit.app/',
    liveLabel: 'Launch Live App',
    awardBadge: 'Live Forecasting Engine',
    summary:
      'Machine learning forecasting application generating predictive sales trajectories, customer risk segmentation, and explainable AI business recommendations from historical organizational data.',
    problem:
      'Traditional descriptive dashboards report past performance but fail to quantify future revenue risk, customer churn probability, or recommended next-best actions.',
    solution:
      'Built an interactive Predictive Sales & Customer Analytics Assistant deployed on Streamlit that pairs supervised ML forecasting models with explainable AI risk diagnostics and prescriptive recommendations.',
    impact: [
      'Generates forward-looking sales forecasts and customer behavioral segmentation from historical records',
      'Translates statistical model outputs into clear, actionable recommendations for commercial leaders',
      'Live cloud web application supporting real-time scenario exploration',
    ],
    tools: ['Python', 'Scikit-learn', 'Streamlit', 'Plotly', 'Predictive Analytics', 'Explainable AI'],
    year: '2026',
  },

  // ============================================================================
  // TRACK 2: n8n AI AGENTS & WORKFLOW AUTOMATION (Production Webhooks & Chat)
  // ============================================================================
  {
    id: 'novera-ai',
    index: '04',
    title: 'Novera AI — Autonomous BI & Decision Support Engine',
    subtitle: 'Multi-Agent n8n Intelligence Webhook & Automated Executive Reporting',
    track: 'n8n AI Agents & Workflow Automation',
    tier: 'visual-production',
    screenshot: '/assets/novera.png',
    liveUrl: 'https://geephixs.app.n8n.cloud/webhook/Novera_AI',
    liveLabel: 'Launch Novera AI',
    awardBadge: 'Production AI Webhook',
    summary:
      'End-to-end autonomous AI intelligence application orchestrated on n8n Cloud that transforms natural-language business queries into structured analytics and executive decision support.',
    problem:
      'Operational and business teams spend excessive hours manually running ad-hoc analyses and compiling recurring intelligence updates across disconnected systems.',
    solution:
      'Engineered and deployed Novera AI on n8n Cloud, integrating multi-model LLM agents (OpenAI, Gemini) with structured webhook triggers, automated data processing, and executive insight generation.',
    impact: [
      'Live production webhook serving conversational AI decision support and automated workflow execution',
      'Cuts recurring reporting and analytical turnaround time by up to 70%',
      'Combines multi-agent reasoning with deterministic business rules and execution logging',
    ],
    tools: ['n8n', 'OpenAI API', 'Gemini API', 'AI Agents', 'Webhook Automation', 'Python'],
    year: '2026',
  },
  {
    id: 'favinho-chatbot',
    index: '05',
    title: 'Favinho AI Conversational Assistant',
    subtitle: 'Context-Aware n8n AI Agent & Real-Time Customer Intelligence Chatbot',
    track: 'n8n AI Agents & Workflow Automation',
    tier: 'visual-production',
    screenshot: '/assets/favinho.png',
    liveUrl: 'https://geephixs.app.n8n.cloud/webhook/8b31ee2f-4824-473b-bed7-7d07b506a165/chat',
    liveLabel: 'Open Live Chat',
    awardBadge: 'Live AI Chat Webhook',
    summary:
      'Production conversational AI assistant powered by n8n agent workflows, multi-turn memory, and structured tool calling for instant customer and operational support.',
    problem:
      'Organizations require 24/7 context-aware conversational assistance capable of resolving complex product and service inquiries with zero human queue latency.',
    solution:
      'Built and deployed the Favinho conversational AI agent on n8n Cloud, pairing conversational memory buffers and domain prompt engineering with a responsive live chat webhook interface.',
    impact: [
      'Delivers instant, context-aware conversational responses via a live production n8n chat endpoint',
      'Orchestrates multi-turn dialogue state and backend workflow triggers seamlessly',
      'Reduces customer inquiry resolution latency from hours to seconds',
    ],
    tools: ['n8n', 'AI Agents', 'Conversational AI', 'OpenAI API', 'Webhook Chat', 'Prompt Engineering'],
    year: '2026',
  },
  {
    id: 'hovarth-auto-responder',
    index: '06',
    title: 'Hovarth Intelligent Auto-Responder & Intake System',
    subtitle: 'Automated Web Form Ingestion, AI Intent Triage & Instant Dispatch Pipeline',
    track: 'n8n AI Agents & Workflow Automation',
    tier: 'visual-production',
    screenshot: '/assets/hovarth.png',
    secondaryScreenshot: '/assets/hovarth_form.png',
    secondaryLabel: 'Intake Form UI',
    liveUrl: 'https://geephixs.app.n8n.cloud/form/8619cfb4-0d08-4f51-b1f9-061eef9ccd6d',
    liveLabel: 'Open Live Form',
    awardBadge: 'Automated Intake Pipeline',
    summary:
      'Dual-surface n8n automation system combining a live client intake web form with an AI-powered backend workflow that classifies submissions and dispatches tailored responses.',
    problem:
      'Inbound client inquiries and operational form submissions often sit in manual review queues, delaying critical lead qualification and stakeholder communication.',
    solution:
      'Engineered a production n8n intake form connected directly to an multi-node AI auto-responder pipeline that parses submission context, classifies urgency, logs records, and sends personalized replies.',
    impact: [
      'Eliminates manual triage bottlenecks with instant AI-generated responses upon form submission',
      'Includes both a public production intake form and a fully auditable multi-node n8n backend workflow',
      'Ensures 100% response consistency and immediate acknowledgment for every inbound request',
    ],
    tools: ['n8n', 'AI Workflow Automation', 'Webhooks', 'LLM Orchestration', 'Form Automation'],
    year: '2026',
  },

  // ============================================================================
  // TRACK 3: EXECUTIVE BI & DATA ENGINEERING (Power BI, SQL, Airflow, dbt)
  // ============================================================================
  {
    id: 'powerbi-executive',
    index: '07',
    title: 'Executive Performance & Operations Intelligence Suite',
    subtitle: 'Multi-Page Interactive Power BI Dashboard & Kimball Star Schema Model',
    track: 'Executive BI & Data Engineering',
    tier: 'visual-production',
    screenshot: '/assets/powerbi.png',
    awardBadge: 'Executive BI Showcase',
    summary:
      'Enterprise Power BI executive command center tracking cross-regional revenue velocity, shipping efficiency, customer conversion, and margin diagnostics.',
    problem:
      'Executive stakeholders lacked unified visibility into cross-regional sales velocity, operational fulfillment bottlenecks, shipping performance, and customer conversion trends.',
    solution:
      'Designed an interactive multi-page Power BI executive dashboard backed by a Kimball star schema, custom DAX time-intelligence calculations, dynamic drill-throughs, and executive KPI frameworks.',
    impact: [
      'Unified sales, fulfillment, and operational metrics into a single interactive executive command center',
      'Engineered custom DAX measures for margin diagnostics, cohort retention, and regional benchmarking',
      'Delivered clear executive takeaways that accelerated leadership decision-making',
    ],
    tools: ['Power BI', 'DAX', 'Power Query', 'Star Schema', 'Data Storytelling', 'SQL'],
    year: '2026',
  },
  {
    id: 'querywise',
    index: '08',
    title: 'QueryWise — Natural Language Text-to-SQL Platform',
    subtitle: 'Conversational SQL Generation, Auto-Visualization & Executive Insights',
    track: 'Autonomous BI & AI Platforms',
    tier: 'engineering-archive',
    awardBadge: '10Alytics AI Product',
    summary:
      'AI-powered Text-to-SQL platform enabling business users to ask complex questions in plain English and automatically receive validated SQL queries, visual charts, and executive recommendations.',
    problem:
      'Non-technical decision-makers face bottlenecks waiting on data engineering teams to translate everyday business questions into accurate SQL queries and visual reports.',
    solution:
      'Developed QueryWise at 10Alytics Business using schema-aware LLM prompt engineering, PostgreSQL query validation, and automated Plotly visualization generation.',
    impact: [
      'Removes the SQL technical barrier for product, finance, and operations leaders',
      'Automatically produces both interactive charts and executive-ready business recommendations',
      'Built-in query explanation and schema guardrails ensure trustworthy self-serve analytics',
    ],
    tools: ['Python', 'PostgreSQL', 'OpenAI API', 'Text-to-SQL', 'Streamlit', 'Plotly'],
    year: '2026',
  },
  {
    id: 'modern-elt-pipeline',
    index: '09',
    title: 'Enterprise Analytics Engineering & Incremental ELT Pipeline',
    subtitle: 'Airflow, dbt, dlt, PostgreSQL & Docker Kimball Dimensional Warehouse',
    track: 'Executive BI & Data Engineering',
    tier: 'engineering-archive',
    awardBadge: 'HNG Stage 8 Finalist Architecture',
    summary:
      'Containerized incremental ELT data warehouse pipeline featuring idempotent ingestion, watermarking, retry orchestration, SCD Type 2 historical tracking, and automated dbt testing.',
    problem:
      'High-volume multi-domain data across sales, inventory, payments, and customer behavior suffered from brittle ingestion and inconsistent reporting definitions.',
    solution:
      'Collaborated in a 4-member engineering team during HNG Stage 8 to architect containerized incremental ELT pipelines using Apache Airflow, dlt, dbt, PostgreSQL, and Docker Compose.',
    impact: [
      'Engineered Kimball dimensional marts with surrogate keys and SCD Type 2 historical tracking',
      'Implemented automated orchestration with watermarking and idempotent retry logic in Apache Airflow',
      'Enforced automated schema and data quality tests in dbt powering enterprise reporting',
    ],
    tools: ['Apache Airflow', 'dbt', 'dlt', 'PostgreSQL', 'Docker', 'Kimball Modelling'],
    year: '2026',
  },
  {
    id: 'climate-tweet-analytics',
    index: '10',
    title: '15M+ Tweets Climate Sentiment & Discourse Intelligence',
    subtitle: 'Large-Scale PostgreSQL & Power BI Public Sentiment Analysis',
    track: 'Executive BI & Data Engineering',
    tier: 'engineering-archive',
    awardBadge: '15M+ Records Analyzed',
    summary:
      'High-volume PostgreSQL and Power BI sentiment analytics pipeline examining over 15 million tweets to uncover regional climate discourse trends and policy signals.',
    problem:
      'Understanding regional climate discourse and public sentiment shifts across massive unstructured social datasets requires high-performance SQL aggregation and clear visual storytelling.',
    solution:
      'Processed and analyzed more than 15 million tweets using PostgreSQL indexing, analytical SQL window functions, and an interactive Power BI executive storytelling dashboard.',
    impact: [
      'Queried and structured 15M+ social records in PostgreSQL for rapid multi-dimensional slicing',
      'Visualized regional sentiment trajectories and temporal spikes in Power BI',
      'Also collaborated on public-interest data storytelling for Nigeria’s 2026 Federal Budget',
    ],
    tools: ['PostgreSQL', 'Power BI', 'SQL', 'Sentiment Analysis', 'Data Storytelling'],
    year: '2026',
  },

  // ============================================================================
  // TRACK 4: HEALTHTECH & MACHINE LEARNING SYSTEMS
  // ============================================================================
  {
    id: 'clinops-autopilot',
    index: '11',
    title: 'ClinOps Autopilot — Clinical & Adverse Event Intelligence',
    subtitle: 'HealthTech Pharmacovigilance, Adverse Event Triage & Workflow Automation',
    track: 'HealthTech & ML Systems',
    tier: 'visual-production',
    liveUrl: 'https://clin-ops-autopilot.vercel.app/',
    liveLabel: 'Launch ClinOps App',
    awardBadge: 'Live HealthTech Web App',
    summary:
      'Cloud HealthTech platform built for Nexatria Technologies that streamlines Adverse Event Management, clinical pharmacovigilance triage, and healthcare operations workflows.',
    problem:
      'Healthcare facilities and clinical operations teams face high administrative burden and regulatory risk when tracking, triaging, and documenting adverse drug events.',
    solution:
      'Combined 10+ years of Principal Pharmacist clinical leadership with full-stack AI product engineering to build ClinOps Autopilot—a dedicated web platform for Adverse Event Management.',
    impact: [
      'Streamlines adverse event reporting, severity triage, and pharmacovigilance compliance',
      'Directly translates frontline hospital pharmacy leadership into scalable healthcare software',
      'Live production web deployment accessible at clin-ops-autopilot.vercel.app',
    ],
    tools: ['HealthTech', 'Clinical Operations', 'Pharmacovigilance', 'AI Product Builder', 'Next.js / Vercel'],
    year: '2026',
  },
  {
    id: 'talentpulse-salary-prediction',
    index: '12',
    title: 'TalentPulse — Tech Job Market Salary Prediction Engine',
    subtitle: 'Supervised Machine Learning Regression & Compensation Benchmarking Pipeline',
    track: 'HealthTech & ML Systems',
    tier: 'visual-production',
    notebookPath: 'Ekemini_Ebong_Salary_Prediction.ipynb',
    awardBadge: 'ML Prediction Engine',
    summary:
      'End-to-end Python & Scikit-learn supervised regression pipeline predicting global tech compensation bands from role seniority, technical skill stacks, and geographic market signals.',
    problem:
      'Compensation benchmarking across global tech roles is obscured by noisy job postings, varying seniority definitions, regional disparities, and rapidly shifting skill premiums.',
    solution:
      'Developed the TalentPulse ML salary prediction pipeline (`Ekemini_Ebong_Salary_Prediction.ipynb`), implementing feature engineering on tech stacks, outlier treatment, ensemble regression tuning, and feature importance diagnostics.',
    impact: [
      'Accurately predicts tech market compensation bands across data, AI, and engineering tracks',
      'Quantifies the marginal salary premium of high-demand skills (AI agents, Cloud, Data Engineering)',
      'Provides a clean, reproducible Jupyter Notebook workflow for HR and talent analytics teams',
    ],
    tools: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter Notebook', 'Feature Engineering'],
    year: '2026',
  },
  {
    id: 'elliptic-bitcoin-fraud',
    index: '13',
    title: 'Elliptic Bitcoin Transaction Graph Fraud Detection',
    subtitle: 'Cryptocurrency Network Centrality Analysis & PyVis Compliance Dashboard',
    track: 'HealthTech & ML Systems',
    tier: 'engineering-archive',
    awardBadge: 'Graph ML & Compliance',
    summary:
      'Graph network fraud detection engine analyzing thousands of Bitcoin transaction nodes using PageRank, betweenness centrality, and ego-network extraction with an interactive PyVis & Plotly dashboard.',
    problem:
      'Identifying illicit cryptocurrency transaction clusters across thousands of pseudonymous blockchain nodes requires advanced graph topology analysis beyond standard tabular rules.',
    solution:
      'Applied PageRank, betweenness centrality, degree centrality, and ego-network extraction on the Elliptic Bitcoin Transaction Dataset, paired with an interactive Plotly and PyVis compliance dashboard.',
    impact: [
      'Pinpointed high-risk cryptocurrency transaction clusters and risk-ranked suspicious entities across thousands of nodes',
      'Translated complex graph network topology into executive compliance and regulatory recommendations',
      'Built interactive visual network exploration tools using Python, Plotly, and PyVis',
    ],
    tools: ['Python', 'PyVis', 'Plotly', 'Scikit-learn', 'Graph Network Analytics', 'Pandas'],
    year: '2026',
  },
  {
    id: 'healthtech-claimflow-caresplit',
    index: '14',
    title: 'ClaimFlow Africa, CareSplit & Clinsight HealthTech Suite',
    subtitle: 'AI Insurance-Claims Auditing, Healthcare Financing & Product Analytics Strategy',
    track: 'HealthTech & ML Systems',
    tier: 'engineering-archive',
    awardBadge: '18-Member Product Lead',
    summary:
      'Suite of African HealthTech initiatives: AI-powered insurance claims auditing (ClaimFlow Africa), chronic-disease instalment financing (CareSplit), and product analytics strategy (Clinsight).',
    problem:
      'Healthcare systems across Africa face high chronic-disease out-of-pocket costs, manual insurance claims bottlenecks, and fragmented product telemetry.',
    solution:
      'Led an 18-member multidisciplinary team across 7 technical tracks for ClaimFlow Africa, directed analytics strategy for CareSplit, and defined Clinsight’s North Star KPI, funnel, and retention frameworks.',
    impact: [
      'Co-developed machine learning and SQL workflow automation for rapid insurance-claims auditing',
      'Defined North Star metrics, acquisition funnels, JTBD segmentation, and event tracking for Clinsight',
      'Combined 10+ years of Principal Pharmacist domain expertise with cross-functional AI product delivery',
    ],
    tools: ['Product Analytics', 'Machine Learning', 'SQL', 'North Star Metrics', 'JTBD', 'HealthTech'],
    year: '2025–2026',
  },
];

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  highlights: string[];
  skills: string[];
}

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    id: '10alytics',
    role: 'AI Data Analyst & AI Product Builder',
    company: '10Alytics Business',
    location: 'Remote (Contract)',
    period: 'Mar 2026 – Present',
    type: 'AI & Analytics Engineering',
    highlights: [
      'Build AI-powered decision systems and analytics applications (Nexus Retail OS, Novera AI, Favinho Chatbot, Hovarth Auto-Responder, QueryWise, Aurora Suite, Predictive Analytics Engine) integrating data preparation, BI, predictive analytics, and conversational decision support.',
      'Automated ETL and data preparation workflows using Python, n8n, and GPT-4, reducing manual data-cleaning time by 70%.',
      'Developed interactive Power BI dashboards and Microsoft Fabric workflows using data warehouses, pipelines, predictive insights, and AI-assisted reporting.',
      'Integrated OpenAI, Gemini, and Mistral APIs, AI agents, Text-to-SQL, explainable AI, and automated reporting into analytics products and business workflows.',
      'Apply AI product development and project management practices to scope features, coordinate delivery, test workflows, and align outputs with business requirements.',
    ],
    skills: ['Python', 'n8n', 'Power BI', 'Microsoft Fabric', 'OpenAI & Gemini APIs', 'Text-to-SQL', 'AI Agents'],
  },
  {
    id: 'hng-internship',
    role: 'Data Analytics Intern (Finalist — Stages 0 to 8)',
    company: 'HNG Internship',
    location: 'Remote',
    period: 'Apr 2026 – Jun 2026',
    type: 'Enterprise Analytics & Data Engineering',
    highlights: [
      'Completed all 8 intensive stages delivering enterprise analytics engineering pipelines, blockchain fraud detection, dimensional data models, and executive BI solutions.',
      'Built a cryptocurrency fraud detection solution on the Elliptic Bitcoin Transaction Dataset, applying PageRank, betweenness centrality, degree centrality, and ego-network extraction across thousands of nodes with an interactive Plotly & PyVis compliance dashboard.',
      'Collaborated in a 4-member team to design modern incremental ELT pipelines using Apache Airflow, PostgreSQL, dbt, dlt, Docker, and Kimball dimensional modelling (SCD Type 2, surrogate keys, automated dbt testing).',
      'Conducted product analytics for Clinsight, defining North Star metrics, acquisition funnels, retention & monetization frameworks, event tracking, and JTBD segmentation.',
      'Built executive dashboards analyzing global sales performance, operational efficiency, 15M+ climate sentiment tweets, and Nigeria’s 2026 Federal Budget.',
    ],
    skills: ['PostgreSQL', 'Apache Airflow', 'dbt', 'dlt', 'Docker', 'Power BI', 'PyVis & Plotly'],
  },
  {
    id: 'tech4dev',
    role: 'Data Science & Engineering Fellow / Product Lead',
    company: 'Women Techsters Fellowship (Tech4Dev)',
    location: 'Remote',
    period: 'Mar 2025 – Present',
    type: 'Data Science & Product Leadership',
    highlights: [
      'Completed intensive fellowship training in Python, SQL, machine learning, Power BI, data science, and analytics engineering.',
      'Led an 18-member multidisciplinary product team across 7 technical tracks as Product Lead for ClaimFlow Africa, co-developing an AI-powered insurance-claims auditing platform.',
      'Directed research and analytics strategy for CareSplit, a healthcare financing platform addressing chronic-disease affordability through instalment-based access.',
      'Collaborated with developers, designers, cybersecurity specialists, and product managers to translate healthcare operational inefficiencies into scalable digital solutions.',
    ],
    skills: ['Python', 'Machine Learning', 'SQL', 'Power BI', 'Cross-Functional Leadership', 'HealthTech'],
  },
  {
    id: 'principal-pharmacist',
    role: 'Principal Pharmacist',
    company: 'Hospitals Management Board, Akwa Ibom State',
    location: 'Akwa Ibom State, Nigeria',
    period: 'Feb 2015 – Present',
    type: 'Healthcare Leadership & Operations',
    highlights: [
      '10+ years managing healthcare operations, pharmaceutical supply chains, resource allocation, and public-health initiatives across state hospital facilities.',
      'Conduct drug-utilization research and operational data analysis to support evidence-based clinical and administrative decision-making.',
      'Lead state-wide public-health campaigns focused on malaria, HIV, tuberculosis, and mental-health awareness.',
      'Mentor healthcare professionals and drive healthcare capacity-building and operational quality programs.',
    ],
    skills: ['Healthcare Operations', 'Clinical Research', 'Resource Optimization', 'Public Health Leadership'],
  },
];

export const EDUCATION_AND_CERTS = {
  education: [
    {
      degree: 'Master of Science (MSc), Pharmacognosy',
      institution: 'University of Lagos, Nigeria',
      detail: 'Advanced research, quantitative analysis, and scientific methodology',
    },
    {
      degree: 'Bachelor of Pharmacy (B.Pharm)',
      institution: 'University of Uyo, Nigeria',
      detail: 'Clinical pharmacology, healthcare systems, and pharmaceutical operations',
    },
  ],
  certifications: [
    {
      name: 'Women Techsters Fellowship: Data Science & Engineering',
      issuer: 'Tech4Dev',
      year: '2026',
    },
    {
      name: 'Career Essentials in Generative AI',
      issuer: 'Microsoft & LinkedIn',
      year: '2026',
    },
    {
      name: 'Ethics in the Age of Generative AI',
      issuer: 'LinkedIn Learning',
      year: '2026',
    },
    {
      name: 'AI Literacy for Everyone',
      issuer: 'LinkedIn Learning',
      year: '2026',
    },
    {
      name: 'Data Science and Analytics',
      issuer: 'HP LIFE Foundation',
      year: '2026',
    },
    {
      name: 'McKinsey Forward Program',
      issuer: 'McKinsey & Company',
      year: '2025',
    },
    {
      name: 'Leadership and Management in Health',
      issuer: 'University of Washington',
      year: '2019',
    },
  ],
};
