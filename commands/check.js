const KeyManager = require('../lib/KeyManager');
const CryptoAPI = require('../lib/CryptoAPI');
const colors = require('colors');

const check = {
  async price(cmd) {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();
      const api = new CryptoAPI();
      const response = await api.request('GET', `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${key}`);
      const responseData = response.data;
      const dataArray = responseData.data;
      let count = 0;
     
      dataArray.forEach((dataObject) => {
        if (count === 10) return;
        count++;
        if (dataObject.symbol == cmd["coin"]) {
          const price = colors.bold(`Price: $${dataObject.quote.USD.price}`.padEnd(30));
          const rank = `Rank: ${dataObject.cmc_rank}`;
          console.log(`Coin : ${dataObject.symbol.padEnd(5).yellow} | ${dataObject.name.padEnd(20).magenta} | ${price} | ${rank}`);
        }
        if (cmd["coin"]==''){
          const price = colors.bold(`Price: $${dataObject.quote.USD.price}`.padEnd(30));
          const rank = `Rank: ${dataObject.cmc_rank}`;
          console.log(`Coin : ${dataObject.symbol.padEnd(5).yellow} | ${dataObject.name.padEnd(20).magenta} | ${price} | ${rank}`);
        }
         
      });
    } catch (err) {
      handleError(err);
    }
  },

};

function handleError(err) {
  if (err.response && err.response.status === 401) {
    console.error(colors.red("Error: Your API key is Invalid - Get API at https://coinmarketcap.com/"));
  } else if (err.response && err.response.status === 404) {
    console.error(colors.red("Error: Your API key is not Responding - Get API at https://coinmarketcap.com/"));
  } else {
    console.error(colors.red("Error: An unexpected error occurred"));
  }
}

module.exports = check;
