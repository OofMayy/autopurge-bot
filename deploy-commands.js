require('dotenv').config();
const fs = require('fs');
const { REST, Routes } = require('discord.js');

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  if (command.data) commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);
(async () => {
  try {
    console.log('🛰️ Atualizando comandos...');
    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });
    console.log('✅ Comandos atualizados com sucesso!');
  } catch (error) {
    console.error(error);
  }
})();