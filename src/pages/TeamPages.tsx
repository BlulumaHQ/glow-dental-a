import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

interface TeamPageProps {
  city: string;
  slug: string;
  path: string;
}

const TeamPage = ({ city, slug, path }: TeamPageProps) => (
  <Layout>
    <SEOHead title={`Our ${city} Team`} description={`Meet the Glow Pediatric Dentistry team in ${city}, BC.`} path={path} />

    <section className="section-padding bg-section-light">
      <div className="max-w-4xl mx-auto container-padding text-center">
        <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Our Team</p>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our {city} Team</h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          Our {city} team is dedicated to providing exceptional pediatric dental care in a warm, welcoming environment. Every team member — from our front desk staff to our dental hygienists and pediatric dentists — is committed to making your child's visit comfortable and positive.
        </p>
        <Button variant="hero" asChild>
          <Link to="/book-online/">Book at {city}</Link>
        </Button>
      </div>
    </section>

    <section className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "https://glowpediatricdentistry.ca/wp-content/uploads/2022/01/Langley-Kids-Dentist-e1643339794112.jpg",
            "https://glowpediatricdentistry.ca/wp-content/uploads/2022/01/Langley-Dentistry-for-Kids-e1643339812811.jpg",
            "https://glowpediatricdentistry.ca/wp-content/uploads/2022/02/glow149A9097.jpg",
          ].map((src, i) => (
            <img key={i} src={src} alt={`${city} team`} className="rounded-xl shadow-md w-full object-cover aspect-[4/3]" loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export const AbbotsfordTeam = () => <TeamPage city="Abbotsford" slug="abbotsford" path="/our-abbotsford-team/" />;
export const LangleyTeam = () => <TeamPage city="Langley" slug="langley" path="/our-langley-team/" />;
export const RichmondTeam = () => <TeamPage city="Richmond" slug="richmond" path="/our-richmond-team/" />;
