const translate = require('google-translate-api');
const Discord = require("discord.js");
const request = require('request');
var randomCat = require('random-cat');

module.exports.run = (client, message, args) => {

    
    if(args[0] == null){
        message.reply("utilize ``!clima <cidade>``.");
        return;
    }

    var city = args.slice(0).join("%20").replace("ã", "a").replace("é", "e").replace("í", "i");
    var cityWoFormation = args.slice(0).join(" ");
    
    request('https://api.apixu.com/v1/current.json?key=f5c2622ba0cc420c829211804191603&q='+city, { json: true }, (err, res, body) => {
  if (err) { message.channel.send({embed: {
    color: Math.floor(Math.random() * 16777214) + 1,
    author: {
      name: client.user.avatarURL,
      icon_url: client.user.avatarURL
    },
    description: ":x: Cidade inválida, tente digitar sem acentos.",
    timestamp: new Date(),
    footer: {
      text: "Clima | jowb.ly bot"
    }
  }
}); return}

    if(res.body.current == null){
        message.channel.send({embed: {
            color: Math.floor(Math.random() * 16777214) + 1,
            author: {
              name: client.user.avatarURL,
              icon_url: client.user.avatarURL
            },
            description: ":x: Cidade inválida, tente digitar sem acentos.",
            timestamp: new Date(),
            footer: {
              text: "Clima | Goku"
            }
          }
        }); return
    }

  message.channel.send({embed: {
    color: Math.floor(Math.random() * 16777214) + 1,
    author: {
      name: client.user.avatarURL,
      icon_url: client.user.avatarURL
    },
    description: ":thermometer: A temperatura na cidade de ``"+cityWoFormation+"`` é de ``"+res.body.current.temp_c+"°C``.",
    timestamp: new Date(),
    footer: {
      text: "Clima | Goku"
    }
  }
});
});


      /*message.channel.send({embed: {
        color: Math.floor(Math.random() * 16777214) + 1,
        author: {
          name: client.user.avatarURL,
          icon_url: client.user.avatarURL
        },
        //description: data,
        timestamp: new Date(),
        footer: {
          text: "Clima | jowb.ly bot"
        }
      }
    });*/

}