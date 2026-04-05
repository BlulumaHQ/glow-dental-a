import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const About = () => (
  <Layout>
    <SEOHead title="About" description="Learn about Glow Pediatric Dentistry and our approach to specialized pediatric dental care in BC." path="/about/" />
    
    <section className="section-padding bg-section-light">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">About Us</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Glow Pediatric Dentistry</h1>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We offer specialized and preventive pediatric dental care in Abbotsford, Langley and Richmond. We focus on building lasting relationships that create positive dental experiences, whether it's your family's first visit to a pediatric dental office or one of many.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We take a human approach as pediatric dentists that puts you and your child first. Dr. Fran and his team of certified pediatric dentists offer a full spectrum of pediatric dentistry care including oral hygiene visits, emergency care, sedation dentistry (including nitrous oxide), restorative dentistry, special needs dentistry, interceptive orthodontics, and general anesthesia in British Columbia.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We've created a calm and child-friendly practice so that your whole family can feel at ease from the moment you step through the door for your children's dental care and dental treatment appointment.
            </p>
            <Button variant="hero" asChild>
              <Link to="/book-online/">Book an Appointment</Link>
            </Button>
          </div>
          <div>
            <img src="https://glowpediatricdentistry.ca/wp-content/uploads/2022/02/glow149A9097.jpg" alt="Glow office" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Office</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { src: "https://glowpediatricdentistry.ca/wp-content/uploads/2022/01/Langley-Pediatric-Dentistry-Exterior-e1643339767127.jpg", alt: "Office exterior" },
            { src: "https://glowpediatricdentistry.ca/wp-content/uploads/2022/01/Langley-Pediatric-Dentistry-Waiting-Room-e1643339730259.jpg", alt: "Waiting room" },
            { src: "https://glowpediatricdentistry.ca/wp-content/uploads/2022/01/Langley-Pediatric-Dentistry-Lobby-e1643339758794.jpg", alt: "Lobby" },
          ].map((img) => (
            <img key={img.alt} src={img.src} alt={img.alt} className="rounded-xl shadow-md w-full object-cover aspect-[4/3]" loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
