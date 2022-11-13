import { Image, ScrollView, Text, View } from "react-native";

import { MapPreview } from "../../components";
import { stopLocationUpdatesAsync } from "expo-location";
import { styles } from "./styles";
import { useSelector } from "react-redux";

const PlaceDetail = ({ navigation, route }) => {
  const {placeId} = route.params;
  const place = useSelector(state=>state.place.places.find((placeItem=>placeItem.id===placeId)))
  const {lat, lng}= place.coords;
  console.log(place);
  return (
   <ScrollView style={styles.container}>
      <Image source={{uri: place.image}} style={styles.image}/>
      <View style={styles.content}>
        <View style={styles.addressContainer}>
          <Text style={styles.textAddress}>{place.address}</Text>
        </View>
        <MapPreview style={styles.map} location={{lat: lat, lng: lng}}>
          <Text>Location was not setted yet</Text>
        </MapPreview>
      </View>
   </ScrollView>
  );
};

export default PlaceDetail;
