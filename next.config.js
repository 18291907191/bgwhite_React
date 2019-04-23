// next.config.js
module.exports = {
  // yarn run build to dist folder;
  distDir: 'dist',
  // ssr from dev production development environment
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  generateBuildId: async () => {
    // For example get the latest git commit hash here
    return 'v2'
  },

  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/project': { page: '/project'},
      '/manage': { page: '/manage'},
      '/detail': { page: '/detail', query: { id: "Hello Next.js" } },
    }
  }
}