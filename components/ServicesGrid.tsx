import type { SanityService } from "@/lib/sanity";
import { iconMap } from "@/components/icons";

const accents = ["bg-orange-100 text-[var(--color-primary)]", "bg-blue-100 text-[var(--color-accent)]"];

export default function ServicesGrid({ services }: { services: SanityService[] }) {
  if (services.length === 0) return null;

  return (
    <section id="services" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-extrabold text-stone-900">What We Do</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-stone-600">
          Licensed, insured, and ready to help with the jobs that keep your home running.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service._id}
                className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${accents[index % accents.length]}`}>
                  {Icon && <Icon className="h-6 w-6" />}
                </div>
                <h3 className="mt-4 text-lg font-bold text-stone-900">{service.title}</h3>
                <p className="mt-2 text-sm text-stone-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
