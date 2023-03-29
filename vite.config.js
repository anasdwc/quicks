import { defineConfig } from "vite";
import Unfonts from "unplugin-fonts/vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              displayName: true,
              fileName: true,
            },
          ],
        ],
      },
    }),
    Unfonts({
      google: {
        families: [
          {
            name: "Lato",
            styles: "ital,wght@0,400;1,700",
          },
        ],
      },
    }),
  ],
});
