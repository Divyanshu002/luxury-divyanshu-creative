import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  Linkedin,
  Instagram,
  Github
} from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 XXXX-XXXX-XX",
      description: "Available 24/7 for urgent projects"
    },
    {
      icon: Mail,
      title: "Email",
      value: "hello@divyanshu.dev",
      description: "I'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India",
      description: "Serving clients globally"
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "Mon - Sat: 9AM - 8PM IST",
      description: "Flexible for different time zones"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
            Get In{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your digital vision to life? Let's discuss your project and create something amazing together. 
            I'm here to help transform your ideas into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="bg-gradient-card backdrop-blur-sm border-primary/20 shadow-luxury">
              <CardHeader>
                <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">First Name</label>
                      <Input 
                        placeholder="John" 
                        className="bg-background/50 border-primary/20 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Last Name</label>
                      <Input 
                        placeholder="Doe" 
                        className="bg-background/50 border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="bg-background/50 border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone (Optional)</label>
                    <Input 
                      type="tel" 
                      placeholder="+91 XXXXX XXXXX" 
                      className="bg-background/50 border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Service Interested In</label>
                    <select className="w-full px-3 py-2 bg-background/50 border border-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground">
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="branding">Branding & Promotions</option>
                      <option value="graphic-design">Graphic Design</option>
                      <option value="social-media">Social Media Management</option>
                      <option value="resume">Resume & ATS Optimization</option>
                      <option value="custom">Custom Solution</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Project Budget (₹)</label>
                    <select className="w-full px-3 py-2 bg-background/50 border border-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground">
                      <option value="">Select budget range</option>
                      <option value="5000-15000">₹5,000 - ₹15,000</option>
                      <option value="15000-50000">₹15,000 - ₹50,000</option>
                      <option value="50000-100000">₹50,000 - ₹1,00,000</option>
                      <option value="100000+">₹1,00,000+</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <Textarea 
                      placeholder="Tell me about your project, goals, and any specific requirements..."
                      rows={5}
                      className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                    />
                  </div>

                  <Button type="submit" variant="luxury" className="w-full group">
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={info.title} className="bg-gradient-card backdrop-blur-sm border-primary/20 hover:shadow-elegant transition-all duration-300">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">{info.title}</h3>
                      <p className="text-foreground font-medium">{info.value}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Contact */}
            <Card className="bg-gradient-card backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  Quick Contact
                </CardTitle>
                <CardDescription>
                  Need immediate assistance? Reach out through these channels for faster response.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  variant="luxury" 
                  className="w-full"
                  onClick={() => window.open('https://wa.me/+91XXXXXXXXXX?text=Hi! I want to discuss a project', '_blank')}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Chat
                </Button>
                <Button 
                  variant="premium" 
                  className="w-full"
                  onClick={() => window.open('mailto:hello@divyanshu.dev', '_blank')}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </Button>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-gradient-card backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
                <CardDescription>
                  Follow me on social media for updates and insights.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      variant="ghost"
                      size="icon"
                      className="border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      onClick={() => window.open(social.href, '_blank')}
                    >
                      <social.icon className="h-5 w-5" />
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;