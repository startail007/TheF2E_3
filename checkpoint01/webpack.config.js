const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const WebpackCopyPlugin = require("copy-webpack-plugin"); //資料複製
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin"); //壓縮css
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //清除檔案資料
//const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");
module.exports = {
  /*build: {
                          assetsPublicPath: "/dist/",
                          assetsSubDirectory: "/dist/",
                        },*/
  resolve: {
    //擴展路徑別名
    alias: {
      "@fonts": path.resolve(__dirname, "./src/fonts/"),
      "@img": path.resolve(__dirname, "./src/img/"),
      "@css": path.resolve(__dirname, "./src/css/"),
      "@js": path.resolve(__dirname, "./src/js/"),
      "@vue": path.resolve(__dirname, "./src/vue/"),
      "@src": path.resolve(__dirname, "./src/"),
      vue: "vue/dist/vue.esm.js",
    },
    //擴展副檔名
    extensions: [".js", ".vue", ".json"],
  },
  entry: {
    main: "./src/index.js",
    vendors: ["webpack-material-design-icons"],
  },
  output: {
    path: path.resolve(__dirname, "./dist/"),
    //publicPath: "/assets/",
    filename: "js/[name].[hash].js",
  },
  devServer: {
    contentBase: path.join(__dirname, "/"),
    compress: true,
    port: 8888,
    inline: true,
  },
  module: {
    rules: [
      //vue元件載入器
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      //css提取
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
        ],
      },
      //sass scss
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
      //圖檔載入器
      {
        test: /\.(png|jpg|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "img/",
              //publicPath: "../img",
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true,
            },
          },
        ],
      },
      //把圖片相關都轉成路徑的方式，檔案會加大，但附加在css裡的圖片可以實現懶加載
      /*{
        test: /\.(png|jpg|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "img/",
              //limit: false,
            },
          },
        ],
      },*/
      /*{
        test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1000, //bytes
            name: "[hash:7].[ext]",
            outputPath: "assets",
          },
        },
      },*/
      //字型載入器
      {
        test: /\.(woff|woff2|eot|ttf|otf|ttc)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "fonts/",
              //publicPath: "../fonts",
            },
          },
        ],
      },
      //js轉舊成es5
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      //cleanOnceBeforeBuildPatterns: ["./js/*", "./css/*", "./fonts/*", "./index,html"],
      cleanOnceBeforeBuildPatterns: ["./*"],
    }),
    // new WebpackCopyPlugin({
    //   patterns: [{ from: "./src/assets", to: "assets" }],
    // }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({ filename: "css/[name].[hash].css" }),
    new HtmlWebpackPlugin({
      title: "The F2E 台灣旅遊景點導覽 <關卡01>",
      template: "./src/index.html",
      filename: "index.html",
      // favicon: path.resolve("./src/favicon.png"),
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    //new VuetifyLoaderPlugin(),
  ],
};
