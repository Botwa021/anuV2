process.env.TZ = 'Asia/Jakarta'
let levelling = require('../lib/levelling')
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
const chats = conn.chats.all()
const groups = chats.filter(v => v.jid.endsWith('g.us'))
const os = require('os')
var sisaram = `${Math.round(os.freemem / 1024 / 1024)}`
var totalram = `${Math.round(os.totalmem / 1024 / 1024)}`
var ramDipake = totalram-sisaram
const defaultMenu = {
    before: `
┏━━〔 ${namabot} 〕━⬣
┃⬡ Hai, %name!
┃
┃⬡ Tersisa %limit Limit
┃⬡ Role %role
┃⬡ Level %level (%exp / %maxexp) 
┃⬡ [%xp4levelup]
┃⬡ %totalexp XP secara Total
┃ 
┃⬡ Hari : %week %weton 
┃⬡ Tanggal : %date
┃⬡ Tanggal Islam : 
┃⬡ %dateIslamic
┃⬡ Waktu : %time
┃
┃⬡ Uptime : %uptime
┃⬡ Database : %rtotalreg dari %totalreg
┃⬡ Memory Used : *${ramDipake}MB / ${totalram}MB*
┃⬡ Instagram
┃⬡ https://instagram.com/mursid.st
┃
┃⬡ Hy I'm Mursid I'm from Indonesia
┃⬡ I'm not a programmer
┃
┗━━━━━━⬣`.trimStart(),
    header: '┏━━〔 %category 〕━⬣',
    body: '┃⬡%cmd %islimit %isPremium',
    footer: '┗━━⬣\n',
    after: `
%npmname@^%version
${'%npmdesc'}
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
    let bzz = fs.readFileSync('./vn/ara-nabila.mp3')
    let bzz2 = fs.readFileSync('./vn/onichan.mp3')
    let { anon, anticall, antispam, antitroli, backup, jadibot, groupOnly, nsfw } = global.db.data.settings[conn.user.jid]
    let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]

    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let tags
    let teks = `${args[0]}`.toLowerCase()
    let arrayMenu = ['all', 'game', 'edukasi', 'news', 'nsfw', 'xp', 'stiker', 'image', 'anime', 'kerangajaib', 'quotes', 'admin', 'rpg', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'quran', 'audio', 'jadibot', 'info', 'vote', 'tanpakategori', 'owner']
    if (!arrayMenu.includes(teks)) teks = 'all'
    if (teks == 'all') tags = {
        'main': 'Utama',
        'game': 'Game',
        'xp': 'Exp & Limit',
        'nsfw': `NSFW ${global.opts['nsfw'] ? '' : '(Dinonaktifkan)'}`,
        'sticker': 'Stiker',
        'edukasi': 'Edukasi',
        'news': 'News',
        'kerang': 'Kerang Ajaib',
        'quotes': 'Quotes',
        'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
        'rpg': 'Epic Rpg',
        'group': 'Grup',
        'anime': 'Anime',
        'premium': 'Premium',
        'internet': 'Internet',
        'image': 'Random Image',
        'anonymous': 'Anonymous Chat',
        'nulis': 'MagerNulis & Logo',
        'downloader': 'Downloader',
        'tools': 'Tools',
        'fun': 'Fun',
        'database': 'Database',
        'vote': 'Voting',
        'absen': 'Absen',
        'quran': 'Islam',
        'audio': 'Pengubah Suara',
        'jadibot': 'Jadi Bot',
        'info': 'Info',
        '': 'Tanpa Kategori',
    }
    if (teks == 'game') tags = {
        'game': 'Game'
    }
    if (teks == 'xp') tags = {
        'xp': 'Exp & Limit'
    }
    if (teks == 'news') tags = {
        'news': 'News'
    }
    if (teks == 'edukasi') tags = {
        'edukasi': 'Edukasi'
    }
    if (teks == 'nsfw') tags = {
        'hentai': 'Hentai',
        'bokep': 'Bokep'
    }
    if (teks == 'stiker') tags = {
        'sticker': 'Stiker'
    }
    if (teks == 'rpg') tags = {
        'rpg': 'Epic Rpg'
    }
    if (teks == 'kerangajaib') tags = {
        'kerang': 'Kerang Ajaib'
    }
    if (teks == 'quotes') tags = {
        'quotes': 'Quotes'
    }
    if (teks == 'admin') tags = {
        'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`
    }
    if (teks == 'grup') tags = {
        'group': 'Grup'
    }
    if (teks == 'premium') tags = {
        'premium': 'Premium'
    }
    if (teks == 'internet') tags = {
        'internet': 'Internet'
    }
    if (teks == 'image') tags = {
        'image': 'Random Image'
    }
    if (teks == 'anonymous') tags = {
        'anonymous': 'Anonymous Chat'
    }
    if (teks == 'nulis') tags = {
        'nulis': 'MagerNulis & Logo'
    }
    if (teks == 'downloader') tags = {
        'downloader': 'Downloader'
    }
    if (teks == 'tools') tags = {
        'tools': 'Tools'
    }
    if (teks == 'fun') tags = {
        'fun': 'Fun'
    }
    if (teks == 'database') tags = {
        'database': 'Database'
    }
    if (teks == 'vote') tags = {
        'vote': 'Voting',
        'absen': 'Absen'
    }
    if (teks == 'anime') tags = {
        'anime': 'Anime'
    }
    if (teks == 'quran') tags = {
        'quran': 'Islam'
    }
    if (teks == 'audio') tags = {
        'audio': 'Pengubah Suara'
    }
    if (teks == 'jadibot') tags = {
        'jadibot': 'Jadi Bot'
    }
    if (teks == 'info') tags = {
        'info': 'Info'
    }
    if (teks == 'tanpakategori') tags = {
        '': 'Tanpa Kategori'
    }
    if (teks == 'owner') tags = {
        'owner': 'Owner',
        'host': 'Host',
        'advanced': 'Advanced'
    }



    try {
        let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => _))
        let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
        let { min, xp, max } = levelling.xpRange(level, global.multiplier)
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let names = m.fromMe ? conn.user : conn.contacts[who]
        let pushname = `${names.vnmae || names.notify || names.names || ('+' + names.jid.split`@`[0])}`
        let pushn = 'Daftar Dulu ya kak supaya namanya muncul disini'
        let name = registered ? global.db.data.users[m.sender].name : pushn
        let d = new Date(new Date + 3600000)
        let locale = 'id'
        // d.getTimeZoneOffset()
        // Offset -420 is 18.00
        // Offset    0 is  0.00
        // Offset  420 is  7.00
        let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
        let week = d.toLocaleDateString(locale, { weekday: 'long' })
        let date = d.toLocaleDateString(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
        let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).format(d)
        let time = d.toLocaleTimeString(locale, {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        })
        let _uptime = process.uptime() * 1000
        let _muptime
        if (process.send) {
            process.send('uptime')
            _muptime = await new Promise(resolve => {
                process.once('message', resolve)
                setTimeout(resolve, 1000)
            }) * 1000
        }
        let muptime = clockString(_muptime)
        let uptime = clockString(_uptime)
        let totalreg = Object.keys(global.db.data.users).length
        let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
        let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
            return {
                help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
                tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
                prefix: 'customPrefix' in plugin,
                limit: plugin.limit,
                premium: plugin.premium,
                enabled: !plugin.disabled,
            }
        })
        if (teks == '404') return m.reply(`
┌〔 DAFTAR MENU 〕
├ ${_p + command} all
├ ${_p + command} game
├ ${_p + command} xp
├ ${_p + command} stiker
├ ${_p + command} kerang
├ ${_p + command} quotes
├ ${_p + command} admin
├ ${_p + command} group
├ ${_p + command} premium
├ ${_p + command} internet
├ ${_p + command} anonymous
├ ${_p + command} nulis
├ ${_p + command} downloader
├ ${_p + command} tools
├ ${_p + command} fun
├ ${_p + command} database
├ ${_p + command} vote
├ ${_p + command} quran
├ ${_p + command} audio
├ ${_p + command} jadibot
├ ${_p + command} info
├ ${_p + command} tanpa kategori
├ ${_p + command} owner
└────  
            `.trim())
        let groups = {}
        for (let tag in tags) {
            groups[tag] = []
            for (let plugin of help)
                if (plugin.tags && plugin.tags.includes(tag))
                    if (plugin.help) groups[tag].push(plugin)
            // for (let tag of plugin.tags)
            //   if (!(tag in tags)) tags[tag] = tag
        }
        conn.menu = conn.menu ? conn.menu : {}
        let before = conn.menu.before || defaultMenu.before
        let header = conn.menu.header || defaultMenu.header
        let body = conn.menu.body || defaultMenu.body
        let footer = conn.menu.footer || defaultMenu.footer
        let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
        let _text = [
            before,
            ...Object.keys(tags).map(tag => {
                return header.replace(/%category/g, tags[tag]) + '\n' + [
                    ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
                        return menu.help.map(help => {
                            return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                                .trim()
                        }).join('\n')
                    }),
                    footer
                ].join('\n')
            }),
            after
        ].join('\n')
        text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
        let replace = {
            '%': '%',
            p: _p, uptime, muptime,
            me: conn.user.name,
            npmname: package.name,
            npmdesc: package.description,
            version: package.version,
            exp: exp - min,
            maxexp: xp,
            totalexp: exp,
            xp4levelup: max - exp <= 0 ? `Siap untuk ${_p}levelup` : `${max - exp} XP lagi untuk levelup`,
            github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
            level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
            readmore: readMore
        }
        text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

