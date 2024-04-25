require('dotenv').config();
const { Bot } = require("grammy");


const bot = new Bot(process.env.TELEGRAM_TOKEN);

bot.start((ctx) => {
  ctx.reply('Hello! Welcome to my bot.');
});

// bot.help((ctx) => {
//   ctx.replyWithMarkdown('*Hello Bot*\n\nHi, I am a Telegram bot developed using GrammyJS');
// });

bot.on('message', async (ctx) => {
  const messageText = ctx.message.text;
  if (/start|help/.test(messageText)) {
    await ctx.reply('Hello! Welcome to my bot.');
  } else {
    await ctx.reply(`You sent me: ${messageText}`);
  }
});

// Start the bot
bot.start();