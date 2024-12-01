import React from "react";
import { View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    bloco: {
        flex: 1,
    },

    solicitacoesInd: {
        backgroundColor: '#F7DFFF',
        width: '90%',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: 10,
        height: 120,
    },
});

const BlocoSolicitacoes = () => {
    return (
        <View style={styles.bloco}>
                <View style={styles.solicitacoesInd}>

                </View>

                <View style={styles.solicitacoesInd}>

                </View>

                <View style={styles.solicitacoesInd}>

                </View>

                <View style={styles.solicitacoesInd}>

                </View>
        </View>
    );
};

export default BlocoSolicitacoes;