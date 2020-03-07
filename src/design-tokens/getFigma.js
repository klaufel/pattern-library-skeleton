import fetch from 'node-fetch';
import getColors from './getColors';
import getTypography from './getTypography';
import getSpacing from './getSpacing';
import fs from 'fs';

const getFigma = (apikey, id, outDir) => {
  console.log('\x1b[0m Generating Figma design tokens...');
  console.log('');
  const FETCH_URL = `https://api.figma.com/v1/files/${id}`;
  const FETCH_DATA = {
    method: 'GET',
    headers: {
      'X-Figma-Token': apikey,
    },
  };

  try {
    fetch(FETCH_URL, FETCH_DATA)
      .then(response => {
        console.log(' Connection with Figma is successful...');
        return response.json();
      })
      .then(response => {
        try {
          if (response.status) {
            console.log('');
            console.log('----------------');
            console.log('');
            console.log(`\x1b[31m ❌  An error has occurred: ${response.status} - ${response.err}`);
            console.log('');
          }
          return response;

          // Do your JSON handling here
        } catch (error) {
          console.log(error);
          return error;
        }
      })
      .then(styles => {
        if (styles.status !== 403 && styles.status !== 404) {
          const figmaTreeStructure = styles.document.children[0].children;

          const baseTokensJSON = {
            colors: {},
            typography: {},
            spacing: {},
          };

          Object.assign(baseTokensJSON.colors, getColors('Colors', figmaTreeStructure));
          Object.assign(baseTokensJSON.spacing, getSpacing('Spacing', figmaTreeStructure));
          Object.assign(baseTokensJSON.typography, getTypography('Typography', figmaTreeStructure));

          fs.writeFile(outDir, JSON.stringify(baseTokensJSON, null, 2), err => {
            if (err) {
              console.error(err);
              return;
            }
            console.log('');
            console.log('----------------');
            console.log('');
            console.log(`\x1b[32m 😀  File has been created in '${outDir}'!\x1b[0m`);
            console.log('');
            console.log('Base tokens JSON');
            console.log(baseTokensJSON);
            console.log('');
          });
        }
      })
      .catch(error => console.log(error));
  } catch (err) {
    console.log(err);
  }
};

export default getFigma;
