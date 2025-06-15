export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with Next.js, Stripe integration, and admin dashboard.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Web Application',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL'],
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/helaluddin/ecommerce-platform',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Web Application',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    liveUrl: 'https://example-taskapp.com',
    githubUrl: 'https://github.com/helaluddin/task-management',
    featured: true,
  },
  {
    id: '3',
    title: 'Restaurant Website',
    description: 'Modern restaurant website with online reservation system and menu management.',
    image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Website',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Sanity CMS'],
    liveUrl: 'https://example-restaurant.com',
    githubUrl: 'https://github.com/helaluddin/restaurant-website',
    featured: true,
  },
  {
    id: '4',
    title: 'Learning Management System',
    description: 'Comprehensive LMS with course creation, student progress tracking, and video streaming.',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Web Application',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Redis', 'FFmpeg'],
    liveUrl: 'https://example-lms.com',
    githubUrl: 'https://github.com/helaluddin/lms-platform',
    featured: true,
  },
  {
    id: '5',
    title: 'Real Estate Platform',
    description: 'Property listing platform with advanced search, virtual tours, and agent management.',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Web Application',
    technologies: ['Next.js', 'TypeScript', 'Mapbox', 'Prisma', 'AWS S3'],
    liveUrl: 'https://example-realestate.com',
    githubUrl: 'https://github.com/helaluddin/real-estate-platform',
    featured: false,
  },
  {
    id: '6',
    title: 'Blog Platform',
    description: 'Modern blog platform with markdown support, SEO optimization, and analytics dashboard.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Website',
    technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel Analytics'],
    liveUrl: 'https://example-blog.com',
    githubUrl: 'https://github.com/helaluddin/blog-platform',
    featured: false,
  },
];

export const PROJECT_CATEGORIES = ['All', 'Web Application', 'Website', 'Mobile App'];