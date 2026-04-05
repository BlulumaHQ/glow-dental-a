import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const NewPatients = () => (
  <Layout>
    <SEOHead title="New Patients" description="Everything new patients need to know about visiting Glow Pediatric Dentistry." path="/new-patients/" />

    <section className="section-padding bg-section-light">
      <div className="max-w-4xl mx-auto container-padding text-center">
        <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Welcome</p>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">New Patients</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          We're excited to welcome your family to Glow Pediatric Dentistry. Here's everything you need to know for your first visit.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">What to Expect</h2>
            <ul className="space-y-4">
              {[
                "A warm welcome from our friendly front desk team",
                "A tour of our child-friendly office",
                "A comprehensive dental examination",
                "Digital x-rays if needed (low-radiation)",
                "A discussion of your child's dental health",
                "A personalized treatment plan",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Services We Offer</h2>
            <ul className="space-y-3">
              {[
                "Oral hygiene visits",
                "Emergency dental care",
                "Sedation dentistry & nitrous oxide",
                "Restorative dentistry & dental fillings",
                "Special needs dentistry",
                "Interceptive orthodontics",
                "Non-drilling options",
                "Low-radiation x-rays",
              ].map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button variant="hero" asChild><Link to="/book-online/">Book Your First Visit</Link></Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default NewPatients;
