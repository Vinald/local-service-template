import type { SanitySiteSettings } from "@/lib/sanity";

export default function Footer({ settings }: { settings: SanitySiteSettings }) {
  return (
    <footer className="border-t border-stone-200 bg-stone-900 text-stone-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm sm:flex-row sm:justify-between">
        <div>
          <p className="font-bold text-white">{settings.businessName}</p>
          <p>{settings.address}</p>
        </div>
        <div>
          <p>{settings.phone}</p>
          <p>{settings.email}</p>
        </div>
        <div className="flex gap-4">
          {settings.facebookUrl && (
            <a href={settings.facebookUrl} className="hover:text-[var(--color-primary)]">
              Facebook
            </a>
          )}
          {settings.instagramUrl && (
            <a href={settings.instagramUrl} className="hover:text-[var(--color-primary)]">
              Instagram
            </a>
          )}
        </div>
      </div>
      <p className="border-t border-stone-700 py-4 text-center text-xs text-stone-400">
        {settings.businessName}. All rights reserved.
      </p>
    </footer>
  );
}
