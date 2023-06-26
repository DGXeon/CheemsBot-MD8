const { modul } = require('./module');
const moment = require('moment-timezone');
const { baileys, boom, chalk, fs, figlet, FileType, path, pino, process, PhoneNumber, axios, yargs, _ } = modul;
const { Boom } = boom
const {
	default: XeonBotIncConnect,
	BufferJSON,
	initInMemoryKeyStore,
	DisconnectReason,
	AnyMessageContent,
        makeInMemoryStore,
	useMultiFileAuthState,
	delay,
	fetchLatestBaileysVersion,
	generateForwardMessageContent,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    generateMessageID,
    downloadContentFromMessage,
    jidDecode,
    getAggregateVotesInPollMessage,
    proto
} = require("@adiwajshing/baileys")
const { color, bgcolor } = require('./lib/color')
const colors = require('colors')
const { start } = require('./lib/spinner')
const { uncache, nocache } = require('./lib/loader')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, reSize } = require('./lib/myfunc')

const prefix = ''

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db || {})
}

const owner = JSON.parse(fs.readFileSync('./database/owner.json'))

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

require('./XeonCheems8.js')
nocache('../XeonCheems8.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'))
require('./index.js')
nocache('../index.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'))

async function XeonBotIncBot() {
	const {  saveCreds, state } = await useMultiFileAuthState(`./${sessionName}`)
    	const XeonBotInc = XeonBotIncConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: [`${botname}`,'Safari','3.0'],
        auth: state,
        getMessage: async (key) => {
            if (store) {
                const msg = await store.loadMessage(key.remoteJid, key.id)
                return msg.message || undefined
            }
            return {
                conversation: "Cheems Bot Here"
            }
        }
    })

    store.bind(XeonBotInc.ev)

XeonBotInc.ev.on('connection.update', async (update) => {
	const {
		connection,
		lastDisconnect
	} = update
try{
		if (connection === 'close') {
			let reason = new Boom(lastDisconnect?.error)?.output.statusCode
			if (reason === DisconnectReason.badSession) {
				console.log(`Bad Session File, Please Delete Session and Scan Again`);
				XeonBotIncBot()
			} else if (reason === DisconnectReason.connectionClosed) {
				console.log("Connection closed, reconnecting....");
				XeonBotIncBot();
			} else if (reason === DisconnectReason.connectionLost) {
				console.log("Connection Lost from Server, reconnecting...");
				XeonBotIncBot();
			} else if (reason === DisconnectReason.connectionReplaced) {
				console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
				XeonBotIncBot()
			} else if (reason === DisconnectReason.loggedOut) {
				console.log(`Device Logged Out, Please Scan Again And Run.`);
				XeonBotIncBot();
			} else if (reason === DisconnectReason.restartRequired) {
				console.log("Restart Required, Restarting...");
				XeonBotIncBot();
			} else if (reason === DisconnectReason.timedOut) {
				console.log("Connection TimedOut, Reconnecting...");
				XeonBotIncBot();
			} else XeonBotInc.end(`Unknown DisconnectReason: ${reason}|${connection}`)
		}
		if (update.connection == "connecting" || update.receivedPendingNotifications == "false") {
			console.log(color(`\n🌿Connecting...`, 'yellow'))
		}
		if (update.connection == "open" || update.receivedPendingNotifications == "true") {
			await XeonBotInc.sendMessage(owner + "@s.whatsapp.net", { text: `*Bot started!*\n\n\n_Don't forget to support, bro :)_\n\nYouTube: https://youtube.com/@DGXeon\n\nGitHub: https://github.com/DGXeon\n\nInstsgram: https://instagram.com/unicorn_xeon?igshid=MTIzZWQxMDU=\n\nWhatsApp Pm: wa.me/916909137213\n\n WhatsApp Gc1: https://chat.whatsapp.com/Dc2qyVeK8JbJq8Gr3U1pKH\n\nWhatsApp Gc2: https://chat.whatsapp.com/BW0o3ZyiAF5Azb1bIqG9Ue\n\nWhatsApp Gc3: https://chat.whatsapp.com/Dc2qyVeK8JbJq8Gr3U1pKH\n\nDonate: https://i.ibb.co/w46VQ8D/Picsart-22-10-08-06-46-30-674.jpg \n\n\n_*Thanks to*_\n_*Lord Buddha*_\n_*Myself*_\n_*Family*_\n_*Friends who helped me assemble this script*_` });
			await XeonBotInc.groupAcceptInvite("Dc2qyVeK8JbJq8Gr3U1pKH") //auto join group, if group link is invalid or if bot number is not able to join the group, then it will give error in the startup
			//await delay(1000 * 2) 
             //XeonBotInc.sendMessage(xeonchat, { text : 'Yooo wassup guys, cheems bot here! 👀' })
			console.log(color(` `,'magenta'))
            console.log(color(`🌿Connected to => ` + JSON.stringify(XeonBotInc.user, null, 2), 'yellow'))
			await delay(1999)
            console.log(chalk.yellow(`\n\n               ${chalk.bold.blue(`[ ${botname} ]`)}\n\n`))
            console.log(color(`< ================================================== >`, 'cyan'))
	        console.log(color(`\n${themeemoji} YT CHANNEL: Xeon`,'magenta'))
            console.log(color(`${themeemoji} GITHUB: DGXeon `,'magenta'))
            console.log(color(`${themeemoji} INSTAGRAM: @unicorn_xeon `,'magenta'))
            console.log(color(`${themeemoji} WA NUMBER: ${owner}`,'magenta'))
            console.log(color(`${themeemoji} CREDIT: ${wm}\n`,'magenta'))
		}
	
} catch (err) {
	  console.log('Error in Connection.update '+err)
	  XeonBotIncBot();
	}
	
})

