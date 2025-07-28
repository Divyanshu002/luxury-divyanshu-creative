import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, admin dashboard, and mobile-responsive design.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      category: "Web Development",
      year: "2024"
    },
    {
      title: "Brand Identity Design",
      description: "Complete brand identity package including logo design, color palette, typography, and brand guidelines.",
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=600&h=400&fit=crop",
      technologies: ["Adobe Illustrator", "Figma", "Brand Strategy"],
      category: "Branding",
      year: "2024"
    },
    {
      title: "SaaS Dashboard",
      description: "Modern dashboard interface for a SaaS application with data visualization and user management.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Chart.js", "Material-UI"],
      category: "UI/UX Design",
      year: "2023"
    },
    {
      title: "Restaurant Website",
      description: "Responsive website for a premium restaurant with online reservation system and menu management.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      technologies: ["WordPress", "Custom PHP", "MySQL", "Responsive Design"],
      category: "Web Development",
      year: "2023"
    },
    {
      title: "Mobile App UI Design",
      description: "Complete UI/UX design for a fitness tracking mobile application with modern interface design.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      technologies: ["Figma", "Prototyping", "User Research", "Mobile Design"],
      category: "UI/UX Design",
      year: "2023"
    },
    {
      title: "Social Media Campaign",
      description: "Comprehensive social media marketing campaign that increased brand engagement by 300%.",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&h=400&fit=crop",
      technologies: ["Content Strategy", "Social Media", "Analytics", "Graphic Design"],
      category: "Digital Marketing",
      year: "2022"
    }
  ];

  const categories = ["All", "Web Development", "UI/UX Design", "Branding", "Digital Marketing"];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
            My{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work across web development, design, branding, and digital marketing. 
            Each project represents a unique challenge and creative solution.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category}
              variant="secondary"
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 border-primary/20 bg-gradient-card backdrop-blur-sm overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                    {project.year}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button variant="premium" size="sm" className="flex-1 group">
                    <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    View Live
                  </Button>
                  <Button variant="ghost" size="sm" className="border border-primary/20">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-card backdrop-blur-sm p-8 rounded-2xl border border-primary/20 shadow-elegant">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss your vision and create something amazing together. I'm always excited 
              to take on new challenges and bring innovative ideas to life.
            </p>
            <Button 
              variant="luxury" 
              size="lg"
              onClick={() => window.open('https://wa.me/+91XXXXXXXXXX?text=Hi! I want to discuss a new project', '_blank')}
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;