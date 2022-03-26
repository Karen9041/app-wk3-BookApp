import React from "react";
import {Linking, Pressable, StyleSheet, Text, View, Image} from "react-native";

const PopularBookDetail = props => {
    let {book} = props;
    return(
    <View style={{flexDirection: 'column'}}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.cardSectionStyle}>
          <Pressable onPress={()=> Linking.openURL(book.url)}>
            <Image
              style={styles.imageStyle}
              source={{uri: book.image}}
            />
          </Pressable>
        </View>
      </View>  
      <View style={styles.headerContainerStyle}>
        <Text style={styles.headerTitleStyle}>{book.title}</Text>
        <Text style={styles.headerContentStyle}>{book.author}</Text>
      </View>   
    </View>
)};

const styles = StyleSheet.create({
    cardContainerStyle: {
      borderWidth: 1,
      borderRadius: 2,
      borderColor: "#ddd",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10
    },
    headerContainerStyle: {
      flexDirection: "column",
      justifyContent: "space-around",
      paddingLeft: 12,
      width: 130,
    },
    headerTitleStyle: {
      fontSize: 12,
      fontWeight: 'bold',
    },
    headerContentStyle: {
      fontSize: 11,
      fontWeight: '300',
      color: "#222",
      width: '100%'
    },
    cardSectionStyle: {
      padding: 5,
      backgroundColor: "#fff",
      borderColor: "#ddd",
      borderBottomWidth: 1
    },
    imageStyle: {
      height: 130,
      width: 130,
    }
  });

  export default PopularBookDetail;