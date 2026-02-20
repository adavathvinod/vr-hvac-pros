import SectionHeading from "@/components/SectionHeading";
import BookingForm from "@/components/BookingForm";
import hero4 from "@/assets/hero-4.jpg";

const Booking = () => (
  <>
    <section className="relative h-64 md:h-80">
      <img src={hero4} alt="Book a Service" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 hero-overlay flex items-center">
        <div className="container">
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-primary-foreground">Book a Service</h1>
          <p className="text-primary-foreground/80 mt-2">Schedule your appointment today</p>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container max-w-3xl">
        <SectionHeading title="Book an Appointment" subtitle="Fill in the details below and our team will contact you to confirm your booking." />
        <BookingForm />
      </div>
    </section>
  </>
);

export default Booking;
