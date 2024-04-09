import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Locationdot from 'react-native-vector-icons/FontAwesome6';

const MyAddress = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.mainContainer}>
      <>
        <View style={{top: 15, flexDirection: 'row', left: 55, gap: 35}}>
          <TouchableWithoutFeedback onPress={goBack}>
            <Image
              source={require('../assets/images/left.png')}
              style={{width: 30, height: 30, bottom: 1, right: 40}}
              tintColor="white"
            />
          </TouchableWithoutFeedback>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 20,
              letterSpacing: 0.5,
              fontWeight: '400',
            }}>
            My Address
          </Text>
        </View>
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: '#F8F8FF',
            top: 30,
          }}>
          <Text style={{color: '#5A5A5A', margin: 20}}>
            Your orders will be delivered at this address
          </Text>
          <View style={styles.cardOfAddress}>
            <View style={{flexDirection: 'row', gap: 6}}>
              <Locationdot
                name="location-dot"
                size={20}
                color="#15616d"
                style={{}}
              />
              <Text
                style={{
                  color: 'black',
                  fontWeight: '800',
                  fontSize: 18,
                  letterSpacing: 0.5,
                  bottom: 5,
                  left: 3,
                }}>
                Home Address
              </Text>
              <View style={styles.editButton}>
                <Text style={{color: 'white', textAlign: 'center', margin:2}}>
                  Edit
                </Text>
              </View>
            </View>
            <TextInput
              style={{
                color: 'black',
                marginTop:0
              }}
              multiline={true} 
              numberOfLines={4} 
            />
          </View>
        </ScrollView>
      </>
    </View>
  );
};

export default MyAddress;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#15616d',
  },
  cardOfAddress: {
    borderRadius: 10,
    backgroundColor: '#E9EAED',
    height: 150,
    width: 340,
    alignSelf: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 8,
    shadowRadius: 10,
    elevation: 5,
    zIndex: 8,
  },
  editButton: {
    backgroundColor: '#800080',
    marginLeft: 100,
    width: 50,
    borderRadius: 5,
  },
});
