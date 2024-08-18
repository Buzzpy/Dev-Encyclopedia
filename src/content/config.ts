import { defineCollection, z } from "astro:content";

const termsCollection = defineCollection({
  type: "data", // Use "content" for md/mdx files
  // schema: // TODO: Define schema for the data. This will ensure our added terms adhere to a strict schema
});

export const collections = {
  terms: termsCollection,
};
