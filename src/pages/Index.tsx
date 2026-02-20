import { Link } from "react-router-dom";
import { Wrench, Shield, Clock, Users, Star, ThumbsUp, Building2 } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import SectionHeading from "@/components/SectionHeading";
import BookingForm from "@/components/BookingForm";
import aboutTeam from "@/assets/about-team.jpg";
import serviceAc from "@/assets/service-ac.jpg";
import serviceRepair from "@/assets/service-repair.jpg";
import serviceCommercial from "@/assets/service-commercial.jpg";

const services = [
  { title: "AC Repair", desc: "Fast and reliable AC repair services for all brands and models.", img: serviceRepair },
  { title: "AC Installation", desc: "Professional AC installation for homes and offices with expert precision.", img: serviceAc },
  { title: "AC Maintenance", desc: "Regular maintenance to keep your AC running efficiently all year.", img: serviceRepair },
  { title: "Gas Filling", desc: "AC gas refilling services with genuine refrigerants for optimal cooling.", img: serviceAc },
  { title: "AMC Plans", desc: "Affordable annual maintenance contracts to protect your investment.", img: serviceCommercial },
  { title: "Commercial HVAC", desc: "Complete HVAC solutions for commercial buildings and businesses.", img: serviceCommercial },
];

const whyUs = [
  { icon: Wrench, title: "Trained Technicians", desc: "Certified experts with years of experience." },
  { icon: Clock, title: "Quick Response", desc: "Same-day service in most areas of Hyderabad." },
  { icon: Shield, title: "Affordable Pricing", desc: "Transparent pricing with no hidden charges." },
  { icon: ThumbsUp, title: "Professional & Tidy Work", desc: "Clean, respectful, and efficient service." },
  { icon: Building2, title: "Residential & Commercial", desc: "Solutions for homes, offices, and businesses." },
];

const reviews = [
  { name: "Rajesh K.", text: "I'm happy with the AC service. Very quick and professional!", rating: 5 },
  { name: "Priya S.", text: "Very professional and tidy work! Highly recommended.", rating: 5 },
  { name: "Arjun M.", text: "Best HVAC service in Hyderabad. Affordable and reliable.", rating: 5 },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <HeroSlider />

      {/* About Preview */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <img src={aboutTeam} alt="VR HVAC Solutions Team" className="rounded-xl shadow-lg w-full object-cover aspect-video" loading="lazy" />
            <div>
              <SectionHeading title="About Our Company" centered={false} />
              <p className="text-muted-foreground leading-relaxed mb-6">
                VR HVAC Solutions Sales & Services provides professional AC installation, service, repair, gas filling, and maintenance services (AMC) for residential and commercial customers in Hyderabad. We handle VRV/VRF systems, ductable AC, cassette AC, tower AC, and split ACs with trained technicians, quick response, and affordable pricing.
              </p>
              <Link to="/about" className="inline-block px-6 py-3 bg-primary text-primary-foreground font-heading font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm uppercase tracking-wide">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding section-alt">
        <div className="container">
          <SectionHeading title="Our Services" subtitle="Comprehensive HVAC solutions for every need" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-card rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-heading font-bold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
                  <Link to="/services" className="text-primary font-semibold text-sm hover:underline">Read More →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container">
          <SectionHeading title="Why Choose Us" subtitle="Trusted by hundreds of customers across Hyderabad" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="text-center p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-heading font-bold text-sm mb-1">{item.title}</h4>
                <p className="text-muted-foreground text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding section-alt">
        <div className="container">
          <SectionHeading title="Customer Reviews" subtitle="See what our customers say about us" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {reviews.map((r, i) => (
              <div key={i} className="bg-card p-6 rounded-xl shadow-sm">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm italic mb-4">"{r.text}"</p>
                <p className="font-heading font-bold text-sm">{r.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="https://www.google.com/maps/place/VR+HVAC+solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border-2 border-primary text-primary font-heading font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors text-sm uppercase tracking-wide"
            >
              View All Google Reviews
            </a>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding">
        <div className="container max-w-3xl">
          <SectionHeading title="Book a Service" subtitle="Fill the form below and we'll get back to you shortly" />
          <BookingForm />
        </div>
      </section>

      {/* Map */}
      <section className="section-padding section-alt">
        <div className="container">
          <SectionHeading title="Find Us" subtitle="Visit our office in Hyderabad" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">VR HVAC Solutions – Sales & Services</strong><br />
                1-10-131 Manoharamma Nilayam,<br />
                Street No-9, Street Number 1,<br />
                RTC Cross Road, Hyderabad,<br />
                Telangana 500020
              </p>
              <div className="flex items-center gap-2 mt-4">
                <Star className="w-5 h-5 fill-accent text-accent" />
                <span className="font-heading font-bold">5.0</span>
                <span className="text-muted-foreground text-sm">Google Rating</span>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.7194269284005!2d78.48749077493524!3d17.40741408348315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99ad2c8c878f%3A0xe20aa7fff7efd568!2sVR%20HVAC%20solutions!5e1!3m2!1sen!2sin!4v1771591350072!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VR HVAC Solutions location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
