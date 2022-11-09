import { FlatList, Text, View } from "react-native";

import { PlaceItem } from "../../components";
import { styles } from "./styles"
import { useSelector } from "react-redux";

const PlaceList = ({ navigation }) => {
  const places = useSelector((state) => state.place.places)
  const renderItem = ({item}) => <PlaceItem 
    {...item} 
    onSelect={()=> {navigation.navigate('PlaceDetail', {placeId:item.id})}}/>

  const ListEmptyComponent= ()=>(
    <View style={styles.emptyContainer}>
      <Text style={styles.empty}>No places yet</Text>
    </View>
  )
  return <FlatList
    data={places}
    renderItem= {renderItem}
    keyExtractor= {(item)=> item.id.toString()}
    style={styles.container}
    ListEmptyComponent={ListEmptyComponent}
  />
};

export default PlaceList;
