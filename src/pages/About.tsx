import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/shared/Card';
import { Award, Target, Users } from 'lucide-react';
import { teamMembers } from '../data/team';

export const About = () => {
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
            <h1 className="text-4xl font-bold mb-6">من نحن</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              نحن فريق متخصص من الخبراء اللغويين والمترجمين المحترفين، نسعى لتقديم أفضل الخدمات اللغوية بأعلى معايير الجودة
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="text-center">
                <Award className="w-12 h-12 mx-auto mb-4 text-primary-600" />
                <h3 className="text-xl font-bold mb-2">رؤيتنا</h3>
                <p className="text-gray-600">
                  أن نكون الخيار الأول في تقديم الخدمات اللغوية المتميزة على مستوى العالم العربي
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="text-center">
                <Target className="w-12 h-12 mx-auto mb-4 text-primary-600" />
                <h3 className="text-xl font-bold mb-2">رسالتنا</h3>
                <p className="text-gray-600">
                  تقديم خدمات لغوية احترافية تساهم في تطوير المحتوى العربي وتعزيز التواصل العالمي
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Card className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-primary-600" />
                <h3 className="text-xl font-bold mb-2">قيمنا</h3>
                <p className="text-gray-600">
                  الاحترافية، الدقة، الالتزام، والابتكار في كل ما نقدمه من خدمات
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">فريقنا</h2>
            <p className="mt-4 text-xl text-gray-600">
              نخبة من الخبراء المتخصصين في مجال اللغة العربية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                  <p className="text-primary-600 text-center mb-4">{member.role}</p>
                  <p className="text-gray-600 text-center">{member.bio}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};