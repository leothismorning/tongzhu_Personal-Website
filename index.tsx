
import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import { 
  Gamepad2, 
  BookOpen, 
  BrainCircuit,
  ArrowUpRight,
  Github,
  FileText,
  GraduationCap,
  Microscope,
  Building2,
  Cpu,
  HeartPulse,
  Briefcase,
  Layers,
  Sparkles,
  Rocket
} from 'lucide-react';

// --- Types ---

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  icon: React.ReactNode;
  tags: string[];
}

interface Experience {
  institution: string;
  role: string;
  period: string;
  description: string;
  icon: React.ReactNode;
  location: string;
}

// --- Data ---

const PROJECTS: Project[] = [
  {
    id: 'npc-agent',
    title: 'LLM-Based NPC Agent',
    category: 'PKU Digital Media Lab',
    description: 'Developed an LLM-based NPC Agent architecture enabling intuitive voice interaction within Unreal Engine.',
    thumbnail: 'https://pub-44bbe4813e3c492a92c15ad2f4fccbd0.r2.dev/1111.png',
    videoUrl: 'https://youtu.be/779FONsEwVY',
    icon: <BrainCircuit className="w-6 h-6" />,
    tags: ['LLM', 'Voice UI', 'Unreal Engine', 'Interaction Design']
  },
  {
    id: 'fps-game',
    title: 'Spatio-temporal Sci-Fi FPS',
    category: 'Game Mechanics Research',
    description: 'Designing and developing a time-themed indie game exploring novel spatial mechanics in Unreal Engine.',
    thumbnail: 'https://pub-44bbe4813e3c492a92c15ad2f4fccbd0.r2.dev/%E6%97%B6%E7%A9%BA%E6%B8%B8%E6%88%8Fnew.png',
    videoUrl: 'https://youtu.be/CBoXEhAYnK8',
    icon: <Gamepad2 className="w-6 h-6" />,
    tags: ['Unreal Engine', 'C++', 'Mechanics', 'Game Design']
  },
    {
    id: 'tsinghua-robot',
    title: 'Cupid-Echo:an inflatable shape changing interface',
    category: 'Tsinghua Future Lab',
    description: 'Developing deformable robot trained ML models to identify haptic emotional semantics by analyzing user tactile expressions.',
    thumbnail: 'https://pub-44bbe4813e3c492a92c15ad2f4fccbd0.r2.dev/cupid-echo.png',
    videoUrl: 'https://leothismorning.github.io/Cupid-Echo/',
    icon: <HeartPulse className="w-6 h-6" />,
    tags: ['Machine Learning', 'Haptics', 'Robotics', 'Affective Computing']
  },
    {
    id: 'hku-archaeology',
    title: 'Virtual-archaeology Game(In Development)',
    category: 'HKU Faculty of Education',
    description: 'Leveraging virtual environments to scaffold inquiry-based learning and complex archaeological reasoning.',
    thumbnail: 'https://pub-44bbe4813e3c492a92c15ad2f4fccbd0.r2.dev/virtual-archaeology.png',
    videoUrl: 'https://youtu.be/i53mVLwh_T0',
    icon: <BookOpen className="w-6 h-6" />,
    tags: ['EdTech', 'Educational Games', 'Spatial Computing', 'Pedagogy']
  },
    {
    id: 'serious-space',
    title: 'Serious Space',
    category: 'Research Concept',
    description: 'Materialised Panopticism theory into an interactive installation using CV and multimodal systems to provoke critical reflection on digital surveillance and privacy.',
    thumbnail: 'https://pub-44bbe4813e3c492a92c15ad2f4fccbd0.r2.dev/serious%20space.png',
    videoUrl: 'https://leothismorning.github.io/ztcv/seriousspace.pdf',
    icon: <Rocket className="w-6 h-6" />,
    tags: ['Serious Games', 'Multimodal System', 'Interactive Art Installation']
  },
  {
    id: 'learning-analytics',
    title: 'Online Learning Methodology Exploration Lab',
    category: 'Educational Technology',
    description: 'AI-assisted exploration of learning methodologies. A cross-platform web interface providing on-demand access for users to identify and optimize their individual learning paradigms.',
    thumbnail: 'https://pub-44bbe4813e3c492a92c15ad2f4fccbd0.r2.dev/%E5%AD%A6%E4%B9%A0%E6%96%B9%E6%B3%95.png',
    videoUrl: 'https://youtu.be/8UoqeLuiTVE',
    icon: <Sparkles className="w-6 h-6" />,
    tags: ['Data Science', 'EdTech', 'HCI', 'Visualization']
  },
  {
    id: 'spatial-ui',
    title: 'Stylized Rendering',
    category: 'Computer Graphics',
    description: 'Implementation of High-Efficiency Environment Material Solvers and Stylized Shading Schemes in Unreal Engine Based on Non-Photorealistic Rendering (NPR) Theory.',
    thumbnail: 'https://pub-44bbe4813e3c492a92c15ad2f4fccbd0.r2.dev/%E9%A3%8E%E6%A0%BC%E5%8C%96%E6%B8%B2%E6%9F%93%E4%BD%9C%E5%93%81%E9%A6%96%E9%A1%B5.png',
    videoUrl: 'https://youtu.be/ORYwJk3aFtM',
    icon: <Layers className="w-6 h-6" />,
    tags: ['NPR', 'Shaders', 'HLSL', 'Art Direction']
  }
];

