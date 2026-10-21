import { cache } from "react";
import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "9vow8to2",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2026-01-01",
  useCdn: true,
});

export type SanitySiteSettings = {
  businessName: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  hours: { day: string; time: string }[];
  facebookUrl?: string;
  instagramUrl?: string;
};

export type SanityService = {
  _id: string;
  title: string;
  description: string;
  icon: string;
};

export type SanityTestimonial = {
  _id: string;
  quote: string;
  author: string;
  role: string;
};

export type SanityFaqItem = {
  _id: string;
  question: string;
  answer: string;
};

export const getSiteSettings = cache(async (): Promise<SanitySiteSettings> => {
  const data = await sanityClient.fetch(`*[_type == "siteSettings"][0]`);
  return data ?? fallbackSiteSettings;
});

export const getServices = cache(async (): Promise<SanityService[]> => {
  return sanityClient.fetch(`*[_type == "service"] | order(order asc)`);
});

export const getTestimonials = cache(async (): Promise<SanityTestimonial[]> => {
  return sanityClient.fetch(`*[_type == "testimonial"] | order(order asc)`);
});

export const getFaqItems = cache(async (): Promise<SanityFaqItem[]> => {
  return sanityClient.fetch(`*[_type == "faqItem"] | order(order asc)`);
});

const fallbackSiteSettings: SanitySiteSettings = {
  businessName: "Your Business Name",
  tagline: "Add a tagline in Sanity Studio to replace this placeholder.",
  phone: "",
  email: "",
  address: "",
  hours: [],
};
