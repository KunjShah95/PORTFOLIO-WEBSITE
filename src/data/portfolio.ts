import { Project, Experience, SkillGroup, Education, UserIdentity, Social } from '../types';
import { Brain, Database, Terminal, Workflow, ExternalLink, Github, Twitter, Linkedin } from 'lucide-react';

export const IDENTITY: UserIdentity = {
    name: "Kunj Shah",
    persona: "AI Engineer & Systems Builder",
    location: "Ahmedabad, IN",
    contact: "kunjkshah05@gmail.com",
    focus: ["AI Systems", "Autonomous Agents", "MLOps", "Computer Vision"],
    github_username: "KunjShah95"
};

export const PROJECTS: Project[] = [
    {
        id: '01',
        title: 'CinePulse',
        category: 'NLP & RECOMMENDATION SYSTEMS',
        desc: 'Emotion-based movie recommender using NLP classification and embedding-based similarity matching for high-precision discovery.',
        tech: ['PYTHON', 'PYTORCH', 'TRANSFORMERS', 'VALD'],
        github: 'https://github.com/KunjShah95/CinePulse',
        slug: 'cinepulse',
        impact: 'PRODUCTION_READY',
    },
    {
        id: '02',
        title: 'GAP Miner',
        category: 'SEMANTIC INTELLIGENCE',
        desc: 'AI-powered skill gap analyzer leveraging semantic extraction from resumes and JDs to provide actionable learning paths.',
        tech: ['LLAMA-3', 'LANGCHAIN', 'FASTAPI', 'REACT'],
        github: 'https://github.com/KunjShah95/GAP-Miner',
        slug: 'gap-miner',
        impact: 'BETA_LIVE',
    },
    {
        id: '03',
        title: 'Railway Inspection',
        category: 'COMPUTER VISION',
        desc: 'Real-time wagon inspection system with multi-camera ingestion, motion deblurring, and low-light enhancement pipelines.',
        tech: ['C++', 'OPENCV', 'YOLOv8', 'vLLM'],
        github: 'https://github.com/KunjShah95/Railway-Inspection',
        slug: 'railway-inspection',
        impact: 'FIELD_TESTED',
    },
    {
        id: '04',
        title: 'UPI Fraud Guard',
        category: 'PREDICTIVE ANALYTICS',
        desc: 'Advanced transaction fraud detection system handling extreme class imbalance and anomaly detection with precision optimization.',
        tech: ['SCIKIT-LEARN', 'XGBOOST', 'PANDAS', 'FLASK'],
        github: 'https://github.com/KunjShah95/UPI-Fraud-Detection',
        slug: 'upi-fraud-guard',
        impact: 'ALGO_STABLE',
    }
];

export const EXPERIENCE: Experience[] = [
    {
        id: 'XP0',
        company: 'PHAZE_AI',
        role: 'AUTOMATION_INTERN',
        period: 'DEC 2025 — PRESENT',
        description: 'Developing automated agentic workflows for enterprise automation. Engineering autonomous scripts and multi-stage pipeline triggers.',
        skills: ['PYTHON', 'AGENTS', 'WORKFLOWS'],
    }
];

export const EDUCATION: Education[] = [
    {
        id: "ED01",
        school: "Indus University",
        degree: "B.Tech Computer Science [3rd Year]",
        period: "2023 - 2027",
        specialization: "Artificial Intelligence and Neural Networks.",
        location: "Ahmedabad, IN",
        summary: "Specializing in Artificial Intelligence and Neural Networks. Currently optimizing agentic workflows and local inference engines."
    }
];

export const SKILL_GROUPS: SkillGroup[] = [
    {
        category: 'Applied_GenAI',
        icon: Brain,
        description: 'Building practical semantic applications using modern LLM frameworks and orchestration tools.',
        skills: ['LangChain / CrewAI', 'RAG Pipelines', 'Prompt Engineering', 'Agent Workflows']
    },
    {
        category: 'Core_Machine_Learning',
        icon: Workflow,
        description: 'Solid academic foundation in neural networks, computer vision, and predictive modeling.',
        skills: ['PyTorch / TensorFlow', 'Computer Vision (OpenCV)', 'NLP / Transformers', 'Data Science (Pandas)']
    },
    {
        category: 'Full_Stack_Dev',
        icon: Terminal,
        description: 'Bridging the gap between AI models and user-facing applications with robust engineering.',
        skills: ['React / TypeScript', 'FastAPI / Python', 'Database Design', 'API Integration']
    },
    {
        category: 'DevOps_&_Tools',
        icon: Database,
        description: 'Proficiency in modern deployment workflows, version control, and cloud environments.',
        skills: ['Git / GitHub', 'Docker / Containers', 'Linux / Bash', 'Cloud Deployment']
    }
];

export const SOCIALS: Social[] = [
    {
        name: 'LINKEDIN',
        url: 'https://www.linkedin.com/in/kunjshah05',
        icon: Linkedin,
        label: 'PROFESSIONAL_SYNC'
    },
    {
        name: 'X_TWITTER',
        url: 'https://x.com/kunjshah_dev',
        icon: Twitter,
        label: 'SIGNAL_STREAM'
    },
    {
        name: 'GITHUB_V1',
        url: 'https://github.com/KunjShah95',
        icon: Github,
        label: 'CORE_REPOSITORY'
    },
    {
        name: 'GITHUB_V2',
        url: 'https://github.com/KunjShah01',
        icon: Github,
        label: 'RESEARCH_LABS'
    },
    {
        name: 'HUGGING_FACE',
        url: 'https://huggingface.co/kunjshah01',
        icon: ExternalLink,
        label: 'MODEL_VAULT'
    }
];
