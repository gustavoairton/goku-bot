const Discord = require("discord.js");
const translate = require('@k3rn31p4nic/google-translate-api');

module.exports.run = (client, message, args) => {

    
    if(args.lenght > 1){
        message.reply("aaa");
        return;
    }

    var lang = args[0];
    var transText = args.slice(1).join(" ");    

    translate(transText, { to: lang }).then(res => {
      message.channel.send({embed: {
        color: Math.floor(Math.random() * 16777214) + 1,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        thumbnail: {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/250px-Google_Translate_logo.svg.png',
        },
        fields: [
          {
            name: "De:",
            value: res.from.language.iso.toUpperCase(),
            inline: true
          },
          {
            name: "Para:",
            value: lang.toUpperCase(),
            inline: true
          },
          {
            name: "Texto Traduzido:",
            value: res.text
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/250px-Google_Translate_logo.svg.png",
          text: "Translator | Goku"
        }
      }
    });
    }).catch(err => {
      message.channel.send({embed: {
        color: Math.floor(Math.random() * 16777214) + 1,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        thumbnail: {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/250px-Google_Translate_logo.svg.png',
        },
        description: ":x: Lingua não suportada!",
        timestamp: new Date(),
        footer: {
          icon_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/250px-Google_Translate_logo.svg.png",
          text: "Translator | Goku"
        }
      }
    });
    });

  /*translate.getText(transText,{to: lang}).then(function(text){
    message.channel.send({embed: {
      color: Math.floor(Math.random() * 16777214) + 1,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      thumbnail: {
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/250px-Google_Translate_logo.svg.png',
      },
      fields: [
        {
          name: "Texto Traduzido:",
          value: text
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/250px-Google_Translate_logo.svg.png",
        text: "Translator | jowb.ly bot"
      }
    }
  });
  });*/

}