import { Heart, Phone, MapPin, Clock, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src="/logo-white.svg" alt="Metmma Pharmacy logo" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">Metmma Pharmacy</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted community pharmacy providing compassionate healthcare services and quality medications to families.
            </p>
            <div className="flex items-center space-x-2 text-primary">
              <Heart className="w-5 h-5" />
              <span className="text-sm">Serving with care and compassion</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
                <a href="tel:+265994399885" className="text-gray-300 hover:text-white transition-colors">
                  (+265) 994 399 885
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                <span className="text-gray-300">Nanjiri, P/Bag 323</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
                <a
                  href="mailto:metmmapharmacy@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  metmmapharmacy@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & CTA */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Visit Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary" />
                <div className="text-gray-300">
                  <div>Mon-Sat: 8AM-5PM</div>
                  <div>Sun: 8AM-2PM</div>
                </div>
              </div>
            </div>
            <Button
              onClick={() =>
                window.open(
                  "https://wa.me/265994399885?text=Hello%20Metmma%20Pharmacy,%20I%20need%20assistance",
                  "_blank"
                )
              }
              className="w-full bg-primary hover:bg-primary/90"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Message Us
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Metmma Pharmacy. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
