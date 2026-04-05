import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Smile, Star, Users, Sparkles } from "lucide-react";

const reasons = [
  { icon: Heart, title: "Child-Centered Care", desc: "Every aspect of our practice is designed with your child's comfort in mind." },
  { icon: Shield, title: "Certified Specialists", desc: "Our pediatric dentists have specialized training beyond general dentistry." },
  { icon: Smile, title: "Positive Experiences", desc: "We make dental visits fun and stress-free so kids look forward to coming back." },
  { icon: Star, title: "Advanced Technology", desc: "Low-radiation x-rays, non-drilling options, and modern equipment for better care." },
  { icon: Users, title: "Family-Oriented", desc: "We build lasting relationships with your entire family for continuity of care." },
  { icon: Sparkles, title: "Beautiful Facilities", desc: "Clean, modern, and thoughtfully designed spaces that feel welcoming." },
];

const WhyGlow = () => (
  <Layout>
    <SEOHead title="Why Children's Dental Clinic" description="Discover why families choose Glow Pediatric Dentistry for their children's dental care in BC." path="/about/why-childrens-dental-clinic/" />

    <section className="section-padding bg-section-light">
      <div className="max-w-4xl mx-auto container-padding text-center">
        <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Why Choose Us</p>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Why Glow?</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          We focus on building lasting relationships that create positive dental experiences, whether it's your family's first visit or one of many.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r) => (
            <div key={r.title} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                <r.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="hero" asChild>
            <Link to="/book-online/">Book Your Visit</Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default WhyGlow;
