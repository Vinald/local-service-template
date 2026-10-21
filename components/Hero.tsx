import type { SanitySiteSettings } from "@/lib/sanity";

export default function Hero({ settings }: { settings: SanitySiteSettings }) {
  const area = settings.address.split(",")[1]?.trim() ?? "your area";

  return (
    <section className="texture-dots relative overflow-hidden bg-[var(--color-primary)] px-6 py-24 text-white">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--color-accent)] opacity-30 blur-3xl" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6">
        <span className="rounded-full bg-[var(--color-accent)] px-4 py-1 text-sm font-bold">
          Serving {area}
        </span>
        <h1 className="max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl">
          {settings.tagline}
        </h1>
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="#contact"
            className="rounded-full bg-white px-6 py-3 text-base font-bold text-[var(--color-primary-dark)] shadow-lg hover:bg-stone-100"
          >
            Book a Visit
          </a>
          {settings.phone && (
            <a
              href={`tel:${settings.phone.replace(/[^\d+]/g, "")}`}
              className="rounded-full border-2 border-white/60 px-6 py-3 text-base font-bold hover:bg-white/10"
            >
              Call {settings.phone}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
