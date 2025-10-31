import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Award, Heart, Cross, BookHeart, Sparkles, Target, Globe, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const coreValues = [
    {
      icon: Cross,
      title: "Faith in God",
      description: "We ground our education in Christian principles, teaching children to love God and serve others with compassion.",
      verse: "Proverbs 22:6"
    },
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "We pursue the highest standards in education, encouraging students to use their God-given talents to the fullest.",
      verse: "Colossians 3:23"
    },
    {
      icon: Heart,
      title: "Love & Compassion",
      description: "We cultivate a caring community where every child is valued and treated with respect and kindness.",
      verse: "1 John 4:7"
    },
    {
      icon: Shield,
      title: "Integrity & Character",
      description: "We develop strong moral character, teaching honesty, responsibility, and righteous living.",
      verse: "Proverbs 11:3"
    },
    {
      icon: Users,
      title: "Community & Service",
      description: "We encourage students to serve their community and be the light of Christ in the world.",
      verse: "Matthew 5:16"
    },
    {
      icon: Sparkles,
      title: "Excellence in All",
      description: "We strive for excellence in everything we do, as unto the Lord, developing the full potential of each child.",
      verse: "1 Corinthians 10:31"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-muted/30">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4" variant="outline">About Us</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Excellence Academy
          </h1>
          <div className="mb-6">
            <p className="text-lg md:text-xl text-primary font-semibold italic mb-2">
              "Train up a child in the way he should go; even when he is old he will not depart from it."
            </p>
            <p className="text-sm text-muted-foreground">- Proverbs 22:6</p>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A Christ-centered educational institution committed to nurturing young minds academically, spiritually, and morally, 
            following Ghana&apos;s Standards-Based Curriculum with a foundation of Christian values.
          </p>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To provide quality, Christ-centered education that develops the whole child - academically, spiritually, 
                  socially, and physically - equipping them to be leaders who honor God and serve their communities with 
                  excellence and integrity.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To be a leading Christian educational institution in Ghana, raising a generation of godly, well-educated, 
                  and morally upright individuals who will transform their communities and nation through the knowledge 
                  of Christ and academic excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Christian Core Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Biblical principles that guide everything we do at Excellence Academy
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all hover-scale">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                    <Badge variant="secondary" className="w-fit text-xs">{value.verse}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              What Makes Us Different
            </h2>
            <p className="text-muted-foreground text-lg">
              A Christ-centered approach to education
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <BookHeart className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Faith-Based Curriculum</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  We integrate biblical principles into our teaching of Ghana&apos;s Standards-Based Curriculum, 
                  helping students see God&apos;s truth in every subject while maintaining academic rigor.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Cross className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Daily Devotions & Prayer</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  Each day begins with prayer and Bible study, creating a spiritual foundation that guides 
                  learning and builds a personal relationship with Christ in our students.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Character Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  We emphasize Christ-like character traits such as honesty, kindness, self-control, and perseverance, 
                  helping students grow into responsible and godly individuals.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-none shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Our Commitment to Families</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-center leading-relaxed">
                At Excellence Academy, we partner with Christian families to raise children who love God, excel academically, 
                and serve others. We are committed to providing:
              </p>
              <ul className="space-y-3 max-w-2xl mx-auto">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">A safe, nurturing environment grounded in Christian love and values</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">Quality education that meets national standards while teaching biblical truth</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">Small class sizes for personalized attention and spiritual mentorship</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">Qualified Christian educators who model Christ-like character</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">Opportunities for service, worship, and spiritual growth</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
