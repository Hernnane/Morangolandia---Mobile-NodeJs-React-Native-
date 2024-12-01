import React from "react";
import {View, StyleSheet, Image} from 'react-native';

const Botoes = () => {
    return (
        <View>
            <View style={styles.botao}>
                <Image 
                    source={require('../assets/HomeScreen/solicitacoes.png')}
                    style={styles.img}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.botao}>
            <Image 
                    source={require('../assets/HomeScreen/status.png')}
                    style={styles.img}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.botao}>
            <Image 
                    source={require('../assets/HomeScreen/fila.png')}
                    style={styles.img}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.botao}>
            <Image 
                    source={require('../assets/HomeScreen/historico.png')}
                    style={styles.img}
                    resizeMode="contain"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    botao: {
        backgroundColor: '#A242C3',
        width: 200,
        height: 135,
        padding: 20,
        marginBottom: 20,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },

    img: {
        widh: '100%',
        height: '100%',
    },
});

export default Botoes;