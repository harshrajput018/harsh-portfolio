export const ME = {
  email: "harshrajput18@gmail.com",
  linkedin: "https://www.linkedin.com/in/harsh-rajput-0542a4185/",
  github: "https://github.com/harshrajput018",
  phone: "+91 7827960243",
  stats: [
    { n: "5",   label: "Projects Shipped" },
    { n: "1yr", label: "At Infosys" },
    { n: "5+",  label: "Tech Stacks" },
  ],
};

export const PROJECTS = [
  {
    id: "01", name: "PyQueue", tagline: "A distributed task queue, built to prove out the mechanics",
    category: "Backend · Distributed Systems", year: "2026",
    stack: ["FastAPI", "Redis", "PostgreSQL", "Python"],
    githubUrl: "https://github.com/harshrajput018/pyqueue",
    live: false, accent: "#3B5EA6", accentBg: "#EBF0FA",
    desc: "A priority-queue task system with a worker pool, exponential-backoff retries, and dead-lettering. Redis holds only job IDs; Postgres is the system of record for job status.",
    highlights: [
      "Lease-based crash recovery: workers renew a short-TTL Redis lease from a background thread independent of task execution",
      "A reaper sweep (SELECT FOR UPDATE SKIP LOCKED) detects and requeues orphaned jobs if a worker process dies mid-task",
      "Verified against a real hard-killed worker process (kill -9), not simulated",
      "20 passing tests against real Postgres/Redis, not mocks",
    ],
  },
  {
    id: "02", name: "KnowledgeHub AI", tagline: "A retrieval-augmented generation platform",
    category: "AI · Backend", year: "2026",
    stack: ["FastAPI", "pgvector", "Groq", "Python"],
    liveUrl: "https://knowledgehub-api.onrender.com/docs",
    githubUrl: "https://github.com/harshrajput018/knowledgehub",
    live: true, accent: "#8B4513", accentBg: "#FBF0E8",
    desc: "Upload documents, ask questions, get answers grounded in and cited to what was actually uploaded. Hybrid search fuses real BM25 lexical scoring with pgvector cosine similarity via Reciprocal Rank Fusion.",
    highlights: [
      "Streamed citation-grounded answers via Groq (LLaMA 3.3), required to cite sources for every claim",
      "Verified the system correctly refuses to answer questions outside the ingested documents instead of hallucinating",
      "Local embeddings (ONNX runtime, not torch) after a real production incident: torch OOM-killed the first deploy on Render's free tier",
      "21 passing tests, including one real (not mocked) LLM call",
    ],
  },
  {
    id: "03", name: "Sprintly", tagline: "Jira/Linear-style project management tool",
    category: "Full Stack · Real-time", year: "2026",
    stack: ["Next.js 16", "TypeScript", "Prisma", "PostgreSQL", "Socket.io", "Redis"],
    liveUrl: "https://jira-clone-web-seven.vercel.app",
    githubUrl: "https://github.com/harshrajput018/jira-clone",
    live: true, accent: "#3B5EA6", accentBg: "#EBF0FA",
    desc: "A Jira/Linear-style project management tool — organizations, projects, drag-and-drop kanban boards, comments, labels, full-text search, and live real-time collaboration across sessions.",
    highlights: [
      "Turborepo monorepo: Next.js web app + a dedicated Socket.io real-time service",
      "Redis pub/sub relay lets serverless functions publish domain events to the standalone socket server, authenticated per-session via short-lived JWTs",
      "Redis-backed rate limiting and CI running against real Postgres/Redis service containers",
      "Deployed across four managed services (Vercel, Render, Neon Postgres, Upstash Redis) with verified multi-stage Docker builds",
    ],
  },
  {
    id: "04", name: "Tiny Redis", tagline: "An in-memory key-value store, built from scratch",
    category: "Systems · Infra", year: "2026",
    stack: ["Node.js", "HTTP API", "AOF Persistence"],
    liveUrl: "https://tiny-redis.onrender.com",
    githubUrl: "https://github.com/harshrajput018/tiny-redis",
    live: true, accent: "#2A5C45", accentBg: "#EBF4EF",
    desc: "A Redis-inspired in-memory store built from scratch: TTL expiry, LRU eviction, and crash-safe persistence via an append-only log with compaction, exposed over an HTTP API with a live dashboard.",
    highlights: [
      "TTL expiry handled both lazily (on read) and actively (background sweep every 5s)",
      "LRU eviction piggybacks on Map's insertion order for touch-to-promote semantics",
      "Append-only log persistence with periodic snapshot compaction, same idea as Redis's AOF",
      "Built and documented as five independently runnable stages: core store, LRU, persistence, HTTP layer, AOF",
    ],
  },
  {
    id: "05", name: "Sentinel", tagline: "AI-powered code security auditor",
    category: "AI · DevTools", year: "2026",
    stack: ["React", "Node.js", "LLMs", "Monaco Editor", "Docker", "MongoDB"],
    liveUrl: "https://sentinel-lac-two.vercel.app",
    githubUrl: "https://github.com/harshrajput018/sentinel",
    live: true, accent: "#8B4513", accentBg: "#FBF0E8",
    desc: "Teams paste code or connect a GitHub repo for instant AI-driven security audits and refactoring. Built on Monaco Editor (VS Code engine) for professional in-browser code review with a diff viewer.",
    highlights: [
      "Security-focused LLM system prompt engineered for vulnerability reasoning",
      "One-Click Refactor diff viewer — preview changes before accepting",
      "Code Health Scores tracked over time in MongoDB to expose recurring issues",
      "Full stack containerized with Docker for environment parity",
    ],
  },
];

