const { Client, RichPresence } = require("discord.js-selfbot-v13");
const client = new Client();
const express = require('express')
const server = express();

////////////////////////////////////////////////////////////////
const port = 3000; //Port
const Type = "PLAYING" //PLAYING / LISTENING / WATCHING / STREAMING / COMPETING
const Name = "Genshin Impact"
const Status = "idle" //online / idle / dnd / invisible
const TOKEN = proccess.env.TOKEN || "DISCORD TOKEN HERE": //Your discord account TOKEN
//////////////////////////////////////////////////////////////


app.get('/', (req, res) => {
  res.send('Success!!')
});
app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.username}`)
  const pr = new RichPresence(client)
    .setType(Type)
    .setName(Name)
    .setStartTimestamp("" || Date.now());
  client.user.setPresence({ activities: [pr], status: Status });
});

client.login(TOKEN);
