const eightBall = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

module.exports = async (msg, args) => {
  if (!args.length) return;
  const i = Math.floor(Math.random() * (eightBall.length - 1));
  const reply = eightBall[i];
  console.log(reply);
  await msg.reply(`${msg.author} ${reply}`);
};
