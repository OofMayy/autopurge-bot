const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('autopurge_start')
    .setDescription('Inicia a purga contínua de mensagens no canal.'),
  async execute(interaction) {
    await interaction.reply('Auto purge start ativado.');
  },
};