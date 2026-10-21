import type { SanityFaqItem } from "@/lib/sanity";

export default function FAQAccordion({ items }: { items: SanityFaqItem[] }) {
  if (items.length === 0) return null;

  return (
    <section id="faq" className="bg-[var(--color-accent-light)] px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-extrabold text-stone-900">Frequently Asked Questions</h2>
        <div className="mt-10 space-y-3">
          {items.map((item) => (
            <details key={item._id} className="group rounded-xl border border-stone-200 bg-white p-6 open:border-[var(--color-primary)]">
              <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-stone-900 marker:content-['']">
                {item.question}
                <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-black text-white group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-stone-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
