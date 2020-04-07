import fs from 'file-system';
import getFigma from './execute';
const path = './figma.config.json';

export function cli() {
  fs.access(path, fs.F_OK, (err) => {
    if (err) {
      console.error('❌');
      console.error('\x1b[31m Config file was not found!');
      console.error('\x1b[31m Please, create a `figma.config.json` with a config parameters');
      return;
    }
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) throw err;
      const { FIGMA_APIKEY, FIGMA_ID } = JSON.parse(data);
      const FIGMA_OUTDIR = 'tokens/json';
      if (!FIGMA_APIKEY) {
        return console.log('❌  No Figma API Key found');
      } else if (!FIGMA_ID) {
        return console.log('❌  No Figma ID found');
      } else {
        if (!FIGMA_OUTDIR) console.log('⚠️ No outdir found, default outdir is `./tokens.json`');
        fs.mkdir(FIGMA_OUTDIR, null, (err) => {
          if (err) throw err;
          getFigma(FIGMA_APIKEY, FIGMA_ID, FIGMA_OUTDIR);
        });
      }
    });
  });
}
