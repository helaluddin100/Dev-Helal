import { Code, Smartphone, Database, Globe, Zap, Headphones } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Full Stack Web Development',
    description: 'Complete web application development from frontend to backend, including database design and API integration.',
    icon: Code,
    features: [
      'React & Next.js Development',
      'Node.js & PHP Backend',
      'Database Design & Optimization',
      'RESTful API Development',
      'Authentication & Security',
    ],
  },
  {
    id: '2',
    title: 'Responsive Web Design',
    description: 'Creating beautiful, mobile-first websites that work perfectly across all devices and screen sizes.',
    icon: Smartphone,
    features: [
      'Mobile-First Design',
      'Cross-Browser Compatibility',
      'Performance Optimization',
      'Modern UI/UX Design',
      'Accessibility Standards',
    ],
  },
  {
    id: '3',
    title: 'Database Architecture',
    description: 'Designing and implementing scalable database solutions for optimal performance and data integrity.',
    icon: Database,
    features: [
      'Database Design & Modeling',
      'Query Optimization',
      'Data Migration Services',
      'Backup & Recovery Solutions',
      'Performance Monitoring',
    ],
  },
  {
    id: '4',
    title: 'E-commerce Solutions',
    description: 'Building powerful e-commerce platforms with payment integration, inventory management, and admin panels.',
    icon: Globe,
    features: [
      'Custom E-commerce Development',
      'Payment Gateway Integration',
      'Inventory Management',
      'Order Processing Systems',
      'Admin Dashboard',
    ],
  },
  {
    id: '5',
    title: 'Performance Optimization',
    description: 'Optimizing web applications for speed, SEO, and user experience to achieve maximum performance.',
    icon: Zap,
    features: [
      'Speed Optimization',
      'SEO Implementation',
      'Core Web Vitals',
      'Image Optimization',
      'Caching Strategies',
    ],
  },
  {
    id: '6',
    title: 'Technical Consulting',
    description: 'Providing expert technical guidance and consulting services for your development projects.',
    icon: Headphones,
    features: [
      'Architecture Planning',
      'Technology Stack Selection',
      'Code Review & Auditing',
      'Performance Analysis',
      'Best Practices Implementation',
    ],
  },
];