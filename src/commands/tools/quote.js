const { SlashCommandBuilder} = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('quote')
		.setDescription("Quickly quotes a user in the standard Dumpster Fire format")
		.addUserOption(option =>
			option.setName('user')
				.setDescription('user that you are quoting')
				.setRequired(true))
    .addStringOption(option =>
      option.setName('quote')
        .setDescription('the quote')
        .setRequired(true)),
  
	async execute(interaction, client) {
    const {channel} = interaction;
		// const message = await interaction.deferReply({
		// 	fetchReply: false,
		// });

		//const { user } = interaction.

		// console.log(interaction);
		// console.log(client.commandArray.options)
		// console.log(client)

    const confirmMessage = `sucessfully quoted <@${interaction.options.getUser('user').id}>`
    
		const newMessage = `"${interaction.options.getString('quote')}" -<@${interaction.options.getUser('user').id}>`

    await interaction.reply({
      content: confirmMessage, ephemeral: true
    })
    
		channel.send({
			content: newMessage
		});

	}
}
