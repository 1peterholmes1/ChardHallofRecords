import { defineConfig } from 'astro/config';
import sanity from "astro-sanity";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import {PROJECT_ID} from "./src/env"


// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: PROJECT_ID,
    dataset: 'production',
    apiVersion: '2023-05-01'
    }), svelte(), tailwind()]
});
