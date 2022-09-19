import {StyleSheet, Text, View} from 'react-native';

import React from "react";
import {colors} from "../constants/colors"

// import { Header } from 'react-native/Libraries/NewAppScreen';


const styles = StyleSheet.create({
    header:{
            height: 100,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:colors.primary,
    },
    title:{
        fontsize:20,
        color:colors.white,
        fontWeight:'bold',
    }
});


const header =({ title })=>{
    return(
        <View style ={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

export default header;