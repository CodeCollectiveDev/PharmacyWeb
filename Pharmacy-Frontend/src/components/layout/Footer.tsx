import { Heart, Phone, MapPin, Clock, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { businessDetails } from "@/lib/businessDetails";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500 rounded-full -ml-48 -mb-48"></div>
      </div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6 group">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img src="/metmmalogo.svg" alt="Metmma Pharmacy logo" className="w-8 h-8 drop-shadow" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Metmma</h3>
                <p className="text-xs text-green-300">Pharmacy</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Contact Metmma Pharmacy for medication and health service inquiries.
            </p>
            <div className="flex items-center space-x-2 text-green-300 group-hover:text-green-200 transition-colors duration-300">
              <Heart className="w-5 h-5" />
              <span className="text-xs font-medium">Serving with care and compassion</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Our Services' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-300 transition-all duration-300 flex items-center group/link focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1"
                    aria-label={`Navigate to ${link.label}`}
                  >
                    <span className="inline-block w-0 h-0.5 bg-green-400 group-hover/link:w-4 transition-all duration-300 mr-2"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 group/item">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center group-hover/item:bg-green-500/40 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-green-300" />
                </div>
                <a href={businessDetails.phoneHref} className="text-gray-400 hover:text-green-300 transition-colors duration-300 text-sm">
                  {businessDetails.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center group-hover/item:bg-green-500/40 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-green-300" />
                </div>
                <a
                  href={businessDetails.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-green-300 transition-colors duration-300 text-sm"
                >
                  {businessDetails.visitingAddress}
                </a>
              </li>
              <li className="flex items-center space-x-3 group/item">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center group-hover/item:bg-green-500/40 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-green-300" />
                </div>
                <a
                  href={`mailto:${businessDetails.email}`}
                  className="text-gray-400 hover:text-green-300 transition-colors duration-300 text-sm truncate"
                >
                  {businessDetails.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & CTA */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-white mb-4">Visit Us</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3 bg-green-500/10 rounded-lg p-4 backdrop-blur-sm border border-green-500/20">
                <Clock className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <div className="font-semibold text-white">{businessDetails.hours.weekdayAndSaturday.split(":")[0]}</div>
                  <div className="text-xs text-gray-400">{businessDetails.hours.weekdayAndSaturday.split(": ")[1]}</div>
                  <div className="font-semibold text-white mt-2">{businessDetails.hours.sunday.split(":")[0]}</div>
                  <div className="text-xs text-gray-400">{businessDetails.hours.sunday.split(": ")[1]}</div>
                  <div className="text-xs text-gray-400 mt-2">{businessDetails.hours.note.split("; ")[1]}</div>
                </div>
              </div>
            </div>
            <Button
              onClick={() =>
                window.open(
                  businessDetails.whatsappUrl,
                  "_blank"
                )
              }
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Message Us
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2025 Metmma Pharmacy. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-green-300 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-green-300 transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
