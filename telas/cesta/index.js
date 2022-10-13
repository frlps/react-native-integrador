import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

import Topo from './componentes/topo';
import Detalhes from './componentes/detalhes';

export default function Cesta() {

    return <View>
        <Topo/>

        {/* cmd + d seleciona mais de um parâmetro ao mesmo tempo com
        mesmo nome */}
        <SafeAreaView style={estilos.cesta}>
            <Text style={estilos.produtos}>Cesta de Produtos:</Text>
            <Detalhes/>
        </SafeAreaView>
    </View>
}

const estilos = StyleSheet.create(
    {
        cesta: {
            paddingVertical: 8,
            paddingHorizontal: 16,
        },
        produtos: {
            width: '100%',
            textAlign: 'left',
            padding: 1,
            fontSize: 20,
            lineHeight: 32,
            color: 'black',
            //Não podemos usar fontWeight que suprime o fontFamily
            fontFamily: 'MontserratBold',
        },
    }
);