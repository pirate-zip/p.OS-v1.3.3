const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('commands')
		.setDescription("Displays the mod view of the command list")
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers, PermissionFlagsBits.BanMembers)
    .addSubcommand(mod =>
      mod.setName("mod")
      .setDescription("moderator help for moderator commands")
      ).addSubcommand(general =>
      general.setName("general")
      .setDescription("moderator help for general use commands")
      ),
  
  // async execute(interaction, client) {
  //   const message = await interaction.deferReply({
  //     fetchReply: false,
  //   })

    async execute(interaction) {
      switch (interaction.options.getSubcommand()) {
        case "general":
          const {channel, options} = interaction;

      const helpEmbed = new EmbedBuilder()
        .setDescription('**---p.OS General Use Commands---**\n\n/boo {user} - Scares a user\n/credits - Displays the bot credits\n/ping - Displays your connection as well as the bot\'s connection to the discord servers\n/updatelog - Displays the full p.OS update log\n/help - Displays the general use command panel\n/quote - Quotes someone in the standard Dumpster Fire format\n\n\n**p.OS current version: 1.3.2**')
      await interaction.reply({
        embeds: [helpEmbed],
        ephemeral: true,
      })
        break;
        case "mod":

      const modEmbed = new EmbedBuilder()
          .setDescription('**---p.OS Moderator Commands---**\n\n/kick {user} - Kicks a user from the server\n/ban {user} - Bans a user from the server\n/commands {general/mod} - shows the moderator view of the command panel\n\n\n**p.OS current verson: 1.3.2**')
          await interaction.reply({
            embeds: [modEmbed],
            ephemeral: true,
          });
    }
  }
}