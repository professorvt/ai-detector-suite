import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      proxy: {
        "/api/detect": {
          target: env.PRIVATE_BACKEND_URL,
          changeOrigin: true,
          rewrite: (path) =>
            path.replace(/^\/api\/detect/, "/detect_ai_detailed"),
          configure: (proxy) => {
            proxy.on("proxyReq", (proxyReq) => {
              proxyReq.setHeader("Authorization", `Bearer ${env.HF_TOKEN}`);
            });
          },
        },
      },
    },
  };
});
