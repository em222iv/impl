module.exports = {
  entry: "./js/app.js",
  output: {
    path: "./build",
    publicPath: "/build/",
    filename: "build.js"
  },
  module: {
    loaders: [
      { test: /\.styl$/, loader: "style!css!stylus" },
      { test: /\.html$/, loader: "html" }
    ]
  }
}
