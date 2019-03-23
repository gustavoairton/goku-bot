const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

    if(args[0] == null){
        message.reply("utilize ``!search <query>``.");
        return;
    }
    
    var search = require("youtube-search-promise");
 
var opts = {
  maxResults: 1,
  key: "AIzaSyD3T7wWUw1gdyr_-jJwHlnvijzTvP_Ua4k"
};



search(args.slice(0).join(" "), opts)
  .then(results => {
    var res = results[0];


    message.channel.send({embed: {
        color: Math.floor(Math.random() * 16777214) + 1,
        thumbnail: {
            url: 'https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-youtube-circle-512.png',
        },
        image: {
            url: res.thumbnails.high.url,
        },
        fields: [
          {
            name: "ID:",
            value: res.id,
            inline: true
          },
          {
            name: "Link:",
            value: "https://www.youtube.com/watch?v="+res.id,
            inline: true
          },
          {
            name: "Titulo:",
            value: res.title
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-youtube-circle-512.png",
          text: "Youtube Finder | Goku"
        }
      }
    });

  })
  .catch(error => {
    console.error(error);
  });
     /*
     var link = res.links[0];

     message.channel.send({embed: {
        color: Math.floor(Math.random() * 16777214) + 1,
        url: link.href,
        title: link.title,
        image: {
            url: ,
        },
        description: link.description,
        timestamp: new Date(),
        footer: {
          icon_url: "http://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/google-icon.png",
          text: "Google Search | jowb.ly bot"
        }
      }
    });*/

}