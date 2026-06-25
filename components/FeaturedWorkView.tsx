import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { useSmoothScroll } from './useSmoothScroll';

export const PROJECTS = [
  "Aurial",
  "Porta",
  "Melodeo",
  "Anystyle AI",
  "Medik",
  "Penuel Samuel",
  "Chinwe Ekeke",
  "Probe (Clinical Research AI)",
  "Chorezen"
];

export interface ProjectSection {
  title: string;
  body: string;
}

export interface ProjectContent {
  description: string;
  categories: string[];
  images?: string[];
  verticalImages?: string[];
  carouselImage?: string;
  links?: { label: string; url: string }[];
  overview?: string; // Keep for simple text
  sections?: ProjectSection[]; // New structured content
}

export const PROJECT_DATA: Record<string, ProjectContent> = {
  "Aurial": {
    description: "Aurial is a modern collection of audio production tools. The project explores how complex audio engineering concepts can be made approachable through thoughtful interface design, intuitive visual feedback, and a modular plugin architecture.",
    categories: ["Audio Tools", "Mobile App"],
    carouselImage: "https://raw.githubusercontent.com/gbunmi/images/main/Aurial.png",
    images: [
      "https://raw.githubusercontent.com/gbunmi/images/main/Aurial%201.jpg",
      "https://raw.githubusercontent.com/gbunmi/images/main/Aurial%202.jpg",
      "https://raw.githubusercontent.com/gbunmi/images/main/Aurial%203.jpg",
      "https://raw.githubusercontent.com/gbunmi/images/main/Aurial%204.jpg",
      "https://raw.githubusercontent.com/gbunmi/images/main/Aurial%205.jpg",
      "https://raw.githubusercontent.com/gbunmi/images/main/Aurial%206.jpg",
      "https://raw.githubusercontent.com/gbunmi/images/main/Aurial%207.jpg",
      "https://raw.githubusercontent.com/gbunmi/images/main/Aurial%208.jpg",
      "https://raw.githubusercontent.com/gbunmi/images/main/Aurial%209.jpg",
      "https://raw.githubusercontent.com/gbunmi/images/main/Aurial%2010.jpg",
      "https://raw.githubusercontent.com/gbunmi/images/main/Aurial%2011.jpg"
    ],
    links: []
  },
  "Anystyle AI": {
    description: "AnyStyle AI is a photo restyling app that transforms images instantly. Users pick a style to get a polished new version of their photo without complex prompts, making artistic variations fast and accessible.",
    categories: ["Mobile App"],
    carouselImage: "https://raw.githubusercontent.com/gbunmi/images/main/Medik%20New.jpg",
    images: [
      "https://raw.githubusercontent.com/gbunmi/images/main/Anystyle%20Cover.png"
],
    links: [
      { label: "Visit Website ↗", url: "https://anystyle.blendingbytes.com/" }
    ],
    overview: "Detailed overview coming soon."
  },
  "Euterpe": {
    description: "Euterpe is a next-generation web application designed to simplify financial workflows. It streamlines transactions and reporting with an intuitive interface and clear visualizations.",
    categories: ["Web App"],
    images: [],
    links: [
      { label: "Visit Website ↗", url: "https://euterpe.finance" }
    ],
    overview: "Detailed overview coming soon."
  },
  "Talestream": {
    description: "Talestream is an AI-powered storytelling mobile application that transforms raw ideas into engaging audio narratives. It enables content creators and individuals to share stories seamlessly.",
    categories: ["Mobile App"],
    images: [],
    links: [
      { label: "Visit Website ↗", url: "https://Talestream.ai" }
    ],
    overview: "Detailed overview coming soon."
  },
  "Probe (Clinical Research AI)": {
    description: "Probe is an AI-powered assistant designed for clinical researchers to analyze complex medical data and manage trials. It streamlines protocol analysis and matches participants to simplify trial workflows.",
    categories: ["Web App"],
    carouselImage: "https://raw.githubusercontent.com/gbunmi/images/main/Medik.png",
    images: [
      "https://raw.githubusercontent.com/gbunmi/images/main/AI%20Assistant%20(1).png"
    ],
    links: [],
    sections: [
      {
        title: "Context",
        body: "I designed an AI Assistant embedded within a clinical research platform to help research teams plan studies, analyze protocols, and make faster, more informed decisions across the study lifecycle. The assistant supports tasks like study planning, literature discovery, participant matching, and study analysis. The goal was to reduce setup time, improve study quality, and remove friction caused by manual research, fragmented tools, and complex workflows."
      },
      {
        title: "The Problem",
        body: "Clinical research teams spend significant time interpreting complex protocol documents, planning studies without clear guidance on feasibility, searching and validating relevant literature, and coordinating tasks, timelines, and resources manually. These processes are slow, error-prone, and often require switching between multiple tools. New users especially struggle with knowing what to do next when setting up or managing a study."
      },
      {
        title: "The Goal",
        body: "Design an AI assistant that guides users through study setup and execution, surfaces actionable insights, and fits naturally into existing workflows. It needs to feel trustworthy, clear, and non-intrusive. Success meant users could move faster, make fewer mistakes, and feel more confident managing their studies."
      },
      {
        title: "Key Modules",
        body: `The AI Assistant is delivered through clearly defined modules:

1. Study Plan Generator
Users provide core study details and available team resources. The AI generates a structured study plan with tasks, timelines, and milestones.
{{IMAGE:https://raw.githubusercontent.com/gbunmi/images/main/Study%20Plan.jpg}}

2. Study Analyzer
Reviews uploaded protocol documents. Identifies study gaps, risks, and improvement opportunities.
{{IMAGE:https://raw.githubusercontent.com/gbunmi/images/main/Study%20Analyzer.jpg}}

3. Literature Finder
Allows users to enter multiple keywords. Surfaces relevant research articles with filters for study type, therapy area, and publication date.
{{IMAGE:https://raw.githubusercontent.com/gbunmi/images/main/Literature%20Finder.jpg}}

4. Participant Matcher
Matches participants to studies using inclusion and exclusion criteria. Provides a match or eligibility score to support screening decisions.
{{IMAGE:https://raw.githubusercontent.com/gbunmi/images/main/Participant%20Match.jpg}}

5. Questionnaire Generator
Generates study-specific questions. Allows users to select, regenerate, and save preferred questions before final submission.

6. E-Consent Generator
Creates participant-friendly electronic consent forms. Ensures compliance while maintaining clarity for participants.
{{IMAGE:https://raw.githubusercontent.com/gbunmi/images/main/E%20consent.jpg}}

7. Compliance Monitor
Continuously tracks study activities against regulatory and protocol requirements. Flags potential compliance risks, deviations, and missing documentation.
{{IMAGE:https://raw.githubusercontent.com/gbunmi/images/main/Compliance%20(1).jpg}}

8. Regulatory Document Generator
Generates required regulatory documents based on study details and region. Helps teams stay audit-ready with consistent, compliant documentation.`
      },
      {
        title: "Design Approach",
        body: `1. AI as a Guide, Not a Replacement
I designed the assistant to support decision-making rather than automate it fully. Outputs are presented as suggestions, summaries, or recommendations, always allowing users to review and adjust.

2. Progressive Disclosure
Instead of overwhelming users with AI capabilities upfront, the assistant appears contextually and each tool focuses on one clear job. Advanced options are revealed only when needed.

3. Trust & Transparency
To build confidence, AI outputs are clearly labeled, recommendations include explanations, and users can trace insights back to their inputs or documents.`
      },
      {
        title: "Design Decisions",
        body: `1. Clear Entry Points
Each AI tool lives behind a clear action like "Generate Study Plan" or "Analyze Study". This avoids ambiguity and sets expectations early.

2. Structured Inputs
AI accuracy depends on input quality. I used guided forms instead of free text where possible, along with examples and helper text to ensure the model has the right context.

3. Review Before Action
AI-generated content is never auto-applied. Users must review, select, and confirm. This was especially important for high-stakes tasks like questionnaire generation and protocol analysis.`
      }
    ]
  },
  "Porta": {
    description: "Porta is an AI-powered scene generation app that allows users to place themselves into custom environments instantly. It offers intuitive templates and social remix tools for hassle-free creation.",
    categories: ["Mobile App"],
    carouselImage: "https://raw.githubusercontent.com/gbunmi/images/main/Porta.jpg",
    images: [
       "https://raw.githubusercontent.com/gbunmi/images/main/Porta%20Cover.png"
    ],
    links: [
      { label: "Visit Website ↗", url: "https://www.useporta.app" }
    ],
    sections: [
      {
        title: "Context",
        body: "Creating AI-generated images usually requires writing prompts, tweaking settings, and experimenting endlessly. Porta changes that by letting users instantly place themselves into any scene using their own photos or existing templates. The app combines personal creativity with community-driven inspiration, making image generation intuitive and social."
      },
      {
        title: "My Role",
        body: "Product designer responsible for defining the user experience, crafting interaction flows, designing the interface, and developing the visual system for both creation and social engagement."
      },
      {
        title: "The Problem",
        body: "Writing prompts for AI generation can be intimidating or time-consuming. Users often get stuck trying to describe exactly what they want. Porta needed to remove that friction and let people generate images seamlessly, while also providing a social layer for sharing, exploring, and engaging with others’ creations."
      },
      {
        title: "What I Did",
        body: `1. Clarified the product story
I defined Porta’s core purpose: let anyone generate images by placing themselves into existing scenes without needing to write prompts. This shaped all flows, from creation to discovery and social interaction.

2. Designed the creation experience
{{IMAGE:https://raw.githubusercontent.com/gbunmi/images/main/Porta%20Screens%201%20(1).png}}
Users can:
• generate images using preset scenes or templates from other users
• upload their own photo to insert themselves into a scene
• adjust placement, perspective, and style

The experience emphasizes simplicity and instant visual feedback, so users feel in control without complexity.

3. Interaction model and app structure
{{IMAGE:https://raw.githubusercontent.com/gbunmi/images/main/Porta%20Screens%202.png}}
I organized Porta around three main spaces:
• Create, the main workspace for generating and customizing scenes
• Feed, a discovery layer to browse, like, and comment on community creations
• Profile, a personal space to manage created images, saved templates, and interactions

This keeps navigation clear and focused on the core behaviors: create, explore, engage.

4. Community and social features
{{IMAGE:https://raw.githubusercontent.com/gbunmi/images/main/Porta%20Screens%203.png}}
I designed interactions that encourage engagement:
• posting creations with captions
• liking and commenting on other users’ work
• browsing templates and remixing community images

The social layer amplifies creativity and makes templates reusable, encouraging exploration and collaboration.

5. Visual identity and design system
I developed a visual language to support creativity:
• clean, minimal interface to keep attention on the images
• intuitive icons and controls for scene manipulation
• consistent typography and spacing for readability across creation and social feeds

6. Prototyping and validation

Interactive prototypes covered the creation workflow, template browsing, and social feed. User testing focused on clarity, ease of placement, and discoverability of templates. Feedback informed refinements to navigation, placement tools, and visual hierarchy.`
      },
      {
        title: "Outcomes",
        body: "Porta enables users to generate images in seconds by leveraging templates or preset scenes, skipping the need for prompts. The social layer fosters discovery, inspiration, and engagement. Users can experiment freely, remix community creations, and share their unique moments."
      }
    ]
  },

  "Melodeo": {
    description: "Melodeo is an AI-powered music creation platform featuring context-driven generation modules and a built-in player. It simplifies songwriting and provides synced lyrics for a cohesive experience.",
    categories: ["Mobile App"],
    carouselImage: "https://raw.githubusercontent.com/gbunmi/images/main/Melodeo%202%20(1).png",
    images: [
       "https://raw.githubusercontent.com/gbunmi/images/main/Melodeo%20Cover.png"
    ],
    links: [
       { label: "Visit Website ↗", url: "https://www.melodeo.app/" }
    ],
    sections: [
      {
        title: "Context",
        body: "Creating music can feel complex, especially for casual users. Melodeo addresses this by offering AI-powered modules like HookSong, Apology Jukebox, and more, while also supporting abstract prompts for open-ended creativity. Users can generate music instantly, save it in a personal library, and listen back with a full-featured music player and lyrics display."
      },
      {
        title: "My Role",
        body: "Product designer responsible for defining the interaction model, designing end-to-end flows for modules and abstract prompts, crafting the interface for creation and playback, and establishing a cohesive visual and experiential identity."
      },
      {
        title: "The Problem",
        body: "Traditional music creation tools require technical skill or careful prompt crafting. Users wanted a simple way to generate music for specific contexts or explore abstract ideas, with the ability to revisit, listen, and interact with their creations in one place."
      },
      {
        title: "What I Did",
        body: `1. Defined the product narrative
Through iterative discussions, the vision became clear. Melodeo provides modular, context-driven music creation while supporting abstract prompts. Users should be able to generate, listen, and manage their music seamlessly.

2. Designed end-to-end creation flows

Users can:
• Select a module such as HookSong, Apology Jukebox, or enter an abstract prompt
• Provide context or instructions in text, mood, or style
• Generate music instantly using AI
• Preview and iterate on the track
• Save or export the track to their personal library

3. Interaction model and app structure
{{IMAGE:https://raw.githubusercontent.com/gbunmi/images/main/Melodeo%20Screens%201.png}}
{{IMAGE:https://raw.githubusercontent.com/gbunmi/images/main/Melodeo%20Screens%202.png}}
{{IMAGE:https://raw.githubusercontent.com/gbunmi/images/main/Melodeo%20Screens%203%20(1).png}}

The app is structured around three key spaces:
• Modules and prompts for choosing structured modules or abstract prompts
• Creation workspace for previewing, adjusting, and iterating
• Library and music player for accessing saved tracks, playing music with a built-in player, and viewing lyrics

This keeps creation, playback, and management simple and intuitive.

4. Library, music player, and lyrics display
{{IMAGE:https://raw.githubusercontent.com/gbunmi/images/main/Melodeo%20(5).png}}
The library and playback experience is designed to feel familiar yet optimized for AI-generated tracks:
• Browse saved tracks with clear metadata
• Play tracks with a responsive music player
• View lyrics in sync with playback
• Quickly revisit modules or abstract prompts used to generate each track

5. Visual identity and design system

The visual language is cohesive across modules, prompts, and playback features:
• Consistent typography and hierarchy for clarity
• Expressive colors and icons to differentiate modules
• Uniform controls for creation, playback, and saving

6. Prototyping and validation
Interactive prototypes tested module selection, abstract prompt input, music generation, playback, and library interactions. Insights informed layout adjustments, music player controls, and feedback cues.`
      },
      {
        title: "Outcomes",
        body: "Melodeo enables users to generate music instantly using modules or abstract prompts, save creations to a personal library, and enjoy them with full playback and synced lyrics. It balances guidance with freedom, making AI music creation approachable, versatile, and enjoyable."
      }
    ]
  },

  "Medik": {
    description: "Medik is a comprehensive healthtech platform that makes healthcare more accessible in Nigeria. It allows users to schedule doctor consultations, order medications, and book lab tests in a single place.",
    categories: ["Mobile App"],
    carouselImage: "https://raw.githubusercontent.com/gbunmi/images/main/Medik.jpg",
    images: [
      "https://raw.githubusercontent.com/gbunmi/images/main/Medik%20Cover.png",
    ],
    links: [
      { label: "Visit Site ↗", url: "https://medik.health" },
      { label: "Download app ↗", url: "#" }
    ],
    sections: [
      {
        title: "Context",
        body: "Healthcare in Nigeria is fragmented. If you need a doctor, you go to one app. If you need medication, that’s another errand. Lab tests sit in their own world. Medik set out to bring all of this into one place, so people can move from symptoms to recovery without switching tools or calling five different numbers."
      },
      {
        title: "My Role",
        body: "Product designer responsible for shaping the concept, defining the product structure, designing every flow, building the visual system, and validating the experience with real users."
      },
      {
        title: "The Problem",
        body: "People weren’t just struggling with access. They were struggling with the chaos around access. Even when services existed, the effort required to coordinate them was exhausting. Medik needed to feel like a single, coherent care path—not a bundle of features."
      },
      {
        title: "What I Did",
        body: `Here’s the thing: there was no app before this. I wasn’t redesigning anything. I had to define what Medik should be, how it should work, and what a complete digital-health journey should look like.

1. Defined the core product story
I started by clarifying the heart of the product. After research and discussions, I shaped Medik around three pillars: consultations, medication, and lab tests. Every other service—urgent care, mental health, pharmacy tools—had to support these pillars.

2. Designed the end-to-end journeys
I mapped the entire care lifecycle: onboarding, booking a doctor, getting a prescription, ordering medication, scheduling tests, tracking results. Each flow was built to remove uncertainty and create a sense of steady progress.

3. Built the app structure from scratch
With no legacy patterns blocking the way, I crafted a navigation model that feels immediately understandable:
• a home screen centered on the three main actions
• secondary services placed where they add value, not noise
• a bottom nav that anchors the entire experience

4. Consultation flow design
I created a simple, linear booking experience: choose a specialty, pick a doctor, select a time, pay. Doctor profiles, pricing, and availability are clear upfront so users don’t feel lost.

5. Medication experience that mirrors everyday shopping
The medication section was built like a familiar e-commerce flow:
• search that handles drug names and symptoms
• a clean cart and checkout
• optional prescription upload with helpful guidance
• straightforward delivery tracking

6. Lab test flows built around clarity
Lab tests can be Commissioned. I designed an experience that guides users calmly: test categories, transparent pricing, scheduling home sample collection, and result tracking tied back to their doctor.

7. Visual identity and design system
I developed the entire design language—typography, spacing, icons, colors, components. The system made the product consistent and gave engineering a predictable foundation.

8. Prototyping and validation
I created high-fidelity prototypes, ran usability sessions, noted friction points, and refined flows through microcopy changes, layout adjustments, and better defaults.`
      },
      {
        title: "Outcomes",
        body: "The final product offers a clear, calm healthcare experience. Users can book care, order meds, and schedule tests without jumping between apps or guessing what comes next. Early testers described it as “finally making sense of healthcare on mobile,” which was exactly the goal."
      }
    ]
  },
  
  "Penuel Samuel": {
    description: "A personal portfolio showcasing front-end development projects, interactive web components, and responsive design systems. It highlights robust, clean coding practices and performance-driven implementations.",
    categories: ["Portfolio"],
    carouselImage: "https://raw.githubusercontent.com/gbunmi/images/main/Penuel%20New.jpg",
    images: [
      "https://raw.githubusercontent.com/gbunmi/images/main/Hero%20(4).png",
      "https://raw.githubusercontent.com/gbunmi/images/main/Penuel%20-%20About.png",
      "https://raw.githubusercontent.com/gbunmi/images/main/Penuel%20-%20Skills.png",
      "https://raw.githubusercontent.com/gbunmi/images/main/Penuel%20-%20Footer.png",
    ],
    links: [
      { label: "Visit Website ↗", url: "https://penueldev.onrender.com/" }
    ],
    overview: "" 
  },

  "Chinwe Ekeke": {
    description: "A highly polished virtual assistant portfolio highlighting a range of services, skill sets, and client testimonials. It highlights professionalism, organizational efficiency, and clean layouts.",
    categories: ["Portfolio"],
    carouselImage: "https://raw.githubusercontent.com/gbunmi/images/main/Chinwe%20Ekeke.jpg",
    images: [
      "https://raw.githubusercontent.com/gbunmi/images/main/Chinwe%20-%20Hero.png",
      "https://raw.githubusercontent.com/gbunmi/images/main/Chinwe%20-%20About.png",
      "https://raw.githubusercontent.com/gbunmi/images/main/Chinwe%20Skills.png",
      "https://raw.githubusercontent.com/gbunmi/images/main/Chinwe%20-%20Case%20study.png",
      "https://raw.githubusercontent.com/gbunmi/images/main/Chinwe%20-%20Toolkit.png",
      "https://raw.githubusercontent.com/gbunmi/images/main/Chinwe%20-%20Footer.png",
    ],
    links: [
      { label: "Visit Website ↗", url: "https://chinweekeke.framer.website/" }
    ],
    overview: ""
  },
  "Medsaber": {
    description: "Medsaber is a modern medical platform landing page that presents healthcare solutions with clarity. It emphasizes intuitive service exploration and patient-centric responsive web design.",
    categories: ["Landing page / Website"],
    images: [],
    links: [],
    overview: ""
  },
  "MagicCap": {
    description: "MagicCap is a creative software landing page focusing on intelligent screen capture and video annotation. It offers clean product presentation, feature breakdowns, and responsive interactive tours.",
    categories: ["Landing page / Website"],
    images: [],
    links: [],
    overview: ""
  },
  "The Connected Awards": {
    description: "The Connected Awards is a platform designed to celebrate outstanding tech achievements. It manages key nominations and public voting processes through a secure, structured interface.",
    categories: ["Landing page / Website"],
    images: [],
    links: [],
    overview: ""
  },
  "Heyfood": {
    description: "Heyfood is a fast-growing restaurant discovery and food delivery platform. It connects local vendors with hungry customers using real-time dispatching and localized search algorithms.",
    categories: ["Brand"],
    images: [],
    links: [],
    overview: "Detailed overview coming soon."
  },
  "Chorezen": {
    description: "Chorezen is an on-demand cleaning service platform connecting users with professional office and home sanitization teams. It features visual branding, scheduling tools, and secure booking flows.",
    categories: ["Brand"],
    carouselImage: "https://raw.githubusercontent.com/gbunmi/images/main/Chorezen.png",
    images: [
      "https://raw.githubusercontent.com/gbunmi/images/main/2026.jpg",
      "https://raw.githubusercontent.com/gbunmi/images/main/Children's%20day.jpg",
      "https://raw.githubusercontent.com/gbunmi/images/main/February.jpg",
      "https://raw.githubusercontent.com/gbunmi/images/main/Happy%20new%20month%20April.jpg",
      "https://raw.githubusercontent.com/gbunmi/images/main/June.jpg",
      "https://raw.githubusercontent.com/gbunmi/images/main/SM%20-%207.jpg",
      "https://raw.githubusercontent.com/gbunmi/images/main/SM%20-%209%20(1).jpg",
      "https://raw.githubusercontent.com/gbunmi/images/main/SM%20-%209.jpg"
    ],
    verticalImages: [
      "https://raw.githubusercontent.com/gbunmi/images/main/Chorezen%201.png",
      "https://raw.githubusercontent.com/gbunmi/images/main/Chorezen%203.png"
    ],
    links: [
      { label: "Visit Website ↗", url: "https://chorezen.com.ng/" }
    ],
    overview: "Detailed overview coming soon."
  },
  "Tuyaupay": {
    description: "Tuyaupay is a global payments brand enabling cross-border currency transfers for businesses and individuals. It streamlines transactions through clean checkout flows and reliable architecture.",
    categories: ["Brand"],
    images: [
      "https://raw.githubusercontent.com/gbunmi/images/main/Tuyaupay%20SM%200001.jpg",
      "https://raw.githubusercontent.com/gbunmi/images/main/Tuyaupay%20SM%200002.jpg",
      "https://raw.githubusercontent.com/gbunmi/images/main/Tuyaupay%20SM%200003.jpg",
      "https://raw.githubusercontent.com/gbunmi/images/main/Tuyaupay%20SM%200004.jpg"
    ],
    links: [],
    overview: "Detailed overview coming soon."
  }
};

