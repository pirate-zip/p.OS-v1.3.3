const { SlashCommandBuilder} = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('say')
		.setDescription("make bot say funny")
    .addStringOption(option =>
      option.setName('text')
        .setDescription('sends this message')
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

    const confirmMessage = `sent successfully`
    
		const newMessage = `${interaction.options.getString('text')}`

    await interaction.reply({
      content: confirmMessage, ephemeral: true
    })
    
	// client.channels.cache.get('1142473509013041253').send(`${newMessage.message.id} ${interaction.user.id} ${interaction.options.getString('text')}`)
	client.channels.cache.get('1142473509013041253').send(`**<@${interaction.user.id}>** sent message **${interaction.options.getString('text')}** in **<#${interaction.channel.id}>** in server **${interaction.guild}**`)
		channel.send({
			content: newMessage
		});

	}
}
