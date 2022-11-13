import * as Location from 'expo-location'

import { Button, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from '@react-navigation/native';

import MapPreview from '../map-preview';
import colors from "../../utils/colors";
import { styles } from "./styles";

const LocationSelector = ({onLocation}) => {
    const navigation= useNavigation()
    const route = useRoute();
    const [pickedLocation, setPickedLocation]=useState(null)

    const {mapLocation}= route.params || {};

    const verifyPermissions= async()=>{
        const {status} = await Location.requestForegroundPermissionsAsync()
        if (status!== 'granted') {
            alert.alert('you need to set location permissions to use it in this app', [{text:'Ok'}]);
            return false
        }
        return true
    }

    const onHandleLocation = async() =>{
            const hasPermission= await verifyPermissions();
            if (!hasPermission) return ;

            const location = await Location.getCurrentPositionAsync({
                timeOut: 5000,
                
            })
            const {latitude, longitude}= location.coords;
            
            
            setPickedLocation({
                lat: latitude,
                lng: longitude,
            })
            onLocation({
                lat: latitude,
                lng: longitude,
            })
    }
    const onHandlePickMap = () => {
        const hasPermission = verifyPermissions();
        if(!hasPermission) return;
        navigation.navigate('Maps')

    }

    useEffect(()=>{
        if(mapLocation){
            console.log('mapLoc onLoc', mapLocation);
            setPickedLocation(mapLocation);
            onLocation(mapLocation)
        }
    },[mapLocation])
    return (

    <View style={styles.container}>
        <MapPreview location={pickedLocation} style={styles.preview}>
            <Text>No location select yet</Text>
        </MapPreview>
        
        <Button
            title= 'Get location'
            color= {colors.secondary}
            onPress={onHandleLocation}
        />
        <Button
            title= 'Pick in map'
            color= {colors.primary}
            onPress={onHandlePickMap}
        />
    </View>
    )
}
export default LocationSelector