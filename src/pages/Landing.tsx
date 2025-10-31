import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/school-hero.jpg";
import { Link } from "react-router-dom";
import { GraduationCap, Users, BookOpen, Award, Heart, Sparkles } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Excellence Academy - Empowering Young Minds in Ghana" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>
        <div className="container mx-auto relative z-10 max-w-4xl">
          <div className="animate-fade-in text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
              Where Young Minds
              <span className="block text-primary mt-2">Grow & Thrive</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Excellence Academy offers quality education from preschool through junior high school, 
              following Ghana's Standards-Based Curriculum in a nurturing environment.
            </p>
            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              <Link to="/contact">
                <Button size="lg" className="text-base md:text-lg px-8 py-6">
                  Enroll Your Child Today
                </Button>
              </Link>
              <Link to="/programs">
                <Button size="lg" variant="outline" className="text-base md:text-lg px-8 py-6">
                  Explore Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why Choose Excellence Academy?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We provide a comprehensive education that prepares students for success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="p-6 hover:shadow-lg transition-all hover-scale">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Standards-Based Curriculum</h3>
              <p className="text-muted-foreground">
                Following Ghana's official curriculum to ensure quality education and proper accreditation
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all hover-scale">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Small Class Sizes</h3>
              <p className="text-muted-foreground">
                Individual attention for each student with personalized learning support
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all hover-scale">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Comprehensive Programs</h3>
              <p className="text-muted-foreground">
                From preschool (KG1-KG2) through primary to junior high school education
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all hover-scale">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Qualified Educators</h3>
              <p className="text-muted-foreground">
                Experienced teachers dedicated to nurturing academic excellence
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all hover-scale">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Nurturing Environment</h3>
              <p className="text-muted-foreground">
                Safe, supportive atmosphere where children feel valued and encouraged
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all hover-scale">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Holistic Development</h3>
              <p className="text-muted-foreground">
                Focus on academic, social, and personal growth through diverse activities
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Programs
            </h2>
            <p className="text-muted-foreground text-lg">
              Age-appropriate learning for every stage of your child's development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-all hover-scale">
              <div className="text-4xl font-bold text-primary mb-4">KG1-KG2</div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Preschool</h3>
              <p className="text-muted-foreground mb-6">
                Early childhood education building foundation skills through play and exploration
              </p>
              <Link to="/programs">
                <Button variant="outline" className="w-full">Learn More</Button>
              </Link>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-all hover-scale border-primary/50">
              <div className="text-4xl font-bold text-primary mb-4">P1-P6</div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Primary School</h3>
              <p className="text-muted-foreground mb-6">
                Core subjects and critical thinking skills for elementary learners
              </p>
              <Link to="/programs">
                <Button variant="outline" className="w-full">Learn More</Button>
              </Link>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-all hover-scale">
              <div className="text-4xl font-bold text-primary mb-4">JHS 1-3</div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Junior High</h3>
              <p className="text-muted-foreground mb-6">
                BECE preparation with comprehensive curriculum and exam readiness
              </p>
              <Link to="/programs">
                <Button variant="outline" className="w-full">Learn More</Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Ready to Give Your Child the Best Start?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join Excellence Academy and be part of a community dedicated to educational excellence. 
            Schedule a visit to see our campus and meet our staff.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact">
              <Button size="lg" className="text-base md:text-lg px-8 py-6">
                Schedule a Visit
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="text-base md:text-lg px-8 py-6">
                Learn About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
