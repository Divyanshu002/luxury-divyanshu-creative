import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Sarah Johnson",
      service: "Web Development",
      rating: 5,
      description: "Divyanshu created an amazing e-commerce website for my business. The design is beautiful and the functionality is flawless. Sales increased by 40% after launch!"
    },
    {
      name: "Michael Chen",
      service: "UI/UX Design",
      rating: 5,
      description: "Outstanding UI/UX design work! The user experience is intuitive and the interface is visually stunning. Our app engagement increased significantly."
    },
    {
      name: "Emily Rodriguez",
      service: "Resume Optimization",
      rating: 5,
      description: "Thanks to Divyanshu's resume optimization, I landed my dream job at Google! The ATS optimization and keyword placement were perfect."
    },
    {
      name: "David Thompson",
      service: "Branding & Promotions",
      rating: 5,
      description: "Complete brand transformation! From logo design to marketing materials, everything was perfectly executed. Our brand recognition has doubled."
    },
    {
      name: "Lisa Wang",
      service: "Social Media Management",
      rating: 5,
      description: "Our social media presence grew from 500 to 10K followers in just 3 months. The content strategy and engagement tactics are top-notch!"
    },
    {
      name: "James Miller",
      service: "Web Development",
      rating: 5,
      description: "Professional, fast, and reliable. The website loads lightning fast and looks amazing on all devices. Best investment for our business!"
    },
    {
      name: "Anna Kowalski",
      service: "Graphic Design",
      rating: 5,
      description: "Creative and innovative designs that perfectly captured our brand essence. The marketing materials helped us stand out from competitors."
    },
    {
      name: "Robert Lee",
      service: "UI/UX Design",
      rating: 5,
      description: "Exceptional attention to detail and user experience. The mobile app design is intuitive and users love the smooth interactions."
    },
    {
      name: "Maria Santos",
      service: "Branding & Promotions",
      rating: 4,
      description: "Great work on our rebranding project. The new identity feels fresh and modern. Communication throughout the project was excellent."
    },
    {
      name: "Thomas Anderson",
      service: "Web Development",
      rating: 5,
      description: "Delivered beyond expectations! The custom CMS makes content management so easy. The site performance is incredible with perfect SEO scores."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const visibleReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
    reviews[(currentIndex + 2) % reviews.length]
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-primary fill-primary' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-primary/20">
            <span className="text-primary text-sm font-medium">⭐ Client Reviews</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground">
            What My{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real feedback from satisfied clients who trusted me with their digital transformation journey.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleReviews.map((review, index) => (
              <Card 
                key={`${currentIndex}-${index}`}
                className="relative group hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 border-primary/20 bg-gradient-card backdrop-blur-sm"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  opacity: index === 0 ? 1 : 0.7,
                  transform: index === 0 ? 'scale(1.02)' : 'scale(1)'
                }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex">{renderStars(review.rating)}</div>
                    <Quote className="h-6 w-6 text-primary/30" />
                  </div>
                  
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{review.description}"
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                    <div>
                      <h4 className="font-semibold text-foreground">{review.name}</h4>
                      <p className="text-sm text-primary">{review.service}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Service:</div>
                      <div className="text-xs text-primary font-medium">{review.service}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-primary/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in">
          <div className="text-center p-6 bg-gradient-card backdrop-blur-sm rounded-xl border border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-gradient-card backdrop-blur-sm rounded-xl border border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">4.9★</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center p-6 bg-gradient-card backdrop-blur-sm rounded-xl border border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Project Success</div>
          </div>
          <div className="text-center p-6 bg-gradient-card backdrop-blur-sm rounded-xl border border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;