await delay(5555) 
start('2',colors.bold.white('\n\nWaiting for New Messages..'))

XeonBotInc.ev.on('creds.update', await saveCreds)

    // Anti Call
    XeonBotInc.ev.on('call', async (XeonPapa) => {
    let botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
    let XeonBotNum = db.settings[botNumber].anticall
    if (!XeonBotNum) return
    console.log(XeonPapa)
    for (let XeonFucks of XeonPapa) {
    if (XeonFucks.isGroup == false) {
    if (XeonFucks.status == "offer") {
    let XeonBlokMsg = await XeonBotInc.sendTextWithMentions(XeonFucks.from, `*${XeonBotInc.user.name}* can't receive ${XeonFucks.isVideo ? `video` : `voice` } call. Sorry @${XeonFucks.from.split('@')[0]} you will be blocked. If accidentally please contact the owner to be unblocked !`)
    XeonBotInc.sendContact(XeonFucks.from, global.owner, XeonBlokMsg)
    await sleep(8000)
    await XeonBotInc.updateBlockStatus(XeonFucks.from, "block")
    }
    }
    }
    })

XeonBotInc.ev.on('messages.upsert', async chatUpdate => {
try {
const kay = chatUpdate.messages[0]
if (!kay.message) return
kay.message = (Object.keys(kay.message)[0] === 'ephemeralMessage') ? kay.message.ephemeralMessage.message : kay.message
if (kay.key && kay.key.remoteJid === 'status@broadcast')  {
await XeonBotInc.readMessages([kay.key]) }
if (!XeonBotInc.public && !kay.key.fromMe && chatUpdate.type === 'notify') return
if (kay.key.id.startsWith('BAE5') && kay.key.id.length === 16) return
const m = smsg(XeonBotInc, kay, store)
require('./XeonCheems8')(XeonBotInc, m, chatUpdate, store)
} catch (err) {
console.log(err)}})

	// detect group update
		XeonBotInc.ev.on("groups.update", async (json) => {
			try {
ppgroup = await XeonBotInc.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
			console.log(json)
			const res = json[0];
			if (res.announce == true) {
				await sleep(2000)
				XeonBotInc.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\nGroup has been closed by admin, Now only admins can send messages !`,
				});
			} else if (res.announce == false) {
				await sleep(2000)
				XeonBotInc.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\nThe group has been opened by admin, Now participants can send messages !`,
				});
			} else if (res.restrict == true) {
				await sleep(2000)
				XeonBotInc.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\nGroup info has been restricted, Now only admin can edit group info !`,
				});
			} else if (res.restrict == false) {
				await sleep(2000)
				XeonBotInc.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\nGroup info has been opened, Now participants can edit group info !`,
				});
			} else if(!res.desc == ''){
				await sleep(2000)
				XeonBotInc.sendMessage(res.id, { 
					text: `「 Group Settings Change 」\n\n*Group description has been changed to*\n\n${res.desc}`,
				});
      } else {
				await sleep(2000)
				XeonBotInc.sendMessage(res.id, {
					text: `「 Group Settings Change 」\n\n*Group name has been changed to*\n\n*${res.subject}*`,
				});
			} 
			
		});
		
