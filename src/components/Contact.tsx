import { useState } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";
import SEO from "@/components/SEO";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <SEO
        title="Contact Us"
        description="Get in touch with the AI Suite team. We are here to help with any questions regarding our AI tools, pricing, or partnerships."
      />
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT SIDE: INFO */}
        <div>
          <h1 className="text-5xl font-black mb-6 tracking-tight">
            Let's Talk.
          </h1>
          <p className="text-gray-400 text-lg mb-12">
            Have a question about our enterprise API, found a bug, or just want
            to say hi? We'd love to hear from you.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-900/20 rounded-xl text-cyan-400">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Email Support</h3>
                <p className="text-gray-500">support@aisuite.com</p>
                <p className="text-xs text-gray-600 mt-1">
                  Response time: ~24 hours
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-900/20 rounded-xl text-purple-400">
                <MessageSquare size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Community</h3>
                <p className="text-gray-500">Join our Discord server</p>
                <p className="text-xs text-gray-600 mt-1">
                  For quick discussions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: FORM */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-[30px] p-8 shadow-2xl">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20">
              <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-4">
                <Send size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Message Sent!
              </h3>
              <p className="text-gray-400">We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-mono text-gray-500 mb-2 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-black border border-white/10 rounded-xl p-4 text-white placeholder-gray-700 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                  placeholder="John Doe"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-gray-500 mb-2 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-black border border-white/10 rounded-xl p-4 text-white placeholder-gray-700 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                  placeholder="john@example.com"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-gray-500 mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-black border border-white/10 rounded-xl p-4 text-white placeholder-gray-700 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
                  placeholder="Tell us how we can help..."
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 group"
              >
                Send Message{" "}
                <ArrowRightIcon className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

// Helper Icon for button (can be imported from lucide too)
const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default Contact;
