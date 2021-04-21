import React from 'react';
import { Text, View } from 'react-native';
import { Welcome } from './src/pages/Welcome';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost'


export default function App() {
  const [fontLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  /* if (!fontLoaded) {
     return (
       <View>
         <Text>Guenta ai... A fonte está carregando!!!</Text>
       </View>
     )
   }*/

  return (
    <Welcome />
  )
}
