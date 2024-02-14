const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();


const targetPath = './src/environments/environment.ts';

const envFileContent = `
export const environment = {
mapbox_env:"${process.env['MAPBOX_KEP']}",
otra: "PROPIEDAD",
};
`;

mkdirSync('./src/environments', { recursive: true });

writeFileSync( targetPath, envFileContent );
