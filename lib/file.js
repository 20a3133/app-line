const fs = require('fs');

//引数にファイルの絶対パスを受け取る
exports.readMarkdownFileSync = (path) => {
    //指定されたMarkdownファイルを読み込む
    const markdownStr = fs.readFileSync(path,{encoding: 'utf-8'});
    return markdownStr;
}

//指定したパスにhtmlを書き出す
exports.writeHtmlFileSync = (path, html) => {
    fs.writeFileSync(path, html, {encoding: 'utf-8'});
}