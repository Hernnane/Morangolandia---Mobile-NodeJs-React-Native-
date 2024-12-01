import React from "react";
import { View, StyleSheet, Text} from 'react-native';
import Header from "../Header/Header.js";
import BlocoSolicitacoes from "./blocoSolicitacoes.js";


const SolicitacoesScreen = () => {
    return (
        <View style={styles.fundo}>
            <Header></Header>

            <View style={styles.tituloDiv}>
                <Text style={styles.titulo}>SOLICITAÇÕES DE PRODUÇÃO</Text>
            </View>

            <View>
                <BlocoSolicitacoes></BlocoSolicitacoes>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: '#FCFBE8',
    },

    tituloDiv: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

    titulo: {
        fontSize: 18,
        fontWeight: 800,
        color: '#A242C3'
    },
});

export default SolicitacoesScreen;