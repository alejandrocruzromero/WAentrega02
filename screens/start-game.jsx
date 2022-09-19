import { Button, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React, { useState } from "react";

import Card from "../components/card";
import Input from "../components/input";
import NumberContainer from "../components/number-container";
import { colors } from "../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 10,
    },
    title: {
        fontSize: 20,
        color: colors.text,
        textAlign: 'center',
        paddingVertical: 20,
        fontFamily: 'Lato-Bold',
    },
    label: {
        fontSize: 14,
        color: colors.text,
        textAlign: 'center',
        paddingVertical: 5, 
        fontFamily: 'Lato-Regular',
    },
    inputContainer: {
        width: 320,
        maxWidth: '80%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    input: {
        width: '100%',
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        maxWidth: 70,
        fontSize: 25,
        paddingVertical: 10,
        textAlign: 'center',
        fontFamily: 'Lato-Regular',
    },
    buttonContainer: {
        width: '75%',
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    summaryContainer: {
        width: '80%',
        height: 180,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        marginTop: 20,
    },
    summaryText: {
        fontSize: 18,
        fontFamily: 'Lato-Regular',
    }
});

const StartGameScreen = ({onStartGame}) => {
    const [number, setNumber] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(0);
    const onHandleChange = (text) => {
        setNumber(text.replace(/[^0-9]/g, ''));
    }

    const onReset = () => {
        setNumber('');
        setSelectedNumber(0);
        setConfirmed(false);
        Keyboard.dismiss()
    }

    const onConfirm = () => {
        const chosenNumber = parseInt(number, 10);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) return;
        setConfirmed(true);
        setSelectedNumber(chosenNumber)
        setNumber('');
    }

    const onHandleStartGame = () => {
        onStartGame(selectedNumber);
    }

    const comfirmedOutput = () =>  confirmed && (
        <Card style={styles.summaryContainer}>
            <Text style={styles.summaryText}>Tu seleccion</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button
                title="Ver resultado"
                onPress={onHandleStartGame}
                color={colors.primary}
            />
        </Card>
    )
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
            <Text style={styles.title}>Tablas de multiplicar</Text>
            <Card style={styles.inputContainer}>
                <Text style={styles.label}>Elije una tabla(1-9)</Text>
                <Input 
                    style={styles.input} 
                    keyboardType='numeric' 
                    maxLength={1}
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={(text) => onHandleChange(text)}
                    value={number}
                />
                <View style={styles.buttonContainer}>
                    <Button
                        title="Limpiar"
                        onPress={onReset}
                        color={colors.primary}
                    />
                    <Button
                        title="Confirmar"
                        onPress={onConfirm}
                        color={colors.secondary}
                    />
                </View>
            </Card>
            {comfirmedOutput()}
        </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGameScreen;