import React from "react";
import { StyleSheet,  StatusBar, SafeAreaView } from 'react-native';
import Header from "./src/components/Header";
import Albumlist from "./src/components/AlbumList";

const App =() => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <Header/>
      <Albumlist/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#A99985",
    flex: 1
  }
});

export default App;