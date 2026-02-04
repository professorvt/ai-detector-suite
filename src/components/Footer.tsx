import { Link } from "react-router-dom";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  ShieldCheck,
  Zap,
  Globe,
  Instagram,
} from "lucide-react";

// 👇 YAHAN APNE ASLI LINKS DAALO
const socialLinks = {
  twitter: "https://twitter.com/TUMHARA_USERNAME",
  github: "https://github.com/professorvt",
  linkedin: "https://linkedin.com/in/TUMHARA_PROFILE",
  instagram: "https://instagram.com/TUMHARA_ID",
  email: "mailto:support@cloudupcodex.click",
};

const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-400 py-12 overflow-hidden border-t border-white/10 mt-auto">
      {/* Background Gradient Effect */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-indigo-900/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Column 1: Branding & Socials */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Managed by
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-indigo-600 p-1.5 rounded-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                AI Suite
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Empowering creators with AI transparency.
              <br />© 2026 CloudUpCodex.
            </p>

            {/* 👇 SOCIAL ICONS YAHAN HAIN */}
            <div className="flex gap-4">
              {/* Twitter / X */}
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>

              {/* GitHub */}
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>

              {/* LinkedIn */}
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/* Instagram */}
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* Email */}
              <a
                href={socialLinks.email}
                className="hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Product
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-indigo-400 transition-colors"
                >
                  AI Detector
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Humanizer
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-indigo-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/blog"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  API Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  System Status
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/privacy"
                  className="flex items-center gap-2 hover:text-indigo-400 transition-colors"
                >
                  <ShieldCheck className="w-3 h-3" /> Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/refund"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>Designed for the future of AI Content.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="flex items-center gap-1">
              <Globe className="w-3 h-3" /> EN (US)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
