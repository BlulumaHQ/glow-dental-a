import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Phone } from "lucide-react";

const Emergency = () => (
  <Layout>
    <SEOHead title="Emergency Pediatric Dental Care" description="Emergency pediatric dental care in Abbotsford, Langley and Richmond. Contact Glow Pediatric Dentistry now." path="/emergency-pediatric-dental-care/" />

    <section className="section-padding bg-primary">
      <div className="max-w-4xl mx-auto container-padding text-center">
        <AlertTriangle className="w-12 h-12 text-secondary mx-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">Emergency Dental Care</h1>
        <p className="text-primary-foreground/90 text-lg leading-relaxed mb-8">
          If your child is experiencing a dental emergency, please contact your nearest Glow location immediately. We provide prompt, compassionate emergency dental treatment.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { city: "Langley", phone: "(778) 278-1010" },
            { city: "Richmond", phone: "(778) 308-1088" },
            { city: "Abbotsford", phone: "(604) 864-0876" },
          ].map((loc) => (
            <a key={loc.city} href={`tel:${loc.phone.replace(/[^0-9]/g, "")}`} className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl p-6 hover:bg-primary-foreground/20 transition-all">
              <p className="font-bold text-primary-foreground mb-1">{loc.city}</p>
              <div className="flex items-center justify-center gap-2 text-secondary">
                <Phone className="w-4 h-4" />
                <span className="font-medium">{loc.phone}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="max-w-3xl mx-auto container-padding">
        <h2 className="text-2xl font-bold text-foreground mb-6">Common Dental Emergencies</h2>
        <div className="space-y-4">
          {[
            { title: "Knocked-Out Tooth", desc: "If a permanent tooth is knocked out, try to place it back in the socket or keep it in milk. Contact us immediately." },
            { title: "Toothache", desc: "Rinse the mouth with warm water, use dental floss to remove any food caught between teeth, and contact our office." },
            { title: "Broken or Chipped Tooth", desc: "Save any pieces. Rinse the mouth with warm water and apply a cold compress to reduce swelling." },
            { title: "Bitten Lip or Tongue", desc: "Apply pressure with a clean cloth. Use a cold compress to reduce swelling. Contact us if bleeding doesn't stop." },
          ].map((e) => (
            <div key={e.title} className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-2">{e.title}</h3>
              <p className="text-sm text-muted-foreground">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Emergency;
