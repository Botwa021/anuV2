let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *Informasi Owner* ´ˎ˗
│ ✎ _Nama_ : Mursid S
│ ✎ _Sekolah_ : SMKN 2 Wonosari
│ ✎ _Umur_ : 17
│ ✎ _Asal_ : Yogyakarta
│ ✎ _Status_ : Pelajar SMK
│ ✎ _Official Grup 1_ :
│    https://chat.whatsapp.com/LPFQ2X1cnihB0fb8F8cZau
│ ✎ _Official Grup 2_ :
│    https://chat.whatsapp.com/HjRHck1G3WRHOx97fJkdMN
│ ✎ _Instagram_ : 
│    instagram.com/mursid.st
│ ✎ _WhatsApp_ :
│    wa.me/6288233832771
╰‿‿‿‿‿‿‿‿
`.trim(), m)
}

handler.help = ['infoowner']
handler.tags = ['main', 'utama']
handler.command = /^(infoowner)$/i

handler.exp = 150

module.exports = handler
