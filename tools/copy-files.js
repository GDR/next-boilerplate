import path from 'path';
import fse from 'fs-extra';
import glob from 'glob';

const buildPath = path.resolve(__dirname, '../build');

async function createPackageFile() {
  const packageData = await fse.readFile(path.resolve(__dirname, '../package.json'), 'utf8');
  const { nyc, devDependencies, workspaces, ...packageDataOther } = JSON.parse(
    packageData,
  );
  const newPackageData = {
    ...packageDataOther,
  };

  const buildPath = path.resolve(__dirname, '../build/package.json');

  await fse.writeFile(buildPath, JSON.stringify(newPackageData, null, 2), 'utf8');
  console.log(`Created package.json in ${buildPath}`);

  return newPackageData;
}

async function copyJsFiles(from, to) {
  const files = glob.sync('**/*.js', { cwd: from });
  const cmds = files.map(file => fse.copy(path.resolve(from, file), path.resolve(to, file)));
  return Promise.all(cmds);
}

async function copyStatic(from, to) {
  const files = glob.sync('**/*.*', {cwd: from});
  const cmds = files.map(file => fse.copy(path.resolve(from, file), path.resolve(to, file)));
  return Promise.all(cmds);
}

async function run() {
  const fromServer = path.resolve(__dirname, '../server');
  await copyJsFiles(fromServer, buildPath);
  const fromStatic = path.resolve(__dirname, '../src/static');
  await copyStatic(fromStatic, path.resolve(buildPath, './static'));
  await createPackageFile(fromServer, buildPath);
}

run();
