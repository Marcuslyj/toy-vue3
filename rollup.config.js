// 通过rollup打包

// 1. 引入相关依赖
import ts from 'rollup-plugin-typescript2' // 解析ts
import json from '@rollup/plugin-json'
import resolvePlugin from '@rollup/plugin-node-resolve' // 解析三方依赖

// 2.获取文件路径
import path from 'path'
const packagesDir = path.join(__dirname, 'packages')
const packageDir = path.resolve(packagesDir, process.env.TARGET)