import React from "react";
import {Button, StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';

const LoginForm = () => {
    return (
            <View style={styles.formBackground}>
                <Text style={styles.label}>Usuário: </Text>
                <TextInput style={styles.inputText} placeholder="Digite seu usuário"></TextInput>
                <Text style={styles.label}>Senha: </Text>
                <TextInput style={styles.inputText} placeholder="Digite sua senha"></TextInput>
                <TouchableOpacity style={styles.botaoEntrar} onPress={handlePress}>
                    <Text style={{color: '#FFF', fontSize: 18, fontWeight: 600}}>Entrar</Text>
                </TouchableOpacity>
                <Text>Esqueci a senha :(</Text>
            </View>
    );
};

const handlePress = () => {
    console.log('Botão pressionado!');
};

const styles =  StyleSheet.create({
    formBackground: {
        width: 300,
        paddingTop: 30,
        paddingBottom: 30,
        paddingRight: 15,
        paddingLeft: 15,
        backgroundColor: '#FCFBE8',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },

    label: {
        fontWeight: 600,
        fontSize: 18,
        marginBottom: 10,
        marginTop: 10,
    },

    inputText:{
        width: '95%',
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: '#DC8BF8',
        borderRadius: 20,
        padding: 10,
    },

    botaoEntrar: {
        width: '95%',
        alignItems: 'center',
        backgroundColor: '#DC8BF8',
        borderRadius: 20,
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
    },
});

export default LoginForm;