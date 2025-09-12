import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('post');

  // Sort newest first
  posts.sort((a, b) => b.data.date - a.data.date);

  return rss({
    title: "Gautam's Blog",
    description: 'Personal blog of Gautam Mehta',
    site: context.site, // defined in astro.config.mjs
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/post/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`
  });
}