import path from "path";
import { defineConfig } from "vite";

import Components from "unplugin-vue-components/vite";

import Unocss from "unocss/vite";
import { presetUno, presetAttributify } from "unocss";
import presetIcons from "@unocss/preset-icons";

export default defineConfig({
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, ".vitepress/theme")}/`,
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          windicss: ["windicss"],
        },
      },
    },
  },
  plugins: [
    Components({
      dirs: [".vitepress/theme/components"],
      extensions: ["vue", "ts"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: true,
    }),
    Unocss({
      presets: [
        presetAttributify({
          /* preset options */
        }),
        presetUno(),
        presetIcons({
          /* options */
        }),
      ],
    }),
  ],
});
