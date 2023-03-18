module.exports = {
  template: require('./svgrPlugins/template.jsx'),
  typescript: true,
  svgo: true,
  jsx: {
    babelConfig: {
      plugins: [['./svgrPlugins/transformer.js']],
    },
  },
}
