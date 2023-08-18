const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('credits')
		.setDescription("Displays bot credits"),

  // async execute(interaction, client) {
  //   const message = await interaction.deferReply({
  //     fetchReply: false,
  //   })

    async execute(interaction) {
      const {channel, options} = interaction;

    const creditEmbed = new EmbedBuilder()
      .setDescription(`**Bot Credits**\n\nCreator: pirate_zip\nOther contributors: ShinyDuck21, HappyHat_47\nLanguage: Javascript\n24/7 server: UptimeRobot (https://www.uptimerobot.com)\n\np.OS is still in development and may contain bugs, especially in the prerelease versions. Please alert pirate_zip#2464 with any bug finds\n**p.OS current version: 1.3.2**`)
    await interaction.reply({
      embeds: [creditEmbed]
    });
  }
}