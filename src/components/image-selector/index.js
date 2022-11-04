import { Button, Text, View } from "react-native";

import React from "react";
import colors from "../../utils/colors";
import { styles } from "./styles";
import { useState } from "react";

const ImageSelector = ({onImage}) => {
    const [pickedUrl, setPickedUrl]=useState('')

    return (

    <View style={styles.container}>
        <View style={styles.preview}>
            {!pickedUrl ? (
                <Text>No image picked yet</Text>
            ):(
                <Image style={styles.image} source= {{uri: pickedUrl}}></Image>
            )
        }
        </View>
        <Button
            title= 'Take image'
            color= {colors.secondary}
            onPress={()=>{}}
        />
    </View>
    )
}
export default ImageSelector