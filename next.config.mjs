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
        destination: "/services/grants-funding",
        permanent: true,
      },
      {
        source: "/grants-funding.html",
        destination: "/services/grants-funding",
        permanent: true,
      },
      {
        source: "/services/grant-writing",
        destination: "/services/grants-funding",
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
        destination: "/services/government-technology",
        permanent: true,
      },
      {
        source: "/government-technology.html",
        destination: "/services/government-technology",
        permanent: true,
      },
      {
        source: "/services/govtech-software",
        destination: "/services/government-technology",
        permanent: true,
      },
      {
        source: "/rfp-procurement.html",
        destination: "/services/rfp-procurement",
        permanent: true,
      },
      {
        source: "/team.html",
        destination: "/team",
        permanent: true,
      },
      {
        source: "/who-we-are.html",
        destination: "/who-we-are",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/who-we-are",
        permanent: true,
      },
      {
        source: "/about.html",
        destination: "/who-we-are",
        permanent: true,
      },
      {
        source: "/who-we-serve.html",
        destination: "/who-we-serve",
        permanent: true,
      },
      {
        source: "/where-we-work.html",
        destination: "/where-we-work",
        permanent: true,
      },
      {
        source: "/work-with-us.html",
        destination: "/work-with-us",
        permanent: true,
      },
      {
        source: "/careers",
        destination: "/work-with-us",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
