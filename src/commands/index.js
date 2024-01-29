const ping = require("./ping");
const eightBall = require("./8ball");
require("dotenv").config();

const channelId = process.env.CHANNEL_ID;
const commands = {
  ping,
  "8ball": eightBall,
};

module.exports = async (msg) => {
  if (msg.channel.id === channelId) {
    const args = msg.content.split(" ");

    if (args.length === 0 || args[0].charAt(0) !== "!") return;

    const command = args.shift().substr(1);
    if (Object.keys(commands).includes(command)) {
      commands[command](msg, args);
    }
  }
};
