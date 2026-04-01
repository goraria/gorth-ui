/// <reference types="node" />

import { copyFileSync, mkdirSync } from "node:fs"
import { defineConfig } from "tsup"

export default defineConfig({
  clean: true,
  dts: true,
  entry: [
    "src/index.ts",
    "src/components/*/*.tsx",
    "src/hooks/*.ts",
    "src/hooks/*.tsx",
    "src/lib/*.ts",
    "src/cores/*.ts",
  ],
  format: ["esm", "cjs"],
  sourcemap: false,
  minify: true,
  target: "es2024",
  outDir: "dist",
  treeshake: true,
  onSuccess: async () => {
    mkdirSync("dist", { recursive: true })
    copyFileSync("src/styles/globals.css", "dist/globals.css")
  },
})