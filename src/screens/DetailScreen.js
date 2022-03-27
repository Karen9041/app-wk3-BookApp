import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Button, Linking } from 'react-native';

const DetailScreen = ({ route }) => {
  const { title, 
    author,
    price,
    url,
    image,
    descriptions
  } = route.params;
  return (
    <ScrollView style={{backgroundColor: '#fff'}} >
      <View style={{alignItems: 'center'}}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: image
          }}
        />
      </View>
      <View style={styles.cardContainerStyle}>
          <Text>
            <Text style={styles.textTitleStyle}>{title}</Text>
          </Text>
          <Text>            
            <Text style={styles.textAuthorStyle}>{author}</Text>
          </Text>
          <Text style={styles.textDescriptionStyle}>{descriptions}</Text>
      </View>
      <View style={styles.cardContainerStyle}>
        <Button 
            color={'#6200EE'}
            onPress={() => Linking.openURL(url)}
            title={`BUY NOW FOR $${price}`}
        />  
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({  
    imageStyle: {
        height: 270,
        width: 190,
    },
    cardContainerStyle: {
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginHorizontal: 10,
        marginTop: 5
    },
    textTitleStyle:{
        fontSize: 24,
        fontWeight:'bold',
    },
    textAuthorStyle:{
        fontSize: 14,
        color:'#666666',
    },
    textDescriptionStyle:{
        marginTop: 15,
        lineHeight:24,
        fontWeight:'400'
    }
});

export default DetailScreen;
