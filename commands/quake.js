const Discord = require("discord.js");
const fs = require("fs");
let imagefile = JSON.parse(fs.readFileSync("./Qimage.json","utf8"));

module.exports.run = async (bot,message,args) => {

    let ClanTagCount = 2;
    let ClanMemberCount = 15;
    let TestEmbed = new Discord.RichEmbed()
    .setDescription("Quake Clan")
    .setColor("#f20202")
    .addField("No.of In-game Clans :",ClanTagCount,true)
    .addField("Clan Tags :","***Quake*** & ***Scar***",true)
    .addField("No.of Clan Members :",ClanMemberCount,true);

    
    message.channel.send(TestEmbed);
}

module.exports.help = {
    name : "quake1"
}