'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, ArrowRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PROJECTS, PROJECT_CATEGORIES } from '@/data/projects';

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS.filter(project => project.featured)
    : PROJECTS.filter(project => project.category === activeCategory && project.featured);

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-pink-400/30 to-red-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-red-100 dark:from-pink-900/30 dark:to-red-900/30 rounded-full text-pink-700 dark:text-pink-300 text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work and projects that demonstrate my skills and expertise
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            <span className="text-gray-600 dark:text-gray-400 font-medium">Filter by:</span>
          </div>
          {PROJECT_CATEGORIES.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-pink-600 to-red-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                  : 'border-2 border-pink-300 hover:border-pink-500 text-pink-700 dark:text-pink-300 hover:bg-pink-50 dark:hover:bg-pink-900/20'
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
                className="group"
              >
                <Card className="overflow-hidden bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border border-white/20 dark:border-gray-700/20 hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500 hover:transform hover:scale-105 rounded-3xl">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      {project.liveUrl && (
                        <Button size="sm" className="bg-white/20 backdrop-blur-lg text-white border border-white/30 hover:bg-white/30">
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                            <ExternalLink className="h-4 w-4" />
                            <span>Live</span>
                          </Link>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button size="sm" variant="outline" className="bg-white/20 backdrop-blur-lg text-white border border-white/30 hover:bg-white/30">
                          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                            <Github className="h-4 w-4" />
                            <span>Code</span>
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="mb-3">
                      <Badge variant="secondary" className="bg-gradient-to-r from-pink-100 to-red-100 dark:from-pink-900/30 dark:to-red-900/30 text-pink-700 dark:text-pink-300 border-0">
                        {project.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-poppins font-bold mb-3 text-gray-800 dark:text-white group-hover:text-pink-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs border-pink-200 dark:border-pink-800 text-pink-700 dark:text-pink-300">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs border-pink-200 dark:border-pink-800 text-pink-700 dark:text-pink-300">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild size="lg" className="group bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white rounded-full px-8 py-4 text-lg shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105">
            <Link href="/portfolio" className="flex items-center space-x-2">
              <span>View All Projects</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;