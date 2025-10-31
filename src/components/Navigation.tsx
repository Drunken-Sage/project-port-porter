import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/about", label: "About" },
    { to: "/staff", label: "Staff" },
    { to: "/programs", label: "Programs" },
    { to: "/school-life", label: "School Life" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="border-b bg-card sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">Excellence Academy</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-colors ${isActive(link.to)
                    ? 'text-primary font-semibold'
                    : 'text-foreground hover:text-primary'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button>Apply Now</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <Link to="/contact" className="mr-4">
              <Button size="sm" className="text-sm">Apply</Button>
            </Link>
            <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
              <Dialog.Trigger asChild>
                <button
                  className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-muted focus:outline-none"
                  aria-label="Toggle menu"
                >
                  {isOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
                <Dialog.Content className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-card shadow-lg z-50 overflow-y-auto">
                  <div className="p-4 flex justify-between items-center border-b">
                    <Dialog.Title className="text-lg font-semibold">Menu</Dialog.Title>
                    <Dialog.Close asChild>
                      <button className="p-1 rounded-full hover:bg-muted" aria-label="Close">
                        <X className="h-6 w-6" />
                      </button>
                    </Dialog.Close>
                  </div>
                  <nav className="flex flex-col p-4 space-y-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className={`px-4 py-2 rounded-md text-lg transition-colors ${isActive(link.to)
                            ? 'bg-primary/10 text-primary font-medium'
                            : 'text-foreground hover:bg-muted'
                          }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
