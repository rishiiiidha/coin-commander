#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json');
program
.version(pkg.version)
  .command('key',"Manage API Key --https://coinmarketcap.com/")
  .command('check',"Check Coin Price --https://coinmarketcap.com/")
.parse(process.argv);

