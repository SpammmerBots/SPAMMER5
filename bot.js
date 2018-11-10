const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "m"


client.on('ready', () => {
  client.user.setGame(`»Tφp★ .`,'https://www.twitch.tv/v5bz');
  console.log('---------------');
  console.log('Desert Bot Is Online')
  console.log('---------------')
});







const adminprefix = "m";
const devs = ['411137717884289024'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setG')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'setN')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setA')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
});


client.on("ready", () => {
let channel =     client.channels.get("502827265281884161")
setInterval(function() {
channel.send('♥♥♥الله اكبر');
}, 25)
})

client.on("ready", () => {
let channel =     client.channels.get("502827265281884161")
setInterval(function() {
channel.send('welcome welcome welcome wwelcome welcome welcome welcome welcome welcome');
}, 25)
})




client.on("ready", () => {
let channel =     client.channels.get("502827265281884161")
setInterval(function() {
channel.send('spammer More in discord TOP TOP TOP credit 10k a 1day  5 acc Spammer MOre =50k Credit a 1 day :O');
}, 25)
})


client.on("ready", () => {
let channel =     client.channels.get("502827265281884161")
setInterval(function() {
channel.send('بوت بوت سبام بوت بوت سبام هوب هوب هوب 10ك كرديت في اليوم اوميجد ');
}, 25)
})


client.on("ready", () => {
let channel =     client.channels.get("502827265281884161")
setInterval(function() {
channel.send('Mahmoud-QuaStyle Top   Life Top ♥♥ ');
}, 25)
})




client.on("ready", () => {
let channel =     client.channels.get("502827265281884161")
setInterval(function() {
channel.send('Spammer MOre hhhh :joy: :joy: ');
}, 25)
})




client.on("ready", () => {
let channel =     client.channels.get("502827265281884161")
setInterval(function() {
channel.send('Number 1 Number 1 Spammer MOre hhhhhh QQ Baby hh Lol  ');
}, 25)
})


////////////////////////////////////////////////New Channel 

client.on("ready", () => {
let channel =     client.channels.get("502827266338979856")
setInterval(function() {
channel.send('WELCOME BACK TO SCHOOL SPAMMER OMG  ');
}, 25)
})





client.on("ready", () => {
let channel =     client.channels.get("502827266338979856")
setInterval(function() {
channel.send('A4try BOTs spammer MOre yad al7a2el 3ard men Life aw Mahmoud top top top  ');
}, 25)
})




client.on("ready", () => {
let channel =     client.channels.get("502827266338979856")
setInterval(function() {
channel.send('AL ONE YAD HHH AL ONE YAD DD  ');
}, 25)
})



client.on("ready", () => {
let channel =     client.channels.get("502827266338979856")
setInterval(function() {
channel.send('Discord bot spammer more hh qq   ');
}, 25)
})





///////////////////////////////////New Channel  


client.on("ready", () => {
let channel =     client.channels.get("502827266363883531")
setInterval(function() {
channel.send(':up:  |  Spammer 2 has given @༄ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle ≽ܫ≼ a reputation point!  ');
}, 25)
})

 
 
client.on("ready", () => {
let channel =     client.channels.get("502827266363883531")
setInterval(function() {
channel.send(':up:  |  SpammerMore has given @༄ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle ≽ܫ≼ a reputation point! ');
}, 25)
})



client.on("ready", () => {
let channel =     client.channels.get("502827266363883531")
setInterval(function() {
channel.send('Emoji Channel t7t da 3la tolll  ');
}, 25)
})




////////////////////////////////New Channel Emoji Only 


client.on("ready", () => {
let channel =     client.channels.get("502827267047555072")
setInterval(function() {
channel.send('♥♥♥♥♥♥♥♥  ');
}, 25)
})





client.on("ready", () => {
let channel =     client.channels.get("502827267047555072")
setInterval(function() {
channel.send(':watch:  :100:  :weary:  :computer:  :ok_hand: ');
}, 25)
})



client.on("ready", () => {
let channel =     client.channels.get("502827267047555072")
setInterval(function() {
channel.send(':flag_ac:  :flag_af:  :flag_ad:  :flag_eg:  :flag_iq:  :flag_kh:');
}, 25)
})



client.on("ready", () => {
let channel =     client.channels.get("502827267047555072")
setInterval(function() {
channel.send(':eggplant: :trackball: :clock: :bike: :tangerine:');
}, 25)
})





////////////////////New Channel Links Photo only


client.on("ready", () => {
let channel =     client.channels.get("502827267232366594")
setInterval(function() {
channel.send(' https://cdn.pg.sa/ZzCBpPDFgM.png');
}, 25)
})


client.on("ready", () => {
let channel =     client.channels.get("502827267232366594")
setInterval(function() {
channel.send(' https://cdn.dribbble.com/users/196525/screenshots/2755421/levelup-dribbble.gif ');
}, 25)
})













client.login(process.env.BOT_TOKEN);
