import {Button, StyleSheet, Text, View} from "react-native";
import React, { useState } from "react";

import Card from "../components/card";
import { colors } from "../constants/colors";
import { generateRandomNumberBetween } from "../utils/functions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    card: {
        marginTop: 20,
        marginHorizontal: 20,
        width: '80%',
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        width: '75%',
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    }
});


const GameScreen = ({ selectedNumber }) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumberBetween(1, 100, selectedNumber));
    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Text style={styles.title}>La tabla del {selectedNumber} </Text>
                <Text style={styles.title}>1 x {selectedNumber} = {selectedNumber * 1}</Text>
                <Text style={styles.title}>2 x {selectedNumber} = {selectedNumber * 2}</Text>
                <Text style={styles.title}>3 x {selectedNumber} = {selectedNumber * 3}</Text>
                <Text style={styles.title}>4 x {selectedNumber} = {selectedNumber * 4}</Text>
                <Text style={styles.title}>5 x {selectedNumber} = {selectedNumber * 5}</Text>
                <Text style={styles.title}>6 x {selectedNumber} = {selectedNumber * 6}</Text>
                <Text style={styles.title}>7 x {selectedNumber} = {selectedNumber * 7}</Text>
                <Text style={styles.title}>8 x {selectedNumber} = {selectedNumber * 8}</Text>
                <Text style={styles.title}>9 x {selectedNumber} = {selectedNumber * 9}</Text>
                <Text style={styles.title}>10 x {selectedNumber} = {selectedNumber * 10}</Text>
                <View style={styles.buttonContainer}>
                    <Button 
                        title="Regresar"
                        // onPress={regresar} 
                        color={colors.primary}    
                    />
                    
                </View>
            </Card>
        </View>
    );
}

export default GameScreen;
