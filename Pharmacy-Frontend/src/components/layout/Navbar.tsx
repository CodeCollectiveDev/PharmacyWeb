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
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300">
              <img 
                src="/metmmalogo.svg" 
                alt="Metmma Pharmacy logo" 
                className="w-8 h-8 drop-shadow"
              />
            </div>
            <div>
              <span className="text-lg font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                Metmma
              </span>
              <p className="text-xs text-gray-500 -mt-1">Pharmacy</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/services', label: 'Services' },
              { href: '/contact', label: 'Contact' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-gray-600 hover:text-green-600 font-medium transition-all duration-300 relative group focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded"
                aria-label={link.label}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Call Button & Mobile Menu */}
          <div className="flex items-center space-x-3">
            {/* Opens whatsapp with a preset message */}
            <Button 
              size="sm" 
              className="hidden sm:flex bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
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
              className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? 'hover:bg-gray-100 text-gray-700' 
                  : 'hover:bg-white/20 text-white'
              }`}
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
          <div className="md:hidden border-t border-gray-200/50 bg-white/98 backdrop-blur-sm animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="py-4 space-y-2 px-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/services', label: 'Services' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button 
                  size="sm" 
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold transition-all duration-300"
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