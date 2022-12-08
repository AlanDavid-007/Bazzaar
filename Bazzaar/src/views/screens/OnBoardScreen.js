import React from 'react';
import {Text, StyleSheet, View, Image, ImageBackground} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../../consts/colors';
import {PrimaryButton} from '../components/Button';

const OnBoardScreen = ({navigation}) => {
  const image = { uri:'https://images.unsplash.com/photo-1583002083815-8c6305bd56a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'};
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
       <ImageBackground source={image} style={{ justifyContent: "center", height: 540,}} resizeMode="cover">
      <View style={style.textContainer}>
        <View>
          <Text style={{fontSize: 32, fontWeight: 'bold', textAlign: 'center', color: COLORS.white}}>
            Bazzar Outlet
          </Text>
          <Text
            style={{
              marginTop: 180,
              fontSize: 18,
              textAlign: 'center',
              color: COLORS.white,
              marginBottom: 20,
            }}>
            Nós te ajudamos a encontrar seu look incrível!
          </Text>
        </View>
        <View style={style.indicatorContainer}>
          <View style={style.currentIndicator} />
          <View style={style.indicator} />
          <View style={style.indicator} />
        </View>
        <PrimaryButton
          onPress={() => navigation.navigate('Home')}
          title="Venha Conhecer!"
        />
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
    marginTop: 100,
  },
  indicatorContainer: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    marginHorizontal: 5,
  },
  indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: COLORS.grey,
    marginHorizontal: 5,
  },
});

export default OnBoardScreen;
