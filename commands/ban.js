const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("ADMINISTRATOR ")) return;
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Can't Ban Members");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be Banned");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor("#f20202")
    .addField("Banned User",`${bUser}`)
    .addField("Banned By",`<@${message.author.id}>`)
    .addField("Banned In",message.channel)
    .addField("Time",message.createdAt)
    .addField("Reason",bReason);

    let banchannel = message.guild.channels.find(`name`,"reports");
    if(!banchannel) return message.channel.send("Couldn't find the reports channel");

    message.guild.member(bUser).ban(bReason);
    banchannel.send(banEmbed);
}

module.exports.help = {
    name : "ban"
}