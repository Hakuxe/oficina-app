import { StyleSheet } from 'react-native';
import {appTheme} from '../../global/styles/theme'


export const styles = StyleSheet.create({
   container:{
      backgroundColor:appTheme.colors.secondary100,
      borderRadius:8,
      paddingHorizontal:15,
      paddingVertical:20,
      marginBottom:12,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems: 'center',
      borderColor: appTheme.colors.border40,
      borderWidth: 1,
      
   },
   seller:{
      fontSize: 15,
      fontWeight: '700',
      marginBottom: 3,
   },
   client: {
      fontSize: 12,
      opacity: 0.5,
   },
   

});