const path = require("path");

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config

    config.entry = () => path.join(__dirname, "./scripts/univer.ts");
    config.output = {
      path: path.resolve(__dirname, "./dist/scripts"),
      filename: "univer.js",
    };
    config.devtool = "source-map";
    config.resolve.extensions.push(".ts", ".tsx", ".js", ".css", ".txt");
    config.module.rules.push(
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        include: [path.resolve("src")],
        loader: "ts-loader",
        options: {
          transpileOnly: false,
          compilerOptions: {
            module: "es2015",
          },
        },
      }
    );

    return config;
  },
};
