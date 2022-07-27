let handler = async m => m.reply(`
            .✵.𝐆𝐄𝐑𝐔𝐔𝐌𝐃-𝐁𝐎𝐓.✵.

            https://chat.whatsapp.com/CCIlN7YFOF72twArqjHUFk
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler