import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({ children, style }) {
    //estilo padrão é regular
    let estilo = estilos.texto;

    //A interrogação serve para primeiro perguntar se
    //o parâmetro style existe e foi passado caso não
    //ignora o laço 
    if (style?.fontWeight === 'bold') {
        estilo = estilos.textoNegrito;
    }

    return <Text style={[style, estilo]}>
        {children}
    </Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: 'MontserratRegular',
        fontWeight: 'normal',
    },
    textoNegrito: {
        fontFamily: 'MontserratBold',
        //Temos que voltar para normal visto que
        //a fonte externa não aceita bold, temos
        //que usar a fonte bold definida previamente
        fontWeight: 'normal',
    }
})