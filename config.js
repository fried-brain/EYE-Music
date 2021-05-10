module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  DefaultPrefix: ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/a4F4T3GkeX", //Support Server Link
  Token: "" || process.env.Token, //Discord Bot Token
  ClientID: "841289837398458400", //Discord Client ID
  ClientSecret: "3hj_ENU2QS_yJLl36aybmluB9KVb3a2o", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is funnyy", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 8, //Bot Inviting Permissions
  Website: "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink - Already there is a serer to connect :)
  Lavalink: {
    id: "Main",
    host: "lavalink.sudhanplayz.live",
    port: 1234,
    pass: "CodingWithSudhan",
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: "f3ad4cec9aa94e4085519aa0473fb1e2", //Spotify Client ID
    ClientSecret: "6a40008613fd49aeb6fcf6c8d7e98a44", //Spotify Client Secret
  },
};
