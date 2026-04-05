import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const TeenDentist = () => (
  <Layout>
    <SEOHead title="Teen Dentist Langley" description="Teen dental specialist services at Glow Pediatric Dentistry in Langley and BC." path="/ages/teen-dentist-langley/" />

    <section className="section-padding bg-section-light">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Care by Ages</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Teen Dental Specialist</h1>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Teens have unique dental needs, from wisdom teeth to orthodontic care. Our pediatric dentists are specially trained to work with adolescents, providing care that respects their growing independence while ensuring optimal oral health.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We offer interceptive orthodontics, sports mouthguards, wisdom tooth monitoring, and comprehensive dental care tailored for teenagers across our Langley, Richmond, and Abbotsford locations.
            </p>
            <Button variant="hero" asChild>
              <Link to="/book-online/">Book a Teen Visit</Link>
            </Button>
          </div>
          <div>
            <img src="https://glowpediatricdentistry.ca/wp-content/uploads/2022/01/Langley-Invisalign-e1643339802342.jpg" alt="Teen dental specialist" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default TeenDentist;
