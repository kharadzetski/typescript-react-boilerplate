import { resolve } from "path";

const root = resolve('./');
const { dependencies } = require(`${root}/package.json`);
const tsconfig = `${root}/tsconfig.json`;
const srcDir = `${root}/app/src/ts`;
const mainPath = `${srcDir}/main`;
const rendererPath = `${srcDir}/renderer`;
const target = `${root}/target`;
const template = `${root}/app/public/index.html`
const mode = process.env.NODE_ENV;
const isDev = mode === 'development';

export default {
  root,
  dependencies,
  tsconfig,
  mainPath,
  rendererPath,
  template,
  target,
  mode,
  isDev
};