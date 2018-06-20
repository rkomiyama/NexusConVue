var Visualizer = require('webpack-visualizer-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new Visualizer()
    ]
  }
}