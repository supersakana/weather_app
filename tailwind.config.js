module.exports = {
  content: ['./dist/*.html'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      gridTemplateColumns: {
        sidebar: '1fr 2.3fr',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
