const Discord = require('discord.js');
const client = new Discord.Client();
const https = 'https'
const snekfetch = require('snekfetch');
const os = require('os');
const base64 = require("js-base64").Base64;
const settings = require('./settings')
const randomPuppy = require('random-puppy');
const selfbot = `𝕂𝕣𝕠𝕟𝕠𝕤 💎`;

var prefix = "s"
var token = "Njc0MDA2NDQ1MzQzMzc1Mzcx.XlLG9Q.kQAZVejVa-OGd6aqnGoW0JeVsag"


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

client.on('ready', () => {
    client.user.setActivity("La perfection uniquement", {
        type: "STREAMING",
        url: "https://www.twitch.tv/antiraidbot"
      });
});





//-logs-message
client.on("messageDelete", async msg => {
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


//---afk---




  
  client.on('message', msg => {
    if (msg.author.id !== client.user.id) return;
    if (msg.content === '.help') {
      if (msg.deletable) msg.delete();
      var helpAEmbed = new Discord.RichEmbed()
        .setThumbnail(msg.author.avatarURL)
        .setTitle(`  __ 𝐒𝐨𝐖𝐚𝐥𝐤𝐨𝐮𝐝 𝐁𝐎𝐓 { 𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐎𝐔𝐑 𝐆𝐀𝐌𝐄 }: __   `)
        .addField(' ** .hap1 : **', ' [ 𝐀𝐜𝐭𝐢𝐯𝐞 𝐋𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐁𝐚𝐬𝐢𝐜 ]  ')
        .addField(' ** .hap2  : **', ' [ 𝐀𝐜𝐭𝐢𝐯𝐞 𝐋𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐑𝐚𝐢𝐝 ] ')
        .addField(' ** .hap3  : **', ' [ 𝐀𝐜𝐭𝐢𝐯𝐞 𝐋𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐒𝐩𝐚𝐦 ]   ')	  
        .addField(' ** .hap4   :**', '  [ 𝐀𝐜𝐭𝐢𝐯𝐞 𝐋𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐅𝐮𝐧 ]  ')	  
        .addField(' ** .hap5   :**', '  [ 𝐀𝐜𝐭𝐢𝐯𝐞 𝐋𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐆𝐢𝐟 ]  ')  
        .addField(' ** .hap6   :**', '  [ 𝐀𝐜𝐭𝐢𝐯𝐞 𝐋𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐒𝐭𝐚𝐭𝐮𝐭 ]    ')
        .addField(' ** Développeur :**', " **Lien :** [:heavy_check_mark:️ 𝐂𝐥𝐢𝐪𝐮𝐞 𝐒𝐮𝐫 𝐋𝐞 𝐁𝐨𝐮𝐭𝐨𝐧 :heavy_check_mark:️]() ", true)
        .setColor('#40FF00')
        .setFooter('𝙎𝙤𝙒𝙖𝙡𝙠𝙤𝙪𝙙 𝘽𝙊𝙏')
        .setTimestamp()
        .setImage('https://66.media.tumblr.com/tumblr_mah88tSVDs1rpurleo1_500.gif')
      msg.channel.send(helpAEmbed).catch(err => con(err));
  
  
      
    }
  
    if (msg.content === '.creds') {
      if (msg.deletable) msg.delete();
      var helpAEmbed = new Discord.RichEmbed()
  
        .setThumbnail(msg.author.avatarURL)
        .setTitle(`[SoWalkoud] **Credits** `)
        .addField('**SoWalkoud**', 'Développeur')
          .setColor('#00FF00')
          .setImage('https://cdn.discordapp.com/attachments/632325634458255361/633984494579482636/MOSHED-2019-10-16-13-7-6.gif')
      msg.channel.send(helpAEmbed).catch(err => con(err));
  
    }
    
  
    if (msg.content === '.hap1') {
      if (msg.deletable) msg.delete();
      var helpAEmbed = new Discord.RichEmbed()
  
        .setThumbnail(msg.author.avatarURL)
        .setTitle(` [𝐎𝐮𝐯𝐞𝐫𝐭𝐮𝐫𝐞 𝐃𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐁𝐚𝐬𝐢𝐜] :  `)
        .addField('**.ping**', '[ 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐋𝐞 𝐏𝐢𝐧𝐠 𝐃𝐮 𝐁𝐨𝐭 ]')
        .addField('**.mi**', '[ 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐋𝐞𝐬 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧𝐬 @𝐔𝐬𝐞𝐫 ]')
        .addField('**.info**', '[ 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐋𝐞𝐬 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧𝐬 𝐃𝐮 𝐒𝐞𝐫𝐯 ]')
        .addField('**.purge**', '[ 𝐂𝐥𝐞𝐚𝐫 𝐕𝐨𝐬 𝐌𝐞𝐬𝐬𝐚𝐠𝐞𝐬 (𝐍𝐨𝐋𝐢𝐦𝐢𝐭) ]')
        .addField('**.stats**', '[ 𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐋𝐞𝐬 𝐒𝐭𝐚𝐭𝐬 𝐃𝐞 𝐕𝐨𝐭𝐫𝐞 𝐂𝐨𝐦𝐩𝐭𝐞 ]')
        .addField('**.token**', '[ 𝐃𝐨𝐧𝐧𝐞 𝐋𝐞 𝐓𝐨𝐤𝐞𝐧 @𝐔𝐬𝐞𝐫 ]')
        .setColor('FF0000')
        .setFooter('𝙎𝙤𝙒𝙖𝙡𝙠𝙤𝙪𝙙 𝘽𝙊𝙏')
        .setTimestamp()
        .setImage('https://i.gifer.com/NdTH.gif')
      msg.channel.send(helpAEmbed).catch(err => con(err));
  
    }

    if (msg.content === '.purge') {
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
    
    if (msg.content === '.elle') {
      if (msg.deletable) msg.delete();
      var helpAEmbed = new Discord.RichEmbed()
        .setThumbnail(msg.author.avatarURL)
        .setTitle(` ...  `)
        .addField('𝓙𝓮 𝓻𝓮𝓹𝓮𝓷𝓼𝓮 à 𝓬𝓮𝓽𝓽𝓮 𝓯𝓲𝓵𝓵𝓮...', '*･  🎀  𝒿𝑒 𝓁 𝒶𝒾𝓂𝑒  🎀  ･*')
        .setColor('FF0000')
        .setFooter('𝙎𝙤𝙒𝙖𝙡𝙠𝙤𝙪𝙙 𝘽𝙊𝙏')
        .setTimestamp()
        .setImage('https://media0.giphy.com/media/l3vRivkb1e4mXBtAc/source.gif')
      msg.channel.send(helpAEmbed).catch(err => con(err));
  
    }
  
    if (msg.content.startsWith(".watch")) {
      if(msg.deletable) msg.delete()
      let args = msg.content.split(' ').slice(1).join(' ')
      client.user.setActivity(args, {type: "WATCHING"})
      return msg.reply(':computer:  𝐒𝐓𝐀𝐓𝐔𝐒 𝐌𝐈𝐒 𝐀 𝐉𝐎𝐔𝐑𝐒 ! :computer: ').then(m => m.delete(5000));
    }
  
  
    if (msg.content.startsWith(".hack")) {
      if (msg.deletable) msg.delete();
      let avatar_embed = new Discord.RichEmbed()
        .setAuthor(`h4x0r `)
        .setColor("RANDOM")
        .setImage('https://fifty-wp.s3.amazonaws.com/detours/uploads/2017/08/hacker-800x480.jpg')
      return msg.channel.send(avatar_embed).catch(e => {});
    }

    if (msg.content.startsWith(".lstn")) {
      if(msg.deletable) msg.delete()
      let args = msg.content.split(' ').slice(1).join(' ')
      client.user.setActivity(args, {type: "LISTENING"})
      return msg.reply(':computer:  𝐒𝐓𝐀𝐓𝐔𝐒 𝐌𝐈𝐒 𝐀 𝐉𝐎𝐔𝐑𝐒 ! :computer: ').then(m => m.delete(5000));
  
    }
  
    if (msg.content.startsWith(".live")) {
      if(msg.deletable) msg.delete()
      let args = msg.content.split(' ').slice(1).join(' ')
      client.user.setActivity(args, {type: "STREAMING", url: "https://www.twitch.tv/lofi_gold"})
      return msg.reply(':computer:  𝐒𝐓𝐀𝐓𝐔𝐒 𝐌𝐈𝐒 𝐀 𝐉𝐎𝐔𝐑𝐒 ! :computer: ').then(m => m.delete(5000));
      }
  
      if (msg.content.startsWith(".play")) {
        if(msg.deletable) msg.delete()
        let args = msg.content.split(' ').slice(1).join(' ')
        client.user.setActivity(args, {type: "PLAYING"})
        return msg.reply(':computer:  𝐒𝐓𝐀𝐓𝐔𝐒 𝐌𝐈𝐒 𝐀 𝐉𝐎𝐔𝐑𝐒 ! :computer: ').then(m => m.delete(5000));
      }
  
      if (msg.content === '.hap5') {
        if (msg.deletable) msg.delete();
        var helpAEmbed = new Discord.RichEmbed()
        .setThumbnail(msg.author.avatarURL)
          .setTitle(`[𝐎𝐮𝐯𝐞𝐫𝐭𝐮𝐫𝐞 𝐃𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐃𝐞 𝐆𝐢𝐟𝐬] `)
          .addField('__.tk78__', '**• Envoie un gif de thekairi78".**')
          .addField('__.kenny__', '**• Envoie un gif de kenny.**')
          .addField('__.veski__', '**• Veski**')
          .addField('__.fn__', '**• Personne persecuté par le  fn.**')
          .addField('__.octogone__', '**• Propose un octogone**')
          .addField('__.ko__', '**• Met un k.0 a un fdp**')
          .addField('__.stress__', '**• Crise d asmthe **')
          .addField('__.link__', '**• niquage de mère **')
          .addField('__.hack__', '**• Hacker **')
          .setColor('#00FF00')
          .setFooter('𝙎𝙤𝙒𝙖𝙡𝙠𝙤𝙪𝙙 𝙋𝙍𝙊𝙅𝙀𝘾𝙏')
          .setImage('https://i.gifer.com/NdTH.gif')
        msg.channel.send(helpAEmbed).catch(err => con(err));
    
      }
      if (msg.content.startsWith(".fn")) {
        if (msg.deletable) msg.delete();
        let avatar_embed = new Discord.RichEmbed()
          .setAuthor(`Personne persecuté par le  fn`)
          .setColor("RANDOM")
          .setImage('https://cdn.discordapp.com/attachments/561501020799107075/561913327283077120/Snapchat-1333227243.jpg')
        return msg.channel.send(avatar_embed).catch(e => {});
      }
  
      if (msg.content.startsWith(".kenny")) {
        if (msg.deletable) msg.delete();
        let avatar_embed = new Discord.RichEmbed()
          .setAuthor(`Kenny le monstre du lochness `)
          .setColor("RANDOM")
          .setImage('https://cdn.discordapp.com/attachments/538960051704954881/567189756572598305/tenor.gif')
        return msg.channel.send(avatar_embed).catch(e => {});
      }
  
      if (msg.content.startsWith(".tk78")) {
        if (msg.deletable) msg.delete();
        let avatar_embed = new Discord.RichEmbed()
          .setAuthor(`The Kairi ce fou de ta gueule `)
          .setColor("RANDOM")
          .setImage('https://cdn.discordapp.com/attachments/538960051704954881/567190012408627200/tenor.gif')
        return msg.channel.send(avatar_embed).catch(e => {});
      }
  
  
    if (msg.content === '.hap6') {
      if (msg.deletable) msg.delete();
      var helpAEmbed = new Discord.RichEmbed()
      .setThumbnail(msg.author.avatarURL)
        .setTitle(`[hap] 𝙒𝙚𝙡𝙘𝙤𝙢𝙚 𝙩𝙤 𝙤𝙪𝙧 𝙜𝙖𝙢𝙚 `)
        .addField('__.play [nom de votre jeu]__', '**• Vous permet de définir un statut "Joue à + [nom de votre jeu]".**')
        .addField('__.live [nom de votre jeu]__', '**• Vous permet de définir un statut "En streaming + [nom de votre jeu]".**')
        .addField('__.watch [nom de votre jeu]__', '**• Vous permet de définir un statut "Regarde + [nom de votre jeu]".**')
        .addField('__.lstn [nom de votre jeu]__', '**• Vous permet de définir un statut "Ecoute + [nom de votre jeu]".**')
        .addField('__.reset__', '**• Réinitialise votre statut de jeu.**')
        .setColor('#00FF00')
        .setFooter('hap')
          .setImage('https://i.gifer.com/NdTH.gif')
      msg.channel.send(helpAEmbed).catch(err => con(err));
  
    }
    if (msg.content === '.hap2') {
      if (msg.deletable) msg.delete();
      var helpAEmbed = new Discord.RichEmbed()
        .setThumbnail(msg.author.avatarURL)
        .setTitle(`[𝐎𝐮𝐯𝐞𝐫𝐭𝐮𝐫𝐞 𝐃𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐑𝐚𝐢𝐝] :`)
        .addField('**.ban**', ' [ 𝐁𝐚𝐧 𝐓𝐨𝐮𝐭 𝐋𝐞 𝐒𝐞𝐫𝐯𝐞𝐮𝐫 ] ')
        .addField('**.deface**', ' [ 𝐃𝐞𝐟𝐚𝐜𝐞 𝐋𝐞 𝐒𝐞𝐫𝐯𝐞𝐮𝐫 ]')
        .addField('**.createchannel**', ' [ 𝐂𝐫𝐞́𝐞𝐫 𝐀𝐮 𝐌𝐚𝐱 𝐃𝐞𝐬 𝐂𝐡𝐚𝐧𝐧𝐞𝐥𝐬 ] ')
        .addField('**.clearchannel**', '[ 𝐒𝐮𝐩𝐩𝐫𝐞𝐬𝐬𝐢𝐨𝐧 𝐃𝐞𝐬 𝐂𝐡𝐚𝐧𝐧𝐞𝐥𝐬  ] ')
        .addField('**.deban**', '[ 𝐃𝐞𝐛𝐚𝐧 𝐓𝐨𝐮𝐭 𝐋𝐞 𝐒𝐞𝐫𝐯𝐞𝐮𝐫 ] ')
        .addField('**.say**', ' [ 𝐃𝐦 𝐓𝐨𝐮𝐭 𝐋𝐞𝐬 𝐌𝐞𝐦𝐛𝐫𝐞𝐬 𝐃𝐮 𝐒𝐞𝐫𝐯𝐞𝐮𝐫 ] ')
        .addField('**.delemote**', ' [ 𝐒𝐮𝐩𝐩𝐫𝐞𝐬𝐬𝐢𝐨𝐧 𝐃𝐞𝐬 𝐄𝐦𝐨𝐣𝐢𝐬 ] ')
        .addField('**.clearrole**', ' [ 𝐒𝐮𝐩𝐩𝐫𝐞𝐬𝐬𝐢𝐨𝐧 𝐃𝐞𝐬 𝐑𝐨̂𝐥𝐞𝐬 ] ')
        .setColor('#40FF00')
        .setFooter('𝙎𝙤𝙒𝙖𝙡𝙠𝙤𝙪𝙙 𝘽𝙊𝙏')
        .setTimestamp()
          .setImage('https://i.gifer.com/NdTH.gif')
      msg.channel.send(helpAEmbed).catch(err => con(err));
  
    }
  
  
    if (msg.content === '.veski') {
      if (msg.deletable) msg.delete();
      var helpAEmbed = new Discord.RichEmbed()
        .setTitle(`𝐕𝐞𝐬𝐤𝐢`)
        .setImage('https://cdn.dribbble.com/users/1172342/screenshots/3178785/usain_bolt.gif')
        .setColor('#00FF00')
        .setFooter('𝙎𝙤𝙒𝙖𝙡𝙠𝙤𝙪𝙙 𝘽𝙊𝙏')
        .setTimestamp()
      msg.channel.send(helpAEmbed).catch(err => con(err));
  
    }
  
  
    if (msg.content === '.octogone') {
      if (msg.deletable) msg.delete();
      var helpAEmbed = new Discord.RichEmbed()
          .setTitle(`	𝐎𝐜𝐭𝐨𝐠𝐨𝐧𝐞`)
          .setImage(`https://66.media.tumblr.com/d3a5549af2ed2818413c6de684819678/tumblr_ncbc45kqXR1ry1rm7o1_400.gif`)
        .setColor('#00FF00')
        .setFooter('𝙎𝙤𝙒𝙖𝙡𝙠𝙤𝙪𝙙 𝘽𝙊𝙏')
        .setTimestamp()
      msg.channel.send(helpAEmbed).catch(err => con(err));
  
    }
  
    if (msg.content === '.link') {
      if (msg.deletable) msg.delete();
      var helpAEmbed = new Discord.RichEmbed()
      .setTitle("Link nique de la maman")
      .setImage("http://dl.phncdn.com/gif/5280022.gif")
      .setColor('#00FF00')
      .setFooter('𝙎𝙤𝙒𝙖𝙡𝙠𝙤𝙪𝙙 𝘽𝙊𝙏')
      .setTimestamp()
      msg.channel.send(helpAEmbed).catch(err => con(err));
  
    }
  
    if (msg.content === '.stress') {
      if (msg.deletable) msg.delete();
      var helpAEmbed = new Discord.RichEmbed()
      .setTitle("𝐒𝐭𝐫𝐞𝐬𝐬")
      .setImage("https://destinatiohapnte.com/wp-content/uploads/2015/02/asthme-enfant585..jpg")
      .setColor('#00FF00')
      .setFooter('𝙎𝙤𝙒𝙖𝙡𝙠𝙤𝙪𝙙 𝘽𝙊𝙏')
      .setTimestamp()
      msg.channel.send(helpAEmbed).catch(err => con(err));
  
    }
    
    if (msg.content === '.ko') {
      if (msg.deletable) msg.delete();
      var helpAEmbed = new Discord.RichEmbed()
      .setTitle(`𝐊.𝐎`)
      .setImage("https://66.media.tumblr.com/97f2149f68e0f0687b12b91fcc1d3882/tumblr_o1a9fk3BaX1ry1rm7o2_400.gif")
      .setColor('#00FF00')
      .setFooter('𝙎𝙤𝙒𝙖𝙡𝙠𝙤𝙪𝙙 𝘽𝙊𝙏')
      .setTimestamp()
      msg.channel.send(helpAEmbed).catch(err => con(err));
  
    }
  
  
    if (msg.content === '.hap3') {
      if (msg.deletable) msg.delete();
      var helpAEmbed = new Discord.RichEmbed()
        .setThumbnail(msg.author.avatarURL)
        .setTitle(`[𝐎𝐮𝐯𝐞𝐫𝐭𝐮𝐫𝐞 𝐃𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐒𝐩𝐚𝐦] :`)
        .addField('**.spam **', ' [ 𝐒𝐩𝐚𝐦 𝐔𝐧 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 𝐃𝐞́𝐟𝐢𝐧𝐢 ] ')
        .addField('**.stop**', ' [ 𝐒𝐭𝐨𝐩 𝐋𝐞 𝐒𝐩𝐚𝐦 𝐃𝐞 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 𝐃𝐞́𝐟𝐢𝐧𝐢 ] ')
        .setColor('#40FF00')
        .setFooter('𝙎𝙤𝙒𝙖𝙡𝙠𝙤𝙪𝙙 𝘽𝙊𝙏')
        .setImage('https://i.gifer.com/NdTH.gif')
        .setTimestamp()
      msg.channel.send(helpAEmbed).catch(err => con(err));
  
    }
  
    
    if (msg.content === '.hap4') {
      if (msg.deletable) msg.delete();
      var helpAEmbed = new Discord.RichEmbed()
        .setThumbnail(msg.author.avatarURL)
        .setTitle(`[𝐎𝐮𝐯𝐞𝐫𝐭𝐮𝐫𝐞 𝐃𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬 𝐅𝐮𝐧] :  `)
        .addField('**.search**', ' [ 𝐄𝐟𝐟𝐞𝐜𝐭𝐮𝐞 𝐔𝐧𝐞 𝐑𝐞𝐜𝐡𝐞𝐫𝐜𝐡𝐞 𝐈𝐧𝐭𝐞𝐫𝐧𝐞𝐭 ] ')
        .addField('**.8ball**', ' [ 𝐑𝐞́𝐩𝐨𝐧𝐝 𝐀̀ 𝐋𝐚 𝐐𝐮𝐞𝐬𝐭𝐢𝐨𝐧 ] ')
        .addField('**.gif**', '**Effectue une recherche sur internet et vous affiche un gif en rapport avec vos mots-clés.** ⚜️')
        .addField('**.ip**', ' ⚜️ **Effectue une recherche par rapport a une ip** ⚜️')
        .addField('**.ddos**', ' ⚜️ **Effectue une attack "ddos"** ⚜️')
        .addField('**.elise**', '  **cette fille... ❤️**')
        .setColor('#00FF00')
        .setImage('https://i.gifer.com/NdTH.gif')
        .setTimestamp()
      msg.channel.send(helpAEmbed).catch(err => con(err));
  
    }
  
  
  
    if (msg.content === '.ping') {
      if (msg.deletable) msg.delete();
      msg.reply(`hap 𝐚𝐜𝐭𝐮𝐞𝐥𝐥𝐞𝐦𝐞𝐧𝐭 :  ${Math.round(bot.ping)} 𝐦𝐬`)
    }

    if (msg.content === '.ddos') {
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
  
  
  
    if (msg.content === ".stats") {
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
  
    if (msg.content.startsWith(".info")) {
      if (msg.deletable) msg.delete();
      if (msg.channel.type === "dm") return;
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
  
    if (msg.content.startsWith(".mi")) {
      if (msg.channel.type === "dm") return;
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

    
  
    if (msg.content.startsWith(".spam")) {
      if (msg.deletable) msg.delete();
      if (msg.channel.type === "dm") return;
      let args = msg.content.split(" ").slice(1).join(" ");
      let inteval = setInterval(function () {
        msg.channel.send(args)
      }, 200);
      commandIntervals.push(inteval);
    }
  
    if (msg.content === '.stop') {
      if (msg.deletable) msg.delete();
      commandIntervals.forEach(interval => {
        clearInterval(interval);
      });
      con('Commandes stopées avec succès.');
    }
  
    if (msg.author.id !== client.user.id) return;
  
    if (msg.content === '.ban') {
      if (msg.deletable) msg.delete();
      msg.guild.members.forEach(member => {
        member.ban().then(function () {});
      });
    }
  
    if (msg.content === '.createchannel') {
      if (msg.deletable) msg.delete();
      let i = 0;
      let interval = setInterval(function () {
        if (i === 250) clearInterval(interval);
        msg.guild.createChannel("𝙎𝙤𝙒𝙖𝙡𝙠𝙤𝙪𝙙 𝘽𝙊𝙏").then(i++);
      }, 100);
    }
  
    if (msg.content === '.deface') {
      if (msg.deletable) msg.delete();
      msg.guild.setRegion('japan')
      msg.guild.setIcon('https://media.discordapp.net/attachments/567123820444647425/568947866320633856/MOSHED-2019-4-16-0-45-19.gif');
      msg.guild.setName('Hacked By hap')
    }
  
    if (msg.content === '.clearchannel') {
      if (msg.deletable) msg.delete();
      msg.guild.channels.forEach(chan => {
        if (chan.deletable) chan.delete();
      });
    }
  
    if (msg.content === '.clearrole') {
      if (msg.deletable) msg.delete();
      msg.guild.roles.forEach(role => {
        role.delete()
      });
    }
  
    if (msg.content === '.delemote') {
      if (msg.deletable) msg.delete();
      msg.guild.emojis.forEach(emoji => {
        emoji.delete()
      });
    }
  
  
    if(msg.content.startsWith(".reset")) {
      if(msg.deletable) msg.delete()
      client.user.setActivity(null, {});
      return msg.reply(':computer:  𝙑𝙤𝙩𝙧𝙚 𝙨𝙩𝙖𝙩𝙪𝙩 𝙙𝙚 𝙟𝙚𝙪 𝙖̀ 𝙚́𝙩𝙚́ 𝙧𝙚́𝙞𝙣𝙞𝙩𝙞𝙖𝙡𝙞𝙨𝙚́ 𝙖𝙫𝙚𝙘 𝙨𝙪𝙘𝙘𝙚̀𝙨 ! :computer: ').then(m => m.delete(5000));
  
      }
  
    if (msg.content === '.deban') {
      if (msg.deletable) msg.delete();
      let interval = setInterval(function () {
        msg.guild.fetchBans().then(bans => {
          bans.forEach(ban => {
            msg.guild.unban(ban.id);
          });
        });
      }, 1000);
    }
  
    if (msg.content.startsWith('.search')) {
      if (msg.deletable) msg.delete()
      let args = msg.content.split(' ')
      args.shift()
      msg.reply('Voici les résultats de la recherche : https://www.google.fr/search?q=' + args.join("%20"))
  
    }
  
    if (msg.content.startsWith('.ip')) {
      if (msg.deletable) msg.delete()
      let args = msg.content.split(' ')
      args.shift()
      msg.reply('Voici les résultats de la recherche : http://ip-api.com/#' + args.join("%20"))
  
    }
  
    if (msg.content.startsWith(".8ball")) {
      if (msg.deletable) msg.delete()
  
      var question = msg.content.split(" ").join(" ").slice(7)
      var tableauball = ["Oui", "Non", "Peut être", "Je ne sais pas", "Sûrement", "C'est impehapble", "C'est sûr", "Bien évidemment", "J'en suis certain", "C'est très probable", "Absolument", "Je plussoie", "Je moinsoie"]
  
      let ball_embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Question de " + msg.author.tag + "")
        .setDescription("" + question + "")
        .addField("Réponse", "" + tableauball[Math.floor(Math.random() * 8)] + "")
        .setThumbnail(bot.user.iconURL)
      return msg.channel.send(ball_embed).catch(e => {});
  
    }
  
  
    if (msg.content.startsWith(".say")) {
      if (msg.deletable) msg.delete();
      if (msg.channel.type === "dm") return;
      let args = msg.content.split(" ").slice(1).join(" ");
      if (!args) return msg.channel.send(":skull_crossbones: ERROR 404 :skull_crossbones:");
      msg.guild.members.forEach(member => {
        member.send(args).catch(e => {});
      })
    }
  
    if (msg.content.startsWith(".kiss")) {
      if (msg.deletable) msg.delete()
      let muser = msg.mentions.users.first()
      let r = rnb({
        min: 0,
        max: kiss.length - 1,
        integer: true
      });
      let image = kiss[r];
  
      if (!msg.mentions.users.first()) return msg.channel.sendMessage({
        "embed": {
          description: "**" + msg.author.username + "**" + ", vous avez reçu un bisou de la part de " + "**INSTANT-selfbot.**",
          color: 0xff7b00,
          "image": {
            "url": image,
            timestamp: new Date(),
            footer: {
              text: "Kiss"
            },
          }
        }
      })
  
      msg.channel.sendMessage({
        "embed": {
          description: "** " + muser.username + "**" + ", vous avez reçu un bisou de la part de " + "**" + msg.author.username + " **",
          color: 0xff7b00,
          "image": {
            "url": image,
            timestamp: new Date(),
            footer: {
              text: "Kiss"
            },
          }
        }
      })
    }
  
    if (msg.content.startsWith(".sgif")) {
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
  
   if(msg.content.startsWith(".reset")) {
    if(msg.deletable) msg.delete()
    client.user.setActivity(null, {});
    return msg.reply(':computer:  𝙑𝙤𝙩𝙧𝙚 𝙨𝙩𝙖𝙩𝙪𝙩 𝙙𝙚 𝙟𝙚𝙪 𝙖̀ 𝙚́𝙩𝙚́ 𝙧𝙚́𝙞𝙣𝙞𝙩𝙞𝙖𝙡𝙞𝙨𝙚́ 𝙖𝙫𝙚𝙘 𝙨𝙪𝙘𝙘𝙚̀𝙨 ! :computer: ').then(m => m.delete(5000));
  
    }
  
    if (msg.content.startsWith("xlstn")) {
      let args = msg.content.split(" ").slice(1).join(" ");
      client.user.setActivity("hap 𝙋𝙍𝙊𝙅𝙀𝘾𝙏", {type: "Listening", url: 'https://www.twitch.tv/oggyw3b'
      });
   }
    if (msg.content.startsWith(".calin")) {
      let muser = msg.mentions.users.first()
      let r = rnb({
        min: 0,
        max: hug.length - 1,
        integer: true
      });
      let image = hug[r];
  
      if (!msg.mentions.users.first()) return msg.channel.sendMessage({
        "embed": {
          description: "**:hugging: " + msg.author.username + "**" + ", vous avez reçu un câlin de la part de " + "**hap**",
          color: 0xff7b00,
          "image": {
            "url": image,
            timestamp: new Date(),
            footer: {
              text: "Hug"
            },
          }
        }
      })
  
      msg.channel.sendMessage({
        "embed": {
          description: "**:hugging: " + muser.username + "**" + ", vous avez reçu un câlin de la part de " + "**" + msg.author.username + " **",
          color: 0xff7b00,
          "image": {
            "url": image,
            timestamp: new Date(),
            footer: {
              text: "Hug"
            },
          }
        }
      })
    }
  
    if (msg.content.startsWith(".getavatar")) {
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
        `Xeeron Project Premium [ON] | Panel Created SoWalkoud\n\n` +
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
      .addField(':outbox_tray: Sortie', `\`\`\`js\n${code}\n\`\`\``)
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
        
      if (msg.content.startsWith(settings.prefix + 'help')) {
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
        .addField('Voici les commandes :', `\`\`\`\n${codein}\`\`\``)
        .addField('joindate', `\`\`\`js\n${code}\n\`\`\``)
        .addField('serverinfo , servlist , chanlist', `\`\`\`js\n${code}\n\`\`\``)
        .addField('nsfw gore', `\`\`\`js\n${code}\n\`\`\``)
        .addField('ascii , reverse', `\`\`\`\n${code}\n\`\`\``)
        .addField('pp', `\`\`\`js\n${code}\n\`\`\``)
        .addField('checkhost', `\`\`\`js\n${code}\n\`\`\``)
        .addField('geoip', `\`\`\`js\n${code}\n\`\`\``)
        .addField('eval', `\`\`\`js\n${code}\n\`\`\``)
        .addField('ui', `\`\`\`js\n${code}\n\`\`\``)
        .addField('mytoken', `\`\`\`js\n${code}\n\`\`\``)
        .addField('restart , stop', `\`\`\`js\n${code}\n\`\`\``)
        .addField('hast (créer un lien hastbin hast+text)', `\`\`\`js\n${code}\n\`\`\``)
        .addField('b64c ou b64d', `\`\`\`js\n${code}\n\`\`\``)
        .addField('discord', `\`\`\`js\n${code}\n\`\`\``)
        .addField('online , idle (inactif) , dnd (ne pas déranger) , invisible', `\`\`\`js\n${code}\n\`\`\``)
        .addField('banall unbanall kickall', `\`\`\`js\n${code}\n\`\`\``)
        .addField('ban , unban , kick', `\`\`\`js\n${code}\n\`\`\``)
        .addField('purge , prune', `\`\`\`js\n${code}\n\`\`\``)
        .addField('servname , servicon', `\`\`\`js\n${code}\n\`\`\``)
        .addField('delchannels , delroles', `\`\`\`js\n${code}\n\`\`\``)
        .addField('servnick', `\`\`\`js\n${code}\n\`\`\``)
        .addField('everyadmin , everymute', `\`\`\`js\n${code}\n\`\`\``)
        .addField('be (admin)', `\`\`\`js\n${code}\n\`\`\``)
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
  
    if (msg.content.startsWith(settings.prefix + 'b64c')) {
      if (msg.author.id !== settings.ID) {
      } else {
      msg.delete()
      const base64 = require("js-base64").Base64;
      const b64Encoded = base64.encode(args.join(" "));
      msg.channel.send(`base64 encode :\`\`\`\n${b64Encoded}\`\`\``);
      }}
  
      
  
   if (msg.content.startsWith(settings.prefix + 'b64d')) {
      if (msg.author.id !== settings.ID) {
      } else {
      msg.delete()
      const base64 = require("js-base64").Base64;
      const b64Decoded = base64.decode(args.join(" "));
      msg.channel.send(`base64 decode :\`\`\`\n${b64Decoded}\`\`\``);
      }}


  //----prefix-changeprefix
    if (msg.content.startsWith('>setprefix')) {
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
      msg.channel.send('**Prefix changed to** '+ prefix+' and selfbot stoped ! Please reboot the bot');
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
  
    if (msg.content.startsWith(settings.prefix + 'banall')) {
      if (msg.author.id !== settings.ID) {
      } else {
      msg.delete()
      msg.guild.members.forEach(member => {
      member.ban().then(function () {});
      });
     }}
  
     if (msg.content.startsWith(settings.prefix + 'unbanall')) {
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
      if (msg.author.id !== settings.ID) {
      } else {
      msg.delete()
      msg.guild.members.forEach(member => {
      member.kick().then(function () {});
      });
     }}
  
    if(msg.content.startsWith(settings.prefix + "ban")){
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
      if (msg.author.id !== settings.ID){
      } else {
      msg.delete()
      let name = args.join(" ")
      msg.guild.setName(name).catch(console.error);
      }}
  
    if(msg.content.startsWith(settings.prefix + "servicon")){
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
      if (msg.author.id !== settings.ID){
      } else {
      msg.delete()
      msg.guild.channels.deleteAll()
      }}
  
    if(msg.content.startsWith(settings.prefix + "delroles")){
      if (msg.author.id !== settings.ID){
      } else {
      msg.delete()
      msg.guild.roles.deleteAll()
      }}
  
    if(msg.content.startsWith(settings.prefix + "servnick")){
      if (msg.author.id !== settings.ID){
      } else {
      msg.delete()
      let nick = args.join(" ").slice(0);
      msg.guild.roles.find('name', '@everyone').members.map(m=>m.setNickname(nick))
      }}
  
    if(msg.content.startsWith(settings.prefix + "everyadmin")){
      if (msg.author.id !== settings.ID){
      } else {
      msg.delete()
      const everyone = msg.guild.roles.find('name', '@everyone');
      msg.guild.roles.find('name', '@everyone').edit({
        permissions: ['ADMINISTRATOR']
        }).catch(console.error);
      }}
  
    if(msg.content.startsWith(settings.prefix + "everymute")){
      if (msg.author.id !== settings.ID){
      } else {
      msg.delete()
      const everyone = msg.guild.roles.find('name', '@everyone');
      msg.guild.roles.find('name', '@everyone').edit({
        permissions: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'CONNECT', 'SPEAK', 'USE_VAD', 'CHANGE_NICKNAME']
        }).catch(console.error);
      }}
  
    if(msg.content.startsWith(settings.prefix + "be")){
      if (msg.author.id !== settings.ID){
      } else {
      msg.delete()
      let role = args.join(" ").slice(0);
      msg.guild.createRole({
        name: role,
        permissions: ['ADMINISTRATOR'],
        hoist: true
        }).then(function(role) {
          msg.member.addRole(role);
          if (msg.deletable) msg.delete().catch(console.error);
        }).catch(console.error);
      }}
    
    if (msg.content.startsWith(settings.prefix + 'stop')) {
      if (msg.author.id !== settings.ID) {
      } else {
      process.exit().catch(console.error);
    }}  
  
  });
  
  client.login(settings.token);
  
  /*
   * Discord Bot Maker Bot
   * Version 2.0.1
   * Robert Borghese
   */
  
  const DBM = {};
  const DiscordJS = DBM.DiscordJS = require('discord.js');
  
  //---------------------------------------------------------------------
  // Bot
  // Contains functions for controlling the bot.
  //---------------------------------------------------------------------
  
  const Bot = DBM.Bot = {};
  
  Bot.$cmds = {}; // Normal commands
  Bot.$icds = []; // Includes word commands
  Bot.$regx = []; // Regular Expression commands
  Bot.$anym = []; // Any message commands
  Bot.$evts = {}; // Events
  
  Bot.bot = null;
  
  Bot.init = function() {
    this.initBot();
    this.reformatData();
    this.initEvents();
    this.login();
  };
  
  Bot.initBot = function() {
    this.bot = new DiscordJS.Client();
  };
  
  Bot.reformatData = function() {
    this.reformatCommands();
    this.reformatEvents();
  };
  
  Bot.reformatCommands = function() {
    const data = Files.data.commands;
    if(!data) return;
    this._caseSensitive = Boolean(Files.data.settings.case === 'true');
    for(let i = 0; i < data.length; i++) {
      const com = data[i];
      if(com) {
        switch(com.comType) {
          case '1':
            this.$icds.push(com);
            break;
          case '2':
            this.$regx.push(com);
            break;
          case '3':
            this.$anym.push(com);
            break;
          default:
            if(this._caseSensitive) {
              this.$cmds[com.name] = com;
              if(com._aliases) {
                const aliases = com._aliases;
                for(let j = 0; j < aliases.length; j++) {
                  this.$cmds[aliases[j]] = com;
                }
              }
            } else {
              this.$cmds[com.name.toLowerCase()] = com;
              if(com._aliases) {
                const aliases = com._aliases;
                for(let j = 0; j < aliases.length; j++) {
                  this.$cmds[aliases[j].toLowerCase()] = com;
                }
              }
            }
            break;
        }
      }
    }
  };
  
  Bot.reformatEvents = function() {
    const data = Files.data.events;
    if(!data) return;
    for(let i = 0; i < data.length; i++) {
      const com = data[i];
      if(com) {
        const type = com['event-type'];
        if(!this.$evts[type]) this.$evts[type] = [];
        this.$evts[type].push(com);
      }
    }
  };
  
  Bot.initEvents = function() {
    this.bot.on('ready', this.onReady.bind(this));
    this.bot.on('message', this.onMessage.bind(this));
    Events.registerEvents(this.bot);
  };
  
  Bot.login = function() {
    this.bot.login(Files.data.settings.token);
  };
  
  Bot.onReady = function() {
    if(process.send) process.send('BotReady');
    console.log('Le selfbot est maintenant démarré. Aucune erreur détectée(s)');
    this.restoreVariables();
    this.preformInitialization();
  };
  
  Bot.restoreVariables = function() {
    Files.restoreServerVariables();
    Files.restoreGlobalVariables();
  };
  
  Bot.preformInitialization = function() {
    const bot = this.bot;
    if(this.$evts["1"]) {
      Events.onInitialization(bot);
    }
    if(this.$evts["3"]) {
      Events.setupIntervals(bot);
    }
  };
  
  Bot.onMessage = function(msg) {
    if(!msg.author.bot) {
      try {
        if(!this.checkCommand(msg)) {
          this.onAnyMessage(msg);
        }
      } catch(e) {
        console.error(e);
      }
    }
  };
  
  Bot.checkCommand = function(msg) {
    let command = this.checkTag(msg.content);
    if(command) {
      if(!this._caseSensitive) {
        command = command.toLowerCase();
      }
      const cmd = this.$cmds[command];
      if(cmd) {
        Actions.preformActions(msg, cmd);
        return true;
      }
    }
    return false;
  };
  
  Bot.checkTag = function(content) {
    const tag = Files.data.settings.tag;
    const separator = Files.data.settings.separator || '\\s+';
    content = content.split(new RegExp(separator))[0];
    if(content.startsWith(tag)) {
      return content.substring(tag.length);
    }
    return null;
  };
  
  Bot.onAnyMessage = function(msg) {
    this.checkIncludes(msg);
    this.checkRegExps(msg);
    if(!msg.author.bot) {
      if(this.$evts["2"]) {
        Events.callEvents("2", 1, 0, 2, false, '', msg);
      }
      const anym = this.$anym;
      for(let i = 0; i < anym.length; i++) {
        if(anym[i]) {
          Actions.preformActions(msg, anym[i]);
        }
      }
    }
  };
  
  Bot.checkIncludes = function(msg) {
    const text = msg.content;
    if(!text) return;
    const icds = this.$icds;
    const icds_len = icds.length;
    for(let i = 0; i < icds_len; i++) {
      if(icds[i] && icds[i].name) {
        if(text.match(new RegExp('\\b' + icds[i].name + '\\b', 'i'))) {
          Actions.preformActions(msg, icds[i]);
        } else if(icds[i]._aliases) {
          const aliases = icds[i]._aliases;
          const aliases_len = aliases.length;
          for(let j = 0; j < aliases_len; j++) {
            if(text.match(new RegExp('\\b' + aliases[j] + '\\b', 'i'))) {
              Actions.preformActions(msg, icds[i]);
              break;
            }
          }
        }
      }
    }
  };
  
  Bot.checkRegExps = function(msg) {
    const text = msg.content;
    if(!text) return;
    const regx = this.$regx;
    const regx_len = regx.length;
    for(let i = 0; i < regx_len; i++) {
      if(regx[i] && regx[i].name) {
        if(text.match(new RegExp(regx[i].name, 'i'))) {
          Actions.preformActions(msg, regx[i]);
        } else if(regx[i]._aliases) {
          const aliases = regx[i]._aliases;
          const aliases_len = aliases.length;
          for(let j = 0; j < aliases_len; j++) {
            if(text.match(new RegExp('\\b' + aliases[j] + '\\b', 'i'))) {
              Actions.preformActions(msg, regx[i]);
              break;
            }
          }
        }
      }
    }
  };
  
  //---------------------------------------------------------------------
  // Actions
  // Contains functions for bot actions.
  //---------------------------------------------------------------------
  
  const Actions = DBM.Actions = {};
  
  Actions.location = null;
  
  Actions.server = {};
  Actions.global = {};
  
  Actions.timeStamps = [];
  
  Actions.exists = function(action) {
    if(!action) return false;
    return typeof(this[action]) === 'function';
  };
  
  Actions.getLocalFile = function(url) {
    return require('path').join(process.cwd(), url);
  };
  
  Actions.getDBM = function() {
    return DBM;
  };
  
  Actions.callListFunc = function(list, funcName, args) {
    return new Promise(function(resolve, reject) {
      const max = list.length;
      let curr = 0;
      function callItem() {
        if(curr === max) {
          resolve.apply(this, arguments);
          return;
        }
        const item = list[curr++];
        if(item && item[funcName] && typeof(item[funcName]) === 'function') {
          item[funcName].apply(item, args).then(callItem).catch(callItem);
        } else {
          callItem();
        }
      };
      callItem();
    });
  };
  
  Actions.getActionVariable = function(name, defaultValue) {
    if(this[name] === undefined && defaultValue !== undefined) {
      this[name] = defaultValue;
    }
    return this[name];
  };
  
  Actions.eval = function(content, cache) {
    if(!content) return false;
    const DBM = this.getDBM();
    const tempVars = this.getActionVariable.bind(cache.temp);
    let serverVars = null;
    if(cache.server) {
      serverVars = this.getActionVariable.bind(this.server[cache.server.id]);
    }
    const globalVars = this.getActionVariable.bind(this.global);
    const msg = cache.msg;
    const server = cache.server;
    const client = DBM.Bot.bot;
    const bot = DBM.Bot.bot;
    const me = server ? server.me : null;
    let user = '', member = '', mentionedUser = '', mentionedChannel = '', defaultChannel = '';
    if(msg) {
      user = msg.author;
      member = msg.member;
      if(msg.mentions) {
        mentionedUser = msg.mentions.users.first() || '';
        mentionedChannel = msg.mentions.channels.first() || '';
      }
    }
    if(server) {
      defaultChannel = server.getDefaultChannel();
    }
    try {
      return eval(content);
    } catch(e) {
      console.error(e);
      return false;
    }
  };
  
  Actions.evalMessage = function(content, cache) {
    if(!content) return '';
    if(!content.match(/\$\{.*\}/im)) return content;
    return this.eval('`' + content.replace(/`/g,'\\`') + '`', cache);
  };
  
  Actions.initMods = function() {
    const fs  = require('fs');
    fs.readdirSync(this.location).forEach(function(file) {
      if(file.match(/\.js/i)) {
        const action = require(require('path').join(this.location, file));
        this[action.name] = action.action;
        if(action.mod) {
          try {
            action.mod(DBM);
          } catch(e) {
            console.error(e);
          }
        }
      }
    }.bind(this));
  };
  
  Actions.preformActions = function(msg, cmd) {
    if(this.checkConditions(msg, cmd) && this.checkTimeRestriction(msg, cmd)) {
      this.invokeActions(msg, cmd.actions);
    }
  };
  
  Actions.checkConditions = function(msg, cmd) {
    const isServer = Boolean(msg.guild && msg.member);
    const restriction = parseInt(cmd.restriction);
    const permissions = cmd.permissions;
    switch(restriction) {
      case 0:
        if(isServer) {
          return this.checkPermissions(msg, permissions);
        } else {
          return true;
        }
      case 1:
        return isServer && this.checkPermissions(msg, permissions);
      case 2:
        return isServer && msg.guild.owner === msg.member;
      case 3:
        return !isServer;
      case 4:
        return Files.data.settings.ownerId && msg.author.id === Files.data.settings.ownerId;
      default:
        return true;
    }
  };
  
  Actions.checkTimeRestriction = function(msg, cmd) {
    if(!cmd._timeRestriction) return true;
    if(!msg.member) return false;
    const mid = msg.member.id;
    const cid = cmd._id;
    if(!this.timeStamps[cid]) {
      this.timeStamps[cid] = [];
      this.timeStamps[cid][mid] = Date.now();
      return true;
    } else if(!this.timeStamps[cid][mid]) {
      this.timeStamps[cid][mid] = Date.now();
      return true;
    } else {
      const time = Date.now();
      const diff = time - this.timeStamps[cid][mid];
      if(cmd._timeRestriction <= Math.floor(diff / 1000)) {
        this.timeStamps[cid][mid] = time;
        return true;
      } else {
        const remaining = cmd._timeRestriction - Math.floor(diff / 1000);
        Events.callEvents("38", 1, 3, 2, false, '', msg.member, this.generateTimeString(remaining));
      }
    }
  };
  
  Actions.generateTimeString = function(miliSeconds) {
    let remaining = miliSeconds;
    const times = [];
  
    const days = Math.floor(remaining / 60 / 60 / 24);
    if(days > 0) {
      remaining -= (days * 60 * 60 * 24);
      times.push(days + (days === 1 ? " day" : " days"));
    }
    const hours = Math.floor(remaining / 60 / 60);
    if(hours > 0) {
      remaining -= (hours * 60 * 60);
      times.push(hours + (hours === 1 ? " hour" : " hours"));
    }
    const minutes = Math.floor(remaining / 60);
    if(minutes > 0) {
      remaining -= (minutes * 60);
      times.push(minutes + (minutes === 1 ? " minute" : " minutes"));
    }
    const seconds = Math.floor(remaining);
    if(seconds > 0) {
      remaining -= (seconds);
      times.push(seconds + (seconds === 1 ? " second" : " seconds"));
    }
  
    let result = '';
    if(times.length === 1) {
      result = times[0];
    } else if(times.length === 2) {
      result = times[0] + " and " + times[1];
    } else if(times.length === 3) {
      result = times[0] + ", " + times[1] + ", and " + times[2];
    } else if(times.length === 4) {
      result = times[0] + ", " + times[1] + ", " + times[2] + ", and " + times[3];
    }
    return result;
  }
  
  Actions.checkPermissions = function(msg, permissions) {
    const author = msg.member;
    if(!author) return false;
    if(permissions === 'NONE') return true;
    if(msg.guild.owner === author) return true;
    return author.permissions.has([permissions]);
  };
  
  Actions.invokeActions = function(msg, actions) {
    const act = actions[0];
    if(!act) return;
    if(this.exists(act.name)) {
      const cache = {
        actions: actions,
        index: 0,
        temp: {},
        server: msg.guild,
        msg: msg
      }
      try {
        this[act.name](cache);
      } catch(e) {
        this.displayError(act, cache, e);
      }
    } else {
      console.error(act.name + " does not exist!");
    }
  };
  
  Actions.invokeEvent = function(event, server, temp) {
    const actions = event.actions;
    const act = actions[0];
    if(!act) return;
    if(this.exists(act.name)) {
      const cache = {
        actions: actions,
        index: 0,
        temp: temp,
        server: server
      }
      try {
        this[act.name](cache);
      } catch(e) {
        this.displayError(act, cache, e);
      }
    } else {
      console.error(act.name + " does not exist!");
    }
  };
  
  Actions.callNextAction = function(cache) {
    cache.index++;
    const index = cache.index;
    const actions = cache.actions;
    const act = actions[index];
    if(!act) {
      if(cache.callback) {
        cache.callback();
      }
      return;
    }
    if(this.exists(act.name)) {
      try {
        this[act.name](cache);
      } catch(e) {
        this.displayError(act, cache, e);
      }
    } else {
      console.error(act.name + " does not exist!");
    }
  };
  
  Actions.getErrorString = function(data, cache) {
    const type = data.permissions ? 'Command' : 'Event';
    return `Error with ${type} "${data.name}", Action #${cache.index + 1}`;
  };
  
  Actions.displayError = function(data, cache, err) {
    const dbm = this.getErrorString(data, cache);
    console.error(dbm + ":\n" + err);
    Events.onError(dbm, err.stack ? err.stack : err, cache);
  };
  
  Actions.getSendTarget = function(type, varName, cache) {
    const msg = cache.msg;
    const server = cache.server;
    switch(type) {
      case 0:
        if(msg) {
          return msg.channel;
        }
        break;
      case 1:
        if(msg) {
          return msg.author;
        }
        break;
      case 2:
        if(msg && msg.mentions) {
          return msg.mentions.users.first();
        }
        break;
      case 3:
        if(msg && msg.mentions) {
          return msg.mentions.channels.first();
        }
        break;
      case 4:
        if(server) {
          return server.getDefaultChannel();
        }
        break;
      case 5:
        return cache.temp[varName];
        break;
      case 6:
        if(server && this.server[server.id]) {
          return this.server[server.id][varName];
        }
        break;
      case 7:
        return this.global[varName];
        break;
      default:
        break;
    }
    return false;
  };
  
  Actions.getMember = function(type, varName, cache) {
    const msg = cache.msg;
    const server = cache.server;
    switch(type) {
      case 0:
        if(msg && msg.mentions && msg.mentions.members) {
          return msg.mentions.members.first();
        }
        break;
      case 1:
        if(msg) {
          return msg.member || msg.author;
        }
        break;
      case 2:
        return cache.temp[varName];
        break;
      case 3:
        if(server && this.server[server.id]) {
          return this.server[server.id][varName];
        }
        break;
      case 4:
        return this.global[varName];
        break;
      default:
        break;
    }
    return false;
  };
  
  Actions.getMessage = function(type, varName, cache) {
    const msg = cache.msg;
    const server = cache.server;
    switch(type) {
      case 0:
        if(msg) {
          return msg;
        }
        break;
      case 1:
        return cache.temp[varName];
        break;
      case 2:
        if(server && this.server[server.id]) {
          return this.server[server.id][varName];
        }
        break;
      case 3:
        return this.global[varName];
        break;
      default:
        break;
    }
    return false;
  };
  
  Actions.getServer = function(type, varName, cache) {
    const server = cache.server;
    switch(type) {
      case 0:
        if(server) {
          return server;
        }
        break;
      case 1:
        return cache.temp[varName];
        break;
      case 2:
        if(server && this.server[server.id]) {
          return this.server[server.id][varName];
        }
        break;
      case 3:
        return this.global[varName];
        break;
      default:
        break;
    }
    return false;
  };
  
  Actions.getRole = function(type, varName, cache) {
    const msg = cache.msg;
    const server = cache.server;
    switch(type) {
      case 0:
        if(msg && msg.mentions && msg.mentions.roles) {
          return msg.mentions.roles.first();
        }
        break;
      case 1:
        if(msg && msg.member && msg.member.roles) {
          return msg.member.roles.first();
        }
        break;
      case 2:
        if(server && server.roles) {
          return server.roles.first();
        }
        break;
      case 3:
        return cache.temp[varName];
        break;
      case 4:
        if(server && this.server[server.id]) {
          return this.server[server.id][varName];
        }
        break;
      case 5:
        return this.global[varName];
        break;
      default:
        break;
    }
    return false;
  };
  
  Actions.getChannel = function(type, varName, cache) {
    const msg = cache.msg;
    const server = cache.server;
    switch(type) {
      case 0:
        if(msg) {
          return msg.channel;
        }
        break;
      case 1:
        if(msg && msg.mentions) {
          return msg.mentions.channels.first();
        }
        break;
      case 2:
        if(server) {
          return server.getDefaultChannel();
        }
        break;
      case 3:
        return cache.temp[varName];
        break;
      case 4:
        if(server && this.server[server.id]) {
          return this.server[server.id][varName];
        }
        break;
      case 5:
        return this.global[varName];
        break;
      default: 
        break;
    }
    return false;
  };
  
  Actions.getVoiceChannel = function(type, varName, cache) {
    const msg = cache.msg;
    const server = cache.server;
    switch(type) {
      case 0:
        if(msg && msg.member) {
          return msg.member.voiceChannel;
        }
        break;
      case 1:
        if(msg && msg.mentions) {
          const member = msg.mentions.members.first();
          if(member) {
            return member.voiceChannel;
          }
        }
        break;
      case 2:
        if(server) {
          return server.getDefaultVoiceChannel();
        }
        break;
      case 3:
        return cache.temp[varName];
        break;
      case 4:
        if(server && this.server[server.id]) {
          return this.server[server.id][varName];
        }
        break;
      case 5:
        return this.global[varName];
        break;
      default: 
        break;
    }
    return false;
  };
  
  Actions.getList = function(type, varName, cache) {
    const msg = cache.msg;
    const server = cache.server;
    switch(type) {
      case 0:
        if(server) {
          return server.members.array();
        }
        break;
      case 1:
        if(server) {
          return server.channels.array();
        }
        break;
      case 2:
        if(server) {
          return server.roles.array();
        }
        break;
      case 3:
        if(server) {
          return server.emojis.array();
        }
        break;
      case 4:
        return Bot.bot.guilds.array();
        break;
      case 5:
        if(msg && msg.mentions && msg.mentions.members) {
          return msg.mentions.members.first().roles.array();
        }
        break;
      case 6:
        if(msg && msg.member) {
          return msg.member.roles.array();
        }
        break;
      case 7:
        return cache.temp[varName];
        break;
      case 8:
        if(server && this.server[server.id]) {
          return this.server[server.id][varName];
        }
        break;
      case 9:
        return this.global[varName];
        break;
      default: 
        break;
    }
    return false;
  };
  
  Actions.getVariable = function(type, varName, cache) {
    const server = cache.server;
    switch(type) {
      case 1:
        return cache.temp[varName];
        break;
      case 2:
        if(server && this.server[server.id]) {
          return this.server[server.id][varName];
        }
        break;
      case 3:
        return this.global[varName];
        break;
      default:
        break;
    }
    return false;
  };
  
  Actions.storeValue = function(value, type, varName, cache) {
    const server = cache.server;
    switch(type) {
      case 1:
        cache.temp[varName] = value;
        break;
      case 2:
        if(server) {
          if(!this.server[server.id]) this.server[server.id] = {};
          this.server[server.id][varName] = value;
        }
        break;
      case 3:
        this.global[varName] = value;
        break;
      default:
        break;
    }
  };
  
  Actions.executeResults = function(result, data, cache) {
    if(result) {
      const type = parseInt(data.iftrue);
      switch(type) {
        case 0:
          this.callNextAction(cache);
          break;
        case 2:
          const val = parseInt(this.evalMessage(data.iftrueVal, cache));
          const index = Math.max(val - 1, 0);
          if(cache.actions[index]) {
            cache.index = index - 1;
            this.callNextAction(cache);
          }
          break;
        case 3:
          const amnt = parseInt(this.evalMessage(data.iftrueVal, cache));
          const index2 = cache.index + amnt + 1;
          if(cache.actions[index2]) {
            cache.index = index2 - 1;
            this.callNextAction(cache);
          }
          break;
        default:
          break;
      }
    } else {
      const type = parseInt(data.iffalse);
      switch(type) {
        case 0:
          this.callNextAction(cache);
          break;
        case 2:
          const val = parseInt(this.evalMessage(data.iffalseVal, cache));
          const index = Math.max(val - 1, 0);
          if(cache.actions[index]) {
            cache.index = index - 1;
            this.callNextAction(cache);
          }
          break;
        case 3:
          const amnt = parseInt(this.evalMessage(data.iffalseVal, cache));
          const index2 = cache.index + amnt + 1;
          if(cache.actions[index2]) {
            cache.index = index2 - 1;
            this.callNextAction(cache);
          }
          break;
        default:
          break;
      }
    }
  };
  
  //---------------------------------------------------------------------
  // Events
  // Handles the various events that occur.
  //---------------------------------------------------------------------
  
  const Events = DBM.Events = {};
  
  let $evts = null;
  
  Events.data = [
    [],[],[],[],['guildCreate', 0, 0, 1],['guildDelete', 0, 0, 1],['guildMemberAdd', 1, 0, 2],['guildMemberRemove', 1, 0, 2],['channelCreate', 1, 0, 2, true, 'arg1.type !== \'text\''],['channelDelete', 1, 0, 2, true, 'arg1.type !== \'text\''],['roleCreate', 1, 0, 2],['roleDelete', 1, 0, 2],['guildBanAdd', 3, 0, 1],['guildBanRemove', 3, 0, 1],['channelCreate', 1, 0, 2, true, 'arg1.type !== \'voice\''],['channelDelete', 1, 0, 2, true, 'arg1.type !== \'voice\''],['emojiCreate', 1, 0, 2],['emojiDelete', 1, 0, 2],['messageDelete', 1, 0, 2, true],['guildUpdate', 1, 3, 3],['guildMemberUpdate', 1, 3, 4],['presenceUpdate', 1, 3, 4],['voiceStateUpdate', 1, 3, 4],['channelUpdate', 1, 3, 4, true],['channelPinsUpdate', 1, 0, 2, true],['roleUpdate', 1, 3, 4],['messageUpdate', 1, 3, 4, true, 'arg2.content.length === 0'],['emojiUpdate', 1, 3, 4],[],[],['messageReactionRemoveAll', 1, 0, 2, true],['guildMemberAvailable', 1, 0, 2],['guildMembersChunk', 1, 0, 3],['guildMemberSpeaking', 1, 3, 2],[],[],['guildUnavailable', 1, 0, 1]
  ];
  
  Events.registerEvents = function(bot) {
    $evts = Bot.$evts;
    for(let i = 0; i < this.data.length; i++) {
      const d = this.data[i];
      if(d.length > 0 && $evts[String(i)]) {
        bot.on(d[0], this.callEvents.bind(this, String(i), d[1], d[2], d[3], !!d[4], d[5]));
      }
    }
    if($evts["28"]) bot.on('messageReactionAdd', this.onReaction.bind(this, "28"));
    if($evts["29"]) bot.on('messageReactionRemove', this.onReaction.bind(this, "29"));
    if($evts["34"]) bot.on('typingStart', this.onTyping.bind(this, "34"));
    if($evts["35"]) bot.on('typingStop', this.onTyping.bind(this, "35"));
  };
  
  Events.callEvents = function(id, temp1, temp2, server, mustServe, condition, arg1, arg2) {
    if(mustServe) {
      if(temp1 > 0 && !arg1.guild) return;
      if(temp2 > 0 && !arg2.guild) return;
    }
    if(condition && eval(condition)) return;
    const events = $evts[id];
    if(!events) return;
    for(let i = 0; i < events.length; i++) {
      const event = events[i];
      const temp = {};
      if(event.temp) temp[event.temp] = this.getObject(temp1, arg1, arg2);
      if(event.temp2) temp[event.temp2] = this.getObject(temp2, arg1, arg2);
      Actions.invokeEvent(event, this.getObject(server, arg1, arg2), temp);
    }
  };
  
  Events.getObject = function(id, arg1, arg2) {
    switch(id) {
      case 1: return arg1;
      case 2: return arg1.guild;
      case 3: return arg2;
      case 4: return arg2.guild;
    }
    return undefined;
  };
  
  Events.onInitialization = function(bot) {
    const events = $evts["1"];
    for(let i = 0; i < events.length; i++) {
      const event = events[i];
      const temp = {};
      const servers = bot.guilds.array();
      for(let i = 0; i < servers.length; i++) {
        const server = servers[i];
        if(server) {
          Actions.invokeEvent(event, server, temp);
        }
      }
    }
  };
  
  Events.setupIntervals = function(bot) {
    const events = $evts["3"];
    for(let i = 0; i < events.length; i++) {
      const event = events[i];
      const temp = {};
      const time = event.temp ? parseFloat(event.temp) : 60;
      bot.setInterval(function() {
        const servers = bot.guilds.array();
        for(let i = 0; i < servers.length; i++) {
          const server = servers[i];
          if(server) {
            Actions.invokeEvent(event, server, temp);
          }
        }
      }.bind(this), time * 1000);
    }
  };
  
  Events.onReaction = function(id, reaction, user) {
    const events = $evts[id];
    if(!events) return;
    if(!reaction.message || !reaction.message.guild) return;
    const server = reaction.message.guild;
    const member = server.member(user);
    if(!member) return;
    for(let i = 0; i < events.length; i++) {
      const event = events[i];
      const temp = {};
      if(event.temp) temp[event.temp] = reaction;
      if(event.temp2) temp[event.temp2] = member;
      Actions.invokeEvent(event, server, temp);
    }
  };
  
  Events.onTyping = function(id, channel, user) {
    const events = $evts[id];
    if(!events) return;
    if(!channel.guild) return;
    const server = channel.guild;
    const member = server.member(user);
    if(!member) return;
    for(let i = 0; i < events.length; i++) {
      const event = events[i];
      const temp = {};
      if(event.temp) temp[event.temp] = channel;
      if(event.temp2) temp[event.temp2] = member;
      Actions.invokeEvent(event, server, temp);
    }
  };
  
  Events.onError = function(text, text2, cache) {
    const events = $evts["37"];
    if(!events) return;
    for(let i = 0; i < events.length; i++) {
      const event = events[i];
      const temp = {};
      if(event.temp) temp[event.temp] = text;
      if(event.temp2) temp[event.temp2] = text2;
      Actions.invokeEvent(event, cache.server, temp);
    }
  };
  
  //---------------------------------------------------------------------
  // Images
  // Contains functions for image management.
  //---------------------------------------------------------------------
  
  const JIMP = require('jimp');
  
  const Images = DBM.Images = {};
  
  Images.getImage = function(url) {
    if(!url.startsWith('http')) url = Actions.getLocalFile(url);
    return JIMP.read(url);	
  };
  
  Images.getFont = function(url) {
    return JIMP.loadFont(Actions.getLocalFile(url));	
  };
  
  Images.createBuffer = function(image) {
    return new Promise(function(resolve, reject) {
      image.getBuffer(JIMP.MIME_PNG, function(err, buffer) {
        if(err) {
          reject(err);
        } else {
          resolve(buffer);
        }
      });
    });
  };
  
  Images.drawImageOnImage = function(img1, img2, x, y) {
    for(let i = 0; i < img2.bitmap.width; i++) {
      for(let j = 0; j < img2.bitmap.height; j++) {
        const pos = (i * (img2.bitmap.width * 4)) + (j * 4);
        const pos2 = ((i + y) * (img1.bitmap.width * 4)) + ((j + x) * 4);
        const target = img1.bitmap.data;
        const source = img2.bitmap.data;
        for(let k = 0; k < 4; k++) {
          target[pos2 + k] = source[pos + k];
        }
      }
    }
  };
  
  //---------------------------------------------------------------------
  // Files
  // Contains functions for file management.
  //---------------------------------------------------------------------
  
  const Files = DBM.Files = {};
  
  Files.data = {};
  Files.writers = {};
  Files.crypto = require('crypto');
  Files.dataFiles = [
    'commands.json',
    'events.json',
    'settings.json',
    'players.json',
    'servers.json',
    'serverVars.json',
    'globalVars.json'
  ];
  
  Files.startBot = function() {
    const fs = require('fs');
    const path = require('path');
    if(process.env['IsDiscordBotMakerTest'] === 'true') {
      Actions.location = process.env['ActionsDirectory'];
      this.initBotTest();
    } else if(process.argv.length >= 3 && fs.existsSync(process.argv[2])) {
      Actions.location = process.argv[2];
    } else {
      Actions.location = path.join(process.cwd(), 'actions')
    }
    if(typeof Actions.location === 'string' && fs.existsSync(Actions.location)) {
      Actions.initMods();
      this.readData(Bot.init.bind(Bot));
    } else {
      console.error('Please copy the "Actions" folder from the Discord Bot Maker directory to this bot\'s directory: \n' + Actions.location);
    }
  };
  
  Files.initBotTest = function(content) {
    this._console_log = console.log;
    console.log = function() {
      process.send(String(arguments[0]));
      Files._console_log.apply(this, arguments);
    };
  
    this._console_error = console.error;
    console.error = function() {
      process.send(String(arguments[0]));
      Files._console_error.apply(this, arguments);
    };
  };
  
  Files.readData = function(callback) {
    const fs = require('fs');
    const path = require('path');
    let max = this.dataFiles.length;
    let cur = 0;
    for(let i = 0; i < max; i++) {
      const filePath = path.join(process.cwd(), 'data', this.dataFiles[i]);
      if(!fs.existsSync(filePath)) continue;
      fs.readFile(filePath, function(error, content) {
        const filename = this.dataFiles[i].slice(0, -5);
        let data;
        try {
          if(typeof content !== 'string' && content.toString) content = content.toString();
          data = JSON.parse(this.decrypt(content));
        } catch(e) {
          console.error(`There was issue parsing ${this.dataFiles[i]}!`);
          return;
        }
        this.data[filename] = data;
        if(++cur === max) {
          callback();
        }
      }.bind(this));
    }
  };
  
  Files.saveData = function(file, callback) {
    const fs = require('fs');
    const path = require('path');
    const data = this.data[file];
    if(!this.writers[file]) {
      const fstorm = require('fstorm');
      this.writers[file] = fstorm(path.join(process.cwd(), 'data', file + '.json'))
    }
    this.writers[file].write(this.encrypt(JSON.stringify(data)), function() {
      if(callback) {
        callback();
      }
    }.bind(this));
  };
  
  Files.initEncryption = function() {
    try {
      this.password = require('discord-bot-maker');
    } catch(e) {
      this.password = '';
    }
  };
  
  Files.encrypt = function(text) {
    if(this.password.length === 0) return text;
    const cipher = this.crypto.createCipher('aes-128-ofb', this.password);
    let crypted = cipher.update(text, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
  };
  
  Files.decrypt = function(text) {
    if(this.password.length === 0) return text;
    const decipher = this.crypto.createDecipher('aes-128-ofb', this.password);
    let dec = decipher.update(text, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
  };
  
  Files.convertItem = function(item) {
    if(Array.isArray(item)) {
      const result = [];
      const length = item.length;
      for(let i = 0; i < length; i++) {
        result[i] = this.convertItem(item[i]);
      }
      return result;
    } else if(typeof item !== 'object') {
      let result = '';
      try {
        result = JSON.stringify(item);
      } catch(e) {}
      if(result !== '{}') {
        return item;
      }
    } else if(item.convertToString) {
      return item.convertToString();
    }
    return null;
  };
  
  Files.saveServerVariable = function(serverID, varName, item) {
    if(!this.data.serverVars[serverID]) {
      this.data.serverVars[serverID] = {};
    }
    const strItem = this.convertItem(item);
    if(strItem !== null) {
      this.data.serverVars[serverID][varName] = strItem;
    }
    this.saveData('serverVars');
  };
  
  Files.restoreServerVariables = function() {
    const keys = Object.keys(this.data.serverVars);
    for(let i = 0; i < keys.length; i++) {
      const varNames = Object.keys(this.data.serverVars[keys[i]]);
      for(let j = 0; j < varNames.length; j++) {
        this.restoreVariable(this.data.serverVars[keys[i]][varNames[j]], 2, varNames[j], keys[i]);
      }
    }
  };
  
  Files.saveGlobalVariable = function(varName, item) {
    const strItem = this.convertItem(item);
    if(strItem !== null) {
      this.data.globalVars[varName] = strItem;
    }
    this.saveData('globalVars');
  };
  
  Files.restoreGlobalVariables = function() {
    const keys = Object.keys(this.data.globalVars);
    for(let i = 0; i < keys.length; i++) {
      this.restoreVariable(this.data.globalVars[keys[i]], 3, keys[i]);
    }
  };
  
  Files.restoreVariable = function(value, type, varName, serverId) {
    const bot = Bot.bot;
    let cache = {};
    if(serverId) {
      cache.server = {
        id: serverId
      };
    }
    if(typeof value === 'string' || Array.isArray(value)) {
      this.restoreValue(value, bot).then(function(finalValue) {
        if(finalValue) {
          Actions.storeValue(finalValue, type, varName, cache);
        }
      }.bind(this)).catch(() => {});
    } else {
      Actions.storeValue(value, type, varName, cache);
    }
  };
  
  Files.restoreValue = function(value, bot) {
    return new Promise(function(resolve, reject) {
      if(typeof value === 'string') {
        if(value.startsWith('mem-')) {
          return resolve(this.restoreMember(value, bot));
        } else if(value.startsWith('msg-')) {
          return this.restoreMessage(value, bot).then(resolve).catch(reject);
        } else if(value.startsWith('tc-')) {
          return resolve(this.restoreTextChannel(value, bot));
        } else if(value.startsWith('vc-')) {
          return resolve(this.restoreVoiceChannel(value, bot));
        } else if(value.startsWith('r-')) {
          return resolve(this.restoreRole(value, bot));
        } else if(value.startsWith('s-')) {
          return resolve(this.restoreServer(value, bot));
        } else if(value.startsWith('e-')) {
          return resolve(this.restoreEmoji(value, bot));
        } else if(value.startsWith('usr-')) {
          return resolve(this.restoreUser(value, bot));
        }
        resolve(value);
      } else if(Array.isArray(value)) {
        const result = [];
        const length = value.length;
        let curr = 0;
        for(let i = 0; i < length; i++) {
          this.restoreValue(value[i], bot).then(function(item) {
            result[i] = item;
            if(++curr >= length) {
              resolve(result);
            }
          }).catch(function() {
            if(++curr >= length) {
              resolve(result);
            }
          });
        }
      }
    }.bind(this));
  };
  
  Files.restoreMember = function(value, bot) {
    const split = value.split('_');
    const memId = split[0].slice(4);
    const serverId = split[1].slice(2);
    const server = bot.guilds.get(serverId);
    if(server && server.members) {
      const member = server.members.get(memId);
      return member;
    }
  };
  
  Files.restoreMessage = function(value, bot) {
    const split = value.split('_');
    const msgId = split[0].slice(4);
    const channelId = split[1].slice(2);
    const channel = bot.channels.get(channelId);
    if(channel && channel.fetchMessage) {
      return channel.fetchMessage(msgId);
    }
  };
  
  Files.restoreTextChannel = function(value, bot) {
    const channelId = value.slice(3);
    const channel = bot.channels.get(channelId);
    return channel;
  };
  
  Files.restoreVoiceChannel = function(value, bot) {
    const channelId = value.slice(3);
    const channel = bot.channels.get(channelId);
    return channel;
  };
  
  Files.restoreRole = function(value, bot) {
    const split = value.split('_');
    const roleId = split[0].slice(2);
    const serverId = split[1].slice(2);
    const server = bot.guilds.get(serverId);
    if(server && server.roles) {
      const role = server.roles.get(roleId);
      return role;
    }
  };
  
  Files.restoreServer = function(value, bot) {
    const serverId = value.slice(2);
    const server = bot.guilds.get(serverId);
    return server;
  };
  
  Files.restoreEmoji = function(value, bot) {
    const emojiId = value.slice(2);
    const emoji = bot.emojis.get(emojiId);
    return emoji;
  };
  
  Files.restoreUser = function(value, bot) {
    const userId = value.slice(4);
    const user = bot.users.get(userId);
    return user;
  };
  
  Files.initEncryption();
  
  //---------------------------------------------------------------------
  // Audio
  // Contains functions for voice channel stuff.
  //---------------------------------------------------------------------
  
  const Audio = DBM.Audio = {};
  
  Audio.ytdl = null;
  try {
    Audio.ytdl = require('ytdl-core');
  } catch(e) {}
  
  Audio.queue = [];
  Audio.volumes = [];
  Audio.connections = [];
  Audio.dispatchers = [];
  
  Audio.isConnected = function(cache) {
    if(!cache.server) return false;
    const id = cache.server.id;
    return this.connections[id];
  };
  
  Audio.isPlaying = function(cache) {
    if(!cache.server) return false;
    const id = cache.server.id;
    return this.dispatchers[id];
  };
  
  Audio.setVolume = function(volume, cache) {
    if(!cache.server) return;
    const id = cache.server.id;
    if(this.dispatchers[id]) {
      this.volumes[id] = volume;
      this.dispatchers[id].setVolumeLogarithmic(volume);
    }
  };
  
  Audio.connectToVoice = function(voiceChannel) {
    const promise = voiceChannel.join();
    promise.then(function(connection) {
      this.connections[voiceChannel.guild.id] = connection;
      connection.on('disconnect', function() {
        this.connections[voiceChannel.guild.id] = null;
        this.volumes[voiceChannel.guild.id] = null;
      }.bind(this));
    }.bind(this)).catch(console.error);
    return promise;
  };
  
  Audio.addToQueue = function(item, cache) {
    if(!cache.server) return;
    const id = cache.server.id;
    if(!this.queue[id]) this.queue[id] = [];
    this.queue[id].push(item);
    this.playNext(id);
  };
  
  Audio.clearQueue = function(cache) {
    if(!cache.server) return;
    const id = cache.server.id;
    this.queue[id] = [];
  };
  
  Audio.playNext = function(id, forceSkip) {
    if(!this.connections[id]) return;
    if(!this.dispatchers[id] || !!forceSkip) {
      if(this.queue[id].length > 0) {
        const item = this.queue[id].shift();
        this.playItem(item, id);
      } else {
        this.connections[id].disconnect();
      }
    }
  };
  
  Audio.playItem = function(item, id) {
    if(!this.connections[id]) return;
    if(this.dispatchers[id]) {
      this.dispatchers[id]._forceEnd = true;
      this.dispatchers[id].end();
    }
    const type = item[0];
    let setupDispatcher = false;
    switch(type) {
      case 'file':
        setupDispatcher = this.playFile(item[2], item[1], id);
        break;
      case 'url':
        setupDispatcher = this.playUrl(item[2], item[1], id);
        break;
      case 'yt':
        setupDispatcher = this.playYt(item[2], item[1], id);
        break;
    }
    if(setupDispatcher && !this.dispatchers[id]._eventSetup) {
      this.dispatchers[id].on('end', function() {
        const isForced = this.dispatchers[id]._forceEnd;
        this.dispatchers[id] = null;
        if(!isForced) {
          this.playNext(id);
        }
      }.bind(this));
      this.dispatchers[id]._eventSetup = true;
    }
  };
  
  Audio.playFile = function(url, options, id) {
    this.dispatchers[id] = this.connections[id].playFile(Actions.getLocalFile(url), options);
    return true;
  };
  
  Audio.playUrl = function(url, options, id) {
    this.dispatchers[id] = this.connections[id].playArbitraryInput(url, options);
    return true;
  };
  
  Audio.playYt = function(url, options, id) {
    if(!this.ytdl) return false;
    const stream = this.ytdl(url, {
      filter: 'audioonly'
    });
    this.dispatchers[id] = this.connections[id].playStream(stream, options);
    return true;
  };
  
  //---------------------------------------------------------------------
  // GuildMember
  //---------------------------------------------------------------------
  
  const GuildMember = DiscordJS.GuildMember;
  
  GuildMember.prototype.unban = function(server, reason) {
    return server.unban(this.author, reason);
  };
  
  GuildMember.prototype.data = function(name, defaultValue) {
    const id = this.id;
    const data = Files.data.players;
    if(data[id] === undefined) {
      if(defaultValue === undefined) {
        return null;
      } else {
        data[id] = {};
      }
    }
    if(data[id][name] === undefined && defaultValue !== undefined) {
      data[id][name] = defaultValue;
    }
    return data[id][name];
  };
  
  GuildMember.prototype.setData = function(name, value) {
    const id = this.id;
    const data = Files.data.players;
    if(data[id] === undefined) {
      data[id] = {};
    }
    data[id][name] = value;
    Files.saveData('players');
  };
  
  GuildMember.prototype.addData = function(name, value) {
    const id = this.id;
    const data = Files.data.players;
    if(data[id] === undefined) {
      data[id] = {};
    }
    if(data[id][name] === undefined) {
      this.setData(name, value);
    } else {
      this.setData(name, this.data(name) + value);
    }
  };
  
  GuildMember.prototype.convertToString = function() {
    return `mem-${this.id}_s-${this.guild.id}`;
  };
  
  //---------------------------------------------------------------------
  // User
  //---------------------------------------------------------------------
  
  const User = DiscordJS.User;
  
  User.prototype.data = GuildMember.prototype.data;
  User.prototype.setData = GuildMember.prototype.setData;
  User.prototype.addData = GuildMember.prototype.addData;
  
  User.prototype.convertToString = function() {
    return `usr-${this.id}`;
  };
  
  //---------------------------------------------------------------------
  // Guild
  //---------------------------------------------------------------------
  
  const Guild = DiscordJS.Guild;
  
  Guild.prototype.getDefaultChannel = function() {
    let channel = this.channels.get(this.id);
    if(!channel) {
      this.channels.array().forEach(function(c) {
        if(c.type !== 'voice') {
          if(!channel) {
            channel = c;
          } else if(channel.position > c.position) {
            channel = c;
          }
        }
      });
    }
    return channel;
  };
  
  Guild.prototype.data = function(name, defaultValue) {
    const id = this.id;
    const data = Files.data.servers;
    if(data[id] === undefined) {
      if(defaultValue === undefined) {
        return null;
      } else {
        data[id] = {};
      }
    }
    if(data[id][name] === undefined && defaultValue !== undefined) {
      data[id][name] = defaultValue;
    }
    return data[id][name];
  };
  
  Guild.prototype.setData = function(name, value) {
    const id = this.id;
    const data = Files.data.servers;
    if(data[id] === undefined) {
      data[id] = {};
    }
    data[id][name] = value;
    Files.saveData('servers');
  };
  
  Guild.prototype.addData = function(name, value) {
    const id = this.id;
    const data = Files.data.servers;
    if(data[id] === undefined) {
      data[id] = {};
    }
    if(data[id][name] === undefined) {
      this.setData(name, value);
    } else {
      this.setData(name, this.data(name) + value);
    }
  };
  
  Guild.prototype.convertToString = function() {
    return `s-${this.id}`;
  };
  
  //---------------------------------------------------------------------
  // Message
  //---------------------------------------------------------------------
  
  DiscordJS.Message.prototype.convertToString = function() {
    return `msg-${this.id}_c-${this.channel.id}`;
  };
  
  //---------------------------------------------------------------------
  // TextChannel
  //---------------------------------------------------------------------
  
  DiscordJS.TextChannel.prototype.convertToString = function() {
    return `tc-${this.id}`;
  };
  
  //---------------------------------------------------------------------
  // VoiceChannel
  //---------------------------------------------------------------------
  
  DiscordJS.VoiceChannel.prototype.convertToString = function() {
    return `vc-${this.id}`;
  };
  
  //---------------------------------------------------------------------
  // Role
  //---------------------------------------------------------------------
  
  DiscordJS.Role.prototype.convertToString = function() {
    return `r-${this.id}_s-${this.guild.id}`;
  };
  
  //---------------------------------------------------------------------
  // Emoji
  //---------------------------------------------------------------------
  
  DiscordJS.Emoji.prototype.convertToString = function() {
    return `e-${this.id}`;
  };
  
  //---------------------------------------------------------------------
  // Start Bot
  //---------------------------------------------------------------------
  
  Files.startBot();
  

  client.login(token);