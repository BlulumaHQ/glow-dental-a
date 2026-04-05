import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import { Star, MapPin, Phone, Heart, Shield, Smile } from "lucide-react";
import heroImg from "@/assets/hero-dental.jpg";

const testimonials = [
  {
    text: "Dr. Fran did an amazing job doing tooth restoration for my daughter's tooth decay. The whole staff was professional and friendly. Clinic is new, beautiful, designed for children. My daughter used to have anxiety in going to dentists. But she started looking forward to dentist appointments after she went to Glow.",
    author: "Anne S",
  },
  {
    text: "This was my daughters first dental experience. The pediatric dentist made her experience so calming and easy. Both he and his staff were above & beyond in ensuring my daughter was comfortable. Looking forward to our next visit!",
    author: "Deanna V",
  },
  {
    text: "Dr. Fran is the best at working with children and young patients! They are patient, knowledgeable and friendly! This place is clean and modern. My son went for a tooth extraction and left happy & healthy.",
    author: "Anna H",
  },
  {
    text: "Every single person at Glow - the receptionist, the hygienists, and Dr. Fran - are so kind and professional working with children. My children don't dread the dentist one bit since we switched to Glow dentists.",
    author: "Jordan K",
  },
];

const services = [
  { title: "Oral Hygiene Visits", icon: Smile, desc: "Gentle cleanings and preventive care tailored for growing smiles." },
  { title: "Emergency Care", icon: Shield, desc: "Prompt, compassionate emergency dental treatment when your child needs it most." },
  { title: "Sedation Dentistry", icon: Heart, desc: "Safe sedation options including nitrous oxide for anxiety-free visits." },
  { title: "Restorative Dentistry", icon: Star, desc: "Fillings, crowns, and restorations designed specifically for young patients." },
];

const locations = [
  {
    city: "Langley",
    address: "20826 72 Ave #125, Langley, BC V2Y 3J5",
    phone: "(778) 278-1010",
    href: "/our-locations/langley/",
    image: "https://glowpediatricdentistry.ca/wp-content/uploads/2022/01/Langley-Pediatric-Dentistry-Exterior-e1643339767127.jpg",
  },
  {
    city: "Richmond",
    address: "6180 Blundell Rd #172, Richmond, BC V7C 4W7",
    phone: "(778) 308-1088",
    href: "/our-locations/richmond/",
    image: "https://glowpediatricdentistry.ca/wp-content/uploads/2022/01/Langley-Pediatric-Dentistry-Lobby-e1643339758794.jpg",
  },
  {
    city: "Abbotsford",
    address: "2051 McCallum Rd #201, Abbotsford, BC V2S 3N5",
    phone: "(604) 864-0876",
    href: "/our-locations/abbotsford/",
    image: "https://glowpediatricdentistry.ca/wp-content/uploads/2022/01/Langley-Pediatric-Dentistry-Waiting-Room-e1643339730259.jpg",
  },
];

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Pediatric Dentist | Abbotsford & Langley & Richmond | Glow"
        description="Specialized pediatric dentistry in Abbotsford, Langley and Richmond. From infants & toddlers to children & teens, we welcome all. Learn more!"
        path="/"
      />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Child-friendly pediatric dental office" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto container-padding w-full py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-primary-foreground leading-[1.05] mb-6 text-balance">
              Where Every Smile Gets the Care It Deserves
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-lg">
              Specialized pediatric dental care in Abbotsford, Langley and Richmond. Building lasting relationships for positive dental experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" asChild>
                <Link to="/book-online/">Book an Appointment</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/about/">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-section-light">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">About Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Human Approach to Pediatric Dentistry
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We take a human approach as pediatric dentists that puts you and your child first. Dr. Fran and his team of certified pediatric dentists offer a full spectrum of pediatric dentistry care including oral hygiene visits, emergency care, sedation dentistry, restorative dentistry, special needs dentistry, interceptive orthodontics, and general anesthesia in British Columbia.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We've created a calm and child-friendly practice so that your whole family can feel at ease from the moment you step through the door.
              </p>
              <Button variant="default" asChild>
                <Link to="/about/">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://glowpediatricdentistry.ca/wp-content/uploads/2022/02/glow149A9097.jpg"
                alt="Glow Pediatric Dentistry office"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary rounded-2xl p-6 shadow-lg hidden md:block">
                <p className="text-3xl font-bold text-secondary-foreground">3</p>
                <p className="text-sm text-secondary-foreground/80">Locations in BC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Pediatric Dental Care
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From your baby's first dental visit to teen dental care, we provide a full spectrum of specialized pediatric dentistry services.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-secondary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="default" asChild>
              <Link to="/new-patients/">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-padding bg-section-light">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Our Locations</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Three Convenient Locations in BC
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((loc) => (
              <Link
                key={loc.city}
                to={loc.href}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="overflow-hidden aspect-[16/10]">
                  <img
                    src={loc.image}
                    alt={`Glow Pediatric Dentistry ${loc.city}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{loc.city}</h3>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                    {loc.address}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4 shrink-0 text-primary" />
                    {loc.phone}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-primary">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              What Parents Are Saying
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-primary-foreground/90 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <p className="font-semibold text-primary-foreground text-sm">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Book Your Child's Visit?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you've got questions, concerns, or just want to say hello, please don't hesitate to get in touch with our team who will be happy to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/book-online/">Book an Appointment</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/locations/">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
