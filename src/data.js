export const ME = {
  email: "harshrajput18@gmail.com",
  linkedin: "https://www.linkedin.com/in/harsh-rajput-0542a4185/",
  github: "https://github.com/harshrajput018",
  phone: "+91 7827960243",
  stats: [
    { n: "3+",  label: "AI Projects Shipped" },
    { n: "1yr", label: "At Infosys" },
    { n: "5+",  label: "Tech Stacks" },
  ],
};

export const PROJECTS = [
  {
    id: "01", name: "EchoMind", tagline: "Chat with your documents using AI",
    category: "AI · Full Stack", year: "2026",
    stack: ["React", "Node.js", "MongoDB", "Groq", "RAG", "BM25"],
    liveUrl: "https://echomind-pi.vercel.app",
    githubUrl: "https://github.com/harshrajput018/echomind",
    live: true, accent: "#2A5C45", accentBg: "#EBF4EF",
    desc: "A full-stack 'Second Brain' — users upload PDFs and documents, then chat with their knowledge base through a custom-built RAG pipeline. Every AI response cites the exact source chunk.",
    highlights: [
      "Custom RAG + BM25 hybrid search — no paid vector DB needed",
      "Groq Llama 3.3 70B with enforced source attribution on every response",
      "JWT auth, multi-workspace support, real-time chunk indexing",
      "Deployed on Render + Vercel with MongoDB Atlas at zero infra cost",
    ],
  },
  {
    id: "02", name: "Visionary", tagline: "AI marketing campaigns from one prompt",
    category: "AI · Generative", year: "2026",
    stack: ["React", "Node.js", "Groq", "DALL-E 3", "Cloudinary", "MongoDB"],
    liveUrl: "https://visionary-eight-theta.vercel.app",
    githubUrl: "https://github.com/harshrajput018/visionary",
    live: true, accent: "#3B5EA6", accentBg: "#EBF0FA",
    desc: "A dashboard for social media managers that generates complete AI marketing campaigns — SEO captions via Llama 3.3 and studio-quality images via DALL-E 3 — from a single product description.",
    highlights: [
      "Brand Persona engine persists writing voice as a reusable prompt template",
      "Cloudinary CDN pipeline for image storage + MongoDB for campaign history",
      "One-click retrieval and re-publishing of past campaigns",
      "Full content consistency across all AI-generated assets",
    ],
  },
  {
    id: "03", name: "Sentinel", tagline: "AI-powered code security auditor",
    category: "AI · DevTools", year: "2025",
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
    co: "Infosys Ltd.", role: "Specialist Programmer",
    period: "Nov 2024 – Nov 2025", loc: "Bengaluru / Remote", type: "Full-time",
    points: [
      "Engineered an enterprise RAG search engine using Python & OpenAI CLIP — high-performance vector embedding pipelines that significantly improved semantic search across unstructured internal datasets.",
      "Integrated LLMs with indexed enterprise data to deliver context-aware responses and slash search latency.",
      "Optimized system architecture for scalable, robust AI-powered service deployment across internal platforms.",
    ],
  },
  {
    co: "Primus Softech LLP", role: "Frontend Developer Intern",
    period: "Jan 2024 – May 2024", loc: "New Delhi", type: "Internship",
    points: [
      "Built responsive React.js UI components optimized across mobile and desktop.",
      "Integrated RESTful APIs in collaboration with backend teams, improving system reliability.",
    ],
  },
];
