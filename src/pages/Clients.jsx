import React from 'react';
import { motion } from 'framer-motion';
import { clients } from '../data/clients';

export const Clients = () => {
  return (
    <div className="relative">
      {/* خلفية الهيدر */}
      <div className="absolute top-0 left-0 right-0 h-[70vh] bg-primary-900 -z-10" />

      {/* المحتوى */}
      <div className="relative pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-8"
            >
              عملاؤنا
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-16"
            >
              نفتخر بثقة كبرى المؤسسات التعليمية والأكاديمية في خدماتنا
            </motion.p>
          </div>

          {/* قسم البطاقات */}
          <div className="mt-16 bg-gray-50 rounded-t-3xl py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clients.map((client, index) => (
                <motion.div
                  key={client.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-center h-52 bg-white rounded-lg mb-6">
                      <div className="w-full h-40 p-4 flex items-center justify-center">
                        <img 
                          src={client.logo} 
                          alt={client.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                      {client.name}
                    </h3>
                    <p className="text-gray-600 mb-6 text-center">
                      {client.description}
                    </p>
                    <div className="space-y-2 bg-gray-50 p-4 rounded-lg">
                      {client.projects.map((project, idx) => (
                        <div 
                          key={idx} 
                          className="text-sm text-gray-600 flex items-start"
                        >
                          <span className="ml-2 text-blue-600">•</span>
                          <span>{project}</span>
                        </div>
                      ))}
                    </div>
                    {client.testimonial && (
                      <blockquote className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <p className="text-gray-700 text-sm">"{client.testimonial}"</p>
                        <footer className="mt-2 text-sm text-gray-600">
                          - {client.testimonialAuthor}
                        </footer>
                      </blockquote>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};