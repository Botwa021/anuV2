let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(image + 'donasi')).buffer(), `
โญโโใ ๐๐๐๐๐๐ ใโโโฌฃ
โโฌก *_Dana_* :
โโฌก *088233832771*
โ
โโฌก *_Pulsa_* :
โโฌก *089612698583*
โโฌก *088233832771*
โ
โโฌก *_Saweria_* :
โโฌก *saweria.co/mursid25*
โ
โโฌก *_Website_*
โโฌก *_https://bit.ly/3LeJCXu_*
โโฌก *_https://bit.ly/3LmtovB_*
โ
โโฌก *_Owner Bot_* :
โโฌก *wa.me/6288233832771*
โ
โโฌกใ _*Grup Bot 1*_ ใ
โ   https://chat.whatsapp.com/LPFQ2X1cnihB0fb8F8cZau
โ
โโฌกใ _*Grup Bot 2*_ ใ
โ   https://chat.whatsapp.com/HjRHck1G3WRHOx97fJkdMN
โ
โโฌกใ _*Grup Bot 3*_ ใ
โ   https://chat.whatsapp.com/HcGcIB09sIvKrGytO8yfFn
โฐโโโโโโโโโโโโโโโฌฃ
`.trim(), footer, 'Owner', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
