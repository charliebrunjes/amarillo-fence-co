/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.amarillofenceco.com" }],
        destination: "https://amarillofenceco.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
