import { defineType, defineField } from "sanity";
import { HelpCircleIcon } from "@sanity/icons";

export const faqItem = defineType({
  name: "faqItem",
  title: "FAQ Item",
  type: "document",
  icon: HelpCircleIcon,
  fields: [
    defineField({ name: "question", type: "string", title: "Question", validation: (Rule) => Rule.required() }),
    defineField({ name: "answer", type: "text", title: "Answer", rows: 3, validation: (Rule) => Rule.required() }),
    defineField({ name: "order", type: "number", title: "Display order" }),
  ],
  orderings: [{ name: "orderAsc", title: "Display order", by: [{ field: "order", direction: "asc" }] }],
});
