// babel.config.js - Versión Corregida
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    // ------------------------------------------------------------------
    // AÑADIR LA SECCIÓN PLUGINS
    plugins: [
      // ⚠️ El plugin de Reanimated DEBE ser el último de la lista.
      "react-native-reanimated/plugin",
    ],
    // ------------------------------------------------------------------
  };
};
