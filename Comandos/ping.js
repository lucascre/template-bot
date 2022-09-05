const Discord = require('discord.js')

module.exports =  {
    name: "ping",
    description: "[🔗 » Utilidades] Veja o ping do bot",
    type: ApplicationCommandType.ChatInput,
    
    run: async (client, interaction, args) => {

        let embed = new EmbedBuilder()
        .setDescription(`**O meu ping está em \`${client.ws.ping}ms\`.**`)
        .setColor("Orange")
        
        await interaction.followUp({ embeds: [embed], ephemeral: true })

    }
}
