import { NativeBaseProvider } from "native-base";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './src/navigation';

const App =() => {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <Navigation />            
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}


export default App;