import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  cacheDir: "--force",
  build: {
    minify: true,
    cssMinify: true,
    terserOptions: {
      compress: true,
      sourceMap: false,
      nameCache: [
        react({
          jsxRuntime: "automatic",
          jsxImportSource: "automatic",
        }),
        tsconfigPaths({
          configNames: [
            "@components/*",
            "@config/*",
            "@context/*",
            "@hooks/*",
            "@ioc/*",
            "@modules/*",
            "@utils/*",
            "@types/*",
            "@pages/*",
            "@containers/*",
            "@layouts/*",
            "@styles/*",
          ],
        }),
      ],
    },
    sourcemap: false,
    chunkSizeWarningLimit: 400,
  },
  server: {
    headers: {
      "accept-encoding": "gzip, compres, br",
    },
    watch: {
      usePolling: false,
    },
  },
});
