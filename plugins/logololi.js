let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Loading...')
  let res = `https://bx-hunter.herokuapp.com/api/canvas/gfx2?apikey=FuckBitch&nama=${response[0]}`
  conn.sendFile(m.chat, res, 'sadboy.jpg', `Sudah Jadi, Follow Ig @mursid.st`, m, false)
}
handler.help = ['logololi'].map(v => v + ' <text>')
handler.tags = ['nulis', 'anime']
handler.command = /^(logololi)$/i
handler.register = true

handler.limit = true

module.exports = handler