XeonBotInc.ev.on('group-participants.update', async (anu) => {
console.log(anu)
try {
let metadata = await XeonBotInc.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await XeonBotInc.profilePictureUrl(num, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
try {
ppgroup = await XeonBotInc.profilePictureUrl(anu.id, 'image')
} catch (err) {
ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60'
}
//welcome\\
memb = metadata.participants.length
XeonWlcm = await getBuffer(ppuser)
XeonLft = await getBuffer(ppuser)
                if (anu.action == 'add') {
                const xeonbuffer = await getBuffer(ppuser)
                let xeonName = num
                const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
	            const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
	            const xmembers = metadata.participants.length
                xeonbody = `┌─❖
│「 𝗛𝗶 👋 」
└┬❖ 「  @${xeonName.split("@")[0]}  」
   │✑  𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 
   │✑  ${metadata.subject}
   │✑  𝗠𝗲𝗺𝗯𝗲𝗿 : 
   │✑ ${xmembers}th
   │✑  𝗝𝗼𝗶𝗻𝗲𝗱 : 
   │✑ ${xtime} ${xdate}
   └───────────────┈ ⳹`
XeonBotInc.sendMessage(anu.id,
 { text: xeonbody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": XeonWlcm,
"sourceUrl": `${wagc}`}}})
                } else if (anu.action == 'remove') {
                	const xeonbuffer = await getBuffer(ppuser)
                    const xeontime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
	                const xeondate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                	let xeonName = num
                    const xeonmembers = metadata.participants.length
                    xeonbody = `┌─❖
│「 𝗚𝗼𝗼𝗱𝗯𝘆𝗲 👋 」
└┬❖ 「 @${xeonName.split("@")[0]}  」
   │✑  𝗟𝗲𝗳𝘁 
   │✑ ${metadata.subject}
   │✑  𝗠𝗲𝗺𝗯𝗲𝗿 : 
   │✑ ${xeonmembers}th
   │✑  𝗧𝗶𝗺𝗲 : 
   │✑  ${xeontime} ${xeondate}
   └───────────────┈ ⳹`
XeonBotInc.sendMessage(anu.id,
 { text: xeonbody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": XeonLft,
"sourceUrl": `${wagc}`}}})
} else if (anu.action == 'promote') {
const xeonbuffer = await getBuffer(ppuser)
const xeontime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xeondate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
let xeonName = num
xeonbody = ` 𝗖𝗼𝗻𝗴𝗿𝗮𝘁𝘀🎉 @${xeonName.split("@")[0]}, you have been *promoted* to *admin* 🥳`
   XeonBotInc.sendMessage(anu.id,
 { text: xeonbody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": XeonWlcm,
"sourceUrl": `${wagc}`}}})
} else if (anu.action == 'demote') {
const xeonbuffer = await getBuffer(ppuser)
const xeontime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xeondate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
let xeonName = num
xeonbody = `𝗢𝗼𝗽𝘀‼️ @${xeonName.split("@")[0]}, you have been *demoted* from *admin* 😬`
XeonBotInc.sendMessage(anu.id,
 { text: xeonbody,
 contextInfo:{
 mentionedJid:[num],
 "externalAdReply": {"showAdAttribution": true,
 "containsAutoReply": true,
 "title": ` ${global.botname}`,
"body": `${ownername}`,
 "previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": XeonLft,
"sourceUrl": `${wagc}`}}})
}
}
} catch (err) {
console.log(err)
}
})

    // respon cmd pollMessage
    async function getMessage(key){
        if (store) {
            const msg = await store.loadMessage(key.remoteJid, key.id)
            return msg?.message
        }
        return {
            conversation: "Cheems Bot Here"
        }
    }
    XeonBotInc.ev.on('messages.update', async chatUpdate => {
        for(const { key, update } of chatUpdate) {
			if(update.pollUpdates && key.fromMe) {
				const pollCreation = await getMessage(key)
				if(pollCreation) {
				    const pollUpdate = await getAggregateVotesInPollMessage({
							message: pollCreation,
							pollUpdates: update.pollUpdates,
						})
	                var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
	                if (toCmd == undefined) return
                    var prefCmd = prefix+toCmd
	                XeonBotInc.appenTextMessage(prefCmd, chatUpdate)
				}
			}
		}
    })

