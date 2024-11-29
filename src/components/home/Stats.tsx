import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Award, Building } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '1000+',
    label: 'عميل راضٍ',
  },
  {
    icon: BookOpen,
    value: '5000+',
    label: 'مشروع مكتمل',
  },
  {
    icon: Award,
    value: '15+',
    label: 'سنوات خبرة',
  },
  {
    icon: Building,
    value: '50+',
    label: 'مؤسسة أكاديمية',
  },
];

export const Stats = () => {
  return (
    <section className="py-20 bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <stat.icon className="h-12 w-12 mx-auto mb-4 text-secondary-400" />
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};