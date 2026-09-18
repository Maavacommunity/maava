export type Runtime = "python" | "node" | "system";

export interface DependencyRequirement {
  label: string;
  detail: string;
}

export interface TutorialStep {
  title: string;
  detail: string;
}

export interface Tool {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  tags: string[];
  runtime: Runtime;
  rating: number;
  installs: string;
  author: string;
  verified: boolean;
  dependencies: DependencyRequirement[];
  tutorialSteps: TutorialStep[];
  videoTutorialUrl?: string;
  writtenGuideUrl?: string;
  repoUrl?: string;
}

export const tools: Tool[] = [
  {
    slug: "browser-use-ai",
    name: "Browser-Use AI",
    tagline: "Turn any LLM into a browser-controlling agent.",
    description:
      "Browser-Use AI connects a language model directly to a real Chromium browser so it can click, scroll, fill forms, and read pages the way a person would. Point it at a task in plain English and it drives the browser end to end.",
    category: "Browser Automation",
    tags: ["automation", "llm", "playwright"],
    runtime: "python",
    rating: 4.8,
    installs: "14,290+",
    author: "browser-use",
    verified: true,
    dependencies: [
      { label: "Python 3.11+", detail: "Managed automatically in an isolated environment" },
      { label: "Playwright + Chromium", detail: "Downloaded and sandboxed on first install" },
      { label: "LLM API key", detail: "OpenAI, Anthropic, or a local model" },
    ],
    tutorialSteps: [
      { title: "Install", detail: "Maava provisions Python, Playwright, and Chromium automatically." },
      { title: "Add a model key", detail: "Paste an API key or point it at a local model — stored in your encrypted vault." },
      { title: "Describe the task", detail: "Tell the agent what to do in plain English and watch it drive the browser." },
    ],
    videoTutorialUrl: "#",
    writtenGuideUrl: "#",
    repoUrl: "https://github.com/browser-use/browser-use",
  },
  {
    slug: "comfyui",
    name: "ComfyUI",
    tagline: "Node-based image and video generation, one click away.",
    description:
      "ComfyUI is a powerful, modular workflow engine for Stable Diffusion and other generative models. Maava installs the GPU-accelerated stack and ships ready-made workflow templates so you can start generating without touching a config file.",
    category: "Image & Video",
    tags: ["stable-diffusion", "gpu", "workflows"],
    runtime: "python",
    rating: 4.9,
    installs: "38,410+",
    author: "comfyanonymous",
    verified: true,
    dependencies: [
      { label: "Python 3.11+", detail: "Managed automatically in an isolated environment" },
      { label: "PyTorch + CUDA", detail: "GPU build selected automatically based on your hardware" },
      { label: "~8 GB disk", detail: "Model weights and cache" },
    ],
    tutorialSteps: [
      { title: "Install", detail: "Maava detects your GPU and installs the matching PyTorch/CUDA build." },
      { title: "Pick a starter workflow", detail: "Choose from bundled text-to-image and upscale templates." },
      { title: "Launch the UI", detail: "ComfyUI opens in your browser, fully wired to local models." },
    ],
    videoTutorialUrl: "#",
    writtenGuideUrl: "#",
    repoUrl: "https://github.com/comfyanonymous/ComfyUI",
  },
  {
    slug: "open-interpreter",
    name: "Open Interpreter",
    tagline: "A natural-language computer that can actually run code.",
    description:
      "Open Interpreter lets an LLM write and execute code on your machine to complete tasks — file cleanup, data analysis, quick scripts — all from a chat window.",
    category: "Coding Assistants",
    tags: ["llm", "automation", "cli"],
    runtime: "python",
    rating: 4.6,
    installs: "22,050+",
    author: "OpenInterpreter",
    verified: true,
    dependencies: [
      { label: "Python 3.11+", detail: "Managed automatically in an isolated environment" },
      { label: "LLM API key", detail: "OpenAI, Anthropic, or a local model" },
    ],
    tutorialSteps: [
      { title: "Install", detail: "Maava sets up a sandboxed Python environment." },
      { title: "Grant permissions", detail: "Choose what the agent is allowed to touch on your machine." },
      { title: "Chat with it", detail: "Ask it to do a task — it writes and runs the code for you." },
    ],
    videoTutorialUrl: "#",
    writtenGuideUrl: "#",
    repoUrl: "https://github.com/OpenInterpreter/open-interpreter",
  },
  {
    slug: "ollama-chatbox",
    name: "Ollama + Chatbox",
    tagline: "Private, fully local chat with open-weight models.",
    description:
      "Run open-weight LLMs entirely on your own hardware with Ollama, paired with a clean Chatbox front end. No account, no API key, no data leaving your machine.",
    category: "Local LLMs",
    tags: ["local", "privacy", "chat"],
    runtime: "system",
    rating: 4.7,
    installs: "31,900+",
    author: "ollama + chatboxai",
    verified: true,
    dependencies: [
      { label: "Ollama runtime", detail: "Installed and started automatically" },
      { label: "~4-8 GB disk per model", detail: "Model weights cached locally" },
    ],
    tutorialSteps: [
      { title: "Install", detail: "Maava installs the Ollama runtime for your OS." },
      { title: "Pull a model", detail: "Pick a model size that fits your RAM/VRAM." },
      { title: "Chat", detail: "Chatbox opens pointed at your local model — fully offline." },
    ],
    videoTutorialUrl: "#",
    writtenGuideUrl: "#",
  },
  {
    slug: "crewai-flow-runner",
    name: "CrewAI Flow Runner",
    tagline: "Coordinate a team of agents on one task.",
    description:
      "CrewAI orchestrates multiple specialized agents — researcher, writer, reviewer — that collaborate to complete a task, with Maava handling the local worker queue.",
    category: "Multi-Agent",
    tags: ["multi-agent", "orchestration"],
    runtime: "python",
    rating: 4.4,
    installs: "9,120+",
    author: "crewAIInc",
    verified: false,
    dependencies: [
      { label: "Python 3.11+", detail: "Managed automatically in an isolated environment" },
      { label: "LLM API key", detail: "OpenAI, Anthropic, or a local model" },
    ],
    tutorialSteps: [
      { title: "Install", detail: "Maava sets up the crew runtime and local task queue." },
      { title: "Pick a crew template", detail: "Start from a research, content, or support crew." },
      { title: "Run it", detail: "Give it a goal and watch the agents hand off work to each other." },
    ],
    videoTutorialUrl: "#",
    writtenGuideUrl: "#",
    repoUrl: "https://github.com/crewAIInc/crewAI",
  },
  {
    slug: "hello-agent",
    name: "Hello Agent (Demo)",
    tagline: "A tiny bundled agent used to prove the install → launch pipeline.",
    description:
      "A minimal local demo agent bundled with Maava itself. It has no external dependencies, so it installs and launches instantly — useful for verifying the desktop app's install and launch pipeline end to end.",
    category: "Demo",
    tags: ["demo", "bundled"],
    runtime: "python",
    rating: 5,
    installs: "bundled",
    author: "maava",
    verified: true,
    dependencies: [{ label: "Python 3.9+", detail: "Uses only the standard library" }],
    tutorialSteps: [
      { title: "Install", detail: "Maava creates a local virtual environment — no downloads needed." },
      { title: "Launch", detail: "The agent prints a greeting and a few log lines, then exits." },
    ],
  },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getCategories(): string[] {
  return Array.from(new Set(tools.map((t) => t.category)));
}
