import fs from 'fs';
import getFigma from './getFigma';
const path = './figma.config.json';

export function cli(args) {
  //console.log('cli args', args);

  fs.access(path, fs.F_OK, (err) => {
    if (err) {
      console.error('❌');
      console.error('\x1b[31m Config file was not found!');
      console.error('\x1b[31m Please, create a `figma.config.json` with a config parameters');
      return;
    }
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) throw err;
      const obj = JSON.parse(data);

      if (!obj.FIGMA_APIKEY) {
        return console.log('❌  No Figma API Key found');
      } else if (!obj.FIGMA_ID) {
        return console.log('❌  No Figma ID found');
      } else {
        if (!obj.FIGMA_OUTDIR) {
          console.log('⚠️ No outdir found, default outdir is `./tokens.json`');
        }
        getFigma(obj.FIGMA_APIKEY, obj.FIGMA_ID, obj.FIGMA_OUTDIR || './tokens.json');
      }
    });
  });
}
