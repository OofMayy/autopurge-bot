const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('autopurge_stop')
    .setDescription('Encerra a purga contínua de mensagens.'),
  async execute(interaction) {
    await interaction.reply('Auto purge stop executado.');
  },
};