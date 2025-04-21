// src/components/sections/RecentPostsSection.tsx
import Link from 'next/link';
import { motion } from 'framer-motion';

// This would fetch from your CMS or Markdown files
const recentPosts = [
  {
    slug: 'building-portfolio-nextjs',
    title: 'Building a Portfolio with Next.js',
    excerpt: 'My journey creating a modern, responsive portfolio using Next.js and Tailwind CSS.',
    date: 'April 21, 2025',
  },
  // Another post...
];

export default function RecentPostsSection() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Recent Articles</h2>
          <Link 
            href="/blog" 
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Read all articles →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentPosts.map((post, index) => (
            <motion.article 
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
            >
              <Link href={`/blog/${post.slug}`} className="block group">
                <span className="text-sm text-gray-500">{post.date}</span>
                <h3 className="text-xl font-bold mt-1 mb-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{post.excerpt}</p>
                <span className="inline-block mt-4 text-blue-600 dark:text-blue-400">
                  Read more →
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}