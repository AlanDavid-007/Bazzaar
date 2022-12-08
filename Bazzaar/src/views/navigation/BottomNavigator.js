import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import {View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import Categories from '../screens/Categories';
import About from '../screens/About';
import Cards from '../screens/Cards';
import {Entypo} from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        showLabel: false,
        activeTintColor: COLORS.primary,
      }}>
      <Tab.Screen
        name="Tela Inicial"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Categorias"
        component={Categories}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="bar-chart-2" size={24} color="black" />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <View
              style={{
                height: 60,
                width: 60,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.white,
                borderColor: COLORS.primary,
                borderWidth: 2,
                borderRadius: 30,
                top: -25,
                elevation: 5,
              }}>
              <Icon name="search" color={COLORS.primary} size={28} />
            </View>
          ),
        }}
      /> */}
      <Tab.Screen
        name="Sobre a Empresa"
        component={About}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="info" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Cartões"
        component={Cards}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="cards" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
