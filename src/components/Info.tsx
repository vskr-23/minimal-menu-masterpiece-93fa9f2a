import { Clock, Phone, MapPin } from "lucide-react";

const Info = () => {
  return (
    <section className="py-16 px-4 md:px-8 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-3">
            <Clock className="w-8 h-8 mx-auto text-primary" />
            <h3 className="font-serif text-xl">Hours</h3>
            <p className="text-muted-foreground">
              Every Day<br />
              11:30 AM – 10:30 PM
            </p>
          </div>
          
          <div className="space-y-3">
            <Phone className="w-8 h-8 mx-auto text-primary" />
            <h3 className="font-serif text-xl">Phone</h3>
            <a 
              href="tel:+919875990099" 
              className="text-muted-foreground hover:text-primary transition-colors block"
            >
              +91 98759 90099
            </a>
          </div>
          
          <div className="space-y-3">
            <MapPin className="w-8 h-8 mx-auto text-primary" />
            <h3 className="font-serif text-xl">Address</h3>
            <p className="text-muted-foreground">
              110, Punjab Avenue<br />
              Ladhewali, Jalandhar<br />
              Punjab 144009
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
