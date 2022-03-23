import React from "react";
import {StyleSheet, Text, View, Image} from "react-native";

const Header = () =>{
    return (
        <View style={styles.headerStyle}>
            <Image
                style={styles.AccusefiveStyle}
                source={{
                    uri:"https://yt3.ggpht.com/ytc/AKedOLSHRvmFkGUXHSE-nEPEB3s756k443efKRqDP-eJ=s88-c-k-c0x00ffffff-no-rj"
                }}
            />
            <Text>告五人 Accusefive</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: "#DAD2BC",
        justifyContent: "center",
        alignItems: "center",
        height: 90,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        // Android Only
        elevation: 4
      },
      textStyle: {
        fontSize: 20
      },
      AccusefiveStyle:{
        borderRadius: 100 ,
        height: 50,
        width: 50,
        margin: 5,
      },
    });

export default Header;
