const { Events, ActivityType } = require("discord.js");

module.exports = {
    name: Events.ClientReady,
    once: true,

    async execute(client) {

        console.clear();

        console.log("=================================");
        console.log("💎 Safira Bot iniciado com sucesso!");
        console.log(`🤖 Logado como: ${client.user.tag}`);
        console.log(`🌎 Servidores: ${client.guilds.cache.size}`);
        console.log("=================================");

        client.user.setPresence({
            activities: [
                {
                    name: "Safira SMP 💎",
                    type: ActivityType.Playing
                }
            ],
            status: "online"
        });

    }
};