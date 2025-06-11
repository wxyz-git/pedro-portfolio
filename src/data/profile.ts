export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  link?: string;
  githubLink?: string;
  date: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  technologies?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
  website?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ProfileData {
  name: string;
  title: string;
  summary: string;
  location: string;
  email: string;
  phone?: string;
  website?: string;
  socialLinks: SocialLink[];
  skills: Skill[];
  experiences: Experience[];
  education: Education[];
  projects: Project[];
  languages: { language: string; proficiency: string }[];
  interests?: string[];
}

const profileData: ProfileData = {
  name: "Pedro Heras",
  title: "Blockchain Developer & Security Specialist",
  summary: "A mentally curious individual with strong interest for challenges, consistently seeking novel projects with complex obstacles that others might hesitate to tackle. Driven by innovation in uncharted territories rather than conventional paths.",
  location: "Spain",
  email: "job@wxyz.is",
  phone: "(+34) 625279890",
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/pedro-heras/",
      icon: "FaLinkedin"
    },
    {
      platform: "GitHub",
      url: "https://github.com/wxyz-git",
      icon: "FaGithub"
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["Rust", "TypeScript", "Solidity"]
    },
    {
      category: "Web3",
      items: ["solana_sdk", "viem.sh", "alloy", "foundry"]
    },
    {
      category: "Backend",
      items: ["SQL (PostgreSQL, MySQL)", "Redis", "DuckDB", "gRPC"]
    },
    {
      category: "Blockchain",
      items: ["Solana", "Ethereum", "Layer 2", "DeFi", "NFTs", "Smart Contracts"]
    }
  ],
  experiences: [
    {
      id: "exp0",
      title: "Algorithmic Trading Developer",
      company: "Independent",
      startDate: "January 2024",
      endDate: "Present",
      description: [
        "Pioneered high-frequency trading infrastructure across Solana and EVM ecosystems",
        "Engineered a low-latency Rust trading bot with transaction construction of < 1ms and confirmation times of <200ms",
        "Developed a modular TypeScript trading bot interacting with standardized DeFi protocols",
        "Built cross-chain bridging functionality for seamless asset transfers between Ethereum and Layer 2",
        "Implemented high-performance data indexing solutions for real-time market analysis"
      ],
      technologies: ["Rust", "TypeScript", "Solana", "Ethereum", "DeFi", "Redis", "gRPC"]
    },
    {
      id: "exp1",
      title: "University Professor",
      company: "MSMK",
      startDate: "February 2024",
      endDate: "June 2024",
      description: [
        "Served as Professor in the Cybersecurity & Hacking degree program at MSMK University",
        "Delivered 'Cybersecurity (Crimes, Threats and Responses)' to a group of 25 students"
      ]
    },
    {
      id: "exp2",
      title: "Blockchain Cybersecurity Professor",
      company: "Boring Security",
      startDate: "August 2022",
      endDate: "April 2024",
      description: [
        "Delivered specialized blockchain security training to 30-person classes (+1500 alumni in total)",
        "Covered wallet security, seed phrases, OPSEC, transaction safety, and smart contract vulnerabilities",
        "Translated 10+ technical security articles to Spanish"
      ]
    },
    {
      id: "exp3",
      title: "Blockchain Solutions Consultant",
      company: "Solar Labs",
      startDate: "2023",
      endDate: "2024",
      description: [
        "Provided expert guidance in developing innovative blockchain solutions",
        "Focused on asset tokenization platforms and implementation strategies for emerging digital asset applications"
      ]
    },
    {
      id: "exp4",
      title: "Founder",
      company: "OFF Trust",
      startDate: "January 2022",
      endDate: "June 2023",
      description: [
        "Founded my first entrepreneurial venture importing goods from Asia and Turkey to European markets",
        "Developed crucial business skills through experience in international trade and supply chain management",
        "Established mutually beneficial partnerships with other companies by developing their online presence",
        "Created symbiotic relationships for importing, sharing factory contacts, and streamlining supply chains",
        "Traveled extensively throughout Turkey and Asia to identify source manufacturers directly"
      ]
    },
    {
      id: "exp5",
      title: "Internship",
      company: "Territorio Gaming",
      startDate: "April 2022",
      endDate: "June 2022",
      description: [
        "Supported strategic consultants at Territorio Gaming investment firm through technical assistance",
        "Provided support with Excel, custom scripts, and CRM system configuration",
        "Gained valuable experience in a high-performance professional environment"
      ]
    }
  ],
  education: [
    {
      id: "edu1",
      degree: "Advanced Technical Studies in Networked Computer System Administration",
      institution: "Universidad Alfonso X el Sabio",
      location: "Madrid, Spain",
      startDate: "September 2020",
      endDate: "June 2022",
      website: "https://www.uax.com/"
    },
    {
      id: "edu2",
      degree: "Technical Studies in Microcomputer Systems and Networks",
      institution: "La Salle",
      location: "Madrid, Spain",
      startDate: "September 2018",
      endDate: "June 2020",
      website: "https://lasallegrinon.es/"
    }
  ],
  projects: [
    {
      id: "proj1",
      title: "Algorithmic Cryptocurrency Trading",
      date: "January 2024 - April 2025",
      description: "Pioneered high-frequency trading infrastructure across Solana and EVM ecosystems.",
      technologies: ["Rust", "TypeScript", "Solana", "Ethereum", "DeFi"],
    },
    {
      id: "proj2",
      title: "Solana Virtual Machine (SVM) Trading Infrastructure",
      date: "2024",
      description: "Engineered a low-latency Rust trading bot with transaction construction of < 1ms and confirmation times of <200ms. Successfully integrated with multiple Solana DEXes including PumpFun, Raydium, PumpSwap.",
      technologies: ["Rust", "Solana", "DEX Integration"],
    },
    {
      id: "proj3",
      title: "Ethereum Virtual Machine (EVM) Trading Infrastructure",
      date: "2024",
      description: "Developed a modular TypeScript trading bot able to interact with nearly every standardized DeFi protocol (Uniswap, Solidly, Aave, Aerodrome, Kodiak...).",
      technologies: ["TypeScript", "Ethereum", "DeFi Protocols"],
    },
    {
      id: "proj4",
      title: "Trading Systems Architecture",
      date: "2024",
      description: "Built cross-chain bridging functionality enabling seamless asset transfers between Ethereum and Layer 2. Engineered high-performance trading infrastructure with Redis Pub/Sub for real-time analysis and a Rust execution engine achieving sub-400ms trades on Solana with 99.9% uptime.",
      technologies: ["Rust", "Redis", "Cross-chain", "Layer 2"],
    },
    {
      id: "proj5",
      title: "Data Indexing",
      date: "2024",
      description: "Architected and deployed a high-performance Rust application processing every transaction on Solana instantaneously via gRPCs. Implemented cross-chain indexing solutions using Subsquid framework for Ethereum Virtual Machine (EVM) compatibility.",
      technologies: ["Rust", "gRPC", "Subsquid", "Data Indexing"],
    },
    {
      id: "proj6",
      title: "NFT/Presales Trading Infrastructure",
      date: "2024",
      description: "Developed a cross-chain NFT/Presale acquisition system targeting opportunities across multiple EVM-compatible networks.",
      technologies: ["TypeScript", "NFT", "EVM", "Cross-chain"],
    }
  ],
  languages: [
    {
      language: "Spanish",
      proficiency: "Native"
    },
    {
      language: "English",
      proficiency: "B2"
    },
    {
      language: "German",
      proficiency: "A2"
    }
  ]
};

export default profileData; 