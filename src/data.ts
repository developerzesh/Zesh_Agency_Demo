import { Solution, Industry, CaseStudy, Resource, JobRole } from "./types";

export const SOLUTIONS_DATA: Solution[] = [
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    subheading: "Technical structures that outrank competitors.",
    description: "We design and execute programmatic and technical SEO systems that outrank competitors for high-value transaction-intent keywords.",
    features: [
      "Technical SEO Architecture",
      "Intent-First Content Clusters",
      "Programmatic Hub Development"
    ],
    link: "/solutions/seo",
    category: "search",
    detailedOverview: "Modern SEO is a technical battle. Search engines favor lightning-fast page loading speeds, semantic content depth, and strict structural hierarchy. We build programmatic frameworks that make indexing effortless for crawlers.",
    scope: [
      {
        title: "Crawling Audit & Architecture",
        description: "Re-coding file structures, correcting core web vitals, and eliminating server bottlenecks."
      },
      {
        title: "Programmatic Hub Design",
        description: "Constructing vast, automated comparison and keyword-targeted grids that update programmatically."
      },
      {
        title: "Competitor Search Theft",
        description: "Intercepting traffic from competitor domains by building superior alternative evaluation hubs."
      }
    ],
    roadmap: [
      {
        period: "Months 01-02",
        task: "Assessment & Core Upgrades",
        details: "Code architecture correction, crawler path optimization, and search console audits."
      },
      {
        period: "Months 03-04",
        task: "Asset Rollout & Optimization",
        details: "Deployment of intent-first programmatic landing hubs and high-value search assets."
      },
      {
        period: "Months 05-06",
        task: "Indexing Sync & Analytics Calibration",
        details: "Indexation scans verification, analytics tag testing, and search console refinement."
      }
    ],
    expectedOutcomes: "+312% average organic traffic growth, top-3 placement for core intent terms, and elimination of dependency on paid keyword auctions."
  },
  {
    id: "aeo",
    title: "Answer Engine Optimization (AEO)",
    subheading: "Securing citations inside conversational AI models.",
    description: "Ensure your product is structured and cited as the definitive answer inside conversational search tools like ChatGPT, Claude, and Apple Intelligence.",
    features: [
      "Prompt Auditing",
      "Structured Schema",
      "Entity Maps",
      "Citations Tracking"
    ],
    link: "/solutions/aeo",
    category: "search",
    detailedOverview: "Conversational models evaluate semantic trust networks. To win AEO, your brand must exist in high-authority reference databases, possess clean JSON-LD schemas, and maintain active, verified reviews that LLM scrapers scan.",
    scope: [
      {
        title: "LLM Reference Mapping",
        description: "We catalog your product features in database formats favored by OpenAI and Anthropic crawler bots."
      },
      {
        title: "Conversational Prompt Auditing",
        description: "Analyzing how LLMs respond to requests like 'what is the best software for...' and structuring entity maps to correct recommendations."
      },
      {
        title: "Semantic Schema Declarations",
        description: "Injecting structural code schemas declaring exact brand characteristics, founders, and integrations."
      }
    ],
    roadmap: [
      {
        period: "Months 01-02",
        task: "Model Recommendation Auditing",
        details: "Base recommendation audit across Major LLM models and citation maps analysis."
      },
      {
        period: "Months 03-04",
        task: "Semantic Injection",
        details: "Custom JSON-LD schema engineering and entity relationship graph declaration."
      },
      {
        period: "Months 05-06",
        task: "Graph Syncing and Live Tracking",
        details: "Database nodes synchronization and live citation share tracking."
      }
    ],
    expectedOutcomes: "Direct citations in Siri, Claude, and ChatGPT recommendation prompts, resulting in high-trust inbound requests."
  },
  {
    id: "geo",
    title: "Generative Engine Optimization (GEO)",
    subheading: "Aligning your brand with synthetic search queries.",
    description: "Target synthetic search answers. We reverse-engineer context-aware generative search engines like Perplexity and Search GPT to establish authority.",
    features: [
      "Context Optimization",
      "Reference Targeting",
      "Graph Syncing",
      "Index Auditing"
    ],
    link: "/solutions/geo",
    category: "search",
    detailedOverview: "GEO requires structured data alignment, authoritative content references, and high-frequency crawling profiles. We synchronize your product properties with the retrieval-augmented generation (RAG) graphs scanned by search AI.",
    scope: [
      {
        title: "RAG Database Synchronization",
        description: "Formatting documentation, case studies, and comparison modules to index cleanly into generative search databases."
      },
      {
        title: "Context-Aware Optimization",
        description: "Structuring articles to answer exact context-heavy prompts rather than basic keywords."
      },
      {
        title: "AI Index Audit Monitoring",
        description: "Real-time tracking of brand mentions inside Google Search Generative Experience (SGE) panels."
      }
    ],
    roadmap: [
      {
        period: "Months 01-02",
        task: "AI Audit Mapping",
        details: "SGE citation audits and AI search indexing scan profiles mapping."
      },
      {
        period: "Months 03-04",
        task: "RAG Engine Alignment",
        details: "Coding retrieval-augmented generation (RAG) structural optimizations."
      },
      {
        period: "Months 05-06",
        task: "Sync and Response Scaling",
        details: "Live context-aware recommendation monitoring and content coverage loops."
      }
    ],
    expectedOutcomes: "Verified citations in Google Gemini and Perplexity response panels, driving highly educated prospects directly to your sales pipeline."
  },
  {
    id: "web-dev",
    title: "Growth Engineering and Website Development",
    subheading: "Zero-bloat static engines built for speed and conversions.",
    description: "Bespoke headless frameworks and zero-bloat static web architectures engineered to load in milliseconds and maximize pipeline conversions.",
    features: [
      "Headless Web Dev",
      "Conversion Optimization",
      "Intake Flow Dev",
      "Database Synced Funnels"
    ],
    link: "/solutions/web-dev",
    category: "engineering",
    detailedOverview: "Most websites are weighed down by heavy WordPress plugins and unoptimized code structures. We build on modern static stacks (using lightweight vanilla HTML, CSS, and clean Javascript) designed for crawler indexing and user experience.",
    scope: [
      {
        title: "Headless Static Development",
        description: "Zero-bloat custom code structures containing no database delays or server-side lag."
      },
      {
        title: "Frictionless Intake Funnels",
        description: "Dynamic conversion systems that route qualified leads directly to your sales CRM."
      },
      {
        title: "Core Web Vitals Engineering",
        description: "Achieving 100/100 performance scores across mobile and desktop interfaces."
      }
    ],
    roadmap: [
      {
        period: "Months 01-02",
        task: "Performance & UX Diagnostics",
        details: "Speed bottleneck analysis, intake form UX wireframes, and responsive schema mapping."
      },
      {
        period: "Months 03-04",
        task: "Headless Implementation",
        details: "Headless frontend code engineering using modern CSS/JS libraries."
      },
      {
        period: "Months 05-06",
        task: "CRM Sync & Deployment",
        details: "API CRM connections, database field mappings, and PagePage speed validation."
      }
    ],
    expectedOutcomes: "Average mobile page load speeds under 0.5s, conversion rate increases up to 40%, and zero code dependency on heavy third-party plugins."
  },
  {
    id: "local-seo",
    title: "Local SEO Dominance",
    subheading: "Capture localized search volume and Map Pack rankings.",
    description: "Capture localized search volume and Google Map pack rankings across multiple regional facilities through programmatic local hub design.",
    features: [
      "Localized Content Hubs",
      "Map Pack Optimization",
      "Programmatic Facilities Pages",
      "Directory Sync"
    ],
    link: "/solutions/local-seo",
    category: "specialty",
    detailedOverview: "Local search dominance requires precise geo-targeting. We construct localized schema graphs, optimize Google Business Profile assets, and deploy dynamic regional pages that load instantly for local prospects.",
    scope: [
      {
        title: "Google Map Pack Optimization",
        description: "Structuring reviews, map listings, and regional citations to rank in localized search maps."
      },
      {
        title: "Programmatic Location Hubs",
        description: "Building dynamic landing pages for multiple facilities, ensuring consistent optimization."
      },
      {
        title: "Local Review Acquisition Systems",
        description: "Integrating intake forms that encourage patients and buyers to leave positive reviews."
      }
    ],
    roadmap: [
      {
        period: "Months 01-02",
        task: "Grid & Coordinate Audit",
        details: "Location coordinate maps analysis and Google Business Profile listing audits."
      },
      {
        period: "Months 03-04",
        task: "Hub Rollout & Directory Sync",
        details: "Programmatic local page deployment and regional directory synchronization."
      },
      {
        period: "Months 05-06",
        task: "Review funnels & Regional Routing",
        details: "Review funnel automation, map pack position monitoring, and local lead routing."
      }
    ],
    expectedOutcomes: "Rank #1 in target geo-coordinates, significant increases in local phone calls and map-derived directions, and clean local index coverage."
  },
  {
    id: "lead-generation",
    title: "Scalable Lead Generation",
    subheading: "Turn traffic into high-converting sales pipelines.",
    description: "Transform search intent into closed sales pipeline. We construct customized inbound flow funnels linking directly into your CRM.",
    features: [
      "Flow Automation",
      "HubSpot & CRM Database Sync",
      "Intent Scoring",
      "Dynamic intake routing"
    ],
    link: "/solutions/lead-generation",
    category: "engineering",
    detailedOverview: "High-converting lead gen combines intuitive UI layout with real-time database enrichment. We design multi-step intake forms that qualify buyers before scheduling calls, reducing sales friction.",
    scope: [
      {
        title: "Automated Intake Flows",
        description: "Designing clean, multi-step forms that qualify leads dynamically."
      },
      {
        title: "HubSpot & CRM Syncing",
        description: "Setting up real-time database connections to pass contact details instantly to your sales reps."
      },
      {
        title: "Data Enrichment Tools",
        description: "Integrating scripts that pull company data, budget ranges, and site analytics during intake."
      }
    ],
    roadmap: [
      {
        period: "Months 01-02",
        task: "Workflow Mapping",
        details: "CRM intake workflow audits and funnel qualification mapping."
      },
      {
        period: "Months 03-04",
        task: "Intake Engineering",
        details: "Dynamic multi-step qualification form engineering and enrichment API sync."
      },
      {
        period: "Months 05-06",
        task: "Scoring & Attribution Sync",
        details: "Dynamic lead scoring calibration, CRM sync testing, and attribution dashboards."
      }
    ],
    expectedOutcomes: "Reductions in unqualified meeting bookings, higher conversion rates on intake pages, and automated pipeline attribution."
  },
  {
    id: "social-media",
    title: "Social Media Management and Distribution",
    subheading: "Executive thought leadership where buyers read.",
    description: "Distribute search authority and establish founder-led credibility across executive-heavy networks like LinkedIn and Twitter.",
    features: [
      "Thought Leadership",
      "Intent-Driven Writing",
      "Founder Campaigns",
      "Distribution Pipelines"
    ],
    link: "/solutions/social-media",
    category: "specialty",
    detailedOverview: "High-value B2B buyers trust experienced operators. We write strategic case study insights and distribute them on LinkedIn and Twitter to position your executives as authoritative consultancies.",
    scope: [
      {
        title: "Executive Ghostwriting",
        description: "Writing detailed, technical growth narratives in your founder's unique voice."
      },
      {
        title: "Case Study Redistribution",
        description: "Reformatting organic search achievements into high-engagement social posts."
      },
      {
        title: "Thought-Leadership Architecture",
        description: "Defining a content plan that positions your team as industry operators."
      }
    ],
    roadmap: [
      {
        period: "Months 01-02",
        task: "Voice Calibration & Planning",
        details: "Founder voice audits, content themes selection, and target profile planning."
      },
      {
        period: "Months 03-04",
        task: "Deployment & Scale",
        details: "Thought leadership article creation and case-study redistribution campaigns."
      },
      {
        period: "Months 05-06",
        task: "Distribution Loops",
        details: "Automated publishing, follower growth audits, and direct-inquiry funnel sync."
      }
    ],
    expectedOutcomes: "Significant increases in profile views, organic network growth, and qualified direct messages from enterprise decision-makers."
  },
  {
    id: "consultation",
    title: "High-Trust Consultation",
    subheading: "Workshops to analyze bottlenecks and competitiveness.",
    description: "Direct strategic consulting workshops. We evaluate search competitive indexes, pipeline bottlenecks, and draft custom execution blueprints.",
    features: [
      "Site Audits",
      "ROI Modeling",
      "Growth Blueprints",
      "Principal-Led Strategy"
    ],
    link: "/solutions/consultation",
    category: "consulting",
    detailedOverview: "Most agencies pitch templates. We run database-backed analysis sessions where our founders examine your conversion funnels, code base bottlenecks, and design custom execution roadmaps.",
    scope: [
      {
        title: "Competitor Search Audits",
        description: "Mapping out competitor keywords, paid budgets, and search acquisition funnels."
      },
      {
        title: "Conversion Funnel Analysis",
        description: "Identifying conversion bottlenecks in your checkout page and booking intake forms."
      },
      {
        title: "Technical Site Audits",
        description: "Checking code-level performance, indexing health, and structural deficiencies."
      }
    ],
    roadmap: [
      {
        period: "Months 01-02",
        task: "Diagnostic Scans",
        details: "Growth metrics diagnostics, competitor search spend scans, and site auditing."
      },
      {
        period: "Months 03-04",
        task: "Workshop & Mapping",
        details: "Principal-led workshops, roadblock diagnostics, and custom blueprint mapping."
      },
      {
        period: "Months 05-06",
        task: "Implementation Oversight",
        details: "Implementation oversight, monthly health checks, and strategic roadmap adjustments."
      }
    ],
    expectedOutcomes: "Complete strategic clarity on search visibility gaps, detailed roadmaps to fix conversion drops, and immediate code optimization blueprints."
  }
];

