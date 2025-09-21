import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Trigger when scrolling past the hero section (approximately 80vh)
      setIsScrolled(scrollTop > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-sm border-b border-border/50' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="/logo-color.svg" 
                alt="Metmma Pharmacy logo" 
                className="w-10 h-10"
              />
            </div>
            <span className="text-xl font-bold text-trust">
              Metmma Pharmacy
            </span>
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
            <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Call Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Opens whatsapp with a preset message */}
            <Button 
              size="sm" 
              className="hidden sm:flex bg-primary hover:bg-primary/90 text-white"
              type="button"
              onClick={() =>
                window.open(
                  "https://wa.me/265994399885?text=Hello%20Metmma%20Pharmacy,%20I%20need%20assistance",
                  "_blank"
                )
              }>
              <MessageCircle className="w-4 h-4 mr-2" />
              Message Us
            </Button>
            
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
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
                href="/contact"
                className="block px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
              >
                Contact
              </a>
              <div className="px-4 pt-2">
                <Button 
                  size="sm" 
                  className="w-full"
                  type="button"
                  onClick={() =>
                    window.open(
                      "https://wa.me/265994399885?text=Hello%20Metmma%20Pharmacy,%20I%20need%20assistance",
                      "_blank"
                    )}>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Message Us
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