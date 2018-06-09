const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user."); 
    let reason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#15f153")
    .addField("Reported User" , `${rUser}`)
    .addField("Reported By" , `${message.author}`)
    .addField("Channel" , message.channel)
    .addField("Time" , message.createdAt)
    .addField("Reason" , reason);

    //let reportschannel = message.guild.channels.find(`name` , "reports");
    //if(!reportschannel) return message.channel.send("Couldn't find reports channel.");

    message.delete().catch(O_o=>{});
    message.channel.send(reportEmbed); 
}

module.exports.help = {
    name : "report"
}