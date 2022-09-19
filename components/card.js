import {StyleSheet, View} from 'react-native';

import React from "react";
import {colors} from "../constants/colors"

const styles = StyleSheet.create({
    container:{
        shadowColor:colors.black,
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:0.23,
        shadowRadius:2.62,
        elevation:4,
        backgroundColor:colors.backgroundColor,
        borderRadius:5,
    }

})

const Card = ({children,style})=>{
    return(
        <View style={{...styles.container, ... style}}>
            {children}

        </View>


    )
}

export default Card;