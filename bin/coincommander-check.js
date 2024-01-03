const program=require('commander');
const check = require('../commands/check');

program
.command('price')
.description('Check price of Coins')
.option('--coin <type>','Add specific coin types in CSV format','')
.action((cmd) =>check.price(cmd));

program.parse(process.argv);
