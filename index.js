const fs = require('fs');
const data = fs.readFileSync('file.txt');
console.log("" + data );

fs.writeFile('file.txt', 'Hello Universe! ',"utf-8", (err) => {
    console.log('File written successfully!');
});

fs.appendFile('file.txt',"This is the appended text","utf-8",(err)=>{
    console.log('File appended successfully!');
});

fs.mkdir('demoDirectory', (err) => {
    if(err) {
        console.log(err);
    }
    console.log('Directory created successfully!');
}
);
const p = './file.txt';
const path = require('path');
const dirname = path.dirname(p);
const extension = path.extname(p);
console.log(dirname);
console.log(extension);

fs.copyFile('file.txt', 'demoDirectory/file1.txt', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('File copied successfully!');
});
