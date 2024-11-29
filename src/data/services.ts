import { Service } from '../types';
import { BookCheck, Languages, PenTool, BookOpen } from 'lucide-react';

export const services: Service[] = [
  {
    id: 'proofreading',
    title: 'التدقيق اللغوي',
    description: 'خدمة احترافية لتصحيح وتحسين النصوص العربية',
    icon: BookCheck,
    features: [
      'تصحيح الأخطاء النحوية والإملائية',
      'تحسين الأسلوب والصياغة',
      'مراجعة علامات الترقيم',
      'تنسيق النص وتنظيمه'
    ]
  },
  {
    id: 'translation',
    title: 'الترجمة',
    description: 'ترجمة احترافية من وإلى اللغة العربية',
    icon: Languages,
    features: [
      'ترجمة أكاديمية دقيقة',
      'ترجمة المحتوى التجاري',
      'ترجمة المواقع الإلكترونية',
      'ترجمة الوثائق القانونية'
    ]
  },
  {
    id: 'content',
    title: 'كتابة المحتوى',
    description: 'إنشاء محتوى عربي أصيل وجذاب',
    icon: PenTool,
    features: [
      'كتابة المقالات والأبحاث',
      'إنشاء المحتوى التسويقي',
      'كتابة المحتوى التعليمي',
      'تطوير المحتوى الرقمي'
    ]
  },
  {
    id: 'book-design',
    title: 'تصميم الكتب',
    description: 'تصميم داخلي احترافي للكتب والمنشورات',
    icon: BookOpen,
    features: [
      'تنسيق الصفحات',
      'اختيار الخطوط المناسبة',
      'تصميم الفهارس',
      'إعداد الغلاف الداخلي'
    ]
  }
];