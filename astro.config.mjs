import { defineConfig } from 'astro/config';
import sanity from "astro-sanity";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: context.env.PROJECT_ID,
    dataset: 'production',
    apiVersion: '2023-05-01'
    }), svelte(), tailwind()]
});
