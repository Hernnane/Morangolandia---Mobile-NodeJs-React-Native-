import React from "react";
import { Image, StyleSheet, View } from 'react-native';

const Logo = () => {
    return (
        <View>
            <Image 
                style={styles.logo} 
                source={require('../assets/Header/logo.png')} 
                resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: 60,
        height: 60,
    }
});

export default Logo;