await conn.fakeReply(m.chat, 'Loading...', '0@s.whatsapp.net', 'BY MURSID (+6288233832771)', 'status@broadcast')
 conn.send3ButtonLoc(m.chat, await (await fetch(fla + teks)).buffer(), text.trim(), footer, 'ρємιℓιк вσт', '.owner', 'ιηƒσ мυʀѕι∂', '.infomursid', 'ʀυℓєѕ', '.rules', m)
        // await conn.send3ButtonLoc(m.chat, await (await fetch(`https://i.ibb.co/fH0hppT/mikey.jpg`)).buffer(), text.trim(), 'Recoded By Dawnfrosty', 'Pemilik Bot', '.owner', 'Infomursid', '.infomursid', 'Rules', '.infobot', m)
        await conn.sendFile(m.chat, bzz, 'bzz.opus', null, m, true)
        await conn.sendFile(m.chat, bzz2, 'bzz2.opus', null, m, true)
    } catch (e) {
        conn.reply(m.chat, 'Maaf, menu sedang error', m)
        throw e
    }
}
handler.help = ['menu', '?', 'help']
handler.tags = ['main']
handler.command = /^(menu|\?|help)$/i

handler.exp = 3

module.exports = handler

const more = String.fromCharCode(1)
const readMore = more.repeat(1)

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari"
    if (time >= 4) {
        res = "Selamat pagi"
    }
    if (time > 10) {
        res = "Selamat siang"
    }
    if (time >= 15) {
        res = "Selamat sore"
    }
    if (time >= 18) {
        res = "Selamat malam"
    }
    return res
}
