import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Store canonical date as Date object; format at render time
		date: z.date(),
	}),
});

export const collections = {
	post: postCollection,
};
