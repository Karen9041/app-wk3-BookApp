import React from "react";
import {StyleSheet, Text, View, Image} from "react-native";

const Header = () =>{
    return (
        <View style={styles.headerStyle}>
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: "#DAD2BC",
        justifyContent: "center",
        alignItems: "center",
        height: 56,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        // Android Only
        elevation: 4
      }
    });

export default Header;
