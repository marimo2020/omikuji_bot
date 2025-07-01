// SlashCommandBuilder という部品を discord.js からインポートしています。
// これにより、スラッシュコマンドを簡単に構築できます。
import { SlashCommandBuilder } from 'discord.js';

// 以下の形式にすることで、他のファイルでインポートして使用できるようになります。
export const data = new SlashCommandBuilder()
	.setName('dice')
	.setDescription('100面ダイスを振ります。');
export async function execute(interaction) {
	await interaction.reply(String(Math.floor(Math.random() * 100) + 1));
}
//Math.random(1,100)?