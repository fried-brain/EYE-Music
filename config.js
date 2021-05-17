module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  DefaultPrefix: process.env.Prefix || "x", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.io/teameye", //Support Server Link
  Token: process.env.Token || "", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is bts", //A Secret like a password
  IconURL:
    "https://cdn.discordapp.com/attachments/807257475278569473/842642320666918912/1620971978415.png", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink - Already there is a serer to connect :)
  Lavalink: {
    id: process.env.Lavalink_id || "Main", //Lavalink id 
    host: process.env.Lavalink_host || "india.lavalink.org", //Lavalink host server
    port: 2333, //Lavalink port
    pass: process.env.Lavalink_pass || "youshallnotpass", //Lavalink password
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "", //Spotify Client Secret
  },
};