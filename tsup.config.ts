/// <reference types="node" />

import { defineConfig } from "tsup"

export default defineConfig({
  clean: true,
  dts: true,
  bundle: false,
  splitting: false,
  entry: [
    "src/index.ts",
    "src/components/*/*.tsx",
    "src/hooks/*.ts",
    "src/hooks/*.tsx",
    "src/lib/*.ts",
    "src/cores/*.ts",
  ],
  format: ["esm"],
  sourcemap: false,
  minify: false,
  target: "es2024",
  outDir: "dist",
  treeshake: true,
})