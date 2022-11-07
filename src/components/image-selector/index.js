import * as ImagePicker from 'expo-image-picker'

import { Button, Image, Text, View } from "react-native";

import React from "react";
import colors from "../../utils/colors";
import { styles } from "./styles";
import { useState } from "react";

const ImageSelector = ({onImage}) => {
    const [pickedUrl, setPickedUrl]=useState('')

    const verifyPermissions= async()=>{
        const {status} = await ImagePicker.requestCameraPermissionsAsync()
        if (status!== 'granted') {
            alert.alert('you need to set camera permission to use it in this app', [{text:'Ok'}]);
            return false
        }
        return true
    }

    const onHandleTakePhoto = async()=>{
        const hasPermition= await verifyPermissions();
        if (!hasPermition) return;

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.7,
        })
        setPickedUrl(image.uri)
        onImage(image.uri)

    }

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
            onPress={onHandleTakePhoto}
        />
    </View>
    )
}
export default ImageSelector