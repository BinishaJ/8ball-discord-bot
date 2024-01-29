const Discord = require("discord.js");
const commandHandler = require("./commands");
require("dotenv").config();

const client = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => {
  console.log("Bot is ready!");
});

client.on("messageCreate", commandHandler);

client.login(process.env.BOT_TOKEN);
