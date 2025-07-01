// discord.jsライブラリの中から必要な設定を呼び出し、変数に保存します
import { Client, Events, GatewayIntentBits } from 'discord.js';

// 設定ファイルからトークン情報を呼び出し、変数に保存します
import config from './config.json' with {type: 'json'};

// クライアントインスタンスと呼ばれるオブジェクトを作成します
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// クライアントオブジェクトが準備OKとなったとき一度だけ実行されます
client.once(Events.ClientReady, c => {
	console.log(`準備OKです! ${c.user.tag}がログインします。`);
});



// hey.jsのmodule.exportsを呼び出します。
import { data as data_hey, execute as execute_hey } from './commands/hey.js';

// dice.jsのmodule.exportsを呼び出します。
import { data as data_dice, execute as execute_dice} from './commands/dice.js';

// omikuji.jsのmodule.exportsを呼び出します。
import { data as data_clip, execute as execute_clip} from './commands/omikuji.js';

//スラッシュコマンドに応答するには、interactionCreateのイベントリスナーを使う必要があります
client.on(Events.InteractionCreate, async interaction => {

    // スラッシュ以外のコマンドの場合は対象外なので早期リターンさせて終了します
    // コマンドにスラッシュが使われているかどうかはisChatInputCommand()で判断しています
    if (!interaction.isChatInputCommand()) return;

    // heyコマンドに対する処理
    if (interaction.commandName === data_hey.name) {
        try {
            await execute_hey(interaction);
        } catch (error) {
            console.error(error);
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
            } else {
                await interaction.reply({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
            }
        }
    }
    // diceコマンドに対する処理 
    else if(interaction.commandName === data_dice.name) {

        try {
            await execute_dice(interaction);
        } catch (error) {
            console.error(error);
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
            } else {
                await interaction.reply({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
            }
        }
    }
    // clipコマンドに対する処理 
    else if(interaction.commandName === data_clip.name) {
    
        try {
            await execute_clip(interaction);
        } catch (error) {
            console.error(error);
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
            } else {
                await interaction.reply({ content: 'コマンド実行時にエラーになりました。', ephemeral: true });
            }
        }
    }
    else {
        console.error(`${interaction.commandName}というコマンドには対応していません。`);
    }
});


// ログインします
client.login(config.token);