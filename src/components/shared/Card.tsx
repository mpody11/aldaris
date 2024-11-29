import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`bg-white rounded-xl shadow-lg p-6 transition-shadow duration-300 hover:shadow-xl ${className}`}
    >
      {children}
    </motion.div>
  );
};