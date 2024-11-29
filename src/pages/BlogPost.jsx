import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';

export const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const currentPost = blogPosts.find(p => p.id === parseInt(id));
    setPost(currentPost);

    const related = blogPosts
      .filter(p => p.category === currentPost?.category && p.id !== currentPost?.id)
      .slice(0, 3);
    setRelatedPosts(related);
  }, [id]);

  if (!post) return null;

  return (
    <div className="relative">
      {/* خلفية الهيدر */}
      <div className="absolute top-0 left-0 right-0 h-[70vh] bg-primary-900 -z-10" />

      {/* المحتوى */}
      <div className="relative pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* عنوان المقال */}
          <div className="text-center text-white mb-16">
            <Link 
              to="/blog"
              className="inline-flex items-center text-white hover:text-blue-200 mb-8"
            >
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              العودة إلى المدونة
            </Link>
            
            <span className="block text-sm bg-white/20 text-white px-3 py-1 rounded-full w-fit mx-auto">
              {post.category}
            </span>
            
            <h1 className="text-4xl font-bold mt-4 mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center">
              <img 
                src={post.author.avatar} 
                alt={post.author.name}
                className="w-12 h-12 rounded-full ring-2 ring-white/50"
              />
              <div className="mr-3 text-right">
                <p className="font-medium text-white">{post.author.name}</p>
                <p className="text-sm text-white/80">{post.date}</p>
              </div>
            </div>
          </div>

          {/* محتوى المقال */}
          <div className="mt-16 bg-gray-50 rounded-t-3xl py-20">
            {/* صورة المقال */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl mx-auto mb-12 px-4"
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>

            {/* نص المقال */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="prose prose-lg max-w-3xl mx-auto px-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* الوسوم */}
            <div className="mt-12 max-w-3xl mx-auto px-4 flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* المقالات ذات الصلة */}
            {relatedPosts.length > 0 && (
              <div className="mt-20 max-w-3xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  مقالات ذات صلة
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <Link 
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.id}`}
                      className="block group"
                    >
                      <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={relatedPost.image} 
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {relatedPost.date}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};