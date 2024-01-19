import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import alpine from '@astrojs/alpinejs';
import postcssNested from 'postcss-nested';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpine()],
  vite: {
    css: {
      postcss: {
        plugins: [
          postcssNested(),
        ],
      },
    },
  },
});