module.exports.run = (client, message, args) => {

    if(message.member.hasPermission("KICK_MEMBERS")){

        if(message.mentions.members.first() == null){

            message.channel.send({"embed":{
            
                "color": Math.floor(Math.random() * 16777214) + 1,
                "description": "Você precisa mencionar um usuário."
    
            }});

        } else {

            var reason = message.content.split(message.mentions.members.first())[1];

            if(reason == ""){
                reason = "Não definido."
            }

            if(message.guild.roles.find("name", "Mutado")){
                message.mentions.members.first().addRole(message.guild.roles.find("name", "Mutado"));
            } else {
                message.channel.send({"embed":{
            
                    "color": Math.floor(Math.random() * 16777214) + 1,
                    "description": "``ERRO:`` Você precisa criar um cargo com o nome de ``Mutado`` e configurar as permissões para utilizar o sistema de Mutes."
        
                }});
                return;
            }
            

            message.channel.send({embed: {
                color: Math.floor(Math.random() * 16777214) + 1,
                title: "``⛔`` Usuário mutado.",
                fields: [
                  {
                    name: "Usuário punido:",
                    value: message.mentions.users.first().toString(),
                    inline: true
                  },
                  {
                    name: "Para:",
                    value: message.author.toString(),
                    inline: true
                  },
                  {
                    name: "Motivo:",
                    value: reason
                  }
                ],
                timestamp: new Date(),
                footer: {
                  text: "Punish System | Goku"
                }
              }
            });

           
        }

    } else {

        message.channel.send({"embed":{
            
            "color": Math.floor(Math.random() * 16777214) + 1,
            "description": "Você não tem permissão para executar esse comando."

        }});

    }

}