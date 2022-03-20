let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(thanks)).buffer(), `
BIG THANKS TO

•Allah SWT
•My ortu
•Nurutomo as wabot-aq
•Adiwajshing
•ariffb as stikerinbot
•bochilgaming as games-wabot
•Syahrul
•RFK Team
•Real Fams Killer
•Amel
•IrwanX
•Dawnfrosty
•Rteam1
•Beniismael
•Raditya 
•AlyaaXzy
•King Of Bear
•Mursid S
•Furqan
•Elyas
•Rasel
•zerochanBot
•MikeBot Dev Team
•Xteam
•khael
•Atenabot
•Baka Botz
•ZeeoneOfc
•Zeks
•Rendycraft  
•Nadin
•Aca Mirabel
•Penyedia Layanan API
•All Creator Bot
•Orang-orang yang Berdonasi
`.trim(), watermark, 'Back', '.menu')
handler.help = ['Thanksto', 'tqto']
handler.tags = ['main']
handler.command = /^(tqto|thanks|thanksto|bigthanks)$/i

module.exports = handler

// di ilangin jangan,di tambahin boleh

