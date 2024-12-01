import React from "react";
import { Image, StyleSheet } from 'react-native';

const Logo = () => {
    return (
        <Image 
            style={styles.logo} 
            source={require('../assets/LoginScreen/logo.png')} 
            resizeMode="contain"
        />
    );
};

const styles = StyleSheet.create({
    logo: {
        width: 300,
        height: 300,
        marginBottom: 10,
    }
});

export default Logo;
