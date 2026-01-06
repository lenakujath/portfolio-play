import { defineConfig } from "vite";

export default defineConfig({
    base: "/portfolio-play",
    build: {
        minify: "terser",
    }
})