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




client.on('guildMemberAdd', member => {
    member.guild.channels.get('439792255365021696').setName(`Total Users: ${member.guild.memberCount}`)
    let humans = member.guild.members.filter(m => !m.user.bot).size;
    member.guild.channels.get('439793088001736725').setName(`Member Count: ${humans}`)
    let bots = member.guild.members.filter(m => m.user.bot).size;
    member.guild.channels.get('439793716052623361').setName(`Bot Count: ${bots}`)
});

client.on('guildMemberAdd', member => {
    const welcomechannel = member.guild.channels.find('name', 'tlbatadmin')

    var newuserjoinembed = new Discord.RichEmbed()
      .setColor('00FF00')
      .setAuthor(member.user.tag + ' has joined server', member.user.displayAvatarURL)
      .addField(`:inbox_tray: Welcome To The Server ${member.user.tag}`)
      .setFooter(`User joined`)
      .setTimestamp()
      return welcomechannel.send(newuserjoinembed);
});

client.on('guildMemberRemove', member => {
    const goodbyechannel = member.guild.channels.find('name', 'tlbatadmin')

    var newuserjoinembed = new Discord.RichEmbed()
      .setColor('#FF0000')
      .setAuthor(member.user.tag + ' has left server', member.user.displayAvatarURL)
      .addField(`:outbox_tray: Goodbye ${member.user.name} :disappointed_relieved: `)
      .setFooter(`User left`)
      .setTimestamp()
      return goodbyechannel.send(newuserjoinembed);
});








client.login(process.env.BOT_TOKEN);
