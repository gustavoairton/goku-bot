const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

    if(args[0] == null){
        message.reply("utilize ``!search <query>``.");
        return;
    }

    var google = require('google');
    
    google.resultsPerPage = 25
 
    google(args.slice(0).join(" "), function (err, res){
     if (err) console.error(err)
 
     var link = res.links[0];

     message.channel.send({embed: {
        color: Math.floor(Math.random() * 16777214) + 1,
        url: link.href,
        title: link.title,
        /*image: {
            url: ,
        },*/
        description: link.description,
        timestamp: new Date(),
        footer: {
          icon_url: "http://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/google-icon.png",
          text: "Google Search | Goku"
        }
      }
    });

    })

}