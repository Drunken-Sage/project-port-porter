import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/school-hero.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

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
            Excellence Academy provides quality education following Ghana's Standards-Based Curriculum for preschool, primary and junior high school students in a nurturing, innovative environment.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact">
              <Button size="lg">Schedule a Visit</Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline">Learn More</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-foreground">Explore Our School</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link to="/programs" className="block">
              <div className="text-center p-6 rounded-lg bg-card hover:shadow-lg transition-shadow">
                <h4 className="text-2xl font-semibold text-primary mb-3">Our Programs</h4>
                <p className="text-muted-foreground">Preschool through Junior High School</p>
              </div>
            </Link>
            <Link to="/staff" className="block">
              <div className="text-center p-6 rounded-lg bg-card hover:shadow-lg transition-shadow">
                <h4 className="text-2xl font-semibold text-primary mb-3">Our Staff</h4>
                <p className="text-muted-foreground">Dedicated and qualified educators</p>
              </div>
            </Link>
            <Link to="/contact" className="block">
              <div className="text-center p-6 rounded-lg bg-card hover:shadow-lg transition-shadow">
                <h4 className="text-2xl font-semibold text-primary mb-3">Get In Touch</h4>
                <p className="text-muted-foreground">Visit us or schedule a tour</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
