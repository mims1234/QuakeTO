const Discord = require("discord.js");


module.exports.run = async (bot,message,args) => {

    // //message.channel.send(`line 1 \nline 2`);
    let boticon = bot.user.avatarURL;
    let QuakeHelpEmbed = new Discord.RichEmbed()
    .setDescription("Help")
    .setColor("#f20202")
    .addField("Prefix :","x")
    .addField("Commands :",`
    **addrole** -> *Add's rainbow role to mentioned member*
    **removerole** -> *Remove's rainbow role to mentioned member*
    `);

    return message.channel.send(QuakeHelpEmbed);

    //Commands :
    //1.members
    //2.quake
}

module.exports.help = {
    name : "help"
}