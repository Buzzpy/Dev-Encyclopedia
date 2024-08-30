import { defineCollection, z } from "astro:content";

const termsCollection = defineCollection({
  type: "data", // Use "content" for md/mdx files
  schema: z.object({ // Define schema for the data. This will ensure our added terms adhere to a strict schema
    title: z.string(),
    subtext: z.string(),
    categories: z.array(z.string()).nonempty(),
    author: z.string(),
    description: z.object({
      title: z.string(),
      texts: z.array(z.string()),
      image: z.string(),
      references: z.array(z.string()).nonempty()
    })
  })
});

export const collections = {
  terms: termsCollection,
};
