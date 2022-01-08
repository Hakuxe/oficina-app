import React from 'react';
import {Text, View} from 'react-native'
import { styles } from './headerStyles';

export function Header() {
   return(
      <View style={styles.container}>
         <Text style={styles.title}> Orçamentos </Text>
      </View>
   )
   
}