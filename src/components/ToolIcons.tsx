import React from 'react';

export interface ToolIconItem {
  id: string;
  name: string;
  category: 'Data & BI' | 'Programming & Apps' | 'Data Engineering' | 'AI & Automation' | 'Product & Delivery';
  accentColor: string;
  glowColor: string;
  bgTint: string;
  description: string;
  renderIcon: (className?: string) => React.ReactNode;
}

export const HERO_TOOLS: ToolIconItem[] = [
  {
    id: 'powerbi',
    name: 'Power BI',
    category: 'Data & BI',
    accentColor: '#F5A606',
    glowColor: 'rgba(245, 166, 6, 0.35)',
    bgTint: '#261B06',
    description: 'Executive dashboards, DAX measures & Power Query data modeling',
    renderIcon: (className = 'w-8 h-8') => (
      <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
        <rect x="28" y="6" width="11" height="36" rx="3" fill="#F2C811" />
        <rect x="18.5" y="15" width="11" height="27" rx="3" fill="#E8A90E" />
        <rect x="9" y="24" width="11" height="18" rx="3" fill="#C87E09" />
      </svg>
    ),
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Programming & Apps',
    accentColor: '#3776AB',
    glowColor: 'rgba(55, 118, 171, 0.4)',
    bgTint: '#0F2236',
    description: 'Pandas, NumPy, Scikit-learn, Plotly, PyVis, FastAPI & Streamlit',
    renderIcon: (className = 'w-8 h-8') => (
      <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
        <path
          d="M23.8 6C15.5 6 16 9.6 16 9.6V13.8H24V15.2H12.6C12.6 15.2 7 14.6 7 23.4C7 32.2 11.9 31.9 11.9 31.9H14.8V27.8C14.8 27.8 14.6 22.9 19.6 22.9H28.1C28.1 22.9 32.8 23 32.8 18.4V10.7C32.8 10.7 33.5 6 23.8 6ZM19.2 8.7C20.1 8.7 20.8 9.4 20.8 10.3C20.8 11.2 20.1 11.9 19.2 11.9C18.3 11.9 17.6 11.2 17.6 10.3C17.6 9.4 18.3 8.7 19.2 8.7Z"
          fill="#3776AB"
        />
        <path
          d="M24.2 42C32.5 42 32 38.4 32 38.4V34.2H24V32.8H35.4C35.4 32.8 41 33.4 41 24.6C41 15.8 36.1 16.1 36.1 16.1H33.2V20.2C33.2 20.2 33.4 25.1 28.4 25.1H19.9C19.9 25.1 15.2 25 15.2 29.6V37.3C15.2 37.3 14.5 42 24.2 42ZM28.8 39.3C27.9 39.3 27.2 38.6 27.2 37.7C27.2 36.8 27.9 36.1 28.8 36.1C29.7 36.1 30.4 36.8 30.4 37.7C30.4 38.6 29.7 39.3 28.8 39.3Z"
          fill="#FFD43B"
        />
      </svg>
    ),
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL & SQL',
    category: 'Data & BI',
    accentColor: '#336791',
    glowColor: 'rgba(51, 103, 145, 0.45)',
    bgTint: '#0E1F33',
    description: 'Complex analytical queries, star schemas, SCD Type 2 & data marts',
    renderIcon: (className = 'w-8 h-8') => (
      <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
        <ellipse cx="24" cy="12" rx="14" ry="5.5" fill="#4A89DC" stroke="#8CC152" strokeWidth="0" />
        <path
          d="M10 12V24C10 27.0376 16.268 29.5 24 29.5C31.732 29.5 38 27.0376 38 24V12"
          fill="#336791"
        />
        <path
          d="M10 24V36C10 39.0376 16.268 41.5 24 41.5C31.732 41.5 38 39.0376 38 36V24"
          fill="#254E70"
        />
        <ellipse cx="24" cy="12" rx="14" ry="5.5" fill="#5D9CEC" />
        <path
          d="M10 18C10 21.0376 16.268 23.5 24 23.5C31.732 23.5 38 21.0376 38 18"
          stroke="#96C2EC"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M10 28C10 31.0376 16.268 33.5 24 33.5C31.732 33.5 38 31.0376 38 28"
          stroke="#96C2EC"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <text
          x="24"
          y="14.5"
          textAnchor="middle"
          fill="#0C0F17"
          fontSize="7.5"
          fontWeight="800"
          fontFamily="monospace"
        >
          SQL
        </text>
      </svg>
    ),
  },
  {
    id: 'n8n',
    name: 'n8n Automation',
    category: 'AI & Automation',
    accentColor: '#FF6D5A',
    glowColor: 'rgba(255, 109, 90, 0.38)',
    bgTint: '#2B1012',
    description: 'Autonomous AI agent workflows, webhooks & scheduled intelligence',
    renderIcon: (className = 'w-8 h-8') => (
      <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
        <path
          d="M14 24H21L26 15H34"
          stroke="#FF6D5A"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 24L26 33H34"
          stroke="#FF6D5A"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="11" cy="24" r="4.5" fill="#FF6D5A" />
        <circle cx="37" cy="15" r="4.5" fill="#FF6D5A" />
        <circle cx="37" cy="33" r="4.5" fill="#FF9E80" />
      </svg>
    ),
  },
  {
    id: 'fabric',
    name: 'Microsoft Fabric',
    category: 'Data & BI',
    accentColor: '#00FFE0',
    glowColor: 'rgba(0, 255, 224, 0.35)',
    bgTint: '#072627',
    description: 'Unified lakehouse architecture, enterprise data pipelines & BI',
    renderIcon: (className = 'w-8 h-8') => (
      <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
        <path
          d="M12 34L22 10H36L26 34H12Z"
          fill="url(#fabric_grad_1)"
        />
        <path
          d="M18 38L25 22H38L31 38H18Z"
          fill="url(#fabric_grad_2)"
          opacity="0.9"
        />
        <defs>
          <linearGradient id="fabric_grad_1" x1="12" y1="10" x2="36" y2="34" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00FFE0" />
            <stop offset="1" stopColor="#117865" />
          </linearGradient>
          <linearGradient id="fabric_grad_2" x1="18" y1="22" x2="38" y2="38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38BDF8" />
            <stop offset="1" stopColor="#0284C7" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 'dbt',
    name: 'dbt Core',
    category: 'Data Engineering',
    accentColor: '#FF694B',
    glowColor: 'rgba(255, 105, 75, 0.36)',
    bgTint: '#2E1109',
    description: 'Kimball dimensional marts, incremental models, surrogate keys & tests',
    renderIcon: (className = 'w-8 h-8') => (
      <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
        <path
          d="M14 10L24 20L34 10L38 14L28 24L38 34L34 38L24 28L14 38L10 34L20 24L10 14L14 10Z"
          fill="#FF694B"
        />
        <circle cx="24" cy="24" r="4.5" fill="#0C0F17" />
      </svg>
    ),
  },
  {
    id: 'airflow',
    name: 'Apache Airflow',
    category: 'Data Engineering',
    accentColor: '#017CEE',
    glowColor: 'rgba(1, 124, 238, 0.36)',
    bgTint: '#091E38',
    description: 'Automated ELT orchestration, watermarking & idempotent retry pipelines',
    renderIcon: (className = 'w-8 h-8') => (
      <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
        <path d="M24 24L11 11C17 7 24 11 24 24Z" fill="#017CEE" />
        <path d="M24 24L37 11C41 17 37 24 24 24Z" fill="#00C7D4" />
        <path d="M24 24L37 37C31 41 24 37 24 24Z" fill="#E43921" />
        <path d="M24 24L11 37C7 31 11 24 24 24Z" fill="#22C55E" />
        <circle cx="24" cy="24" r="3.5" fill="#F8FAFC" />
      </svg>
    ),
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'Data Engineering',
    accentColor: '#2496ED',
    glowColor: 'rgba(36, 150, 237, 0.38)',
    bgTint: '#0A1E36',
    description: 'Containerized data pipelines, reproducible environments & Docker Compose',
    renderIcon: (className = 'w-8 h-8') => (
      <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
        <rect x="11" y="20" width="5" height="4.5" rx="0.8" fill="#2496ED" />
        <rect x="17" y="20" width="5" height="4.5" rx="0.8" fill="#2496ED" />
        <rect x="23" y="20" width="5" height="4.5" rx="0.8" fill="#2496ED" />
        <rect x="29" y="20" width="5" height="4.5" rx="0.8" fill="#2496ED" />
        <rect x="17" y="14.5" width="5" height="4.5" rx="0.8" fill="#38BDF8" />
        <rect x="23" y="14.5" width="5" height="4.5" rx="0.8" fill="#38BDF8" />
        <rect x="23" y="9" width="5" height="4.5" rx="0.8" fill="#7DD3FC" />
        <path
          d="M7 26C7 26 11 25.5 36 25.5C38.5 23 39.5 20.5 39.5 20.5C41.5 21.5 43 24 41.5 26.5C43.5 26.5 45 27.5 45 27.5C43.5 30 40.5 30.5 38.5 30.5C35.5 37 28 39 19.5 39C11.5 39 7 34 7 26Z"
          fill="#2496ED"
        />
      </svg>
    ),
  },
  {
    id: 'streamlit',
    name: 'Streamlit & FastAPI',
    category: 'Programming & Apps',
    accentColor: '#FF4B4B',
    glowColor: 'rgba(255, 75, 75, 0.36)',
    bgTint: '#2C0E13',
    description: 'Interactive AI analytics apps, Text-to-SQL portals & executive tools',
    renderIcon: (className = 'w-8 h-8') => (
      <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
        <path
          d="M24 8L39 19L33 38H15L9 19L24 8Z"
          fill="#FF4B4B"
          fillOpacity="0.2"
          stroke="#FF4B4B"
          strokeWidth="2.5"
        />
        <path
          d="M15 27L21 19L26 25L33 16"
          stroke="#FF4B4B"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="33" cy="16" r="2.5" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    id: 'excel',
    name: 'Microsoft Excel',
    category: 'Data & BI',
    accentColor: '#107C41',
    glowColor: 'rgba(16, 124, 65, 0.4)',
    bgTint: '#092418',
    description: 'Financial modeling, Power Query transformations & KPI reporting',
    renderIcon: (className = 'w-8 h-8') => (
      <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
        <rect x="14" y="8" width="26" height="32" rx="3" fill="#185C37" />
        <rect x="26" y="8" width="14" height="16" rx="2" fill="#21A366" />
        <rect x="8" y="15" width="18" height="18" rx="3" fill="#107C41" />
        <path
          d="M13.5 19.5L20.5 28.5M20.5 19.5L13.5 28.5"
          stroke="white"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 'ai_agents',
    name: 'OpenAI & Gemini APIs',
    category: 'AI & Automation',
    accentColor: '#9999FB',
    glowColor: 'rgba(153, 153, 251, 0.38)',
    bgTint: '#11113B',
    description: 'LLM-powered decision support, Text-to-SQL, explainable AI & agents',
    renderIcon: (className = 'w-8 h-8') => (
      <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
        <path
          d="M24 7C25.5 16.5 31.5 22.5 41 24C31.5 25.5 25.5 31.5 24 41C22.5 31.5 16.5 25.5 7 24C16.5 22.5 22.5 16.5 24 7Z"
          fill="url(#ai_spark_grad)"
        />
        <circle cx="36" cy="12" r="2.5" fill="#9999FB" />
        <defs>
          <linearGradient id="ai_spark_grad" x1="7" y1="7" x2="41" y2="41" gradientUnits="userSpaceOnUse">
            <stop stopColor="#9999FB" />
            <stop offset="0.5" stopColor="#38BDF8" />
            <stop offset="1" stopColor="#30ADC1" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 'github',
    name: 'GitHub & Delivery',
    category: 'Product & Delivery',
    accentColor: '#E2E8F0',
    glowColor: 'rgba(226, 232, 240, 0.25)',
    bgTint: '#181D28',
    description: 'Version control, CI/CD, Jira, ClickUp, Notion AI & agile product delivery',
    renderIcon: (className = 'w-8 h-8') => (
      <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 8C15.16 8 8 15.16 8 24C8 31.08 12.58 37.06 18.94 39.18C19.74 39.32 20.02 38.84 20.02 38.42C20.02 38.04 20 36.8 20 35.48C15.56 36.44 14.62 33.6 14.62 33.6C13.9 31.76 12.84 31.28 12.84 31.28C11.4 30.28 12.96 30.3 12.96 30.3C14.56 30.42 15.4 31.94 15.4 31.94C16.82 34.38 19.14 33.68 20.06 33.26C20.2 32.22 20.62 31.52 21.08 31.12C17.52 30.72 13.78 29.34 13.78 23.2C13.78 21.44 14.4 20.02 15.44 18.9C15.28 18.5 14.72 16.86 15.6 14.66C15.6 14.66 16.94 14.22 20 16.3C21.28 15.94 22.64 15.76 24 15.76C25.36 15.76 26.72 15.94 28 16.3C31.06 14.22 32.4 14.66 32.4 14.66C33.28 16.86 32.72 18.5 32.56 18.9C33.6 20.02 34.22 21.44 34.22 23.2C34.22 29.36 30.46 30.7 26.9 31.1C27.48 31.6 28 32.58 28 34.1C28 36.26 27.98 37.88 27.98 38.42C27.98 38.84 28.26 39.34 29.08 39.18C35.42 37.06 40 31.06 40 24C40 15.16 32.84 8 24 8Z"
          fill="#F8FAFC"
        />
      </svg>
    ),
  },
];
