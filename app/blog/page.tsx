import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BLOG_POSTS } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: 'Blog - Helal Uddin',
  description: 'Insights, tutorials, and thoughts on web development, programming, and technology trends.',
};

const BlogPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-blue-50/30 dark:to-blue-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              My <span className="text-primary">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Insights, tutorials, and thoughts on web development, programming, and technology trends. 
              Sharing knowledge and experiences from my journey as a developer.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
            {BLOG_POSTS.filter(post => post.featured)[0] && (
              <Link href={`/blog/${BLOG_POSTS.filter(post => post.featured)[0].slug}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 bg-card/50 backdrop-blur-sm">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative overflow-hidden">
                      <Image
                        src={BLOG_POSTS.filter(post => post.featured)[0].image}
                        alt={BLOG_POSTS.filter(post => post.featured)[0].title}
                        width={600}
                        height={400}
                        className="w-full h-64 lg:h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(BLOG_POSTS.filter(post => post.featured)[0].publishedAt).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{BLOG_POSTS.filter(post => post.featured)[0].readTime} min read</span>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {BLOG_POSTS.filter(post => post.featured)[0].title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {BLOG_POSTS.filter(post => post.featured)[0].excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {BLOG_POSTS.filter(post => post.featured)[0].tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">All Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 bg-card/50 backdrop-blur-sm h-full">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{post.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;