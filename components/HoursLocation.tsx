import type { SanitySiteSettings } from "@/lib/sanity";

export default function HoursLocation({ settings }: { settings: SanitySiteSettings }) {
  if (settings.hours.length === 0 && !settings.address) return null;

  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2">
        <div>
          <h2 className="text-2xl font-extrabold text-stone-900">Hours</h2>
          <ul className="mt-6 space-y-3 text-sm text-stone-700">
            {settings.hours.map((entry) => (
              <li key={entry.day} className="flex justify-between border-b border-stone-200 pb-3">
                <span>{entry.day}</span>
                <span className="font-bold text-[var(--color-primary-dark)]">{entry.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-extrabold text-stone-900">Location</h2>
          <p className="mt-6 text-sm text-stone-700">{settings.address}</p>
          {settings.address && (
            <div className="mt-4 aspect-video w-full overflow-hidden rounded-2xl border-2 border-[var(--color-accent)]/30">
              <iframe
                title="map"
                className="h-full w-full"
                loading="lazy"
                src={`https://www.google.com/maps?q=${encodeURIComponent(settings.address)}&output=embed`}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
