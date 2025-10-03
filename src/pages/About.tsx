import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-foreground">About Excellence Academy</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A leading educational institution committed to academic excellence and holistic development of every child.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
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

      <Footer />
    </div>
  );
};

export default About;
