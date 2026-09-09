/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  webpack: (config, { dev }) => {
    if (!dev) {
      config.cache = false;
    }
    return config;
  },
  async redirects() {
    return [
      {
        source: "/baystate-redesign.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/community-planning.html",
        destination: "/services/community-planning",
        permanent: true,
      },
      {
        source: "/housing-community-development.html",
        destination: "/services/housing-community-development",
        permanent: true,
      },
      {
        source: "/zoning-permitting.html",
        destination: "/services/zoning-permitting",
        permanent: true,
      },
      {
        source: "/grant-writing.html",
        destination: "/services/grant-writing",
        permanent: true,
      },
      {
        source: "/technical-assistance.html",
        destination: "/services/technical-assistance",
        permanent: true,
      },
      {
        source: "/international-planning.html",
        destination: "/services/international-planning",
        permanent: true,
      },
      {
        source: "/govtech-software.html",
        destination: "/services/govtech-software",
        permanent: true,
      },
      {
        source: "/team.html",
        destination: "/team",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
