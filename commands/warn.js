const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json","utf8"));

module.exports.run = async (bot,message,args) => {

    //xwarn @mention <reason>
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!wUser) return message.reply("Couldn't find the user");
    //if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Cant do that !!");
    let reason = args.join(" ").slice(22);
    if(!reason) return message.channel.send("No Reason Provided");

    try
    {
        await wUser.send(`<@${message.author.id}> has warned you , Reason : ${reason} `);   
    }
    catch(e)
    {       
         message.channel.send(`<@${message.author.id}> has warned you , Reason : ${reason} . (DM is Blocked)`);
    }
 
    if(!warns[wUser.id]) warns[wUser.id] = {
        warns: 0
    };

    //warns[wUser.id].warns++;

    // fs.writeFile("./warnings.json", JSON.stringify(warns),(err) => {
    //     if(err) console.log(err)
    // })


    let warnEmbed = new Discord.RichEmbed()
    .setDescription("Warns")
    .setAuthor(message.author.username)
    .setColor("#fc6400")
    .addField("Warned User", `<@${wUser.id}>`)
    .addField("Warned In", message.channel)
    .addField("Number of Warnings",warns[wUser.id].warns)
    .addField("Reason",reason);

    message.channel.send(warnEmbed)
    // let warnchannel = message.guild.channels.find(`name`,"reports");
    // if(!warnchannel) return message.reply("Couldn't find channel");

    // warnchannel.send(warnEmbed);

    // if(warns[wUser.id].warns == 2)
    // {
    //     let muterole = message.guild.roles.find(`name`,"Muted");
    //     if(!muterole) return message.channel.send("Role Doesn't Exist");

    //     let mutetime = "10s";
    //     await(wUser.addRole(muterole.id));
    //     await wUser.send(`<@${wUser.id}> has been muted`);
        
    //     setTimeout(function(){
    //         wUser.removeRole(muterole.id)
    //         await wUser.send(`<@${wUser.id}> has been unmuted`)
    //     },ms(mutetime))
    // }
   
}

module.exports.help = {
    name : "warn"
}