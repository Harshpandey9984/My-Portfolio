'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const posts = [
  {
    id: 1,
    title: "Modern Web Development Practices",
    excerpt: "Exploring the latest trends and best practices in web development for 2024",
    date: "March 15, 2024",
    image: "/images/blog/web-dev.jpg",
    slug: "modern-web-development"
  },
  {
    id: 2,
    title: "Design Systems in Practice",
    excerpt: "How to build and maintain a scalable design system for your projects",
    date: "March 10, 2024",
    image: "/images/blog/design-systems.jpg",
    slug: "design-systems"
  },
  {
    id: 3,
    title: "The Future of AI in Web Design",
    excerpt: "Exploring how AI is transforming the way we approach web design",
    date: "March 5, 2024",
    image: "/images/blog/ai-design.jpg",
    slug: "ai-in-web-design"
  }
]

export default function LatestPosts() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Latest Posts
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Thoughts and insights on web development and design
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-indigo-500 dark:text-indigo-400 mb-2">
                  {post.date}
                </p>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 