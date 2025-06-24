// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { client } from "./client";

interface SanityFetchParams {
  query: string;
  params?: Record<string, any>;
}

const token = process.env.SANITY_API_READ_TOKEN;
if (!token) {
  throw new Error("SANITY_API_READ_TOKEN is not set");
}

export const sanityFetch = async ({ query, params = {} }: SanityFetchParams) => {
  try {
    const data = await client.fetch(query, params);
    return { data };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
