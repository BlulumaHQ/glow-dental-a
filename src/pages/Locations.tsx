import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

const locations = [
  {
    city: "Langley",
    desc: "Welcome to Langley's top pediatric dentistry office, where expert care and a welcoming, child-focused atmosphere come together to offer a remarkable dental journey for your little ones. Our dedicated team excels in creating a relaxed environment, using advanced technology to emphasize preventive care and oral health education.",
    address: "20826 72 Ave #125, Langley, BC V2Y 3J5",
    phone: "(778) 278-1010",
    email: "hello@smilesbyglow.ca",
    href: "/our-locations/langley/",
    image: "https://glowpediatricdentistry.ca/wp-content/uploads/2022/01/Langley-Pediatric-Dentistry-Exterior-e1643339767127.jpg",
  },
  {
    city: "Richmond",
    desc: "Greetings from Richmond's premier pediatric dental clinic, where exceptional care and a kid-friendly environment unite to make dental visits enjoyable for your children. Our approach centers on providing gentle, individualized care that helps ease any dental anxieties.",
    address: "6180 Blundell Rd #172, Richmond, BC V7C 4W7",
    phone: "(778) 308-1088",
    email: "richmond@smilesbyglow.ca",
    href: "/our-locations/richmond/",
    image: "https://glowpediatricdentistry.ca/wp-content/uploads/2022/01/Langley-Pediatric-Dentistry-Lobby-e1643339758794.jpg",
  },
  {
    city: "Abbotsford",
    desc: "Welcome to Abbotsford's foremost pediatric dentistry clinic, where unparalleled care and a child-centered approach create an optimal environment for positive dental experiences. We focus on delivering compassionate, tailored care to make visits relaxing and stress-free.",
    address: "2051 McCallum Rd #201, Abbotsford, BC V2S 3N5",
    phone: "(604) 864-0876",
    email: "abbotsford@smilesbyglow.ca",
    href: "/our-locations/abbotsford/",
    image: "https://glowpediatricdentistry.ca/wp-content/uploads/2022/01/Langley-Pediatric-Dentistry-Waiting-Room-e1643339730259.jpg",
  },
];

const Locations = () => (
  <Layout>
    <SEOHead title="Locations" description="Find Glow Pediatric Dentistry in Langley, Richmond, and Abbotsford BC." path="/locations/" />

    <section className="section-padding bg-section-light">
      <div className="max-w-4xl mx-auto container-padding text-center">
        <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Our Locations</p>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Visit Us</h1>
        <p className="text-muted-foreground text-lg">Three convenient locations across British Columbia to serve your family.</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="max-w-7xl mx-auto container-padding space-y-16">
        {locations.map((loc, i) => (
          <div key={loc.city} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <img src={loc.image} alt={`Glow ${loc.city}`} className="rounded-2xl shadow-xl w-full object-cover aspect-[16/10]" loading="lazy" />
            </div>
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <h2 className="text-3xl font-bold text-foreground mb-4">{loc.city} Pediatric Dentist</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{loc.desc}</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 text-sm"><MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" /><span className="text-muted-foreground">{loc.address}</span></div>
                <div className="flex items-center gap-3 text-sm"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${loc.phone.replace(/[^0-9]/g, "")}`} className="text-muted-foreground hover:text-primary transition-colors">{loc.phone}</a></div>
              </div>
              <div className="flex gap-4">
                <Button variant="hero" asChild><Link to="/book-online/">Book Online</Link></Button>
                <Button variant="outline" asChild><Link to={loc.href}>Learn More</Link></Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Locations;
