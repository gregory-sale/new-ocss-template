/**** Tailwind CSS Configuration ****/
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{njk,md,html}',
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          light: '#9bebdfff',
          dark: '#171750ff'
        }
      },
      maxWidth: {
        'prose': '64ch'
      }
    }
  },
  plugins: []
};
