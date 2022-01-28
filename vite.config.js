import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/

// Webbapplikationen ska fungera offline och  informationen som hämtats med GET-anropen gå att se även när användaren är offline
export default defineConfig({
  base: "/my-vite-project/",
  plugins: [
    vue(),
    VitePWA({
      includeAssets: [
        "favicon.svg",
        "favicon.ico",
        "robots.txt",
        "apple-touch-icon.png",
      ],
      manifest: {
        name: "Name of your app",
        short_name: "Short name of your app",
        description: "Description of your app",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],

  // generate manifest.json in outDir
  build: {
    manifest: true,
  },

  // Caching av webbanrop
  workbox: {
    runtimeCaching: [
      {
        handler: "NetworkFirst",
        urlPattern: `https://api.github.com/users/repos`,
      },
    ],
  },
});
