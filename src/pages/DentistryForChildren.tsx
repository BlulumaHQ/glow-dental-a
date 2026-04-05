import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const DentistryForChildren = () => (
  <Layout>
    <SEOHead title="Dentistry for Children" description="Specialized dental care for children at Glow Pediatric Dentistry in BC." path="/ages/dentistry-for-children/" />

    <section className="section-padding bg-section-light">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Care by Ages</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Dentistry for Children</h1>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Children have unique dental needs that differ from adults. Our certified pediatric dentists have specialized training to provide age-appropriate care in an environment designed specifically for young patients.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From preventive care and oral health education to dental fillings, sedation dentistry, and restorative treatments — we offer comprehensive dental services to keep your child's smile healthy and bright.
            </p>
            <Button variant="hero" asChild>
              <Link to="/book-online/">Book an Appointment</Link>
            </Button>
          </div>
          <div>
            <img src="https://glowpediatricdentistry.ca/wp-content/uploads/2022/01/Langley-Kids-Dentist-e1643339794112.jpg" alt="Dentistry for children" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default DentistryForChildren;
