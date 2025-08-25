import { Heart, Phone, MapPin, Clock, Mail } from 'lucide-react';

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
            <div className="space-y-2 text-sm text-trust-foreground/80">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(+265) 994 399 885</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Nanjiri, P/Bag 323</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a 
                aria-label="Send an email to Metmma Pharmacy"
                href='mailto:metmmapharmacy@gmail.com?subject=Website%20Inquiry&body=Hello%20Metmma%20Pharmacy%2C%0D%0A%0D%0AI%20would%20like%20to%20inquire%20about...'
                >
                metmmapharmacy@gmail.com
                </a>
                
              </div>
            </div>
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

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-1 text-sm text-trust-foreground/80">
              <li>Prescription Fills & Refills</li>
              <li>Medical Test</li>
              <li>Health Screenings</li>
              <li>Medication Counseling</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-trust-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-trust-foreground/60">
            © 2025 Metmma Pharmacy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;