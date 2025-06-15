import { Metadata } from 'next';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { SKILLS, EXPERIENCE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About - Helal Uddin',
  description: 'Learn more about Helal Uddin, a Full Stack Web Developer with 5+ years of experience in modern web technologies.',
};

const AboutPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-blue-50/30 dark:to-blue-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                About <span className="text-primary">Me</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate Full Stack Web Developer with over 5 years of experience 
                creating exceptional digital experiences. I specialize in modern web technologies 
                and love turning complex problems into simple, beautiful solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing my knowledge through blog posts and tutorials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex items-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Download CV</span>
                </Button>
                <Button variant="outline" size="lg">
                  Get In Touch
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <Image
                  src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Helal Uddin"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  5+ Years
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to create exceptional web experiences
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SKILLS.map((skill, index) => (
                <div key={skill.name} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Work Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and career milestones
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {EXPERIENCE.map((exp, index) => (
                <Card key={index} className="border-0 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                        {exp.year}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Dhaka, Bangladesh</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">hello@helaluddin.dev</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Available for remote work</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">What I Do</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Full Stack Development</h3>
                    <p className="text-muted-foreground text-sm">
                      Building complete web applications from frontend to backend
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">UI/UX Design</h3>
                    <p className="text-muted-foreground text-sm">
                      Creating beautiful and intuitive user interfaces
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Technical Consulting</h3>
                    <p className="text-muted-foreground text-sm">
                      Providing expert advice on technology choices and architecture
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;