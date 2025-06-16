'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BLOG_POSTS } from '@/data/blog-posts';

const BlogSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredPosts = BLOG_POSTS.slice(0, 4);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-indigo-900/20 dark:to-purple-900/20 relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-400/30 to-purple-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-4 flex items-center justify-center space-x-2 w-fit mx-auto">
            <BookOpen className="h-4 w-4" />
            <span>Latest Insights</span>
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold mb-6">
            Latest Blog <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Posts</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Insights, tutorials, and thoughts on web development and cutting-edge technology
          </p>
        </motion.div>

        {/* Blog Slider */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredPosts.map((post, index) => (
                <div key={post.slug} className="w-full flex-shrink-0">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group mx-4"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <Card className="h-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border border-white/20 dark:border-gray-700/20 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:transform hover:scale-105 rounded-3xl overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                          <div className="relative overflow-hidden">
                            <Image
                              src={post.image}
                              alt={post.title}
                              width={600}
                              height={400}
                              className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-0 shadow-lg">
                                Featured
                              </Badge>
                            </div>
                          </div>
                          
                          <div className="p-8 flex flex-col justify-center">
                            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>{post.readTime} min read</span>
                              </div>
                            </div>
                            
                            <h3 className="text-2xl lg:text-3xl font-poppins font-bold line-clamp-2 text-gray-800 dark:text-white group-hover:text-indigo-600 transition-colors mb-4">
                              {post.title}
                            </h3>
                            
                            <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                              {post.excerpt}
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mb-6">
                              {post.tags.slice(0, 3).map((tag) => (
                                <Badge key={tag} variant="outline" className="border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300">
                                  {tag}
                                </Badge>
                              ))}
                            </div>

                            <Button variant="ghost" className="self-start group-hover:text-indigo-600 transition-colors">
                              Read More
                              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/20 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-white/20 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {featuredPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-indigo-300 dark:hover:bg-indigo-600'
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild size="lg" className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full px-8 py-4 text-lg shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 transform hover:scale-105">
            <Link href="/blog" className="flex items-center space-x-2">
              <span>Read All Posts</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;