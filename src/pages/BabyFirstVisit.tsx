import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const BabyFirstVisit = () => (
  <Layout>
    <SEOHead title="Baby's First Dental Visit" description="Learn when to schedule your baby's first dental visit and what to expect at Glow Pediatric Dentistry." path="/ages/baby-first-dental-visit/" />

    <section className="section-padding bg-section-light">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Care by Ages</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Baby's First Dental Visit</h1>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Canadian Dental Association recommends that your child's first dental visit should happen within six months of the first tooth appearing, or by their first birthday — whichever comes first.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Early dental visits help establish a "dental home" for your child, allowing us to monitor development and catch any potential issues early. Our team specializes in making first visits comfortable, fun, and positive for both babies and parents.
            </p>
            <Button variant="hero" asChild>
              <Link to="/book-online/">Book Baby's First Visit</Link>
            </Button>
          </div>
          <div>
            <img src="https://glowpediatricdentistry.ca/wp-content/uploads/2019/12/Stocksy_txp4a1a43e7d1Z200_Medium_1508414-e1579790673172.jpg" alt="Baby dental visit" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default BabyFirstVisit;
