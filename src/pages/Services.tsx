import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { useNavigate } from 'react-router-dom';

export const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-6">خدماتنا</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              نقدم مجموعة شاملة من الخدمات اللغوية المتخصصة لتلبية احتياجاتكم
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <div className="flex items-center mb-6">
                    <service.icon className="h-12 w-12 text-primary-600 ml-4" />
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="ml-2 text-primary-600">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="primary"
                    onClick={() => navigate('/contact')}
                    className="w-full"
                  >
                    طلب الخدمة
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};