import React,{useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
} from 'react-native';
// import { ROUTES } from '../../constants';
import {useNavigation} from '@react-navigation/native'


  const Subscription = () => {
    
    const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <>
        <View style={{top: 20, flexDirection: 'row', left: 110, gap: 35}}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 20,
              letterSpacing: 0.5,
              fontWeight: '400',
            }}>
            Subscriptions
          </Text>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Vacation')}>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: 'white',
              borderRadius: 5,
              borderTopWidth:0.9,
              borderBottomWidth:0.9,
              height: 25,
              top: 4,
              flexDirection:'row'
            }}>
            <Text style={{margin:5,color:'white',fontSize:9,fontWeight:'400'}}>Vacation</Text>
            <Image  source={require('../../assets/images/holiday.png')} style={{width:20,height:20,margin:5,bottom:2}}/>
          </View>
          </TouchableWithoutFeedback>
        </View>
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: '#F8F8FF',
            top: 40,
            borderRadius: 25,
          }}>
            <Image  source={require('../../assets/images/emptyCart.png')} style={{width:200,height:200,marginHorizontal:"25%",marginTop:"45%"}}/>
            <Text style={{color:'black',textAlign:'center',letterSpacing:1,fontWeight:'400'}}>You have not created any subscription yet.</Text>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
              <Text style={styles.shoppingText}>Start Shopping</Text>
            </TouchableWithoutFeedback>
          </ScrollView>
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#15616d',
  },
  shoppingText:{
    color:'white',
    textAlign:'center',
    padding:10,
    fontSize:15,
    fontWeight:'300',
    marginTop:20,
    backgroundColor:"#15616d",
    borderRadius:7,
    width:160,
    alignSelf:'center'
  },
});

export default Subscription;
