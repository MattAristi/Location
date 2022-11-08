import { Image, Text, TouchableOpacity, View } from "react-native"

import { styles } from "./styles"

const PlaceItem = ({ title, image , onSelect}) => {
    return(
        <TouchableOpacity onPress={onSelect} style={styles.container}>
            <Image style={styles.image} source = {{uri:image}}/>
            <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PlaceItem