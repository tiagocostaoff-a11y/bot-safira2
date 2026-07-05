const {
    SlashCommandBuilder,
    EmbedBuilder,
    PermissionFlagsBits
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("embed")
        .setDescription("Envia uma embed.")
        .addStringOption(option =>
            option
                .setName("tipo")
                .setDescription("Escolha a embed")
                .setRequired(true)
                .addChoices(
                    {
                        name: "Mídia",
                        value: "midia"
                    }
                )
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    async execute(interaction) {

        const tipo = interaction.options.getString("tipo");

        if (tipo === "midia") {

            const embed = new EmbedBuilder()
                .setColor("#8A2BE2")
                .setTitle("🎥 TAG MÍDIA - SafiraSMP")
                .setDescription(`
É Streamer, TikToker ou YouTuber?
Faça parte da nossa Equipe Mídia e ajude a divulgar o **SafiraSMP**!

✨ Cargo exclusivo de @🎥・Mídia
🎬 Divulgação do seu canal em nosso Discord e redes sociais
🎫 Prioridade no atendimento de tickets
💬 Contato direto com a equipe para campanhas e eventos
🎁 Recompensas exclusivas por metas de divulgação
💎 Benefícios especiais dentro do servidor
🚀 Oportunidade de crescer junto com o SafiraSMP

## 📋 Requisitos

• Ser criador de conteúdo ativo no TikTok, YouTube ou Twitch.
• Produzir conteúdo de Minecraft com boa qualidade.
• Possuir um público intermediário, tendo no mínimo:

**TikTok**
• Média de 5k de visualizações por vídeo.
• 1 vídeo semanal relacionado ao servidor.

**YouTube / Shorts**
• 500 inscritos.
• 1 vídeo ou Short semanal relacionado ao servidor.

**Twitch**
• 200 seguidores.
• Média de 10 espectadores simultâneos.
• 2 lives semanais.

━━━━━━━━━━━━━━━━━━━━━━

Os benefícios da Equipe Mídia permanecem ativos enquanto o criador cumprir os requisitos de atividade e parceria.

O cargo poderá ser removido em casos de inatividade prolongada ou descumprimento das diretrizes do programa.

Caso cumpra os requisitos e tenha interesse, abra um 🎫・ticket para o prosseguimento do processo seletivo.
`)
                .setFooter({
                    text: "SafiraSMP • Equipe Mídia"
                });

            await interaction.reply({
                embeds: [embed]
            });

        }

    }
};