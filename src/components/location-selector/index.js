import * as Location from 'expo-location'

import { Button, Text, View } from "react-native";

import MapPreview from '../map-preview';
import React from "react";
import colors from "../../utils/colors";
import { styles } from "./styles";
import { useState } from "react";

const LocationSelector = ({onLocation}) => {
    const [pickedLocation, setPickedLocation]=useState(null)

    const verifyPermissions= async()=>{
        const {status} = await Location.requestForegroundPermissionsAsync()
        if (status!== 'granted') {
            alert.alert('you need to set location permissions to use it in this app', [{text:'Ok'}]);
            return false
        }
        return true
    }

    const onHandlerLocation = async() =>{
            const hasPermission= await verifyPermissions();
            if (!hasPermission) return ;

            const location = await Location.getCurrentPositionAsync({
                timeOut: 10000,
            })
            setPickedLocation({
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            })
            onLocation({
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            })
    }

    return (

    <View style={styles.container}>
        <MapPreview location={pickedLocation} style={styles.preview}>
            <Text>No location select yet</Text>
        </MapPreview>
        
        <Button
            title= 'Get location'
            color= {colors.secondary}
            onPress={onHandlerLocation}
        />
    </View>
    )
}
export default LocationSelector