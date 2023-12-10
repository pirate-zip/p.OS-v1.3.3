const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription("Displays the general use command list")
    .addSubcommand(general =>
      general.setName("general")
      .setDescription("help for general use commands")
      )/*.addSubcommand(mod =>
      mod.setName("mod")
      .setDescription("help for moderator commands")
      .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers, PermissionFlagsBits.BanMembers)
      )*/,
  
  // async execute(interaction, client) {
  //   const message = await interaction.deferReply({
  //     fetchReply: false,
  //   })

    async execute(interaction) {
      switch (interaction.options.getSubcommand()) {
        case "general":
          const {channel, options} = interaction;

      const helpEmbed = new EmbedBuilder()
        .setDescription('**---p.OS Commands---**\n\n**---General Use Commands---**\n/boo {user} - Scares a user\n/credits - Displays the bot credits\n/ping - Displays your connection as well as the bot\'s connection to the discord servers\n/updatelog - Displays the full p.OS update log\n/help - Displays the general use command panel (this thing that you are looking at)\n/quote - Quotes someone in the standard Dumpster Fire format\n\n\n**p.OS current version: 1.3.3.1**')
      await interaction.reply({
        embeds: [helpEmbed],
        ephemeral: true,
      });
    }
  }
}