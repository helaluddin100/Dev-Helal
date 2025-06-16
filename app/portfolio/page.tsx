import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, Filter, Calendar, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PROJECTS, PROJECT_CATEGORIES } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Portfolio - Helal Uddin',
  description: 'Explore my portfolio of web development projects including e-commerce platforms, web applications, and modern websites.',
};

const PortfolioPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-purple-50/30 dark:to-purple-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full text-purple-700 dark:text-purple-300 text-sm font-medium mb-4 flex items-center justify-center space-x-2 w-fit mx-auto">
              <Code className="h-4 w-4" />
              <span>My Work</span>
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              My <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A collection of projects that showcase my skills in full-stack web development, 
              from e-commerce platforms to modern web applications. Each project represents 
              a unique challenge and solution.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="flex items-center space-x-2 mb-4">
              <Filter className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              <span className="text-gray-600 dark:text-gray-400 font-medium">Filter by:</span>
            </div>
            {PROJECT_CATEGORIES.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="rounded-full px-6 py-2 border-2 border-purple-300 hover:border-purple-500 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <div key={project.id} className="group">
                <Card className="overflow-hidden bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border border-white/20 dark:border-gray-700/20 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:transform hover:scale-105 rounded-3xl h-full">
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
                  
                  <CardHeader>
                    <div className="mb-3">
                      <Badge variant="secondary" className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 border-0">
                        {project.category}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how I can help bring your ideas to life with modern web technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8 py-4 text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-purple-300 hover:border-purple-500 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-full px-8 py-4 text-lg transition-all duration-300">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;