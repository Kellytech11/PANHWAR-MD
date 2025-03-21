const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "📟",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `╭━━〔 *𝐏𝐀𝐍𝐇𝐖𝐀𝐑-𝐌𝐃* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *⏳Uptime*:  ${runtime(process.uptime())} 
┃◈┃• *📟 Ram usage*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
┃◈┃• *⚙️ HostName*: ${os.hostname()}
┃◈┃• *👨‍💻 Owner*: 𝐀𝐧𝐬𝐚𝐫𝐏𝐚𝐧𝐡𝐰𝐚𝐫
┃◈┃• *🧬 Version*: 2.0.0
┃◈└───────────┈⊷
╰──────────────┈⊷
> © 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐀𝐍𝐒𝐀𝐑-𝐏𝐀𝐍𝐇𝐖𝐀𝐑`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://i.imghippo.com/files/Heb9902bbM.jpg` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363380724912615@newsletter',
                    newsletterName: '⏤͟͟͞͞★͙≛͙⃝͙𝐏𝐀𝐍𝐇𝐖𝐀𝐑-𝐌𝐃♥᭄ ࿐',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
