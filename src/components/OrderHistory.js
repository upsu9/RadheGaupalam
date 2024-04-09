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
  
  const OrderHistory = () => {
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
              Order History
            </Text>
          </View>
          <ScrollView
            style={{
              flex: 1,
              backgroundColor: '#F8F8FF',
              top: 30,
            }}>
          </ScrollView>
        </>
      </View>
    );
  };
  
  export default OrderHistory;
  
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#15616d',
    },
    editButton: {
      backgroundColor: '#800080',
      marginLeft: 100,
      width: 50,
      borderRadius: 5,
    },
  });
  