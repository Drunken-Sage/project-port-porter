import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import elementaryImage from "@/assets/elementary.jpg";
import middleSchoolImage from "@/assets/middle-school.jpg";

const Programs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-foreground">Our Programs</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Following Ghana's Standards-Based Curriculum (SBC) developed by NaCCA, our programs emphasize core competencies, 21st-century skills, and learner-centered education.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Preschool */}
            <Card className="hover-scale overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Preschool</CardTitle>
                <CardDescription className="text-base">KG1 - KG2 (Ages 4-5)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Early childhood education focusing on social, emotional, and cognitive development through play-based learning and foundational skills.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">Learning Areas:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Language & Literacy</li>
                    <li>Numeracy</li>
                    <li>Creative Arts</li>
                    <li>Physical Development</li>
                    <li>Social & Emotional Skills</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Primary School */}
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

            {/* Junior High School */}
            <Card className="hover-scale overflow-hidden md:col-span-2 lg:col-span-1">
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

      <Footer />
    </div>
  );
};

export default Programs;