const RESEARCH_EXPERIENCES: Experience[] = [
  {
    institution: "The University of Hong Kong",
    role: "Remote Research Assistant",
    period: "Current",
    location: "Faculty of Education",
    description: "Collaborating with Prof. Zhichun Liu on educational games and inquiry-based learning environments.",
    icon: <Microscope className="w-5 h-5" />
  },
  {
    institution: "Peking University",
    role: "Digital Media Lab Researcher",
    period: "Graduate Studies",
    location: "Beijing",
    description: "Research on Voice User Interfaces (VUI) in Games and LLM-powered NPCs in Unreal Engine.",
    icon: <GraduationCap className="w-5 h-5" />
  },
  {
    institution: "Tsinghua University",
    role: "Future Lab Collaborator",
    period: "Research Project",
    location: "Beijing",
    description: "Tactile Emotional Semantics and Deformable Robotics.",
    icon: <Cpu className="w-5 h-5" />
  }
];

const INDUSTRY_EXPERIENCES: Experience[] = [
  {
    institution: "Perfect World Games",
    role: "Engine Development Intern",
    period: "Industry",
    location: "Beijing",
    description: "Focusing on Unreal Engine system implementation and performance optimization.",
    icon: <Building2 className="w-5 h-5" />
  },
  {
    institution: "China Post",
    role: "Full-stack Developer Intern",
    period: "Industry",
    location: "ShanDong",
    description: "Web development with both front-end and back-end responsibilities.",
    icon: <Briefcase className="w-5 h-5" />
  }
];

// --- Components ---

