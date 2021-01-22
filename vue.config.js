module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  pwa: {
    name: 'kraiviks-v.com',
    themeColor: '#4FBEAC',
    msTileColor: '#7A7A7A',
    manifestOptions: {
      background_color: '#7A7A7A'
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/kraiviks-v.com/'
    : '/'
}