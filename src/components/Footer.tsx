import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* SEO Content Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">
              Shree Ganesh Enterprise - Professional Industrial Services Across India
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-sm opacity-90">
              <div>
                <h3 className="font-semibold text-base mb-3">Our Services</h3>
                <ul className="space-y-2">
                  <li>• Industrial loading services in India</li>
                  <li>• Labour supply company in Gujarat</li>
                  <li>• Solar plant AC/DC wiring contractors India</li>
                  <li>• Warehouse unloading labour provider</li>
                  <li>• Corporate canteen services India</li>
                  <li>• Employee staff bus service Gujarat</li>
                  <li>• Industrial manpower outsourcing India</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-base mb-3">Service Areas</h3>
                <p className="mb-3">
                  We provide reliable industrial workforce solutions across major cities and industrial hubs in India, with strong presence in Gujarat, Maharashtra, Rajasthan, and other key states.
                </p>
                <p>
                  Our services include loading and unloading of edible oil, timber, drums, rice bags, sugar bags, skilled and semi-skilled labour supply, solar installation teams, corporate canteen management, and employee transportation services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Shree Ganesh Enterprise</h3>
              <p className="text-sm opacity-90 mb-4">
                Your trusted partner for industrial workforce solutions, loading operations, solar installations, and corporate facilities management.
              </p>
              <p className="text-xs opacity-75">
                GSTIN: 24BCHPP3163R1Z1
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#services" className="hover:underline opacity-90 hover:opacity-100">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline opacity-90 hover:opacity-100">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="tel:+919979623217" className="hover:underline opacity-90 hover:opacity-100">
                    Request Quote
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+919979623217" className="hover:underline">
                    +91 99796 23217
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:Sge777999@gmail.com" className="hover:underline break-all">
                    Sge777999@gmail.com
                  </a>
                </div>
                <div className="text-xs opacity-75 mt-2">
                  24, Krishna Kutir, Adipur<br />
                  Ta Anjar, Dist Kutch<br />
                  Gujarat - 370110
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-75">
            <p>
              © {new Date().getFullYear()} Shree Ganesh Enterprise. All rights reserved.
            </p>
            <p className="mt-2">
              Reliable Industrial Workforce Solutions • Pan-India Service • 24/7 Support
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;