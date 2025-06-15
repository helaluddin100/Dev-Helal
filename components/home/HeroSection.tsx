'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const floatingIcons = [
    { Icon: Code, delay: 0, position: 'top-20 left-20' },
    { Icon: Zap, delay: 0.5, position: 'top-40 right-20' },
    { Icon: Sparkles, delay: 1, position: 'bottom-40 left-10' },
    { Icon: Github, delay: 1.5, position: 'bottom-20 right-40' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          className={`absolute ${position} hidden lg:block`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: delay + 1 }}
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <div className="p-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl">
            <Icon className="h-8 w-8 text-purple-600" />
          </div>
        </motion.div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full text-purple-700 dark:text-purple-300 text-sm font-medium border border-purple-200/50 dark:border-purple-700/50">
              <Sparkles className="h-4 w-4 mr-2" />
              Welcome to my digital world
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-8xl font-poppins font-bold leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
              Helal Uddin
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-semibold text-gray-700 dark:text-gray-300 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Full Stack Web Developer
            </span>
          </motion.h2>
          
          {/* Description */}
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            With <span className="font-semibold text-purple-600">5+ years</span> of experience, I craft exceptional digital experiences 
            using cutting-edge technologies like <span className="font-semibold text-pink-600">React</span>, <span className="font-semibold text-blue-600">Next.js</span>, and <span className="font-semibold text-green-600">Laravel</span>. 
            Let's build something extraordinary together! ✨
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button asChild size="lg" className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8 py-4 text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Let's Work Together</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="group border-2 border-purple-300 hover:border-purple-500 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-full px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105">
              <Link href="/resume.pdf" className="flex items-center space-x-2">
                <Download className="h-5 w-5 transition-transform group-hover:scale-110" />
                <span>Download CV</span>
              </Link>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex items-center justify-center space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {[
              { Icon: Github, href: 'https://github.com/helaluddin', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://linkedin.com/in/helaluddin', label: 'LinkedIn' },
              { Icon: Mail, href: 'mailto:hello@helaluddin.dev', label: 'Email' },
            ].map(({ Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-purple-300 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 transform hover:scale-110"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              >
                <Icon className="h-6 w-6 text-purple-600 group-hover:text-pink-600 transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center p-2">
          <motion.div 
            className="w-1 h-3 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;