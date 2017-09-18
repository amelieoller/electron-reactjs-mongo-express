// tests.webpack.js
var context = require.context('./src', true, /-test\.jsx?$/);
context.keys().forEach(context);