import { Link } from "react-router-dom";
import { Target, Eye, Award, Users, Shield, Building2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import aboutTeam from "@/assets/about-team.jpg";
import hero3 from "@/assets/hero-3.jpg";

const values = [
  { icon: Target, title: "Our Mission", desc: "To deliver top-quality HVAC solutions with honesty, professionalism, and affordable pricing for every customer in Hyderabad." },
  { icon: Eye, title: "Our Vision", desc: "To be the most trusted and reliable HVAC service provider in Telangana, known for excellence and customer satisfaction." },
  { icon: Award, title: "Experience", desc: "Years of hands-on experience servicing all major AC brands and HVAC systems for both residential and commercial clients." },
  { icon: Users, title: "Professional Technicians", desc: "Our trained and certified technicians ensure every job is done right the first time with care and precision." },
  { icon: Shield, title: "Quality Guarantee", desc: "We stand behind our work with service guarantees and transparent pricing — no hidden charges." },
  { icon: Building2, title: "Residential & Commercial", desc: "From single split ACs to complete VRV/VRF commercial systems, we handle projects of every scale." },
];

const About = () => (
  <>
    {/* Hero Banner */}
    <section className="relative h-64 md:h-80">
      <img src={hero3} alt="About VR HVAC" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 hero-overlay flex items-center">
        <div className="container">
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-primary-foreground">About Us</h1>
          <p className="text-primary-foreground/80 mt-2">Learn more about VR HVAC Solutions</p>
        </div>
      </div>
    </section>

    {/* Company Overview */}
    <section className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading title="Who We Are" centered={false} />
            <p className="text-muted-foreground leading-relaxed mb-4">
              VR HVAC Solutions Sales & Services is a professional air conditioning contractor based in Hyderabad, Telangana. We specialize in AC installation, repair, maintenance, gas filling, and Annual Maintenance Contracts (AMC) for both residential and commercial customers.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our team of trained technicians handles all types of AC systems including VRV/VRF, ductable AC, cassette AC, tower AC, and split ACs. With a Google rating of 5.0, we are committed to delivering professional, tidy work at affordable prices with quick response times.
            </p>
            <Link to="/booking" className="inline-block px-6 py-3 bg-primary text-primary-foreground font-heading font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm uppercase tracking-wide">
              Book a Service
            </Link>
          </div>
          <img src={aboutTeam} alt="Our Team" className="rounded-xl shadow-lg w-full object-cover aspect-video" loading="lazy" />
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding section-alt">
      <div className="container">
        <SectionHeading title="Our Values & Strengths" subtitle="What sets us apart from the rest" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-bold mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
