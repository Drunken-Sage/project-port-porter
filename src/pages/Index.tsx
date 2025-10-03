import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Award, Calendar, Phone, Mail, MapPin } from "lucide-react";
import heroImage from "@/assets/school-hero.jpg";
import elementaryImage from "@/assets/elementary.jpg";
import middleSchoolImage from "@/assets/middle-school.jpg";
import libraryImage from "@/assets/library.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card sticky top-0 z-50 shadow-sm">
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
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Excellence Academy School Building" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground animate-scale-in">
            Empowering Young Minds
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Excellence Academy provides quality education following Ghana's Standards-Based Curriculum for primary and junior high school students in a nurturing, innovative environment.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg">Schedule a Visit</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-foreground">Why Choose Excellence Academy</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-scale">
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
            <Card className="hover-scale">
              <CardHeader>
                <Users className="w-12 h-12 mb-4 text-primary" />
                <CardTitle>Expert Faculty</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Dedicated teachers with advanced degrees and years of experience, committed to nurturing each student's unique talents.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardHeader>
                <BookOpen className="w-12 h-12 mb-4 text-primary" />
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
      <section id="programs" className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-4 text-foreground">Our Programs</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Following Ghana's Standards-Based Curriculum (SBC) developed by NaCCA, our programs emphasize core competencies, 21st-century skills, and learner-centered education.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover-scale overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src={elementaryImage} 
                  alt="Primary School Program" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Primary School</CardTitle>
                <CardDescription className="text-base">Basic 1-6 (Ages 6-12)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Building strong foundations through Ghana's Standards-Based Curriculum with engaging, hands-on learning that develops core competencies and critical thinking skills.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">Core Subjects:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>English Language</li>
                    <li>Mathematics</li>
                    <li>Science</li>
                    <li>Social Studies</li>
                    <li>Computing (ICT)</li>
                    <li>Creative Arts & Design</li>
                    <li>Religious & Moral Education</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card className="hover-scale overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src={middleSchoolImage} 
                  alt="Junior High School Program" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Junior High School</CardTitle>
                <CardDescription className="text-base">Basic 7-9 (Ages 12-15)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Developing critical thinking, independence, and career readiness while preparing students for the Basic Education Certificate Examination (BECE) and senior high school success.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">Advanced Learning:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Core subjects with increased depth</li>
                    <li>Career & Technical Education</li>
                    <li>Life skills development</li>
                    <li>BECE preparation</li>
                    <li>Leadership training</li>
                    <li>Community service projects</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-foreground">State-of-the-Art Facilities</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
            <div className="space-y-6">
              <div>
                <h4 className="text-2xl font-semibold text-foreground mb-3">Modern Learning Spaces</h4>
                <p className="text-muted-foreground">
                  Smart classrooms equipped with the latest technology, science laboratories, computer labs, and a comprehensive library resource center designed to inspire curiosity and innovation.
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-foreground mb-3">Athletics & Arts</h4>
                <p className="text-muted-foreground">
                  Professional-grade gymnasium, outdoor sports fields, art studios, music rooms, and dedicated spaces for creative expression and physical development.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={libraryImage} 
                alt="Modern School Library" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-bold text-center mb-12 text-foreground">Get In Touch</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="text-primary">Visit Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">123 Education Drive</p>
                    <p className="text-muted-foreground">Your City, ST 12345</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <p>(555) 123-4567</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <p>info@excellenceacademy.edu</p>
                </div>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="text-primary">School Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
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