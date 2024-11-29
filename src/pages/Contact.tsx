import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/shared/Button';

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div>
      {/* الجزء الأزرق تحت الهيدر */}
      <div className="bg-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">ابدأ مشروعك معنا</h1>
            <p className="text-xl">نحن هنا لمساعدتك في تحقيق أهدافك</p>
          </motion.div>
        </div>
      </div>

      {/* بقية الصفحة بخلفية بيضاء */}
      <div className="bg-white text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* نموذج الاتصال */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-100 rounded-lg shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">الاسم</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">نوع الخدمة</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-blue-500">
                  <option value="proofreading">التدقيق اللغوي</option>
                  <option value="translation">الترجمة</option>
                  <option value="content">كتابة المحتوى</option>
                  <option value="book-design">تصميم الكتب</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">تفاصيل المشروع</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  required
                ></textarea>
              </div>
              <Button
                variant="primary"
                className="w-full bg-blue-500 text-white hover:bg-blue-600 flex items-center justify-center"
              >
                <Send className="ml-2 h-5 w-5" />
                إرسال الطلب
              </Button>
            </form>
          </motion.div>

          {/* معلومات الاتصال */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
<div className="bg-gray-100 rounded-lg shadow-lg p-6">
  <div className="flex items-center mb-4">
    {/* أيقونة الهاتف */}
    <Phone className="h-8 w-8 text-blue-500 ml-4" />
    <div>
      <h3 className="text-lg font-semibold text-black">اتصل بنا</h3>
      <p className="text-black" dir="ltr">
        <a
          href="https://wa.me/201121338691"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          +20 112 133 8691
        </a>
      </p>
    </div>
  </div>
</div>

<div className="bg-gray-100 rounded-lg shadow-lg p-6">
  <div className="flex items-center mb-4">
    {/* أيقونة البريد */}
    <Mail className="h-8 w-8 text-blue-500 ml-4" />
    <div>
      <h3 className="text-lg font-semibold text-black">راسلنا</h3>
      <p className="text-black">
        <a
          href="mailto:info@aldaris.com"
          className="hover:underline"
        >
          info@aldaris.com
        </a>
      </p>
    </div>
  </div>
</div>

            <div className="bg-gray-100 rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <MapPin className="h-8 w-8 text-blue-500 ml-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-700">موقعنا</h3>
                  <p className="text-gray-600">القاهرة، الشيخ زايد</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
