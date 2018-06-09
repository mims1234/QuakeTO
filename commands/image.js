const Discord = require("discord.js");
const superagent = require("superagent");
const fs = require("fs");
let imagefile = JSON.parse(fs.readFileSync("./Qimage.json","utf8"));


module.exports.run = async (bot,message,args) => {
    
    var value = ["0","1","2","3","4"];
    var key = value[Math.floor(Math.random() * value.length)];

    let imageEmbed;

    switch(key)
    {
        case "0":  imageEmbed = new Discord.RichEmbed()
                 .setColor("#ff9900")
                 .setTitle("Image")
                 .setImage(imagefile.url);

                 message.channel.send(imageEmbed);
        break; 

        case "1":  imageEmbed = new Discord.RichEmbed()
                 .setColor("#ff9900")
                 .setTitle("Image")
                 .setImage(imagefile.url1);

                 message.channel.send(imageEmbed);
        break;

        case "2":  imageEmbed = new Discord.RichEmbed()
                 .setColor("#ff9900")
                 .setTitle("Image")
                 .setImage(imagefile.url2);

                 message.channel.send(imageEmbed);
        break;

        case "3":  imageEmbed = new Discord.RichEmbed()
                 .setColor("#ff9900")
                 .setTitle("Image")
                 .setImage(imagefile.url3);

                 message.channel.send(imageEmbed);
        break;

        case "4":  imageEmbed = new Discord.RichEmbed()
                    .setColor("#ff9900")
                    .setTitle("Image")
                    .setImage(imagefile.url_gammarankup);

                     message.channel.send(imageEmbed);
break;

        default: message.channel.send("Value was not 0");
    }

}

module.exports.help = {
    name : "image"
}