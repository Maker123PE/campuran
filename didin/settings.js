/*
   Script By DidinPedia
   Ad keperluan? chat wa : 6289518363262
   🌹 Subscribe : DidinPedia 🌹
*/

const fs = require('fs')
const chalk = require('chalk')

/* ~~~~~~~~~ WEB API ~~~~~~~~~ */
global.lol = '087b203a426c96a19fba8578' // https://api.lolhuman.xyz
global.xzn = '' // https://xnz.wtf
/* ~~~~~~~~~ SETTINGS OWNER ~~~~~~~~~ */
global.numberowner = '51902679067' // Owner Utama
global.owner = ['51902679067'] // Owner Lainnya
global.namaowner = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢' // Nama Owner
global.premium = ["51902679067"] // Premium User
global.nobot = '51902679067'
global.ownername = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.domain = '' // Isi Domain Lu
global.apikey2 = '' // Isi Apikey Plta Lu
global.keyopenai = ""
global.capikey2 = 'ptlc_GxU7nmwmqHraH0a54lTxRmts0Cwj0ybamJXqlah4N5p' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.themeemoji = '•'
/* ------------------- GLOBAL E - WALLET / PEMBAYARAN ------ */
global.dana = "51902679067"
global.gopay = "Gak ada"
global.ovo = "gak ada"
/* ~~~~~~~~~ SETTINGS BOT ~~~~~~~~~ */
global.namabot = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢' // NickBot
global.typemenu = 'v2' // 'v1' > 'v2' > 'v3' > 'v4'
global.typereply = 'v1' // 'v1' > 'v2'
global.autoread = false // ReadChat
global.autobio = true // AutoBio
global.autoblok212 = true // AutoBlock Nomer +212
global.onlyindo = false  // AutoBlock Selain Nomer Indo
global.packname = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢' // Watermark Sticker
global.author = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢' // Watermark Sticker
/* ~~~~~~~~~ MESSAGES ~~~~~~~~~ */
global.mess = {
    done: 'sᴜᴅᴀʜ ᴋᴀᴋ !!',
    prem: 'Feature Only For User _*PREMIUM*_',
    admin: 'ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ ᴋᴀᴋ, ᴇᴍᴀɴɢ ʟᴜ sɪᴀᴘᴀ ᴀɴᴊᴇɴɢ ?',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '*ᴡᴀᴅᴜʜ ᴋᴀᴋ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ ʜᴇʜᴇ !*',
    group: '*ᴋʜᴜsᴜs ᴅɪ ɢʀᴏᴜᴘ ᴋᴀᴋᴀ.*',
    private: '*ғɪᴛᴜʀ ɪɴɪ ʙɪsᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴅɪ ᴄʜᴀᴛ ᴘʀɪʙᴀᴅɪ ᴋᴀᴋ.*',
    wait: '*ᴛᴜɴɢɢᴜ sᴇʙᴇɴᴛᴀʀ ʏᴀ ᴋᴀᴋ ʟᴀɢɪ ᴅɪ ᴘʀᴏsᴇs !*',    
    error: '_*Sorry Features Error*_',
}
/* ~~~~~~~~~ THUMBNAIL ~~~~~~~~~ */
global.thumb = fs.readFileSync('./didin/media/quoted.jpg')
global.menu = fs.readFileSync('./didin/media/menu.jpg')
/* ~~~~~~~~~ EDITS LINK ~~~~~~~~~ */
global.link = 'https://whatsapp.com/channel/0029VaEsxUbJP21BfklgZS3m'
/* ~~~~~~~~~ END SYSTEM ~~~~~~~~~ */
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
