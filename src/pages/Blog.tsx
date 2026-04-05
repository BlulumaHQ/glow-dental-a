import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";

const Blog = () => (
  <Layout>
    <SEOHead title="Blog" description="Read the latest articles on pediatric dental care from Glow Pediatric Dentistry." path="/blog/" />

    <section className="section-padding bg-section-light">
      <div className="max-w-4xl mx-auto container-padding text-center">
        <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Our Blog</p>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Blog</h1>
        <p className="text-muted-foreground text-lg">Helpful tips and insights on pediatric dental health for parents and families.</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "When Should Your Child First Visit the Dentist?", excerpt: "The Canadian Dental Association recommends a first dental visit within 6 months of the first tooth erupting, or by age one.", category: "First Visit" },
            { title: "Tips for Managing Dental Anxiety in Children", excerpt: "Learn how we create positive dental experiences that help children feel comfortable and confident at the dentist.", category: "Tips" },
            { title: "The Importance of Baby Teeth", excerpt: "Baby teeth play a crucial role in your child's development — from speech to nutrition to guiding permanent teeth into place.", category: "Education" },
          ].map((post) => (
            <article key={post.title} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all">
              <div className="h-48 bg-accent" />
              <div className="p-6">
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider">{post.category}</span>
                <h2 className="text-lg font-bold text-foreground mt-2 mb-3">{post.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
