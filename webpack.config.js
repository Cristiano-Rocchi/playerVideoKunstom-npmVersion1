const path = require("path");

module.exports = {
  entry: "./src/index.js", // Punto di ingresso del tuo bundle
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js", // Il file di output che sarà generato
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Applicato su tutti i file .jsx o .js
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Usa babel-loader per trasformare il codice
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Risolve le estensioni .js e .jsx
  },
};
