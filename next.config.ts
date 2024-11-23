import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "ts", "tsx", 'md', "mdx"],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options:{

  }
  // Add Markdown plugins here, as desired
})

export default withMDX(nextConfig);
