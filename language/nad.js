exports.wait = () => {
	return`*「❗」WAIT BRO*`
}

exports.succes = () => {
	return`*「 SUCCESS 」*`
}

exports.lvlon = () => {
	return`*「❗」LEVELING ENABLE*`
}

exports.lvloff = () => {
	return`*「❗」LEVELING DISABLE*`
}

exports.lvlnul = () => {
	return`*「❗」YOUR LEVEL IS STILL EMPTY*`
}

exports.lvlnoon = () => {
	return`*「❗」THE GROUP LEVELS HAVE NOT BEEN ACTIVATED*`
}

exports.nsfwoff = () => {
	return`*「❗」NSFW NOT ACTIVATED*`
}

exports.noregis = () => {
	return`*「❗」VERIFY FIRST☺️「❗」*\n\nEXAMPLE : @verify`
}

exports.baned = () => {
	return`*「❗」SORRY SORRY BRO, BUT YOU'VE BEEN BANNED :V*`
}

exports.premium = (prefix) => {
	return`Lu Who? This feature is only for premium users!
Upgrade to premium first my boss
If interested contact my owner
Ketik : ${prefix}owner`
}

exports.rediregis = () => {
	return`*You have verified -_-*`
}

exports.stikga = () => {
	return`*「 FAILED 」Try to reply/re-tag Bro*`
}

exports.linkga = () => {
	return`*「❗」Sorry the link is not valid bro*`
}

exports.groupo = () => {
	return`*「❗」GROUP ONLY*`
}

exports.ownerb = () => {
	return`*「❗」OWNER BOT ONLY*`
}

exports.ownerg = () => {
	return`*「❗」OWNER GROUP ONLY*`
}

exports.admin = () => {
	return`*「❗」ADMIN GROUP ONLY*`
}

exports.badmin = () => {
	return`*「❗」BOTS MUST BE ADMIN*`
}

exports.bug = () => {
	return`*The problem has been reported to the BOT owner, fake reports will not be responded to*`
}

exports.wrongf = () => {
	return`*「🗿」Where's the text bro??*`
}

exports.clears = () => {
	return`*Success Bro*`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 CONGRATS 」*
\`\`\`➸ Name : ${pushname}\`\`\`
\`\`\`➸ Number : wa.me/${sender.split("@")[0]}\`\`\`
\`\`\`➸ Xp : ${getLevelingXp(sender)}\`\`\`
\`\`\`➸ Level : ${getLevel} ➸ ${getLevelingLevel(sender)}\`\`\`
`}
 
exports.limitend = (pushname, prefix) => {
	return`*Sorry ${pushname} Today's limit is over*
*Limit is reset every 24:00 hours*

\`\`\`Upgrade Premium Free Limit\`\`\`
\`\`\`➸ 20K : 1 Month\`\`\`
\`\`\`If interested, please contact the owner\`\`\`
\`\`\`Send orders : ${prefix}owner\`\`\`
`
}

exports.limitcount = (isPrem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
remaining your limit : ${isPrem ? '9999' : `${limitCounts}`}

Upgrade premium my boss, let's be free to use bots`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`┏━━━━━━━♡ *ATM* ♡━━━━━━━┓
┃╭───────────────────
┃│➸ NAME : ${pushname}
┃│➸ NUMBER : ${sender.split("@")[0]}
┃│➸ AGE : ${uangkau}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛`
}

exports.donasi = () => {
return`*DONATE BRO*
Pulsa : 919746138832
Gopay : 919746138832
Dana : 919746138832

Donate to keep the bot updated & Active`
}

exports.iklan = (botName, ownerNumbers, ownerName) => {
return`🔰 -----[ 「 *ADVERTISEMENT ${botName}* 」 ]----- 🔰
──────────────────────────────
◯ *REGISTER RENT & BUILD A BOT :*
◯ *RENT : 25K/GROUP (MONTH)*
◯ *CREATE: 100K (CAN BE THE OWNER)*
◯ *PAYMENT CAN THROUGH :*
◯ *OVO, GOPAY, PHONEPAY, PULSA+10K*
──────────────────────────────
◯ *BENEFITS OF RENTING BOTS :*
◯ *1. CAN ADD BOT TO GROUP*
◯ *2. CAN USE PREMIUM FEATURES*
◯ * ADVANTAGES FOR BOTS :*
◯ *1. CAN BECOME YOUR OWN BOTT OWNER*
◯ *2. CAN CHANGE YOUR OWN BOTT NAME*
◯ *3. CAN BRING BOT TO GROUP*
◯ *4. CAN USE THE COMMAND OWNER*
◯ *5. CAN RENT BACK BOTS*
──────────────────────────────
◯ *IF INTERESTED IN THE ABOVE*
◯ *PLEASE CONTACT THE NUMBER BELOW:*
◯ *wa.me/${ownerNumbers}*
──────────────────────────────
🔰 -----[「 *POWERED BY ${ownerName}* 」]----- 🔰`
}
