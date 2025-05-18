'use client'
import React from 'react'
import Navigation from '../../components/Navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'

const posts = [
  {
    id: 1,
    title: 'The Future of UI Design',
    excerpt: 'Exploring upcoming trends in user interface design and what they mean for designers and developers.',
    content: 'Full article content here...',
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Design',
    image: '/placeholder-1.jpg',
    author: {
      name: 'John Doe',
      avatar: '/avatar-1.jpg'
    },
    tags: ['UI Design', 'Trends', 'Design Systems']
  },
  {
    id: 2,
    title: 'Building Better Design Systems',
    excerpt: 'A comprehensive guide to creating and maintaining design systems that scale.',
    content: 'Full article content here...',
    date: '2024-03-10',
    readTime: '8 min read',
    category: 'Development',
    image: '/placeholder-2.jpg',
    author: {
      name: 'Jane Smith',
      avatar: '/avatar-2.jpg'
    },
    tags: ['Design Systems', 'Development', 'Best Practices']
  },
  {
    id: 3,
    title: 'The Role of AI in Modern Design',
    excerpt: 'How artificial intelligence is shaping the future of design and development.',
    content: 'Full article content here...',
    date: '2024-03-05',
    readTime: '6 min read',
    category: 'Technology',
    image: '/placeholder-3.jpg',
    author: {
      name: 'Mike Johnson',
      avatar: '/avatar-3.jpg'
    },
    tags: ['AI', 'Design', 'Technology']
  },
  // Add more blog posts as needed
]

const calculateReadTime = (content: string): string => {
  const wordsPerMinute = 200
  const words = content.split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = React.useState('all')
  const categories = ['All', 'Design', 'Development', 'Technology']

  const filteredPosts = selectedCategory.toLowerCase() === 'all'
    ? posts
    : posts.filter(post => post.category.toLowerCase() === selectedCategory.toLowerCase())

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 gradient-text"
        >
          Blog
        </motion.h1>

        <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
          {categories.map(category => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors duration-300 ${
                selectedCategory === category
                  ? 'bg-black dark:bg-white text-white dark:text-black'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <motion.article 
              key={post.id} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-white/90 dark:bg-black/90 text-black dark:text-white rounded-full px-3 py-1 text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative h-8 w-8 rounded-full overflow-hidden mr-3">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{post.author.name}</p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white hover:text-primary-color dark:hover:text-primary-color transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="inline-block bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-primary-color dark:text-primary-color font-medium hover:underline"
                >
                  Read More →
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  )
} 