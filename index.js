const Discord = require('discord.js');
const client = new Discord.Client();
const https = 'https'
const snekfetch = require('snekfetch');
const os = require('os');
const settings = require('./settings')
const randomPuppy = require('random-puppy');
const selfbot = `SoWalkoud`;

var prefix = settings.prefix
var live = 'chillhopmusic'
let crea = '𝙎𝙤𝙒𝙖𝙡𝙠𝙤𝙪𝙙 𝘽𝙊𝙏'

//self hap

/*

'##::::'##::::'###::::'########:::::'########:::::'###::::'####:'########::
 ##:::: ##:::'## ##::: ##.... ##:::: ##.... ##:::'## ##:::. ##:: ##.... ##:
 ##:::: ##::'##:. ##:: ##:::: ##:::: ##:::: ##::'##:. ##::: ##:: ##:::: ##:
 #########:'##:::. ##: ########::::: ########::'##:::. ##:: ##:: ##:::: ##:
 ##.... ##: #########: ##.....:::::: ##.. ##::: #########:: ##:: ##:::: ##:
 ##:::: ##: ##.... ##: ##::::::::::: ##::. ##:: ##.... ##:: ##:: ##:::: ##:
 ##:::: ##: ##:::: ##: ##::::::::::: ##:::. ##: ##:::: ##:'####: ########::
..:::::..::..:::::..::..::::::::::::..:::::..::..:::::..::....::........:::
                 

  */
let loger = 0
client.on("messageDelete", async msg => {
  if(loger !== 1)return
  if(msg.channel.type === "dm") {
    if (msg.author.id !== settings.ID) {

  let embed = new Discord.RichEmbed()
    .setTitle("**DELETED MESSAGE**")
    .setColor("#fc3c3c")
    .addField("Author", msg.author.tag, true)
    .addField("Channel", msg.channel, true)
    .addField("Message", msg.content)
    .setFooter(`𝙎𝙤𝙒𝙖𝙡𝙠𝙤𝙪𝙙 𝘽𝙊𝙏 Message ID: ${msg.id} | Author ID: ${msg.author.id}`);


  msg.channel.send({embed});
}
else return;
  }
  else return;
});


client.on('ready', () => {
      client.user.setActivity('lofi chill', {type: "LISTENING"})
});


