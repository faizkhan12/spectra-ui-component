import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import peerDeps from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { dts } from "rollup-plugin-dts";

export default [
  {
    input: "src/index.ts", // our source file
    output: [
      {
        // output bundle (cjs)
        file: "dist/cjs/index.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        // output bundle (esm)
        file: "dist/esm/index.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    // plugins
    plugins: [
      peerDeps(),
      resolve(),
      commonjs(),
      typescript(),
      terser(),
      postcss(),
    ],
    external: ["react"],
  },
  {
    // dts
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
    external: [/\.css$/], // exclude css files
  },
];
