const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('updatelog')
		.setDescription("Displays the p.OS update log"),

  // async execute(interaction, client) {
  //   const message = await interaction.deferReply({
  //     fetchReply: false,
  //   })

    async execute(interaction) {
      const {channel, options} = interaction;

    const updateEmbed = new EmbedBuilder()
      .setDescription(`**UPDATE LOG**\n\n---Version b1.0.0---\n•Bot created\n•Added first 2 commands - /ping and /boo\n\n---Version pre1.0.0---\n•Added 2 new admin commands - /kick and /ban\n•Added 1 new general use command - /credits\n•Bot released to a select few servers\n\n---Version 1.0.0---\n•Added new command - /updatelog\n•Released to more servers\n\n---Version 1.0.1---\n•Added new command - /help\n\n---Version 1.0.2---\n•Added new command - /cringecure\n•Updated command description - /ping - Previous Description: Return my ping! (this is the first command ever installed in p.OS - New Description: Shows connection speed to the Discord Servers (this is the first command ever installed in p.OS)\n\n---Version 1.3.0---\n•Added new command /quote\n•Changed update number format\n•Changed the output of command /credits for unnamed security reasons\n•Changed the version note at the bottom of /credits to be bold\n\n---Version 1.3.1---\n•Updated command output of /help to include /quote\n\n---Version 1.3.2---\n•Command /quote no longer sends quote in a \"reply\" style to make it feel more natural\n•Added new command - /commands for moderator use (Permissions needed: \`KickMembers\` and \`BanMembers\`)\n•Added a new credit to command /credits\n•Changed official bot pfp\n\n---Version 1.3.3---\n•Added new command: /say (similar to AGNABOT's a.say, and Banos's /banos sez)\n\n\n**p.OS current version: 1.3.3**`)
    await interaction.reply({
      embeds: [updateEmbed]
    });
  }
}