/*
//ADMIN------------
let status1 = 'partner'
let status2 = 'Partner'
let status3 = 'PARTNER'
let status4 = 'pub'

const client2 = new Discord.Client();

function myFunction(a) {
  client2.on('ready', () => {
    channel2.send(a.username+'#'+a.discriminator+`

custom status ${sign}${a.presence.game.state}${sign}`)
    })
}

client2.login('NzI0MzI0NjUwNTg2MzQxMzk2.Xu-iJQ.cRw2rgTkz4RYCqyv5AeqJTByGmw')
client.on('message', msg => {



let member = msg.author



    let channel2 = client.channels.get("725063587130900653");






     if(member.presence.game === null)return 
     if(member.presence.game.name === 'Custom Status'){
 
      console.log(member.username+'#'+member.discriminator+' '+member.presence.game.state)
     
     if(member.presence.game.state === null)return
     if(member.presence.game && member.presence.game.state.includes(status1) || member.presence.game.state.includes(status2) || member.presence.game.state.includes(status3) || member.presence.game.state.includes(status4) ){
       
        
 console.log('passed')
 myFunction(member)
         }
       }
   
  })

  

//ADMIN------------
*/


  
  client.on('message', msg => {
    if (msg.author.id !== client.user.id) return;


    if (msg.content.startsWith(settings.prefix + 'help')) {
      if (msg.deletable) msg.delete();
      var helpAEmbed = new Discord.RichEmbed()
        .setThumbnail(msg.author.avatarURL)
        .setTitle(`  __ 𝐒𝐨𝐖𝐚𝐥𝐤𝐨𝐮𝐝 𝐁𝐎𝐓 { 𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐎𝐔𝐑 𝐆𝐀𝐌𝐄 }: __   `)
        .addField(' ** __'+settings.prefix+'2help__ : **', ' [ NOUVEAU HELP MENU 2 ]  ')
        .addField(' ** __'+settings.prefix+'loger__ : **', ' [ Message Loger dm ]  ')
        .addField(' ** __'+settings.prefix+'basic__ : **', ' [ 𝐀𝐜𝐭𝐢𝐯𝐞 𝐋𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐁𝐚𝐬𝐢𝐜 ]  ')
        .addField(' ** __'+settings.prefix+'modo__   :**', '  [ 𝐀𝐜𝐭𝐢𝐯𝐞 𝐋𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 **Modérateurs** ]  ')	 
        .addField(' ** __'+settings.prefix+'raid__  : **', ' [ 𝐀𝐜𝐭𝐢𝐯𝐞 𝐋𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐑𝐚𝐢𝐝 ] ')
        .addField(' ** __'+settings.prefix+'helpspam__  : **', ' [ 𝐀𝐜𝐭𝐢𝐯𝐞 𝐋𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐒𝐩𝐚𝐦 ]   ')	  
        .addField(' ** __'+settings.prefix+'gif__   :**', '  [ 𝐀𝐜𝐭𝐢𝐯𝐞 𝐋𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐆𝐢𝐟 ]  ')  
        .addField(' ** __'+settings.prefix+'statut__   :**', '  [ 𝐀𝐜𝐭𝐢𝐯𝐞 𝐋𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐒𝐭𝐚𝐭𝐮𝐭 ]    ')
        .addField(' ** __'+settings.prefix+'fun__  :**', '  [ 𝐀𝐜𝐭𝐢𝐯𝐞 𝐋𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐅𝐮𝐧 ]  ')	 
        .addField(' ** __'+settings.prefix+'autre__   :**', '  [ 𝐀𝐜𝐭𝐢𝐯𝐞 𝐋𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 **Autres** ]  ')	 
        .addField(' ** Développeur :**', " **Lien :** [:heavy_check_mark:️ 𝐂𝐥𝐢𝐪𝐮𝐞 𝐒𝐮𝐫 𝐋𝐞 𝐁𝐨𝐮𝐭𝐨𝐧 :heavy_check_mark:️]() ", true)
        .setColor('#40FF00')
        .setFooter(crea)
        .setTimestamp()
        .setImage('https://66.media.tumblr.com/tumblr_mah88tSVDs1rpurleo1_500.gif')
      msg.channel.send(helpAEmbed).catch(err => con(err));
  
  
      
    }
  
    if (msg.content.startsWith(settings.prefix + 'credits')) {
      if (msg.deletable) msg.delete();
      var helpAEmbed = new Discord.RichEmbed()
  
        .setThumbnail(msg.author.avatarURL)
        .setTitle(`[SoWalkoud] **Credits** `)
        .addField('**SoWalkoud**', 'Développeur')
          .setColor('#00FF00')
          .setImage('https://cdn.discordapp.com/attachments/632325634458255361/633984494579482636/MOSHED-2019-10-16-13-7-6.gif')
      msg.channel.send(helpAEmbed).catch(err => con(err));
  
    }
    if (msg.content.startsWith('-')) {
      if (msg.deletable) 
      msg.delete(54000);
  
    
  
    }
    if (msg.content.startsWith(prefix+'loger')) {
      msg.delete();
      var args = msg.content.split(' ').slice(1).join(' ')
      if(!args)return msg.reply('Exemple '+prefix+'loger on/off')
      if(args === 'on'){
        loger = 1
        msg.reply('Loger ON')
      }
      if(args === 'off'){
        loger = 0
        msg.reply('Loger OFF')
      }

  
    }
    if (msg.content.startsWith('&')) {
      if (msg.deletable) 
      msg.delete(50);
  
    
  
    }

    if (msg.content.startsWith(settings.prefix + 'modo')) {
      if (msg.deletable) msg.delete();
      var helpAEmbed = new Discord.RichEmbed()
  
        .setThumbnail(msg.author.avatarURL)
        .setTitle(` [𝐎𝐮𝐯𝐞𝐫𝐭𝐮𝐫𝐞 𝐃𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐁𝐚𝐬𝐢𝐜] :  `)
        .addField('**__'+settings.prefix+'ban__**', '[ **Ban la personne @user**]')
        .addField('**__'+settings.prefix+'unban__**', '[ **Unban la personne @user**]')
        .addField('**__'+settings.prefix+'kick__**', '[ **Kick la personne @user**]')
        .addField('**__'+settings.prefix+'purge__**', '[ **Purge le salon (.purge 30) Max 50 **]')
        .addField('**__'+settings.prefix+'prune__**', '[ **prune**]')
        .setColor('FF0000')
        .setFooter(crea)
        .setTimestamp()
        .setImage('https://i.gifer.com/NdTH.gif')
      msg.channel.send(helpAEmbed).catch(err => con(err));
  
    }
    
  
    if (msg.content.startsWith(settings.prefix + 'basic')) {
      if (msg.deletable) msg.delete();
      var helpAEmbed = new Discord.RichEmbed()
  
        .setThumbnail(msg.author.avatarURL)
        .setTitle(` [𝐎𝐮𝐯𝐞𝐫𝐭𝐮𝐫𝐞 𝐃𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐁𝐚𝐬𝐢𝐜] :  `)
        .addField('**__'+settings.prefix+'ping__**', '[ 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐋𝐞 𝐏𝐢𝐧𝐠 𝐃𝐮 𝐁𝐨𝐭 ]')
        .addField('**__'+settings.prefix+'info__**', '[ 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐋𝐞𝐬 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧𝐬 @𝐔𝐬𝐞𝐫 (or use .ui ) ]')
        .addField('**__'+settings.prefix+'serverinfo__**', '[ 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐋𝐞𝐬 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧𝐬 𝐃𝐮 𝐒𝐞𝐫𝐯 or use .serverinfo2 ]')
        .addField('**__'+settings.prefix+'purge__**', '[ 𝐂𝐥𝐞𝐚𝐫 𝐕𝐨𝐬 𝐌𝐞𝐬𝐬𝐚𝐠𝐞𝐬 (**50 max**) ]')
        .addField('**__'+settings.prefix+'stats__**', '[ 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐋𝐞𝐬 𝐒𝐭𝐚𝐭𝐬 𝐃𝐞 𝐕𝐨𝐭𝐫𝐞 𝐂𝐨𝐦𝐩𝐭𝐞 ]')
        .addField('**__'+settings.prefix+'token__**', '[ 𝐃𝐨𝐧𝐧𝐞 𝐋𝐞 𝐓𝐨𝐤𝐞𝐧 @𝐔𝐬𝐞𝐫 ]')
        .addField('**__'+settings.prefix+'joindate__**', '[ 𝗝𝗼𝗶𝗻 𝗗𝗮𝘁𝗲 ]')
        .addField('**__'+settings.prefix+'servlist__**', '[ **Liste de vos serveurs** ]')
        .addField('**__'+settings.prefix+'servname__**', '[ **Change le nom du serveur** (5 caractères minimum) ]')
        .addField('**__'+settings.prefix+'servicon__**', "[ **Change l'icone du serveur avec votre lien** (.servicon http://site.com/image.png) ]")
        .addField('**__'+settings.prefix+'chanlist__**', '[ **Liste des channels** ]')
        .addField('**__'+settings.prefix+'pp__**', '[ **Montre la photo de profil du @user ou du votre** ]')
        .addField('**__'+settings.prefix+'arabavatar__**', "[ **Voler la pp de quelqu'un et la mettre sur vous** ]")
        .addField('**__'+settings.prefix+'hast__**', "[ **Rend votre texte dans un hastebin** ]")
        .setColor('FF0000')
        .setFooter(crea)
        .setTimestamp()
        .setImage('https://i.gifer.com/NdTH.gif')
      msg.channel.send(helpAEmbed).catch(err => con(err));
  
    }

    if (msg.content.startsWith(settings.prefix + 'autre')) {
      if (msg.deletable) msg.delete();
      var helpAEmbed = new Discord.RichEmbed()
  
        .setThumbnail(msg.author.avatarURL)
        .setTitle(` [𝐎𝐮𝐯𝐞𝐫𝐭𝐮𝐫𝐞 𝐃𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 Informatiques (autres)] :  `)
        .addField('**'+settings.prefix+'checkhost**', '[ **Information sur le site** ]')
        .addField('**'+settings.prefix+'geoip**', '[ **𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐋𝐞𝐬 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧𝐬 sur IP** ]')
        .addField('**'+settings.prefix+'eval**', '[ **Entrée Js Sortie**]')
        .addField('**'+settings.prefix+'mytoken**', '[ **𝐀𝐟𝐟𝐢𝐜𝐡𝐞 votre token** ]')
        .addField('**'+settings.prefix+'restart**', '[ **Reboot** ]')
        .addField('**'+settings.prefix+'stopself**', '[ **Pour stoper le selfbot** ]')
        .addField('**'+settings.prefix+'discord**', '[ **Affiche la version de discord** ]')
        .addField('**>loadingprefix**', '[ **Change le préfix en la votre** ]')
.addField('**'+settings.prefix+'credits**', '[ **Affiche la version de discord** ]')

        .setColor('FF0000')
        .setFooter(crea)
        .setTimestamp()
        .setImage('https://i.gifer.com/NdTH.gif')
      msg.channel.send(helpAEmbed).catch(err => con(err));
  
    }

    if (msg.content.startsWith(settings.prefix + 'gif')) {
      if (msg.deletable) msg.delete();
      var helpAEmbed = new Discord.RichEmbed()
      .setThumbnail(msg.author.avatarURL)
        .setTitle(`[𝐎𝐮𝐯𝐞𝐫𝐭𝐮𝐫𝐞 𝐃𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐃𝐞 𝐆𝐢𝐟𝐬] `)
        .addField('__'+settings.prefix+'tk78__', '**• Envoie un gif de thekairi78".**')
        .addField('__'+settings.prefix+'kenny__', '**• Envoie un gif de kenny.**')
        .addField('__'+settings.prefix+'veski__', '**• Veski**')
        .addField('__'+settings.prefix+'fn__', '**• Personne persecuté par le  fn.**')
        .addField('__'+settings.prefix+'octogone__', '**• Propose un octogone**')
        .addField('__'+settings.prefix+'.ko__', '**• Met un k.0 a un fdp**')
        .addField('__'+settings.prefix+'.stress__', '**• Crise d asmthe **')
        .addField('__'+settings.prefix+'hack__', '**• Hacker **')
        .setColor('#00FF00')
        .setFooter(crea)
        .setImage('https://i.gifer.com/NdTH.gif')
      msg.channel.send(helpAEmbed).catch(err => con(err));
  
    }

    if (msg.content.startsWith(settings.prefix + 'statut')) {
    if (msg.deletable) msg.delete();
    var helpAEmbed = new Discord.RichEmbed()
    .setThumbnail(msg.author.avatarURL)
      .setTitle(` 𝙒𝙚𝙡𝙘𝙤𝙢𝙚 𝙩𝙤 𝙤𝙪𝙧 𝙜𝙖𝙢𝙚 `)
      .addField('__'+settings.prefix+'play__ __[nom de votre jeu]__', '**• Vous permet de définir un statut "Joue à + [nom de votre jeu]".**')
      .addField('__'+settings.prefix+'live__ __[nom de votre jeu]__', '**• Vous permet de définir un statut "En streaming + [nom de votre jeu]".**')
      .addField('__'+settings.prefix+'watch__ __[nom de votre jeu]__', '**• Vous permet de définir un statut "Regarde + [nom de votre jeu]".**')
      .addField('__'+settings.prefix+'lstn__ __[nom de votre jeu]__', '**• Vous permet de définir un statut "Ecoute + [nom de votre jeu]".**')
      .addField('__'+settings.prefix+'reset__', '**• Réinitialise votre statut de jeu.**')
      .setColor('#00FF00')
      .setFooter(crea)
        .setImage('https://i.gifer.com/NdTH.gif')
    msg.channel.send(helpAEmbed).catch(err => con(err));

  }
  if (msg.content.startsWith(settings.prefix + 'raid')) {
    if (msg.deletable) msg.delete();
    var helpAEmbed = new Discord.RichEmbed()
      .setThumbnail(msg.author.avatarURL)
      .setTitle(`[𝐎𝐮𝐯𝐞𝐫𝐭𝐮𝐫𝐞 𝐃𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐑𝐚𝐢𝐝] :`)
      .addField('**__'+settings.prefix+'banall__**', ' [ 𝐁𝐚𝐧 𝐓𝐨𝐮𝐭 𝐋𝐞 𝐒𝐞𝐫𝐯𝐞𝐮𝐫 ] (or use banall2)')
      .addField('**__'+settings.prefix+'kickall__**', ' [ **Kick** 𝐓𝐨𝐮𝐭 𝐋𝐞 𝐒𝐞𝐫𝐯𝐞𝐮𝐫 ] ')
      .addField('**__'+settings.prefix+'deface__**', ' [ 𝐃𝐞𝐟𝐚𝐜𝐞 𝐋𝐞 𝐒𝐞𝐫𝐯𝐞𝐮𝐫 ]')
      .addField('**__'+settings.prefix+'createchannelmax__**', ' [ 𝐂𝐫𝐞́𝐞𝐫 𝐀𝐮 𝐌𝐚𝐱 𝐃𝐞𝐬 𝐂𝐡𝐚𝐧𝐧𝐞𝐥𝐬 ] ')
      .addField('**__'+settings.prefix+'clearchannel__**', '[ 𝐒𝐮𝐩𝐩𝐫𝐞𝐬𝐬𝐢𝐨𝐧 𝐃𝐞𝐬 𝐂𝐡𝐚𝐧𝐧𝐞𝐥𝐬  ] (or use delchannels)')
      .addField('**__'+settings.prefix+'debanall__**', '[ 𝐃𝐞𝐛𝐚𝐧 𝐓𝐨𝐮𝐭 𝐋𝐞 𝐒𝐞𝐫𝐯𝐞𝐮𝐫 ] ( or use unbanall) ')
      .addField('**__'+settings.prefix+'selfmp__**', ' [ 𝐃𝐦 𝐓𝐨𝐮𝐭 𝐋𝐞𝐬 𝐌𝐞𝐦𝐛𝐫𝐞𝐬 𝐃𝐮 𝐒𝐞𝐫𝐯𝐞𝐮𝐫 ] ')
      .addField('**__'+settings.prefix+'delemote__**', ' [ 𝐒𝐮𝐩𝐩𝐫𝐞𝐬𝐬𝐢𝐨𝐧 𝐃𝐞𝐬 𝐄𝐦𝐨𝐣𝐢𝐬 ] ')
      .addField('**__'+settings.prefix+'clearrole__**', ' [ 𝐒𝐮𝐩𝐩𝐫𝐞𝐬𝐬𝐢𝐨𝐧 𝐃𝐞𝐬 𝐑𝐨̂𝐥𝐞𝐬 ] (or use delroles)')
      .addField('**__'+settings.prefix+'servnick__**', ' [ **Renomme tout les membres** ] ')
      .addField('**__'+settings.prefix+'everyadmin__**', ' [ **Rend tout le monde admin** ] ')
      .addField('**__'+settings.prefix+'everymute__**', ' [ **Mute tout le monde** ] ')
      .addField('**__'+settings.prefix+'be__**', ' [ **Créé et vous donne un role admin** ] ')
      .setColor('#40FF00')
      .setFooter(crea)
      .setTimestamp()
        .setImage('https://i.gifer.com/NdTH.gif')
    msg.channel.send(helpAEmbed).catch(err => con(err));

  }

  if (msg.content.startsWith(settings.prefix + 'fun')) {
      if (msg.deletable) msg.delete();
      var helpAEmbed = new Discord.RichEmbed()
        .setThumbnail(msg.author.avatarURL)
        .setTitle(`[𝐎𝐮𝐯𝐞𝐫𝐭𝐮𝐫𝐞 𝐃𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐅𝐮𝐧] :  `)
        .addField('**__'+settings.prefix+'search__**', ' [ 𝐄𝐟𝐟𝐞𝐜𝐭𝐮𝐞 𝐔𝐧𝐞 𝐑𝐞𝐜𝐡𝐞𝐫𝐜𝐡𝐞 𝐈𝐧𝐭𝐞𝐫𝐧𝐞𝐭 ] ')
        .addField('**__'+settings.prefix+'8ball__**', ' [ 𝐑𝐞́𝐩𝐨𝐧𝐝 𝐀̀ 𝐋𝐚 𝐐𝐮𝐞𝐬𝐭𝐢𝐨𝐧 ] ')
        .addField('**__'+settings.prefix+'rgif__**', '**Effectue une recherche sur internet et vous affiche un gif en rapport avec vos mots-clés.** ⚜️')
        .addField('**__'+settings.prefix+'ddos__**', ' ⚜️ **Effectue une attack "ddos"** ⚜️')
        .addField('**__'+settings.prefix+'ascii__**', ' ⚜️ **Transforme votre texte en ascii embed** ⚜️')
        .addField('**__'+settings.prefix+'reverse__**', ' ⚜️ **Inverse votre texte** ⚜️')
        .addField('**__'+settings.prefix+'elle__**', '  **cette fille... ❤️**')
        .setColor('#00FF00')
        .setImage('https://i.gifer.com/NdTH.gif')
        .setTimestamp()
      msg.channel.send(helpAEmbed).catch(err => con(err));
  
    }

  //--------------------------------------------------------commande-------------------------------------


    
  if (msg.content.startsWith(settings.prefix + 'elle')) {
      if (msg.deletable) msg.delete();
      var helpAEmbed = new Discord.RichEmbed()
        .setThumbnail(msg.author.avatarURL)
        .setTitle(` ...  `)
        .addField('𝓙𝓮 𝓻𝓮𝓹𝓮𝓷𝓼𝓮 à 𝓬𝓮𝓽𝓽𝓮 𝓯𝓲𝓵𝓵𝓮...', '*･  🎀  𝒿𝑒 𝓁 𝒶𝒾𝓂𝑒  🎀  ･*')
        .setColor('FF0000')
        .setFooter(crea)
        .setTimestamp()
        .setImage('https://media0.giphy.com/media/l3vRivkb1e4mXBtAc/source.gif')
      msg.channel.send(helpAEmbed).catch(err => con(err));
  
    }
  
    if (msg.content.startsWith(settings.prefix + 'watch')) {
      if(msg.deletable) msg.delete()
      let args = msg.content.split(' ').slice(1).join(' ')
      client.user.setActivity(args, {type: "WATCHING"})
      return msg.reply(':computer:  𝐒𝐓𝐀𝐓𝐔𝐒 𝐌𝐈𝐒 𝐀 𝐉𝐎𝐔𝐑𝐒 ! :computer: ').then(m => m.delete(5000));
    }
  
  
    if (msg.content.startsWith(settings.prefix + 'hack')) {
      if (msg.deletable) msg.delete();
      let avatar_embed = new Discord.RichEmbed()
        .setAuthor(`h4x0r `)
        .setColor("RANDOM")
        .setImage('https://fifty-wp.s3.amazonaws.com/detours/uploads/2017/08/hacker-800x480.jpg')
      return msg.channel.send(avatar_embed).catch(e => {});
    }

    if (msg.content.startsWith(settings.prefix + 'lstn')) {
      if(msg.deletable) msg.delete()
      let args = msg.content.split(' ').slice(1).join(' ')
      client.user.setActivity(args, {type: "LISTENING"})
      return msg.reply(':computer:  𝐒𝐓𝐀𝐓𝐔𝐒 𝐌𝐈𝐒 𝐀 𝐉𝐎𝐔𝐑𝐒 ! :computer: ').then(m => m.delete(5000));
  
    }
  
    if (msg.content.startsWith(settings.prefix + 'live')) {
      if(msg.deletable) msg.delete()
      let args = msg.content.split(' ').slice(1).join(' ')
      client.user.setActivity(args, {type: "STREAMING", url: "https://www.twitch.tv/"+live+""})
      return msg.reply(':computer:  𝐒𝐓𝐀𝐓𝐔𝐒 𝐌𝐈𝐒 𝐀 𝐉𝐎𝐔𝐑𝐒 ! :computer: ').then(m => m.delete(5000));
      }
  
      if (msg.content.startsWith(settings.prefix + 'play')) {
        if(msg.deletable) msg.delete()
        let args = msg.content.split(' ').slice(1).join(' ')
        client.user.setActivity(args, {type: "PLAYING"})
        return msg.reply(':computer:  𝐒𝐓𝐀𝐓𝐔𝐒 𝐌𝐈𝐒 𝐀 𝐉𝐎𝐔𝐑𝐒 ! :computer: ').then(m => m.delete(5000));
      }
  
      
      if (msg.content.startsWith(settings.prefix + 'fn')) {
        if (msg.deletable) msg.delete();
        let avatar_embed = new Discord.RichEmbed()
          .setAuthor(`Personne persecuté par le  fn`)
          .setColor("RANDOM")
          .setImage('https://cdn.discordapp.com/attachments/561501020799107075/561913327283077120/Snapchat-1333227243.jpg')
        return msg.channel.send(avatar_embed).catch(e => {});
      }
  
      if (msg.content.startsWith(settings.prefix + 'kenny')) {
        if (msg.deletable) msg.delete();
        let avatar_embed = new Discord.RichEmbed()
          .setAuthor(`Kenny le monstre du lochness `)
          .setColor("RANDOM")
          .setImage('https://cdn.discordapp.com/attachments/538960051704954881/567189756572598305/tenor.gif')
        return msg.channel.send(avatar_embed).catch(e => {});
      }
  
      if (msg.content.startsWith(settings.prefix + 'tk78')) {
        if (msg.deletable) msg.delete();
        let avatar_embed = new Discord.RichEmbed()
          .setAuthor(`TK78 se fout de ta gueule `)
          .setColor("RANDOM")
          .setImage('https://cdn.discordapp.com/attachments/538960051704954881/567190012408627200/tenor.gif')
        return msg.channel.send(avatar_embed).catch(e => {});
      }
  
  
    
  
  
      if (msg.content.startsWith(settings.prefix + 'veski')) {
      if (msg.deletable) msg.delete();
      var helpAEmbed = new Discord.RichEmbed()
        .setTitle(`𝐕𝐞𝐬𝐤𝐢`)
        .setImage('https://cdn.dribbble.com/users/1172342/screenshots/3178785/usain_bolt.gif')
        .setColor('#00FF00')
        .setFooter(crea)
        .setTimestamp()
      msg.channel.send(helpAEmbed).catch(err => con(err));
  
    }
  
  
    if (msg.content.startsWith(settings.prefix + 'ocotogone')) {
      if (msg.deletable) msg.delete();
      var helpAEmbed = new Discord.RichEmbed()
          .setTitle(`	𝐎𝐜𝐭𝐨𝐠𝐨𝐧𝐞`)
          .setImage(`https://66.media.tumblr.com/d3a5549af2ed2818413c6de684819678/tumblr_ncbc45kqXR1ry1rm7o1_400.gif`)
        .setColor('#00FF00')
        .setFooter(crea)
        .setTimestamp()
      msg.channel.send(helpAEmbed).catch(err => con(err));
  
    }
  
   
  
    if (msg.content.startsWith(settings.prefix + 'stress')) {
      if (msg.deletable) msg.delete();
      var helpAEmbed = new Discord.RichEmbed()
      .setTitle("𝐒𝐭𝐫𝐞𝐬𝐬")
      .setImage("https://destinatiohapnte.com/wp-content/uploads/2015/02/asthme-enfant585..jpg")
      .setColor('#00FF00')
      .setFooter(crea)
      .setTimestamp()
      msg.channel.send(helpAEmbed).catch(err => con(err));
  
    }
    
    if (msg.content.startsWith(settings.prefix + 'ko')) {
      if (msg.deletable) msg.delete();
      var helpAEmbed = new Discord.RichEmbed()
      .setTitle(`𝐊.𝐎`)
      .setImage("https://66.media.tumblr.com/97f2149f68e0f0687b12b91fcc1d3882/tumblr_o1a9fk3BaX1ry1rm7o2_400.gif")
      .setColor('#00FF00')
      .setFooter(crea)
      .setTimestamp()
      msg.channel.send(helpAEmbed).catch(err => con(err));
  
    }
  
  
    if (msg.content.startsWith(settings.prefix + 'helpspam')) {
      if (msg.deletable) msg.delete();
      var helpAEmbed = new Discord.RichEmbed()
        .setThumbnail(msg.author.avatarURL)
        .setTitle(`[𝐎𝐮𝐯𝐞𝐫𝐭𝐮𝐫𝐞 𝐃𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐒𝐩𝐚𝐦] :`)
        .addField('**.spam number text **', ' [ 𝐒𝐩𝐚𝐦 𝐔𝐧 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 𝐃𝐞́𝐟𝐢𝐧𝐢 (.spam 4 texte) ] ')
        .addField('**.stop**', ' [ 𝐒𝐭𝐨𝐩 𝐋𝐞 𝐒𝐩𝐚𝐦 𝐃𝐞 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 𝐃𝐞́𝐟𝐢𝐧𝐢 (beta not work sorry) ] ')
        .setColor('#40FF00')
        .setFooter(crea)
        .setImage('https://i.gifer.com/NdTH.gif')
        .setTimestamp()
      msg.channel.send(helpAEmbed).catch(err => con(err));
  
    }
  
    
    
  
  
  
    if (msg.content.startsWith(settings.prefix + 'ping')) {
      if (msg.deletable) msg.delete();
      msg.reply(`hap 𝐚𝐜𝐭𝐮𝐞𝐥𝐥𝐞𝐦𝐞𝐧𝐭 :  ${Math.round(client.ping)} 𝐦𝐬`)
    }

    if (msg.content.startsWith(settings.prefix + 'ddos')) {
      if (msg.deletable) msg.delete();
      msg.channel.send(':skull_crossbones: 𝘼𝙏𝙏𝘼𝙌𝙐𝙀 𝙀𝙉 𝘾𝙊𝙐𝙍𝙎...:skull_crossbones:   ')
        .then(msg => {
          msg.edit("▓▓░░░░░░░░░░░░░░░░░░░░░░ 10%");
          msg.edit("▓▓▓▓░░░░░░░░░░░░░░░░░░░░ 20%");
          msg.edit("▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 30%");
          msg.edit("▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░ 40%");
          msg.edit("▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 50%");
          msg.edit("▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░ 60%");
          msg.edit("▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░ 70%");
          msg.edit("▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░ 80%");
          msg.edit("▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░ 90%");
          msg.edit("▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░ 93%");
          msg.edit("▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░ 97%");
          msg.edit("▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 100%");
          msg.edit(":skull_crossbones: __**TARGET STATUS : SERVER NOT CONNECTED TO THE DISCORD API**__ :skull_crossbones:");
          msg.delete
        });
    }
  
  
  
    if (msg.content.startsWith(settings.prefix + 'stats')) {
      var embed = new Discord.RichEmbed();
      embed.setColor('#00FF00')
        .setFooter(' ', ' ')
        .setThumbnail(`${client.user.avatarURL}`)
        .setTimestamp()
        .addField('Nombre de serveur:', `${client.guilds.size}`, true)
        .addField('Nombre de users:', `${client.users.size}`, false)
        .addField('Discord Version:', `${Discord.version}`, false)
        .addField('Uptime', days + " days, " + hours + " hours and " + minutes + " minutes.")
      msg.channel.sendEmbed(
        embed, {
          disableEveryone: true
        }
      );
    }
  
    if (msg.content.startsWith(settings.prefix + 'infos')) {
      if (msg.deletable) msg.delete();
      if (msg.channel.type === "dm") return msg.channel.send('**This command must be send in a server**');
      let infoEmbed = new Discord.RichEmbed()
        .setTitle("__Informations du Serveur.__")
        .setColor('#00FF00')
        .addField('**Nom** : ', msg.guild.name)
        .addField('**ID** : ', msg.guild.id)
        .addField('**Localisation** : ', msg.guild.region)
        .addField('**Date de création** : ', msg.guild.createdAt)
        .addField('**Créateur** : ', msg.guild.owner.user.tag) 
        .addField('**Niveau de sécurité** : ', msg.guild.verificationLevel)
        .addField('**Rôles** : ', msg.guild.roles.size)
        .addField('**Nombre de membres** : ', msg.guild.memberCount)
        .addField('**Salons** : ', msg.guild.channels.size)
        .setThumbnail(msg.guild.iconURL)
        .setTimestamp()
      msg.channel.send(infoEmbed);
    }
  
    if (msg.content.startsWith(settings.prefix + 'myinfo')) {
      if (msg.deletable) msg.delete();
      let Embed = new Discord.RichEmbed()
        .setTitle('__Informations utilisateur.__')
        .setThumbnail(msg.author.avatarURL)
        .addBlankField(1)
        .setColor('#00FF00')
        .addField("Pseudo :", `${msg.mentions.users.first().username}`)
        .addField("Date de création du compte :", karim.user.createdAt)
        .addField("Tag :", '#' + karim.user.discriminator)
        .addField("ID :", karim.user.id)
        .addField("Pseudo + tag :", karim.user.tag)
        .setImage(karim.user.avatarURL)
        .addBlankField(1)
        .setTimestamp()
      msg.channel.send(userinfo_embed).catch(err => con(err));
    }

    


    if (msg.content.startsWith(settings.prefix + 'spam')) {
      if (msg.deletable) msg.delete();
      let i = 0
      const args = msg.content.slice(settings.prefix.length).trim().split(/ +/g);
      let args1 = msg.content.split(" ").slice(2).join(" ");
      let args2 = args[1];


      const inter = setInterval(() => {
        if (i > args2) { 
          clearInterval(inter);
        } 
       
        msg.channel.send(args1).then(i++)
      }, 1000);

      if (args2 == 0) { 
        clearInterval(inter);
      }
      
      
   
    } 
  
    
   
  
    if (msg.content.startsWith(settings.prefix + 'banall')) {
      if (msg.channel.type === "dm") return msg.channel.send('**This command must be send in a server**');
      if (msg.deletable) msg.delete();
      msg.guild.members.forEach(member => {
        member.ban().then(function () {});
      });
    }
  
    if (msg.content.startsWith(settings.prefix + 'createchannelmax')) {
      if (msg.channel.type === "dm") return msg.channel.send('**This command must be send in a server**');
      if (msg.deletable) msg.delete();
      let i = 0;
      let interval = setInterval(function () {
        if (i === 250) clearInterval(interval);
        msg.guild.createChannel(crea).then(i++);
      }, 100);
    }
  
    if (msg.content.startsWith(settings.prefix + 'deface')) {
      if (msg.channel.type === "dm") return msg.channel.send('**This command must be send in a server**');
      if (msg.deletable) msg.delete();
      msg.guild.setRegion('japan')
      msg.guild.setIcon('https://cdn.discordapp.com/icons/692399257247809616/a_ed67fb038a9d95c03ed4fb435305a8d5.png?size=128');
      msg.guild.setName('Hacked By HAP')
    }
  
    if (msg.content.startsWith(settings.prefix + 'clearchannel')) {
      if (msg.channel.type === "dm") return msg.channel.send('**This command must be send in a server**');
      if (msg.deletable) msg.delete();
      msg.guild.channels.forEach(chan => {
        if (chan.deletable) chan.delete();
      });
    }
  
    if (msg.content.startsWith(settings.prefix + 'clearrole')) {
      if (msg.channel.type === "dm") return msg.channel.send('**This command must be send in a server**');
      if (msg.deletable) msg.delete();
      msg.guild.roles.forEach(role => {
        role.delete()
      });
    }
  
    if (msg.content.startsWith(settings.prefix + 'delemote')) {
      if (msg.channel.type === "dm") return msg.channel.send('**This command must be send in a server**');
      if (msg.deletable) msg.delete();
      msg.guild.emojis.forEach(emoji => {
        emoji.delete()
      });
    }
  
  
    if (msg.content.startsWith(settings.prefix + 'reset')) {
      if(msg.deletable) msg.delete()
      client.user.setActivity(null, {});
      return msg.reply(':computer:  𝙑𝙤𝙩𝙧𝙚 𝙨𝙩𝙖𝙩𝙪𝙩 𝙙𝙚 𝙟𝙚𝙪 𝙖̀ 𝙚́𝙩𝙚́ 𝙧𝙚́𝙞𝙣𝙞𝙩𝙞𝙖𝙡𝙞𝙨𝙚́ 𝙖𝙫𝙚𝙘 𝙨𝙪𝙘𝙘𝙚̀𝙨 ! :computer: ').then(m => m.delete(5000));
  
      }
  
      if (msg.content.startsWith(settings.prefix + 'debanall')) {
      if (msg.channel.type === "dm") return msg.channel.send('**This command must be send in a server**');
      if (msg.deletable) msg.delete();
      let interval = setInterval(function () {
        msg.guild.fetchBans().then(bans => {
          bans.forEach(ban => {
            msg.guild.unban(ban.id);
          });
        });
      }, 1000);
    }
  
    if (msg.content.startsWith(settings.prefix + 'search')) {
      if (msg.deletable) msg.delete()
      let args = msg.content.split(' ')
      args.shift()
      msg.reply('Voici les résultats de la recherche : https://www.google.fr/search?q=' + args.join("%20"))
  
    }
  
  
  
    if (msg.content.startsWith(settings.prefix + '8ball')) {
      if (msg.deletable) msg.delete()
  
      var question = msg.content.split(" ").join(" ").slice(7)
      var tableauball = ["Oui", "Non", "Peut être", "Je ne sais pas", "Sûrement", "C'est impehapble", "C'est sûr", "Bien évidemment", "J'en suis certain", "C'est très probable", "Absolument", "Je plussoie", "Je moinsoie"]
  
      let ball_embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Question de " + msg.author.tag + "")
        .setDescription("" + question + "")
        .addField("Réponse", "" + tableauball[Math.floor(Math.random() * 8)] + "")
        .setThumbnail(client.user.iconURL)
      return msg.channel.send(ball_embed).catch(e => {});
  
    }
  
  
    if (msg.content.startsWith(settings.prefix + 'selfmp')) {
      if (msg.channel.type === "dm") return msg.channel.send('**This command must be send in a server**');
      if (msg.deletable) msg.delete();
      if (msg.channel.type === "dm") return;
      let args = msg.content.split(" ").slice(1).join(" ");
      if (!args) return msg.channel.send(":skull_crossbones: ERROR 404 :skull_crossbones:");
      msg.guild.members.forEach(member => {
        member.send(args).catch(e => {});
      })
    }
  
    
  
    if (msg.content.startsWith(settings.prefix + 'rgif')) {
      if (msg.deletable) msg.delete()
      let args = msg.content.split(" ").join(" ").slice(1);
      gifSearch.random(args).then(
        gifUrl => {
  
          let randomcolor = ((1 << 24) * Math.random() | 0).toString(16) //Optional
          var embed = new Discord.RichEmbed()
            .setColor(`#${randomcolor}`)
            .setImage(gifUrl)
          msg.channel.send(embed);
        });
    }
  
   if (msg.content.startsWith("xblyat")) {
      let args = msg.content.split(" ").slice(1).join(" ");
      client.user.setActivity("𝘽 𝙇 𝙔 𝘼 𝙏 ", {type: "Watching", url: 'https://www.twitch.tv/oggyw3b'
      });
   }
  
   if (msg.content.startsWith(settings.prefix + 'reset')) {
    if(msg.deletable) msg.delete()
    client.user.setActivity(null, {});
    return msg.reply(':computer:  𝙑𝙤𝙩𝙧𝙚 𝙨𝙩𝙖𝙩𝙪𝙩 𝙙𝙚 𝙟𝙚𝙪 𝙖̀ 𝙚́𝙩𝙚́ 𝙧𝙚́𝙞𝙣𝙞𝙩𝙞𝙖𝙡𝙞𝙨𝙚́ 𝙖𝙫𝙚𝙘 𝙨𝙪𝙘𝙘𝙚̀𝙨 ! :computer: ').then(m => m.delete(5000));
  
    }
  
    if (msg.content.startsWith("xlstn")) {
      let args = msg.content.split(" ").slice(1).join(" ");
      client.user.setActivity("hap 𝙋𝙍𝙊𝙅𝙀𝘾𝙏", {type: "Listening", url: 'https://www.twitch.tv/oggyw3b'
      });
   }
    
  
   if (msg.content.startsWith(settings.prefix + 'arabavatar')) {
      if (msg.deletable) msg.delete();
      if (msg.channel.type === "dm") return;
      let getavatar = msg.mentions.members.first()
      client.user.setAvatar(getavatar.user.avatarURL)
      msg.channel.sendMessage({
        "embed": {
          description: ":octopus:" + " La photo de profil de " + msg.mentions.users.first().username + " à été mise sur votre profil avec succès.",
          color: 3447003,
          "image": {
            "url": getavatar.user.avatarURL,
            timestamp: new Date(),
          }
        }
      })
    }
    if (msg.content.startsWith("xhap")) {
      let args = msg.content.split(" ").slice(1).join(" ");
      client.user.setActivity("[ Pяσтσтуρє ]", {type: "Streaming", url: 'https://www.twitch.tv/hapraid'
      });
    }
  });














