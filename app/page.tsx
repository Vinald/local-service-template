import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import HoursLocation from "@/components/HoursLocation";
import FAQAccordion from "@/components/FAQAccordion";
import ContactForm from "@/components/ContactForm";
import { getSiteSettings, getServices, getTestimonials, getFaqItems } from "@/lib/sanity";

export const revalidate = 60;

export default async function Home() {
  const [settings, services, testimonials, faqItems] = await Promise.all([
    getSiteSettings(),
    getServices(),
    getTestimonials(),
    getFaqItems(),
  ]);

  return (
    <>
      <Hero settings={settings} />
      <ServicesGrid services={services} />
      <TestimonialCarousel testimonials={testimonials} />
      <HoursLocation settings={settings} />
      <FAQAccordion items={faqItems} />
      <ContactForm settings={settings} />
    </>
  );
}
