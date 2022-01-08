import { StyleSheet } from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper'
import {appTheme} from '../../global/styles/theme'

export const styles = StyleSheet.create({
   container:{
      height:'100%',
      backgroundColor:appTheme.colors.mainBackground,
      marginTop:getStatusBarHeight() 
   },
   content:{
      backgroundColor:appTheme.colors.mainBackground,
      height:'100%',
      paddingHorizontal:20,
      marginTop: 15, 
      marginBottom: 50, 
   },

});
