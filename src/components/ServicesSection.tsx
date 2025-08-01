import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Palette, 
  FileText, 
  Megaphone, 
  PenTool, 
  Share2,
  ArrowRight,
  IndianRupee
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Web Design & Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      features: ["Responsive Design", "E-commerce Solutions", "CMS Development", "Performance Optimization"],
      pricing: "Starting from ₹25,000",
      popular: true
    },
    {
      icon: FileText,
      title: "Resume & ATS Optimization",
      description: "Professional resume writing and ATS optimization to help you land your dream job in the competitive market.",
      features: ["ATS-Friendly Format", "Keyword Optimization", "Industry-Specific Templates", "LinkedIn Profile Optimization"],
      pricing: "Starting from ₹2,500",
      popular: false
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Create stunning user interfaces and seamless user experiences that convert visitors into customers.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      pricing: "Starting from ₹15,000",
      popular: false
    },
    {
      icon: Megaphone,
      title: "Branding & Promotions",
      description: "Build a strong brand identity and effective promotional campaigns that resonate with your target audience.",
      features: ["Brand Strategy", "Logo Design", "Marketing Materials", "Campaign Development"],
      pricing: "Starting from ₹20,000",
      popular: false
    },
    {
      icon: PenTool,
      title: "Graphic Design",
      description: "Eye-catching visual designs for all your marketing and branding needs across digital and print media.",
      features: ["Print Design", "Digital Graphics", "Illustration", "Brand Collaterals"],
      pricing: "Starting from ₹5,000",
      popular: false
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Comprehensive social media strategy and management to grow your online presence and engagement.",
      features: ["Content Strategy", "Post Scheduling", "Community Management", "Analytics & Reporting"],
      pricing: "Starting from ₹12,000/month",
      popular: false
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-primary/20">
            <span className="text-primary text-sm font-medium">💼 Professional Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground">
            Premium{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Digital Services
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions designed to elevate your business and personal brand. 
            From web development to social media management, I deliver excellence at every step.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`relative group hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 border-primary/20 bg-gradient-card backdrop-blur-sm ${
                service.popular ? 'ring-2 ring-primary/50' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {service.popular && (
                <div className="absolute -top-3 left-6 px-4 py-1 bg-gradient-primary rounded-full text-primary-foreground text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-primary font-bold">
                      <IndianRupee className="h-4 w-4" />
                      <span className="text-lg">{service.pricing.replace('₹', '').split(' ')[0]}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {service.pricing.includes('month') ? '/month' : 'onwards'}
                    </div>
                  </div>
                </div>
                
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant="premium" 
                  className="w-full group"
                  onClick={() => window.open('https://wa.me/+91XXXXXXXXXX?text=Hi! I am interested in ' + service.title, '_blank')}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-card backdrop-blur-sm p-8 rounded-2xl border border-primary/20 shadow-elegant">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every business is unique. Let's discuss your specific requirements and create a tailored solution 
              that perfectly fits your needs and budget.
            </p>
            <Button 
              variant="luxury" 
              size="lg"
              onClick={() => window.open('https://wa.me/+91XXXXXXXXXX?text=Hi! I need a custom solution for my business', '_blank')}
            >
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;