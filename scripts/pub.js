const { execSync, spawn } = require('child_process');
const fs = require('fs');

const packageJson = require(`${process.cwd()}/package.json`);
const { version } = packageJson;
const isRpx = process.argv.splice(2)[0] === '--rpx';

if (isRpx) {
  packageJson.name = 'mini-ali-ui-rpx';
  packageJson.description = '小程序版AntUI rpx 版本';
} else {
  packageJson.name = 'mini-ali-ui';
  packageJson.description = '小程序版AntUI';
}

fs.writeFile(`${process.cwd()}/package.json`, JSON.stringify(packageJson), (err) => {
  if (err) console.error(err);
});

const runner = spawn('npm', ['publish']);

runner.on('close', () => {
  execSync(`git tag ${version}`);
  execSync(`git push origin ${version}:${version}`);
  execSync('git push origin master:master');
});

