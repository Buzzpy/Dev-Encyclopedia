import { defineCollection, z } from "astro:content";

const termsCollection = defineCollection({
  type: "data", // Use "content" for md/mdx files
  schema: z.object({ // Define schema for the data. This will ensure our added terms adhere to a strict schema
    title: z.string().min(1),
    subtext: z.string().min(1),
    categories: z.array(z.string()).nonempty(),
    author: z.string().min(1),
    description: z.object({
      title: z.string().min(1),
      texts: z.array(z.string()).nonempty(),
      image: z.union([z.string().url().nullish(), z.literal("")]),
      references: z.array(z.union([z.string().url().nullish(), z.literal("")])).nonempty()
    })
  })
});

export const collections = {
  terms: termsCollection,
};
