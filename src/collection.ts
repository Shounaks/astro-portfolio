import { getCollection } from "astro:content";

export const posts = (await getCollection("blog"))
    .filter(item => !item.data.draft && !item.data.hidden)
    .sort((a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf());