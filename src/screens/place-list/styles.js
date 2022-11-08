import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  emptyContainer:{
    flex:1,
    marginVertical: 20,
    justifyContent: "center",
    alignItems:"center",
    
  },
  emptyText: {
    fontSize: 16,
    textAlign: "center",
    color: colors.text,
  }
});