export const INDUSTRIES_DATA: Industry[] = [
  {
    id: "saas",
    name: "B2B SaaS",
    title: "Dominate comparison search. Bypass software directories.",
    subheading: "Interceptions that capture alt-keyword evaluators directly.",
    description: "Don't spend valuable capital buying third-party referral traffic. We build custom alternative pages and schema maps that capture SaaS buyers directly on your domain.",
    challenges: [
      "Aggregator Directory Dominance: Large comparison portals capture primary keywords, inflating your user acquisition costs.",
      "Unqualified Lead Volumes: Generic search templates drive visitors that don't convert to demo signups.",
      "LLM Citation Gaps: SaaS products without structured entity schemas disappear from AI recommendation answers."
    ],
    opportunities: "Own high-intent terms like '[Competitor] alternatives' or '[Competitor A] vs [Competitor B]'. By hosting comparison modules directly on your domain, you convert active software buyers at the exact point of decision.",
    roadmap: [
      {
        period: "Months 01-02",
        task: "Keyword Index Scan",
        details: "Competitor keyword indexing mapping and trial conversion audits."
      },
      {
        period: "Months 03-04",
        task: "Programmatic Alternative Deploy",
        details: "Programmatic alternative pages deployment and JSON-LD schema declaration."
      },
      {
        period: "Months 05-06",
        task: "CRM Pipeline Routing",
        details: "Demo qualifying funnel setup and search console pipeline routing."
      }
    ],
    metrics: {
      traffic: "+312% Organic Search traffic",
      pipeline: "$1.2M Attributed sales pipeline growth",
      rankings: "Rank #1 for 42 core comparison terms"
    }
  },
  {
    id: "b2b",
    name: "B2B Professional Services",
    title: "Position your firm as the definitive advisory authority.",
    subheading: "Establish credibility prior to the first discovery call.",
    description: "Corporate buyers research solutions before scheduling calls. We build search assets and structured profiles that establish your firm’s credibility at every stage of discovery.",
    challenges: [
      "Word of Mouth Limits: Relying solely on referrals prevents predictable growth and limits national client acquisition.",
      "Competitor Visibility Saturation: Competitors publish generic thought-leadership blogs that dilute high-trust advisory positioning.",
      "Long Buying Journeys: Multi-month decision processes require consistent, high-authority brand touchpoints across organic search channels."
    ],
    opportunities: "Capture clients querying complex regulatory changes and industry trends. By hosting authoritative analyses, you establish trust and move prospects toward booking advisory calls.",
    roadmap: [
      {
        period: "Months 01-02",
        task: "Insight & Target Scanning",
        details: "Client buying behavior research and expertise entity mapping."
      },
      {
        period: "Months 03-04",
        task: "Case Study Optimization",
        details: "Case studies optimization and transactional long-tail target hubs."
      },
      {
        period: "Months 05-06",
        task: "National Directory Launch",
        details: "CRM intake integration and national directory citation expansion."
      }
    ],
    metrics: {
      traffic: "+180% Inbound meeting requests",
      pipeline: "-35% sales cycle length",
      rankings: "Rank #1 for regional and national consulting queries"
    }
  },
  {
    id: "healthcare",
    name: "Healthcare & Medical",
    title: "Capture high-value patient search volume.",
    subheading: "Patients trust authoritative medical providers.",
    description: "Patients trust authoritative medical providers. We build clinical search systems optimized under Google's E-E-A-T guidelines to rank your facilities first.",
    challenges: [
      "Strict YMYL Algorithm Filters: Google filters medical search results aggressively, deindexing sites lacking verifiable doctor authorship.",
      "Local Maps Optimization Errors: Inconsistent clinic addresses and incorrect maps configurations lead to loss of local patient traffic.",
      "Patient Trust Obstacles: Confusing medical explanations and poor interface layouts drive patients to competitor clinics."
    ],
    opportunities: "Dominate patient queries for specialized medical procedures. We deploy structured provider schemas and clinical maps profiles that establish your facilities as trusted local authorities.",
    roadmap: [
      {
        period: "Months 01-02",
        task: "Physician Credential Indexing",
        details: "Physician E-E-A-T credentials indexing and YMYL content audit."
      },
      {
        period: "Months 03-04",
        task: "Clinic Localized Rollouts",
        details: "Local clinic page programmatic rollouts and maps listings cleanup."
      },
      {
        period: "Months 05-06",
        task: "Acquisition Funnels Integration",
        details: "Patient review funnels implementation and medical search maps tracking."
      }
    ],
    metrics: {
      traffic: "+280% organic medical bookings",
      pipeline: "+150% localized map views",
      rankings: "8/10 core keywords ranking in Top-3 within 90 days"
    }
  },
  {
    id: "tech-ai",
    name: "Tech & AI Systems",
    title: "Secure citations where developers and CTOs search.",
    subheading: "API structure maps designed for AI conversational crawlers.",
    description: "Technical decision-makers avoid marketing brochures. We structure database networks and schema layouts so your technical product is recommended inside AI search platforms.",
    challenges: [
      "Generative Recommendations Gaps: Tech products lacking structured semantic definitions are ignored by conversational AI models.",
      "Rapid Keyword Shifting: Developer terminology changes weekly. Standard search tracking tools fail to capture real-time queries.",
      "Low-Trust Content Templates: Marketing copy written without deep developer insight fails to pass technical scrutiny."
    ],
    opportunities: "Target developers querying technical comparisons. We optimize your documentation hubs, schema maps, and benchmark databases to secure citations across AI search interfaces.",
    roadmap: [
      {
        period: "Months 01-02",
        task: "Doc Speed & Schema Mapping",
        details: "Developer documentation speed audits and semantic schema graph scans."
      },
      {
        period: "Months 03-04",
        task: "Reference Table Indexation",
        details: "Code-level API reference tables database configuration and indexation."
      },
      {
        period: "Months 05-06",
        task: "Share-of-Voice calibration",
        details: "AEO share-of-voice scans and generative citation validation loops."
      }
    ],
    metrics: {
      traffic: "42% citation mindshare inside ChatGPT and Perplexity",
      pipeline: "+185% developer signups",
      rankings: "Sub-0.4s documentation load speed"
    }
  },
  {
    id: "b2c",
    name: "Premium B2C & Brands",
    title: "Scale direct-to-consumer search acquisition.",
    subheading: "Bypassing rising paid ad costs under strict brand parameters.",
    description: "Bypassing rising paid ad costs. We align lifestyle intent and brand values with direct-to-purchase optimization, ensuring high-net-worth buyers find your brand first.",
    challenges: [
      "Meta and Ad Cost Inflation: Diminishing returns on social media platforms make user acquisition costs unsustainable.",
      "Diluted Brand Positioning: Generic search optimization models use keyword stuffing that compromises luxury brand values.",
      "Visual Search Gaps: Luxury buyers find products via visual exploration, but sites fail to optimize images for visual search engines."
    ],
    opportunities: "Target high-net-worth buyers seeking bespoke lifestyle products. We optimize image tags, structure product schemas, and accelerate page speeds to capture luxury buyers directly.",
    roadmap: [
      {
        period: "Months 01-02",
        task: "Channel Diagnostics & Audit",
        details: "Acquisition channels performance audits and visual search asset analysis."
      },
      {
        period: "Months 03-04",
        task: "Image Metadata Enrichment",
        details: "Image metadata tagging, mobile page speed optimization, and schema mapping."
      },
      {
        period: "Months 05-06",
        task: "Checkout Optimization Loops",
        details: "Checkout conversion rate optimization and shopping indexation sync."
      }
    ],
    metrics: {
      traffic: "+195% organic revenue growth",
      pipeline: "4.8x average return on search spend",
      rankings: "-32% paid ad cost dependencies"
    }
  },
  {
    id: "real-estate",
    name: "Real Estate & Development",
    title: "Dominate local search maps and luxury real estate keywords.",
    subheading: "Bypassing referral aggregators for direct bookings.",
    description: "Bypassing third-party listings aggregators. We construct localized search systems that connect high-intent investors and buyers directly with your properties.",
    challenges: [
      "Aggregator Site Monopolies: Large listing portals capture primary real estate keywords, forcing you to pay high referral fees.",
      "Slow Property Page Indexing: Real estate inventory updates daily, but search engines fail to crawl and index new property pages fast enough.",
      "Low-Trust Intake Forms: Portal lead generation forms produce unqualified spam leads."
    ],
    opportunities: "Target investors searching for specific neighborhood traits. We structure property catalogs, build fast project pages, and capture buyers seeking pre-construction and commercial deals directly.",
    roadmap: [
      {
        period: "Months 01-02",
        task: "Coordinate Mapping setup",
        details: "Regional mapping analysis and listings database setup."
      },
      {
        period: "Months 03-04",
        task: "Programmatic Neighborhood Deploy",
        details: "Programmatic neighborhood catalogs deployment and local map packs GBP sync."
      },
      {
        period: "Months 05-06",
        task: "Tour Request Funnels",
        details: "Portfolio gallery mobile optimizations and qualifying tour request funnels."
      }
    ],
    metrics: {
      traffic: "+240% qualified organic leads",
      pipeline: "$15M+ attributed property sales",
      rankings: "Rank #1 for 18 local target keywords"
    }
  },
  {
    id: "architecture",
    name: "Architecture & Design Studios",
    title: "Connect your portfolio with high-budget commissions.",
    subheading: "Visual search structural maps targeted at premium spatial designs.",
    description: "Architectural decisions start with visual research. We optimize your portfolio design and spatial keywords, connecting your studio with developers and high-end residential clients.",
    challenges: [
      "Visual Search Discovery Gaps: Standard text SEO fails to index image portfolios, missing buyers who discover work via visual searches.",
      "JavaScript Ghost Portfolios: Creative studios host project images behind unindexed galleries, hidden from crawler indexation.",
      "Enthusiast vs. Buyer Intent: Most traffic comes from design students. We align search keywords to target developers."
    ],
    opportunities: "Establish your studio as a design authority for specific spatial styles. We structure portfolio images with precise schema tags, ensuring your work ranks in high-intent visual searches.",
    roadmap: [
      {
        period: "Months 01-02",
        task: "Gallery Index Auditing",
        details: "Portfolio page indexation audits and visual intent keyword mapping."
      },
      {
        period: "Months 03-04",
        task: "Image Engine Tuning",
        details: "Image Engine Optimization, metadata formatting, and editorial case studies."
      },
      {
        period: "Months 05-06",
        task: "Inbound commission setup",
        details: "Spatial design query optimization and commission intake routing."
      }
    ],
    metrics: {
      traffic: "+180% high-budget project inquiries",
      pipeline: "+320% visual search impressions",
      rankings: "Rank #1 for 12 target regional design queries"
    }
  },
  {
    id: "interior-design",
    name: "Interior Design Consultancies",
    title: "Connect luxury clients with your design portfolio.",
    subheading: "Aesthetic placements that target active spatial developers.",
    description: "Premium clients search for spatial design specialists. We optimize your project portfolios and local search placements to connect luxury buyers directly to your studio.",
    challenges: [
      "The Pinterest Discovery Gap: Buyers discover and pin your design images but struggle to find your local studio when ready to hire.",
      "DIY vs. Professional Intent: General content templates attract DIY decorators instead of luxury residential or commercial commissions.",
      "Slow Portfolio Page Speeds: Large unoptimized portfolio photos slow down website response times, increasing mobile bounce rates."
    ],
    opportunities: "Position your design consultancy as the leading local authority for luxury interior renovations. We build local citation networks and optimize portfolios for high-intent queries.",
    roadmap: [
      {
        period: "Months 01-02",
        task: "Directory Audit & Speed Diagnostics",
        details: "Portfolio page speed diagnostic and local citation directory audits."
      },
      {
        period: "Months 03-04",
        task: "AVIF/WebP Gallery Conversions",
        details: "AVIF/WebP next-gen image conversions and maps pack optimization."
      },
      {
        period: "Months 05-06",
        task: "Intake Form Alignment",
        details: "High-intent luxury local keyword targeting and booking intake verification."
      }
    ],
    metrics: {
      traffic: "+210% qualified project briefings",
      pipeline: "-45% mobile bounce rates",
      rankings: "Rank #1 for 15 target luxury design queries"
    }
  }
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: "case-01",
    title: "Scaling B2B SaaS Pipeline by 312%",
    clientContext: "Enterprise Resource Planning (ERP) Platform.",
    problem: "The client relied on AdWords campaigns costing $42 per click. High CAC prevented sustainable revenue growth, and third-party listings represented 70% of inbound sales demos.",
    whatWasBroken: "Their website lacked comparative content. Prospects searching for alternative tools were redirected to aggregators where competitors outbid the client.",
    strategicShift: "Build comparison landing pages hosted directly on the client's domain to intercept software buyers.",
    execution: [
      "Coded 42 speed-optimized alternative pages (e.g., '[Competitor] alternatives').",
      "Injected structured schema maps declaring feature differences.",
      "Created comparison tables that load in under 0.4 seconds."
    ],
    outcomes: [
      "+312% organic search traffic in 90 days.",
      "$1.2M in attributed pipeline growth.",
      "Top-3 rankings for target comparison queries."
    ],
    keyInsight: "Hosting comparison frameworks converts search buyers at a significantly lower acquisition cost."
  },
  {
    id: "case-02",
    title: "Luxury Property Developer",
    clientContext: "Pre-construction high-end residential towers in Miami.",
    problem: "Paid ads on social networks generated high volumes of low-intent contact details. The client spent over $8,000 monthly for lists that sales reps couldn't close.",
    whatWasBroken: "The project portfolio page was an unindexed single-page app. Search engines could not crawl individual properties, leaving them invisible to buyers.",
    strategicShift: "Move away from social media lead ads. Dominate regional luxury real estate intent queries by building a fast, indexable property catalog.",
    execution: [
      "Re-coded the project catalog into server-side rendered HTML formats.",
      "Targeted specific terms like 'pre-construction penthouse Miami'.",
      "Implemented multi-step verification forms for private tour requests."
    ],
    outcomes: [
      "+240% qualified organic inquiries.",
      "$15M in attributed property sales.",
      "Complete project reservation prior to ground breaking."
    ],
    keyInsight: "High-net-worth buyers search using specific long-tail queries. Optimizing for these terms bypasses generic aggregators."
  },
  {
    id: "case-03",
    title: "Multi-Location Healthcare Group",
    clientContext: "Regional network of 12 clinical facilities.",
    problem: "Inbound patient acquisitions declined. Patient queries were captured by national directories, and their locations lacked visibility on local map search engines.",
    whatWasBroken: "Clinic coordinates were mismatched across web listings. Their doctors had no clinical profiles connected to clinical schema structures.",
    strategicShift: "Claim Google Map Pack dominance. Build programmatic clinic location hubs and structure physician schemas to satisfy YMYL search guidelines.",
    execution: [
      "Standardized map details for all 12 clinics across target directories.",
      "Developed local clinic pages and linked content to verified provider profiles.",
      "Structured patient review funnels to sync automatically with clinic profiles."
    ],
    outcomes: [
      "+280% organic clinic bookings.",
      "Rank #1 in local Map Packs.",
      "Top-3 rankings for procedural queries within 90 days."
    ],
    keyInsight: "Local clinical search requires clean Google Business Profile setups and clear, schema-mapped credentials for medical staff."
  },
  {
    id: "case-04",
    title: "Luxury Direct-to-Consumer Jewelry Brand",
    clientContext: "Bespoke engagement rings and fine jewelry.",
    problem: "Diminishing returns on paid social media channels increased acquisition costs, threatening product margins.",
    whatWasBroken: "Beautiful high-definition jewelry images had no metadata tags, missing searchers using Google Lens and image search.",
    strategicShift: "Transition paid social budget to organic visual search discovery, targeting high-intent design terms.",
    execution: [
      "Compressed and tagged product images with alt tags detailing styles and stones.",
      "Structured product pages to display rich snippets in search results.",
      "Integrated direct-to-purchase links from image searches."
    ],
    outcomes: [
      "+195% organic revenue growth.",
      "4.8x average return on search investment.",
      "Reduced reliance on paid advertising channels."
    ],
    keyInsight: "High-ticket B2C brands grow when visual assets are structured to appear in visual search results at the point of inspiration."
  }
];