const ExperienceCard: React.FC<{ exp: Experience }> = ({ exp }) => (
  <div className="group p-6 rounded-2xl bg-white border border-zinc-100 hover:border-blue-100 transition-all duration-300 h-full">
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm shrink-0">
        {exp.icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start mb-1 gap-2">
          <h4 className="text-base font-bold text-zinc-800 leading-tight">
            {exp.institution}
          </h4>
          <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-300 whitespace-nowrap">
            {exp.period}
          </span>
        </div>
        <p className="text-blue-500 text-xs font-bold mb-2">{exp.role}</p>
        <p className="text-zinc-500 text-[13px] leading-relaxed mb-3">
          {exp.description}
        </p>
        <div className="text-[9px] font-bold text-zinc-300 uppercase tracking-widest">
          {exp.location}
        </div>
      </div>
    </div>
  </div>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <motion.div
    onClick={() => project.videoUrl !== '#' && window.open(project.videoUrl, '_blank')}
    className="group relative cursor-pointer overflow-hidden rounded-3xl bg-white border border-zinc-100 aspect-video shadow-sm hover:shadow-xl transition-all duration-500"
    whileHover={{ y: -5 }}
  >
    <div className="absolute inset-0">
      <img 
        src={project.thumbnail} 
        alt={project.title} 
        className="w-full h-full object-cover" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
    </div>
    <div className="relative z-10 p-6 h-full flex flex-col justify-end">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
          {React.cloneElement(project.icon as React.ReactElement<any>, { className: 'w-4 h-4' })}
        </div>
        <span className="text-[9px] font-bold uppercase tracking-widest text-white/70">{project.category}</span>
      </div>
      <h3 className="text-xl font-black text-white mb-2 tracking-tight">{project.title}</h3>
      <p className="text-white/70 text-[12px] max-w-md line-clamp-2 mb-4 group-hover:text-white transition-colors">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map(tag => (
          <span key={tag} className="px-2 py-0.5 rounded-full bg-white/10 border border-white/10 text-[8px] font-bold text-white/80 uppercase tracking-wider">
            {tag}
          </span>
        ))}
      </div>
    </div>
    {project.videoUrl !== '#' && (
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
        <div className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-lg">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    )}
  </motion.div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-800">
      {/* 1. Hero Section with PKU Background (Padding adjusted as Navbar is removed) */}
      <header className="relative pt-24 pb-24 px-6 overflow-hidden border-b border-zinc-50">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://pub-44bbe4813e3c492a92c15ad2f4fccbd0.r2.dev/pekinguniversity.jpeg" 
            alt="Peking University Landscape" 
            className="w-full h-full object-cover opacity-50" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/70 to-[#fafafa]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/90 backdrop-blur-md text-blue-600 text-[9px] font-black uppercase tracking-[0.2em] mb-8 border border-blue-100/50 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              PKU Master Graduate · HKU Research Assistant
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-zinc-900 tracking-tighter leading-tight mb-6">
              TONG ZHU
            </h1>
            
            <p className="text-lg md:text-2xl text-zinc-700 font-medium tracking-tight max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)]">
              Pioneering <span className="text-zinc-900">AI-driven context-aware interaction</span>, <br/>
              <span className="text-zinc-900 italic font-serif">Embodied Cognition</span>, and Educational Games.
            </p>
          </motion.div>
        </div>
      </header>

      {/* 2. About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-4">
          <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-zinc-100 shadow-xl border-4 border-white">
            <img 
              src="https://pub-44bbe4813e3c492a92c15ad2f4fccbd0.r2.dev/%E6%9C%B1%E9%80%9A%E7%94%9F%E6%B4%BB%E7%85%A7.jpg" 
              alt="Tong Zhu"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-8 space-y-6">
          <h2 className="text-4xl font-black text-zinc-900 tracking-tight">
            Linking Computational Logic and Human Sentience through AI.
          </h2>
          
          <div className="space-y-4 text-base text-zinc-500 leading-relaxed font-medium">
            <p>
              I am Tong Zhu, a Master’s graduate in Computer Technology from <span className="text-zinc-900">Peking University</span>, where I researched AI agent in games under the guidance of <span className="text-blue-600 font-semibold">Prof. Ping Wang</span> and <span className="text-blue-600 font-semibold">Mr. Jie Xu</span>.
            </p>
            <p>
               I am currently serving as a Remote Research Assistant at the Faculty of Education, <span className="text-zinc-900">The University of Hong Kong</span> , collaborating with <span className="text-blue-600 font-semibold">Prof. Zhichun Liu</span> on AI-Assisted Design and educational games.
            </p>
            <p>
              My goal is to explore how AI and Immersive Space can provide transformative experiences through the lens of Embodied Cognition.
            </p>
          </div>

          <div className="flex gap-3 pt-4">
             <a href="https://github.com/leothismorning" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl border border-zinc-100 flex items-center justify-center text-zinc-400 hover:text-blue-600 hover:bg-white hover:shadow-md transition-all">
                <Github className="w-5 h-5" />
             </a>
             <a href="https://leothismorning.github.io/ztcv/cv_tongzhu.pdf" target="_blank" rel="noopener noreferrer" className="h-10 px-6 rounded-xl bg-zinc-900 text-white flex items-center gap-2 font-bold text-[13px] hover:bg-blue-600 transition-colors shadow-lg shadow-zinc-200">
               <FileText className="w-4 h-4" />
               View CV
             </a>
          </div>
        </div>
      </section>

      {/* 3. Categorized Career Timeline */}
      <section id="experience" className="bg-zinc-50 py-2 border-y border-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-blue-600 font-black uppercase tracking-widest text-[10px]">Academic & Professional</span>
            <h2 className="text-4xl font-black tracking-tight text-zinc-900 mt-2">Experience</h2>
          </div>
          
          {/* Research Experience (First 3) */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px flex-1 bg-zinc-200" />
              <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-400 whitespace-nowrap">Research Experience</h3>
              <div className="h-px flex-1 bg-zinc-200" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {RESEARCH_EXPERIENCES.map((exp, i) => (
                <ExperienceCard key={i} exp={exp} />
              ))}
            </div>
          </div>

          {/* Industry Experience (Last 2) */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px flex-1 bg-zinc-200" />
              <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-400 whitespace-nowrap">Industry Internships</h3>
              <div className="h-px flex-1 bg-zinc-200" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {INDUSTRY_EXPERIENCES.map((exp, i) => (
                <ExperienceCard key={i} exp={exp} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Portfolio Works Grid */}
      <section id="works" className="max-w-6xl mx-auto px-6 py-24 bg-white">
        <div className="mb-16">
          <span className="text-blue-600 font-black uppercase tracking-widest text-[10px]">Research & Projects</span>
          <h2 className="text-4xl font-black tracking-tight text-zinc-900 mt-2">Selected Works</h2>
          <p className="text-zinc-400 text-sm mt-3 font-medium">Click on project cards to explore detailed demonstrations, videos, or presentations.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* 5. Footer */}
      <footer id="contact" className="py-24 border-t border-zinc-100 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
            <div>
              <h3 className="text-4xl font-black mb-4 tracking-tight text-zinc-900">Let's connect.</h3>
              <p className="text-zinc-400 text-base max-w-sm">Open for collaborations in HCI and Spatial AI research.</p>
            </div>
            <div className="flex flex-col gap-4 items-start md:items-end">
              <a href="mailto:zhutong@alumni.pku.edu.cn" className="text-2xl md:text-3xl font-black text-zinc-900 hover:text-blue-600 transition-all tracking-tight">
                zhutong@alumni.pku.edu.cn
              </a>
              <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-zinc-300">
                <span>PKU Digital Media Lab</span>
                <span>|</span>
                <span>HKU Faculty of Education</span>
              </div>
            </div>
          </div>
          
          <div className="mt-24 pt-8 border-t border-zinc-200/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold text-zinc-400 tracking-widest uppercase">
            <p>© 2026 Tong Zhu · Portfolio</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-zinc-900">Powered by Passion, Guided by Integrity.</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
