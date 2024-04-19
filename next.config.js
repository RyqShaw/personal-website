module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**',
      },
      {
        protocol: 'https',
        hostname: 'tsh.io',
        port: '',
        pathname: '/wp-content/uploads/2019/12/**',
      }
    ],
  },
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};
