import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import vue from "@astrojs/vue";
import { storyblok } from "@storyblok/astro";

const env = loadEnv(process.env.NODE_ENV ?? "development", process.cwd(), "");

export default defineConfig({
  site: env.PUBLIC_SITE_URL || "https://foreverfortified.com",
  integrations: [
    vue(),
    storyblok({
      accessToken: env.STORYBLOK_DELIVERY_API_TOKEN || "storyblok-token-not-configured",
      apiOptions: {
        region: env.STORYBLOK_REGION || "us"
      },
      components: {
        page: "storyblok/Page",
        hero_section: "storyblok/HeroSection",
        service_cards: "storyblok/ServiceCards",
        feature_section: "storyblok/FeatureSection",
        testimonial_grid: "storyblok/TestimonialGrid",
        cta_band: "storyblok/CtaBand"
      }
    })
  ]
});
