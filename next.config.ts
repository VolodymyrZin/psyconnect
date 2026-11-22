import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  /* config options here */
  // cacheComponents: true,
  // partialPrefetching: true,
  // reactCompiler: true,
};

export default nextConfig;
