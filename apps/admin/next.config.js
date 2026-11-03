/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['shared-ui'],
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig