import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Asegurar que Next.js transpile el paquete flyonui
  transpilePackages: ['@coss/flyonui'],
};

export default nextConfig;
