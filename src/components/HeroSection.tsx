import { Button } from "@/components/ui/button";
import { ArrowRight, Download, MessageCircle } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleDownloadResume = () => {
    // Replace with your actual resume URL
    window.open('/resume.pdf', '_blank');
  };

  const handleViewWork = () => {
    navigate('/portfolio');
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-dark"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(45_93%_58%/0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-card/50 backdrop-blur-sm rounded-full border border-primary/20">
                <span className="text-primary text-xs sm:text-sm font-medium">🚀 Available for New Projects</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Divyanshu
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                A passionate digital creator specializing in{" "}
                <span className="text-primary font-semibold">Web Development</span>,{" "}
                <span className="text-primary font-semibold">UI/UX Design</span>, and{" "}
                <span className="text-primary font-semibold">Digital Marketing</span>. 
                I transform ideas into premium digital experiences.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">50+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">24/7</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button 
                variant="cta" 
                className="group text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6"
                onClick={handleViewWork}
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="premium" 
                size="lg" 
                className="group text-sm sm:text-base"
                onClick={handleDownloadResume}
              >
                <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Download Resume
              </Button>
            </div>

            {/* Technologies */}
            <div className="space-y-3">
              <p className="text-xs sm:text-sm text-muted-foreground font-medium text-center lg:text-left">EXPERTISE IN:</p>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                {[
                  "React", "Node.js", "TypeScript", "Figma", "Adobe Creative Suite", 
                  "Google Analytics", "SEO", "Social Media Marketing"
                ].map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 sm:px-3 bg-card/50 border border-primary/20 rounded-full text-xs sm:text-sm text-foreground hover:bg-primary/10 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center animate-scale-in order-first lg:order-last">
            <div className="relative max-w-md lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 animate-glow"></div>
              <div className="relative bg-card/30 backdrop-blur-sm p-4 sm:p-6 rounded-3xl border border-primary/20 shadow-luxury">
                <img
                  src={heroPortrait}
                  alt="Divyanshu - Digital Solutions Expert"
                  className="w-full h-64 sm:h-80 lg:h-[500px] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-4 sm:right-10 w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default HeroSection;