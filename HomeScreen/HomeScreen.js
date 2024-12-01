import React from "react";
import {View, Image, ImageBackground, Dimensions, StyleSheet} from 'react-native';
import Header from "../Header/Header.js";
import Botoes from "./Botoes.js";

const { width, height } = Dimensions.get('window');

const HomeScreen = () =>{
    return (
        <ImageBackground
            source={require('../assets/HomeScreen/inicio.png')} 
            style={[styles.container, { width, height }]} 
        >
            <Header></Header>

            <View style={styles.botaoContainer}>
                <Botoes></Botoes>
            </View>

        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    botaoContainer: {
        flex: 1,
        marginTop: 80,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default HomeScreen;