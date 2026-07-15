import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://faynaztech.com",
  output: "static",
  integrations: [
    sitemap({
      // Keep legacy, not-yet-migrated pages out of the sitemap (they are also noindex).
      filter: (page) =>
        !/\/(blog|blog-details|faq|hire-developer|portfolio|portfolio-details|service-details|services\/quality-assurance)\/?$/.test(
          page,
        ),
      serialize(item) {
        item.lastmod = new Date().toISOString();
        const url = item.url;
        if (url.endsWith("faynaztech.com/")) {
          item.changefreq = "weekly";
          item.priority = 1.0;
        } else if (url.includes("/insights/") ) {
          item.changefreq = "monthly";
          item.priority = 0.7;
        } else if (url.includes("/service") || url.includes("/hire-developer") || url.includes("/about")) {
          item.changefreq = "monthly";
          item.priority = 0.9;
        } else {
          item.changefreq = "monthly";
          item.priority = 0.6;
        }
        return item;
      },
    }),
  ],
});
