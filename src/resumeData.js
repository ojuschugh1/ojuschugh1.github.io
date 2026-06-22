const resumeData = {
  name: "OJUS CHUGH",
  tagline: "Software Engineer | High-Scale Distributed Systems | Open Source Fellow | GSoC Alum",
  professionalSummary:
    "Software Engineer building high-scale distributed delivery systems serving millions of customers. Open source advocate with contributions to the Linux Foundation, Eclipse Foundation, and Google Summer of Code. Passionate about building reliable distributed systems, developer tooling, and bridging technological divides — shaped by growing up in a small town in India with limited resources.",
  contact: {
    email: "ojuschugh@gmail.com",
    location: "India",
    github: "https://github.com/ojuschugh1",
    website: "https://ojuschugh.netlify.app/",
    GSoC: "https://summerofcode.withgoogle.com/archive/2023/projects/R3i5iNpL",
    Medium: "https://medium.com/@ojuschugh1"
  },
  education: [
    {
      degree: "B.Tech in Information Technology",
      period: "June 2020 – June 2024",
      institution: "Jaypee Institute of Information Technology, Noida",
      details: ""
    }
  ],
  workExperience: [
    {
      title: "Software Engineer I (SDE-I)",
      company: "High-Scale Distributed Systems",
      period: "December 2025 – Present",
      location: "Retail Delivery Experience",
      details: [
        "Build and operate high-scale same-day delivery systems serving millions of customers across multiple marketplaces.",
        "Owned end-to-end feature lifecycle including design, implementation, testing, deployment, monitoring, and post-launch validation.",
        "Increased delivery slot availability through a controlled experiment rollout, improving key customer experience metrics by ~80%.",
        "Contributed to a new storefront launch across multiple international marketplaces, driving ~60% growth in subscriptions and ~80% improvement in retention.",
        "Resolved 10+ high-severity production incidents and implemented automated diagnostics to reduce recurring issue resolution time.",
        "Implemented an ML-based basket recommendation system to improve conversion rates.",
        "Built generative-AI–driven automation for region onboarding, reducing operational effort."
      ]
    },
    {
      title: "Open Source Fellow",
      company: "Linux Foundation",
      period: "June 2025 – September 2025",
      location: "IBM Zowe · Open Mainframe Project",
      details: [
        "Architected and implemented an open-source Go SDK for IBM Zowe (Open Mainframe z/Explore), providing reliable, cross-platform developer tooling from scratch.",
        "Added comprehensive unit and integration tests and set up CI pipelines to improve stability and increase downstream adoption.",
        "Collaborated with the open-source community to drive contributor confidence and project adoption."
      ]
    },
    {
      title: "Associate Technical Consultant – AI/ML",
      company: "SAS Inc.",
      period: "April 2024 – November 2025",
      details: [
        "Spearheaded design and implementation of Multi-Agent Systems and RAG for global pharmaceutical projects.",
        "Fine-tuned and deployed advanced LLMs (Mistral 7B, LLaVA, Llama 2, GPT-4) for healthcare and fraud risk detection.",
        "Built custom deduplication, hashing, and tampering algorithms; integrated SAS Viya with AWS/Azure.",
        "Collaborated with international teams using Docker, Linux, SSH, and batch jobs; reduced fraud by 60%.",
        "Designed user interfaces to present SAS Viya analytics results to customers through secure APIs."
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Eutech Cybernetics (Singapore)",
      period: "Dec 2023 – Apr 2024",
      details: [
        "Developed cloud-based smart appliance monitoring software with a focus on scalability and performance.",
        "Enhanced UI and optimized back-end services using AWS, Golang, TypeScript, and React.",
        "Contributed to IoT and embedded systems projects with real-time data processing."
      ]
    },
    {
      title: "Software Developer – Google Summer of Code",
      company: "Eclipse Foundation",
      period: "Apr 2023 – Sep 2023",
      details: [
        "Selected for Google Summer of Code out of 43,765 participants; contributed 450+ hours to Eclipse Cargo Tracker.",
        "Led upgrade from Jakarta EE 8 to Jakarta EE 10 and Payara 6.",
        "Collaborated with industry leaders to improve UI/UX and compatibility with VS Code and Eclipse.",
        "Recognized as the second highest contributor on the project."
      ]
    }
  ],
  openSourceContributions: [
    {
      repo: "Eclipse Cargo Tracker (GSoC 2023)",
      icon: "☀️",
      repoUrl: "https://github.com/eclipse-ee4j/cargotracker",
      description: "Jakarta EE reference application — selected for Google Summer of Code 2023 out of 43,765 participants. 450+ hours contributed, second highest contributor.",
      contributions: [
        {
          title: "Jakarta EE 10/Payara 6 Migration — main GSoC deliverable (merged)",
          link: "https://github.com/eclipse-ee4j/cargotracker/pull/272"
        },
        {
          title: "Initial Jakarta EE 10/Payara 6 migration attempt",
          link: "https://github.com/eclipse-ee4j/cargotracker/pull/268"
        },
        {
          title: "Updated GitHub Pages instructions for VS Code IDE",
          link: "https://github.com/eclipse-ee4j/cargotracker/pull/264"
        },
        {
          title: "Updated README from Eclipse IDE to VS Code",
          link: "https://github.com/eclipse-ee4j/cargotracker/pull/263"
        },
        {
          title: "Documented VS Code setup for Payara Server",
          link: "https://github.com/eclipse-ee4j/cargotracker/pull/261"
        },
        {
          title: "Reported link/rendering bug in live map",
          link: "https://github.com/eclipse-ee4j/cargotracker/issues/270"
        },
        {
          title: "Reported Jakarta EE 10 compatibility issue on Payara Forum",
          link: "https://forum.payara.fish/t/jakarta-ee-10-project-not-working-yet-in-eclipse-ide-using-payara-6-server/615"
        }
      ]
    },
    {
      repo: "Redox OS",
      icon: "🦀",
      repoUrl: "https://gitlab.redox-os.org/redox-os/redox",
      description: "Unix-like operating system written in Rust, focused on safety and reliability.",
      contributions: [
        {
          title: "Fix hosting source code of dependencies for offline cargo build",
          link: "https://gitlab.redox-os.org/redox-os/redox/-/merge_requests/1952"
        },
        {
          title: "Skip gcc test suite build to speed up compilation",
          link: "https://gitlab.redox-os.org/redox-os/redox/-/merge_requests/1884"
        },
        {
          title: "Fix REPO_BINARY=1 source dependency propagation",
          link: "https://gitlab.redox-os.org/redox-os/redox/-/merge_requests/1777"
        },
        {
          title: "Add commit-hash.sh for recipe troubleshooting",
          link: "https://gitlab.redox-os.org/redox-os/redox/-/merge_requests/1776"
        },
        {
          title: "Add mount script for RedoxFS partitions in dual-boot setups",
          link: "https://gitlab.redox-os.org/redox-os/redox/-/merge_requests/1746"
        },
        {
          title: "Add Redox target with package manager support to native_bootstrap.sh",
          link: "https://gitlab.redox-os.org/redox-os/redox/-/merge_requests/1718"
        }
      ]
    },
    {
      repo: "VLC Media Player",
      icon: "🎬",
      repoUrl: "https://code.videolan.org/videolan/vlc",
      description: "Popular open-source cross-platform multimedia player used by millions worldwide.",
      contributions: [
        {
          title: "Fix middle mouse wheel rewind issue in Qt interface",
          link: "https://code.videolan.org/videolan/vlc/-/merge_requests/8219"
        },
        {
          title: "Fix reference error in Qt interface",
          link: "https://code.videolan.org/videolan/vlc/-/merge_requests/8218"
        },
        {
          title: "Add missing tooltip for play button control",
          link: "https://code.videolan.org/videolan/vlc/-/merge_requests/7620"
        }
      ]
    },
    {
      repo: "Rust Lang (Cargo + Forge)",
      icon: "⚙️",
      repoUrl: "https://github.com/rust-lang/cargo",
      description: "Rust's official package manager and build system. 7 merged PRs across Cargo and Rust Forge — from git gc optimization to improved error messages shipped in Rust 1.91–1.96.",
      contributions: [
        {
          title: "Let git decide when to run gc — remove duplicated packfile counting logic (merged)",
          link: "https://github.com/rust-lang/cargo/pull/16459"
        },
        {
          title: "Support --filter-platform=host for cargo metadata (merged)",
          link: "https://github.com/rust-lang/cargo/pull/16312"
        },
        {
          title: "Add more context to publish-failed error message for workspaces (merged)",
          link: "https://github.com/rust-lang/cargo/pull/15879"
        },
        {
          title: "Fix error while running cargo clippy --all-targets (merged)",
          link: "https://github.com/rust-lang/cargo/pull/15843"
        },
        {
          title: "Clarify that cargo doc --no-deps is cumulative and won't delete prev docs (merged)",
          link: "https://github.com/rust-lang/cargo/pull/15800"
        },
        {
          title: "Rust Forge — Added description for backport process (merged)",
          link: "https://github.com/rust-lang/rust-forge/pull/925"
        },
        {
          title: "Rust Forge — Update Ubuntu LTS from 18.04 to 20.04 for self-hosting docs (merged)",
          link: "https://github.com/rust-lang/rust-forge/pull/924"
        }
      ]
    },
    {
      repo: "pgmpy — Probabilistic Graphical Models",
      icon: "📊",
      repoUrl: "https://github.com/pgmpy/pgmpy",
      description: "Python library for probabilistic graphical models — Bayesian Networks, Markov Models, and more.",
      contributions: [
        {
          title: "Refactor test_FactorSet and test_FactorDict to pytest style (merged)",
          link: "https://github.com/pgmpy/pgmpy/pull/2703"
        }
      ]
    },
    {
      repo: "Ethereum Protocol Studies",
      icon: "⟠",
      repoUrl: "https://github.com/eth-protocol-fellows/protocol-studies",
      description: "Ethereum Protocol Fellowship wiki — educational resource for Ethereum protocol development.",
      contributions: [
        {
          title: "Added The Verge, The Purge, and The Splurge sections to the roadmap wiki (merged)",
          link: "https://github.com/eth-protocol-fellows/protocol-studies/pull/432"
        }
      ]
    },
    {
      repo: "p5.js Web Editor",
      icon: "🎨",
      repoUrl: "https://github.com/processing/p5.js-web-editor",
      description: "Browser-based creative coding editor by the Processing Foundation — used by artists and educators worldwide.",
      contributions: [
        {
          title: "I18n sync — Hindi locale translations for account settings (merged)",
          link: "https://github.com/processing/p5.js-web-editor/pull/3523"
        }
      ]
    },
    {
      repo: "IBM Zowe Go SDK (LFX Mentorship)",
      icon: "🖥️",
      repoUrl: "https://github.com/zowe",
      description: "Open Mainframe Project — Linux Foundation mentorship. Built a production-grade Go SDK for IBM z/OS from scratch.",
      contributions: [
        {
          title: "Architected and built the entire Go SDK from scratch",
          link: "https://github.com/zowe"
        },
        {
          title: "Implemented dataset management, job management, and auth APIs",
          link: "https://mentorship.lfx.linuxfoundation.org/project/8ca351b0-168d-4b89-87ec-3a37a3c77cd1"
        },
        {
          title: "Added comprehensive unit & integration tests with CI pipelines",
          link: "https://github.com/zowe"
        },
        {
          title: "Enabled cross-platform developer tooling for mainframe systems",
          link: "https://openmainframeproject.org/blog/summer-mentorship-2025-ojus-chugh/"
        }
      ]
    },
    {
      repo: "Other Contributions",
      icon: "🌐",
      repoUrl: "https://github.com/ojuschugh1",
      description: "Active contributor across the open-source ecosystem — Adoptium, Sugar Labs, Oh My Bash, and more.",
      contributions: [
        {
          title: "Adoptium — Updated migration table content for JDK 11 and above (merged)",
          link: "https://github.com/adoptium/archive---adoptium.net/pull/1928"
        },
        {
          title: "Sugar Labs Musicblocks — Documentation for right-click context menu (merged)",
          link: "https://github.com/sugarlabs/musicblocks/pull/3235"
        },
        {
          title: "Oh My Bash — Reported autosuggestion support feature request",
          link: "https://github.com/ohmybash/oh-my-bash/issues/108"
        }
      ]
    }
  ],
  writing: [
    {
      title: "We Stopped Checking",
      outlet: "Medium",
      blurb:
        "AI agents have learned to narrate their own work convincingly, and we have quietly started trusting the narration instead of checking it. On the gap between what a system does and what it tells you it did — and the accountability infrastructure nobody owns.",
      tags: ["AI Agents", "Verification", "Essay"],
      link: "https://medium.com/@ojuschugh1/we-stopped-checking-c5bfe3d3b106"
    },
    {
      title: "The Context Economy",
      outlet: "Medium",
      blurb:
        "The scarce resource in AI coding is not intelligence, it is attention. Why agents drown in their own intake, why we built the tools for a reader who could skim, and what scarcity quietly does to how a system behaves.",
      tags: ["AI Agents", "Context", "Essay"],
      link: "https://medium.com/@ojuschugh1/the-context-economy-d0182f791653"
    },
    {
      title: "sqz Technical Whitepaper",
      outlet: "In-repo · LaTeX",
      blurb:
        "Architecture, validation methodology, and compression benchmarks for sqz — an 8-stage instrumentation and compression pipeline for AI agent tool output, validated with 586 tests and 60 property-based proofs.",
      tags: ["Whitepaper", "Systems", "Measurement"],
      link: "https://github.com/ojuschugh1/sqz/blob/main/docs/whitepaper.md"
    },
    {
      title: "Mastering Performance Optimization in React Applications",
      outlet: "Medium",
      blurb:
        "A practical deep-dive into making React apps faster — rendering behavior, memoization, and the trade-offs that actually move the needle in production interfaces.",
      tags: ["React", "Performance", "Engineering"],
      link: "https://medium.com/@ojuschugh1/mastering-performance-optimization-in-react-applications-6b7449f8fc95"
    },
    {
      title: "GSoC 2023 Work Product — Jakarta EE 8 to 10 Upgrade",
      outlet: "Medium",
      blurb:
        "Structured technical report on the Eclipse Cargo Tracker migration completed during Google Summer of Code 2023, covering the upgrade path and compatibility work.",
      tags: ["Open Source", "Report"],
      link: "https://medium.com/@ojuschugh1/gsoc23-work-product-submission-a9d8cabd53c"
    }
  ],
  projects: [
    {
      title: "Go SDK – IBM Open Mainframe Zowe",
      description:
        "Built a production-grade open-source Go SDK for IBM's Zowe project from scratch. Includes comprehensive testing, CI pipelines, and cross-platform support.",
      technologies: ["Go", "CI/CD", "REST APIs", "Open Source"],
      link: "https://github.com/zowe"
    },
    {
      title: "Open Library – Book Search App",
      description:
        "React-based web application integrating the Open Library API with efficient search algorithms and responsive UI.",
      technologies: ["React", "RESTful APIs", "SCSS"],
      link: "https://ojuschugh26-open-library.netlify.app/"
    },
    {
      title: "Being Social – Social Network",
      description:
        "Full-stack MERN application with robust authentication, content recommendation, and mobile responsiveness.",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      link: "https://github.com/ojuschugh1/BeingSocial"
    },
    {
      title: "Movie Recommendation System",
      description:
        "Content-based recommendation engine using Python and ML — analyzes genre, director, and cast sentiment for personalized suggestions.",
      technologies: ["Python", "scikit-learn", "NLP"],
      link: "https://github.com/ojuschugh1/Movie-Recommendation-System-using-Machine-Learning-with-Python"
    },
    {
      title: "Multi-Disease Prediction System",
      description:
        "Predictive analytics platform for diabetes, heart disease, and Parkinson's using various ML models with a Streamlit UI.",
      technologies: ["Python", "Streamlit", "ML"],
      link: "https://github.com/ojuschugh1/Multiple-disease-prediction-using-different-machine-learning-algorithms"
    }
  ],
  keySkills: {
    languages: ["Java", "Python", "Go", "Rust", "C", "C++", "JavaScript", "TypeScript", "SQL"],
    frameworks: ["React", "Node.js", "Express.js", "MERN Stack", "Jakarta EE"],
    cloud: ["AWS", "Azure", "Docker", "CI/CD", "Linux"],
    ai: ["LLMs", "RAG", "Multi-Agent Systems", "Generative AI", "PyTorch", "ML/AI"],
    tools: ["Git", "Open Source", "Troubleshooting", "System Design"]
  },
  certifications: [
    "HTML, CSS, & JavaScript for Beginners",
    "Practical Web Design & Development: 7 Courses in 1",
    "SQL Masterclass: SQL for Data Analytics"
  ],
  achievements: [
    "Software Engineer — building high-scale distributed systems serving millions of customers",
    "Linux Foundation Open Source Fellow — Go SDK for IBM Zowe",
    "Google Summer of Code — 450+ hours contributing to Eclipse Cargo Tracker",
    "Head Boy in school (2018–2019)",
    "Recognized for exceptional performance on Hackerrank, LeetCode, and StackOverflow"
  ],
  hobbies: [
    "Android development — published 3 apps on the Play Store (400+ downloads in < 1 month)",
    "Reading research papers and staying updated on new technologies"
  ]
};

export default resumeData;
