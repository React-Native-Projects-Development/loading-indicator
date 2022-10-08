import React from 'react';
import {View} from 'react-native';

import {MotiView} from 'moti';

const LoadingIndicator = ({size}) => {
  return (
    <MotiView
      from={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: 0,
      }}
      animate={{
        width: size + 20,
        height: size + 20,
        borderRadius: (size + 20) / 2,
        borderWidth: size / 10,
        shadowOpacity: 1,
      }}
      transition={{
        type: 'timing',
        duration: 1000,
        loop: true,
        // repeat: Infinity,
      }}
      style={{
        borderColor: '#fff',
        shadowColor: '#fff',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 10,
      }}
    />
  );
};

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#010100',
      }}>
      <LoadingIndicator size={100} />
    </View>
  );
};

export default App;
