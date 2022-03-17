let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Source code')).buffer(), `
*────────「 _*SCRIPT*_ 」 ────────*
Hai 👋
saya MursidXzy
_*MAU SC INI BELI BANG 10K DOANG CHAT OWNER wa.me/6288233832771*_
-
`.trim(), '© *_BOTCAHX_*', 'Thanks', '.tqto')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
