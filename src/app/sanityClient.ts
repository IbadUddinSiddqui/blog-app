import { createClient, SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { ImageUrlBuilder } from "sanity";

// Define the configuration options for the client
const client: SanityClient = createClient({
  projectId: "sfrxat55", // Replace with your Sanity project ID
  dataset: "production",     // Replace with your dataset (e.g., "production")
  apiVersion: "2023-10-01",   // Use the latest API version
  useCdn: true,               // Use CDN for faster responses
});

// Helper to generate image URLs
const builder: ImageUrlBuilder = imageUrlBuilder(client);

export const urlFor = (source: any): string => builder.image(source).url();

export default client;
