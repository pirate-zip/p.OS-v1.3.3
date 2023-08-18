const { SlashCommandBuilder } = require("discord.js");
const { cringecure } = require("../../../imagedata.json")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cringecure')
		.setDescription("Instantly cures all cringe from your body (use in moderation)"),
    
	async execute(interaction, client)     {
		const message = await interaction.deferReply({
			fetchReply: false,
		});

		const newMessage = cringecure[0];
		await interaction.editReply({
			content: newMessage
		});
	}
}
