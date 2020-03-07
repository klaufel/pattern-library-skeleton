import 'babel-polyfill';
import getFigma from './getFigma';

const FIGMA_APIKEY = '25929-adb26680-7577-485b-8c45-279bbb492bbd';
const FIGMA_ID = 'G72Jw8cdPUYYhT7t0iiibj';
const FIGMA_OUTDIR = './tokens.json';

getFigma(FIGMA_APIKEY, FIGMA_ID, FIGMA_OUTDIR);