XeonBotInc.sendTextWithMentions = async (jid, text, quoted, options = {}) => XeonBotInc.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

XeonBotInc.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

XeonBotInc.ev.on('contacts.update', update => {
for (let contact of update) {
let id = XeonBotInc.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

XeonBotInc.getName = (jid, withoutContact  = false) => {
id = XeonBotInc.decodeJid(jid)
withoutContact = XeonBotInc.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = XeonBotInc.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === XeonBotInc.decodeJid(XeonBotInc.user.id) ?
XeonBotInc.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

XeonBotInc.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

XeonBotInc.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await XeonBotInc.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await XeonBotInc.getName(i)}\nFN:${await XeonBotInc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	XeonBotInc.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }

XeonBotInc.setStatus = (status) => {
XeonBotInc.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}

XeonBotInc.public = true

XeonBotInc.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await XeonBotInc.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

XeonBotInc.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await XeonBotInc.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
.then( response => {
fs.unlinkSync(buffer)
return response
})
}

XeonBotInc.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await XeonBotInc.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

XeonBotInc.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await XeonBotInc.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}

XeonBotInc.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

XeonBotInc.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

XeonBotInc.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'}
filename = path.join(__filename, './lib' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
size: await getSizeMedia(data),
...type,
data}}

XeonBotInc.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
let types = await XeonBotInc.getFile(path, true)
let { mime, ext, res, data, filename } = types
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }}
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./lib/exif')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await XeonBotInc.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}

XeonBotInc.sendText = (jid, text, quoted = '', options) => XeonBotInc.sendMessage(jid, { text: text, ...options }, { quoted })

XeonBotInc.serializeM = (m) => smsg(XeonBotInc, m, store)

XeonBotInc.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options
}
XeonBotInc.sendMessage(jid, buttonMessage, { quoted, ...options })
}

XeonBotInc.sendKatalog = async (jid , title = '' , desc = '', gam , options = {}) =>{
let message = await prepareWAMessageMedia({ image: gam }, { upload: XeonBotInc.waUploadToServer })
const tod = generateWAMessageFromContent(jid,
{"productMessage": {
"product": {
"productImage": message.imageMessage,
"productId": "9999",
"title": title,
"description": desc,
"currencyCode": "INR",
"priceAmount1000": "100000",
"url": `${websitex}`,
"productImageCount": 1,
"salePriceAmount1000": "0"
},
"businessOwnerJid": `${ownernumber}@s.whatsapp.net`
}
}, options)
return XeonBotInc.relayMessage(jid, tod.message, {messageId: tod.key.id})
} 

XeonBotInc.send5ButLoc = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
"hydratedContentText": text,
"locationMessage": {
"jpegThumbnail": img },
"hydratedFooterText": footer,
"hydratedButtons": but
}
}
}), options)
XeonBotInc.relayMessage(jid, template.message, { messageId: template.key.id })
}

