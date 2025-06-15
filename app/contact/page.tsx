import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Github, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact - Helal Uddin',
  description: 'Get in touch with Helal Uddin for web development projects, consulting, or collaboration opportunities.',
};

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@helaluddin.dev',
      description: 'Send me an email anytime',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: 'Available for remote work',
      description: 'Let\'s schedule a call',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Dhaka, Bangladesh',
      description: 'Available worldwide remotely',
    },
    {
      icon: Clock,
      title: 'Response Time',
      content: 'Within 24 hours',
      description: 'I typically respond quickly',
    },
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/helaluddin', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/helaluddin', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/helaluddin', icon: Twitter },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-blue-50/30 dark:to-blue-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Let's Work <span className="text-primary">Together</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ready to bring your ideas to life? I'm here to help you create exceptional 
              digital experiences. Get in touch and let's discuss your project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="text-center border-0 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium text-foreground mb-2">{info.content}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Let's Connect</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    I'm always open to discussing new opportunities, 
                    interesting projects, and potential collaborations.
                  </p>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold">What I can help with:</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Full-stack web development</li>
                      <li>• E-commerce solutions</li>
                      <li>• Technical consulting</li>
                      <li>• API development</li>
                      <li>• Performance optimization</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Follow Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={link.name}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <Icon className="h-5 w-5" />
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;