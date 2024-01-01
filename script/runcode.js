#!/usr/bin/env node
// 可以快速运行rs-reverse有关的js代码，用于开发或者演示时使用
require('module-alias/register');
Math.random = () => 0.1253744220839037;
const gv = require('../utils/initGv');
Object.assign(global, gv.utils);
process.argv.slice(2).forEach(input => {
  const output = JSON.stringify(eval(input));
  console.log([`\n  输入：${input}`, `输出：${output}\n`].join('\n  '));
});
