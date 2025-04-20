const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('autopurge')
    .setDescription('Apaga mensagens imediatamente após o tempo configurado.'),
  async execute(interaction) {
    await interaction.reply('Executado autopurge.');
  },
};