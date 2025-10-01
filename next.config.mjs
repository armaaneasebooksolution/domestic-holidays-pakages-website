/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true, // Ensures static files are properly handled
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
