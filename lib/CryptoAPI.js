const axios = require('axios');
class CryptoAPI{
 request(method, url) {
  return axios(
    {
      method: method,
      url: url
    }
  );
}
}

module.exports = CryptoAPI;