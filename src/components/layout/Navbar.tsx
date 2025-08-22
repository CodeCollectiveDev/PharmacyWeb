import { useState } from 'react';
import { Menu, X, Phone, Pill } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Pill className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-trust">CarePoint Pharmacy</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="/services" className="text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="/resources" className="text-muted-foreground hover:text-primary transition-colors">
              Resources
            </a>
            <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Call Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button size="sm" className="hidden sm:flex">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md hover:bg-muted"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="py-4 space-y-2">
              <a
                href="/"
                className="block px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="block px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
              >
                About
              </a>
              <a
                href="/services"
                className="block px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
              >
                Services
              </a>
              <a
                href="/resources"
                className="block px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
              >
                Resources
              </a>
              <a
                href="/contact"
                className="block px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
              >
                Contact
              </a>
              <div className="px-4 pt-2">
                <Button size="sm" className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Call (555) 123-4567
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;