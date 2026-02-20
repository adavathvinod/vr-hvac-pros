import { useState } from "react";
import { CalendarDays, Send } from "lucide-react";

const BookingForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CalendarDays className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-heading font-bold mb-2">Booking Received!</h3>
        <p className="text-muted-foreground">We'll contact you shortly to confirm your appointment.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input type="text" placeholder="Full Name" required className="px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
      <input type="tel" placeholder="Phone Number" required className="px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
      <input type="email" placeholder="Email" className="px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
      <select required className="px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30">
        <option value="">Service Required</option>
        <option>AC Repair</option>
        <option>AC Installation</option>
        <option>AC Maintenance</option>
        <option>Gas Filling</option>
        <option>AMC</option>
        <option>Commercial HVAC</option>
      </select>
      <input type="date" required className="px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
      <input type="time" required className="px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
      <textarea placeholder="Message (optional)" rows={3} className="md:col-span-2 px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
      <div className="md:col-span-2">
        <button type="submit" className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground font-heading font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
          <Send className="w-4 h-4" />
          Book Service Now
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
