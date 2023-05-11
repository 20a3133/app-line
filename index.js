/*#!/usr/bin/env node*/
const path = require('path');
const { marked } = require('marked');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { getPackageName } = require('./lib/name');
const { readMarkdownFileSync, writeHtmlFileSync } = require('./lib/file');

const { argv } = yargs(hideBin(process.argv))
    //オプションの説明を追加
    .option('name',{
        describe:'CLI名を表示'
    })
    .option('file',{
        describe:'Markdownファイルのパス'
    })
    //outオプションを追加
    .option('out', {
        describe: 'html file',
        default: 'article.html'
    });

//nameオプションの挙動を確認
if(argv.name){
    const name = getPackageName()
    console.log(name);
    //nameオプションが入っていた場合は他のオプションを使わないので正常終了させる
    process.exit(0);
}

const markdownStr = readMarkdownFileSync(path.resolve(__dirname, argv.file));
const html = marked(markdownStr);

//htmlをファイルに書き出し
writeHtmlFileSync(path.resolve(__dirname, argv.out), html);
