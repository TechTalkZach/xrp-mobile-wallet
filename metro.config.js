// metro.config.js
module.exports = {
    resolver: {
      extraNodeModules: require('node-libs-react-native'),
      extraNodeModules: require('expo-crypto-polyfills'),
    },
  };