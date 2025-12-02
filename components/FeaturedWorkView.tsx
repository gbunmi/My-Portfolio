import React, { useState } from 'react';

export const PROJECTS = [
  "Porta",
  "Melodeo",
  "Medik",
  "Talestream",
  "Euterpe",
  "Penuel Samuel",
  "Chinwe Ekeke",
  "Medsaber",

];

export interface ProjectSection {
  title: string;
  body: string;
}

export interface ProjectContent {
  description: string;
  images?: string[];
  links?: { label: string; url: string }[];
  overview?: string; // Keep for simple text
  sections?: ProjectSection[]; // New structured content
}

export const PROJECT_DATA: Record<string, ProjectContent> = {
  "Porta": {
    description: "Porta is an AI-powered scene creation app that lets users place themselves or their ideas into existing scenes, generate moments instantly, and customize environments without writing complex prompts. Users can work from preset templates, reference scenes, or other creations, adjusting elements, style, and perspective in a single intuitive workspace.",
    images: [
      "https://raw.githubusercontent.com/gbunmi/images/main/Porta%20(1).png",
    ],
    links: [
      { label: "Visit Website ↗", url: "https://www.useporta.app" }
    ],
    sections: [
      {
        title: "Context",
        body: "Creating detailed digital scenes is often complex and slow, requiring multiple tools and technical skills. Porta simplifies this by letting users generate and manipulate scenes with AI in an intuitive, interactive environment. Users can use their own images or reference scenes to place themselves anywhere and instantly produce moments."
      },
      {
        title: "My Role",
        body: "Product designer responsible for defining the interaction model, end-to-end user flows, visual language, and prototyping the AI-driven scene creation experience."
      },
      {
        title: "The Problem",
        body: "Traditional scene design tools are powerful but intimidating. Users get stuck switching between apps, tools, and menus. Porta needed to feel like one coherent workspace where creativity flows naturally without steep learning curves or technical barriers."
      },
      {
        title: "What I Did",
        body: `1. Defined the core product narrative
Porta’s purpose is to let anyone generate, adjust, and explore digital scenes interactively. Every decision, from layout to AI assistance, was guided by making creativity feel immediate and approachable.

2. Designed the end-to-end journeys
I mapped flows for:
• starting a new scene from a prompt or reference
• generating objects, environments, and characters
• editing, repositioning, or transforming scene elements
• saving, exporting, or sharing finished scenes

The focus was on reducing friction while maintaining creative flexibility.

3. Interaction model and workspace design
The workspace is organized around three key areas:
• Canvas for visualizing and manipulating the scene
• Tool panel with context-sensitive AI tools for object creation, modification, and layering
• Asset panel with a library of scene elements and templates

This layout keeps controls within reach while keeping the scene the main focus.

4. Scene creation flow
Users can choose a prompt or base template, generate objects or characters, modify placement, scale, and style, apply lighting, color, and atmosphere, and preview and refine in real time. The experience balances guidance with creative freedom.

5. Visual identity and design system
The visual language is modern and approachable, with clean typography, flexible components for AI tools and assets, and consistent spacing and hierarchy.

6. Prototyping and validation
Interactive prototypes were tested with early users for scene creation, template use, and AI guidance. Feedback informed refinements to tool placement, workflow, and visual feedback.`
      },
      {
        title: "Outcomes",
        body: "Porta allows users to generate, customize, and manage scenes in a single space, dramatically reducing the learning curve compared to traditional design tools. Users can experiment quickly and see immediate visual results."
      }
    ]
  },

  "Melodeo": {
    description: "Melodeo addresses the complexity of music creation by offering AI-powered modules like HookSong and Apology Jukebox, alongside abstract prompts for open-ended creativity. Users can generate music instantly, save it in a personal library, and listen back with a full-featured music player and lyrics display.",
    images: [
      "https://raw.githubusercontent.com/gbunmi/images/main/Melodeo%20(1).png",
      "https://raw.githubusercontent.com/gbunmi/images/main/Melodeo%20(2).png",
      "https://raw.githubusercontent.com/gbunmi/images/main/Melodeo%20(3).png",
      "https://raw.githubusercontent.com/gbunmi/images/main/Melodeo%20(4).png",
      "https://raw.githubusercontent.com/gbunmi/images/main/Melodeo%20(5).png",
      "https://raw.githubusercontent.com/gbunmi/images/main/Melodeo%20(6).png"
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
The app is structured around three key spaces:
• Modules and prompts for choosing structured modules or abstract prompts
• Creation workspace for previewing, adjusting, and iterating
• Library and music player for accessing saved tracks, playing music with a built-in player, and viewing lyrics

This keeps creation, playback, and management simple and intuitive.

4. Module and prompt experience design
Modules and prompts are designed for clarity and immediacy:
• HookSong generates catchy hooks quickly
• Apology Jukebox produces music suited for a moment
• Abstract prompts let users explore unstructured ideas
• Real-time previews help users refine tracks efficiently

5. Library, music player, and lyrics display
The library and playback experience is designed to feel familiar yet optimized for AI-generated tracks:
• Browse saved tracks with clear metadata
• Play tracks with a responsive music player
• View lyrics in sync with playback
• Quickly revisit modules or abstract prompts used to generate each track

6. Visual identity and design system
The visual language is cohesive across modules, prompts, and playback features:
• Consistent typography and hierarchy for clarity
• Expressive colors and icons to differentiate modules
• Uniform controls for creation, playback, and saving

7. Prototyping and validation
Interactive prototypes tested module selection, abstract prompt input, music generation, playback, and library interactions. Insights informed layout adjustments, music player controls, and feedback cues.`
      },
      {
        title: "Outcomes",
        body: "Melodeo enables users to generate music instantly using modules or abstract prompts, save creations to a personal library, and enjoy them with full playback and synced lyrics. It balances guidance with freedom, making AI music creation approachable, versatile, and enjoyable."
      }
    ]
  },

  "Medik": {
    description: "Medik is a healthtech platform designed to make healthcare more accessible in Nigeria. Through a mobile app, users can book consultations, purchase medication, order medical tests, and access urgent or mental health services—all in one place. I led the product design from research through execution.",
    images: [
      "https://raw.githubusercontent.com/gbunmi/images/main/Medik%20Cover.png",
    ],
    links: [
      { label: "Visit Site ↗", url: "https://medik.health" },
      // { label: "Download app ↗", url: "#" }
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
Lab tests can be intimidating. I designed an experience that guides users calmly: test categories, transparent pricing, scheduling home sample collection, and result tracking tied back to their doctor.

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
    description: "A personal portfolio for Penuel Samuel showcasing front-end development projects, interactive web components, and responsive design skills, highlighting practical coding expertise.",
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
    description: "A virtual assistant portfolio built in Framer, showcasing skills, services, and client interactions to highlight professionalism and efficiency.",
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
  }
};

const DEFAULT_CONTENT: ProjectContent = {
  description: "Project description coming soon.",
  links: [],
  overview: "Detailed overview coming soon."
};

const FeaturedWorkView: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(PROJECTS[0]);
  const [mobileView, setMobileView] = useState<'list' | 'detail'>('list');

  const content = PROJECT_DATA[selectedProject] || DEFAULT_CONTENT;

  const handleProjectClick = (project: string) => {
    setSelectedProject(project);
    setMobileView('detail');
    // Scroll to top of content when switching projects on mobile
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <div className="h-full w-full bg-[#f4f4f0] flex flex-col md:flex-row overflow-hidden">
      
      {/* Left Sidebar - Project List */}
      <div 
        className={`
          w-full md:w-[300px] shrink-0 h-full overflow-y-auto border-b md:border-b-0 md:border-r border-gray-300 bg-[#f4f4f0] [&::-webkit-scrollbar]:hidden
          ${mobileView === 'detail' ? 'hidden md:block' : 'block'}
        `}
        style={{ scrollbarWidth: 'none' }}
      >
        {PROJECTS.map((project) => {
          const isSelected = selectedProject === project;
          return (
            <button
              key={project}
              onClick={() => handleProjectClick(project)}
              className={`
                group
                w-full text-left px-6 py-6 md:px-8 md:py-6 border-b border-gray-300 
                font-bold text-sm md:text-base tracking-[-0.04em] transition-colors
                ${isSelected 
                  ? 'bg-[#041727] text-white' 
                  : 'bg-[#f4f4f0] text-[#041727] hover:bg-[#ecece8]'}
              `}
            >
              <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2">
                {project}
              </span>
            </button>
          );
        })}
        {/* Fill remaining height on desktop to avoid empty space looking weird */}
        <div className="hidden md:block h-full bg-[#f4f4f0]" />
      </div>

      {/* Right Content - Project Details */}
      <div 
        className={`
          flex-1 h-full overflow-y-auto bg-[#f4f4f0] relative
          ${mobileView === 'list' ? 'hidden md:block' : 'block'}
        `}
      >
        
        {/* Content Container - Centered and Full Width with reduced padding */}
        <div className="px-6 py-8 md:px-20 xl:px-32 w-full mx-auto">
          
          {/* Mobile Back Button */}
          <button 
            onClick={() => setMobileView('list')}
            className="md:hidden mb-8 flex items-center gap-2 text-sm font-bold tracking-[-0.04em] text-[#041727] hover:opacity-70"
          >
            ← Back to Projects
          </button>

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 md:mb-12 w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-[#041727] tracking-[-0.04em]">
              {selectedProject}
            </h1>

            <div className="flex flex-wrap gap-3 shrink-0">
              {content.links?.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#041727] text-white px-3 py-1 text-xs md:text-sm font-bold tracking-[-0.04em] hover:opacity-80 transition-opacity"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-[#041727] font-medium leading-relaxed tracking-[-0.04em] mb-12 w-full text-justify">
            {content.description}
          </p>

          {/* Images Container */}
          <div className="w-full mb-12">
             {content.images && content.images.length > 0 ? (
                content.images.map((imgSrc, index) => (
                  <img 
                    key={index}
                    src={imgSrc} 
                    alt={`${selectedProject} preview ${index + 1}`} 
                    className="w-full h-auto object-cover border border-gray-200 mb-12 last:mb-0"
                    loading="eager"
                    // @ts-ignore
                    fetchPriority="high"
                  />
                ))
             ) : (
                <div className="w-full aspect-video bg-[#ecece8] flex items-center justify-center text-gray-400 font-mono text-sm">
                   {/* Placeholder hidden if empty, or distinct placeholder */}
                </div>
             )}
          </div>

          {/* Structured Sections (Context, Role, Problem, etc.) */}
          {content.sections && content.sections.map((section, idx) => (
            <div key={idx} className="mb-12 w-full">
              <span className="inline-block bg-[#041727] text-white px-1 py-0.5 text-sm font-bold tracking-[-0.04em] mb-4">
                {section.title}
              </span>
              <div className="text-sm md:text-base text-[#041727] font-medium leading-relaxed tracking-[-0.04em] w-full text-justify">
                {section.body.split('\n').map((line, i) => {
                   // Check for numbered headers (e.g. "1. Header")
                   const isNumberedHeader = /^\d+\.\s/.test(line);
                   
                   if (isNumberedHeader) {
                     return (
                       <div key={i} className="text-[#465460] font-bold mt-6 mb-2 text-left">
                         {line}
                       </div>
                     );
                   }
                   
                   // Handle empty lines for spacing
                   if (line.trim() === '') return <br key={i} />;
                   
                   // Regular text
                   return <div key={i}>{line}</div>;
                })}
              </div>
            </div>
          ))}

          {/* Fallback Overview Section (if no structured sections but overview exists) */}
          {!content.sections && content.overview && (
            <div className="mb-12 w-full">
              <span className="inline-block bg-[#041727] text-white px-1 py-0.5 text-sm font-bold tracking-[-0.04em] mb-4">
                Overview
              </span>
              <p className="text-sm md:text-base text-[#041727] font-medium leading-relaxed tracking-[-0.04em] w-full text-justify">
                {content.overview}
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default FeaturedWorkView;