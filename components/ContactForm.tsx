"use client";

import { useState } from "react";
import type { SanitySiteSettings } from "@/lib/sanity";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm({ settings }: { settings: SanitySiteSettings }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold text-stone-900">Book a Visit</h2>
          <p className="mt-3 text-stone-600">
            Tell us what is going on and we will get back to you within one business day. For
            urgent issues, call {settings.phone} directly.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            required
            placeholder="Full name"
            className="w-full rounded-lg border border-stone-300 px-4 py-3 text-sm focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email address"
            className="w-full rounded-lg border border-stone-300 px-4 py-3 text-sm focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30"
          />
          <input
            name="phone"
            placeholder="Phone number"
            className="w-full rounded-lg border border-stone-300 px-4 py-3 text-sm focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30"
          />
          <textarea
            name="message"
            required
            rows={4}
            placeholder="What do you need help with?"
            className="w-full rounded-lg border border-stone-300 px-4 py-3 text-sm focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-full bg-[var(--color-primary)] px-6 py-3 font-bold text-white hover:bg-[var(--color-primary-dark)] disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Request"}
          </button>
          {status === "sent" && (
            <p className="text-sm font-medium text-green-700">
              Thanks, we received your request and will be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm font-medium text-red-700">
              Something went wrong, please call us instead at {settings.phone}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
