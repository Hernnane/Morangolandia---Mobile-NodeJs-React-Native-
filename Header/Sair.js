import React from "react";
import { Image, StyleSheet, View } from 'react-native';

const Sair = () => {
    return (
        <View>
            <Image 
                style={styles.icone} 
                source={require('../assets/Header/sair.png')} 
                resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    icone: {
        width: 25,
        height: 25,
    },
});

export default Sair;
