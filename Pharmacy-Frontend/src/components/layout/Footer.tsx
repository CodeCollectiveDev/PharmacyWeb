import { Heart, Phone, MapPin, Clock, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-trust text-trust-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Metmma Pharmacy</h3>
            <p className="text-trust-foreground/80 text-sm">
              Your trusted pharmacy providing comprehensive healthcare services.
            </p>
            <div className="flex items-center space-x-2 text-accent">
              <Heart className="w-4 h-4" />
              <span className="text-sm">To serve customers with courtesy</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-2 text-sm text-trust-foreground/80">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" aria-hidden="true" />
                <a href="tel:+265994399885">(+265) 994 399 885</a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span>Nanjiri, P/Bag 323</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" aria-hidden="true" />
                <a
                  aria-label="Send an email to Metmma Pharmacy"
                  href="mailto:metmmapharmacy@gmail.com?subject=Website%20Inquiry&body=Hello%20Metmma%20Pharmacy..."
                >
                  metmmapharmacy@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Operation Hours</h4>
            <div className="space-y-1 text-sm text-trust-foreground/80">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Mon-Sat: 8AM-5PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Sun & Holidays: 8AM-2PM</span>
              </div>
            </div>
          </div>

          <div className="border-t border-trust-foreground/20 mt-8 pt-8 text-center">
            <p className="text-sm text-trust-foreground/60">
              © 2025 Metmma Pharmacy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
