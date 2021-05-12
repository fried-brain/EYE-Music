module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  DefaultPrefix: process.env.Prefix || "x", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/a9SHDpD", //Support Server Link
  Token: process.env.Token || "ODQxMjg5ODM3Mzk4NDU4NDAw.YJkmNw.c9E6Wm0uVbmMhqLS9HtRPsz3uyY", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "841289837398458400", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "3hj_ENU2QS_yJLl36aybmluB9KVb3a2o", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is bts", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/alonefx/EYE-Music/master/assets/Music.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink - Already there is a serer to connect :)
  Lavalink: {
    id: process.env.Lavalink_id || "Main",
    host: process.env.Lavalink_host || "lavalink.cgofficial.org",
    port: process.env.Lavalink_port || 2333,
    pass: process.env.Lavalink_pass || "youshallnotpass",
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "be8ac982d8a04263812aac637d671189", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "fd1b4b2ca3394d79b558125529df9848", //Spotify Client Secret
  },
};