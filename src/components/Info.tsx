import { Clock, Phone, MapPin } from "lucide-react";

const Info = () => {
  return (
    <section className="py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16">
          <div className="text-center group p-4 md:p-6 rounded-2xl hover:bg-secondary/30 transition-all duration-300">
            <div className="w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 mx-auto mb-3 md:mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
              <Clock className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary" />
            </div>
            <h3 className="font-serif text-lg md:text-xl lg:text-2xl mb-2 md:mb-3">Opening Hours</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Monday - Sunday<br />
              <span className="text-foreground font-semibold text-base md:text-lg">11:30 AM – 11:00 PM</span>
            </p>
          </div>

          <div className="text-center group p-4 md:p-6 rounded-2xl hover:bg-secondary/30 transition-all duration-300">
            <div className="w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 mx-auto mb-3 md:mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
              <Phone className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary" />
            </div>
            <h3 className="font-serif text-lg md:text-xl lg:text-2xl mb-2 md:mb-3">Call Us</h3>
            <a
              href="tel:+919875990099"
              className="text-muted-foreground hover:text-primary transition-colors text-sm md:text-base lg:text-lg font-medium block"
            >
              +91 98759 90099
            </a>
            <p className="text-xs md:text-sm text-muted-foreground mt-1">Available for orders & queries</p>
          </div>

          <div className="text-center group p-4 md:p-6 rounded-2xl hover:bg-secondary/30 transition-all duration-300">
            <div className="w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 mx-auto mb-3 md:mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
              <MapPin className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary" />
            </div>
            <h3 className="font-serif text-lg md:text-xl lg:text-2xl mb-2 md:mb-3">Visit Us</h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              110, Punjab Avenue<br />
              Ladhewali, Jalandhar<br />
              Punjab - 144009
            </p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-primary hover:underline mt-2 inline-block">
              Get Directions →
            </a>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-12 md:mt-16">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-center mb-6 md:mb-8">
            Find Us Here
          </h3>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.0835648869544!2d75.56633!3d31.32444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5ba0d3a5b5b5%3A0x1b3e3e3e3e3e3e3e!2s110%2C%20Punjab%20Avenue%2C%20Ladhewali%2C%20Jalandhar%2C%20Punjab%20144009!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px]"
              title="Yummy! Bites Location"
            />
          </div>
          <div className="text-center mt-6">
            <a
              href="https://goo.gl/maps/FsEb22i4DEVchsYf7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
