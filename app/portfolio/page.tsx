'use client'
import React from 'react'
import Navigation from '../../components/Navigation'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'Design System',
    description: 'Creating a lean design system for a major tech company',
    category: 'design',
    image: '/placeholder-1.jpg',
    technologies: ['Figma', 'Sketch', 'Adobe XD'],
  },
  {
    id: 2,
    title: 'Interior Design News',
    description: 'News feed design and development for interior design platform',
    category: 'development',
    image: '/placeholder-2.jpg',
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 3,
    title: 'Map Search Interface',
    description: 'Interactive map search interface for travel application',
    category: 'design',
    image: '/placeholder-3.jpg',
    technologies: ['Figma', 'Protopie', 'Adobe XD'],
  },
  // Add more projects as needed
]

export default function Portfolio() {
  const [filter, setFilter] = React.useState('all')
  const [isLoading, setIsLoading] = React.useState(false)

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const handleFilterChange = (newFilter: string) => {
    setIsLoading(true)
    setFilter(newFilter)
    setTimeout(() => setIsLoading(false), 300)
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 gradient-text"
        >
          Portfolio
        </motion.h1>
        
        <div className="flex space-x-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleFilterChange('all')}
            className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
              filter === 'all' 
                ? 'bg-black dark:bg-white text-white dark:text-black' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            All
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleFilterChange('design')}
            className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
              filter === 'design' 
                ? 'bg-black dark:bg-white text-white dark:text-black' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Design
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleFilterChange('development')}
            className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
              filter === 'development' 
                ? 'bg-black dark:bg-white text-white dark:text-black' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Development
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {!isLoading && filteredProjects.map(project => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="portfolio-card bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group"
              >
                <Link href={`/portfolio/${project.id}`}>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-4 py-2 bg-white text-black rounded-lg font-medium">
                        View Details
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 dark:text-white group-hover:text-primary-color transition-colors duration-300">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="inline-block bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
  )
} 