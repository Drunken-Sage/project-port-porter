import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Phone, Mail, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-foreground">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you. Visit us, call us, or send us a message.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
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

      <Footer />
    </div>
  );
};

export default Contact;
