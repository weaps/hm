const path = require('path')
function fullPath(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:8080/',
        ws: true,
        changeOrigin: true
      }
    }
  },
  chainWebpack(config) {
    config.module.rule('svg')
      .exclude.add(fullPath('src/icons')) // 排除默认加载的file-loader
    // 使用自定义Loader
    config.module.rule('icons')
      .test(/\.svg$/)
      .include.add(fullPath('src/icons'))
        .end()
      .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({symbolId: 'icon-[name]'})
        .end()
  }
}