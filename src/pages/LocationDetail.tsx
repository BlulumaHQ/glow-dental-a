import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

interface LocationDetailProps {
  city: string;
  address: string;
  phone: string;
  email: string;
  description: string;
  image: string;
  slug: string;
}

const LocationDetail = ({ city, address, phone, email, description, image, slug }: LocationDetailProps) => (
  <Layout>
    <SEOHead title={`${city} Location`} description={`Glow Pediatric Dentistry in ${city}, BC. Specialized pediatric dental care.`} path={`/our-locations/${slug}/`} />

    <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
      <img src={image} alt={`Glow ${city}`} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/70 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">{city} Pediatric Dentist</h1>
      </div>
    </section>

    <section className="section-padding">
      <div className="max-w-4xl mx-auto container-padding">
        <p className="text-muted-foreground leading-relaxed text-lg mb-8">{description}</p>
        <div className="bg-section-light rounded-xl p-8 space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground mb-4">Contact Information</h2>
          <div className="flex items-start gap-3"><MapPin className="w-5 h-5 mt-0.5 text-primary shrink-0" /><span className="text-muted-foreground">{address}</span></div>
          <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-primary shrink-0" /><a href={`tel:${phone.replace(/[^0-9]/g, "")}`} className="text-muted-foreground hover:text-primary">{phone}</a></div>
          <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-primary shrink-0" /><a href={`mailto:${email}`} className="text-muted-foreground hover:text-primary">{email}</a></div>
        </div>
        <div className="flex gap-4">
          <Button variant="hero" asChild><Link to="/book-online/">Book an Appointment</Link></Button>
          <Button variant="outline" asChild><Link to="/locations/">All Locations</Link></Button>
        </div>
      </div>
    </section>
  </Layout>
);

export const LangleyLocation = () => (
  <LocationDetail
    city="Langley"
    slug="langley"
    address="20826 72 Ave #125, Langley, BC V2Y 3J5"
    phone="(778) 278-1010"
    email="hello@smilesbyglow.ca"
    description="Welcome to Langley's top pediatric dentistry office, where expert care and a welcoming, child-focused atmosphere come together to offer a remarkable dental journey for your little ones. Our dedicated team excels in creating a relaxed environment, using advanced technology to emphasize preventive care and oral health education. We strive to make each visit enjoyable and stress-free, ensuring your child leaves with a bright smile and a positive experience. Choose us for a delightful and supportive dental care experience in Langley."
    image="https://glowpediatricdentistry.ca/wp-content/uploads/2022/01/Langley-Pediatric-Dentistry-Exterior-e1643339767127.jpg"
  />
);

export const RichmondLocation = () => (
  <LocationDetail
    city="Richmond"
    slug="richmond"
    address="6180 Blundell Rd #172, Richmond, BC V7C 4W7"
    phone="(778) 308-1088"
    email="richmond@smilesbyglow.ca"
    description="Greetings from Richmond's premier pediatric dental clinic, where exceptional care and a kid-friendly environment unite to make dental visits enjoyable for your children. Our approach centers on providing gentle, individualized care that helps ease any dental anxieties. With our thoughtfully designed space aimed at fostering comfort and ease, we ensure that each visit is as smooth and pleasant as possible. Trust us to make your child's dental experience both positive and memorable, while promoting healthy, radiant smiles."
    image="https://glowpediatricdentistry.ca/wp-content/uploads/2022/01/Langley-Pediatric-Dentistry-Lobby-e1643339758794.jpg"
  />
);

export const AbbotsfordLocation = () => (
  <LocationDetail
    city="Abbotsford"
    slug="abbotsford"
    address="2051 McCallum Rd #201, Abbotsford, BC V2S 3N5"
    phone="(604) 864-0876"
    email="abbotsford@smilesbyglow.ca"
    description="Welcome to Abbotsford's foremost pediatric dentistry clinic, where unparalleled care and a child-centered approach create an optimal environment for positive dental experiences. We focus on delivering compassionate, tailored care to make visits relaxing and stress-free for both children and parents. Our child-friendly facility is carefully crafted to make every treatment session comfortable and reassuring. Depend on us to provide a joyful and beneficial dental experience that supports your child's ongoing oral health and happiness."
    image="https://glowpediatricdentistry.ca/wp-content/uploads/2022/01/Langley-Pediatric-Dentistry-Waiting-Room-e1643339730259.jpg"
  />
);
