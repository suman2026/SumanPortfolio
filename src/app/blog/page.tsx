// src/app/blog/page.tsx
import Link from 'next/link';
import { Metadata } from 'next';
import NewsletterSignup from '../../components/ui/NewsletterSignup'; // Adjust the path as needed

export const metadata: Metadata = {
  title: 'Blog | Your Portfolio',
  description: 'Technical articles and thoughts on web development',
};

// This would eventually come from your CMS or Markdown files
const posts = [
  {
    slug: 'building-portfolio-nextjs',
    title: 'Building a Portfolio with Next.js',
    excerpt: 'My journey creating a modern, responsive portfolio using Next.js and Tailwind CSS.',
    date: 'April 21, 2025',
  },
  // More posts...
];

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Blog</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-12">
        Thoughts, tutorials and insights about web development and design.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map(post => (
          <article key={post.slug} className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <Link href={`/blog/${post.slug}`}>
              <div className="p-6">
                <span className="text-sm text-gray-500">{post.date}</span>
                <h2 className="text-xl font-bold mt-1 mb-2">{post.title}</h2>
                <p className="text-gray-600 dark:text-gray-400">{post.excerpt}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Stay Updated</h2>
        <div className="max-w-md">
          <NewsletterSignup />
        </div>
      </div>
    </main>
  );
}