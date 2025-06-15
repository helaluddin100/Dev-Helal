export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechCorp Solutions',
    content: 'Helal delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made our project a huge success.',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Startup Founder',
    company: 'InnovateNow',
    content: 'Working with Helal was a game-changer for our startup. He built our MVP in record time and helped us scale efficiently. Highly recommended!',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'Digital Agency Pro',
    content: 'Helal transformed our client\'s vision into a beautiful, functional website. His communication throughout the project was excellent, and he delivered on time.',
    avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
  },
  {
    id: '4',
    name: 'David Park',
    role: 'CTO',
    company: 'FinTech Solutions',
    content: 'Helal\'s full-stack expertise helped us build a secure, scalable platform. His knowledge of both frontend and backend technologies is impressive.',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    role: 'Business Owner',
    company: 'Local Restaurant Chain',
    content: 'Our restaurant website and online ordering system built by Helal increased our online sales by 200%. The design is beautiful and user-friendly.',
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
  },
  {
    id: '6',
    name: 'James Wilson',
    role: 'Project Manager',
    company: 'Enterprise Solutions',
    content: 'Helal delivered a complex enterprise application on time and within budget. His problem-solving skills and technical knowledge are outstanding.',
    avatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
  },
];