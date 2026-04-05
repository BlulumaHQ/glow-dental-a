import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  {
    label: "About Us",
    children: [
      { label: "About", href: "/about/" },
      { label: "Why Glow?", href: "/about/why-childrens-dental-clinic/" },
    ],
  },
  {
    label: "Our Teams",
    children: [
      { label: "Pediatric Dentist", href: "/our-pediatric-dentist/" },
      { label: "Abbotsford Team", href: "/our-abbotsford-team/" },
      { label: "Langley Team", href: "/our-langley-team/" },
      { label: "Richmond Team", href: "/our-richmond-team/" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "New Patients", href: "/new-patients/" },
      { label: "Emergencies", href: "/emergency-pediatric-dental-care/" },
      { label: "Baby's First Visit", href: "/ages/baby-first-dental-visit/" },
      { label: "Children", href: "/ages/dentistry-for-children/" },
      { label: "Teen Specialist", href: "/ages/teen-dentist-langley/" },
      { label: "CDCP", href: "/cdcp/" },
      { label: "Referral", href: "/dentist-referral/" },
    ],
  },
  {
    label: "Locations",
    href: "/locations/",
    children: [
      { label: "Abbotsford", href: "/our-locations/abbotsford/" },
      { label: "Langley", href: "/our-locations/langley/" },
      { label: "Richmond", href: "/our-locations/richmond/" },
    ],
  },
  { label: "Blog", href: "/blog/" },
  { label: "Resources", href: "/resources/" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between container-padding h-20">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src="https://glowpediatricdentistry.ca/wp-content/uploads/2022/01/Glow-Orthodontics-Logo-e1643339709200.jpg"
            alt="Glow Pediatric Dentistry"
            className="h-[75px] w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.children ? (
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md">
                  {item.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              ) : (
                <Link
                  to={item.href!}
                  className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md"
                >
                  {item.label}
                </Link>
              )}
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 pt-1 z-50">
                  <div className="bg-background border border-border rounded-lg shadow-lg py-2 min-w-[200px]">
                    {item.href && (
                      <Link
                        to={item.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors"
                      >
                        All {item.label}
                      </Link>
                    )}
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button variant="hero" asChild>
            <Link to="/book-online/">Book Online</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border max-h-[80vh] overflow-y-auto">
          <nav className="container-padding py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between py-3 text-sm font-medium text-foreground"
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.label ? null : item.label)
                      }
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="pl-4 space-y-1">
                        {item.href && (
                          <Link
                            to={item.href}
                            className="block py-2 text-sm text-muted-foreground hover:text-primary"
                            onClick={() => setMobileOpen(false)}
                          >
                            All {item.label}
                          </Link>
                        )}
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="block py-2 text-sm text-muted-foreground hover:text-primary"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href!}
                    className="block py-3 text-sm font-medium text-foreground hover:text-primary"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button variant="hero" className="w-full" asChild>
                <Link to="/book-online/" onClick={() => setMobileOpen(false)}>
                  Book Online
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
