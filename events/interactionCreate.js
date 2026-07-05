const { Events } = require("discord.js");

module.exports = {
    name: Events.InteractionCreate,

    async execute(interaction, client) {

        // ==========================
        // BOTÕES
        // ==========================
        if (interaction.isButton()) {

            switch (interaction.customId) {

                case "boost_loja":
                    return interaction.reply({
                        content:
`🛒 **Loja Oficial do Safira SMP**

🔗 https://lojasafirasmpp.netlify.app/`,
                        ephemeral: true
                    });

                case "boost_ticket":
                    return interaction.reply({
                        content:
`🎫 **Abra um ticket em:**

<#1519768482441465866>`,
                        ephemeral: true
                    });

                case "boost_site":
                    return interaction.reply({
                        content:
`🌐 **Site Oficial do Safira SMP**

🔗 https://lojasafirasmpp.netlify.app/`,
                        ephemeral: true
                    });

            }

            return;
        }

        // ==========================
        // COMANDOS SLASH
        // ==========================
        if (!interaction.isChatInputCommand()) return;

        const command = client.commands.get(interaction.commandName);

        if (!command) return;

        try {

            await command.execute(interaction);

        } catch (error) {

            console.error(error);

            if (interaction.replied || interaction.deferred) {

                await interaction.followUp({
                    content: "❌ Ocorreu um erro ao executar este comando.",
                    ephemeral: true
                });

            } else {

                await interaction.reply({
                    content: "❌ Ocorreu um erro ao executar este comando.",
                    ephemeral: true
                });

            }

        }

    }

};