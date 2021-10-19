// 进行打包 monorepo
// 1.获取打包目录
const fs = require('fs');

const dirs = fs
    .readdirSync('packages')
    // 文件夹
    .filter(p => fs.statSync(`packages/${p}`).isDirectory());

// 2.打包 并行
const execa = require('execa');

function build(target) {
    /***************
     * -c 执行rollup配置
     * 环境变量
     */
    return execa(
        'rollup',
        ['-c', '--environment', `TARGET:${target}`],
        {
            stdio: 'inherit' // 子进程的输出在父包中输出
        }
    )

}

function runParaller(dirs, buildFn) {
    const res = [];
    for (const dir of dirs) {
        res.push(buildFn(dir));
    }
    return Promise.all(res);
}

runParaller(dirs, build).then(() => {
    console.log('成功')
})