'use client'
import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', proficiency: 90 },
      { name: 'Next.js', proficiency: 85 },
      { name: 'TypeScript', proficiency: 85 },
      { name: 'Tailwind CSS', proficiency: 90 },
      { name: 'Framer Motion', proficiency: 80 }
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', proficiency: 85 },
      { name: 'Express', proficiency: 85 },
      { name: 'Python', proficiency: 80 },
      { name: 'Django', proficiency: 75 },
      { name: 'RESTful APIs', proficiency: 90 }
    ]
  },
  {
    category: 'Database',
    items: [
      { name: 'MongoDB', proficiency: 85 },
      { name: 'PostgreSQL', proficiency: 80 },
      { name: 'Redis', proficiency: 75 },
      { name: 'Firebase', proficiency: 85 }
    ]
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git', proficiency: 90 },
      { name: 'Docker', proficiency: 80 },
      { name: 'AWS', proficiency: 75 },
      { name: 'CI/CD', proficiency: 80 },
      { name: 'Agile', proficiency: 85 }
    ]
  }
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold mb-4"
          >
            Technical Skills
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-muted-foreground"
          >
            Technologies I work with to bring ideas to life
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">
                {skillGroup.category}
              </h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">{skill.name}</span>
                      <span className="text-sm text-primary">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 