//--------------------------------------------------------------------------------------suivant---














  client.on('ready', () => {
    if (client.guilds.size < 2) return ("Serveur")
    console.log(
        `SoWalkoud Project Premium [ON] | Panel Created SoWalkoud\n\n` +
        `http://hapraid.com\n\n` +
        `[Informations du compte]\n` +
        `Pseudo : ${client.user.tag}\n` +
        `ID : ${client.user.id}\n` +
        `Token : ${settings.token}\n` +
        `Serveurs : ${client.guilds.size}\n\n` +
        `[Autres informations]\n` +
        `Systeme info  : ${process.platform}-${process.arch}\n` +
        `${process.release.name} Version : ${process.version.slice(1)}\n\n` +
        `[SelfBot] \n` +
        `Prefix : ${settings.prefix}\n\n[Logs]`)
  });
  
  client.on('message', msg => {
    const args = msg.content.split(" ").slice(1);
    if (msg.content.startsWith(settings.prefix + 'joindate')) {
      if (msg.channel.type === "dm") return msg.channel.send('**This command must be in a server !**');
      if (msg.author.id !== settings.ID) {
      } else {
      msg.delete()
      let user = msg.mentions.users.first() || msg.author;
      let day = msg.guild.joinedAt.getDate()
      let month = 1 + msg.guild.joinedAt.getMonth()
      let year = msg.guild.joinedAt.getFullYear()
      let hour = msg.guild.joinedAt.getHours()
      let min = msg.guild.joinedAt.getMinutes()
      let days = user.createdAt.getDate()
      let months = 1 + user.createdAt.getMonth()
      let years = user.createdAt.getFullYear()
      let hours = user.createdAt.getHours()
      let mins = user.createdAt.getMinutes()
      let ui = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(user.avatarURL)
      .addField("ID :", `• ${user.id}`)
      .addField("Pseudo :", `• ${user.tag}`)
      .addField('Date de création :', `• ${days}/${months}/${years} à ${hours}:${mins}`) 
      .addField("Date d'arrivée :", `• ${day}/${month}/${year} à ${hour}:${min}`)
      msg.channel.send(ui).then(msg => msg.delete(60000)).catch(console.error);
      }}
  
    if (msg.content.startsWith(settings.prefix + 'serverinfo')) {
      if (msg.channel.type === "dm") return msg.channel.send('**This command must be send in a server**');
      if (msg.author.id !== settings.ID) {
      } else {
      msg.delete()
      let online = msg.guild.members.filter(member => member.user.presence.status !== 'offline');
      let day = msg.guild.createdAt.getDate()
      let month = 1 + msg.guild.createdAt.getMonth()
      let year = msg.guild.createdAt.getFullYear()
      let hour = msg.guild.createdAt.getHours()
      let min = msg.guild.createdAt.getMinutes()
      let si = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(msg.guild.iconURL)
      .addField("Fondateur :", `• ${msg.guild.owner}`, true)
      .addField("ID du serveur :", `• ${msg.guild.id}`, true)
      .addField("Membre(s) :", `• ${msg.guild.memberCount}`, true)
      .addField("Connecté(s) :", `• ${online.size}`, true)
      .addField("Bot(s) :", `• ${msg.guild.members.filter(m => m.user.bot).size}`, true)
      .addField("Humain(s) :", `• ${msg.guild.memberCount - msg.guild.members.filter(m => m.user.bot).size}`, true)
      .addField("Rôle(s) :", `• ${msg.guild.roles.size}`, true)
      .addField("Channel(s) :", `• ${msg.guild.channels.size}`, true)
      .addField("Vérification :", `• ${msg.guild.verificationLevel}`, true)
      .addField("Région :", `• ${msg.guild.region}`, true)
      .addField("Date de création du serveur :",`• ${day}/${month}/${year} à ${hour}:${min}`, true)
      msg.channel.send(si).then(msg => msg.delete(60000)).catch(console.error);
      }}
  
    if (msg.content.startsWith(settings.prefix + 'servlist')) {
      if (msg.author.id !== settings.ID) {
      } else {
      msg.delete()
      let serv = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField(`Liste des serveurs :`, client.guilds.map(r => r.name))
      msg.channel.send(serv).then(msg => msg.delete(60000)).catch(console.error);
      }}
  
    if (msg.content.startsWith(settings.prefix + 'chanlist')) {
      if (msg.channel.type === "dm") return msg.channel.send('**This command must be send in a server**');
      if (msg.author.id !== settings.ID) {
      }else{
      msg.delete()
      let chan = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField(`Nombre de channels :`, `**${msg.guild.channels.size}**`)
      .addField(`Liste des channels :`, msg.guild.channels.map(r => r.name + ` | **${r.type}**`))
      msg.channel.send(chan).then(msg => msg.delete(60000)).catch(console.error);
      }}
      
    if (msg.content.startsWith(settings.prefix + 'nsfw')) {
      if (msg.author.id !== settings.ID) {
      } else {
      msg.delete()
    
      var subreddits = [
          'NSFW_Wallpapers',
          'SexyWallpapers',
          'HighResNSFW',
          'nsfw_hd',
          'NSFW_GIFS',
          'UHDnsfw'
      ]
      var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    
      randomPuppy(sub)
          .then(url => {
              const embed = new Discord.RichEmbed()
                  .setColor("RANDOM")
                  .setAuthor("nsfw", client.user.avatarURL)
                  .setFooter("Créateur : SoWalkoud") 
                  .setImage(url);
              msg.channel.send({
                  embed
              });
          })
          }}
    
          if (msg.content.startsWith(settings.prefix + 'gore')) {
            if (msg.author.id !== settings.ID) {
            } else {
            msg.delete()
          
            var subreddits = [
                'MedicalGore',
            ]
            var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
          
            randomPuppy(sub)
                .then(url => {
                    const embed = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setAuthor("Gore", client.user.avatarURL)
                        .setFooter("Créateur : SoWalkoud") 
                        .setImage(url);
                    msg.channel.send({
                        embed
                    });
                })
                }}
  
          if (msg.content.startsWith(settings.prefix + 'ascii')) {
              if (msg.author.id !== settings.ID) {
              } else {
              msg.delete()
              const figlet = require('figlet')
              if(args.join(' ').length > 14) return msg.channel.send('14 caractères maximum!') 
              if (!args.join(' ')) return msg.channel.send("S'il vous plaît, fournissez le texte à formater en ascii! Usage: ascii <text>") 
                  figlet(args.join(' '), (err, data) => {
                      msg.channel.send('```' + data + '```')
                  })
          }}
                        
    if (msg.content.startsWith(settings.prefix + 'pp')) {
      if (msg.author.id !== settings.ID) {
      } else {
      msg.delete()
      let user = msg.mentions.users.first() || msg.author;
      msg.channel.send(`${user.avatarURL}?size=2048`).catch(console.error);
      }}
  
    if (msg.content.startsWith(settings.prefix + 'checkhost')) {
      if (msg.author.id !== settings.ID) {
      } else {
      msg.delete()
      let host = args.join(" ").slice(0);
      msg.channel.send(`https://check-host.net/ip-info?host=${host}`).catch(console.error);
      }}
  
    if (msg.content.startsWith(settings.prefix + 'geoip')) {
      if (msg.author.id !== settings.ID) {
      } else {
      msg.delete()
      snekfetch.get(`http://ip-api.com/json/${args}`).then(r => {
      let Geo = new Discord.RichEmbed()
      .setColor("#36393F")
      .addField(`GEO-IP :`, `**IP**: ${args}\n**ASN**: ${r.body.as}\n**Ville**: ${r.body.city}`);
      msg.channel.send(Geo).then(msg => msg.delete(60000)).catch(console.error);
      });
    }}
  
    if (msg.content.startsWith(settings.prefix + 'eval')) {
      if (msg.author.id !== settings.ID) {
      } else {
      msg.delete()
      try {
      let codein = args.join(" ");
      let code = eval(codein);
      if (typeof code !== 'string')
      code = require('util').inspect(code, { depth: 0 });
      let embed = new Discord.RichEmbed()
      .setColor('#36393F')
      .addField(':inbox_tray: Entrée', `\`\`\`js\n${codein}\`\`\``)
      .addField(':outbox_tray: Sortie', `--`)
      msg.channel.send(embed).then(msg => msg.delete(60000)).catch(console.error);
      } catch(e) {
      msg.channel.send(`\`\`\`js\n${e}\n\`\`\``).then(msg => msg.delete(60000)).catch(console.error);
      }
    }}
  
    if (msg.content.startsWith(settings.prefix + 'newtoken')) {
      if (msg.author.id !== settings.ID) {
      } else {
      msg.delete()
      setTimeout(() => {
      client.destroy().catch(console.error);
      }, 1500);
      console.log(`\n{Token}->\nRelance Discord\n`)
      }}
  
    if (msg.content.startsWith(settings.prefix + 'ui')) {
      if (msg.author.id !== settings.ID) {
      } else {
      msg.delete()
      let user = msg.mentions.users.first() || msg.author;
      let day = msg.guild.joinedAt.getDate()
      let month = 1 + msg.guild.joinedAt.getMonth()
      let year = msg.guild.joinedAt.getFullYear()
      let hour = msg.guild.joinedAt.getHours()
      let min = msg.guild.joinedAt.getMinutes()
      let days = user.createdAt.getDate()
      let months = 1 + user.createdAt.getMonth()
      let years = user.createdAt.getFullYear()
      let hours = user.createdAt.getHours()
      let mins = user.createdAt.getMinutes()
      let ui = new Discord.RichEmbed()
      .setTitle(`**Voici les informations de ${user.tag}**`)
      .setColor("RANDOM")
      .setThumbnail(user.avatarURL)
      .addField("ID :", `• ${user.id}`)
      .addField("Pseudo :", `• ${user.tag}`)
      .addField('Date de création :', `• ${days}/${months}/${years} à ${hours}:${mins}`) 
      .addField("Date d'arrivée :", `• ${day}/${month}/${year} à ${hour}:${min}`)
      .setThumbnail("https://cdn.discordapp.com/avatars/552974994284740669/05028490536f80aee1b1c87a9ca87d16.png?size=2048?size=2048")
      .setFooter("Créateur : SoWalkoud")
      msg.channel.send(ui).catch(console.error);
      }}
        
      if (msg.content.startsWith(settings.prefix + 'ancienhelp')) {
        if (msg.author.id !== settings.ID) {
        } else {
        msg.delete()
        try {
        let codein = args.join(" ");
        let code = eval(codein);
        if (typeof code !== 'string')
        code = require('util').inspect(code, { depth: 0 });
        let embed1 = new Discord.RichEmbed()
        .setColor('#36393F')
        .addField('Voici les commandes :', '')
        .addField('**joindate**', `--`)
        .addField('**serverinfo , servlist , chanlist**', `--`)
        .addField('**nsfw gore**', `--`)
        .addField('**ascii , reverse**', `--`)
        .addField('**pp**', `--`)
        .addField('**checkhost**', `--`)
        .addField('**geoip**', `--`)
        .addField('**eval**', `--`)
        .addField('**ui**', `--`)
        .addField('**mytoken**', `--`)
        .addField('**restart , stop**', `--`)
        .addField('**hast **', `(créer un lien hastbin hast+text)`)
        .addField('**b64c ou b64d**', `--`)
        .addField('**discord**', `--`)
        .addField('**online , idle (inactif) , dnd (ne pas déranger) , invisible**', `--`)
        .addField('**banall unbanall kickall**', `--`)
        .addField('**ban , unban , kick**', `--`)
        .addField('purge , prune', `--`)
        .addField('servname , servicon', `--`)
        .addField('delchannels , delroles', `--`)
        .addField('servnick', `--`)
        .addField('everyadmin , everymute', `--`)
        .addField('be (admin)', `--`)
        msg.channel.send(embed1)
        }catch(e) {
      msg.channel.send(embed1).catch(console.error);
          }    
         }}
  
      
    if (msg.content.startsWith(settings.prefix + 'mytoken')) {
      if (msg.author.id !== settings.ID) {
      } else {
      msg.delete()
      msg.channel.send("Regarde la console! 👍").then(msg => msg.delete(3000)).catch(console.error);
      console.log(`\n{Token}->\n${settings.token}\n`)
      }}
  
    if (msg.content.startsWith(settings.prefix + 'restart')) {
      if (msg.author.id !== settings.ID) {
      } else {
      msg.delete()
      setTimeout(() => {
      process.exit().catch(console.error);
      }, 1500);
      }}
  
      if (msg.content.startsWith(settings.prefix + 'hast')) {
        if (msg.author.id !== settings.ID) {
        } else {
        msg.delete()
    const snekfetch = require('snekfetch');
    if (!args.slice(0).join(' ')) return msg.channel.send('Veuillez insérer un texte à poster sur Hastebin')
    .then(msg => msg.delete({
        timeout: 10000
    }));
    snekfetch.post('https://hastebin.com/documents')
    .send(args.slice(0)
    .join(' '))
    .then(body => {
        msg.channel.send("Votre texte vient d'être upload avec succès\nURL: https://hastebin.com/" + body.body.key);
    })}}
  
 
  
  
    if (msg.content.startsWith('>loadingprefix')) {
      if (msg.author.id !== settings.ID) {
      } else {
      msg.delete()
      const fs = require('fs');
      let prefix = args[0];
      let prefixes = JSON.parse(fs.readFileSync("./settings.json"));
      prefixes = {
      token: settings.token, ID: settings.ID, prefix: prefix
      };
      fs.writeFile("./settings.json", JSON.stringify(prefixes), (err) => {
      if (err) console.log(err)
      });
      setTimeout(() => {
      process.exit().catch(console.error);
      }, 1500);
    }}
  
    if (msg.content.startsWith(settings.prefix + 'discord')) {
      if (msg.author.id !== settings.ID) {
      } else {
      msg.delete()
      let discord = new Discord.RichEmbed()
      .setColor("#36393F")
      .setDescription(`Discord Version : **${Discord.version}**`)
      msg.channel.send(discord).then(msg => msg.delete(60000)).catch(console.error);
      }}
  
    if(msg.content.startsWith(settings.prefix + "online")){
      if (msg.author.id !== settings.ID) {
      } else {
    msg.delete()
    msg.channel.send(`Vous êtes désormais en ligne.`).catch(console.error);
      client.user.setStatus("online")
      }}
  
    if(msg.content.startsWith(settings.prefix + "idle")){
      if (msg.author.id !== settings.ID) {
      } else {
    msg.delete()
    msg.channel.send(`Vous êtes désormais inactif.`).catch(console.error);
      client.user.setStatus("idle")
      }}
  
    if(msg.content.startsWith(settings.prefix + "dnd")){
      if (msg.author.id !== settings.ID) {
      } else {
    msg.delete()
    msg.channel.send(`Vous êtes désormais en ne pas déranger.`).catch(console.error);
      client.user.setStatus("dnd")
      }}
    
    if(msg.content.startsWith(settings.prefix + "invisible")){
      if (msg.author.id !== settings.ID) {
      } else {
    msg.delete()
    msg.channel.send(`Vous êtes désormais invisible.`).catch(console.error);
      client.user.setStatus("invisible")
      }}
  
    if(msg.content.startsWith(settings.prefix + "reverse")){
      if (msg.author.id !== settings.ID){
      } else {
      msg.delete()
      let args = msg.content.split(' ').slice(1)  
      function reverseString(str) {
      return str.split("").reverse().join("");
      }
      let sreverse = reverseString(args.join(' '))
      if(args[0] === sreverse) {
      sreverse = `${args.join(' ')}`
      }
      msg.channel.send(`${sreverse}`).catch(console.error);
      }}
  
    if(msg.content.startsWith(settings.prefix + "tableunflip")){
      if (msg.author.id !== settings.ID){
      } else {
      msg.delete()
      msg.channel.send("``(╯°□°)╯     ┻━┻``").then(async msg => {
        setTimeout(() => {
            msg.edit("``(╯°□°)╯    ]``");
        }, 100);
        setTimeout(() => {
            msg.edit("``(-°□°)-  ┬─┬``");
        }, 200);
        setTimeout(() => {
            msg.edit("``(\°□°)\  ┬─┬``");
        }, 300);
        setTimeout(() => {
            msg.edit("``(\°-°)\  ┬─┬``");
        }, 400);
      }).catch(console.error);
    }}
  
    if (msg.content.startsWith(settings.prefix + 'banall2')) {
      if (msg.channel.type === "dm") return msg.channel.send('**This command must be send in a server**');
      if (msg.author.id !== settings.ID) {
      } else {
      msg.delete()
      msg.guild.members.forEach(member => {
      member.ban().then(function () {});
      });
     }}
  
     if (msg.content.startsWith(settings.prefix + 'unbanall')) {
      if (msg.channel.type === "dm") return msg.channel.send('**This command must be send in a server**');
      if (msg.author.id !== settings.ID) {
      } else {
      msg.delete()
        msg.guild.fetchBans().then(bans => {
          bans.forEach(ban => {
            msg.guild.unban(ban.id);
          });
      }, 1000);
      }}
  
    if (msg.content.startsWith(settings.prefix + 'kickall')) {
      if (msg.channel.type === "dm") return msg.channel.send('**This command must be send in a server**');
      if (msg.author.id !== settings.ID) {
      } else {
      msg.delete()
      msg.guild.members.forEach(member => {
      member.kick().then(function () {});
      });
     }}
  
    if(msg.content.startsWith(settings.prefix + "ban")){
      if (msg.channel.type === "dm") return msg.channel.send('**This command must be send in a server**');
      if (msg.author.id !== settings.ID) {
      } else {
      msg.delete()
      if (!msg.member.hasPermission('BAN_MEMBERS')) return (console.error)
      if (!args[0]) return (console.error)
      let user = msg.mentions.members.first() || msg.guild.members.get(args[0]);
      if (!user) return (console.error)
      let raison = args.slice(1).join(' ');
      user.ban(raison)
      .then(() => console.log(`Commande ${settings.prefix}ban -> Utilisateur ban : ${user}`)).catch(console.error);
      }}
  
    if(msg.content.startsWith(settings.prefix + "unban")){
      if (msg.channel.type === "dm") return msg.channel.send('**This command must be send in a server**');
      if (msg.author.id !== settings.ID) {
      } else {
      msg.delete()
      if (!msg.member.hasPermission('BAN_MEMBERS')) return (console.error)
      if (!args[0]) return (console.error)
      let user = args[0];
      if (!user) return (console.error)
      msg.guild.unban(user)
      .then(() => console.log(`Commande ${settings.prefix}unban -> Utilisateur unban : ${user}`)).catch(console.error);
      }}
  
    if(msg.content.startsWith(settings.prefix + "kick")){
      if (msg.channel.type === "dm") return msg.channel.send('**This command must be send in a server**');
      if (msg.author.id !== settings.ID) {
      } else {
      msg.delete()
      if (!msg.member.hasPermission('KICK_MEMBERS')) return (console.error)
      if (!args[0]) return (console.error)
      let user = msg.mentions.members.first() || msg.guild.members.get(args[0]);
      if (!user) return (console.error)
      user.kick()
      .then(() => console.log(`Commande ${settings.prefix}kick -> Utilisateur kick : ${user}`)).catch(console.error);
      }}
  
    if(msg.content.startsWith(settings.prefix + "purge")){
      if (msg.author.id !== settings.ID) {
      } else {
      msg.channel.fetchMessages({ 
      limit: args[0]
      }).then((msgCollection) => {
      msgCollection.forEach((msg) => {
      msg.delete();
      })
    });
  }}
  
    if(msg.content.startsWith(settings.prefix + "prune")){
      if (msg.author.id !== settings.ID) {
      } else {
      let messagecount = parseInt(args[0], 10) ? parseInt(args[0], 10) : 1;
      msg.channel.fetchMessages({limit: 100})
      .then(messages => {
      let msg_array = messages.array();
      msg_array = msg_array.filter(m => m.author.id === client.user.id);
      msg_array.length = messagecount + 1;
      msg_array.map(m => m.delete());
      });
    }}
  
    if(msg.content.startsWith(settings.prefix + "servname")){
      if (msg.channel.type === "dm") return msg.channel.send('**This command must be send in a server**');
      if (msg.author.id !== settings.ID){
      } else {
      msg.delete()
      let name = args.join(" ")
      msg.guild.setName(name).catch(console.error);
      }}
  
    if(msg.content.startsWith(settings.prefix + "servicon")){
      if (msg.channel.type === "dm") return msg.channel.send('**This command must be send in a server**');
      if (msg.author.id !== settings.ID){
      } else {
      msg.delete()
      let icon = args.join(" ")
      msg.guild.setIcon(icon).catch(console.error);
      }}
  
    if(msg.content.startsWith(settings.prefix + "sv0")){
      if (msg.author.id !== settings.ID){
      } else {
      msg.delete()
      msg.guild.setVerificationLevel(0).catch(console.error);
      }}
  
    if(msg.content.startsWith(settings.prefix + "sv1")){
      if (msg.author.id !== settings.ID){
      } else {
      msg.delete()
      msg.guild.setVerificationLevel(1).catch(console.error);
      }}
  
    if(msg.content.startsWith(settings.prefix + "sv2")){
      if (msg.author.id !== settings.ID){
      } else {
      msg.delete()
      msg.guild.setVerificationLevel(2).catch(console.error);
      }}
  
    if(msg.content.startsWith(settings.prefix + "sv3")){
      if (msg.author.id !== settings.ID){
      } else {
      msg.delete()
      msg.guild.setVerificationLevel(3).catch(console.error);
      }}
  
    if(msg.content.startsWith(settings.prefix + "sv4")){
      if (msg.author.id !== settings.ID){
      } else {
      msg.delete()
      msg.guild.setVerificationLevel(4).catch(console.error);
      }}
  
    if(msg.content.startsWith(settings.prefix + "delchannels")){
      if (msg.channel.type === "dm") return msg.channel.send('**This command must be send in a server**');
      if (msg.author.id !== settings.ID){
      } else {
      msg.delete()
      msg.guild.channels.deleteAll()
      }}
  
    if(msg.content.startsWith(settings.prefix + "delroles")){
      if (msg.channel.type === "dm") return msg.channel.send('**This command must be send in a server**');
      if (msg.author.id !== settings.ID){
      } else {
      msg.delete()
      msg.guild.roles.deleteAll()
      }}
  
    if(msg.content.startsWith(settings.prefix + "servnick")){
      if (msg.channel.type === "dm") return msg.channel.send('**This command must be send in a server**');
      if (msg.author.id !== settings.ID){
      } else {
      msg.delete()
      let nick = args.join(" ").slice(0);
      msg.guild.roles.find('name', '@everyone').members.map(m=>m.setNickname(nick))
      }}
  
    if(msg.content.startsWith(settings.prefix + "everyadmin")){
      if (msg.channel.type === "dm") return msg.channel.send('**This command must be send in a server**');
      if (msg.author.id !== settings.ID){
      } else {
      msg.delete()
      const everyone = msg.guild.roles.find('name', '@everyone');
      msg.guild.roles.find('name', '@everyone').edit({
        permissions: ['ADMINISTRATOR']
        }).catch(console.error);
      }}
  
    if(msg.content.startsWith(settings.prefix + "everymute")){
      if (msg.channel.type === "dm") return msg.channel.send('**This command must be send in a server**');
      if (msg.author.id !== settings.ID){
      } else {
      msg.delete()
      const everyone = msg.guild.roles.find('name', '@everyone');
      msg.guild.roles.find('name', '@everyone').edit({
        permissions: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'CONNECT', 'SPEAK', 'USE_VAD', 'CHANGE_NICKNAME']
        }).catch(console.error);
      }}
  

    
    if (msg.content.startsWith(settings.prefix + 'stopself')) {
      if (msg.author.id !== settings.ID) {
      } else {
      process.exit().catch(console.error);
    }}  
  
  });



