import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';

export const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];
  
  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

    return (
        <div className="relative">  {/* أضفنا relative هنا */}
          {/* خلفية الهيدر */}
          <div className="absolute top-0 left-0 right-0 h-[70vh] bg-primary-900 -z-10" />
      
          {/* المحتوى */}
          <div className="relative pt-32"> {/* أضفنا pt-32 لإضافة مسافة تحت الهيدر */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center text-white"> {/* غيرنا لون النص إلى أبيض */}
                <motion.h1 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl font-bold mb-8"
                >
                  المدونة
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl mb-8"
                >
                  اكتشف أحدث المقالات والأخبار في مجال الترجمة والتعريب
                </motion.p>
              </div>
      
              <div className="mt-16 bg-gray-50 rounded-t-3xl py-20"> {/* أضفنا rounded-t-3xl */}
      
        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-blue-50'
              } transition-colors duration-300`}
            >
              {category === 'all' ? 'جميع المقالات' : category}
            </motion.button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                to={`/blog/${post.id}`}
                className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center mt-4">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="mr-3">
                      <p className="text-sm font-medium text-gray-900">
                        {post.author.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {post.author.role}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </div>
    </div>

  );
};