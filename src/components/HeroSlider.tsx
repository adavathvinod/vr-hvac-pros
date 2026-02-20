import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const slides = [
  {
    image: hero1,
    title: "Professional AC Installation Services",
    subtitle: "Reliable and affordable air conditioning installation for homes and offices.",
    cta: "Book Service",
    link: "/booking",
  },
  {
    image: hero2,
    title: "Expert AC Repair & Maintenance",
    subtitle: "Quick response with trained technicians for all AC brands.",
    cta: "Call Now",
    link: "tel:+919999999999",
  },
  {
    image: hero3,
    title: "Residential & Commercial HVAC Solutions",
    subtitle: "Complete HVAC solutions for houses, shops, and commercial buildings.",
    cta: "WhatsApp Us",
    link: "https://wa.me/919999999999",
  },
  {
    image: hero4,
    title: "AMC – Annual Maintenance Contracts",
    subtitle: "Keep your AC running like new with our affordable AMC plans.",
    cta: "Book Appointment",
    link: "/booking",
  },
  {
    image: hero5,
    title: "Trusted HVAC Professionals in Hyderabad",
    subtitle: "Professional, tidy work with 100% customer satisfaction.",
    cta: "Contact Us",
    link: "/contact",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];
  const isExternal = slide.link.startsWith("http") || slide.link.startsWith("tel:");

  return (
    <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
      {slides.map((s, i) => (
        <img
          key={i}
          src={s.image}
          alt={s.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute inset-0 flex items-center">
        <div className="container">
          <div className="max-w-2xl animate-fade-in" key={current}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight mb-4">
              {slide.title}
            </h1>
            <p className="text-base md:text-xl text-primary-foreground/90 mb-8 max-w-lg">
              {slide.subtitle}
            </p>
            {isExternal ? (
              <a
                href={slide.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-accent text-accent-foreground font-heading font-bold rounded-lg hover:opacity-90 transition-opacity text-sm uppercase tracking-wide"
              >
                {slide.cta}
              </a>
            ) : (
              <Link
                to={slide.link}
                className="inline-block px-8 py-3 bg-accent text-accent-foreground font-heading font-bold rounded-lg hover:opacity-90 transition-opacity text-sm uppercase tracking-wide"
              >
                {slide.cta}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-background/40 transition-colors" aria-label="Previous slide">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-background/40 transition-colors" aria-label="Next slide">
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-accent w-8" : "bg-primary-foreground/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
