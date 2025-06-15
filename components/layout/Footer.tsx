import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/helaluddin', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/helaluddin', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/helaluddin', icon: Twitter },
    { name: 'Email', href: 'mailto:hello@helaluddin.dev', icon: Mail },
  ];

  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-secondary/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="font-bold text-2xl text-primary mb-4 block">
              Helal<span className="text-blue-600">.</span>dev
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Full Stack Web Developer passionate about creating exceptional digital experiences. 
              Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Get In Touch</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>hello@helaluddin.dev</p>
              <p>Available for freelance projects</p>
              <p>Based in Bangladesh</p>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 mt-8 text-center text-muted-foreground">
          <p className="flex items-center justify-center space-x-1">
            <span>© {new Date().getFullYear()} Helal Uddin. Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>using Next.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;