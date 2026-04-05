import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const CDCP = () => (
  <Layout>
    <SEOHead title="Canadian Dental Care Plan (CDCP)" description="Learn about the Canadian Dental Care Plan and how Glow Pediatric Dentistry can help." path="/cdcp/" />

    <section className="section-padding bg-section-light">
      <div className="max-w-4xl mx-auto container-padding text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Canadian Dental Care Plan (CDCP)</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          The Canadian Dental Care Plan helps eligible Canadian families access dental care. At Glow Pediatric Dentistry, we're here to help you navigate the program and ensure your child receives the care they need.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="max-w-3xl mx-auto container-padding">
        <h2 className="text-2xl font-bold text-foreground mb-6">How It Works</h2>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>The CDCP is a federal program designed to provide dental coverage for eligible Canadian residents who do not have access to dental insurance. The program covers a range of dental services for children and families.</p>
          <p>If you believe your family may qualify for the Canadian Dental Care Plan, please contact our team. We can help guide you through the eligibility requirements and assist with the enrollment process.</p>
          <p>Our team at Glow Pediatric Dentistry is committed to ensuring that every child has access to quality dental care, regardless of financial circumstances.</p>
        </div>
        <div className="mt-10 flex gap-4">
          <Button variant="hero" asChild><Link to="/book-online/">Book an Appointment</Link></Button>
          <Button variant="outline" asChild><Link to="/new-patients/">New Patient Info</Link></Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default CDCP;
