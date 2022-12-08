import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import {SecondaryButton} from '../components/Button';
import { v4 as uuidv4 } from 'uuid';
import {Entypo} from "@expo/vector-icons";
import { Fontisto } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

// import AsyncStorage from '@react-native-async-storage/async-storage';

const DetailsScreen = ({navigation, route}) => {
  const item = route.params;
  
  const Submit = () => {
    // AddWishes({
    //   "id": item.id,
    //   "name": item.name,
    //   "image": item.image,
    //   "ingredients": item.ingredients,
    //   "price": item.price,
    // })
    Alert.alert(
      "Message",
      "Olá, esta função estará disponível em Breve, aguarde as proxímas atualizações!",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  };
  
    const CartSubmit = () => {
    //  AddCartItems({
    //       "id": item.id,
    //       "name": item.name,
    //       "image": item.image,
    //       "ingredients": item.ingredients,
    //       "price": item.price,
    //       "quantity": 1,
    //     })
        // console.log(cartlist)
    Alert.alert(
      "Message",
      "Olá, esta função estará disponível em Breve, aguarde as proxímas atualizações!",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  };
  
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <AntDesign name="arrowleft" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Details</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 280,
          }}>
          <Image source={item.image} style={{height: 220, width: 220}} />
        </View>
        <View style={style.details}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', color: COLORS.white}}>
              {item.name}
            </Text>
        <TouchableOpacity onPress={() => Submit()}>
            <View style={style.iconContainer}>
            <MaterialIcons name="favorite" size={24} color=" " />
            </View>
        </TouchableOpacity>
        </View>
          <Text style={style.detailsText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </Text>
        <TouchableOpacity onPress={CartSubmit}>
          <View style={{marginTop: 40, marginBottom: 40}} onPress={CartSubmit}>
            <SecondaryButton onPress={CartSubmit} title="Add To Cart" />
          </View>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: COLORS.white,
  },
});

export default DetailsScreen;
