const Configstore = require('configstore');
const pkg = require('../package.json');
class KeyManager {
  constructor() {
    this.conf = new Configstore(pkg.name);
  }
  setKey(key) {
    this.conf.set('keyApi', key);
    return key;
  }
  getKey() {
    const key = this.conf.get('keyApi');
    if (!key) {
      throw new Error('No API key found - Get a Key');
    }
    return key;
  }
  deleteKey() {
    const key = this.conf.get('keyApi');
    if (!key) {
      throw new Error('No API key found - Get a Key');
    }
    this.conf.delete('keyApi');
    return;
  }
}

module.exports = KeyManager;