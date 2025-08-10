import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, Eye } from "lucide-react";
import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Exploring the latest trends in web development including AI integration, micro-frontends, and progressive web apps that are shaping the industry.",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=300&fit=crop",
      category: "Web Development",
      date: "December 15, 2024",
      readTime: "8 min read",
      views: "2.3k"
    },
    {
      title: "Creating Effective Brand Identities in the Digital Age",
      excerpt: "A comprehensive guide to building strong brand identities that resonate with modern audiences across digital platforms.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=300&fit=crop",
      category: "Branding",
      date: "December 10, 2024",
      readTime: "6 min read",
      views: "1.8k"
    },
    {
      title: "UI/UX Design Principles for Better User Experience",
      excerpt: "Essential design principles that every designer should know to create intuitive and engaging user interfaces.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=300&fit=crop",
      category: "UI/UX Design",
      date: "December 5, 2024",
      readTime: "10 min read",
      views: "3.1k"
    },
    {
      title: "Digital Marketing Strategies That Actually Work",
      excerpt: "Data-driven marketing strategies and tactics that deliver real results for businesses of all sizes.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
      category: "Digital Marketing",
      date: "November 28, 2024",
      readTime: "12 min read",
      views: "2.7k"
    },
    {
      title: "Cybersecurity Best Practices for Web Applications",
      excerpt: "Essential security measures and best practices to protect your web applications from common threats and vulnerabilities.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=300&fit=crop",
      category: "Security",
      date: "November 20, 2024",
      readTime: "15 min read",
      views: "1.9k"
    },
    {
      title: "The Psychology of Color in Web Design",
      excerpt: "Understanding how color choices affect user behavior and conversion rates in web design and digital marketing.",
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=300&fit=crop",
      category: "Design",
      date: "November 15, 2024",
      readTime: "7 min read",
      views: "2.2k"
    }
  ];

  

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
            My{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on web development, design, digital marketing, and technology trends. 
            Stay updated with the latest in the digital world.
          </p>
        </div>


        {/* Featured Post */}
        <div className="mb-16 animate-fade-in">
          <Card className="overflow-hidden border-primary/20 bg-gradient-card backdrop-blur-sm shadow-luxury">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <Badge variant="secondary">{blogPosts[0].category}</Badge>
                  <h2 className="text-3xl font-bold text-foreground">{blogPosts[0].title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {blogPosts[0].date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {blogPosts[0].readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {blogPosts[0].views} views
                    </div>
                  </div>
                  <Button 
                    variant="luxury" 
                    className="w-fit group"
                    onClick={() => window.open('https://blogger.com/blog-post-1', '_blank')}
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <Card 
              key={post.title}
              className="group hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 border-primary/20 bg-gradient-card backdrop-blur-sm overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    {post.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Eye className="h-4 w-4" />
                    {post.views} views
                  </div>
                  <Button 
                    variant="premium" 
                    size="sm" 
                    className="group"
                    onClick={() => window.open(`https://blogger.com/blog-post-${index + 2}`, '_blank')}
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </div>
    <WhatsAppButton />
    </>
  );
};

export default Blog;