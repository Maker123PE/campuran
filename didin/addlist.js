/*
   Script By DidinPedia
   Ad keperluan? chat wa : 6289518363262
   🌹 Subscribe : DidinPedia 🌹
*/

const fs = require('fs')
const chalk = require('chalk')

global.mobilelegend = "list ny? buat sendiri di didin/addlist"
global.freefire = "belum ad produk"
global.pubg = "belum ad produk"
global.panel = "belum ada produk"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
