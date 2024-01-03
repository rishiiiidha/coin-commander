const inquirer = require("inquirer");
const colors = require("colors");
const KeyManager = require("../lib/KeyManager");
const {isRequired} = require('../utils/validation');

const  key ={
  async set(){
    const keyManager=new KeyManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "key",
        message: "Enter API Key".bgMagenta+"...",
        validate:isRequired
      }
    ]);
    const key = keyManager.setKey(input.key);
    if(key){
      console.log(colors.green("API Key Set Successfully"));
    }
  },
  show(){
    try{
    const keyManager=new KeyManager();
    const key = keyManager.getKey();
    console.log(colors.cyan("Current Key: " + key));
    return key;
    }catch(e){
      console.error(colors.red(e.message));
    }
  },
  remove(){
    try {
      const keyManager = new KeyManager();
      keyManager.deleteKey();
      console.log(colors.red("Key Removed"));
      return ;
    } catch (e) {
      console.error(colors.red(e.message));
    }
  }
}
module.exports =key;