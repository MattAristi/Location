import { StyleSheet } from "react-native";
import colors from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    preview: {
        with: '100%',
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        marginBottom:20,
        borderColor: colors.secondary,
        borderWidth: 1.5,

    },
    image:{
        width:'100%',
        height:'100%'
    }
});
