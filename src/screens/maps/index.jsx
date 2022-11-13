import MapView, {Marker} from "react-native-maps";
import React, { useLayoutEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import IonIcons from '@expo/vector-icons/Ionicons'
import colors from "../../utils/colors";
import { styles } from "./styles";

const Maps = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation]= useState(null);
   
  const initialRegion= {
    latitude: 47,
    longitude: -49,
    latitudeDelta : 0.09,
    longitudeDelta : 0.04
  }
  const onHandlerPickLocation = (ev) => {
    setSelectedLocation({
      lat: ev.nativeEvent.coordinate.latitude,
      lng: ev.nativeEvent.coordinate.longitude,
    })
  }

  const onHandleSaveLocation = ()=>{
    if(selectedLocation) navigation.navigate('NewPlace', {mapLocation: selectedLocation})
  }

  useLayoutEffect(()=>{
    console.log('hola')
    navigation.setOptions({
      title: 'Guarda la ubicación',
      headerRight: ()=> 
        <TouchableOpacity onPress={onHandleSaveLocation}>
          <IonIcons name='md-save-sharp' size={24} color={colors.black} />
        </TouchableOpacity>
  });
  },[navigation, onHandleSaveLocation]);
  return (
    <MapView style={styles.container} initialRegion={initialRegion} onPress={onHandlerPickLocation}>
      {selectedLocation && (
        <Marker 
          title= 'Picked location'
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
          />
      )}
    </MapView>
  );
};

export default Maps;
