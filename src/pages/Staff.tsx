import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Award, Heart, Users, Briefcase, Mail, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Staff = () => {
  const staffMembers = [
    {
      name: "Mrs. Grace Mensah",
      role: "Head Teacher",
      department: "Administration",
      qualifications: ["B.Ed in Educational Leadership", "15+ years experience"],
      specialization: "School Leadership & Curriculum Development",
      icon: GraduationCap,
    },
    {
      name: "Mr. Kwame Asante",
      role: "Senior Primary Teacher",
      department: "Primary School",
      qualifications: ["B.Ed Primary Education", "10 years experience"],
      specialization: "Mathematics & Science Education",
      icon: BookOpen,
    },
    {
      name: "Ms. Abena Osei",
      role: "Preschool Coordinator",
      department: "Preschool",
      qualifications: ["Diploma in Early Childhood Education", "8 years experience"],
      specialization: "Early Childhood Development",
      icon: Heart,
    },
    {
      name: "Mr. Joseph Boateng",
      role: "JHS Mathematics Teacher",
      department: "Junior High School",
      qualifications: ["B.Sc Mathematics", "B.Ed Secondary Education"],
      specialization: "Mathematics & BECE Preparation",
      icon: Award,
    },
    {
      name: "Mrs. Akua Owusu",
      role: "English & Literature Teacher",
      department: "Junior High School",
      qualifications: ["BA English Language", "Postgraduate Diploma in Education"],
      specialization: "English Language & Literacy",
      icon: BookOpen,
    },
    {
      name: "Mr. Daniel Adjei",
      role: "Science Teacher",
      department: "Junior High School",
      qualifications: ["B.Sc Biology", "B.Ed Science Education"],
      specialization: "Integrated Science & Practical Learning",
      icon: GraduationCap,
    },
  ];

  const departments = [
    {
      name: "School Administration",
      description: "Leading with vision and ensuring quality education for all students",
      icon: Briefcase,
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      name: "Preschool Department",
      description: "Nurturing our youngest learners through play-based learning",
      icon: Heart,
      color: "bg-pink-500/10 text-pink-500",
    },
    {
      name: "Primary School",
      description: "Building strong foundations in core subjects and life skills",
      icon: BookOpen,
      color: "bg-green-500/10 text-green-500",
    },
    {
      name: "Junior High School",
      description: "Preparing students for BECE and future academic success",
      icon: Award,
      color: "bg-purple-500/10 text-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-muted/30">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4" variant="outline">Our Team</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Meet Our Dedicated Educators
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Excellence Academy is proud to have a team of qualified, passionate educators who are committed to nurturing every student's potential and fostering a love for learning.
          </p>
          <div className="flex gap-6 justify-center text-center flex-wrap">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Qualified Teachers</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Years Average Experience</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Certified Educators</div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Departments
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Each department is staffed with experienced educators specialized in their field
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {departments.map((dept, index) => {
              const IconComponent = dept.icon;
              return (
                <Card key={index} className="hover-scale transition-all">
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-lg ${dept.color} flex items-center justify-center mb-4`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <CardTitle className="text-xl">{dept.name}</CardTitle>
                    <CardDescription>{dept.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Staff Members */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Featured Staff Members
            </h2>
            <p className="text-muted-foreground text-lg">
              Get to know some of our exceptional educators
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {staffMembers.map((staff, index) => {
              const IconComponent = staff.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all">
                  <CardHeader className="space-y-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto">
                      <IconComponent className="w-10 h-10 text-primary" />
                    </div>
                    <div className="text-center">
                      <CardTitle className="text-xl mb-2">{staff.name}</CardTitle>
                      <Badge variant="secondary" className="mb-2">
                        {staff.role}
                      </Badge>
                      <CardDescription className="text-sm font-medium text-primary">
                        {staff.department}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-foreground">Specialization</h4>
                      <p className="text-sm text-muted-foreground">{staff.specialization}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-foreground">Qualifications</h4>
                      <ul className="space-y-1">
                        {staff.qualifications.map((qual, qIndex) => (
                          <li key={qIndex} className="text-sm text-muted-foreground flex items-start">
                            <span className="mr-2">•</span>
                            <span>{qual}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Our Staff Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              What Makes Our Staff Special
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Qualified & Certified</h3>
              <p className="text-muted-foreground">
                All our teachers hold relevant degrees and teaching certifications from recognized institutions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Passionate & Caring</h3>
              <p className="text-muted-foreground">
                Our educators are deeply committed to student success and creating a supportive learning environment
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Experienced Professionals</h3>
              <p className="text-muted-foreground">
                Years of teaching experience with proven track records of student achievement and growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Want to Meet Our Team?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a visit to Excellence Academy and meet our dedicated staff members in person. We'd love to show you around and discuss how we can support your child's educational journey.
          </p>
          <div className="flex gap-4 justify-center items-center flex-wrap">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-5 h-5" />
              <span>+233 XX XXX XXXX</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-5 h-5" />
              <span>info@excellenceacademy.edu.gh</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Staff;
