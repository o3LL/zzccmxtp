import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  // your configuration options here...
  server: {
    host: '0.0.0.0'
  },
  integrations: [svelte()]
});