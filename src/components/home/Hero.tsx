import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../shared/Button';
import { GraduationCap, BookOpen, Languages } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
  onLearnMore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onLearnMore }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white overflow-hidden">
<div className="absolute inset-0 bg-[url('/hero.jpg')] opacity-10 bg-cover bg-center" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-32 sm:pb-40"
      >
        <div className="text-center">
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
          >
            نرتقي باللغة العربية
            <span className="block text-secondary-400 mt-2" style={{ marginTop: '2.5rem' }}>
  نحو آفاق جديدة
</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-10"
          >
            نقدم خدمات لغوية احترافية تجمع بين الأصالة والمعاصرة، لنساهم في تطوير المحتوى العربي
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="primary" size="lg" onClick={onStartProject}>
              ابدأ مشروعك
            </Button>
            <Button variant="outline" size="lg" onClick={onLearnMore}>
              تعرف علينا
            </Button>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: GraduationCap,
              title: "خبرة عريقة",
              description: "أكثر من 15 عاماً في مجال الخدمات اللغوية"
            },
            {
              icon: BookOpen,
              title: "جودة عالية",
              description: "معايير احترافية في التدقيق والمراجعة"
            },
            {
              icon: Languages,
              title: "تنوع الخدمات",
              description: "حلول متكاملة للمحتوى العربي"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center"
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-secondary-400" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-900 to-transparent" />
    </div>
  );
};