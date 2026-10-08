import React, { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  Award,
  Check,
  Copy,
  ExternalLink,
  GitBranch,
  GraduationCap,
  Linkedin,
  Mail,
  Maximize2,
  Phone,
  Printer,
  ShieldCheck,
  Terminal,
  X,
} from 'lucide-react';
import { HERO_TOOLS, ToolIconItem } from './components/ToolIcons';
import {
  PORTFOLIO_PROJECTS,
  EXPERIENCE_TIMELINE,
  EDUCATION_AND_CERTS,
  ProjectItem,
  ProjectTrack,
} from './data/portfolioData';

const TRACK_FILTERS: readonly ('All Projects' | ProjectTrack)[] = [
  'All Projects',
  'Autonomous BI & AI Platforms',
  'n8n AI Agents & Workflow Automation',
  'Executive BI & Data Engineering',
  'HealthTech & ML Systems',
] as const;

export default function App() {
  const [selectedTool, setSelectedTool] = useState<ToolIconItem>(HERO_TOOLS[0]);
  const [activeTrack, setActiveTrack] = useState<'All Projects' | ProjectTrack>('All Projects');
  const [lightboxProject, setLightboxProject] = useState<ProjectItem | null>(null);
  const [activeScreenshotMode, setActiveScreenshotMode] = useState<'primary' | 'secondary'>('primary');
  const [hovarthCardView, setHovarthCardView] = useState<'primary' | 'secondary'>('primary');
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [showResumeModal, setShowResumeModal] = useState<boolean>(false);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxProject(null);
        setShowResumeModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openProjectLightbox = (
    project: ProjectItem,
    mode: 'primary' | 'secondary' = 'primary'
  ) => {
    setActiveScreenshotMode(mode);
    setLightboxProject(project);
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2200);
  };

  // Grand Championship Spotlight (#01 Nexus Retail OS)
  const grandChampionProject = PORTFOLIO_PROJECTS[0];

  // Visual Production Projects
  const visualProductionProjects = PORTFOLIO_PROJECTS.filter(
    (p) =>
      p.tier === 'visual-production' &&
      (activeTrack === 'All Projects' || p.track === activeTrack)
  );

  // Complete Project Directory
  const directoryProjects =
    activeTrack === 'All Projects'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.track === activeTrack);

  // Hero floating tools: 6 primary cards on the right + 4 bold orbital icons around the centerpiece portrait
  const heroPrimaryTools = HERO_TOOLS.slice(0, 6);
  const heroOrbitTools = HERO_TOOLS.slice(6, 10);

  // Uniform 16:9 browser-framed preview for visual portfolio cards
  const renderProjectMediaPreview = (
    project: ProjectItem,
    isHovarth: boolean
  ) => {
    const activeImg =
      isHovarth && hovarthCardView === 'secondary' && project.secondaryScreenshot
        ? project.secondaryScreenshot
        : project.screenshot;

    return (
      <div
        onClick={() =>
          openProjectLightbox(project, isHovarth ? hovarthCardView : 'primary')
        }
        className="relative aspect-[16/9] bg-[#070A10] overflow-hidden cursor-pointer border-b border-[#1E2B3E] flex flex-col"
      >
        <div className="h-7 px-3.5 bg-[#0A0E17] border-b border-[#192436] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#334A6B]" />
            <span className="w-2 h-2 rounded-full bg-[#29384F]" />
            <span className="w-2 h-2 rounded-full bg-[#1E2B3E]" />
            <span className="ml-2 text-[10px] font-mono text-[#8B8B8C] truncate max-w-[200px] sm:max-w-[260px]">
              {project.liveUrl
                ? project.liveUrl.replace(/^https?:\/\//, '')
                : project.notebookPath || `${project.id}.production`}
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#30ADC1]">
            {project.index} / 14
          </span>
        </div>

        <div className="relative flex-1 w-full overflow-hidden bg-[#06090F]">
          {activeImg ? (
            project.id === 'favinho-chatbot' ? (
              <div className="w-full h-full flex items-center justify-between px-6 py-3 bg-gradient-to-r from-[#090E18] via-[#101C2E] to-[#090E18]">
                <div className="hidden sm:flex flex-col justify-center space-y-2 max-w-[46%]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#30ADC1]">
                    n8n Cloud Webhook · Live Chat
                  </span>
                  <p className="font-display text-base font-bold text-white leading-snug">
                    Real-Time Conversational AI Agent
                  </p>
                  <p className="text-[11px] text-[#A7AAB0] leading-relaxed">
                    Multi-turn memory buffer, intent routing, and instant automated customer support.
                  </p>
                </div>
                <div className="h-full mx-auto sm:mx-0 rounded-xl overflow-hidden border border-[#2B496F]/70 shadow-2xl bg-[#05070B]">
                  <img
                    src={activeImg}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            ) : (
              <img
                src={activeImg}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
              />
            )
          ) : project.id === 'clinops-autopilot' ? (
            <div className="w-full h-full bg-gradient-to-br from-[#0B2239] via-[#0E1726] to-[#080C14] p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#30ADC1] tracking-wider uppercase">
                  NEXATRIA TECHNOLOGIES · CLINICAL OPERATIONS
                </span>
                <span className="text-[11px] font-mono text-[#5BC789]">
                  ● Live on Vercel
                </span>
              </div>
              <div className="my-auto flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#30ADC1]/15 border border-[#30ADC1]/40 flex items-center justify-center text-[#30ADC1] shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-display text-xl font-bold text-white">
                    ClinOps Autopilot — Adverse Event Management
                  </h4>
                  <p className="text-xs text-[#ADB9D0] leading-relaxed max-w-md">
                    Pharmacovigilance severity triage, adverse drug reaction tracking, and clinical workflow automation.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/10 text-[11px]">
                <div>
                  <p className="text-[#8B8B8C]">Clinical Domain</p>
                  <p className="font-semibold text-white">Pharmacovigilance</p>
                </div>
                <div>
                  <p className="text-[#8B8B8C]">Core Workflow</p>
                  <p className="font-semibold text-[#30ADC1]">Adverse Event Triage</p>
                </div>
                <div>
                  <p className="text-[#8B8B8C]">Production Host</p>
                  <p className="font-semibold text-[#F5A606]">clin-ops-autopilot.vercel.app</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#121829] via-[#0D1322] to-[#080B12] p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#9999FB] tracking-wider uppercase">
                  SCIKIT-LEARN · SUPERVISED ML PIPELINE
                </span>
                <span className="text-[11px] font-mono text-[#F5A606]">
                  Jupyter Notebook (.ipynb)
                </span>
              </div>
              <div className="my-auto flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#9999FB]/15 border border-[#9999FB]/40 flex items-center justify-center text-[#9999FB] shrink-0">
                  <Terminal className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-display text-xl font-bold text-white">
                    TalentPulse Salary Prediction Engine
                  </h4>
                  <p className="text-xs text-[#ADB9D0] leading-relaxed max-w-md">
                    Feature engineering across global tech roles, seniority tiers, and AI/Data skill stacks to model compensation bands.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/10 text-[11px] font-mono">
                <div>
                  <p className="text-[#8B8B8C]">Notebook File</p>
                  <p className="text-white truncate">Ekemini_Ebong_Salary_Prediction.ipynb</p>
                </div>
                <div>
                  <p className="text-[#8B8B8C]">Methodology</p>
                  <p className="text-[#30ADC1]">Ensemble Regression</p>
                </div>
                <div>
                  <p className="text-[#8B8B8C]">Stack</p>
                  <p className="text-[#F5A606]">Python · Scikit-learn</p>
                </div>
              </div>
            </div>
          )}

          {project.secondaryScreenshot && (
            <div
              className="absolute top-3 left-3 z-20 flex items-center gap-1 p-1 rounded-lg bg-[#0C0F17]/90 backdrop-blur-md border border-white/15"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setHovarthCardView('primary')}
                className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  hovarthCardView === 'primary'
                    ? 'bg-[#1F77B7] text-white'
                    : 'text-[#A7AAB0] hover:text-white'
                }`}
              >
                Workflow View
              </button>
              <button
                type="button"
                onClick={() => setHovarthCardView('secondary')}
                className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  hovarthCardView === 'secondary'
                    ? 'bg-[#F5A606] text-[#0C0F17] font-semibold'
                    : 'text-[#A7AAB0] hover:text-white'
                }`}
              >
                {project.secondaryLabel || 'Form UI'}
              </button>
            </div>
          )}

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              openProjectLightbox(
                project,
                isHovarth ? hovarthCardView : 'primary'
              );
            }}
            className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-[#0C0F17]/90 backdrop-blur-md border border-white/15 text-[11px] font-medium text-white flex items-center gap-1.5 hover:bg-[#1F77B7] transition-colors cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Inspect System</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0C0F17] text-[#F8FAFC] relative selection:bg-[#30ADC1]/30 selection:text-white">
      {/* Ambient Reference Background Glows */}
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[820px] h-[580px] rounded-full bg-[#23629F]/18 blur-[140px]" />
        <div className="absolute top-[25%] left-[10%] w-[440px] h-[440px] rounded-full bg-[#114576]/20 blur-[125px]" />
        <div className="absolute top-[15%] right-[8%] w-[400px] h-[400px] rounded-full bg-[#30ADC1]/12 blur-[130px]" />
      </div>

      {/* =====================================================================
          TOP BAR CONTRACT: Exactly the 4 requested parts
          Home | Portfolio | Experience/CV | Contact
         ===================================================================== */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#0C0F17]/90 border-b border-[#1E293B]/80">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-10 h-16 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            className="font-display text-lg font-bold tracking-tight text-white hover:text-[#30ADC1] transition-colors whitespace-nowrap shrink-0"
          >
            Ekemini.Ebong
          </a>

          {/* Zone 2: Exact 4 Requested Navigation Parts (Visible on all viewports) */}
          <nav className="flex items-center gap-4 sm:gap-8 text-xs sm:text-sm font-medium text-[#ADB9D0]">
            <a
              href="#home"
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              Home
            </a>
            <a
              href="#portfolio"
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              Portfolio
            </a>
            <a
              href="#experience-cv"
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              Experience/CV
            </a>
            <a
              href="#contact"
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://nexus-retail-oaregrfzrkfw5wrgy9hq8c.streamlit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold text-[#0C0F17] bg-[#F5A606] hover:bg-[#FEA800] rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <span>Launch Nexus OS</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* =====================================================================
            PART 1: HOME (#home)
            Portrait is BOLD, OVERSIZED, and the FIRST visual anchor on page load
            (order-1 on mobile/tablet, dominant 5-col center centerpiece on desktop)
           ===================================================================== */}
        <section
          id="home"
          className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-10 pt-4 pb-16 lg:pt-6 lg:pb-20"
        >
          <div className="relative rounded-3xl bg-[#0A0D13] border border-[#1E2B3E] p-5 sm:p-8 lg:p-10 overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.75)]">
            {/* High-Intensity Spotlight Halo Directly Behind Your Portrait */}
            <div
              className="pointer-events-none absolute top-[44%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] rounded-full bg-gradient-to-tr from-[#1F77B7]/40 via-[#30ADC1]/25 to-[#F5A606]/15 blur-[95px]"
              aria-hidden="true"
            />

            {/* Main 12-Column Hero Grid — Portrait is Order-1 on Mobile/Tablet & Center 5-Col Focal Anchor on Desktop */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-7 items-center">
              {/* CENTERPIECE PORTRAIT COLUMN (Order-1 on mobile so it's the very first thing seen, Cols 5-9 on desktop) */}
              <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col items-center justify-center relative py-2">
                {/* Bold Oversized Portrait Frame */}
                <div className="relative w-full max-w-[360px] sm:max-w-[410px] lg:max-w-[430px] aspect-[4/4.6] flex items-center justify-center">
                  {/* Outer Luminous Halo Rim */}
                  <div
                    className="absolute -inset-1.5 rounded-[44px] bg-gradient-to-b from-[#30ADC1]/50 via-[#1F77B7]/40 to-[#F5A606]/40 blur-md opacity-75"
                    aria-hidden="true"
                  />

                  {/* Main Portrait Architectural Frame */}
                  <div className="relative w-full h-full rounded-[40px] bg-gradient-to-b from-[#2B496F] via-[#182C44] to-[#090D16] border-2 border-[#4A6995]/80 shadow-[0_25px_80px_rgba(14,42,100,0.85)] overflow-hidden">
                    {/* Subtle reference dot matrix backdrop */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          'radial-gradient(#ADB9D0 1px, transparent 1px)',
                        backgroundSize: '16px 16px',
                      }}
                    />

                    {/* High-Impact Bold User Headshot */}
                    <img
                      src="/assets/headshot.jpg"
                      alt="Ekemini Ekere Ebong — Senior Data Analyst, Data Scientist & AI Product Builder"
                      referrerPolicy="no-referrer"
                      fetchPriority="high"
                      className="w-full h-full object-cover object-top scale-[1.03] transition-transform duration-500 hover:scale-[1.06]"
                    />

                    {/* Measured Contrast Scrim at Bottom for Nameplate Legibility */}
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#070B11] via-[#070B11]/80 to-transparent" />

                    {/* Top-Center Live Recognition Crown Badge inside Portrait Frame */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 px-3.5 py-1 rounded-full bg-[#0A0D13]/90 backdrop-blur-md border border-[#F5A606]/60 shadow-lg whitespace-nowrap">
                      <span className="text-[11px] font-semibold text-[#F5A606] tracking-wide">
                        ★ 2026 Hack-AI-thon Grand Champion
                      </span>
                    </div>

                    {/* Bold Overlaid Nameplate Banner */}
                    <div className="absolute bottom-3 inset-x-3 z-20 rounded-2xl bg-[#0B121E]/95 backdrop-blur-md border border-[#3A72A1]/70 px-4 py-3.5 text-center shadow-2xl">
                      <p className="font-display text-lg sm:text-xl font-extrabold tracking-wide text-white">
                        EKEMINI EKERE EBONG
                      </p>
                      <p className="text-xs text-[#30ADC1] font-semibold mt-0.5">
                        Senior Data Analyst · Data Scientist · AI Product Builder
                      </p>
                    </div>
                  </div>

                  {/* 4 Orbiting Original Skill Icon Badges Floating on the Portrait Corners */}
                  {heroOrbitTools.map((tool, index) => {
                    const positions = [
                      '-top-3 -left-3 sm:-left-4 animate-float-slow',
                      '-top-3 -right-3 sm:-right-4 animate-float-delayed',
                      'bottom-20 -left-3 sm:-left-5 animate-float-delayed',
                      'bottom-20 -right-3 sm:-right-5 animate-float-slow',
                    ];
                    const isSelected = selectedTool.id === tool.id;
                    return (
                      <button
                        key={tool.id}
                        type="button"
                        onClick={() => setSelectedTool(tool)}
                        title={`${tool.name}: ${tool.description}`}
                        className={`absolute ${positions[index]} z-30 w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-transform duration-150 hover:scale-110 cursor-pointer border-2 ${
                          isSelected
                            ? 'border-white scale-110'
                            : 'border-white/25 hover:border-white/60'
                        }`}
                        style={{
                          backgroundColor: tool.bgTint,
                          boxShadow: `0 12px 32px ${tool.glowColor}`,
                        }}
                      >
                        {tool.renderIcon('w-7 h-7 sm:w-8 sm:h-8')}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* LEFT COLUMN (Order-2 on mobile, Cols 1-4 on desktop): Display Headline + Cobalt Ribbon + Key Proof */}
              <div className="order-2 lg:order-1 lg:col-span-4 flex flex-col justify-between space-y-5">
                <div className="space-y-2.5">
                  <p className="text-xs font-mono tracking-wider text-[#30ADC1]">
                    BI · ANALYTICS ENGINEERING · HEALTHTECH
                  </p>
                  <h1
                    className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.06]"
                    style={{ textWrap: 'balance' }}
                  >
                    Data{' '}
                    <span className="bg-gradient-to-r from-[#FFFFFF] via-[#ADB9D0] to-[#30ADC1] bg-clip-text text-transparent">
                      Analyst
                    </span>{' '}
                    &amp; AI Builder.
                  </h1>
                </div>

                {/* Reference Cobalt-to-Cyan Gradient Accent Box */}
                <div className="relative rounded-2xl bg-gradient-to-r from-[#0A3562] via-[#1973B2] to-[#2380BB] p-5 border border-[#3A72A1]/60 shadow-lg">
                  <p className="text-xs font-mono text-[#E0F2FE] mb-1">
                    AUTONOMOUS DECISION SYSTEMS
                  </p>
                  <p className="text-sm text-white font-medium leading-relaxed">
                    Combining 10+ years of healthcare &amp; operational leadership with AI product engineering, Kimball data warehousing, and executive BI storytelling.
                  </p>
                </div>

                {/* Quantitative Proof & Direct CTAs */}
                <div className="space-y-4 pt-1">
                  <div className="grid grid-cols-3 gap-3 pt-2 border-t border-[#162435]">
                    <div>
                      <p className="font-display text-2xl font-bold text-white tabular-nums">
                        70%
                      </p>
                      <p className="text-xs text-[#8B8B8C] mt-0.5">
                        Faster ETL via Python &amp; GPT-4
                      </p>
                    </div>
                    <div>
                      <p className="font-display text-2xl font-bold text-[#F5A606] tabular-nums">
                        14
                      </p>
                      <p className="text-xs text-[#8B8B8C] mt-0.5">
                        Production AI, BI &amp; ML Systems
                      </p>
                    </div>
                    <div>
                      <p className="font-display text-2xl font-bold text-[#30ADC1] tabular-nums">
                        10+ Yrs
                      </p>
                      <p className="text-xs text-[#8B8B8C] mt-0.5">
                        Healthcare &amp; Ops Leadership
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="#portfolio"
                      className="px-5 py-2.5 text-xs font-semibold text-white bg-[#1F77B7] hover:bg-[#2380BB] rounded-xl transition-colors whitespace-nowrap shadow-md"
                    >
                      Explore Portfolio (14)
                    </a>
                    <a
                      href="#experience-cv"
                      className="px-4 py-2.5 text-xs font-semibold text-[#F5A606] border border-[#F5A606]/40 hover:bg-[#F5A606]/10 rounded-xl transition-colors whitespace-nowrap"
                    >
                      Experience &amp; CV
                    </a>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN (Order-3 on mobile, Cols 10-12 on desktop): "My Skills" Floating Original Tool Icons */}
              <div className="order-3 lg:order-3 lg:col-span-3 flex flex-col justify-between space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                      My Skills
                    </h2>
                    <span className="text-[11px] font-mono text-[#30ADC1]">
                      Click Icon
                    </span>
                  </div>
                  <p className="text-xs text-[#A7AAB0]">
                    Original tool icons floating in the hero stack:
                  </p>
                </div>

                {/* Floating Original Tool Icons Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
                  {heroPrimaryTools.map((tool, idx) => {
                    const isSelected = selectedTool.id === tool.id;
                    return (
                      <button
                        key={tool.id}
                        type="button"
                        onClick={() => setSelectedTool(tool)}
                        className={`group relative rounded-2xl p-3 flex flex-col items-start gap-2 text-left transition-all duration-150 cursor-pointer border ${
                          idx % 2 === 0 ? 'animate-float-slow' : 'animate-float-delayed'
                        } ${
                          isSelected
                            ? 'border-white/80 bg-[#162435]'
                            : 'border-[#29384F]/70 bg-[#111723]/90 hover:border-[#4A6995]'
                        }`}
                        style={{
                          boxShadow: isSelected
                            ? `0 12px 32px ${tool.glowColor}`
                            : '0 8px 20px rgba(0,0,0,0.35)',
                        }}
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-150 group-hover:scale-105"
                          style={{
                            backgroundColor: tool.bgTint,
                            boxShadow: `inset 0 0 12px ${tool.glowColor}`,
                          }}
                        >
                          {tool.renderIcon('w-6 h-6')}
                        </div>
                        <div className="min-w-0 w-full">
                          <p className="font-display text-xs font-bold text-white truncate">
                            {tool.name}
                          </p>
                          <p
                            className="text-[10px] font-medium truncate"
                            style={{ color: tool.accentColor }}
                          >
                            {tool.category}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Tool Inspector */}
                <div
                  className="rounded-2xl p-3.5 border transition-colors duration-200 bg-[#0E1522]"
                  style={{ borderColor: `${selectedTool.accentColor}66` }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-display text-xs font-bold text-white">
                      {selectedTool.name}
                    </span>
                    <span className="text-xs text-[#8B8B8C]" aria-hidden="true">
                      ·
                    </span>
                    <span
                      className="text-[11px] font-medium"
                      style={{ color: selectedTool.accentColor }}
                    >
                      {selectedTool.category}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#D4D6D9] leading-relaxed">
                    {selectedTool.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            PART 2: PORTFOLIO (#portfolio)
            Unified, well-arranged showcase of all 14 projects
           ===================================================================== */}
        <section
          id="portfolio"
          className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-10 py-16 border-t border-[#162435]"
        >
          {/* Section Header + Track Filter Bar */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-mono text-[#F5A606] mb-1.5">
                02. PORTFOLIO — DEPLOYED AI SYSTEMS, BI DASHBOARDS &amp; DATA ENGINEERING
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Production Portfolio (14 Projects)
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#0A0D13] border border-[#1E2B3E] rounded-xl">
              {TRACK_FILTERS.map((track) => {
                const active = activeTrack === track;
                return (
                  <button
                    key={track}
                    type="button"
                    onClick={() => setActiveTrack(track)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                      active
                        ? 'bg-[#1F77B7] text-white shadow-sm'
                        : 'text-[#A7AAB0] hover:text-white'
                    }`}
                  >
                    {track}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grand Championship Spotlight (#01 Nexus Retail OS) */}
          {(activeTrack === 'All Projects' ||
            activeTrack === grandChampionProject.track) && (
            <article className="mb-12 rounded-3xl bg-[#101622] border border-[#2B496F]/80 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12">
              <div
                onClick={() => openProjectLightbox(grandChampionProject)}
                className="lg:col-span-7 bg-[#070A10] border-b lg:border-b-0 lg:border-r border-[#1E2B3E] flex flex-col cursor-pointer group relative"
              >
                <div className="h-8 px-4 bg-[#0A0E17] border-b border-[#192436] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F5A606]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#30ADC1]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1F77B7]/80" />
                    <span className="ml-2 text-[11px] font-mono text-[#A7AAB0]">
                      nexus-retail-oaregrfzrkfw5wrgy9hq8c.streamlit.app
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#F5A606]">
                    01 / 14 · Grand Champion
                  </span>
                </div>

                <div className="relative flex-1 min-h-[280px] sm:min-h-[360px] overflow-hidden">
                  <img
                    src={grandChampionProject.screenshot}
                    alt={grandChampionProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openProjectLightbox(grandChampionProject);
                    }}
                    className="absolute bottom-4 right-4 px-3.5 py-2 rounded-xl bg-[#0C0F17]/90 backdrop-blur-md border border-white/20 text-xs font-medium text-white flex items-center gap-1.5 hover:bg-[#1F77B7] transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Inspect Full Report</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 p-7 sm:p-9 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="text-[#F5A606] font-semibold">
                      ★ {grandChampionProject.awardBadge}
                    </span>
                    <span aria-hidden="true" className="text-[#334A6B]">
                      ·
                    </span>
                    <span className="text-[#30ADC1]">
                      {grandChampionProject.track}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                      {grandChampionProject.title}
                    </h3>
                    <p className="text-xs text-[#ADB9D0] mt-1.5">
                      {grandChampionProject.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-[#D4D6D9] leading-relaxed">
                    {grandChampionProject.solution}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-[#1B2638]">
                    {grandChampionProject.impact.map((pt, i) => (
                      <li
                        key={i}
                        className="text-xs text-[#A7AAB0] flex items-start gap-2 leading-relaxed"
                      >
                        <span className="text-[#F5A606] font-bold">→</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 border-t border-[#1B2638] space-y-4">
                  <p className="text-xs text-[#8B8B8C]">
                    {grandChampionProject.tools.join(' · ')}
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={grandChampionProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 text-xs font-semibold text-[#0C0F17] bg-[#F5A606] hover:bg-[#FEA800] rounded-xl transition-colors flex items-center gap-1.5 whitespace-nowrap"
                    >
                      <span>Launch Live Streamlit App</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <a
                      href={grandChampionProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 text-xs font-semibold text-white bg-[#162435] hover:bg-[#1F77B7] border border-[#2B496F] rounded-xl transition-colors flex items-center gap-1.5 whitespace-nowrap"
                    >
                      <GitBranch className="w-4 h-4" />
                      <span>GitHub Repository</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* 2-Column Visual Production Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
            {visualProductionProjects.map((project) => {
              const isHovarth = project.id === 'hovarth-auto-responder';
              return (
                <article
                  key={project.id}
                  className="group rounded-2xl bg-[#101622] border border-[#1E2B3E] hover:border-[#3A72A1] transition-colors overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {renderProjectMediaPreview(project, isHovarth)}

                    <div className="p-6 sm:p-7 space-y-3.5">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                        <div className="flex items-center gap-2 text-[#30ADC1]">
                          <span className="font-mono">{project.index}</span>
                          <span aria-hidden="true">·</span>
                          <span>{project.track}</span>
                        </div>
                        <span className="text-[#F5A606] font-medium">
                          {project.awardBadge}
                        </span>
                      </div>

                      <div>
                        <h3 className="font-display text-xl font-bold text-white group-hover:text-[#30ADC1] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs text-[#ADB9D0] mt-1">
                          {project.subtitle}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-[#D4D6D9] leading-relaxed">
                        {project.summary}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 sm:px-7 py-4 bg-[#0B0F18] border-t border-[#192436] flex flex-wrap items-center justify-between gap-3">
                    <span className="text-[11px] text-[#8B8B8C] truncate max-w-[52%]">
                      {project.tools.slice(0, 4).join(' · ')}
                    </span>

                    <div className="flex items-center gap-2.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => openProjectLightbox(project)}
                        className="px-3 py-1.5 text-xs font-medium text-[#D4D6D9] hover:text-white border border-[#29384F] rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                      >
                        Architecture
                      </button>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-1.5 text-xs font-semibold text-[#0C0F17] bg-[#F5A606] hover:bg-[#FEA800] rounded-lg transition-colors whitespace-nowrap flex items-center gap-1"
                        >
                          <span>{project.liveLabel || 'Launch App'}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Complete 14-Project Architectural Index */}
          <div className="pt-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5">
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  Complete Portfolio Index ({directoryProjects.length} Projects)
                </h3>
                <p className="text-xs text-[#A7AAB0] mt-0.5">
                  Click any project row to view full technical architecture and production links.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-[#0E131F] border border-[#1E2B3E] overflow-hidden divide-y divide-[#192436]">
              {directoryProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => openProjectLightbox(project)}
                  className="p-4 sm:px-6 sm:py-4.5 hover:bg-[#141C2E] transition-colors cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-4 items-center"
                >
                  <div className="lg:col-span-5 flex items-start gap-3.5">
                    <span className="font-mono text-xs font-semibold text-[#30ADC1] tabular-nums mt-0.5">
                      {project.index}
                    </span>
                    <div>
                      <h4 className="font-display text-sm sm:text-base font-bold text-white hover:text-[#30ADC1] transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-xs text-[#A7AAB0] mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-3 flex flex-col">
                    <span className="text-xs text-[#D4D6D9] font-medium">
                      {project.track}
                    </span>
                    <span className="text-[11px] text-[#F5A606] mt-0.5">
                      {project.awardBadge}
                    </span>
                  </div>

                  <div className="lg:col-span-2 text-xs text-[#8B8B8C] truncate">
                    {project.tools.slice(0, 3).join(' · ')}
                  </div>

                  <div
                    className="lg:col-span-2 flex items-center lg:justify-end gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1.5 text-xs font-medium text-[#D4D6D9] hover:text-white bg-[#162435] rounded-lg transition-colors whitespace-nowrap"
                      >
                        GitHub
                      </a>
                    )}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 text-xs font-semibold text-[#0C0F17] bg-[#F5A606] hover:bg-[#FEA800] rounded-lg transition-colors flex items-center gap-1 whitespace-nowrap"
                      >
                        <span>Live App</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => openProjectLightbox(project)}
                        className="px-3 py-1.5 text-xs font-medium text-[#30ADC1] border border-[#29384F] hover:border-[#30ADC1] rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                      >
                        Details →
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            PART 3: EXPERIENCE / CV (#experience-cv)
            Career Timeline, Technical Skills Matrix, Education, Awards & Printable CV
           ===================================================================== */}
        <section
          id="experience-cv"
          className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-10 py-16 border-t border-[#162435]"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-mono text-[#30ADC1] mb-1.5">
                03. EXPERIENCE / CURRICULUM VITAE
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Professional Experience &amp; Full CV
              </h2>
            </div>

            <button
              type="button"
              onClick={() => setShowResumeModal(true)}
              className="px-4 py-2.5 text-xs font-semibold text-[#0C0F17] bg-[#F5A606] hover:bg-[#FEA800] rounded-xl transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer self-start sm:self-auto"
            >
              <Printer className="w-4 h-4" />
              <span>Open Printable CV View</span>
            </button>
          </div>

          {/* 6-Domain CV Technical Skills Matrix */}
          <div className="rounded-2xl bg-[#101622] border border-[#1E2B3E] p-6 sm:p-8 mb-12">
            <h3 className="font-display text-lg font-bold text-white mb-6 pb-3 border-b border-[#192436]">
              Technical Skills &amp; Domain Competencies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-1.5">
                <h4 className="font-display text-sm font-bold text-[#F5A606]">
                  01. Data &amp; Business Intelligence
                </h4>
                <p className="text-xs text-[#D4D6D9] leading-relaxed">
                  SQL · PostgreSQL · Power BI · DAX · Microsoft Fabric · Excel · Power Query · Dashboard Development · KPI Reporting · Data Visualization · Analytical Storytelling
                </p>
              </div>
              <div className="space-y-1.5">
                <h4 className="font-display text-sm font-bold text-[#30ADC1]">
                  02. Programming &amp; Data Applications
                </h4>
                <p className="text-xs text-[#D4D6D9] leading-relaxed">
                  Python · Pandas · NumPy · Scikit-learn · Plotly · Streamlit · FastAPI · PyVis · GitHub · n8n Workflow Apps
                </p>
              </div>
              <div className="space-y-1.5">
                <h4 className="font-display text-sm font-bold text-[#5CB9F4]">
                  03. Data Engineering &amp; Architecture
                </h4>
                <p className="text-xs text-[#D4D6D9] leading-relaxed">
                  ETL/ELT · Apache Airflow · dbt · dlt · Docker · Docker Compose · PostgreSQL Pipelines · Kimball Dimensional Modelling · Star Schemas · SCD Type 2 · Data Warehousing
                </p>
              </div>
              <div className="space-y-1.5">
                <h4 className="font-display text-sm font-bold text-[#9999FB]">
                  04. AI &amp; Workflow Automation
                </h4>
                <p className="text-xs text-[#D4D6D9] leading-relaxed">
                  OpenAI API · Gemini API · Mistral API · GPT-Powered Analytics · AI Agents · Prompt Engineering · Text-to-SQL · Predictive Analytics · Explainable AI · Conversational AI
                </p>
              </div>
              <div className="space-y-1.5">
                <h4 className="font-display text-sm font-bold text-[#5BC789]">
                  05. Product Analytics &amp; Growth
                </h4>
                <p className="text-xs text-[#D4D6D9] leading-relaxed">
                  Funnel Analysis · North Star Metrics · Event Tracking · Retention &amp; Monetization Frameworks · User Segmentation · JTBD Analysis · SEO Keyword Research · Competitive Gap Analysis
                </p>
              </div>
              <div className="space-y-1.5">
                <h4 className="font-display text-sm font-bold text-[#E25933]">
                  06. Project &amp; Product Delivery
                </h4>
                <p className="text-xs text-[#D4D6D9] leading-relaxed">
                  Jira · ClickUp · Forecast.app · Confluence · Notion AI · Trello · Lucidchart AI · Draw.io · Whimsical AI · Cross-Functional Agile Leadership
                </p>
              </div>
            </div>
          </div>

          {/* Experience Timeline + Education/Awards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-6">
              {EXPERIENCE_TIMELINE.map((exp) => (
                <div
                  key={exp.id}
                  className="rounded-2xl bg-[#101622] border border-[#1E2B3E] p-6 sm:p-7 space-y-4"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#192436] pb-4">
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-[#30ADC1] mt-0.5">
                        {exp.company}{' '}
                        <span className="text-[#8B8B8C] font-normal">
                          · {exp.location}
                        </span>
                      </p>
                    </div>
                    <span className="font-mono text-xs text-[#F5A606] tabular-nums">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="text-xs sm:text-sm text-[#D4D6D9] leading-relaxed flex items-start gap-2.5"
                      >
                        <span className="text-[#30ADC1] font-bold mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 text-xs text-[#8B8B8C]">
                    {exp.skills.join(' · ')}
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-4 space-y-6">
              {/* Award Highlight */}
              <div className="rounded-2xl bg-gradient-to-br from-[#261B06] via-[#131A27] to-[#0C0F17] border border-[#F5A606]/40 p-6 space-y-3">
                <div className="flex items-center gap-2 text-[#F5A606]">
                  <Award className="w-5 h-5 shrink-0" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                    Grand Championship Winner · 2026
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  10Alytics Hack-AI-thon (2026)
                </h3>
                <p className="text-xs text-[#D4D6D9] leading-relaxed">
                  First Place / Grand Champion for building the Nexus Retail Revenue Intelligence OS—an autonomous AI business intelligence platform integrating data cleaning, predictive analytics, customer intelligence, executive reporting, anomaly detection, and scheduled AI decision support.
                </p>
              </div>

              {/* Education */}
              <div className="rounded-2xl bg-[#101622] border border-[#1E2B3E] p-6 space-y-4">
                <div className="flex items-center gap-2 text-[#30ADC1]">
                  <GraduationCap className="w-5 h-5" />
                  <h3 className="font-display text-lg font-bold text-white">
                    Academic Education
                  </h3>
                </div>
                <div className="space-y-4">
                  {EDUCATION_AND_CERTS.education.map((edu, i) => (
                    <div
                      key={i}
                      className={i > 0 ? 'pt-4 border-t border-[#192436]' : ''}
                    >
                      <p className="font-display text-sm font-bold text-white">
                        {edu.degree}
                      </p>
                      <p className="text-xs text-[#30ADC1] mt-0.5">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-[#8B8B8C] mt-1">
                        {edu.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="rounded-2xl bg-[#101622] border border-[#1E2B3E] p-6 space-y-4">
                <h3 className="font-display text-lg font-bold text-white">
                  Certifications &amp; Fellowships
                </h3>
                <div className="space-y-3">
                  {EDUCATION_AND_CERTS.certifications.map((cert, i) => (
                    <div
                      key={i}
                      className="flex items-baseline justify-between gap-3 text-xs border-b border-[#192436] pb-2.5 last:border-none last:pb-0"
                    >
                      <div>
                        <p className="font-medium text-[#F8FAFC]">{cert.name}</p>
                        <p className="text-[#8B8B8C] mt-0.5">{cert.issuer}</p>
                      </div>
                      <span className="font-mono text-[#30ADC1] tabular-nums shrink-0">
                        {cert.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            PART 4: CONTACT (#contact)
           ===================================================================== */}
        <section
          id="contact"
          className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-10 py-16 border-t border-[#162435]"
        >
          <div className="rounded-3xl bg-gradient-to-r from-[#0E2A64]/60 via-[#131A27] to-[#0A0D13] border border-[#29384F] p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <p className="text-xs font-mono text-[#30ADC1]">
                  04. CONTACT
                </p>
                <h2
                  className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight"
                  style={{ textWrap: 'balance' }}
                >
                  Ready to Architect Autonomous BI Systems &amp; AI Data Products?
                </h2>
                <p className="text-sm text-[#ADB9D0] max-w-xl leading-relaxed">
                  Available for Senior Data Analyst, Analytics Engineer, AI Product Builder, and HealthTech Data Leadership engagements.
                </p>
              </div>

              <div className="lg:col-span-5 space-y-3">
                <div className="flex items-center justify-between gap-3 p-4 rounded-2xl bg-[#0C0F17]/90 border border-[#223249]">
                  <div className="min-w-0">
                    <p className="text-[11px] text-[#8B8B8C]">Direct Email</p>
                    <p className="text-sm font-medium text-white truncate">
                      ebongekeminiekere@gmail.com
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() =>
                        handleCopy('ebongekeminiekere@gmail.com', 'email')
                      }
                      className="px-3 py-1.5 rounded-lg bg-[#162435] hover:bg-[#1F77B7] text-xs font-medium text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      {copiedField === 'email' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#5BC789]" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                    <a
                      href="mailto:ebongekeminiekere@gmail.com"
                      className="p-2 rounded-lg bg-[#F5A606] text-[#0C0F17] hover:bg-[#FEA800] transition-colors"
                      title="Send Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 p-4 rounded-2xl bg-[#0C0F17]/90 border border-[#223249]">
                  <div>
                    <p className="text-[11px] text-[#8B8B8C]">
                      Phone / WhatsApp (Nigeria)
                    </p>
                    <p className="text-sm font-medium text-white tabular-nums">
                      +234 708 314 2758
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => handleCopy('+2347083142758', 'phone')}
                      className="px-3 py-1.5 rounded-lg bg-[#162435] hover:bg-[#1F77B7] text-xs font-medium text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      {copiedField === 'phone' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#5BC789]" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                    <a
                      href="tel:+2347083142758"
                      className="p-2 rounded-lg bg-[#1F77B7] text-white hover:bg-[#2380BB] transition-colors"
                      title="Call Phone"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* LinkedIn Profile Redirect Card & Button */}
                <div className="flex items-center justify-between gap-3 p-4 rounded-2xl bg-[#0C0F17]/90 border border-[#223249]">
                  <div className="min-w-0">
                    <p className="text-[11px] text-[#8B8B8C]">
                      LinkedIn Profile
                    </p>
                    <p className="text-sm font-medium text-white truncate">
                      linkedin.com/in/ekemini-ebong
                    </p>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/ekemini-ebong"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-xs font-semibold text-white flex items-center gap-2 transition-colors shrink-0 whitespace-nowrap shadow-md"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>Connect on LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-10 py-8 border-t border-[#162435] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8B8B8C]">
        <p>© {new Date().getFullYear()} Ekemini Ekere Ebong. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-6">
          <a href="#home" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#portfolio" className="hover:text-white transition-colors">
            Portfolio
          </a>
          <a href="#experience-cv" className="hover:text-white transition-colors">
            Experience/CV
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </footer>

      {/* LIGHTBOX / PROJECT ARCHITECTURE MODAL */}
      {lightboxProject && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setLightboxProject(null)}
        >
          <div
            className="relative w-full max-w-4xl rounded-3xl bg-[#0E131F] border border-[#2B496F] shadow-2xl overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 bg-[#0A0D13] border-b border-[#1E2B3E]">
              <div className="flex items-center gap-2 text-xs text-[#30ADC1]">
                <span className="font-mono">{lightboxProject.index}</span>
                <span aria-hidden="true">·</span>
                <span>{lightboxProject.track}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#8B8B8C]">{lightboxProject.year}</span>
              </div>

              <div className="flex items-center gap-3">
                {lightboxProject.secondaryScreenshot && (
                  <div className="flex items-center gap-1 p-1 rounded-lg bg-[#111723] border border-[#29384F]">
                    <button
                      type="button"
                      onClick={() => setActiveScreenshotMode('primary')}
                      className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                        activeScreenshotMode === 'primary'
                          ? 'bg-[#1F77B7] text-white'
                          : 'text-[#A7AAB0] hover:text-white'
                      }`}
                    >
                      Workflow Screenshot
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveScreenshotMode('secondary')}
                      className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                        activeScreenshotMode === 'secondary'
                          ? 'bg-[#F5A606] text-[#0C0F17] font-semibold'
                          : 'text-[#A7AAB0] hover:text-white'
                      }`}
                    >
                      {lightboxProject.secondaryLabel || 'Form Screenshot'}
                    </button>
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => setLightboxProject(null)}
                  className="p-1.5 rounded-lg text-[#A7AAB0] hover:text-white hover:bg-[#162435] transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {(lightboxProject.screenshot || lightboxProject.secondaryScreenshot) && (
              <div className="bg-[#06080D] border-b border-[#1E2B3E] max-h-[480px] overflow-hidden flex items-center justify-center">
                <img
                  src={
                    activeScreenshotMode === 'secondary' &&
                    lightboxProject.secondaryScreenshot
                      ? lightboxProject.secondaryScreenshot
                      : lightboxProject.screenshot
                  }
                  alt={lightboxProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[480px] object-contain"
                />
              </div>
            )}

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                {lightboxProject.awardBadge && (
                  <p className="text-xs font-semibold text-[#F5A606] mb-1">
                    ★ {lightboxProject.awardBadge}
                  </p>
                )}
                <h3 className="font-display text-2xl font-bold text-white">
                  {lightboxProject.title}
                </h3>
                <p className="text-sm text-[#ADB9D0] mt-1">
                  {lightboxProject.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#8B8B8C]">
                    Operational Context
                  </h4>
                  <p className="text-sm text-[#D4D6D9] leading-relaxed">
                    {lightboxProject.problem}
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#30ADC1]">
                    System Architecture &amp; Engineering
                  </h4>
                  <p className="text-sm text-[#D4D6D9] leading-relaxed">
                    {lightboxProject.solution}
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#1B2638]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5A606]">
                  Key Capabilities &amp; Production Impact
                </h4>
                <ul className="grid grid-cols-1 gap-2">
                  {lightboxProject.impact.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-[#F8FAFC] flex items-start gap-2"
                    >
                      <span className="text-[#30ADC1] font-bold">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#1B2638]">
                <p className="text-xs text-[#8B8B8C]">
                  Stack: {lightboxProject.tools.join(' · ')}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  {lightboxProject.repoUrl && (
                    <a
                      href={lightboxProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-medium text-white bg-[#162435] hover:bg-[#1F77B7] rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <GitBranch className="w-4 h-4" />
                      <span>View GitHub Repo</span>
                    </a>
                  )}
                  {lightboxProject.liveUrl && (
                    <a
                      href={lightboxProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-semibold text-[#0C0F17] bg-[#F5A606] hover:bg-[#FEA800] rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <span>{lightboxProject.liveLabel || 'Launch Production App'}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setLightboxProject(null)}
                    className="px-4 py-2 text-xs font-medium text-white bg-[#162435] hover:bg-[#1F77B7] rounded-lg transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PRINTABLE CV MODAL */}
      {showResumeModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setShowResumeModal(false)}
        >
          <div
            className="relative w-full max-w-3xl rounded-3xl bg-[#0E131F] border border-[#2B496F] shadow-2xl overflow-hidden my-8 max-h-[88vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 bg-[#0A0D13] border-b border-[#1E2B3E] shrink-0">
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  Ekemini Ekere Ebong — Curriculum Vitae
                </h3>
                <p className="text-xs text-[#30ADC1]">
                  Senior Data Analyst · Data Scientist · AI Product Builder · HealthTech Professional
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowResumeModal(false)}
                className="p-1.5 rounded-lg text-[#A7AAB0] hover:text-white hover:bg-[#162435] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#D4D6D9]">
              <div className="space-y-2">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#F5A606]">
                  Professional Summary
                </h4>
                <p className="leading-relaxed text-xs sm:text-sm">
                  Data Analyst and AI Product Builder with 10+ years of healthcare leadership and operational experience, combining business intelligence, analytics engineering, AI-powered decision systems, product analytics, and data application development. Grand Championship Winner of the 2026 10Alytics Hack-AI-thon and Finalist of HNG Internship Stage 8 (June 2026).
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#1B2638]">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#30ADC1]">
                  Production AI, BI &amp; HealthTech Systems
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm">
                  <li>
                    <strong className="text-white">Nexus Retail Revenue Intelligence OS:</strong> Grand Championship Winner (10Alytics Hack-AI-thon 2026) — autonomous BI platform deployed on Streamlit &amp; GitHub.
                  </li>
                  <li>
                    <strong className="text-white">Novera AI &amp; Favinho Chatbot:</strong> Live n8n autonomous AI workflow and conversational customer intelligence systems.
                  </li>
                  <li>
                    <strong className="text-white">Hovarth Intelligent Auto-Responder:</strong> End-to-end n8n form intake and automated AI response pipeline.
                  </li>
                  <li>
                    <strong className="text-white">Aurora Retail &amp; Predictive Sales Assistant:</strong> Live Streamlit executive dashboarding and ML sales forecasting applications.
                  </li>
                  <li>
                    <strong className="text-white">ClinOps Autopilot &amp; TalentPulse ML:</strong> Adverse Event Management HealthTech web app (`clin-ops-autopilot.vercel.app`) and Tech Job Market Salary Prediction model.
                  </li>
                </ul>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#1B2638]">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#30ADC1]">
                  Contact &amp; Location
                </h4>
                <p className="text-xs sm:text-sm">
                  Akwa-Ibom State, Nigeria · +234 708 314 2758 · ebongekeminiekere@gmail.com
                </p>
              </div>
            </div>

            <div className="px-6 py-4 bg-[#0A0D13] border-t border-[#1E2B3E] flex justify-end gap-3 shrink-0">
              <button
                type="button"
                onClick={() => window.print()}
                className="px-4 py-2 text-xs font-semibold text-[#0C0F17] bg-[#F5A606] hover:bg-[#FEA800] rounded-lg transition-colors cursor-pointer"
              >
                Print / Save PDF
              </button>
              <button
                type="button"
                onClick={() => setShowResumeModal(false)}
                className="px-4 py-2 text-xs font-medium text-white bg-[#162435] hover:bg-[#1F77B7] rounded-lg transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
