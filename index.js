const Discord = require("discord.js");
const Enmap = require("enmap");
const client = new Discord.Client();

const cmdFramework = require("./cmdFramework");

cmdFramework.client = client;
cmdFramework.loadCommands();
cmdFramework.loadEvents();

client.login("NTM4NDAyMzE1MDI0MjAzNzk1.D215NQ.nYGpPptB_5XjkSrQpsxW53_yTTo");