import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-base border-t-2 border-lime">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-8">
          {/* Col 1 — Brand */}
          <div>
            <div className="flex items-center gap-0.5 mb-4">
              <span className="font-poppins font-black text-2xl text-white">YALATHE</span>
              <span className="w-2 h-2 rounded-full bg-lime ml-1" />
            </div>
            <p className="text-offwhite/60 text-sm leading-relaxed mb-4 max-w-xs">
              Protecting Nature · Empowering People · Sustaining The Future
            </p>
            <p className="text-offwhite/30 text-xs font-mono tracking-widest">
              REG: 2020/208594/07
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="text-lime text-xs font-bold tracking-widest uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-offwhite/60 text-sm hover:text-lime transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h4 className="text-lime text-xs font-bold tracking-widest uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-offwhite/60">
                <MapPin size={16} className="text-lime shrink-0 mt-0.5" />
                <span>
                  151 Amalinda Road, Amalinda,
                  <br /> East London, 5247
                </span>
              </li>
              <li className="flex gap-3 text-sm text-offwhite/60">
                <Phone size={16} className="text-lime shrink-0 mt-0.5" />
                <a href="tel:0794695320" className="hover:text-lime transition-colors">
                  079 469 5320
                </a>
              </li>
              <li className="flex gap-3 text-sm text-offwhite/60">
                <Mail size={16} className="text-lime shrink-0 mt-0.5" />
                <a
                  href="mailto:mkhu.nxusani@gmail.com"
                  className="hover:text-lime transition-colors break-all"
                >
                  mkhu.nxusani@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-6 md:px-10 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-offwhite/30 text-xs font-mono tracking-wide">
          <span>© 2024 Yalathe Environmental · Registration: 2020/208594/07</span>
          <span className="text-lime/60">100% Black-Owned · 30% Women-Owned · East London, SA</span>
        </div>
      </div>
    </footer>
  );
}
