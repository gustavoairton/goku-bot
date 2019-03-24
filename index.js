const Discord = require("discord.js");
const Enmap = require("enmap");
const client = new Discord.Client();
const config = require("./config.json");

const cmdFramework = require("./cmdFramework");

cmdFramework.client = client;
cmdFramework.loadCommands();
cmdFramework.loadEvents();

client.login(config.token);