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
  


const HomeScreen = ({navigation, item, clothe}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState({});
 const [query, setQuery] = useState("");
const [fullData, setFullData] = useState([]);

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
      const handleClick = (selectedId) => {
        const selectedRec = clothes.find((val) => val.name === selectedId);
        setSelectedData(selectedRec);
        setShow(true);
      };
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => {handleClick(), setModalVisible(true)}}
        // onPress={() => navigation.navigate('DetailsScreen', clothe)}
        >
          {/* <Modal isVisible={isModalVisible}></Modal> */}
        <View style={style.card}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        style={{delay: 5}}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={style.modalText}>{clothe.name}</Text>
            <Text style={style.modalText}>{clothe.ingredients}</Text>
            <Text style={style.modalText}>{clothe.price}</Text>
            <Pressable
              style={[style.button, style.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={style.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
          <View style={{alignItems: 'center', top: 0}}>
            <Image source={clothe.image} style={{height: 120, width: 120}} />
          </View>
          <View style={{marginHorizontal: 20}} index={clothe.id}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{clothe.name}</Text>
            {/* <Text style={{fontSize: 14, color: COLORS.grey, marginTop: 2}}>
              {clothe.ingredients}
            </Text> */}
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              {clothe.price}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  // Arrumar metódo de verificação para filtrar lista
  const handleSearch = text => {
    // const formattedQuery = text.toLowerCase();
    // const filteredData = filter(fullData, clothe => {
    //   return contains(clothe, formattedQuery);
    // });
    // setQuery(text);
    // if (clothe.name == query) {
    //   setFullData(filteredData);
    Alert.alert(
      "Message",
      "Essa funcionalidade está em desenvolvimento",
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
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={style.inputContainer}>
        <Fontisto name="search" size={24} color="black" />
          <TextInput
            style={{flex: 1, fontSize: 13}}
            placeholder="Procure sua roupa aqui..."
            value={query}
            onChangeText={clotheText => handleSearch(clotheText)}
          />
        </View>
        {/* <View style={style.sortBtn}>
         <Entypo
   color={COLORS.white}
   name="menuunfold"
   size={40}
/> 
        </View> */}
      </View>
      {/* <View>
        <ListCategories />
      </View> */}
      
      {/* Trocar data para trocar */}
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={clothes}
        renderItem={({item}) => <Card clothe={item} />}
      />
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
    width: cardWidth,
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

export default HomeScreen;
