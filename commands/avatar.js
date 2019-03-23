const translate = require('google-translate-api');
const Discord = require("discord.js");

var randomCat = require('random-cat');

module.exports.run = (client, message, args) => {

    
    if(message.mentions.users.first() == null){
        message.reply("mencione um usuário.");
        return;
    }
        
        message.channel.send({embed: {
            color: Math.floor(Math.random() * 16777214) + 1,
            author: {
              name: "Foto de perfil do(a) usuário(a) "+message.mentions.users.first().tag+":",
              icon_url: client.user.avatarURL
            },
            image: {
                url: message.mentions.users.first().avatarURL,
            },
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "Avatar do usuário: "+message.mentions.users.first().tag+" | Goku"
            }
          }
        });


}