import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // your configuration options here...
	site: 'https://zzccmxtp.fr/',
	server: {
    host: '0.0.0.0'
  },
  integrations: [svelte(), tailwind()]
});
