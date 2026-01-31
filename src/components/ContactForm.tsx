import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 border-t border-border">
      <div className="max-w-md mx-auto">
        <h2 className="section-title text-center mb-4 subtle-glow">Get in Touch</h2>
        <p className="text-center text-muted-foreground mb-10">
          Have a question? We'd love to hear from you.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Input 
              type="text" 
              placeholder="Your Name" 
              required 
              maxLength={100}
              className="input-field"
            />
          </div>
          <div>
            <Input 
              type="email" 
              placeholder="Your Email" 
              required 
              maxLength={255}
              className="input-field"
            />
          </div>
          <div>
            <Input 
              type="tel" 
              placeholder="Phone Number" 
              maxLength={15}
              className="input-field"
            />
          </div>
          <div>
            <Textarea 
              placeholder="Your Message" 
              required 
              maxLength={1000}
              rows={4}
              className="input-field resize-none"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full font-medium"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
