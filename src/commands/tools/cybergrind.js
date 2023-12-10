const { SlashCommandBuilder } = require("discord.js");
const { cringecure } = require("../../../imagedata.json")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cybergrind')
		.setDescription("Agnabot most important feature"),
    
	async execute(interaction, client)     {

interaction.reply({
  content:'https://media.discordapp.net/attachments/1100521311534592041/1107968544492224532/image.png?width=197&height=585'
});

  }
}