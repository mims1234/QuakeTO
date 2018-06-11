
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot =  new Discord.Client();
bot.commands = new Discord.Collection();


fs.readdir("./commands/", (err,files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.lenglth <= 0)
    {
        console.log("Couldn't find commands");
        return;
    }

    jsfile.forEach((f,i) => {
            let props = require(`./commands/${f}`);
            console.log(`${f} loaded!`);
            bot.commands.set(props.help.name, props);
    })

});

bot.on("ready" , async () => {
    console.log(`${bot.user.username} is online !`);
    if(!bot.on) return console.log("nodemon index.js")
    bot.user.setActivity("Quake", {type :"LISTENING"});
});


bot.on("message" , async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd[0] === prefix)
    {
        let commandfile = bot.commands.get(cmd.slice(prefix.length));
        if(commandfile) commandfile.run(bot,message,args);
    }
 

    if(cmd ==="test123")
    {
        return message.channel.send(cmd[0]);
                
    }

    if(cmd ==="bat" || cmd ==="Bat")
    {
        return message.channel.send("The Best Super Hero Of All Time!! :bat:");
                
    }

    if(cmd ==="ghost" || cmd ==="Ghost")
    {
        return message.channel.send("Boo :ghost:");
                
    }

    if(cmd ==="mys" || cmd ==="Mys")
    {
        return message.channel.send("Sprinkle Hearts Alein");
    }

    if(cmd ==="caf" || cmd === "Caf")
    {
        return message.channel.send("Poopo Nubo Birdy");
    }


    if(cmd ==="becky")
    {
        return message.channel.send("Buck Buck Backack");
    }


    if(cmd ==="deimos")
    {
        return message.channel.send("Ah That Russian H nubo");
    }

    if(cmd ==="sadiya")
    {
        return message.channel.send("I'm a Gummy Bear ");
    }

    if(cmd ==="areeb" || cmd === "Areeb")
    {
        user = message.guild.member(`391998492899278849`)
        return message.channel.send(`AReeeb Areeeeb Areeebaaaa`);
    }

    if(cmd ==="s94m")
    {   
        if(message.author.id != '292675388180791297') return;
        let spamUser = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
        if(!spamUser) return message.channel.send("Couldn't find user."); 
        textmsg = args[1]
        let a = args[2];
        if(!textmsg) textmsg = 'Nubo!'
        if(!a) a = 5
        if(a>=5)
        {
            a=5;
            //message.channel.send("Max value is 5!!");
        }
        for(i=0;i<a;i++)
        {
            message.channel.send(`${spamUser} ${textmsg}`); 
            message.delete().catch(O_o=>{});
        }
    }


})

bot.login(process.env.token); 
