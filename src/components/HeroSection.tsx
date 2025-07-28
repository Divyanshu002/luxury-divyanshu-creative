import { Button } from "@/components/ui/button";
import { ArrowRight, Download, MessageCircle } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-dark"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(45_93%_58%/0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-primary/20">
                <span className="text-primary text-sm font-medium">🚀 Available for New Projects</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Divyanshu
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                A passionate digital creator specializing in{" "}
                <span className="text-primary font-semibold">Web Development</span>,{" "}
                <span className="text-primary font-semibold">UI/UX Design</span>, and{" "}
                <span className="text-primary font-semibold">Digital Marketing</span>. 
                I transform ideas into premium digital experiences.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" className="group">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="premium" size="lg" className="group">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              
              <Button 
                variant="ghost" 
                size="lg"
                className="group text-primary hover:text-primary-foreground hover:bg-primary border border-primary/20"
                onClick={() => window.open('https://wa.me/+91XXXXXXXXXX', '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Chat
              </Button>
            </div>

            {/* Technologies */}
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground font-medium">EXPERTISE IN:</p>
              <div className="flex flex-wrap gap-3">
                {[
                  "React", "Node.js", "TypeScript", "Figma", "Adobe Creative Suite", 
                  "Google Analytics", "SEO", "Social Media Marketing"
                ].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-card/50 border border-primary/20 rounded-full text-sm text-foreground hover:bg-primary/10 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:flex justify-center animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 animate-glow"></div>
              <div className="relative bg-card/30 backdrop-blur-sm p-6 rounded-3xl border border-primary/20 shadow-luxury">
                <img
                  src={heroPortrait}
                  alt="Divyanshu - Digital Solutions Expert"
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default HeroSection;