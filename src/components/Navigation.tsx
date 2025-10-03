import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="border-b bg-card sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <h1 className="text-2xl font-bold text-primary">Excellence Academy</h1>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
            >
              About
            </Link>
            <Link 
              to="/staff" 
              className={`transition-colors ${isActive('/staff') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
            >
              Staff
            </Link>
            <Link 
              to="/programs" 
              className={`transition-colors ${isActive('/programs') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
            >
              Programs
            </Link>
            <Link 
              to="/school-life" 
              className={`transition-colors ${isActive('/school-life') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
            >
              School Life
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${isActive('/contact') ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`}
            >
              Contact
            </Link>
          </div>
          <Link to="/contact">
            <Button>Apply Now</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
