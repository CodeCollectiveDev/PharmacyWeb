import { Heart, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-trust text-trust-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">CarePoint Pharmacy</h3>
            <p className="text-trust-foreground/80 text-sm">
              Your trusted neighborhood pharmacy providing comprehensive healthcare services since 1995.
            </p>
            <div className="flex items-center space-x-2 text-accent">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Caring for our community</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-2 text-sm text-trust-foreground/80">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>123 Health Street, Wellness City, WC 12345</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Store Hours</h4>
            <div className="space-y-1 text-sm text-trust-foreground/80">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Mon-Fri: 8AM-8PM</span>
              </div>
              <div className="ml-6">Sat: 9AM-6PM</div>
              <div className="ml-6">Sun: 10AM-4PM</div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-1 text-sm text-trust-foreground/80">
              <li>Prescription Refills</li>
              <li>Vaccinations</li>
              <li>Health Screenings</li>
              <li>Medication Counseling</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-trust-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-trust-foreground/60">
            © 2024 CarePoint Pharmacy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;