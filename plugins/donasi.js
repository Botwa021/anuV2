let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
╭═══ 〔 𝐃𝐎𝐍𝐀𝐒𝐈 〕 ═══
║│➸ 𝐃𝐀𝐍𝐀 :
║│➸ *088233832771*
║│
║│➸ 𝐏𝐔𝐋𝐒𝐀 :
║│➸ *089612698583*
║│➸ *088233832771*
║│
║│➸ 𝐒𝐀𝐖𝐄𝐑𝐈𝐀 :
║│➸ *saweria.co/mursid25*
║│
║│➸ 𝐎𝐖𝐍𝐄𝐑 𝐁𝐎𝐓 :
║│➸ *wa.me/6288233832771*
║╰──────────────────
╰═══════════════════
`.trim(), footer, 'Owner', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
