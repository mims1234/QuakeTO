const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

    pin = 1
    let Sender = message.member;
    let user = message.author
        let spaminterval = 0
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
        code = args[1]
        if(code === 'djrole') role = 'DJ Public'
        if(code === 'rainbow') role = 'rainbow'
        if(code === 'guest')
        {
            let modRole = message.guild.roles.find('name','Mod') 
            if(!modRole) return message.channel.send('Bat Err')
            if(message.member.roles.has(modRole.id))
            {
                role = 'Guest'
            }
            else return
        } 
        if(!code) return message.channel.send('has not mentioned role or doesnt have permission to add this role')
        let rmember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        //console.log(message.member)
        if(!rmember) return message.reply("Couldn't find that user ");
        let gRole = message.guild.roles.find(`name`,role);
        if(!gRole) return message.reply("Couldn't find that role");

        if(rmember.roles.has(gRole.id)) return message.channel.send(`${role} has been already added.`);
        await(rmember.addRole(gRole.id));

        let reportschannel = message.guild.channels.find(`name` , "quakerole-log");
        if(!reportschannel) return message.channel.send("Couldn't find reports channel.");

        try
        {
            await reportschannel.send(`${role} role added to <@${rmember.id}>.`);
        }
        catch(e)
        {       
            message.channel.send(`${role} role added to <@${rmember.id}> . (#quakerole-log was missing)`);
        }
    }
}

module.exports.help = {
    name : "addrole"
}
