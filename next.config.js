/** @type {import('next').NextConfig} */
const withLess = require('next-with-less');

module.exports = withLess({
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: {
        // '@primary-color': '#f74a49',
        // '@border-radius-base': '.5em',
      },
    },
  },
  reactStrictMode: true,
  images: {
    domains: ['dummyimage.com', 'cdn.wangdaoo.com'],
  },

  // loader: 'less-loader',
  // options: {
  //   javascriptEnabled: true,
  // },

  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
});
