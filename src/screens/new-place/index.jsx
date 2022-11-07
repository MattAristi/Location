import { Button, ScrollView, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

import ImageSelector from "../../components/image-selector";
import { addPlace } from "../../store/place.slice";
import colors from '../../utils/colors';
import { styles } from "./styles";
import { useDispatch } from "react-redux";

const NewPlace = ({ navigation }) => {
  const dispatch= useDispatch()
  const [title, setTitle]=useState('')

  const onHandleChange=(text)=> {
    setTitle(text)
  }
  const onHandleSubmit=()=> {
    dispatch(addPlace(title))
    navigation.goBack()
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text>Title</Text>
        <TextInput
        style={styles.input}
        placeholder='New location'
        onHandleText={onHandleChange}
        />
        <ImageSelector onImage={()=>{}}/>
        <Button
        title="Save location"
        onPress={onHandleSubmit}
        color={colors.primary}
        />
      </View>
    </ScrollView>
  );
};

export default NewPlace;
