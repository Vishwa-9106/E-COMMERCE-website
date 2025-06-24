import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType, StringRule, SlugRule, NumberRule } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Products",
  type: "document",
  icon: TrolleyIcon,
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (rule: StringRule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule: SlugRule) => rule.required(),
    }),
    defineField({
      name: "images",
      title: "Product Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      validation: (rule: StringRule) => rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (rule: NumberRule) => rule.required().min(0),
    }),
    defineField({
      name: "originalPrice",
      title: "Original Price",
      type: "number",
      validation: (rule: NumberRule) => rule.min(0),
    }),
    defineField({
      name: "discount",
      title: "Discount",
      type: "number",
      validation: (rule: NumberRule) => rule.min(0),
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "stock",
      title: "Stock",
      type: "number",
      validation: (rule: NumberRule) => rule.required().min(0),
    }),
    defineField({
      name: "brand",
      title: "Brand",
      type: "reference",
      to: { type: "brand" },
    }),
    defineField({
      name: "status",
      title: "Product Status",
      type: "string",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "Hot", value: "hot" },
          { title: "Sale", value: "sale" },
        ],
      },
    }),
    defineField({
      name: "variant",
      title: "Product Variant",
      type: "string",
      options: {
        list: [
          { title: "Gadget", value: "gadget" },
          { title: "Appliances", value: "appliances" },
          { title: "Refrigerators", value: "refrigerators" },
          { title: "Others", value: "others" },
        ],
      },
      validation: (rule: StringRule) => rule.required(),
    }),
    defineField({
      name: "isFeatured",
      title: "Featured Product",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "reviewCount",
      title: "Review Count",
      type: "number",
      initialValue: 0,
      validation: (rule: NumberRule) => rule.min(0),
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      initialValue: 0,
      validation: (rule: NumberRule) => rule.min(0).max(5),
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "images",
      subtitle: "price",
    },
    prepare(selection: { title: string; subtitle: number; media: any[] }) {
      const { title, subtitle, media } = selection;
      const image = media && media[0];
      return {
        title: title,
        subtitle: `$${subtitle}`,
        media: image,
      };
    },
  },
});