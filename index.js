const { Client, RichPresence } = require("discord.js-selfbot-v13"),
  client = new Client(),
  express = require('express'),
  server = express();

app.get('/', (req, res) => { res.send('Hello world!') });
app.listen(3000, () => { console.log('Listening on port: 3000'); });


client.on('ready', () => {
  console.log(`Logged In as ${client.user.username}`)
  const r = new RichPresence(client)
    .setApplicationId('1257819671114289184') //https://discord.com/api/v10/applications/detectable
    .setType('PLAYING') //PLAYING / LISTENING / WATCHING / STREAMING / COMPETING
    //.setURL("") //For STREAMING type
    .setName("Zenless Zone Zero")
    .setStartTimestamp("" || Date.now())
    //.setPlatform('desktop') //desktop / ps4 / ps5 / xbox
    //.addButton("Button1", "https://www.youtube.com")
    //.addButton("Button2", "https://www.google.com")
  const c = new CustomStatus(client)
    .setEmoji('🐱')
    .setState("meow");
  client.user.setPresence({ activities: [r, c], status: 'idle' });
});

client.login(process.env.TOKEN || ""); //Your discord account TOKEN
