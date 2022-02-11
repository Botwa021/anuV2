let moment = require('moment-timezone')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    //if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    if (new Date - user.pc < 9000000) return // setiap 1 jam sekali
    await this.sendButton(m.chat, `
Hai kak, ${ucapan()}

${user.banned ? 'kamu dibanned' : 'I'm MURSID di sini ada yang bisa saya bantu? Jika mau liat menu tinggal ketik *#menu* atau ketik button di bawah'}
`.trim(), footer, user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '#owner' : '#menu', m)
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Good Morning<3"
    if (time >= 4) {
        res = "Good Morning<3"
    }
    if (time > 10) {
        res = "Good Afternoon<3"
    }
    if (time >= 15) {
        res = "Good Afternoon<3"
    }
    if (time >= 18) {
        res = "Good Night<3"
    }
    return res
}
