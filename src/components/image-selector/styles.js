import { StyleSheet } from "react-native";
import colors from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    preview: {
        with: '95%',
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        borderColor: colors.primary,
        borderWidth: 1.5,

    },
    image:{
        width:'100%',
        height:'100%'
    }
});
