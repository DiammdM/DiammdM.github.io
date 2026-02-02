export type Project = {
  slug: string;
  name: string;
  repoUrl: string;
  summary: string;
  tags: string[];
  details: {
    overview: string;
    highlights: string[];
    stack: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "badgex-contract",
    name: "Badgex Contract",
    repoUrl: "https://github.com/DiammdM/badgex-contract",
    summary:
      "Smart contracts for the Badgex NFT badge system (Solidity, Hardhat, Foundry).",
    tags: ["Solidity", "Foundry", "Hardhat"],
    details: {
      overview:
        "Smart contracts powering the Badgex NFT badge system, with a modern Ethereum dev workflow.",
      highlights: [
        "Built and tested with Foundry (forge) for fast iteration.",
        "Hardhat integration for scripting/tooling where needed.",
        "Typed TS SDK + typechain artifacts for safer frontend integration.",
      ],
      stack: ["Solidity", "Foundry", "Hardhat", "TypeScript"],
    },
  },
  {
    slug: "badgex-dapp",
    name: "Badgex dApp",
    repoUrl: "https://github.com/DiammdM/badgex-dapp",
    summary:
      "Web3 dApp for the Badgex NFT badge system (Next.js, wagmi, viem, RainbowKit).",
    tags: ["Next.js", "wagmi", "viem"],
    details: {
      overview:
        "A clean, production-style web3 frontend for minting/interacting with Badgex NFT badges.",
      highlights: [
        "Wallet connection and UX via RainbowKit.",
        "Chain interaction using wagmi + viem.",
        "Built on Next.js App Router with modern tooling.",
      ],
      stack: ["Next.js", "TypeScript", "wagmi", "viem", "RainbowKit"],
    },
  },
  {
    slug: "ragify",
    name: "Ragify",
    repoUrl: "https://github.com/DiammdM/Ragify",
    summary:
      "Next.js RAG knowledge base with transformers, MongoDB, Qdrant, and multi-model chat.",
    tags: ["Next.js", "RAG", "Qdrant"],
    details: {
      overview:
        "A Next.js RAG knowledge-base app with document ingestion, vector search, reranking, and model switching.",
      highlights: [
        "Document library with indexing progress and chunk-level retrieval.",
        "Vector search backed by Qdrant with optional cross-encoder reranking.",
        "Multi-model chat: OpenAI/Gemini/DeepSeek/Ollama, plus auth/roles.",
      ],
      stack: ["Next.js", "Tailwind", "MongoDB", "Qdrant", "Transformers"],
    },
  },
];
