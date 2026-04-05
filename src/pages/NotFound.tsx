import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";

const NotFound = () => (
  <Layout>
    <SEOHead title="Page Not Found" path="/404" />
    <section className="section-padding">
      <div className="max-w-xl mx-auto container-padding text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-foreground mb-2">Page Not Found</p>
        <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Button variant="hero" asChild>
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default NotFound;
