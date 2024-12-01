import React from "react";
import { Image, StyleSheet, View } from 'react-native';

const Perfil = () => {
    return (
        <View>
            <Image 
                style={styles.icone} 
                source={require('../assets/Header/perfil.png')} 
                resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    icone: {
        width: 35,
        height: 35,
    },
});

export default Perfil;
