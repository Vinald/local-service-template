import { defineType, defineField, defineArrayMember } from "sanity";
import { CogIcon } from "@sanity/icons";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({ name: "businessName", type: "string", title: "Business Name", validation: (Rule) => Rule.required() }),
    defineField({ name: "tagline", type: "text", title: "Tagline", rows: 2 }),
    defineField({ name: "phone", type: "string", title: "Phone" }),
    defineField({ name: "email", type: "string", title: "Email" }),
    defineField({ name: "address", type: "string", title: "Address" }),
    defineField({
      name: "hours",
      type: "array",
      title: "Hours",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "day", type: "string", title: "Day or range" }),
            defineField({ name: "time", type: "string", title: "Time or status" }),
          ],
        }),
      ],
    }),
    defineField({ name: "facebookUrl", type: "url", title: "Facebook URL" }),
    defineField({ name: "instagramUrl", type: "url", title: "Instagram URL" }),
  ],
});
