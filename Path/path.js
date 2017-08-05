'use strict';

const path = require('path');

const pathOne = 'C:\\temp\\myfile.html';
const pathTwo = '/home/william/Develop/WorkSpace/NodeJs/HelloNode/Path/path.js';

// console.log('---------------获取文件名---------------');

// let filename = path.basename(pathOne);
// console.log(filename);

// filename = path.basename(pathTwo);
// console.log(filename);

// console.log('--------------win32----------------');

// filename = path.win32.basename(pathOne);
// console.log(filename);

// filename = path.win32.basename(pathTwo);
// console.log(filename);

// console.log('---------------posix---------------');

// filename = path.posix.basename(pathOne);
// console.log(filename);

// filename = path.posix.basename(pathTwo);
// console.log(filename);

// console.log('-------------去除扩展名-----------------');


// filename = path.win32.basename(pathOne,'.html');
// console.log(filename);
// filename = path.basename(pathTwo,'.js');
// console.log(filename);
// console.log('------------------------------');


//console.log('----------------提供平台特定的路径分隔符：Windows 上是 " ; ", POSIX 上是 " : "--------------');

// console.log(process.env.PATH);
// console.log(process.env.PATH.split(path.delimiter));

// console.log('---------------path.dirname() 方法返回一个 path 的[目录名]---------------');
// console.log(path.dirname(pathTwo));


// console.log('--------------path.extname() 方法返回 path 的扩展名，即从 path 的最后一部分中的最后一个 .（句号）字符到字符串结束。--------------');
// console.log(path.extname(pathTwo));

// console.log('--------------path.format() 方法会从一个对象返回一个路径字符串。 与 path.parse() 相反。--------------');

// // 如果提供了 `dir`、`root` 和 `base`，则返回 `${dir}${path.sep}${base}`。
// // `root` 会被忽略。
// let pathObject = path.format({
//   root: '/ignored',
//   dir: '/home/user/dir',
//   base: 'file.txt'
// });
// console.log(pathObject);
// // 返回: '/home/user/dir/file.txt'


// // 如果没有指定 `dir`，则 `root` 会被使用。
// // 如果只提供了 `root` 或 `dir` 等于 `root`，则平台的分隔符不会被包含。
// // `ext` 会被忽略。
// pathObject = path.format({
//   root: '/',
//   base: 'file.txt',
//   ext: 'ignored'
// });
// console.log(pathObject);
// // 返回: '/file.txt'


// // 如果没有指定 `base`，则 `name` + `ext` 会被使用。
// pathObject = path.format({
//   root: '/',
//   name: 'file',
//   ext: '.txt'
// });
// console.log(pathObject);
// // 返回: '/file.txt'


// console.log('---------------path.isAbsolute() 方法会判定 path 是否为一个绝对路径---------------');
// console.log(path.isAbsolute('/foo/bar')); // true
// console.log(path.isAbsolute('/baz/..'));  // true
// console.log(path.isAbsolute('qux/'));     // false
// console.log(path.isAbsolute('.'));        // false


console.log('---------------path.join() 方法使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径---------------');
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));
// console.log(path.join('foo', {}, 'bar')); // 抛出 'TypeError: Path must be a string. Received {}'

console.log('------------------------------');
console.log();

console.log('------------------------------');
console.log();

console.log('------------------------------');
console.log();

console.log('------------------------------');
console.log();