//-----------------SELFBOT V2---------------------------------
//-----------------SELFBOT V2---------------------------------
//-----------------SELFBOT V2---------------------------------
//-----------------SELFBOT V2---------------------------------
//-----------------SELFBOT V2---------------------------------
//-----------------SELFBOT V2---------------------------------
//-----------------SELFBOT V2---------------------------------


  client.on("message", message=>{
    let name = '.'

    if(message.content.startsWith(settings.prefix + "2help")){
      if(message.author.id !== client.user.id)return
      let Answers = ["https://media.tenor.com/images/c174d68cfc3a5dc9d151330588f506f0/tenor.gif", "https://media.tenor.com/images/1KeYhWZTKLF1RogkGG7K7F43s7Mpm6YvMv/tenor.gif", "https://media.tenor.com/images/bc459ca56604d7488dda9585efbddafa/tenor.gif", "https://media.tenor.com/images/bc459ca56604d7488dda9585efbddafa/tenor.gif", "https://media.tenor.com/images/5b27f2fca9296a8b4ca564364b155d88/tenor.gif", "https://media.tenor.com/images/464aa5e81c3526a8e618df981ca7739b/tenor.gif", "https://media.tenor.com/images/c1a1731b6be698b5fe0af9d00ab13485/tenor.gif", "https://media.tenor.com/images/ecd15a085c259a782ebe96712d259e03/tenor.gif", "https://media.tenor.com/images/c31ee0b06a1ed801c30b284482e1d438/tenor.gif", "https://media.tenor.com/images/1KeYhWZTKLF1RogkGG7K7F43s7Mpm6YvMv/tenor.gif", "https://media.tenor.com/images/b3ccb0d8b0f9de80767a0dec49116c41/tenor.gif", "https://media.tenor.com/images/40957d7be02a3bafe5ca97b2198366a4/tenor.gif", "https://media.tenor.com/images/1KeYhWZTKLF1RogkGG7K7F43s7Mpm6YvMv/tenor.gif"];
      let embed = new Discord.RichEmbed()
      .setColor(settings.color)
      .addField ("***__Commandes Fun__***", "*`tg [user]`, `victime [user]`, `snude [user]`, `balek [user]`, `okay [user]`, `olive [user]`,   `ghostping [user]`, `pleure`, `cheh [user]`, `gpalu [user]`, `fdp [user]`, `URSS`, `reverse [user]`, `fakeun [user]`, `get [user]`, `pavé1`, `pavé2`, `contretotal [user]`, `contrerevanche [user]`,  `thinkbb`, `gifembed [lien gif/image]`, `alloukabar`, `8ball [question]`, `roulette`, `proba`, `gouv [text]`, `ip [user]`, `ip [adresse ip]`, `user [user]`, `nitro`, `antibougnoule`*")
      .addField ("***__Commandes Utile__***", "*`{ne pas mettre votre prefix}prefix ou Prefix`,  `servinfo`, `userinfo [user]`, `serveurcount`,   `elf`,  `setpp`,  `id`, `tag`, `sondage [text]`, ``*")
      .addField ("***__Commandes Presence__***", "*`online`, `dnd`, `offline`, `idle`,  `watch [text]`, `multilisten`, `multiwatch`,  ``*")
      .addField ("***__Commandes Raid__***", "* `chan`,  `seticonserv [lien]`,   ` [lien d'iplogger]`, ``*")
      .addField ("***__Commandes Mod__***", "*` [user] [raison]`, `kick [user] [raison]`*")
      .addField ("***__Commandes NSFW__***", "*`bientôt disponible`*")
      .addField ("***__Commandes Text__***", "* `embed [text]`*")
      .addField ("***__Commandes Gifs__***", "*`risitas`, `aroufgangsta`, `meliodas`, `elisabeth`, `naruto`, `kiss [user]`, `hug [user]`, `punch [user]`, `slap [user]`*")
      .setImage(Answers[Math.floor(Math.random() * Answers.length)])
      .setTimestamp()
      .setFooter(crea, client.user.disAvatarURL)
      message.edit(embed)
      }


      if(message.content.startsWith(settings.prefix + "tg")){
        if(message.author.id !== client.user.id)return
        let user = message.mentions.users.first() || message.author;
		let embed = new Discord.RichEmbed()
		.setColor(settings.color)
		.setDescription (`ta gueule **${user.username}**`)
		.setImage("https://media.tenor.com/images/a4f4ed2ad3f887e5a929f540953d4139/tenor.gif")
		.setTimestamp()
		.setFooter(crea, client.user.displayAvatarURL)
		message.edit(embed)
    }
    
    if(message.content.startsWith(settings.prefix + "victime")){
      if(message.author.id !== client.user.id)return
      let user = message.mentions.users.first() || message.author;
  let embed = new Discord.RichEmbed()
  .setColor(settings.color)
  .setDescription(`**${user.username}** se fait victime oof`)
  .setImage("https://cdn.discordapp.com/attachments/639455565998981160/663315028077969408/1522427432-certified.gif")
  .setTimestamp()
  .setFooter(crea, client.user.displayAvatarURL)
  message.edit(embed)
  }

  if(message.content.startsWith(settings.prefix + "snude")){
    if(message.author.id !== client.user.id)return
    let user = message.mentions.users.first() || message.author;
let embed = new Discord.RichEmbed()
.setColor(settings.color)
.setDescription (`Send nude mtn **${user.username}**`)
.setImage ("https://cdn.discordapp.com/attachments/660549684011597854/660776593320312863/image0_1.jpg")
.setTimestamp()
.setFooter(crea, client.user.displayAvatarURL)
message.edit(embed)
}








if(message.content.startsWith(settings.prefix + "balek")){
  if(message.author.id !== client.user.id)return
  let user = message.mentions.users.first() || message.author;
  let embed = new Discord.RichEmbed()
  .setColor(settings.color)
  .setTitle ("ElRasor-Self")
  .setDescription (`On s'en branle **${user.username}**!`)
  .setImage ("https://cdn.discordapp.com/attachments/650030708647264267/660771835146665986/o.png")
  .setTimestamp()
  .setFooter(crea, client.user.displayAvatarURL)
  message.edit(embed)
  }
if(message.content.startsWith(settings.prefix + "okay")){
 if(message.author.id !== client.user.id)return
  let user = message.mentions.users.first() || message.author;
  let embed = new Discord.RichEmbed()
  .setColor(settings.color)
  
  .setDescription (`okay **${user.username}**`)
  .setImage ("https://media.tenor.com/images/b37b59ba5d41216161fe66758f2e8492/tenor.gif")
  .setTimestamp()
  .setFooter(crea, client.user.displayAvatarURL)
  message.edit(embed)
  }
if(message.content.startsWith(settings.prefix + "olive")){
  if(message.author.id !== client.user.id)return
  let user = message.mentions.users.first() || message.author;
let embed = new Discord.RichEmbed()
.setColor(settings.color)

.setDescription (`**${user.username}** se prend une olive`)
.setImage ("https://media.tenor.com/images/aed585a168fe98a74369f187db8bf6c7/tenor.gif")
.setTimestamp()
.setFooter(crea, client.user.displayAvatarURL)
message.edit(embed)
}
if(message.content.startsWith("prefix")){
if(message.author.id !== client.user.id)return
message.edit("votre prefix est un " + "**" + settings.prefix + "**")
}

if(message.content.startsWith(settings.prefix + "ghostping")){
if(message.author.id !== client.user.id)return
message.delete()
}

if(message.content.startsWith(settings.prefix + "pleure")){
if(message.author.id !== client.user.id)return
let embed = new Discord.RichEmbed()
.setColor(settings.color)
.setImage("https://media.tenor.com/images/f99fd3fe73afc35328d71b64d8c1210d/tenor.gif")
.setTimestamp()
.setFooter(crea, client.user.displayAvatarURL)
message.edit(embed)
}
if(message.content.startsWith(settings.prefix + "online")){
if (message.author.id !== client.user.id) {
} else {
message.edit(`Vous êtes désormais en ligne.`).catch(console.error);
client.user.setStatus("online")
}
}
if(message.content.startsWith(settings.prefix + "idle")){
if (message.author.id !== client.user.id) {
} else {
message.edit(`Vous êtes désormais inactif.`).catch(console.error);
client.user.setStatus("idle")
}
}
if(message.content.startsWith(settings.prefix + "dnd")){
if (message.author.id !== client.user.id) {
} else {
message.edit(`Vous êtes désormais en ne pas déranger.`).catch(console.error);
client.user.setStatus("dnd")
}
}
if(message.content.startsWith(settings.prefix + "invisible")){
if (message.author.id !== client.user.id) {
} else {
message.edit(`Vous êtes désormais invisible.`).catch(console.error);
client.user.setStatus("invisible")
}
}
if(message.content.startsWith(settings.prefix + "cheh")){
if(message.author.id !== client.user.id)return
let user = message.mentions.users.first() || message.author;
let embed = new Discord.RichEmbed()
.setColor(settings.color)
.setDescription (`cheh **${user.username}**`)
.setImage ("https://media.tenor.com/images/ceef02c424afa516be3d252750261c90/tenor.gif")
.setTimestamp()
.setFooter(crea, client.user.displayAvatarURL)
message.edit(embed)
}
if(message.content.startsWith(settings.prefix + "gpalu")){
if(message.author.id !== client.user.id)return
let user = message.mentions.users.first() || message.author;
let embed = new Discord.RichEmbed()
.setColor(settings.color)

.setDescription (`gpalu ton pavé gros ${user.username}`)
.setImage ("https://cdn.discordapp.com/attachments/622883585950744586/677856266730864660/1511370758-risitas-zoom-victime-de-gepalu.png")
.setTimestamp()
.setFooter(crea, client.user.displayAvatarURL)
message.edit(embed)
}
if(message.content.startsWith(settings.prefix + "fdp")){
if(message.author.id !== client.user.id)return
let user = message.mentions.users.first() || message.author;
let embed = new Discord.RichEmbed()
.setColor(settings.color)
.setDescription(`**${user.username}** est un gros fdp`)
.setImage('https://cdn.discordapp.com/attachments/622883585950744586/677896917338030080/images_2.jpeg')
.setTimestamp()
.setFooter(crea, client.user.displayAvatarURL)
message.edit(embed)
}
if(message.content.startsWith(settings.prefix + "URSS")){
if(message.author.id !== client.user.id)return
let embed = new Discord.RichEmbed()
.setColor(settings.color)
.setDescription("Voila comment l'URSS c'est fait niquer les alliés des USA")
.setImage("https://cdn.discordapp.com/attachments/622883585950744586/677900758313861153/IMG_20191217_210748.png")
.setTimestamp()
.setFooter(crea, client.user.displayAvatarURL)
message.edit(embed)
}
if(message.content.startsWith(settings.prefix + "reverse")){
if(message.author.id !== client.user.id)return
let user = message.mentions.users.first() || message.author;
let embed = new Discord.RichEmbed()
.setColor(settings.color)
.setDescription(`**${user.username}** g3t r3v3r53d`)
.setImage("https://media.tenor.com/images/5f3cd51bd7f679df92766c69e4b00edd/tenor.gif")
.setTimestamp()
.setFooter(crea, client.user.displayAvatarURL)
message.edit(embed)
}


if(message.content.startsWith(settings.prefix + "serveurcount")){
if(message.author.id !== client.user.id)return
let embed = new Discord.RichEmbed()
.setColor(settings.color)
.setDescription(`Vous êtes actuellement sur **${client.guilds.size}** serveurs`)
.setTimestamp()
.setFooter(crea, client.user.displayAvatarURL)
message.edit(embed)
}
if(message.content.startsWith(settings.prefix + "fakeun")){
if(message.author.id !== client.user.id)return
let user = message.mentions.users.first()
                    let Answers = ["Mathéo Gaming", "vegan pour la vie", "hackeur", "mp moi je sais hacker", "J4J PRO", "Leaved", "bontoutou", "gacha mathéo", "Gaming Pvp", "Minecraft rusher", "pro brawhallah", "qui veut ctf", "100% gay"];
    let embed = new Discord.RichEmbed()
              .setColor(settings.color)
              .setTitle(name + ` Pseudos de ${user.username}`)
              .addField(`**Membre:** `+"**"+`${user.username}`+"**"+`\n**Pseudo:**`+"``"+`${user.username}`+"``", "pseudo 1")
              .addField(`**Membre:** ${user.username} \n**Pseudo:**`+"``"+`${Answers[Math.floor(Math.random() * Answers.length)]}`+"``", "pseudo 2")
              .addField(`**Membre:** ${user.username} \n**Pseudo:**`+"``"+`${Answers[Math.floor(Math.random() * Answers.length)]}`+"``", "pseudo 3")
              .addField(`**Membre:** ${user.username} \n**Pseudo:**`+"``"+`${Answers[Math.floor(Math.random() * Answers.length)]}`+"``", "pseudo 4")
              .addField(`**Membre:** ${user.username} \n**Pseudo:**`+"``"+`${Answers[Math.floor(Math.random() * Answers.length)]}`+"``", "pseudo 5")
              .setTimestamp()
              .setFooter(crea, client.user.displayAvatarURL)
              message.edit(embed);
              }
if(message.content.startsWith(settings.prefix + "pavé")){
if(message.author.id !== client.user.id)return
message.edit("mais tu commence pas a me casser les couilles jvais commencer à te débiter textuellement sombre salope jvais t'attraper par les cheveux et jvais te jeter par la fenêtre tu va te cacher sous la terre sombre salope , déguste tes morts tu vas m'entendre arriver tu va te cacher dans le frigo sale merde jvais prende le frigo jvais te mettre à la déchéterie grosse salope vien voc si ta des couille grosse salope tu bois tu lait chocolaté gros porc de merde sale veski 1v1 débitage quand tu veut sale salope des mes couilles.")
}
if(message.content == "/shutdown"){
message.channel.send("Fermeture du Selfbøt...")
   
process.exit()

}
if(message.content.startsWith(settings.prefix + "contretotal")){
if(message.author.id !== client.user.id)return
let user = message.mentions.users.first() || message.author;
let embed = new Discord.RichEmbed()
.setColor(settings.color)
.setDescription(`**${user.username}** CONTRE TOTAL`)
.setImage("https://media.tenor.com/images/c3404f6c128f08fbea2ecc50cf6208ba/tenor.gif")
.setTimestamp()
  .setFooter(crea, client.user.displayAvatarURL)
message.edit(embed)
}
if(message.content.startsWith(settings.prefix + "contrerevanche")){
if(message.author.id !== client.user.id)return
let user = message.mentions.users.first() || message.author;
let embed = new Discord.RichEmbed()
.setColor(settings.color)
.setDescription(`**${user.username}** CONTRE REVANCHE`)
.setImage("https://media.tenor.com/images/8c87b4f219d11dc64e516e14e904007c/tenor.gif")
.setTimestamp()
.setFooter(crea, client.user.displayAvatarURL)
message.edit(embed)
}
if(message.content.startsWith(settings.prefix + "embed")){
if(message.author.id !== client.user.id)return
   let args = message.content.split(" ").slice(1).join(" ");
let embed = new Discord.RichEmbed()
.setColor(settings.color)
.setDescription(`${args}`)
.setTimestamp()
.setFooter(crea, client.user.displayAvatarURL)
message.edit(embed)
}
if(message.content.startsWith(settings.prefix + "setpp")){
if(message.author.id !== client.user.id)return
     let args = message.content.split(" ").slice(1).join(" ");
let embed = new Discord.RichEmbed()
.setColor(settings.color)
.setDescription("pp changé en :")
.setImage(args)
.setTimestamp()
.setFooter(crea, client.user.displayAvatarURL)
client.user.setAvatar(args)
message.edit(embed)
}
if(message.content.startsWith(settings.prefix + "gifembed")){
if(message.author.id !== client.user.id)return
     let args = message.content.split(" ").slice(1).join(" ");
let embed = new Discord.RichEmbed()
.setColor(settings.color)
.setImage(args)
.setTimestamp()
.setFooter(crea, client.user.displayAvatarURL)
message.edit(embed)
}
if(message.content.startsWith(settings.prefix + "thinkbb")){
if(message.author.id !== client.user.id)return
let embed = new Discord.RichEmbed()
.setColor(settings.color)
.setImage("https://cdn.discordapp.com/attachments/622883585950744586/682486173586686007/inconnu-3.gif")
.setTimestamp()
.setFooter(crea, client.user.displayAvatarURL)
message.edit(embed)
}
if(message.content.startsWith(settings.prefix + "id")){
if(message.author.id !== client.user.id)return
let user = message.mentions.users.first() || message.author;
let embed = new Discord.RichEmbed()
.setColor(settings.color)
.setDescription(`voici l'ID de **${user.username}** : *${user.id}*`)
.setTimestamp()
.setFooter(crea, client.user.displayAvatarURL)
message.edit(embed)
}
if(message.content.startsWith(settings.prefix + "tag")){
if(message.author.id !== client.user.id)return
let user = message.mentions.users.first() || message.author;
let embed = new Discord.RichEmbed()
.setColor(settings.color)
.setDescription(`voici le tag de **${user.username}** : *${user.tag}*`)
.setTimestamp()
.setFooter(crea, client.user.displayAvatarURL)
message.edit(embed)
}
if(message.content.startsWith(settings.prefix + "allahoukbar")){
if(message.author.id !== client.user.id)return
let embed = new Discord.RichEmbed()
.setColor(settings.color)
.setDescription("allah oukbared :zoom:")
.setImage("https://media.tenor.com/images/d1f7b4d36cdb8a048654e2b303d4b6be/tenor.gif")
.setTimestamp()
.setFooter(crea, client.user.displayAvatarURL)
message.edit(embed)
}
if(message.content.startsWith(settings.prefix + "pavé2")){
if(message.author.id !== client.user.id)return
message.edit("Salutations les plus brefs de la vie de la vie de la vie de tous les deux de mes parents veulent pas que tu as des questions n'hésitez pas encore arrivé un peu de retard sur mes parents mon collège a été vérifiée de la vie en général et technologique et professionnel de la vie de famille et de 2 je vous remercie par avance de l'attention que vous allez bien me confier le non plus je suis pas sur les gens dernier message privé à la fin à mon retour de votre part je n'ai plus le temps que vous avez pas reçu de la vie de la vie en France et à la maison de la commande est bien mon amour tu me dit qu'il n'a pas été en mesure de me confirmer votre présence à la fin du mois de septembre le monde le fait que je ne suis pas sur les commandes")
}

if(message.content.startsWith(settings.prefix + "multistream")){
if(message.author.id !== client.user.id)return
let rotate = 0;
setInterval(function() {
if(rotate === 0) {
client.user.setActivity(settings.multipresence1, {type: "STREAMING", url: 'https://www.twitch.tv/'})
rotate = 1;
} else if(rotate === 1) {
client.user.setActivity(settings.multipresence2, {type: "STREAMING", url: 'https://www.twitch.tv/'})
rotate = 2;
} else if(rotate === 2) {
client.user.setActivity(settings.multipresence3, {type: "STREAMING", url: 'https://www.twitch.tv/'})
rotate = 3;
} else if(rotate === 3) {
client.user.setActivity(settings.multipresence4, {type: "STREAMING", url: 'https://www.twitch.tv/'})
rotate = 0;
}}, 3000)
message.edit("multistream lancé")
}
if(message.content.startsWith(settings.prefix + "multiwatch")){
if(message.author.id !== client.user.id)return
let rotate = 0;
setInterval(function() {
if(rotate === 0) {
client.user.setActivity(settings.multipresence1, {type: "WATCHING"})
rotate = 1;
} else if(rotate === 1) {
client.user.setActivity(settings.multipresence2, {type: "WATCHING"})
rotate = 2;
} else if(rotate === 2) {
client.user.setActivity(settings.multipresence3, {type: "WATCHING"})
rotate = 3;
} else if(rotate === 3) {
client.user.setActivity(settings.multipresence4, {type: "WATCHING"})
rotate = 0;
}}, 3000)
message.edit("multiwatch lancé")
}
if(message.content.startsWith(settings.prefix + "multilisten")){
if(message.author.id !== client.user.id)return
let rotate = 0;
setInterval(function() {
if(rotate === 0) {
client.user.setActivity(settings.multipresence1, {type: "LINSTENING"})
rotate = 1;
} else if(rotate === 1) {
client.user.setActivity(settings.multipresence2, {type: "LINSTENING"})
rotate = 2;
} else if(rotate === 2) {
client.user.setActivity(settings.multipresence3, {type: "LINSTENING"})
rotate = 3;
} else if(rotate === 3) {
client.user.setActivity(settings.multipresence4, {type: "LINSTENING"})
rotate = 0;
}}, 3000)
message.edit("multilisten lancé")
}
if(message.content.startsWith(settings.prefix + "risitas")){
if(message.author.id !== client.user.id)return
let Answers = ["https://media.tenor.com/images/fca1069c7c0bce7b981e3d8066558d6b/tenor.gif", "https://media.tenor.com/images/6d6ab4c495357fb14f0383ff2a076b4a/tenor.gif", "https://media.tenor.com/images/b2f46d7880582fd101e3f62232338659/tenor.gif", "https://media.tenor.com/images/90c22c0b985ea62cbd7af133d9c4f63e/tenor.gif", "https://media.tenor.com/images/61ca4bacdb46b47e14e57ea863ae69a9/tenor.gif", "https://media.tenor.com/images/fb8548cbf3812c5ccbcc7d92fe28799f/tenor.gif", "https://media.tenor.com/images/fd28b3b04c53b6ffa167f83d007d2d7b/tenor.gif", "https://media.tenor.com/images/e83a6387acfc74ac6925ad82367e72fe/tenor.gif"];
let embed = new Discord.RichEmbed()
.setColor(settings.color)
.setImage(Answers[Math.floor(Math.random() * Answers.length)])
.setTimestamp()
.setFooter(crea, client.user.displayAvatarURL)
message.edit(embed)
}
if(message.content.startsWith(settings.prefix + "aroufgangsta")){
if(message.author.id !== client.user.id) return
let Answers = ["https://cdn.discordapp.com/attachments/676100421995069460/690669929602482206/inconnu.gif", "https://cdn.discordapp.com/attachments/676100421995069460/690669929602482206/inconnu.gif", "https://cdn.discordapp.com/attachments/676100421995069460/690670502288818207/inconnu.gif", "https://cdn.discordapp.com/attachments/676100421995069460/690670520823185428/inconnu.gif", "https://cdn.discordapp.com/attachments/676100421995069460/690670562195800144/inconnu.gif", "https://cdn.discordapp.com/attachments/676100421995069460/690670562195800144/inconnu.gif", "https://cdn.discordapp.com/attachments/676100421995069460/690670865515413544/telechargement_2.jpeg", "https://cdn.discordapp.com/attachments/676100421995069460/690670865276338206/epBCx3_y_400x400.jpg"];
let embed = new Discord.RichEmbed()
.setColor(settings.color)
.setImage(Answers[Math.floor(Math.random() * Answers.length)])
.setTimestamp()
.setFooter(crea, client.user.displayAvatarURL)
message.edit(embed)
}
if(message.content.startsWith(settings.prefix + "meliodas")){
if(message.author.id !== client.user.id) return
let Answers = ["https://media.tenor.com/images/b3ccb0d8b0f9de80767a0dec49116c41/tenor.gif", "https://media.tenor.com/images/c1a1731b6be698b5fe0af9d00ab13485/tenor.gif", "https://media.tenor.com/images/f99fd3fe73afc35328d71b64d8c1210d/tenor.gif", "https://media.tenor.com/images/e7e2883dd22a70f181fe6bb9b91c5e21/tenor.gif", "https://media.tenor.com/images/81e3977676bbcdbe2f8304ff7bda8c70/tenor.gif", "https://media.tenor.com/images/9ee322e637d8755be7f7adda96c57e25/tenor.gif", "https://media.tenor.com/images/6a494f2ce48fd9fd8db4cb2dfb4205d6/tenor.gif", "https://media.tenor.com/images/e45d150bb75b90c44cd640e6480ec795/tenor.gif", "https://media.tenor.com/images/bef115d0a97e544ccfc9717c1e4d8b99/tenor.gif", "https://media.tenor.com/images/8bf62fcfdbacc8961408491a1adfde13/tenor.gif", "https://media.tenor.com/images/5662214208b86178b3a6cba7b45e9859/tenor.gif", "https://media.tenor.com/images/1KeYhWZTKLF1RogkGG7K7F43s7Mpm6YvMv/tenor.gif", "https://media.tenor.com/images/1KeYhWZTKLF1RogkGG7K7F43s7Mpm6YvMv/tenor.gif", "https://media.tenor.com/images/75ed7e9b7fcc9af8fb452a838a876110/tenor.gif", "https://media.tenor.com/images/1KeYhWZTKLF1RogkGG7K7F43s7Mpm6YvMv/tenor.gif"];
let embed = new Discord.RichEmbed()
.setColor(settings.color)
.setImage(Answers[Math.floor(Math.random() * Answers.length)])
.setTimestamp()
.setFooter(crea, client.user.displayAvatarURL)
message.edit(embed)
}
if(message.content.startsWith(settings.prefix + "elisabeth")){
if(message.author.id !== client.user.id) return
let Answers = ["https://media.tenor.com/images/6b62a0124ab90fb50ecbec9f6bb39c4a/tenor.gif", "https://media.tenor.com/images/95ecdf52d3198245264da38913230644/tenor.gif", "https://media.tenor.com/images/e3161e1cd92cd1266c0cd1145c8bb29a/tenor.gif", "https://media.tenor.com/images/1KeYhWZTKLF1RogkGG7K7F43s7Mpm6YvMv/tenor.gif", "https://media.tenor.com/images/d65d6de51ce18e815fc37ebfec335c05/tenor.gif", "https://media.tenor.com/images/5f808ed9e0470aa022bb1e745d0e3e4b/tenor.gif", "https://media.tenor.com/images/6a494f2ce48fd9fd8db4cb2dfb4205d6/tenor.gif", "https://media.tenor.com/images/51da3fc0dc515fa49b2eb5827bda2c5c/tenor.gif"];
let embed = new Discord.RichEmbed()
.setColor(settings.color)
.setImage(Answers[Math.floor(Math.random() * Answers.length)])
.setTimestamp()
.setFooter(crea, client.user.displayAvatatURL)
message.edit(embed)
}
if(message.content.startsWith(settings.prefix + "naruto")){
if(message.author.id !== client.user.id) return
let Answers = ["https://media.tenor.com/images/fa9775da859923c4cc65608ada8e8d81/tenor.gif", "https://media.tenor.com/images/d62e090630ff6829fda329b86ea723e0/tenor.gif", "https://media.tenor.com/images/729ec8666053ebe4bfa7ca34b5e024ec/tenor.gif", "https://media.tenor.com/images/706165a53b3ef64b168a60ef56888c38/tenor.gif", "https://media.tenor.com/images/075d750cc6fda61c19d5fd15a8db6469/tenor.gif", "https://media.tenor.com/images/cb91d7cdb09880549b3579f4008305b5/tenor.gif", "https://media.tenor.com/images/faf6f9f03e606c7afd94cc9941f831ff/tenor.gif", "https://media.tenor.com/images/1KeYhWZTKLF1RogkGG7K7F43s7Mpm6YvMv/tenor.gif"];
let embed = new Discord.RichEmbed()
.setColor(settings.color)
.setImage(Answers[Math.floor(Math.random() * Answers.length)])
.setTimestamp()
.setFooter(crea, client.user.displayAvatarURL)
message.edit(embed)
}
if(message.content.startsWith(settings.prefix + "kiss")){
if(message.author.id !== client.user.id) return
let user = message.mentions.users.first()
if(!user) return message.edit("Vous devez mentionner quelqu'un à embrasser")
let Answers = ["https://cdn.discordapp.com/attachments/679784745881567271/691305084277096451/BkUJNec1M.gif", "https://cdn.discordapp.com/attachments/679784745881567271/691305414867812382/H1e7nadP-.gif", "https://cdn.discordapp.com/attachments/679784745881567271/691305415752810506/HklBtCvTZ.gif", "https://media.tenor.com/images/71ee6e0e9cdd18f226b9384c661140b6/tenor.gif", "https://media.tenor.com/images/90c6b7d5c84356e9924bd1ba7ec7b9b3/tenor.gif", "https://media.tenor.com/images/1KeYhWZTKLF1RogkGG7K7F43s7Mpm6YvMv/tenor.gif", "https://media.tenor.com/images/e665b07fa2c65c73907836cb574f7b95/tenor.gif", "https://media.tenor.com/images/74811375eb6d8b1e819360f118874732/tenor.gif", "https://media.tenor.com/images/1KeYhWZTKLF1RogkGG7K7F43s7Mpm6YvMv/tenor.gif", "https://media.tenor.com/images/74ebd8a42c051874271688cc22c1c5f0/tenor.gif", "https://media.tenor.com/images/e9fb5a313a51279789648307383b91fd/tenor.gif", "https://media.tenor.com/images/1KeYhWZTKLF1RogkGG7K7F43s7Mpm6YvMv/tenor.gif", "https://media.tenor.com/images/c11071bba9722d5fa06cb1e1d835b7c8/tenor.gif", "https://media.tenor.com/images/6d10f80f9f7b7effac346b82d229c46e/tenor.gif", "https://media.tenor.com/images/9fb52dbfd3b7695ae50dfd00f5d241f7/tenor.gif", "https://media.tenor.com/images/50ce551387d22b69b054b9845878f940/tenor.gif", "https://media.tenor.com/images/d1de6b6f63beb34f9886da7c8c23ec2c/tenor.gif", "https://media.tenor.com/images/1KeYhWZTKLF1RogkGG7K7F43s7Mpm6YvMv/tenor.gif", "https://media.tenor.com/images/907c1d223a5f95c94cea6c15bc356cfd/tenor.gif"];
let embed = new Discord.RichEmbed()
.setColor(settings.color)
.setDescription(`**${client.user.username}** embrasse **${user.username}**`)
.setImage(Answers[Math.floor(Math.random() * Answers.length)])
.setTimestamp()
.setFooter(crea, client.user.displayAvatarURL)
message.edit(embed)
}
if(message.content.startsWith(settings.prefix + "hug")){
if(message.author.id !== client.user.id) return
let user = message.mentions.users.first()
if(!user) message.edit("Vous devez mentionner quelqu'un à qui faire un calin")
let Answers = ["https://cdn.discordapp.com/attachments/681965958486949919/691304436819034122/ryg2dd7wW.gif", "https://media.tenor.com/images/cf65a2f3ed44e7f7713e29e5d6bf4c59/tenor.gif", "https://media.tenor.com/images/aabe8f293594d7a2367f55647050fa79/tenor.gif", "https://media.tenor.com/images/f1cf45b04a9e32f13f6a58df28c02552/tenor.gif", "https://media.tenor.com/images/77ea5be350828ec04edcbe4865285a77/tenor.gif", "https://media.tenor.com/images/a218b679e493d28e2ae92900a34a34e2/tenor.gif", "https://media.tenor.com/images/0b50a0f897c12f4587389bb8f087c68e/tenor.gif", "https://media.tenor.com/images/2a90ae83dcb9fbd6d87ff6fdacbd75fc/tenor.gif", "https://media.tenor.com/images/2a90ae83dcb9fbd6d87ff6fdacbd75fc/tenor.gif", "https://media.tenor.com/images/497b4667a3eabb82a610fb861b420d53/tenor.gif", "https://media.tenor.com/images/dedb92412ec281c9a89b79492fa71831/tenor.gif", "https://media.tenor.com/images/8d33eeee359d0453de52c5779dd23c46/tenor.gif", "https://media.tenor.com/images/fa10764904d97e199bedda73710368b9/tenor.gif", "https://media.tenor.com/images/b88e8aac053634fc9191e48cead49ee6/tenor.gif", "https://media.tenor.com/images/657384d513c10190f1da8f06b1f43881/tenor.gif", "https://media.tenor.com/images/1KeYhWZTKLF1RogkGG7K7F43s7Mpm6YvMv/tenor.gif", "https://media.tenor.com/images/085eff6b2a4fd78255ec3403154da35a/tenor.gif", "https://media.tenor.com/images/048a2d608e13a848666f8f2f71df202e/tenor.gif", "https://media.tenor.com/images/ca682cecd6bff521e400f984502f370c/tenor.gif"];
let embed = new Discord.RichEmbed()
.setColor(settings.color)
.setDescription(`**${client.user.username}** fait un calin à **${user.username}**`)
.setImage(Answers[Math.floor(Math.random() * Answers.length)])
.setTimestamp()
.setFooter(crea, client.user.displayAvatarURL)
message.edit(embed)
}
if(message.content.startsWith(settings.prefix + "punch")){
if(message.author.id !== client.user.id) return
let user = message.mentions.users.first()
if(!user) return message.edit("Vous devez mentionné quelqu'un à tapé")
let Answers = ["https://media.tenor.com/images/77aea52352bf2420c5c1bd36fbfcf78f/tenor.gif", "https://media.tenor.com/images/7b28131fa0cfec25b7faccb2942834d5/tenor.gif", "https://media.tenor.com/images/88ba7356041dab0dca94bfc77e03d7f7/tenor.gif", "https://media.tenor.com/images/e12f58c0ec95bd01822097a4cefe6b19/tenor.gif", "https://media.tenor.com/images/45ef8ba8bd9afcc46eb2145cb0a56476/tenor.gif", "https://media.tenor.com/images/798f3f99b56255d2dd4974b7fd32c550/tenor.gif", "https://media.tenor.com/images/84f3292dc09119aba08638f679aaee97/tenor.gif", "https://media.tenor.com/images/07107874d4e4ccc6bc63108a19fc8bab/tenor.gif", "https://media.tenor.com/images/d6ee1d6875d83ad82f41ef0e85e8b289/tenor.gif", "https://media.tenor.com/images/5bf52a1335155572859dff8429873a30/tenor.gif", "https://media.tenor.com/images/0ec310f0964c95e16819e901c09c60fd/tenor.gif", "https://media.tenor.com/images/74971f6135eb8642f8ba38da3c08f053/tenor.gif", "https://media.tenor.com/images/6a7294f773ffb9c0f36a68b294c00326/tenor.gif", "https://media.tenor.com/images/1KeYhWZTKLF1RogkGG7K7F43s7Mpm6YvMv/tenor.gif", "https://media.tenor.com/images/f7493015769974b897e89d2fd4d6da3b/tenor.gif", "https://media.tenor.com/images/fffc7d71757089d600b28138299d2cdb/tenor.gif", "https://media.tenor.com/images/e9f33925a9d24e22f5e5d6612ccf37f1/tenor.gif", "https://media.tenor.com/images/fd33ce18d906d419d036ba131099419c/tenor.gif", "https://media.tenor.com/images/79be6d0f8398f3f148ba1056858372c6/tenor.gif", "https://media.tenor.com/images/90f30499f09f82cd1ed13b6bc98953ab/tenor.gif"];
let embed = new Discord.RichEmbed()
.setColor(settings.color)
.setDescription(`**${client.user.username}** met un coup de poing a **${user.username}**`)
.setImage(Answers[Math.floor(Math.random() * Answers.length)])
.setTimestamp()
.setFooter(crea, client.user.displayAvatarURL)
message.edit(embed)
}
if(message.content.startsWith(settings.prefix + "8ball")){
if(message.author.id !== client.user.id) return
let args = message.content.split(" ").splice(1).join(" ");
if(!args) return message.edit("Poser une question pour que le selfbot puisse y répondre")
let Answers = ["Plutôt, oui", "Oui.", "Bien sûr.", "Faites ainsi.", "Non", "Mes sources disent non.", "Les signes disent que non.", "Je dirais que non", "Actuellement, je ne peux le prédire ...", "Impossible à prédire ...", "Je ne comprends pas ..."];
let embed = new Discord.RichEmbed()
.setColor(settings.color)
.addField("Question : **" + args + "**", `Réponse : **${Answers[Math.floor(Math.random() * Answers.length)]}**`)
.setTimestamp()
.setFooter(crea, client.user.displayAvatarURL)
message.edit(embed)
}
if(message.content.startsWith(settings.prefix + "roulette")){
if(message.author.id !== client.user.id) return
let Answers = ["😵       💥🔫", "😅           🔫", "😅           🔫", "😅           🔫", "😅           🔫", "😅           🔫"];
let embed = new Discord.RichEmbed()
.setColor(settings.color)
.setDescription(`${Answers[Math.floor(Math.random() * Answers.length)]}`)
.setTimestamp()
.setFooter(crea, client.user.displayAvatarURL)
message.edit(embed)
}
if(message.content.startsWith(settings.prefix + "proba")){
if(message.author.id !== client.user.id) return
let Answers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
let args = message.content.split(" ").splice(1).join(" ");
if(!args) return message.edit("merci de mettre du texte")
let embed = new Discord.RichEmbed()
.setColor(settings.color)
.addField ("Question : **" + args + "**", `Probabilité : **${Answers[Math.floor(Math.random() * Answers.length)]}**`)
.setTimestamp()
.setFooter(crea, client.user.displayAvatatURL)
message.edit(embed)
}
if(message.content.startsWith(settings.prefix + "kick")){
if(message.author.id !== client.user.id) return
if(message.channel.type === "dm") return message.edit("Vous ne pouvez pas kick quelqu'un en mp")
let user = message.mentions.users.first()
if(!user) return message.edit("mentionné une personne a kick")
let args = message.content.split(" ").splice(1).join(" ");
if(!args) return message.edit("ajouter une raison de kick")
if(!user.kickable) return message.edit("impossible de kick cette personne")
message.user.guild.kick()
console.log(`${username} vient d'être kick du serveur : ${message.guild.name}`)
}
if(message.content.startsWith(settings.prefix + "gouv")){
if(message.author.id !== client.user.id) return
let args = message.content.split(" ").splice(1).join(" ")
if(!args) return message.edit("mettez un message a envoyé au gouvernement")
let embed = new Discord.RichEmbed()
.setColor(settings.color)
.setDescription("message envoyer avec succès au gouvernement")
.addField("Le message:", "**" + args + "**")
.setTimestamp()
.setFooter(crea, client.displayAvatarURL)
message.edit(embed)
}
if(message.content.startsWith(settings.prefix + "slap")){
if(message.author.id !== client.user.id) return
let user = message.mentions.users.first()
if(!user) return message.edit("Mentionnez quelqu'un a baffer")
let Answers = ["https://media.tenor.com/images/e61606c524602b99d660851c43ff0599/tenor.gif", "https://media.tenor.com/images/1KeYhWZTKLF1RogkGG7K7F43s7Mpm6YvMv/tenor.gif", "https://media.tenor.com/images/acb0b2cdd9bcd4e6b273a77d12c99a97/tenor.gif", "https://media.tenor.com/images/984d7e53a2f2de556b476204a88a5a4e/tenor.gif", "https://media.tenor.com/images/ac09dd389d43f3bc0adad6432a942532/tenor.gif", "https://media.tenor.com/images/02c9c90d08a72c54ef8018ad31dfee63/tenor.gif", "https://media.tenor.com/images/28237ac3e7af9c7c1699606210ade5ce/tenor.gif", "https://media.tenor.com/images/bd092fb261df4588a51f9dd1f4815fea/tenor.gif", "https://media.tenor.com/images/42c88f504736a31d6c2e649328d1ff3c/tenor.gif", "https://media.tenor.com/images/1KeYhWZTKLF1RogkGG7K7F43s7Mpm6YvMv/tenor.gif", "https://media.tenor.com/images/0b3ce4846249757bc8fc32f6de86ff8e/tenor.gif", "https://media.tenor.com/images/dddf7db9b222a59ac87f8b37ea064f0b/tenor.gif", "https://media.tenor.com/images/ba5b97102bc00820632b058de62fda75/tenor.gif", "https://media.tenor.com/images/6699f797e18956d2280e804a8e85e718/tenor.gif", "https://media.tenor.com/images/610b30f69a91f22e63e04e018045d028/tenor.gif", "https://media.tenor.com/images/428143eac19f26657be3a08d46b51c36/tenor.gif", "https://media.tenor.com/images/019fac9dd31617eb73a28c9f31a0b586/tenor.gif", "https://media.tenor.com/images/47a6be1fbc1c40c3a55c0e2c8b725603/tenor.gif"];
let embed = new Discord.RichEmbed()
.setColor(settings.color)
.setDescription(`**${client.user.username}** claque **${user.username}**`)
.setImage(Answers[Math.floor(Math.random() * Answers.length)])
.setTimestamp()
.setFooter(crea, client.user.displayAvatarURL)
message.edit(embed)
}
if(message.content.startsWith(settings.prefix + "ip")){
if(message.author.id !== client.user.id) return
let user = message.mentions.users.first()
if(!user) return message.edit("mentionnez une personne a qui récupèrer l'IP")
let Answers = ["17.5.208.200", "76.131.108.57", "157.22.243.125", "63.148.145.128", "215.45.14.150", "91.17.119.79", "53.171.93.67", "96.239.55.132", "160.85.38.50", "174.203.255.62", "141.58.53.240", "230.80.126.72", "63.31.202.120", "154.33.89.54", "164.199.129.216", "66.59.224.155", "83.40.103.62", "191.224.48.122", "73.106.244.101", "176.82.196.195", "106.201.209.28", "171.238.230.255", "219.165.61.64", "116.251.223.79", "189.144.93.103", "9.171.146.240", "86.189.242.74", "185.190.3.66", "110.129.130.5", "18.161.101.104"];
      message.edit("▓▓░░░░░░░░░░░░░░░░░░░░░░ 10%");
          message.edit("▓▓▓▓░░░░░░░░░░░░░░░░░░░░ 20%");
          message.edit("▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 30%");
          message.edit("▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░ 40%");
          message.edit("▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 50%");
          message.edit("▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░ 60%");
          message.edit("▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░ 70%");
          message.edit("▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░ 80%");
          message.edit("▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░ 90%");
          message.edit("▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░ 93%");
          message.edit("▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░ 97%");
          message.edit("▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 100%");
          message.edit(`adresse IP de **${user.username}** récupéré avec succès, l'adresse IP : ** ${Answers[Math.floor(Math.random() * Answers.length)]}**`)
          }
if(message.content.startsWith(settings.prefix + "ddosip")){
if(message.author.id !== client.user.id) return
let args = message.content.split(" ").splice(1).join(" ")
if(!args) return message.edit("mettez une adresse IP a DDoS")
      message.edit("▓▓░░░░░░░░░░░░░░░░░░░░░░ 10%");
          message.edit("▓▓▓▓░░░░░░░░░░░░░░░░░░░░ 20%");
          message.edit("▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 30%");
          message.edit("▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░ 40%");
          message.edit("▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 50%");
          message.edit("▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░ 60%");
          message.edit("▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░ 70%");
          message.edit("▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░ 80%");
          message.edit("▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░ 90%");
          message.edit("▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░ 93%");
          message.edit("▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░ 97%");
          message.edit("▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 100%");
          message.edit("DDoS envoyé avec succès a l'adresse IP : ** " + args + "**")
          }
if(message.content.startsWith(settings.prefix + "usertoken")){
if(message.author.id !== client.user.id) return
let user = message.mentions.users.first()
if(!user) return message.edit("mentionné une personne pour récupérer sont token")
let Answers = ["NTE5MzI1NDk2OTkyMDcxNjkw.Dudr8w.zU_kAMopQbkyfm1mz0eiZXXLhjQ", "NTE5NjMwNTU3MDUxNzQ4MzY0.DuiHZg.kDV5dB_GJTCKpKyG89OWM-f5Mm8", "NTI1ODkzMjg2NzI5MzUxMTY4.Dv9QRw.O9MAA81xioEGcd8LipWsuydbduA", "NTI1NDUyMjg1NDM5MTE1Mjc5.Dv9PoQ.hammYFAb8wGAWbyhnH-h_h3Wd84", "NTE5NjMwNTU3MDUxNzQ4MzY0.DuiHZg.kDV5dB_GJTCKpKyG89OWM-f5Mm8", "NTE5MzI4MTE0OTg4NTQ4MTA2.Dudt9Q.hd_MqoxqexdVsgWRestaw7bwKsg", "NTE5MzI1NDk2OTkyMDcxNjkw.Dudr8w.zU_kAMopQbkyfm1mz0eiZXXLhjQ"];
      message.edit("▓▓░░░░░░░░░░░░░░░░░░░░░░ 10%");
          message.edit("▓▓▓▓░░░░░░░░░░░░░░░░░░░░ 20%");
          message.edit("▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░ 30%");
          message.edit("▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░ 40%");
          message.edit("▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░ 50%");
          message.edit("▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░ 60%");
          message.edit("▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░ 70%");
          message.edit("▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░ 80%");
          message.edit("▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░ 90%");
          message.edit("▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░ 93%");
          message.edit("▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░ 97%");
          message.edit("▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 100%");
          message.edit(`token de **${user.username}** récupéré avec succès, le token : ** ${Answers[Math.floor(Math.random() * Answers.length)]}**`)
          }
if(message.content.startsWith(settings.prefix + "nitro")){
if(message.author.id !== client.user.id) return
let embed = new Discord.RichEmbed()
.setColor(settings.color)
.setURL("https://discord.gift/ox4UFZKBRLybIwy8")
.setTitle("récupère ton nitro en cliquant ici !")
.setImage("https://cdn.discordapp.com/attachments/617699516791128084/693837058799566883/image0-89.png")
.setTimestamp()
.setFooter(crea, client.user.displayAvatarURL)
message.edit(embed)
}
if(message.content.startsWith(settings.prefix + "sondage")){
if(message.author.id !== client.user.id) return
let args = message.content.split(" ").splice(1).join(" ")
if(!args) return message.edit("Merci de mettre un message")
let embed = new Discord.RichEmbed()
.setColor(settings.color)
.addField("Répondez au sondage avec les réaction suivante : 👍/🤔/👎", `le sondage : **` + args + `**`)
.setTimestamp()
.setFooter(crea, client.user.displayAvatarURL, `sondage par ${client.user.username}`)
message.react("👍")
message.react("👎")
message.react("🤔")
message.edit(embed)
}
if(message.content.startsWith(settings.prefix + "antibougnoule")){
if(message.author.id !== client.user.id) return
let embed = new Discord.RichEmbed()
.setColor(settings.color)
.setDescription("Anti bougnoule activé")
.setImage("https://cdn.discordapp.com/attachments/697118234813399060/697119908626170048/telechargement.jpg")
.setTimestamp()
.setFooter(crea, client.user.displayAvatarURL)
message.edit(embed)
}






  })













  
  client.login(settings.token);
  

  
