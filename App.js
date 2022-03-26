import React from "react";
import { StyleSheet,  StatusBar, SafeAreaView } from 'react-native';
import Header from "./src/components/Header";
import Booklist from "./src/components/Booklist";

const App =() => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <Header/>
      <Booklist/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;