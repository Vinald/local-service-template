import { defineType, defineField } from "sanity";
import { TagIcon } from "@sanity/icons";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({ name: "title", type: "string", title: "Title", validation: (Rule) => Rule.required() }),
    defineField({ name: "description", type: "text", title: "Description", rows: 3 }),
    defineField({
      name: "icon",
      type: "string",
      title: "Icon",
      options: {
        list: [
          { title: "Wrench", value: "wrench" },
          { title: "Bolt", value: "bolt" },
          { title: "Fan", value: "fan" },
          { title: "Hammer", value: "hammer" },
        ],
      },
    }),
    defineField({ name: "order", type: "number", title: "Display order" }),
  ],
  orderings: [{ name: "orderAsc", title: "Display order", by: [{ field: "order", direction: "asc" }] }],
});
