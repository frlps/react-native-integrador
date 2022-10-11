import { StatusBar } from 'expo-status-bar';
// SafeAreaView etita as barras
import {SafeAreaView, Text} from 'react-native';
// ./ parte de onde estamos
import Cesta from './telas/Cesta';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

export default function App() {

  const [fonteCarregada] = useFonts(
    {
      'MonserratRegular': Montserrat_400Regular,
      'MonserratBold': Montserrat_700Bold,
    }
  )

  if (!fonteCarregada) {
    return (
      <SafeAreaView>
        <Text> Fonte não Carregada!! </Text>
      </SafeAreaView>
    );
  }

  else {
      return (
        <SafeAreaView>
          <Cesta />
        </SafeAreaView>
      );
    }
}