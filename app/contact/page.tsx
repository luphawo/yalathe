"use client";
import { useState, useRef, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";
import { services } from "@/lib/data";

type FormState = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};
type Errors = Partial<FormState>;

function validate(form: FormState): Errors {
  const e: Errors = {};
  if (!form.name.trim()) e.name = "Name is required";
  if (!form.email.trim()) e.email = "Email is required";
  else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
  if (!form.message.trim()) e.message = "Message is required";
  return e;
}

export default function ContactPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const inView = useInView(formRef, { once: true });

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((err) => ({ ...err, [e.target.name]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    // Simulate send — replace with Resend / Nodemailer API route in production
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSent(true);
  };

  const inputClass = (field: keyof FormState) =>
    `w-full bg-transparent border-b-2 ${
      errors[field] ? "border-red-500" : "border-white/20 focus:border-lime"
    } py-4 text-white placeholder-offwhite/30 text-base outline-none transition-colors duration-300`;

  return (
    <div className="min-h-screen bg-base">
      {/* Hero */}
      <section className="relative bg-forest pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(141,255,90,0.05),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-lime text-xs font-bold tracking-widest uppercase block mb-4">
              Reach Out
            </span>
            <h1 className="font-black text-4xl sm:text-6xl md:text-8xl lg:text-[9rem] text-white leading-[0.9] tracking-tight">
              CONTACT
              <br />
              US
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Split layout */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 lg:py-36">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 lg:gap-24">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-black text-4xl text-white mb-10">
              Let&apos;s start a conversation
            </h2>
            <p className="text-offwhite/60 text-base leading-relaxed mb-12">
              Whether you need an environmental impact assessment, air quality consulting,
              GIS mapping, or any of our 11 specialised services — reach out and we&apos;ll
              respond within one business day.
            </p>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-sm bg-lime/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-lime" />
                </div>
                <div>
                  <p className="text-lime text-xs font-bold tracking-widest uppercase mb-1">
                    Address
                  </p>
                  <p className="text-offwhite/70 text-base leading-relaxed">
                    151 Amalinda Road, Amalinda<br />
                    East London, Eastern Cape, 5247
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-sm bg-lime/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-lime" />
                </div>
                <div>
                  <p className="text-lime text-xs font-bold tracking-widest uppercase mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:0794695320"
                    className="text-offwhite/70 text-base hover:text-lime transition-colors"
                  >
                    079 469 5320
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-sm bg-lime/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-lime" />
                </div>
                <div>
                  <p className="text-lime text-xs font-bold tracking-widest uppercase mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:mkhu.nxusani@gmail.com"
                    className="text-offwhite/70 text-base hover:text-lime transition-colors break-all"
                  >
                    mkhu.nxusani@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-12 rounded-sm overflow-hidden border border-white/5 h-56 bg-card flex items-center justify-center">
              <div className="text-center">
                <MapPin size={32} className="text-lime mx-auto mb-3" />
                <p className="text-offwhite/30 text-sm font-mono">
                  East London, Eastern Cape
                </p>
                <p className="text-offwhite/20 text-xs mt-1">
                  Google Maps embed — add API key in production
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <div ref={formRef}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {sent ? (
                <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle size={64} className="text-lime mx-auto mb-6" />
                  </motion.div>
                  <h3 className="font-black text-3xl text-white mb-4">Message Sent!</h3>
                  <p className="text-offwhite/60 text-base">
                    Thank you for reaching out. We&apos;ll be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6 sm:space-y-8">
                  {/* Name */}
                  <div>
                    <label className="text-lime text-xs font-bold tracking-widest uppercase block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass("name")}
                      aria-required="true"
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-red-400 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-lime text-xs font-bold tracking-widest uppercase block mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass("email")}
                      aria-required="true"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label className="text-lime text-xs font-bold tracking-widest uppercase block mb-2">
                      Company / Organisation
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Optional"
                      className={inputClass("company")}
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="text-lime text-xs font-bold tracking-widest uppercase block mb-2">
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-card border-b-2 border-white/20 focus:border-lime py-4 text-offwhite/70 text-base outline-none transition-colors duration-300"
                    >
                      <option value="">Select a service (optional)</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-lime text-xs font-bold tracking-widest uppercase block mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or enquiry…"
                      rows={5}
                      className={`${inputClass("message")} resize-none`}
                      aria-required="true"
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center gap-3 px-8 py-4 bg-lime text-base font-bold text-sm tracking-wide rounded-sm hover:bg-lime/90 disabled:opacity-60 transition-colors"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-base/30 border-t-base rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
