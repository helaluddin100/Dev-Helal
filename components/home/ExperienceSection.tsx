'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, Award, Users, Code2 } from 'lucide-react';
import { EXPERIENCE } from '@/lib/constants';

const ExperienceSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { icon: Code2, value: '5+', label: 'Years Experience', color: 'from-purple-500 to-pink-500' },
    { icon: Award, value: '50+', label: 'Projects Completed', color: 'from-blue-500 to-cyan-500' },
    { icon: Users, value: '30+', label: 'Happy Clients', color: 'from-green-500 to-emerald-500' },
    { icon: Briefcase, value: '15+', label: 'Technologies', color: 'from-orange-500 to-red-500' },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full text-purple-700 dark:text-purple-300 text-sm font-medium mb-4">
            My Journey
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold mb-6">
            Professional <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            5+ years of crafting exceptional web experiences and leading development teams to success
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                  <Icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-poppins font-bold text-gray-800 dark:text-white mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 rounded-full hidden md:block" />
            
            {EXPERIENCE.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-16 md:ml-20"
              >
                {/* Timeline dot */}
                <div className="absolute -left-24 top-8 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg hidden md:block" />
                
                <div className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:shadow-2xl border border-white/20 dark:border-gray-700/20 transition-all duration-500 hover:transform hover:scale-105">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                      <div className="flex items-center space-x-2 text-sm text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full">
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium">{item.year}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <MapPin className="h-4 w-4" />
                        <span>{item.company}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-poppins font-bold mb-4 flex items-center space-x-3 text-gray-800 dark:text-white group-hover:text-purple-600 transition-colors">
                    <Briefcase className="h-6 w-6 text-purple-600" />
                    <span>{item.title}</span>
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;