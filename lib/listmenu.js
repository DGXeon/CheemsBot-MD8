const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return` = For Owner
 = For Group
 = For Free User
❊ = For Premium User

╭––『 Owner Menu 』
┆❊.self 
┆❊.public 
┆❊.join 
┆❊.bctext 
┆❊.poll 
┆❊.bcimage 
┆❊.bcvideo 
╰–––––––––––––––༓

╭––『 Group Menu 』
┆❊.antilink 
┆❊.antiwame 
┆❊.grouplink 
┆❊.invite 
┆❊.ephemeral 
┆❊.delete 
┆❊.setppgroup 
┆❊.delppgroup 
┆❊.setname 
┆❊.setdesc 
┆❊.add 
┆❊.kick 
┆❊.promote 
╰–––––––––––––––༓

╭––『 Download Menu 』
┆❊.ytsearch 
┆❊.play 
┆❊.ytmp3 
┆❊.ytmp4 
┆❊.google 
┆❊.imdb 
╰–––––––––––––––༓

╭––『 Random Video 』
┆❊.tiktokgirl 
┆❊.tiktoknukthy 
┆❊.tiktokkayes 
┆❊.tiktokpanrika 
┆❊.tiktoknotnot 
┆❊.tiktokghea 
┆❊.tiktoksantuy 
┆❊.tiktokbocil 
╰–––––––––––––––༓

╭––『 Stalker 』
┆❊.igstalk 
┆❊.ffstalk 
┆❊.mlstalk 
┆❊.npmstalk 
┆❊.ghstalk 
╰–––––––––––––––༓

–『 OpenAI 』
┆❊.openai 
┆❊.ai 
┆❊.aimage 
┆❊.remini 
╰–––––––––––––––༓
 
╭––『 Sticker 』
┆❊.goose 
┆❊.woof 
┆❊.8ball 
┆❊.lizard 
┆❊.meow 
┆❊.gura 
┆❊.doge 
┆❊.patrick 
┆❊.lovestick 
╰–––––––––––––––༓

╭––『 Database 』
┆❊.setcmd 
┆❊.delcmd 
┆❊.listcmd 
┆❊.lockcmd 
┆❊.addmsg 
┆❊.delmsg 
┆❊.getmsg 
┆❊.listmsg 
╰–––––––––––––––༓

╭––『 Bug & War 』
┆❊.resetotp 
┆❊.xbugp 
┆❊.xbugr 
╰–––––––––––––––༓

╭––『 Other Menu 』
┆❊.ping 
┆❊.menu 
┆❊.myip 
┆❊.reportbug 
┆❊.listpem 
┆❊.liststicker 
┆❊.listimage 
┆❊.listvideo 
┆❊.listvn 
┆❊.listbadword 
┆❊.listpc 
┆❊.listgc 
┆❊.owner 
┆❊.rentbot 
┆❊.listrentbot 
┆❊.donate 
┆❊.friend  
┆❊.runtime 
╰–––––––––––––––༓
`}

global.ownermenu = (prefix) => {
return ` = For Owner
 = For Group
 = For Free User
❊ = For Premium User

╭––『 Owner Menu 』
┆❊.self 
┆❊.public 
┆❊.join 
┆❊.bctext 
┆❊.poll 
┆❊.bcimage 
┆❊.bcvideo 
┆❊.creategc 
┆❊.userjid 
┆❊.setexif 
┆❊.setbotname 
┆❊.setbotbio 
┆❊.delppbot 
┆❊.shutdown 
┆❊.setppbot 
┆❊.addprem 
┆❊.delprem 
┆❊.addowner 
┆❊.delowner 
┆❊.addvn 
┆❊.delvn 
┆❊.addsticker 
┆❊.delsticker 
┆❊.addimage 
┆❊.delimage 
┆❊.addvideo 
┆❊.delvideo 
┆❊.block 
╰–––––––––––––––༓
`}

