/*****
WATERMARK BY RyuuZeyy

RyuuZeyy is The Real owner of RFK
*****/
let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {

if (!isOwner) return m.reply('Lu Owner kah Dekkk?')
if (modepublic === true) return m.reply('udah public bodo\n\nOwner nya bodo gesss')
if (modepublic === true) return 
modepublic = true
m.reply(`Success Activated Mode Public`)

}
//handler.help = ['public', 'publik']
//handler.tags = ['info', 'main']

//handler.command = /^(public|publik)$/i
//handler.command = /^(modebot|mode)$/i
handler.customPrefix = /^(public|publik)$/i
handler.command = new RegExp
module.exports = handler