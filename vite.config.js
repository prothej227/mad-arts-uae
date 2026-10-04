import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    allowedHosts: ["a1cf-113-19-183-49.ngrok-free.app"],
  },
});
