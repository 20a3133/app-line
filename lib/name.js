const path = require('path');
const fs = require('fs');

//package.jsonが1階層上になったので相対パスで一つ上に戻る
const packageStr = fs.readFileSync(path.resolve(__dirname, '../package.json'),{
    encoding: 'utf-8'});
const package = JSON.parse(packageStr);

exports.getPackageName = () => {
    return package.name;
};