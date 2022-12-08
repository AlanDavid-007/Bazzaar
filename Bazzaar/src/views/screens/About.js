import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
  Pressable
} from 'react-native';
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../consts/colors';
import clothes from '../../consts/clothes';
const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;
import {Entypo} from "@expo/vector-icons";
import { Fontisto } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import filter from 'lodash.filter';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import _ from "lodash";
import Modal from "react-native-modal";

// Arrumar UUID para gerar id 
  


const About = ({navigation, item, clothe}) => {

  const Card = ({clothe}) => {

      const Submit = () => {
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
  };


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
            <ScrollView>
      <View style={style.header}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 28}}>Olá,</Text>
            <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>
              Alan
            </Text>
          </View>
          <Text style={{marginTop: 5, fontSize: 22, color: COLORS.grey}}>
            O que deseja hoje?
          </Text>
        </View>
        <Image
          source={require('../../assets/person.jpeg')}
          style={{height: 50, width: 50, borderRadius: 25}}
        />
      </View>
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => {}}
        // onPress={() => navigation.navigate('DetailsScreen', clothe)}
        >
          {/* <Modal isVisible={isModalVisible}></Modal> */}
        <View style={style.card}>
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum ultrices metus sit amet pharetra. Nam aliquet, libero vel bibendum convallis, odio massa consequat nisl, et placerat arcu nibh quis neque. Vivamus iaculis nisl vel mauris tempor mattis. Duis viverra eros non arcu lobortis placerat. Cras auctor nisi nunc, in porttitor libero lobortis eget. Phasellus finibus leo et ex fringilla ornare. Ut ac feugiat ipsum, eget tincidunt neque. Suspendisse semper diam eu dui porttitor, ac viverra arcu pretium. Praesent nec libero nec libero maximus eleifend. Proin pellentesque finibus felis nec placerat. Sed varius, elit at hendrerit finibus, dolor leo venenatis dui, non commodo leo nibh ac nunc. Nunc luctus, nisl ac sodales placerat, lorem mauris rhoncus purus, in malesuada turpis orci a massa. Nulla laoreet enim sed lacus euismod ornare. Nunc eget tortor dictum, ullamcorper est eu, elementum felis. Suspendisse vestibulum dolor tellus, sit amet pretium tellus fringilla quis. Nunc a volutpat orci.</Text>
            {/* <Text style={{fontSize: 14, color: COLORS.grey, marginTop: 2}}>
              {clothe.ingredients}
            </Text> */}
          </View>
        </View>
      </TouchableHighlight>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 220,
    width: 300,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
});

export default About;