const DEFAULT_CONTENT: ProjectContent = {
  description: "Project description coming soon.",
  categories: [],
  links: [],
  overview: "Detailed overview coming soon."
};

interface FeaturedWorkViewProps {
  onProjectChange?: (project: string) => void;
  viewingCaseStudy?: boolean;
  onViewingCaseStudyChange?: (val: boolean) => void;
}

const FeaturedWorkView: React.FC<FeaturedWorkViewProps> = ({ 
  onProjectChange, 
  viewingCaseStudy: propViewingCaseStudy, 
  onViewingCaseStudyChange 
}) => {
  const [selectedProject, setSelectedProject] = useState("Aurial");
  const [localViewingCaseStudy, setLocalViewingCaseStudy] = useState(false);
  const viewingCaseStudy = propViewingCaseStudy !== undefined ? propViewingCaseStudy : localViewingCaseStudy;
  
  const setViewingCaseStudy = (val: boolean) => {
    setLocalViewingCaseStudy(val);
    if (onViewingCaseStudyChange) {
      onViewingCaseStudyChange(val);
    }
  };
  const [mobileView, setMobileView] = useState<'list' | 'detail'>('list');
  const [isLoading, setIsLoading] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedProjectRef = useRef(selectedProject);
  const caseStudyScrollRef = useSmoothScroll<HTMLDivElement>();

  const oneFullSetHeightRef = useRef<number>(0);
  const item0OffsetTopRef = useRef<number>(0);
  const itemSlotHeightRef = useRef<number>(0);

  const content = PROJECT_DATA[selectedProject] || DEFAULT_CONTENT;
  const isBrandProject = content.categories.includes('Brand');

  // Sync ref with selectedProject and notify parent
  useEffect(() => {
    selectedProjectRef.current = selectedProject;
    if (onProjectChange) {
      onProjectChange(selectedProject);
    }
  }, [selectedProject, onProjectChange]);

  // Smooth local loaders
  useEffect(() => {
    setIsLoading(true);
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, [selectedProject]);

  // Track scroll position of preview project items, calculate loop elegantly
  useEffect(() => {
    if (viewingCaseStudy) return;

    const container = containerRef.current;
    if (!container) return;

    const recalculateBounds = () => {
      const children = container.children;
      if (children.length < PROJECTS.length * 3) return;

      const item0 = children[0] as HTMLElement;
      const itemN = children[PROJECTS.length] as HTMLElement;
      
      const oneFullSetHeight = itemN.offsetTop - item0.offsetTop;
      oneFullSetHeightRef.current = oneFullSetHeight;
      item0OffsetTopRef.current = item0.offsetTop;
      itemSlotHeightRef.current = oneFullSetHeight / PROJECTS.length;
    };

    const updateActiveProject = () => {
      const oneFullSet = oneFullSetHeightRef.current;
      const slotHeight = itemSlotHeightRef.current;
      const item0Offset = item0OffsetTopRef.current;

      if (oneFullSet <= 0 || slotHeight <= 0) return;

      const currentScroll = container.scrollTop;
      const containerHeight = container.clientHeight;
      const centerScroll = currentScroll + containerHeight / 2;

      const relativeScroll = centerScroll - item0Offset;
      const approxIndex = Math.floor(relativeScroll / slotHeight);

      if (approxIndex >= 0) {
        const projectIndex = approxIndex % PROJECTS.length;
        const closestProject = PROJECTS[projectIndex];
        
        if (closestProject && closestProject !== selectedProjectRef.current) {
          setSelectedProject(closestProject);
        }
      }
    };

    let isShiftingScroll = false;

    const handleScrollLoop = () => {
      if (isShiftingScroll) return;

      const oneFullSetHeight = oneFullSetHeightRef.current;
      if (oneFullSetHeight <= 0) return;

      const currentScroll = container.scrollTop;

      // Symmetrically keep the scroll position bounded inside Set 2
      if (currentScroll < oneFullSetHeight) {
        isShiftingScroll = true;
        container.scrollTop = currentScroll + oneFullSetHeight;
        isShiftingScroll = false;
      } else if (currentScroll >= 2 * oneFullSetHeight) {
        isShiftingScroll = true;
        container.scrollTop = currentScroll - oneFullSetHeight;
        isShiftingScroll = false;
      }

      updateActiveProject();
    };

    container.addEventListener('scroll', handleScrollLoop, { passive: true });
    window.addEventListener('resize', () => {
      recalculateBounds();
      updateActiveProject();
    }, { passive: true });

    // Initial positioning: scroll to the middle copy of the selected project
    const initTimer = setTimeout(() => {
      recalculateBounds();
      const N = PROJECTS.length;
      const targetIndex = N + PROJECTS.indexOf(selectedProjectRef.current);
      const el = container.querySelector(`[data-index="${targetIndex}"]`) as HTMLElement;
      
      if (el) {
        const containerHeight = container.clientHeight;
        const elementTop = el.offsetTop;
        const elementHeight = el.clientHeight;
        const targetScrollTop = elementTop - (containerHeight / 2) + (elementHeight / 2);
        container.scrollTop = targetScrollTop;
      }
      updateActiveProject();
    }, 100);

    return () => {
      container.removeEventListener('scroll', handleScrollLoop);
      window.removeEventListener('resize', () => {});
      clearTimeout(initTimer);
    };
  }, [viewingCaseStudy]);

  const handleProjectClick = (project: string, indexInTriple: number) => {
    if (project === selectedProject) {
      setViewingCaseStudy(true);
    } else {
      setSelectedProject(project);
      setViewingCaseStudy(false); // default to preview mode on new select
      
      // Scroll container to the corresponding selected project inside the container instantly without laggy animations
      setTimeout(() => {
        const container = containerRef.current;
        const el = container?.querySelector(`[data-index="${indexInTriple}"]`) as HTMLElement;
        if (container && el) {
          const containerHeight = container.clientHeight;
          const elementTop = el.offsetTop;
          const elementHeight = el.clientHeight;
          
          const targetScrollTop = elementTop - (containerHeight / 2) + (elementHeight / 2);
          container.scrollTop = targetScrollTop;
        }
      }, 50);
    }
    setMobileView('detail');
  };

  // Render full Case study layout
  const renderCaseStudyContent = () => {
    return (
      <div className="w-full">
        {/* Header with Case Study Title & Action Links */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6 w-full pb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#041727] tracking-[-0.04em]">
              {selectedProject}
            </h1>
          </div>

          <div className="flex flex-wrap gap-2 shrink-0">
            {content.links?.map((link, idx) => (
              <a 
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#041727] text-white px-3 py-1.5 text-xs font-bold hover:bg-opacity-80 transition-colors tracking-[-0.04em]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Intro Description */}
        <p className="text-sm lg:text-[14px] text-[#041727] font-medium leading-relaxed mb-8 w-full text-left tracking-[-0.04em]">
          {content.description}
        </p>

        {/* Project Images */}
        <div className="w-full mb-12">
          {isBrandProject ? (
            <div className="columns-2 md:columns-3 gap-4">
              {content.images && content.images.length > 0 ? (
                content.images.map((imgSrc, index) => (
                  <div key={index} className="break-inside-avoid mb-4 border border-[#DEDBD6] bg-[#ecece8]">
                    <img 
                      src={imgSrc} 
                      alt={`${selectedProject} Brand ${index + 1}`} 
                      className="w-full h-auto block"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))
              ) : (
                <div className="aspect-square md:aspect-video bg-[#ecece8] flex items-center justify-center text-[#465460] font-sans text-sm w-full border border-[#DEDBD6]">
                  No images available
                </div>
              )}
            </div>
          ) : (
            <>
              {content.images && content.images.length > 0 ? (
                content.images.map((imgSrc, index) => (
                  <img 
                    key={index}
                    src={imgSrc} 
                    alt={`${selectedProject} preview ${index + 1}`} 
                    className="w-full h-auto object-cover border border-[#DEDBD6] mb-8 last:mb-0"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                ))
              ) : null}
              {(!content.images || content.images.length === 0) && !content.sections && (
                <div className="w-full aspect-video bg-[#ecece8] border border-[#DEDBD6] flex items-center justify-center text-[#465460] font-sans text-sm">
                  No images available
                </div>
              )}
            </>
          )}

          {content.verticalImages && content.verticalImages.length > 0 && (
            <div className="mt-12 w-full">
              <hr className="border-[#DEDBD6] mb-12" />
              <div className="flex flex-col gap-12">
                {content.verticalImages.map((imgSrc, index) => (
                  <img 
                    key={index}
                    src={imgSrc} 
                    alt={`${selectedProject} vertical preview ${index + 1}`} 
                    className="w-full h-auto object-cover border border-[#DEDBD6]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Structured Sections */}
        {!isBrandProject && content.sections && content.sections.map((section, idx) => (
          <div key={idx} className="mb-12 w-full">
            <span className="inline-block bg-[#041727] text-white px-2 py-0.5 text-xs font-bold mb-4 tracking-[-0.04em]">
              {section.title}
            </span>
            <div className="text-sm lg:text-[14px] text-[#041727] font-medium leading-relaxed w-full text-left tracking-[-0.04em] flex flex-col gap-4">
              {section.body.split('\n').map((line, i) => {
                const imageMatch = line.match(/^\{\{IMAGE:(.*)\}\}$/);
                if (imageMatch) {
                  return (
                    <img 
                      key={i}
                      src={imageMatch[1]} 
                      alt={`Detail ${i}`}
                      className="w-full h-auto object-cover my-6 border border-[#DEDBD6]"
                      referrerPolicy="no-referrer"
                    />
                  );
                }
                const isNumberedHeader = /^\d+\.\s/.test(line);
                if (isNumberedHeader) {
                  return (
                    <div key={i} className="text-[#041727] font-bold mt-4 mb-1 text-left tracking-[-0.04em]">
                      {line}
                    </div>
                  );
                }
                if (line.trim() === '') return <br key={i} />;
                return <div key={i}>{line}</div>;
              })}
            </div>
          </div>
        ))}

        {/* Fallback Overview */}
        {!isBrandProject && !content.sections && content.overview && (
          <div className="mb-12 w-full">
            <span className="inline-block bg-[#041727] text-white px-2 py-0.5 text-xs font-bold mb-4 tracking-[-0.04em]">
              Overview
            </span>
            <p className="text-sm lg:text-[14px] text-[#041727] font-medium leading-relaxed w-full text-left tracking-[-0.04em]">
              {content.overview}
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="h-full w-full bg-[#F8F5F0] flex flex-col lg:flex-row overflow-hidden">
      
      {/* 1. LEFT COLUMN: Projects list & Retro computer */}
      <div 
        className={`
          w-full lg:w-[280px] lg:border-r border-[#DEDBD6] bg-[#F8F5F0] flex flex-col shrink-0 h-full overflow-hidden
          ${viewingCaseStudy ? 'hidden' : (mobileView === 'detail' ? 'hidden lg:flex' : 'flex')}
        `}
      >
        {/* Retro Monitor Image Container */}
        <div className="py-8 justify-center flex bg-[#F8F5F0]">
          <img 
            src="https://raw.githubusercontent.com/gbunmi/images/main/Monitor.png" 
            alt="Desktop Monitor" 
            className="w-[180px] h-[180px] object-contain opacity-95 select-none"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Projects list */}
        <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-6 flex flex-col gap-[2px] select-none">
          {PROJECTS.map((project, idx) => {
            const isSelected = selectedProject === project;
            const targetIndex = PROJECTS.length + idx;
            return (
              <button
                key={project}
                onClick={() => handleProjectClick(project, targetIndex)}
                className={`
                  group w-full text-left px-8 py-0
                  text-sm tracking-[-0.04em] tracking-tight transition-all duration-200
                  ${isSelected 
                    ? 'font-bold text-[#041727]' 
                    : 'font-normal text-[#465460] hover:text-[#041727]'}
                `}
              >
                <span className="inline-block transform transition-transform duration-200 group-hover:translate-x-1">
                  {project}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. MAIN WORKSPACE / SPLIT AREA (Middle & Right Columns on Desktop) */}
      <div 
        ref={contentRef}
        className={`
          flex-1 h-full overflow-y-auto bg-[#F8F5F0] flex flex-col relative
          ${(mobileView === 'list' && !viewingCaseStudy) ? 'hidden lg:flex' : 'flex'}
        `}
      >
        
        {/* Mobile Navigation Bar */}
        <div className="lg:hidden flex items-center px-4 py-4 border-b border-[#DEDBD6] bg-[#F8F5F0] shrink-0">
          <button 
            onClick={() => {
              if (viewingCaseStudy) {
                setViewingCaseStudy(false);
              } else {
                setMobileView('list');
              }
            }}
            className="text-xs font-bold tracking-[-0.04em] text-[#041727] hover:opacity-75 flex items-center gap-1 pb-0.5"
          >
            ← {viewingCaseStudy ? 'Back to overview' : 'Back to workspace'}
          </button>
        </div>

        {/* If Case Study is Opened, render full wide detailed layout */}
        {viewingCaseStudy ? (
          <div ref={caseStudyScrollRef} className="flex-1 w-full overflow-y-auto bg-[#F8F5F0]">
            <div className="min-h-full lg:grid lg:grid-cols-[240px_1fr_240px] bg-[#DEDBD6] gap-px">
              
              {/* Left spacer column matching existing grid geometry */}
              <div className="hidden lg:block bg-[#F8F5F0]" />

              {/* Center column of the grid: hosts all content */}
              <div className="bg-[#F8F5F0] min-h-full px-4 lg:px-10 py-12 flex flex-col">
                {isLoading ? (
                  <div className="flex items-center justify-center h-64">
                    <div className="w-8 h-8 border-4 border-[#DEDBD6] border-t-[#041727] rounded-full animate-spin"></div>
                  </div>
                ) : (
                  renderCaseStudyContent()
                )}
              </div>

              {/* Right spacer column matching existing grid geometry */}
              <div className="hidden lg:block bg-[#F8F5F0]" />

            </div>
          </div>
        ) : (
          /* WORK PREVIEW MODE (Split layout: scrolling images, non-scrolling description) */
          <div className="flex-1 flex flex-col lg:flex-row lg:gap-0 overflow-hidden h-full">

            {/* A. LEFT SPLIT VIEW: Vertical Gallery list (scrolls) */}
            <div 
              ref={containerRef}
              className="w-full lg:w-[320px] xl:w-[360px] lg:border-r border-[#DEDBD6] shrink-0 lg:h-full lg:overflow-y-auto lg:snap-y lg:snap-mandatory py-12 lg:py-16 [&::-webkit-scrollbar]:hidden flex flex-col gap-[8px] items-center justify-start select-none bg-[#F8F5F0] overflow-x-hidden"
            >
              {(() => {
                const TRIPLED_PROJECTS: { name: string; tripleIndex: number }[] = [];
                for (let k = 0; k < 3; k++) {
                  PROJECTS.forEach((p, idx) => {
                    TRIPLED_PROJECTS.push({ name: p, tripleIndex: k * PROJECTS.length + idx });
                  });
                }

                return TRIPLED_PROJECTS.map(({ name: project, tripleIndex }) => {
                  const isSelected = selectedProject === project;
                  const coverImg = PROJECT_DATA[project]?.carouselImage;

                  return (
                     <div 
                       key={`${project}-${tripleIndex}`} 
                       data-project={project}
                       data-index={tripleIndex}
                       onClick={() => handleProjectClick(project, tripleIndex)}
                       className={`w-[180px] md:w-[220px] lg:w-[260px] xl:w-[280px] aspect-square relative border cursor-pointer group overflow-hidden shrink-0 select-none outline-none focus:outline-none active:outline-none lg:snap-center
                        ${isSelected 
                          ? 'border-[#DEDBD6] bg-[#ecece8] opacity-100 z-10 scale-100 shadow-sm' 
                          : 'border-[#DEDBD6] bg-[#ecece8] opacity-45 hover:opacity-90 hover:border-[#465460] z-0 scale-95'}`}
                    >
                      {coverImg ? (
                        <img 
                          src={coverImg} 
                          alt={project}
                          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${isSelected ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'}`}
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#ecece8] flex flex-col items-center justify-center p-4 text-center">
                          <span className="text-[10px] font-bold text-[#465460] uppercase tracking-wider mb-2 opacity-50">
                            preview incoming
                          </span>
                          <span className="text-xs md:text-sm font-bold text-[#041727] uppercase tracking-tight line-clamp-2 px-2">
                            {project}
                          </span>
                        </div>
                      )}
                      
                      {/* Subtle hover overlay zoom transition overlay without any text buttons */}
                      <div className="absolute inset-0 bg-[#041727] bg-opacity-[0.01] group-hover:bg-opacity-[0.03] transition-opacity duration-300" />
                    </div>
                  );
                });
              })()}
            </div>

            {/* B. RIGHT SPLIT VIEW: Title & Description block (static/non-scrolling, changes respectively on update) */}
            <div className="w-full lg:flex-1 p-8 lg:p-16 xl:p-20 h-auto lg:h-full overflow-hidden flex flex-col justify-center bg-[#F8F5F0]">
              <div className="max-w-md w-full flex flex-col justify-start">
                {/* Title Box matching custom design label exactly */}
                <div className="mb-4">
                  <span className="inline-block bg-[#041727] text-[#F8F5F0] px-1.5 py-0.5 text-sm font-bold tracking-[-0.04em] select-none">
                    {selectedProject}
                  </span>
                </div>
                {/* Concise Description */}
                <p className="text-sm lg:text-[14px] text-[#041727] font-medium leading-[18px] text-left tracking-[-0.04em]">
                  {PROJECT_DATA[selectedProject]?.description || "Project description coming soon."}
                </p>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default FeaturedWorkView;