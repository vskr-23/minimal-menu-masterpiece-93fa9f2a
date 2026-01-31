import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent! 🎉",
        description: "We'll get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-lg mx-auto">
        <h2 className="section-title glow-text text-3xl md:text-5xl">Get in Touch</h2>
        <p className="section-subtitle text-base md:text-lg mb-10 md:mb-12">
          Have a question? We'd love to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              type="text"
              placeholder="Your Name"
              required
              maxLength={100}
              className="bg-secondary/50 border-border/50 focus:border-primary h-11 md:h-12 rounded-xl text-sm md:text-base"
            />
            <Input
              type="tel"
              placeholder="Phone Number"
              maxLength={15}
              className="bg-secondary/50 border-border/50 focus:border-primary h-11 md:h-12 rounded-xl text-sm md:text-base"
            />
          </div>
          <Input
            type="email"
            placeholder="Your Email"
            required
            maxLength={255}
            className="bg-secondary/50 border-border/50 focus:border-primary h-11 md:h-12 rounded-xl text-sm md:text-base"
          />
          <Textarea
            placeholder="Your Message"
            required
            maxLength={1000}
            rows={4}
            className="bg-secondary/50 border-border/50 focus:border-primary resize-none rounded-xl text-sm md:text-base"
          />
          <Button
            type="submit"
            className="w-full h-12 md:h-14 text-sm md:text-base font-medium rounded-xl"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Send Message
                <Send className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