global.othermenu = (prefix) => {
return ` = For Owner
 = For Group
 = For Free User
❊ = For Premium User

╭––『 Other Menu 』
┆❊.ping 
┆❊.menu 
┆❊.myip 
┆❊.reportbug 
┆❊.listpem 
┆❊.liststicker 
┆❊.listimage 
┆❊.listvideo 
┆❊.listvn 
┆❊.listbadword 
┆❊.listpc 
┆❊.listgc 
┆❊.owner 
┆❊.rentbot 
┆❊.listrentbot 
┆❊.donate 
┆❊.friend 
┆❊.obfuscate 
┆❊.styletext 
┆❊.fliptext 
┆❊.tts 
┆❊.say 
┆❊.togif 
┆❊.toqr 
┆❊.bass 
┆❊.blown 
┆❊.deep 
┆❊.earrape 
┆❊.fast 
┆❊.fat 
┆❊.nightcore 
┆❊.reverse 
┆❊.robot 
┆❊.slow 
┆❊.smooth 
┆❊.squirrel 
┆❊.tinyurl 
┆❊.tinyurl 
┆❊.tovn 
┆❊.toaudio 
┆❊.tomp3 
┆❊.tomp4
┆❊.toimg 
┆❊.toonce 
┆❊.sticker 
┆❊.take 
┆❊.emoji 
┆❊.volume 
┆❊.ebinary 
┆❊.dbinary 
┆❊.ssweb 
┆❊.quoted 
┆❊.runtime 
┆❊.sound1 - sound161 
╰–––––––––––––––༓
`}

global.downloadmenu = (prefix) => {
return ` = For Owner
 = For Group
 = For Free User
❊ = For Premium User

╭––『 Download Menu 』
┆❊.ytsearch 
┆❊.play 
┆❊.ytmp3 
┆❊.ytmp4 
┆❊.google 
┆❊.imdb 
┆❊.weather 
┆❊.wanumber 
┆❊.instaimg 
┆❊.instavid 
┆❊.fbvid 
┆❊.twittervid 
┆❊.telestick 
┆❊.spotify 
┆❊.gitclone 
┆❊.happymod 
┆❊.gdrive 
┆❊.pinterest 
┆❊.ringtone 
╰–––––––––––––––༓
`}

global.groupmenu = (prefix) => {
return ` = For Owner
 = For Group
 = For Free User
❊ = For Premium User

╭––『 Group Menu 』
┆❊.antilink 
┆❊.antiwame 
┆❊.grouplink 
┆❊.invite 
┆❊.ephemeral 
┆❊.delete 
┆❊.setppgroup 
┆❊.delppgroup 
┆❊.setname 
┆❊.setdesc 
┆❊.add 
┆❊.kick 
╰–––––––––––––––༓
`}

global.stickermenu = (prefix) => {
return ` = For Owner
 = For Group
 = For Free User
❊ = For Premium User

╭––『 Sticker 』
┆❊.goose 
┆❊.woof 
┆❊.8ball 
┆❊.lizard 
┆❊.meow 
┆❊.gura 
┆❊.doge 
┆❊.patrick 
┆❊.lovestick 
╰–––––––––––––––༓
`}

global.aimenu = (prefix) => {
return ` = For Owner
 = For Group
 = For Free User
❊ = For Premium User

╭––『 OpenAI 』
┆❊.openai 
┆❊.ai 
┆❊.aimage 
┆❊.remini 
╰–––––––––––––––༓
`}

global.bugmenu = (prefix) => {
return ` = For Owner
 = For Group
 = For Free User
❊ = For Premium User

╭––『 Bug & War 』
┆❊.resetotp 
┆❊.xbugp 
┆❊.xbugr 
╰–––––––––––––––༓
`}

global.randphotomenu = (prefix) => {
return ` = For Owner
 = For Group
 = For Free User
❊ = For Premium User

╭––『 Random Photo 』
┆❊.hacking 
┆❊.boneka 
┆❊.rose 
┆❊.ryujin 
┆❊.ulzzangboy 
┆❊.ulzzanggirl 
┆❊.wallml 
┆❊.wallphone 
┆❊.mountain 
┆❊.goose 
┆❊.profilepic 
┆❊.couplepic 
┆❊.programming 
┆❊.pubg 
┆❊.blackpink 
┆❊.randomboy   
┆❊.randomgirl 
┆❊.hijab   
┆❊.chinese 
┆❊.indo 
┆❊.japanese 
┆❊.korean 
┆❊.malay 
┆❊.thai 
┆❊.vietnamese 
╰–––––––––––––––༓
`}

global.randvideomenu = (prefix) => {
return ` = For Owner
 = For Group
 = For Free User
❊ = For Premium User

╭––『 Random Video 』
┆❊.tiktokgirl 
┆❊.tiktoknukthy 
┆❊.tiktokkayes 
┆❊.tiktokpanrika 
┆❊.tiktoknotnot 
┆❊.tiktokghea 
┆❊.tiktoksantuy 
┆❊.tiktokbocil 
╰–––––––––––––––༓
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
