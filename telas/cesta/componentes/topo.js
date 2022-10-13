import React from "react";
import { Image, Dimensions, StyleSheet } from "react-native";

import Texto from "../../../src/componentes/texto";
import topo from '../../../assets/fundo_topo.png';

const largura_tela = Dimensions.get('screen').width;

export default function Topo() {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>Pega pra mim! </Texto>    
    </>
}

//Método ()
const estilos = StyleSheet.create(
    {
        topo: {
            //100% da tela
            width: '100%',
            //Para não ficar amarrado em Pixels
            height: 4245 / 7311 * largura_tela,
        },
        titulo: {
            width: '100%',
            position: 'absolute',
            textAlign: 'center',
            padding: 1,
            marginTop: (4245 / 7311 / 2.5) * largura_tela,
            fontSize: 20,
            fontWeight: 'bold',
            lineHeight: 26,
            color: 'black',
        },
    });