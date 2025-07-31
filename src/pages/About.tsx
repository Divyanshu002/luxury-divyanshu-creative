import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, Award, Code2, ExternalLink, Cpu, Palette, BarChart3, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/WhatsAppButton";

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "MongoDB", "PostgreSQL",
    "Figma", "Adobe Creative Suite", "UI/UX Design", "Responsive Design",
    "SEO", "Google Analytics", "Social Media Marketing", "Content Strategy",
    "Brand Strategy", "Digital Marketing", "Data Analytics", "Cyber Security"
  ];

  const experience = [
    {
      title: "Freelance Digital Solutions Expert",
      period: "2022 - Present",
      description: "Providing comprehensive digital services including web development, UI/UX design, and digital marketing to businesses across India."
    },
    {
      title: "Frontend Developer",
      period: "2021 - 2022",
      description: "Developed responsive web applications and user interfaces for various client projects using modern JavaScript frameworks."
    }
  ];

  const education = [
    {
      degree: "PGDM in Marketing & Data Analytics",
      institution: "Indian Institute of Management",
      location: "Mumbai, Maharashtra",
      year: "2024 - 2025",
      description: "Specializing in digital marketing strategies and data-driven decision making."
    },
    {
      degree: "BCA with Cyber Security Specialization",
      institution: "University of Technology",
      location: "Delhi, India",
      year: "2021 - 2024",
      description: "Comprehensive computer applications program with focus on cybersecurity principles and practices."
    },
    {
      degree: "Senior Secondary (12th)",
      institution: "St. Xavier's School",
      location: "New Delhi, India",
      year: "2019 - 2021",
      description: "Science stream with Mathematics and Computer Science specialization."
    }
  ];

  const certifications = [
    {
      name: "Google Analytics Certified",
      issuer: "Google",
      year: "2024",
      link: "#"
    },
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2023",
      link: "#"
    },
    {
      name: "React Professional Developer",
      issuer: "Meta",
      year: "2023",
      link: "#"
    },
    {
      name: "Cybersecurity Fundamentals",
      issuer: "Cisco",
      year: "2022",
      link: "#"
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
            About{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Divyanshu
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate digital creator with a unique blend of technical expertise and creative vision. 
            I bridge the gap between technology and design to create exceptional digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Personal Story */}
          <div className="space-y-8 animate-slide-up">
            <Card className="bg-gradient-card backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Code2 className="h-6 w-6 text-primary" />
                  My Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  My journey began with a fascination for cybersecurity during my BCA, where I learned the importance 
                  of building secure, robust digital solutions. This foundation taught me to think critically about 
                  every aspect of development.
                </p>
                <p>
                  Currently pursuing PGDM in Marketing & Data Analytics, I'm expanding my expertise to understand 
                  not just how to build digital products, but how to make them successful in the market through 
                  data-driven strategies.
                </p>
                <p>
                  This unique combination of technical skills, security awareness, and marketing knowledge allows me 
                  to create solutions that are not only functional and secure but also strategically positioned 
                  for success.
                </p>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="bg-gradient-card backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Cpu className="h-5 w-5 text-primary" />
                  Core Skills & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-primary" />
                    <h4 className="font-semibold text-foreground">Development</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Node.js", "Python", "MongoDB", "PostgreSQL"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Palette className="h-4 w-4 text-primary" />
                    <h4 className="font-semibold text-foreground">Design</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Figma", "Adobe Creative Suite", "UI/UX Design", "Responsive Design"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-primary" />
                    <h4 className="font-semibold text-foreground">Marketing & Analytics</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["SEO", "Google Analytics", "Social Media Marketing", "Content Strategy", "Brand Strategy", "Digital Marketing", "Data Analytics"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <h4 className="font-semibold text-foreground">Security</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Cyber Security"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Experience & Education */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
            {/* Experience */}
            <Card className="bg-gradient-card backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Professional Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-primary/20 pl-4 space-y-2">
                    <h3 className="font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-sm text-primary font-medium">{exp.period}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="bg-gradient-card backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary/20 pl-4 space-y-2">
                    <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                    <p className="text-xs text-muted-foreground/80">{edu.location}</p>
                    <p className="text-sm text-primary font-medium">{edu.year}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="bg-gradient-card backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Award className="h-5 w-5 text-primary" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-background/30 rounded-lg border border-primary/10">
                    <div className="space-y-1">
                      <h4 className="font-semibold text-foreground">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.year}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(cert.link, '_blank')}
                      className="hover:bg-primary/10"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-gradient-card backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Award className="h-5 w-5 text-primary" />
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">50+ successful projects delivered</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">100% client satisfaction rate</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Specialized in secure, scalable solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Expert in data-driven marketing strategies</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
    <WhatsAppButton />
    </>
  );
};

export default About;