
// for ie
const Promise = require('promise-polyfill');

if (!window.Promise) {
  window.Promise = Promise;
}
