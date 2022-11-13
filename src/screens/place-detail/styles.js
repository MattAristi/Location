import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  image:{    
    width:'100%',
    height:'30%',    
    minHeight:200,
    marginBottom:10,
   
  },
  content : { 
    height:'60%', 
    justifyContent:"center",
    alignItems:"center",
    marginHorizontal:10,  
    borderRadius:5,
    color:colors.black,
    borderColor:colors.black,
    borderWidth:2,
    borderRadius:15,
   
  },
  addressContainer:{
      padding:10
  },
  textAddress:{
      margin:10,
      textAlign:"center",
      color:colors.gray,

  },
  map:{
      width:'90%',
      height:'50%',
      minHeight:240,
      marginBottom:10,
  },
});
