const Discord = require("discord.js");


module.exports.run = async (bot,message,args) => {

    // //message.channel.send(`line 1 \nline 2`);
    let boticon = bot.user.avatarURL;
    let QuakeHelpEmbed = new Discord.RichEmbed()
    .setDescription("Help")
    .setColor("#f20202")
    .addField("Prefix :","x")
    .addField("Commands :",`
    # **addrole @mention <rainbow | djrole>** :\n *Add's rainbow or djrole to mentioned member*
# **delrole @mention <rainbow | djrole>** :\n *Remove's rainbow or djrole to mentioned member*
# **rainbow <switch> <type>** : \n*Rainbow command*
*type => [ cop | rainbow | alien | mys | ukraine]*
*switch => [ on || off]*
    `);

    return message.channel.send(QuakeHelpEmbed);

    //Commands :
    //1.members
    //2.quake
}

module.exports.help = {
    name : "help"
}