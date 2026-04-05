import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink } from "lucide-react";

const Resources = () => (
  <Layout>
    <SEOHead title="Resources" description="Dental care resources for parents from Glow Pediatric Dentistry." path="/resources/" />

    <section className="section-padding bg-section-light">
      <div className="max-w-4xl mx-auto container-padding text-center">
        <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Patient Resources</p>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Resources</h1>
        <p className="text-muted-foreground text-lg">Helpful resources and information for parents and families.</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="space-y-6">
          {[
            { title: "New Patient Forms", desc: "Download and complete your new patient forms before your first visit to save time.", icon: FileText },
            { title: "Dental Care Guide for Infants", desc: "Tips and guidelines for caring for your baby's oral health from the start.", icon: Download },
            { title: "Insurance & Payment Information", desc: "Learn about accepted insurance plans and payment options at our clinics.", icon: ExternalLink },
            { title: "Canadian Dental Care Plan (CDCP)", desc: "Find out if you qualify for the Canadian Dental Care Plan and how to access benefits.", icon: FileText },
          ].map((r) => (
            <div key={r.title} className="bg-card border border-border rounded-xl p-6 flex items-start gap-4 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <r.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Resources;
