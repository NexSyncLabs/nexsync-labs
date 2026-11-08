"use client";

import { useState, type FormEvent } from "react";
import { company, services } from "@/lib/content";

const fieldClass =
  "mt-2 w-full border-b border-ink/25 bg-transparent py-3 text-[0.95rem] text-ink outline-none transition-colors placeholder:text-ink/65 focus:border-terracotta";

const labelClass =
  "block text-[0.64rem] uppercase tracking-[0.18em] text-ink/65";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "");
    const business = String(data.get("business") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const service = String(data.get("service") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Project enquiry — ${service || "General"} — ${name}`;
    const body = [
      `Name: ${name}`,
      `Business: ${business || "—"}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      `Service: ${service || "Not sure yet"}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className={labelClass}>
          Your name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Full name"
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="business" className={labelClass}>
          Business name
        </label>
        <input
          id="business"
          name="business"
          type="text"
          autoComplete="organization"
          placeholder="Shop, school, factory, firm"
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+91"
          className={fieldClass}
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="service" className={labelClass}>
          What do you need?
        </label>
        <select id="service" name="service" className={fieldClass} defaultValue="">
          <option value="">Not sure yet</option>
          {services.map((service) => (
            <option key={service.slug} value={service.name}>
              {service.name}
            </option>
          ))}
          <option value="Something else">Something else</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className={labelClass}>
          What is not working? *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="A few lines about your business and the problem are enough."
          className={`${fieldClass} resize-none`}
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:col-span-2">
        <button
          type="submit"
          className="inline-flex items-center gap-2.5 bg-ink px-6 py-3.5 text-[0.76rem] uppercase tracking-[0.16em] text-paper transition-colors hover:bg-terracotta"
        >
          Send the enquiry
          <span aria-hidden="true">&#8599;</span>
        </button>
        <p className="text-[0.72rem] leading-relaxed text-ink/65">
          This opens your email app with the details filled in. Nothing is
          stored on this website.
        </p>
      </div>
      {sent && (
        <p
          role="status"
          className="text-sm text-terracotta sm:col-span-2"
        >
          Your email app should now be open. If it is not, write to{" "}
          {company.email} directly.
        </p>
      )}
    </form>
  );
}
