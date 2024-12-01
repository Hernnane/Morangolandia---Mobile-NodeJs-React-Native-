import React from "react";
import { StyleSheet, ImageBackground, Dimensions, View } from 'react-native';
import LoginForm from "./LoginForm";
import Logo from "./Logo";

const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
    return (
        <ImageBackground 
            source={require('../assets/LoginScreen/fundo-login.jpg')} 
            style={[styles.container, { width, height }]} 
        >
            <View style={styles.center}>
                <Logo />
                <LoginForm />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LoginScreen;
