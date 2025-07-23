
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  output: 'static',
  site: "https://example.com",
  integrations: [mdx(), sitemap()],
});
