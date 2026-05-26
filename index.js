const express = require("express");
const { Client, GatewayIntentBits } = require("discord.js");

const app = express();
app.use(express.json());

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

client.login(process.env.TOKEN);

client.once("ready", () => {
  console.log("Bot online");
});

app.post("/compra", (req, res) => {
  const canal = client.channels.cache.get("1508901982101049384");

  if (canal) {
    canal.send(`🛒 Nova compra!\n👤 ${req.body.usuario}\n📦 ${req.body.produto}`);
  }

  res.send("ok");
});

app.listen(3000);
