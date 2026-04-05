import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const BookOnline = () => (
  <Layout>
    <SEOHead title="Book Online" description="Book your child's dental appointment online at Glow Pediatric Dentistry." path="/book-online/" />

    <section className="section-padding">
      <div className="max-w-4xl mx-auto container-padding text-center">
        <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Appointments</p>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Book Online</h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-10">
          Choose your preferred location below to book your child's appointment. You can also call us directly at any of our three locations.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[
            { city: "Langley", phone: "(778) 278-1010" },
            { city: "Richmond", phone: "(778) 308-1088" },
            { city: "Abbotsford", phone: "(604) 864-0876" },
          ].map((loc) => (
            <div key={loc.city} className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-foreground mb-2">{loc.city}</h3>
              <a href={`tel:${loc.phone.replace(/[^0-9]/g, "")}`} className="text-primary font-medium hover:underline">{loc.phone}</a>
            </div>
          ))}
        </div>

        <div className="bg-section-light rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">Request an Appointment</h2>
          <p className="text-muted-foreground mb-8">Fill out the form below and our team will get back to you to confirm your appointment.</p>
          <form className="max-w-lg mx-auto space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Parent's Name</label>
                <input type="text" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Child's Name</label>
                <input type="text" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                <input type="email" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Phone</label>
                <input type="tel" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Preferred Location</label>
              <select className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm">
                <option>Langley</option>
                <option>Richmond</option>
                <option>Abbotsford</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Message</label>
              <textarea className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm" rows={4} />
            </div>
            <Button variant="hero" className="w-full" type="submit">Submit Request</Button>
          </form>
        </div>
      </div>
    </section>
  </Layout>
);

export default BookOnline;
