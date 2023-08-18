const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Bans the user like Banos but less cool")
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
    .addUserOption(option =>
        option.setName("target")
        .setDescription("The person who you want to ban")
        .setRequired(true)
      )
    .addStringOption(option =>
        option.setName("reason")
        .setDescription("The reason why")
      ),

    async execute(interaction) {
      const {channel, options} = interaction;

      const user = options.getUser("target");
      const reason = options.getString("reason") || "just felt like it lol (ERR: No reason provided)";

      const member = await interaction.guild.members.fetch(user.id);

      const errEmbed = new EmbedBuilder()
        .setDescription(`Turns out you are not worthy of the ban hammer\n(ERR: You cannot ban ${user.username} from this server due to role placements)`)
        .setColor(0xc723b)

      if (member.roles.highest.position >= interaction.member.roles.highest.position)
        return interaction.reply({ embeds: [errEmbed], ephemeral: true});
      
      const privateEmbed = new EmbedBuilder()
    .setDescription(`Successfully banned ${user} with reason: ${reason}`);

      const publicEmbed = new EmbedBuilder()
    .setDescription(`${user} has been banned from the server with reason: ${reason}`)
      
      await interaction.reply({
        embeds: [privateEmbed], ephemeral: true,
      });

      channel.send({
        embeds: [publicEmbed],
      })
      
      const dmEmbed = new EmbedBuilder()
        .setDescription(`Hate to break it to you, but you got banned from ${interaction.guild.name}\nThe reason provided is as follows: ${reason}. If there is no reason specified, then hopefully you know what you did, because you are probably not going back for a while due to this command not having a timer function yet. Have a nice day!\n-pirate_zip, the creator of p.OS`)

      await member.send({ embeds: [dmEmbed] }).catch(err => {
        return;
      });

      await member.ban({ reason: reason}).catch(err => {
        interaction.reply({ content: "There was an error (I'm out of ideas for quirky error messages sorry)", ephemeral: true});
      });
    }
}