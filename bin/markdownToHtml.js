const fs = require('fs');
const showdown  = require('showdown');
const converter = new showdown.Converter();

const fromFileName = process.argv[2];

fs.readFile(fromFileName, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    html = converter.makeHtml(data);
    console.log(html)
})
