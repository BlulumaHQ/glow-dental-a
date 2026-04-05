import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const DentistReferral = () => (
  <Layout>
    <SEOHead title="Dentist Referral" description="Refer a patient to Glow Pediatric Dentistry for specialized pediatric dental care." path="/dentist-referral/" />

    <section className="section-padding bg-section-light">
      <div className="max-w-4xl mx-auto container-padding text-center">
        <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">For Dental Professionals</p>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Dentist Referral</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Thank you for considering Glow Pediatric Dentistry for your pediatric referrals. We provide specialized care for patients from infants through teens, including those with special needs.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="max-w-3xl mx-auto container-padding">
        <h2 className="text-2xl font-bold text-foreground mb-6">Submit a Referral</h2>
        <p className="text-muted-foreground mb-8">Complete the form below to refer a patient to our practice. Our team will follow up promptly.</p>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Referring Dentist</label>
              <input type="text" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Practice Name</label>
              <input type="text" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Patient Name</label>
              <input type="text" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Patient Age</label>
              <input type="text" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Preferred Location</label>
            <select className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm">
              <option>Langley</option><option>Richmond</option><option>Abbotsford</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Reason for Referral</label>
            <textarea className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm" rows={4} />
          </div>
          <Button variant="hero" className="w-full" type="submit">Submit Referral</Button>
        </form>
      </div>
    </section>
  </Layout>
);

export default DentistReferral;
