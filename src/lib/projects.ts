export type Project = {
  name: string;
  repoUrl: string;
  summary: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "Badgex Contract",
    repoUrl: "https://github.com/DiammdM/badgex-contract",
    summary:
      "Smart contracts for the Badgex NFT badge system (Solidity, Hardhat, Foundry).",
    tags: ["Solidity", "Foundry", "Hardhat"],
  },
  {
    name: "Badgex dApp",
    repoUrl: "https://github.com/DiammdM/badgex-dapp",
    summary:
      "Web3 dApp for the Badgex NFT badge system (Next.js, wagmi, viem, RainbowKit).",
    tags: ["Next.js", "wagmi", "viem"],
  },
  {
    name: "Ragify",
    repoUrl: "https://github.com/DiammdM/Ragify",
    summary:
      "Next.js RAG knowledge base with transformers, MongoDB, Qdrant, and multi-model chat.",
    tags: ["Next.js", "RAG", "Qdrant"],
  },
];
