import { StyleSheet, Dimensions } from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {appTheme} from '../../global/styles/theme'

export const styles = StyleSheet.create({
   container:{
      height:'100%',
      backgroundColor:appTheme.colors.mainBackground,
   },
   content:{
      backgroundColor:appTheme.colors.mainBackground,
      height:'100%',
      paddingHorizontal:20,
      marginTop: 15, 
      marginBottom: 50, 
   },
   errorMessage:{
      marginTop: 25,
      alignItems:'center',
      justifyContent:'center',
     
   }

});
