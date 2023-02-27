const { Client, GatewayIntentBits } = require('discord.js');

//use this line with all Intents on, in your Bot options
const client = new Client({
	intents: [ 
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

const prefix = '!';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
  if (message.content.startsWith(prefix) && !message.author.bot) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.channel.send('Pong!');
      }
    if (command === 'true') {
      message.channel.send('1');
      }
    
  }
});

client.login('DISCORD_TOKEN');