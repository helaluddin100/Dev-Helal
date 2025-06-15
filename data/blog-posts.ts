export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: number;
  tags: string[];
  image: string;
  featured: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'getting-started-with-nextjs-13',
    title: 'Getting Started with Next.js 13: The Complete Guide',
    excerpt: 'Learn everything you need to know about Next.js 13, including the new app directory, server components, and improved performance features.',
    content: `
# Getting Started with Next.js 13: The Complete Guide

Next.js 13 introduces groundbreaking features that revolutionize how we build React applications. In this comprehensive guide, we'll explore the new app directory, server components, and performance improvements.

## What's New in Next.js 13

The latest version of Next.js brings several exciting features:

### 1. App Directory (Beta)
The new app directory provides a new way to organize your Next.js application with improved routing and layouts.

### 2. Server Components
React Server Components allow you to render components on the server, reducing the JavaScript bundle size and improving performance.

### 3. Improved Performance
Next.js 13 includes various performance optimizations that make your applications faster and more efficient.

## Getting Started

To create a new Next.js 13 project, run:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

## Conclusion

Next.js 13 represents a significant step forward in React development. The new features make it easier to build fast, scalable applications while maintaining excellent developer experience.
    `,
    author: 'Helal Uddin',
    publishedAt: '2024-01-15',
    readTime: 5,
    tags: ['Next.js', 'React', 'Web Development'],
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
  {
    slug: 'mastering-typescript-for-react',
    title: 'Mastering TypeScript for React Development',
    excerpt: 'Discover how TypeScript can improve your React development workflow with better type safety, IntelliSense, and maintainable code.',
    content: `
# Mastering TypeScript for React Development

TypeScript has become an essential tool for React developers. It provides type safety, better IntelliSense, and helps catch errors during development rather than runtime.

## Why TypeScript with React?

TypeScript offers several benefits for React development:

- **Type Safety**: Catch errors at compile time
- **Better IntelliSense**: Improved autocomplete and navigation
- **Self-Documenting Code**: Types serve as documentation
- **Refactoring Support**: Safer refactoring with IDE support

## Essential TypeScript Patterns for React

### 1. Component Props
Always type your component props for better development experience.

### 2. State Management
Use proper typing for useState and useReducer hooks.

### 3. Event Handlers
Type your event handlers correctly for different HTML elements.

## Best Practices

- Use interfaces for object types
- Leverage union types for flexible APIs
- Take advantage of utility types
- Keep types close to their usage

## Conclusion

TypeScript enhances the React development experience significantly. While there's a learning curve, the benefits far outweigh the initial investment.
    `,
    author: 'Helal Uddin',
    publishedAt: '2024-01-10',
    readTime: 7,
    tags: ['TypeScript', 'React', 'JavaScript'],
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
  {
    slug: 'building-scalable-apis-with-nodejs',
    title: 'Building Scalable APIs with Node.js and Express',
    excerpt: 'Learn how to build robust, scalable APIs using Node.js and Express with best practices for authentication, validation, and error handling.',
    content: `
# Building Scalable APIs with Node.js and Express

Creating scalable APIs is crucial for modern web applications. In this guide, we'll explore how to build robust APIs using Node.js and Express.

## Project Setup

Start by setting up a new Node.js project with Express:

\`\`\`bash
npm init -y
npm install express cors helmet morgan
npm install -D nodemon
\`\`\`

## Essential Middleware

Every Express API should include these essential middleware:

- **CORS**: Handle cross-origin requests
- **Helmet**: Security middleware
- **Morgan**: HTTP request logger
- **Express JSON**: Parse JSON bodies

## API Structure

Organize your API with a clear structure:

- Routes: Handle HTTP requests
- Controllers: Business logic
- Middleware: Reusable functions
- Models: Data layer

## Best Practices

1. Use proper HTTP status codes
2. Implement comprehensive error handling
3. Add input validation
4. Include rate limiting
5. Implement proper logging

## Conclusion

Building scalable APIs requires careful planning and adherence to best practices. Following these guidelines will help you create maintainable and robust APIs.
    `,
    author: 'Helal Uddin',
    publishedAt: '2024-01-05',
    readTime: 8,
    tags: ['Node.js', 'Express', 'API Development'],
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
  {
    slug: 'modern-css-techniques-2024',
    title: 'Modern CSS Techniques Every Developer Should Know in 2024',
    excerpt: 'Explore the latest CSS features and techniques that will enhance your web development skills and create better user experiences.',
    content: `
# Modern CSS Techniques Every Developer Should Know in 2024

CSS continues to evolve with new features that make styling more powerful and intuitive. Let's explore the latest techniques every developer should master.

## Container Queries

Container queries allow you to style elements based on their container's size rather than the viewport:

\`\`\`css
@container (min-width: 400px) {
  .card {
    display: flex;
  }
}
\`\`\`

## CSS Grid Subgrid

Subgrid allows nested grids to participate in their parent's grid:

\`\`\`css
.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.child {
  display: grid;
  grid-template-columns: subgrid;
}
\`\`\`

## CSS Cascade Layers

Cascade layers provide more control over the cascade:

\`\`\`css
@layer base, components, utilities;

@layer base {
  body { margin: 0; }
}
\`\`\`

## Modern Color Functions

New color functions provide better color manipulation:

\`\`\`css
.element {
  color: oklch(0.7 0.15 180);
  background: color-mix(in oklch, blue 50%, red);
}
\`\`\`

## Conclusion

These modern CSS techniques will help you create more maintainable, flexible, and powerful stylesheets. Start incorporating them into your projects today!
    `,
    author: 'Helal Uddin',
    publishedAt: '2023-12-28',
    readTime: 6,
    tags: ['CSS', 'Web Development', 'Frontend'],
    image: 'https://images.pexels.com/photos/11035540/pexels-photo-11035540.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
];