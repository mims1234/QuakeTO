const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("ADMINISTRATOR ")) return;
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Can't Kick Members")
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That Person Can't be Kicked");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Kick")
    .setColor("#f20202")
    .addField("Kicked User",`${kUser}`)
    .addField("Kicked By",`<@${message.author.id}>`)
    .addField("Kicked In",message.channel)
    .addField("Time",message.createdAt)
    .addField("Reason",kReason);

    let kickchannel = message.guild.channels.find(`name`,"reports");
    if(!kickchannel) return message.channel.send("Couldn't find the reports channel");

    message.guild.member(kUser).kick(kReason);
    kickchannel.send(kickEmbed);
}

module.exports.help = {
    name : "kick"
}