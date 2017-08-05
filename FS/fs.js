'use strict';

const fs = require('fs');
const path = require('path');

// let filePath = path.resolve(__dirname ,'sample.txt');
let filePath = path.dirname(__filename) + '/sample.txt';
let filePathCopied = path.dirname(__filename) + '/samplecopy.txt';

// 异步读取文件
fs.readFile(filePath, 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("async output = " + data);
    }
});

// 异步写入文件内容
let writeContent = " Waiting for my faverate songs. ";
fs.writeFile(filePath, writeContent, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});


// 同步读取文件  
try {
    let fileContent = fs.readFileSync(filePath, 'utf-8');
    console.log("sync output = " + fileContent);
} catch (err) {
    console.log("sync output error.");// 出错了
}

// 同步读取文件
fs.writeFileSync(filePath, writeContent);

// 获取文件大小，创建时间等信息
fs.stat(filePath, function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});

// 从文件流读取文本内容
// 打开一个流:
var rs = fs.createReadStream(filePath, 'utf-8');

rs.on('data', function (chunk) {
    console.log('DATA:')
    console.log(chunk);
});

rs.on('end', function () {
    console.log('END');
});

rs.on('error', function (err) {
    console.log('ERROR: ' + err);
});

// 要以流的形式写入文件，只需要不断调用write()方法，最后以end()结束
var ws1 = fs.createWriteStream(filePath, 'utf-8');
ws1.write('使用Stream写入文本数据...\n');
ws1.write('END.');
ws1.end();

var ws2 = fs.createWriteStream(filePath);
ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
ws2.write(new Buffer('END.', 'utf-8'));
ws2.end();

// pipe 管道

let rs3 = fs.createReadStream(filePath);
let ws3 = fs.createWriteStream(filePathCopied);
rs3.pipe(ws3);