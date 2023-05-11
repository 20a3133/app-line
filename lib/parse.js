//NodeV14以降のmoduleではrequire使えないので記述
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { program } = require("commander");

//コマンドライン引数をcommanderでパースする
program.parse(process.argv);

//ファイルパスをprogram.argv配列から取り出す
const Filepath = program.args[0];
console.log(Filepath);