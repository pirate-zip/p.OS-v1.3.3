require('dotenv').config();
const { token } = process.env;
const { Client, Collection, GatewayIntentBits, MessageContent, GuildMessages, messageCreate } = require('discord.js');
const fs = require('fs');
const keepAlive = require(`./server`);
const pirateID = ('907055124503994398');

const client = new Client({ intents: GatewayIntentBits.Guilds, MessageContent, GuildMessages });
client.commands = new Collection();
client.commandArray = [];

const functionFolders = fs.readdirSync('./src/functions')
for (const folder of functionFolders) {
  const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter(file => file.endsWith('.js'));
for (const file of functionFiles)
  require(`./src/functions/${folder}/${file}`)(client);
}

// async message => {
//   console.log('it got to point 1')
//   if (message.author.id === pirateID) return;{
//     await message.reply(`<@907055124503994398> BOO! I SCARED YOU!!!`);
//     console.log('detected all')
//   }
// };
//
client.handleEvents();
client.handleCommands();
client.login(token);
keepAlive();

// client.on("messageCreate", async (message) => {
// 	if (message.author.id(625362014029742110)) return true; {
//     message.reply(`<@625362014029742110> BOO! I SCARED YOU!!!`)
//   }
// });

// client.on("messageCreate", async (message) => {
// 	if(message.author.id === pirateID) return; {
//     message.reply(`<@907055124503994398> BOO! I SCARED YOU!!!`)
//   }
// });

