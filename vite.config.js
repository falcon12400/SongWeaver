import { defineConfig } from "vite";

const base = process.env.SONGWEAVER_BASE_PATH?.trim() || "/";

export default defineConfig({
  base,
  server: {
    host: "127.0.0.1",
    port: 4173,
    strictPort: true,
  },
  preview: {
    host: "127.0.0.1",
    port: 4173,
    strictPort: true,
  },
});
