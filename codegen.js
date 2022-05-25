const {execSync} = require('node:child_process');
const {writeFileSync} = require('fs');

function codegen() {
  const routeCount = 10;

  execSync('rm -rf ./src/generated');
  execSync('mkdir ./src/generated');

  const routeDefs = [];

  for (let i = 0; i < routeCount; i++) {
    routeDefs.push(`  ['${i}']: {component: () => import('./route${i}')}`);
    writeFileSync(
      `./src/generated/route${i}.js`,
      `
import React from 'react';
import {View, Text} from 'react-native';

const Route${i} = () => 
  (<>
    <Text>route${i}</Text>
    <Text><Text><Text><Text><Text>
    test
    </Text></Text></Text></Text></Text>
  </>);

export default Route${i};
    `,
    );
  }

  writeFileSync(
    './src/generated/index.js',
    `
export const routes = {
${routeDefs.join(',\n')}
};  
  `,
  );
}

codegen();
