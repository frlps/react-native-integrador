import { StyleSheet, Image, Dimensions, View, Text, SafeAreaView} from 'react-native';

import topo from '../assets/fundo_topo.png';
import logo from '../assets/logo.png';

const largura_tela = Dimensions.get('screen').width;

export default function Cesta() {

    return <View>
        <Image source={topo} style={estilos.topo} />
        <Text style={estilos.titulo}>Pega pra mim! </Text>

        <SafeAreaView style={estilos.cesta}>
            <Text style={estilos.produtos}>Cesta de Produtos:</Text>
            <View style={estilos.produtor}>
                <Image source={logo} style={estilos.imagem_produtor} />
                <Text style={estilos.titulo_produtor}>Granja Viana - Produtos do Campo</Text>
            </View>
            <Text style={estilos.descricao}>
                Produtos orgânicos de ótima procedência,
                produzidos com carinho, e selecionados
                direto do campo!
            </Text>
            <Text style={estilos.preco}>Valor: R$ 40,00</Text>
        </SafeAreaView>

    </View>
}

const estilos = StyleSheet.create(
    {
        cesta: {
            paddingVertical: 8,
            paddingHorizontal: 16,
        },
        topo: {
            //100% da tela
            width: '100%',
            //Para não ficar amarrado em Pixels
            height: 4245/7311 * largura_tela,
        },
        titulo: {
            width: '100%',
            position: 'absolute',
            textAlign: 'center',
            padding: 1,
            marginTop: (4245/7311/2.5) * largura_tela,
            fontSize: 20,
            fontWeight: 'bold',
            lineHeight: 26,
            color: 'black',
        },
        produtos: {
            width: '100%',
            textAlign: 'left',
            padding: 1,
            fontSize: 20,
            lineHeight: 32,
            color: 'black',
            //Não podemos usar fontWeight que suprime o fontFamily
            fontFamily: 'MonserratBold',
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
            fontFamily: 'MonserratRegular',           
        },
        imagem_produtor: {
            width: 42,
            height: 42,
            marginRight:20,
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
            lineHeight: 26,
            color: '#2A9F45',
        }
    }
)