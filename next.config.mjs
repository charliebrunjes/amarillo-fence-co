/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "amarillofenceco.com" }],
        destination: "https://www.amarillofenceco.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
