import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-card py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Excellence Academy</h3>
            <p className="text-sm text-muted-foreground mb-4">
              A Christ-centered school nurturing young minds in faith and knowledge.
            </p>
            <p className="text-sm text-primary italic">
              &ldquo;Train up a child in the way he should go...&rdquo;
            </p>
            <p className="text-xs text-muted-foreground">- Proverbs 22:6</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/staff" className="hover:text-primary transition-colors">Our Staff</Link></li>
              <li><Link to="/programs" className="hover:text-primary transition-colors">Programs</Link></li>
              <li><Link to="/school-life" className="hover:text-primary transition-colors">School Life</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Location: Ghana</li>
              <li>Phone: +233 XX XXX XXXX</li>
              <li>Email: info@excellenceacademy.edu.gh</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Excellence Academy. All rights reserved. | Glorifying God through Education
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
