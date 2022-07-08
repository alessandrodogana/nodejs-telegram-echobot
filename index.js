import { Bot } from "grammy";
import {Menu} from "@grammyjs/menu";
import config from "./config.json" assert {type: 'json'};


// Create a bot.
const bot = new Bot(process.env.BOT_TOKEN);

// Create base menu.
const menu = new Menu("root-menu")
.text("Tutorial", (ctx) => ctx.reply(config.payment.tutorial)).row()
.submenu("Instagram", "ig-menu").row()
.submenu("Tik Tok", "tt-menu");

// Instagram Section
const instagram = new Menu("ig-menu")
.back("Indietro")
.text("Scegli la categoria").row()
.submenu("Like", "ig-like").row()
.submenu("Follower", "ig-follower").row()
.submenu("Visual", "ig-visual").row()
.submenu("Commenti", "ig-commenti").row();

const igLike = new Menu("ig-like")
.back("Indietro")
.text("Scegli la tariffa").row()
.text("100 Like --> 0.40€", (ctx) => ctx.reply(config.payment.url)).row()
.text("5.000 Like --> 16.00€", (ctx) => ctx.reply(config.payment.url)).row()
.text("10.000 Like --> 24.00€", (ctx) => ctx.reply(config.payment.url)).row()
.text("50.000 Like --> 80.00€", (ctx) => ctx.reply(config.payment.url)).row()
.text("500.000 Like --> 400.00€", (ctx) => ctx.reply(config.payment.url)).row();

const igFollower = new Menu("ig-follower")
.back("Indietro")
.text("Scegli la tariffa").row()
.text("100 Follower --> 0.50€", (ctx) => ctx.reply(config.payment.url)).row()
.text("5.000 Follower --> 20.00€", (ctx) => ctx.reply(config.payment.url)).row()
.text("10.000 Follower --> 30.00€", (ctx) => ctx.reply(config.payment.url)).row()
.text("50.000 Follower --> 100.00€", (ctx) => ctx.reply(config.payment.url)).row()
.text("500.000 Follower --> 500.00€", (ctx) => ctx.reply(config.payment.url)).row();

const igVisual = new Menu("ig-visual")
.back("Indietro")
.text("Scegli la tariffa").row()
.text("1.000 Visual --> 0.40€", (ctx) => ctx.reply(config.payment.url)).row()
.text("50.000 Visual --> 16.00€", (ctx) => ctx.reply(config.payment.url)).row()
.text("100.000 Visual --> 24.00€", (ctx) => ctx.reply(config.payment.url)).row()
.text("500.000 Visual --> 80.00€", (ctx) => ctx.reply(config.payment.url)).row()
.text("5.000.000 Visual --> 400.00€", (ctx) => ctx.reply(config.payment.url)).row();

const igCommenti = new Menu("ig-commenti")
.back("Indietro")
.text("Scegli la tariffa").row()
.text("10 Commenti --> 0.30€", (ctx) => ctx.reply(config.payment.url)).row()
.text("500 Commenti --> 12.00€", (ctx) => ctx.reply(config.payment.url)).row()
.text("1.000 Commenti --> 18.00€", (ctx) => ctx.reply(config.payment.url)).row()
.text("5.000 Commenti --> 60.00€", (ctx) => ctx.reply(config.payment.url)).row()
.text("50.000 Commenti --> 300.00€", (ctx) => ctx.reply(config.payment.url)).row();

// Tik Tok Section
const tiktok = new Menu("tt-menu")
.back("Indietro")
.text("Scegli la categoria").row()
.submenu("Like", "tt-like").row()
.submenu("Follower", "tt-follower").row()
.submenu("Visual", "tt-visual").row()
.submenu("Commenti", "tt-commenti").row();

const ttLike = new Menu("tt-like")
.back("Indietro")
.text("Scegli la tariffa").row()
.text("100 Like --> 2.00€", (ctx) => ctx.reply(config.payment.url)).row()
.text("5.000 Like --> 80.00€", (ctx) => ctx.reply(config.payment.url)).row()
.text("10.000 Like --> 120.00€", (ctx) => ctx.reply(config.payment.url)).row()
.text("50.000 Like --> 400.00€", (ctx) => ctx.reply(config.payment.url)).row()
.text("500.000 Like --> 2000.00€", (ctx) => ctx.reply(config.payment.url)).row();

const ttFollower = new Menu("tt-follower")
.back("Indietro")
.text("Scegli la tariffa").row()
.text("100 Follower --> 1.00€", (ctx) => ctx.reply(config.payment.url)).row()
.text("5.000 Follower --> 40.00€", (ctx) => ctx.reply(config.payment.url)).row()
.text("10.000 Follower --> 60.00€", (ctx) => ctx.reply(config.payment.url)).row()
.text("50.000 Follower --> 200.00€", (ctx) => ctx.reply(config.payment.url)).row()
.text("500.000 Follower --> 1000.00€", (ctx) => ctx.reply(config.payment.url)).row();


const ttVisual = new Menu("tt-visual")
.back("Indietro")
.text("Scegli la tariffa").row()
.text("1.000 Visual --> 0.20€", (ctx) => ctx.reply(config.payment.url)).row()
.text("50.000 Visual --> 8.00€", (ctx) => ctx.reply(config.payment.url)).row()
.text("100.000 Visual --> 12.00€", (ctx) => ctx.reply(config.payment.url)).row()
.text("500.000 Visual --> 40.00€", (ctx) => ctx.reply(config.payment.url)).row()
.text("5.000.000 Visual --> 200.00€", (ctx) => ctx.reply(config.payment.url)).row();


const ttCommenti = new Menu("tt-commenti")
.back("Indietro")
.text("Scegli la tariffa").row()
.text("10 Commenti --> 2.00€", (ctx) => ctx.reply(config.payment.url)).row()
.text("500 Commenti --> 80.00€", (ctx) => ctx.reply(config.payment.url)).row()
.text("1.000 Commenti --> 120.00€", (ctx) => ctx.reply(config.payment.url)).row()
.text("5.000 Commenti --> 400.00€", (ctx) => ctx.reply(config.payment.url)).row()
.text("50.000 Commenti --> 2000.00€", (ctx) => ctx.reply(config.payment.url)).row();

// Make it interactive.
bot.use(menu);
menu.register(instagram);
menu.register(tiktok);

instagram.register(igLike);
instagram.register(igFollower);
instagram.register(igVisual);
instagram.register(igCommenti);

tiktok.register(ttLike);
tiktok.register(ttFollower);
tiktok.register(ttVisual);
tiktok.register(ttCommenti);

bot.command("start", async (ctx) => {
  // Send the menu.
  await ctx.reply("I prezzi più bassi del mercato!", { reply_markup: menu });
});

bot.launch({
  webhook: {
    domain: '',
    port: process.env.PORT
  }
})

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
