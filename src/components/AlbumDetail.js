import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const AlbumDetail = (props) => {
  const { title, artist, image } = props.album;
  return (
    <View style={styles.cardContainerStyle}>
        <View style={styles.cardSectionStyle}>
            <Image
            style={styles.imageStyle}
            source={{
                uri: image
            }}
            />
        </View>
        <View style={[styles.cardSectionStyle]}>
            <View style={styles.headerContentStyle}>
            <Text>{title}</Text> 
            <Text style={styles.artistStyle}>{artist}</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: "column",
    paddingLeft: 10
  },
  cardContainerStyle: {
    backgroundColor: "#F5F1ED",
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15
  },
  cardSectionStyle: {
    padding: 5,
    borderColor: "#DAD2BC",
    borderBottomWidth: 1
  },
  imageStyle: {
    height: 300,
    width: null
  },
  artistStyle:{
    fontSize:12
  }
});

export default AlbumDetail;