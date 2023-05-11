const path = require('path');
const { readMarkdownFileSync } = require('./file');

test('readMarkdownFileSync', () => {
    //readMarkdownFileSync('test.md');
    const markdown = readMarkdownFileSync(path.resolve(__dirname, 
        '../fixtures/test.md'));
    //読み込んだ文字列がfixtureと等しいか確認
    expect(markdown).toStrictEqual('**bold**');
});