const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('boo')
		.setDescription("BOO! (this is shinyduck's mark. untill we meet again)")
		.addUserOption(option =>
			option.setName('user')
				.setDescription('scare a user')
				.setRequired(true)),
	async execute(interaction, client) {
		const message = await interaction.deferReply({
			fetchReply: false,
		});

		//const { user } = interaction.

		// console.log(interaction);
		// console.log(client.commandArray.options)
		// console.log(client)

		const newMessage = `<@${interaction.options.getUser('user').id}> BOO! I SCARED YOU!!!`
		await interaction.editReply({
			content: newMessage
		});
	}
}
