import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Book } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // إذا كان التمرير أكثر من 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg text-black' : 'bg-transparent text-white'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Book className={`h-8 w-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
              <span className="mr-2 text-2xl font-bold">الدارس</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link to="/" className="hover:text-blue-600">الرئيسية</Link>
            <Link to="/services" className="hover:text-blue-600">خدماتنا</Link>
            <Link to="/about" className="hover:text-blue-600">من نحن</Link>
            <Link to="/clients" className="hover:text-blue-600">عملاؤنا</Link>
            <Link to="/blog" className="hover:text-blue-600">المدونة</Link>
            <Link to="/contact" className="hover:text-blue-600">اتصل بنا</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
