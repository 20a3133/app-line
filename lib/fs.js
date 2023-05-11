const { fs } = require('fs');

//fs.readFileSync(ファイルのパス、文字コード、コールバック関数)
fs.readFileSync('./text.txt', utf-8, (err, data) => {
    //dataがファイルの中身、errは読み込み時のエラー
    if(data){
        console.log(data);
    }else{
        console.log(err);
    }
});