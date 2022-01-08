import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
   container:{
      backgroundColor:"#ccc",
      borderRadius:8,
      paddingHorizontal:15,
      paddingVertical:20,
      marginBottom:12,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems: 'center',
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