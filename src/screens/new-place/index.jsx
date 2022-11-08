import { Button, ScrollView, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

import ImageSelector from "../../components/image-selector";
import colors from '../../utils/colors';
import { savePlace } from "../../store/place.slice";
import { styles } from "./styles";
import { useDispatch } from "react-redux";

const NewPlace = ({ navigation }) => {
  const dispatch= useDispatch()
  const [title, setTitle]=useState('')
  const [image, setImage] = useState('')

  const onHandleChange=(text)=> {
    setTitle(text)
  }
  const onHandleSubmit=()=> {
    dispatch(savePlace(title, image,'123 Street name'))
    navigation.navigate('Places')
  }

  const onHandlerImage = (imageUri)=> {
    setImage(imageUri)
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text>Title</Text>
        <TextInput
        style={styles.input}
        placeholder='New location'
        onChangeText={onHandleChange}
        />
        <ImageSelector onImage={onHandlerImage}/>
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
