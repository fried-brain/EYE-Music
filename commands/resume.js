const { MessageEmbed } = require("discord.js");
const { TrackUtils } = require("erela.js");

module.exports = {
    name: "resume",
    description: "Resumes the music",
    usage: "",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["res"],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, message, args, { GuildDB }) => {
        let player = await client.Manager.get(message.guild.id);
        if (!player) return client.sendTime(message.channel, "<:xmark:774976403514720267> | **Nothing is playing right now...**");
        if (!message.member.voice.channel) return client.sendTime(message.channel, "<:xmark:774976403514720267> | **You must be in a voice channel to use this command!**");
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return client.sendTime(message.channel, ":x: | **You must be in the same voice channel as me to use this command!**");

        if (player.playing) return client.sendTime(interaction, "<:xmark:774976403514720267> | **Music is already resumed!**");
        player.pause(false);
        await message.react("<:check:774976288610975764>");
    },

    SlashCommand: {
        /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
        run: async (client, interaction, args, { GuildDB }) => {
            const guild = client.guilds.cache.get(interaction.guild_id);
            const member = guild.members.cache.get(interaction.member.user.id);

            if (!member.voice.channel) return client.sendTime(interaction, "<:xmark:774976403514720267> | **You must be in a voice channel to use this command.**");
            if (guild.me.voice.channel && !guild.me.voice.channel.equals(member.voice.channel)) return client.sendTime(interaction, "<:xmark:774976403514720267> | **You must be in the same voice channel as me to use this command!**");

            let player = await client.Manager.get(interaction.guild_id);
            if (!player) return client.sendTime(interaction, "<:xmark:774976403514720267> | **Nothing is playing right now...**");
            if (player.playing) return client.sendTime(interaction, "<:xmark:774976403514720267> | **Music is already resumed!**");
            player.pause(false);
            client.sendTime(interaction, "**<:check:774976288610975764> | Resumed!**");
        },
    },
};
