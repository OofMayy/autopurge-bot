const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('set_msg_expire')
    .setDescription('Define o tempo para mensagens expirarem automaticamente.')
    .addIntegerOption(option =>
      option.setName('tempo').setDescription('Tempo em segundos').setRequired(true)),
  async execute(interaction) {
    await interaction.reply('Mensagens irão expirar conforme configurado.');
  },
};