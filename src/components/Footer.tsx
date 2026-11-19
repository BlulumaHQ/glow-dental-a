import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto container-padding py-16 md:py-20">
        {/* Desktop 5-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Glow Pediatric Dentistry</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Specialized pediatric dental care in Abbotsford, Langley and Richmond. Building lasting relationships for positive dental experiences.
            </p>
            <a
              href="https://www.instagram.com/smilesbyglow/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
            >
              <Instagram className="w-5 h-5" />
              #smilesbyglow
            </a>
          </div>

          {/* Col 2: Spacer */}
          <div className="hidden lg:block" />

          {/* Col 3: Navigation */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/90">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</Link></li>
              <li><Link to="/about/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</Link></li>
              <li><Link to="/our-pediatric-dentist/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Pediatric Dentist</Link></li>
              <li><Link to="/locations/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Locations</Link></li>
              <li><Link to="/blog/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Blog</Link></li>
              <li><Link to="/resources/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Resources</Link></li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/90">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/new-patients/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">New Patients</Link></li>
              <li><Link to="/emergency-pediatric-dental-care/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Emergencies</Link></li>
              <li><Link to="/ages/baby-first-dental-visit/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Baby's First Visit</Link></li>
              <li><Link to="/ages/dentistry-for-children/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Children</Link></li>
              <li><Link to="/ages/teen-dentist-langley/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Teen Specialist</Link></li>
              <li><Link to="/cdcp/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">CDCP</Link></li>
            </ul>
          </div>

          {/* Col 5: Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/90">Contact</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium">Langley</p>
                <p className="text-primary-foreground/80">20826 72 Ave #125<br />Langley, BC V2Y 3J5</p>
                <a href="tel:7782781010" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">(778) 278-1010</a>
              </div>
              <div>
                <p className="font-medium">Richmond</p>
                <p className="text-primary-foreground/80">6180 Blundell Rd #172<br />Richmond, BC V7C 4W7</p>
                <a href="tel:7783081088" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">(778) 308-1088</a>
              </div>
              <div>
                <p className="font-medium">Abbotsford</p>
                <p className="text-primary-foreground/80">2051 McCallum Rd #201<br />Abbotsford, BC V2S 3N5</p>
                <a href="tel:6048640876" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">(604) 864-0876</a>
              </div>
              <div className="pt-1">
                <a href="mailto:hello@smilesbyglow.ca" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">hello@smilesbyglow.ca</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="max-w-7xl mx-auto container-padding py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary-foreground/60 text-center sm:text-left">
            © 2026 Glow Pediatric Dentistry. All rights reserved. | Web Design by{" "}
            <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/80 transition-colors">Bluluma</a>
            {" "}| Powered by{" "}
            <a href="https://swiftlift.app" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/80 transition-colors">SwiftLift</a>
          {" "}<span className="block mt-1 opacity-80" data-concept-note>Design concept for portfolio purposes only. Not the official website of Glow Dental.</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
