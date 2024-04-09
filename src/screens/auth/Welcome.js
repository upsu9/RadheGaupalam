import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constants';
  
  export default function WelcomeScreen() {
     const navigation = useNavigation();
    return (
      <SafeAreaView style={Styles.mainContainer}>
        <View style={Styles.textContainer}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 30,letterSpacing:4.5}}>
            Let's Get Started!<Text style={{ color: 'orange' }}>Fresh Milk</Text>
            100% Real
          </Text>
          {/* <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>Fresh Milk</Text>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}> 100% Real</Text> */}
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Image
              source={require('../../assets/images/cow.png')}
              style={{width: 250, height: 250 , borderRadius:90/1}}
            />
          </View>
          <View style={{marginTop: 4}}>
            <TouchableOpacity
            onPress={() => navigation.navigate(ROUTES.SIGNUP)}
              style={{
                paddingTop: 5,
                paddingBottom: 5,
                backgroundColor: 'orange',
                marginLeft: 7,
                borderRadius: 10,
                paddingHorizontal: '30%',
              }}>
              <Text
                style={{
                  color: 'grey',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                SignUp
              </Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={{color: 'white', top: 5}}>
                Already have an account?
              </Text>
              <TouchableOpacity>
                <Text
                  style={{color: 'orange', top: 5, fontWeight: 'bold', left: 5}} onPress={() => navigation.navigate(ROUTES.LOGIN)}>
                  Log In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
  
  const Styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#15616d',
    },
    textContainer: {
      flex: 1,
      justifyContent:'space-evenly',
      alignItems: 'center',
    },
  });
  