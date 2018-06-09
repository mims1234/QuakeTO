const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

    pin = 1
    let user = message.author
        let spaminterval = 20
            if (user.r1spam) {
                if (new Date().getTime() - user.r1spam < (spaminterval)*1000) {
                    message.channel.send('Spam Alert! Wait for: ' + Math.floor(Math.round((spaminterval - (new Date().getTime() - user.r1spam) / 1000) * 100) / 100) + ' seconds')
                    .then(msg => msg.delete(2000));
                    return;
                }
                else { user.r1spam = new Date().getTime();
                        setTimeout(function(){
                            pin = 1
                        },500)
                    }
            }
            else { user.r1spam = new Date().getTime();
                    setTimeout(function(){
                        pin = 1;
                    },500)
                }
    if(pin ===1)
    {
        //if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
        let rmember = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
        if(!rmember) return message.reply("Couldn't find that user ");
        let gRole = message.guild.roles.find(`name`,'rainbow');
        if(!gRole) return message.reply("Couldn't find that role");

        if(rmember.roles.has(gRole.id)); 
        await(rmember.removeRole(gRole.id));

        try
        {
            await rmember.send(`rainbow role removed`);
        }
        catch(e)
        {       
            message.channel.send(`rainbow role removed <@${rmember.id}> . (DM was Blocked)`);
        }
    }
}

module.exports.help = {
    name : "removerole"
}