import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const PediatricDentist = () => (
  <Layout>
    <SEOHead title="Our Pediatric Dentist" description="Meet Dr. Fran and the certified pediatric dentists at Glow Pediatric Dentistry." path="/our-pediatric-dentist/" />

    <section className="section-padding bg-section-light">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Our Team</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Pediatric Dentists</h1>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dr. Fran and his team of certified pediatric dentists offer a full spectrum of pediatric dentistry care. With specialized training beyond general dentistry, our team is uniquely qualified to care for infants, children, teens, and patients with special needs.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our pediatric dentists are patient, knowledgeable, and friendly. They have a special way with children that puts even the most anxious young patients at ease.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From oral hygiene visits and emergency care to sedation dentistry, restorative dentistry, interceptive orthodontics, and general anesthesia — our team provides comprehensive care across all three locations in British Columbia.
            </p>
            <Button variant="hero" asChild>
              <Link to="/book-online/">Book an Appointment</Link>
            </Button>
          </div>
          <div>
            <img src="https://glowpediatricdentistry.ca/wp-content/uploads/2019/10/IMG_8302-e1579791500385.jpg" alt="Dr. Fran" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default PediatricDentist;
