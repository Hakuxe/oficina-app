import { StyleSheet } from "react-native"
import {appTheme} from '../../global/styles/theme'

export const styles = StyleSheet.create({
   container:{
      flex:1,
      paddingHorizontal:40,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor: appTheme.colors.overlay
   },
   content:{
      backgroundColor: appTheme.colors.secondary100,
      borderRadius:8,
   },
   modal:{
      paddingHorizontal: 40,
      paddingBottom:40,
      justifyContent:"center",
      alignItems:"center",
   },
   titleModal:{
      fontSize:18,
      fontWeight:"700",
      marginVertical:10,
      marginBottom:20
   },
   message:{
      fontSize:16,
   },
   button:{
      textAlign:'center',
      padding:10,
      backgroundColor: appTheme.colors.primary,
      borderBottomLeftRadius:8,
      borderBottomRightRadius:8,
      color:appTheme.colors.title,
     
   }
})
