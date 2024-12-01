import React from "react";
import { View, Image, StyleSheet, Text } from 'react-native';
import Logo from "./Logo";
import Perfil from "./Perfil";
import Sair from "./Sair";

const Header = () =>{
    return (
        <View style={styles.cabecalho}>
            <View style={styles.item}>
                <Logo></Logo>
            </View>

            <View style={styles.itemsRight}>
            <View style={styles.item}>
                <Text style={styles.perfilText} >Olá, Beatrice!</Text>
            </View>

            <View style={styles.item}>
                <Perfil></Perfil>
            </View>

            <View style={styles.item}>
                <Sair></Sair>
            </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cabecalho: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        marginTop: 30,
        padding: 20,
        width: '100%',
        height: 70,
        backgroundColor: '#A242C3',
        alignItems: 'center',
    },

    itemsRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',

    },

    item: {
        margin: 3,
    },

    perfilText: {
        color: '#FFF',
    },
});

export default Header;