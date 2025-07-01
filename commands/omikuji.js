// import { genkiarrey } from "../bookmark/bookmark";
import {genkiarrey} from "../bookmark/bookmark.js";

// const omikuji_result = genkiarrey[Math.floor(Math.random() * genkiarrey.length) + 1];

// SlashCommandBuilder という部品を discord.js からインポートしています。
// これにより、スラッシュコマンドを簡単に構築できます。
import { SlashCommandBuilder } from 'discord.js';

// 以下の形式にすることで、他のファイルでインポートして使用できるようになります。
export const data = new SlashCommandBuilder()
    .setName('clip')
    .setDescription('まりもの元気が出るクリップおみくじ');
export async function execute(interaction) {
    let x = 0;
    x = Math.floor(Math.random() * genkiarrey.length) + 1;
    await interaction.reply(genkiarrey[x][0] + "\n" + genkiarrey[x][1]);
}