export const SKILLS = [
  { label: "Frontend",  icon: "◈", items: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS"] },
  { label: "Backend",   icon: "◉", items: ["Node.js", "Express.js", "REST APIs", "Socket.io"] },
  { label: "AI & ML",  icon: "◎", items: ["RAG Pipelines", "LLMs", "Groq API", "OpenAI API", "BM25 Search", "Prompt Engineering"] },
  { label: "Databases", icon: "◑", items: ["MongoDB", "Pinecone", "Redis"] },
  { label: "Languages", icon: "◐", items: ["JavaScript ES6+", "Python", "C++", "SQL"] },
  { label: "DevOps",    icon: "◒", items: ["Docker", "Git", "Vercel", "Render", "Postman"] },
];

export const EXPERIENCE = [
  {
    co: "Primus Softech Solutions LLP", role: "Software Developer",
    period: "Jan 2026 – Present", loc: "New Delhi", type: "Full-time",
    points: [
      "Contributing to development of the Centralized Coach Monitoring System (CCMS), a cross-platform Ionic React/TypeScript/Capacitor app giving real-time control over RMPU/AC systems, lighting, CCTV, and fault diagnostics across Vande Bharat trainsets.",
      "Built and automated the end-to-end Android release pipeline (Capacitor, Gradle, GitHub Actions), replacing a manual build-sign-version process with a single triggered workflow producing a consistent, repeatable APK on every release.",
      "Designed RESTful APIs (Node.js/Express, MVC pattern) and optimized SQL Server schemas for high-availability data exchange across coach subsystems.",
    ],
  },
  {
    co: "Infosys Ltd.", role: "Specialist Programmer",
    period: "Nov 2024 – Nov 2025", loc: "Bengaluru / Remote", type: "Full-time",
    points: [
      "Engineered a RAG-based internal search engine (Python, OpenAI CLIP) with vector embedding pipelines, retrieving semantically relevant context from unstructured enterprise data that keyword search alone missed.",
      "Integrated retrieved context directly into LLM-generated responses, replacing a keyword-only search flow with citation-backed answers for internal enterprise tooling.",
    ],
  },
];
