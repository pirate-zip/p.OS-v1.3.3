const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require("discord.js");
const { pirateID } = ('1035338985926570054');
const { duckID } = ('743218702022869083');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("kicks the user from the server like a football")
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
    .addUserOption(option =>
        option.setName("target")
        .setDescription("The person you want to kick out")
        .setRequired(true)
      )
    .addStringOption(option =>
        option.setName("reason")
        .setDescription("The reason why you are kicking them")
      ),

    async execute(interaction) {
      const {channel, options} = interaction;

      const user = options.getUser("target");
      const reason = options.getString("reason") || "just felt like it lol (ERR: No reason provided)";

      const member = await interaction.guild.members.fetch(user.id);

      const errEmbed = new EmbedBuilder()
        .setDescription(`ERR: You cannot kick ${user.username} from this server due to role placements`)
        .setColor(0xc723b)

      const protEmbed = new EmbedBuilder()
        .setDescription(`Sorry, but in accordance to my morals (the terms and conditions of this bot), I cannot remove ${user.username} from this server. Please reconsider removing ${user.username} as they are overseeing the usage of me (p.OS) in these early stages of development`)
      
      if (member.roles.highest.position >= interaction.member.roles.highest.position)
        return interaction.reply({ embeds: [errEmbed], ephemeral: true});

      // if (user.id = pirateID)
        // return interaction.reply({ embeds: [protEmbed], ephemeral: true});

      // if (user.id = duckID)
        // return interaction.reply({ embeds: [protEmbed], ephemeral: true});
      
      const privateEmbed = new EmbedBuilder()
        .setDescription(`Successfully kicked ${user} with reason: ${reason}`);

       const publicEmbed = new EmbedBuilder()
        .setDescription(`${user} has been kicked from the server with reason: ${reason}`)
      
      await interaction.reply({
        embeds: [privateEmbed], ephemeral: true,
      });

      channel.send({
        embeds: [publicEmbed],
      });
      
      // const channelID = member.guild.channels.cache.get(channelID);
      
      // await interaction.channelID.send({
      //   embeds: [publicEmbed],
      // });
      
      const dmEmbed = new EmbedBuilder()
        .setDescription(`Hate to break it to you, but you got kicked from ${interaction.guild.name}\nThe reason provided is as follows: ${reason}. If there is no reason specified, then hopefully you know what you did. Have a nice day!\n-pirate_zip, the creator of p.OS`)

      await member.send({ embeds: [dmEmbed] }).catch(err => {
        return;
      });

      await member.kick({ reason: reason}).catch(err => {
        interaction.reply({ content: "There was an error (I'm out of ideas for quirky error messages sorry)", ephemeral: true});
      });
    }
}