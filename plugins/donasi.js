let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(image + 'donasi')).buffer(), `
╭═══ 〔 𝐃𝐎𝐍𝐀𝐒𝐈 〕 ══❉
║│➸ *_Dana_* :
║│➸ *088233832771*
║│
║│➸ *_Pulsa_* :
║│➸ *089612698583*
║│➸ *088233832771*
║│
║│➸ *_Saweria_* :
║│➸ *saweria.co/mursid25*
║│
║│➸ *_Website_*
║│➸ *_https://bit.ly/3LeJCXu_*
║│➸ *_https://bit.ly/3LmtovB_*
║│
║│➸ *_Owner Bot_* :
║│➸ *wa.me/6288233832771*
║│
║│➸「 _*Grup Bot 1*_ 」
║│   https://chat.whatsapp.com/LPFQ2X1cnihB0fb8F8cZau
║│
║│➸「 _*Grup Bot 2*_ 」
║│   https://chat.whatsapp.com/HjRHck1G3WRHOx97fJkdMN
║│
║│➸「 _*Grup Bot 3*_ 」
║│   https://chat.whatsapp.com/HcGcIB09sIvKrGytO8yfFn
║╰──────────────────
╰═══════════════════❉
`.trim(), footer, 'Owner', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
