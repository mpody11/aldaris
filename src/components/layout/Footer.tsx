import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">الدارس</h3>
            <p className="text-gray-400">
              نقدم خدمات لغوية احترافية للمؤسسات التعليمية والأكاديمية
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-white">خدماتنا</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">من نحن</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">اتصل بنا</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-2">
            <li className="flex items-center">
    <Phone className="h-5 w-5 ml-2" />
    <span className="text-gray-400" dir="ltr">
      <a
        href="https://wa.me/201121338691"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        +20 112 133 8691
      </a>
    </span>
  </li>
  <li className="flex items-center">
    <Mail className="h-5 w-5 ml-2" />
    <span className="text-gray-400">
      <a
        href="mailto:info@aldaris.com"
        className="hover:underline"
      >
        info@aldaris.com
      </a>
    </span>
  </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 ml-2" />
                <span className="text-gray-400">القاهرة، الشيخ زايد</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">النشرة البريدية</h3>
            <p className="text-gray-400 mb-4">اشترك للحصول على آخر الأخبار والتحديثات</p>
            <form className="flex">
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="px-4 py-2 rounded-r-lg flex-1 text-gray-900"
              />
              <button
                type="submit"
                className="bg-blue-600 px-4 py-2 rounded-l-lg hover:bg-blue-700"
              >
                اشتراك
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} الدارس. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};