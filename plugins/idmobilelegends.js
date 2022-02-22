let fetch = require('node-fetch')
let handler = async (m, { args, usedPrefix, command, text }) => {
  let [id, server] = text.split `|`

    if (!id) return conn.reply(m.chat, `uhm.. kamu salah\n\ncontoh:\n${usedPrefix + command} 84830127|2169`, m)
    if (!server) return conn.reply(m.chat, `uhm.. kamu salah\n\ncontoh:\n${usedPrefix + command} 84830127|2169`, m)
  if (!text) throw `uhm.. kamu salah\n\ncontoh:\n${usedPrefix + command} 84830127|2169`

  let res = await fetch(`https://apikey-bear3.herokuapp.com/api/id/ml?apikey=${bearkey}&id=${id}&server=${server}`)
    if (!res.ok) throw eror
  let json = await res.json()
  m.reply(json.result)
}
handler.help = ['ml'].map(v => v + ' <id>|<server>')
handler.tags = ['internet']
handler.command = /^(ml|mobilelegends)$/i

module.exports = handler
