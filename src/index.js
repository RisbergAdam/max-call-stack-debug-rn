import React from 'react';
import {Text, View} from 'react-native';
import {routes} from './generated';

const App = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>hermes enabled: {Boolean(global.HermesInternal)}</Text>
    </View>
  );
};

export default App;
