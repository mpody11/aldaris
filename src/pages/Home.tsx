import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/home/Hero';
import { Stats } from '../components/home/Stats';
import { services } from '../data/services';
import { motion } from 'framer-motion';

export const Home = () => {
  const navigate = useNavigate();

  const handleStartProject = () => {
    navigate('/contact');
  };

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <div>
      <Hero onStartProject={handleStartProject} onLearnMore={handleLearnMore} />
      
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              خدماتنا
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              نقدم مجموعة متكاملة من الخدمات اللغوية الاحترافية
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center">
                  <service.icon className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-center text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600 text-center">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="ml-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
    </div>
  );
};