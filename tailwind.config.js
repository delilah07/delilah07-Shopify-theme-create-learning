module.exports = {
  content: ['./**/*.liquid'], // Ensure it scans Shopify liquid files
  theme: {
    extend: {
      height: {
        94: '22rem',
      },
    },
  },
  plugins: [],
  corePlugins: {
    hover: true, // Ensure hover effects are applied
  },
};