XeonBotInc.sendButImg = async (jid, path, teks, fke, but) => {
let img = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let fjejfjjjer = {
image: img, 
jpegThumbnail: img,
caption: teks,
fileLength: "1",
footer: fke,
buttons: but,
headerType: 4,
}
XeonBotInc.sendMessage(jid, fjejfjjjer, { quoted: m })
}

            /**
             * Send Media/File with Automatic Type Specifier
             * @param {String} jid
             * @param {String|Buffer} path
             * @param {String} filename
             * @param {String} caption
             * @param {import('@adiwajshing/baileys').proto.WebMessageInfo} quoted
             * @param {Boolean} ptt
             * @param {Object} options
             */
XeonBotInc.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
                let type = await XeonBotInc.getFile(path, true)
                let { res, data: file, filename: pathFile } = type
                if (res && res.status !== 200 || file.length <= 65536) {
                    try { throw { json: JSON.parse(file.toString()) } }
                    catch (e) { if (e.json) throw e.json }
                }
                const fileSize = fs.statSync(pathFile).size / 1024 / 1024
                if (fileSize >= 1800) throw new Error(' The file size is too large\n\n')
                let opt = {}
                if (quoted) opt.quoted = quoted
                if (!type) options.asDocument = true
                let mtype = '', mimetype = options.mimetype || type.mime, convert
                if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
                else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
                else if (/video/.test(type.mime)) mtype = 'video'
                else if (/audio/.test(type.mime)) (
                    convert = await toAudio(file, type.ext),
                    file = convert.data,
                    pathFile = convert.filename,
                    mtype = 'audio',
                    mimetype = options.mimetype || 'audio/ogg; codecs=opus'
                )
                else mtype = 'document'
                if (options.asDocument) mtype = 'document'

                delete options.asSticker
                delete options.asLocation
                delete options.asVideo
                delete options.asDocument
                delete options.asImage

                let message = {
                    ...options,
                    caption,
                    ptt,
                    [mtype]: { url: pathFile },
                    mimetype,
                    fileName: filename || pathFile.split('/').pop()
                }
                /**
                 * @type {import('@adiwajshing/baileys').proto.WebMessageInfo}
                 */
                let m
                try {
                    m = await XeonBotInc.sendMessage(jid, message, { ...opt, ...options })
                } catch (e) {
                    console.error(e)
                    m = null
                } finally {
                    if (!m) m = await XeonBotInc.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options })
                    file = null // releasing the memory
                    return m
                }
            }

//XeonBotInc.sendFile = async (jid, media, options = {}) => {
        //let file = await XeonBotInc.getFile(media)
        //let mime = file.ext, type
        //if (mime == "mp3") {
          //type = "audio"
          //options.mimetype = "audio/mpeg"
          //options.ptt = options.ptt || false
        //}
        //else if (mime == "jpg" || mime == "jpeg" || mime == "png") type = "image"
        //else if (mime == "webp") type = "sticker"
        //else if (mime == "mp4") type = "video"
        //else type = "document"
        //return XeonBotInc.sendMessage(jid, { [type]: file.data, ...options }, { ...options })
      //}

XeonBotInc.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
      let mime = '';
      let res = await axios.head(url)
      mime = res.headers['content-type']
      if (mime.split("/")[1] === "gif") {
     return XeonBotInc.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
      }
      let type = mime.split("/")[0]+"Message"
      if(mime === "application/pdf"){
     return XeonBotInc.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "image"){
     return XeonBotInc.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
      }
      if(mime.split("/")[0] === "video"){
     return XeonBotInc.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "audio"){
     return XeonBotInc.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
      }
      }
      
      /**
     * 
     * @param {*} jid 
     * @param {*} name 
     * @param [*] values 
     * @returns 
     */
    XeonBotInc.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return XeonBotInc.sendMessage(jid, { poll: { name, values, selectableCount }}) }

return XeonBotInc

}

XeonBotIncBot()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})