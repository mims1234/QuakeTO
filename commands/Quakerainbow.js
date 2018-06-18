const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot,message,args) => {
    
    //if(message.author.id != '292675388180791297') return;
    let msg = message.content.split(' ')
    let ColorFile = JSON.parse(fs.readFileSync("DataBase/rainbow.json","utf8"));
    userlog = message.author.id 
    if(!message.guild.member(bot.user).hasPermission('MANAGE_ROLES')) return message.channel.send(`ALMA BOT doesn't have permission to run this command`)

    SWITCH = msg[1]
    code = msg[2]
    if(!SWITCH) return message.channel.send('Mention Swtich [ on || off ] \n**Usage: ** `a$rainbow on <type>`').then(msg => msg.delete(5000));
    if(SWITCH === 'off') code = 'rainbow';
    message.delete().catch();

    key = 1
    pin = 0;
    mod = 0;
    role = 'Rainbow'
    //console.log(SWITCH)

    //spam = msg[2]
    //if(!spam || spam<=0 || spam >= 5000) spam = 500

    let gRole = message.guild.roles.find(`name`,role);
    if(!gRole) return message.reply("Rainbow Role is Missing in this Server");

    switch(code)
    {
        case 'cop' : var ColorCode = Object.keys(ColorFile.cop)
        break;
        case 'rainbow' : var ColorCode = Object.keys(ColorFile.random)
        break;
        case 'alien' : var ColorCode = Object.keys(ColorFile.alien)
        break;
        case 'mys' : var ColorCode = Object.keys(ColorFile.mys)
        break;
        case 'ukraine' : var ColorCode = Object.keys(ColorFile.ukraine )
        break;
        default : return message.channel.send('Mention Type [ `cop` || `rainbow` || `alien` || `mys` || `ukraine` ] \n**Usage: ** `a$rainbow on cop`').then(msg => msg.delete(5000));
    }
    if(message.guild.id === '395611752269873153')
    //if(message.guild.id === '395611752269873153' || message.guild.id === '442704155644264450' || message.guild.id === '435012543615074315' || message.guild.id === '436319015011483648' ) 
    {
        message.delete().catch();
        CoolDown = JSON.parse(fs.readFileSync("GameBase/CoolDownMsg.json","utf8"));
        var CDkey = Object.keys(CoolDown)
        let guilds = message.guild
        let spaminterval = 10
            if (guilds.r1spam) {
                if (new Date().getTime() - guilds.r1spam < spaminterval*1000) {
                    CODE = Math.floor(Math.random() * CDkey.length)
                    CODE = CDkey[CODE]
                    text = `${CoolDown[CODE]}`
                    time = Math.floor(Math.round((spaminterval - (new Date().getTime() - guilds.r1spam) / 1000) * 100) / 100)
                    //message.delete().catch();
                    console.log('=> '+userlog + ' has called [ rainbow ] command SPAM')
                    message.channel.send(`**${text}** \n*You may use the command in another ${time} seconds*`)
                    .then(msg => msg.delete(5000));
                    return;
                }
                else { guilds.r1spam = new Date().getTime();
                        setTimeout(function(){
                            if(code != 'cop' || code != 'rainbow' || code != 'alien' || code != 'mys' || code != 'ukraine' ) code = 'rainbow'
                            console.log(`Rainbow Command Inizilized Type: ${code}`)
                            console.log('=> '+userlog + ' has called [ rainbow ] command')
                            //message.delete().catch();
                            pin = 1;
                        },500)
                    }
            }
            else { guilds.r1spam = new Date().getTime();
                    setTimeout(function(){
                        if(code != 'cop' || code != 'rainbow' || code != 'alien' || code != 'mys' || code != 'ukraine' ) code = 'rainbow'
                        console.log(`Rainbow Command Inizilized Type: ${code}`)
                        console.log('=> '+userlog + ' has called [ rainbow ] command')
                        //message.delete().catch();
                        pin = 1;
                        //console.log('Reached Here')
                    },500)
                }
    }
    else {  return;  }
    guildID = message.guild
    setTimeout(function()
    {
        if(pin === 1)
        {
            if(SWITCH === 'on' || SWITCH === 'On' || SWITCH === 'ON')
            {
                if(guildID.on2 != 1) //return message.channel.send('Please off the rainbow mode before changing type')
                {
                    console.log('Rainbow ON '+message.guild.id)
                    guildID.on2 = 1;
                    //clearInterval(intervalA)
                    intervalA = setInterval(function(){
                        mod = mod + 1;
                        Rcolor(mod,ColorCode)
                    },1000)
                }
                else
                {
                    return message.channel.send('Please turn off the Rainbow mode before changing type \n**USe** `a$rainbow off` **to switch off Rainbow**')
                    .then(msg => msg.delete(5000));
                }
            }
            else
            {
                if(SWITCH === 'off' || SWITCH === 'Off' || SWITCH === 'OFF')
                {
                    //console.log(guildID.on)
                    if(guildID.on2 === 1) 
                    {
                        guildID.on2 = 0;
                        console.log('Rainbow OFF '+message.guild.id)
                        clearInterval(intervalA)
                    }
                    else return;
                } 
                else return;
            }
        }
    },1000)
    
    
    function Rcolor(mod,ColorCode)
    {
            path = mod%ColorCode.length
            newrole = gRole.edit({
                color: ColorCode[path]
            })
           
    }
}
module.exports.help = {
    name : "rainbow"
}