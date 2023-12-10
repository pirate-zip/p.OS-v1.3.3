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
    
	// client.channels.cache.get('1142473509013041253').send(`${newMessage.message.id} ${interaction.user.id} ${interaction.options.getString('text')}`)
		
if (interaction.options.getString('text').includes('@everyone') || interaction.options.getString('text').includes('@here')) {return(
  channel.send(`Nice try <@${interaction.user.id}> you can\'t ping everyone or here using /say`),
  client.channels.cache.get('1142473509013041253').send(`hey <@907055124503994398>\n**<@${interaction.user.id}>** tried to ping everyone and/or here in **<#${interaction.channel.id}>** in server **${interaction.guild}**`),
  await interaction.reply({
    content: 'pirate knows what you tried to do. savor your time here, for you have little left...',
  ephemeral: true
  })
)} else {
client.channels.cache.get('1142473509013041253').send(`**<@${interaction.user.id}>** sent message **${interaction.options.getString('text')}** in **<#${interaction.channel.id}>** in server **${interaction.guild}**`),
  interaction.channel.send({
			content: newMessage
    });
}
    await interaction.reply({
      content: confirmMessage, ephemeral: true
    })
	}
}
