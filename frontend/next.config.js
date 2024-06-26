const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://mailbox-api.tritan.gg/api/:path*",
        //destination: "http://localhost:4000/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
