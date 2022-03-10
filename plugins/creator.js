const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{
    "displayName": "ᴏᴡɴᴇʀ",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:mursid-bot;Owner;;;\nFN:𝐌𝐔𝐑𝐒𝐈𝐃 𝐁𝐎𝐓🤖\nitem1.TEL;waid=6289612698583:6289612698583\nitem1.X-ABLabel:📍 Owner\nitem2.EMAIL;type=INTERNET:akunsesi021@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://hardianto.xyz/\nitem3.X-ABLabel:📮 Rest Api\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Region | Indonesia 🇮🇩\nitem5.X-ABLabel:───────[ 𝐌𝐔𝐑𝐒𝐈𝐃 𝐁𝐎𝐓 ]───────\nEND:VCARD"
  }, {
    "displayName": "ᴏᴡɴᴇʀ",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Run;Jasa;;;\nFN:Creator\nitem1.TEL;waid=6288233832771:6288233832771\nitem1.X-ABLabel:📍 Owner\nitem2.EMAIL;type=INTERNET:mursidmulo@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:saweria.co/mursid25/\nitem3.X-ABLabel:📮 Rest Api\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Region | Yogyakarta 🇮🇩\nitem5.X-ABLabel:───────[ 𝐌𝐔𝐑𝐒𝐈𝐃 𝐁𝐎𝐓 ]───────\nEND:VCARD"
  }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner)$/i

module.exports = handler
