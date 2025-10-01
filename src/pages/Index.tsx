import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Award, Calendar, Phone, Mail, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Excellence Academy</h1>
            <div className="hidden md:flex gap-6">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#programs" className="text-foreground hover:text-primary transition-colors">Programs</a>
              <a href="#facilities" className="text-foreground hover:text-primary transition-colors">Facilities</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>
            <Button>Apply Now</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 animate-fade-in">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground animate-scale-in">
            Empowering Minds, Building Futures
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Where excellence meets opportunity. Join us in creating tomorrow's leaders through innovative education and nurturing environment.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90">Schedule a Visit</Button>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">Learn More</Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gradient-to-r from-accent/10 to-background">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-foreground">Why Choose Excellence Academy</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-scale border-l-4 border-l-primary">
              <CardHeader>
                <Award className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>Award-Winning Education</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Recognized nationally for academic excellence and innovative teaching methods that inspire students to reach their full potential.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="hover-scale border-l-4 border-l-secondary">
              <CardHeader>
                <Users className="w-12 h-12 mb-4 text-secondary" />
                <CardTitle>Expert Faculty</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Dedicated teachers with advanced degrees and years of experience, committed to nurturing each student's unique talents.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="hover-scale border-l-4 border-l-accent">
              <CardHeader>
                <BookOpen className="w-12 h-12 mb-4 text-accent" />
                <CardTitle>Comprehensive Curriculum</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Balanced programs combining academics, arts, athletics, and technology to develop well-rounded individuals.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 px-4 bg-gradient-to-l from-secondary/10 via-background to-primary/10">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-foreground">Our Programs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover-scale bg-gradient-to-br from-primary/5 to-card border-t-4 border-t-primary">
              <CardHeader>
                <CardTitle className="text-primary">Elementary</CardTitle>
                <CardDescription>Grades K-5</CardDescription>
              </CardHeader>
              <CardContent>
                Building strong foundations in literacy, mathematics, and social skills through engaging, hands-on learning.
              </CardContent>
            </Card>
            <Card className="hover-scale bg-gradient-to-br from-secondary/5 to-card border-t-4 border-t-secondary">
              <CardHeader>
                <CardTitle className="text-secondary">Middle School</CardTitle>
                <CardDescription>Grades 6-8</CardDescription>
              </CardHeader>
              <CardContent>
                Developing critical thinking and independence while exploring diverse subjects and discovering passions.
              </CardContent>
            </Card>
            <Card className="hover-scale bg-gradient-to-br from-accent/5 to-card border-t-4 border-t-accent">
              <CardHeader>
                <CardTitle className="text-accent">High School</CardTitle>
                <CardDescription>Grades 9-12</CardDescription>
              </CardHeader>
              <CardContent>
                Preparing for college and careers with advanced courses, AP programs, and personalized guidance.
              </CardContent>
            </Card>
            <Card className="hover-scale bg-gradient-to-br from-primary/5 to-card border-t-4 border-t-primary">
              <CardHeader>
                <CardTitle className="text-primary">Extracurricular</CardTitle>
                <CardDescription>All Ages</CardDescription>
              </CardHeader>
              <CardContent>
                Sports, arts, music, robotics, and clubs that foster leadership, teamwork, and personal growth.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-foreground">State-of-the-Art Facilities</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold text-foreground">Modern Learning Spaces</h4>
              <p className="text-muted-foreground">
                Smart classrooms equipped with the latest technology, science laboratories, computer labs, and a comprehensive library resource center.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold text-foreground">Athletics & Arts</h4>
              <p className="text-muted-foreground">
                Professional-grade gymnasium, outdoor sports fields, art studios, music rooms, and a performing arts theater.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-bold text-center mb-12 text-foreground">Get In Touch</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-scale border-2 border-primary/20">
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-primary">Visit Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">123 Education Drive</p>
                    <p className="text-muted-foreground">Your City, ST 12345</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-secondary" />
                  <p>(555) 123-4567</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <p>info@excellenceacademy.edu</p>
                </div>
              </CardContent>
            </Card>
            <Card className="hover-scale border-2 border-secondary/20">
              <CardHeader className="bg-secondary/5">
                <CardTitle className="text-secondary">School Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Monday - Friday</p>
                    <p className="text-muted-foreground">8:00 AM - 3:30 PM</p>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="font-medium mb-2">Office Hours</p>
                  <p className="text-muted-foreground">Monday - Friday: 7:30 AM - 4:30 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Excellence Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;