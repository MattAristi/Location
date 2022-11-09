import { Button, ScrollView, Text, TextInput, View } from "react-native";
import {ImageSelector, LocationSelector} from "../../components";
import React, { useState } from "react";

import colors from '../../utils/colors';
import { savePlace } from "../../store/place.slice";
import { styles } from "./styles";
import { useDispatch } from "react-redux";

const NewPlace = ({ navigation }) => {
  const dispatch= useDispatch()
  const [title, setTitle]=useState('')
  const [image, setImage] = useState('')
  const [location, setLocation]= useState('')

  const onHandleChange=(text)=> {
    setTitle(text)
  }
  const onHandleSubmit=()=> {
    dispatch(savePlace(title, image,location))
    navigation.navigate('Places')
  }

  const onHandleImage = (imageUri)=> {
    setImage(imageUri)
  }
  const onHandleLocation= (location) => {
    setLocation(location)
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Title</Text>
        <TextInput
        style={styles.input}
        value={title}
        placeholder='New location'
        onChangeText={onHandleChange}

        />
        <ImageSelector onImage={onHandleImage}/>
        <LocationSelector onLocation={onHandleLocation}/>
        <Button
        title="Save place"
        onPress={onHandleSubmit}
        color={colors.primary}
        />
      </View>
    </ScrollView>
  );
};

export default NewPlace;
