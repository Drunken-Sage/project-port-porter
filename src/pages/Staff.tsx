import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, User, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Staff = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-foreground">Meet Our Staff</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our dedicated team of qualified educators is committed to nurturing every student's potential and creating a positive learning environment.
          </p>
        </div>
      </section>

      {/* Staff Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="hover-scale">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-center">Head Teacher</CardTitle>
                <CardDescription className="text-center">School Leadership</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center text-sm">
                  Providing visionary leadership and ensuring academic excellence across all programs.
                </p>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-center">Primary Teachers</CardTitle>
                <CardDescription className="text-center">Basic 1-6</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center text-sm">
                  Experienced educators specializing in foundational learning and child development.
                </p>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-center">JHS Teachers</CardTitle>
                <CardDescription className="text-center">Basic 7-9</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center text-sm">
                  Subject specialists preparing students for BECE and future academic success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Staff;
