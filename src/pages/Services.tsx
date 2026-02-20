import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import hero2 from "@/assets/hero-2.jpg";
import serviceVrv from "@/assets/service-vrv.jpg";
import serviceDuctable from "@/assets/service-ductable.jpg";
import serviceCassette from "@/assets/service-cassette.jpg";
import serviceTower from "@/assets/service-tower.jpg";
import serviceSplit from "@/assets/service-split.jpg";
import serviceAmc from "@/assets/service-amc.jpg";
import serviceCommercialHvac from "@/assets/service-commercial-hvac.jpg";
import serviceResidential from "@/assets/service-residential.jpg";

const services = [
  {
    title: "VRV / VRF Systems",
    desc: "Variable Refrigerant Volume (VRV) and Variable Refrigerant Flow (VRF) systems are the most advanced HVAC technology for commercial and large residential projects. We provide complete installation, commissioning, and maintenance services for VRV/VRF systems from all major brands.",
    img: serviceVrv,
  },
  {
    title: "Ductable AC",
    desc: "Ductable air conditioning systems are ideal for large spaces like offices, showrooms, and commercial buildings. Our technicians are experts in ductable AC installation, repair, and maintenance, ensuring optimal cooling performance and energy efficiency.",
    img: serviceDuctable,
  },
  {
    title: "Cassette AC",
    desc: "Cassette AC units are perfect for commercial spaces with false ceilings. They provide uniform cooling with an elegant, flush-mounted design. We handle installation, servicing, and repairs for all cassette AC brands.",
    img: serviceCassette,
  },
  {
    title: "Tower AC",
    desc: "Tower AC units deliver powerful cooling for large rooms and commercial spaces. Our team provides expert installation and maintenance services for tower ACs, ensuring reliable performance throughout the year.",
    img: serviceTower,
  },
  {
    title: "Split AC",
    desc: "Split ACs are the most popular choice for homes and small offices. We offer professional split AC installation, repair, gas filling, and servicing for all major brands with quick turnaround times.",
    img: serviceSplit,
  },
  {
    title: "AMC – Annual Maintenance Contract",
    desc: "Our Annual Maintenance Contracts keep your HVAC systems running at peak performance. Regular inspections, cleaning, and preventive maintenance help avoid breakdowns and extend the life of your equipment.",
    img: serviceAmc,
  },
  {
    title: "Commercial HVAC",
    desc: "Complete HVAC solutions for offices, malls, hospitals, and industrial buildings. We design, install, and maintain commercial HVAC systems of all scales, delivering energy-efficient climate control solutions.",
    img: serviceCommercialHvac,
  },
  {
    title: "Residential HVAC",
    desc: "From single-room cooling to whole-house HVAC systems, we make your home comfortable year-round. Our residential services include installation, repair, and maintenance for all types of air conditioning systems.",
    img: serviceResidential,
  },
];

const Services = () => (
  <>
    <section className="relative h-64 md:h-80">
      <img src={hero2} alt="Our Services" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 hero-overlay flex items-center">
        <div className="container">
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-primary-foreground">Our Services</h1>
          <p className="text-primary-foreground/80 mt-2">Complete HVAC solutions for every need</p>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container">
        <div className="space-y-16">
          {services.map((s, i) => (
            <div key={s.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
              <img
                src={s.img}
                alt={s.title}
                className={`rounded-xl shadow-lg w-full object-cover aspect-video ${i % 2 === 1 ? "lg:order-2" : ""}`}
                loading="lazy"
              />
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="text-2xl font-heading font-bold mb-4">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                <Link to="/booking" className="inline-block px-6 py-3 bg-primary text-primary-foreground font-heading font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm uppercase tracking-wide">
                  Book Service
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Services;
