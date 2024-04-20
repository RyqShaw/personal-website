module.exports = {
  images: {
    unoptimized: true,
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
  output: "export", 
  reactStrictMode: true,
};
