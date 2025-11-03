import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SchoolLife = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-foreground">School Life</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience a vibrant learning community where students thrive academically, socially, and personally.
          </p>
        </div>
      </section>

      {/* School Life Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle>Small Class Sizes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Personalized attention with manageable class sizes ensuring every student receives the support they need to excel.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle>Character Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Building strong moral values and godly character through biblical teachings, daily devotions, and positive reinforcement.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle>Community Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Strong parent-teacher partnerships and a supportive learning environment where every child is valued and encouraged.
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

export default SchoolLife;
