import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
    Linking,
  } from 'react-native';
  import React from 'react';
  import Icon from 'react-native-vector-icons/FontAwesome';
  import {useNavigation} from '@react-navigation/native';
  import {COLORS, ROUTES} from '../../constants';
  

  const Signup = () => {
    const navigation = useNavigation();
    
  
    return (
      <View style={Styles.mainContainer}>
        <SafeAreaView style={{display: 'flex'}}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                backgroundColor: 'orange',
                padding: 10,
                borderTopRightRadius: 15,
                borderBottomLeftRadius: 15,
                marginLeft: 15,
                top: 10,
              }}>
              <Icon name="arrow-left" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Image
              source={require('../../assets/images/signup.png')}
              style={{width: 165, height: 110}}
            />
          </View>
        </SafeAreaView>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            paddingLeft: 8,
            paddingTop: 8,
            top: 30,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
          }}>
          <View style={{marginTop: 30, marginLeft: 20}}>
            <Text style={{color: 'gray', marginLeft: 4, fontWeight: 'bold'}}>
              Full Name
            </Text>
            <TextInput
              style={{
                padding: 4,
                backgroundColor: 'gray',
                color: 'white',
                borderRadius: 10,
                width: '90%',
                marginBottom: 3,
              }}
              value="Sant Surat"
              placeholder="Enter your fullname"
            />
            <Text
              style={{
                color: 'gray',
                marginLeft: 4,
                fontWeight: 'bold',
                marginTop: 15,
              }}>
              Email Address
            </Text>
            <TextInput
              style={{
                padding: 4,
                backgroundColor: 'gray',
                color: 'white',
                borderRadius: 10,
                width: '90%',
                marginBottom: 3,
              }}
              value="santsurat123@gmail.com"
              placeholder="Enter your email"
            />
          </View>
          <View style={{marginTop: 20, marginLeft: 20}}>
            <Text style={{color: 'gray', marginLeft: 4, fontWeight: 'bold'}}>
              Password
            </Text>
            <TextInput
              style={{
                padding: 4,
                backgroundColor: 'gray',
                color: 'white',
                borderRadius: 10,
                width: '90%',
                marginBottom: 10,
              }}
              secureTextEntry
              value="Sant@8092"
              placeholder="Enter your password"
            />
            <TouchableOpacity
              style={{
                paddingTop: 5,
                paddingBottom: 5,
                backgroundColor: 'orange',
                borderRadius: 8,
                top: 15,
                width: '90%',
              }}   onPress={() => {onSubmit();}}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'black',
                  fontSize: 20,
                  fontWeight: '800',
                }}>
                SignUp
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              top: 30,
              fontSize: 20,
              fontWeight: '500',
            }}>
            Or
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 40,
              top: 10,
            }}>
            <TouchableOpacity
              style={{
                padding: 2,
                backgroundColor: 'lightgrey',
                borderRadius: 10,
                top: 35,
              }}
              onPress={() => Linking.openURL('https://accounts.google.com/')}>
              <Image
                source={require('../../assets/icons/google.png')}
                style={{width: 35, height: 35}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 2,
                backgroundColor: 'lightgrey',
                borderRadius: 10,
                top: 35,
              }}
              onPress={() => Linking.openURL('https://www.facebook.com/')}>
              <Image
                source={require('../../assets/icons/facebook.png')}
                style={{width: 38, height: 38}}
              />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center', top: 58}}>
            <Text style={{color: 'black', fontWeight: '500'}}>
              Already have an account?
            </Text>
            <TouchableOpacity>
              <Text
                style={{color: 'orange', fontWeight: 'bold', left: 5}}
                onPress={() => navigation.navigate(ROUTES.LOGIN)}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  
  const Styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#15616d',
    },
  });
  
  export default Signup;