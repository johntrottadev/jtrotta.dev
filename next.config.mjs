/** @type {import('next').NextConfig} */
// NOTE: basePath set for GitHub Pages subpath preview.
// REMOVE basePath once DNS for jtrotta.dev resolves and Pages serves at the custom domain root.
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: "/jtrotta.dev",
};

export default nextConfig;
