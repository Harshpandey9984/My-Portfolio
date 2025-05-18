'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import Navigation from '../../../components/Navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

// This would typically come from a database or CMS
const projects = [
  {
    id: 1,
    title: 'Design System',
    description: 'Creating a lean design system for a major tech company',
    fullDescription: `A comprehensive design system built to streamline the development process and maintain consistency across multiple platforms. The system includes:
    
    • Component Library
    • Typography System
    • Color Palette
    • Spacing Guidelines
    • Interactive States
    • Accessibility Standards`,
    category: 'design',
    image: '/placeholder-1.jpg',
    technologies: ['Figma', 'Sketch', 'Adobe XD'],
    gallery: [
      '/project1-1.jpg',
      '/project1-2.jpg',
      '/project1-3.jpg'
    ],
    challenges: [
      'Maintaining consistency across platforms',
      'Scalability requirements',
      'Integration with existing systems'
    ],
    solutions: [
      'Created modular component system',
      'Implemented version control',
      'Developed comprehensive documentation'
    ],
    testimonial: {
      text: "The design system has significantly improved our development speed and consistency.",
      author: "Sarah Johnson",
      role: "Product Manager"
    },
    nextSteps: [
      'Expand component library',
      'Add animation guidelines',
      'Develop plugin ecosystem'
    ]
  },
  // Add more project details...
]

export default function ProjectDetails() {
  const params = useParams()
  const project = projects.find(p => p.id === Number(params.id))
  const [activeImage, setActiveImage] = React.useState(0)

  if (!project) {
    return (
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Project not found</h1>
          <Link href="/portfolio" className="mt-4 inline-block text-primary-color hover:underline">
            Return to Portfolio
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={project.gallery[activeImage]}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="flex space-x-2">
              {project.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden transition-opacity ${
                    activeImage === index ? 'opacity-100 ring-2 ring-primary-color' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${project.title} thumbnail ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Project Info */}
          <div className="space-y-8">
            <div>
              <motion.h1 
                className="text-4xl font-bold mb-4 gradient-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {project.title}
              </motion.h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                {project.fullDescription}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">Challenges</h2>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <span className="mr-2">•</span>
                      {challenge}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 dark:text-white">Solutions</h2>
                <ul className="space-y-2">
                  {project.solutions.map((solution, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <span className="mr-2">•</span>
                      {solution}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {project.testimonial && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
              >
                <blockquote className="text-gray-600 dark:text-gray-300 italic">
                  "{project.testimonial.text}"
                </blockquote>
                <div className="mt-4">
                  <p className="font-semibold dark:text-white">{project.testimonial.author}</p>
                  <p className="text-gray-500 dark:text-gray-400">{project.testimonial.role}</p>
                </div>
              </motion.div>
            )}

            <div>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">Next Steps</h2>
              <ul className="space-y-2">
                {project.nextSteps.map((step, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <span className="mr-2">•</span>
                    {step}
                  </motion.li>
                ))}
              </ul>
            </div>

            <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                ← Back to Portfolio
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 