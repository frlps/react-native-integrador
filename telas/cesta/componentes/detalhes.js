import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

import Texto from "../../../src/componentes/texto";
import logo from '../../../assets/logo.png';

export default function Detalhes() {
    return <>
        <Text style={estilos.produto}>Combo verde orgânico</Text>
        <View style={estilos.produtor}>
            <Image source={logo} style={estilos.imagem_produtor} />
            <Text style={estilos.titulo_produtor}>Granja Viana - Produtos do Campo</Text>
        </View>
        <Texto style={estilos.descricao}>
            Produtos orgânicos de ótima procedência,
            produzidos com carinho, e selecionados
            direto do campo!
        </Texto>
        <Text style={estilos.preco}>Valor: R$ 40,00</Text>
    </>
}

const estilos = StyleSheet.create(
    {
        produto: {
            width: '100%',
            textAlign: 'left',
            padding: 1,
            fontSize: 16,
            lineHeight: 32,
            color: 'black',
            //Não podemos usar fontWeight que suprime o fontFamily
            fontFamily: 'MontserratBold',
        },
        produtor: {
            flexDirection: 'row',
            paddingVertical: 10,
        },
        titulo_produtor: {
            width: '100%',
            textAlign: 'left',
            padding: 1,
            fontSize: 16,
            lineHeight: 26,
            color: '#464646',
            //Não podemos usar fontWeight que suprime o fontFamily
            fontFamily: 'MontserratRegular',
        },
        imagem_produtor: {
            width: 42,
            height: 42,
            marginRight: 20,
        },
        descricao: {
            width: '100%',
            textAlign: 'left',
            padding: 1,
            fontSize: 16,
            lineHeight: 20,
            color: '#A3A3A3',
        },
        preco: {
            width: '100%',
            textAlign: 'left',
            padding: 1,
            fontSize: 16,
            fontWeight: 'bold',
            lineHeight: 32,
            color: '#2A9F45',
        }

    }
);