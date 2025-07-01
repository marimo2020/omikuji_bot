// discord.js v14では、下記のようにRESTとRoutesはdiscord.jsパッケージから直接インポートできます
import { REST, Routes } from 'discord.js';

// 環境変数としてapplicationId, guildId, tokenの3つが必要です
// import { applicationId, guildId, token } from './config.json' with {type: 'json'};
import config from './config.json' with {type: 'json'};
// console.log(typeof config,config)

// hey.jsのmodule.exportsを呼び出します。
import { data } from './commands/hey.js';
// dice.jsのmodule.exportsを呼び出します。
import { data as _data } from './commands/dice.js';
// dice.jsのmodule.exportsを呼び出します。
import { data as __data } from './commands/omikuji.js';

// 登録コマンドを呼び出してリスト形式で登録
const commands = [data.toJSON(),_data.toJSON(),__data.toJSON()];


// DiscordのAPIには現在最新のversion10を指定
const rest = new REST({ version: '10' }).setToken(config.token);

// Discordサーバーにコマンドを登録
(async () => {
    try {
        await rest.put(
			Routes.applicationGuildCommands(config.applicationId, config.guildId),
			{ body: commands },
		);
        console.log('サーバー固有のコマンドが登録されました！');
    } catch (error) {
        console.error('コマンドの登録中にエラーが発生しました:', error);
    }
})();