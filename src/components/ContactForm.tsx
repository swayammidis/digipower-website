import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { toast } from "sonner";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:1337";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.full_name || !formData.email || !formData.subject || !formData.message) {
      toast.error("⚠️ Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/contact-submissions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: formData }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error?.message || "Failed to send message");
      }

      toast.success("✅ Thank you for your message! We'll get back to you within 24 hours.");
      setFormData({ full_name: "", email: "", company: "", subject: "", message: "" });
    } catch (err: any) {
      console.error("Form submission error:", err);
      toast.error(`❌ ${err.message || "Something went wrong. Please try again later."}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="full_name">Full Name *</Label>
          <Input
            id="full_name"
            name="full_name"
            value={formData.full_name}
            onChange={handleInputChange}
            required
            className="bg-background/50 border-border/50 focus:border-primary/50"
            placeholder="Enter your full name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="bg-background/50 border-border/50 focus:border-primary/50"
            placeholder="Enter your email address"
          />
        </div>
      </div>

      {/* Company + Subject */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="bg-background/50 border-border/50 focus:border-primary/50"
            placeholder="Enter your company name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Subject *</Label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="bg-background/50 border-border/50 focus:border-primary/50"
            placeholder="What is this regarding?"
          />
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={6}
          className="bg-background/50 border-border/50 focus:border-primary/50 resize-none"
          placeholder="Please provide details about your inquiry..."
        />
      </div>

      {/* Submit */}
      <div className="flex justify-center">
        <Button
          type="submit"
          size="lg"
          disabled={loading}
          className="tech-button bg-gradient-electric hover:scale-105 transition-all duration-300 min-w-[200px]"
        >
          {loading ? (
            "Sending..."
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
