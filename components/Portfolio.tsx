'use client'
import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioCard from './PortfolioCard';
import ProjectModal from './ProjectModal';

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  category: string;
  link: string;
}

const projects = [
  {
    id: 1,
    title: "Textify",
    description: "A speech-to-text transcription tool that supports multiple languages, forked from ayushsoni1010/textify.",
    imageUrl: "/images/projects/textify.jpg",
    tags: ["TypeScript", "Speech Recognition", "Internationalization"],
    category: "ai",
    link: "https://github.com/Harshpandey9984/textify"
  },
  {
    id: 2,
    title: "Paw Some City",
    description: "A full-stack pet adoption platform featuring real-time pet listings, user authentication, adoption request management, and an interactive map for nearby shelters. Includes admin dashboard for shelter management, pet status updates, and adoption tracking. Built with MERN stack and real-time notifications.",
    imageUrl: "/images/projects/pawsome.jpg",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT Auth", "Socket.io", "Google Maps API", "Material-UI"],
    category: "web",
    link: "https://github.com/Harshpandey9984/Paw-some-City"
  },
  {
    id: 3,
    title: "Portfolio",
    description: "A modern, responsive portfolio website showcasing my work and skills.",
    imageUrl: "/images/projects/portfolio.jpg",
    tags: ["Next.js", "React", "TailwindCSS", "Framer Motion"],
    category: "web",
    link: "https://github.com/Harshpandey9984/portfolio"
  },
  {
    id: 4,
    title: "React App",
    description: "A modern React application showcasing advanced React concepts including hooks, context API, and responsive design. Features include dynamic theming, real-time data updates, and interactive user interfaces.",
    imageUrl: "/images/projects/react-app.jpg",
    tags: ["React", "JavaScript", "CSS3", "Context API", "React Hooks", "Responsive Design"],
    category: "web",
    link: "https://github.com/Harshpandey9984/React-app"
  },
  {
    id: 5,
    title: "Polygon Smart Contract",
    description: "A guide for coding and deploying basic Polygon (MATIC) smart contracts.",
    imageUrl: "/images/projects/polygon.jpg",
    tags: ["JavaScript", "Blockchain", "Polygon", "Smart Contracts"],
    category: "blockchain",
    link: "https://github.com/Harshpandey9984/polygon-smart-contract-tutorial"
  },
  {
    id: 6,
    title: "Bookwarm - Decentralized Bookstore",
    description: "A Web3 bookstore with an elegant interface featuring genre-based navigation (Fiction, Marvel, Mythology, History, Hindi, Goosebumps) and MetaMask wallet integration. The platform showcases a golden-themed branding with a professional navbar and 'Find your genre and order your Book' tagline. Built on blockchain technology, it offers transparent transactions and decentralized access to digital books, complete with bestseller sections and real-time ETH pricing.",
    imageUrl: "/images/projects/bookwarm/bookwarm 6.jpg",
    tags: ["Web3.js", "Ethereum", "Smart Contracts", "React", "MetaMask", "Blockchain", "Hardhat", "Solidity", "UI/UX Design", "Genre Classification"],
    category: "blockchain",
    link: "https://github.com/Harshpandey9984/Bookwarm1"
  }
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Development' },
  { id: 'ai', label: 'AI & ML' },
  { id: 'blockchain', label: 'Blockchain' }
];

const Portfolio = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['all']);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isClient, setIsClient] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategories(prev => {
      if (categoryId === 'all') return ['all'];
      const newCategories = prev.filter(c => c !== 'all');
      if (newCategories.includes(categoryId)) {
        return newCategories.filter(c => c !== categoryId);
      }
      return [...newCategories, categoryId];
    });
  };

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = selectedCategories.includes('all') || 
        selectedCategories.includes(project.category);
      
      const matchesSearch = searchQuery === '' || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategories, searchQuery]);

  return (
    <section id="portfolio" className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern" />
      
      {/* Gradient Accent */}
      <div className="absolute inset-0 gradient-accent opacity-50" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-8 text-3d"
        >
          Featured Projects
        </motion.h2>
        
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto mb-12"
        >
          <div className="relative">
            {isClient && (
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
            )}
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </motion.div>
        
        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`pro-card-hover px-6 py-2 rounded-full text-sm font-medium transition-all
                ${selectedCategories.includes(category.id)
                  ? 'bg-white dark:bg-gray-800 text-primary shadow-lg scale-105' 
                  : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300'
                }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="animate-subtle-float"
              >
                <PortfolioCard 
                  {...project} 
                  isHovered={hoveredProject === project.id}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-600 dark:text-gray-400 mt-8"
          >
            No projects found matching your criteria.
          </motion.div>
        )}

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

export default Portfolio; 