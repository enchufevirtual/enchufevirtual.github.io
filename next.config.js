/** @type {import('next').NextConfig} */
const { parse } = require('url')
const pkg = require('./package.json')

function getBasePath() {
  if (process.env.NEXT_PUBLIC_BASE_PATH) return process.env.NEXT_PUBLIC_BASE_PATH

  // try to infer from package.json homepage, e.g. https://user.github.io/repo
  if (pkg && pkg.homepage) {
    try {
      const u = parse(pkg.homepage)
      if (u.pathname && u.pathname !== '/') return u.pathname.replace(/\/$/, '')
    } catch (e) {
      // ignore
    }
  }

  return undefined
}

const inferredBasePath = getBasePath()

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: inferredBasePath,
  assetPrefix: inferredBasePath,
  turbopack: {
    root: __dirname,
  },
}

module.exports = nextConfig;