export const RESOURCES_DATA: Resource[] = [
  {
    id: "res-01",
    title: "The LLM Citation Shift: How to Rank in ChatGPT and Claude",
    summary: "A technical analysis of semantic indexing structures and database nodes scanned by conversational AI engines.",
    date: "May 2026",
    readTime: "7 min read",
    content: "Conversational engines don't crawl links the way traditional search engines look for keywords. ChatGPT, Claude, and Apple Intelligence scan structured semantic data sources, authoritative brand profiles, and index citations based on semantic affinity and verified recommendations. To capture mindshare, companies must ensure their product metadata, documentation APIs, and user testimonials are formatted and schema-mapped as precise digital entities. This insight covers how to audit conversational recommendation shares and construct target LLM entity directories."
  },
  {
    id: "res-02",
    title: "Why WordPress and Plugins Are Dragging Down Your Conversions",
    summary: "An engineering comparison of bloated CMS templates vs. clean headless code architecture.",
    date: "April 2026",
    readTime: "5 min read",
    content: "Each millisecond of server latency hurts conversion rates and organic SEO rankings. Legacy monolithic content management systems pile up uncompressed asset scripts, bloated plugins, and heavy database retrieval delays. Transitioning website portfolios to optimized headless setups built with custom vanilla assets and pre-rendered fast static engines eliminates server delays. We analyze actual speed-test improvements and core web metric scores to illustrate why modern growth engineering directly compounds your acquisition ROI."
  },
  {
    id: "res-03",
    title: "Bypassing Aggregators: The SaaS Blueprint to Intercept Alternative Queries",
    summary: "A programmatic SEO guide to capturing high-intent comparative terms directly on your domain.",
    date: "March 2026",
    readTime: "8 min read",
    content: "When users search for '[Competitor] alternatives' or '[A] vs [B]', they have high intent to purchase. Most software platforms surrender these keywords to expensive aggregator listing directories. By building programmatic, lightning-fast comparison alternative pages hosted directly on your primary domain, you bypass software directory middle-men. We share our custom structural blueprint to index competitive evaluation directories sustainably while reducing client acquisition cost (CAC)."
  }
];

export const JOB_ROLES_DATA: JobRole[] = [
  {
    id: "role-01",
    title: "Senior Growth Engineer (HTML/JS/Performance)",
    description: "Build zero-bloat static web frameworks, custom intake funnels, and optimized client platforms. You should have deep expertise in vanilla web engineering and performance budgeting.",
    autonomyLevel: "Full ownership of codebase architecture and site performance scoring."
  },
  {
    id: "role-02",
    title: "Search & AI Indexing Architect (SEO/AEO/GEO)",
    description: "Declare entity schemas, audit LLM recommendations, and design programmatic comparison indexes. You should have deep experience mapping semantic entities and parsing scraper behaviors.",
    autonomyLevel: "Design and deploy indexing roadmaps for client portfolios."
  }
];
