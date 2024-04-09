import {
  View,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';
import React from 'react';
import Rupee from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.imageBackground}>
            <Image
              source={require('../../assets/images/bullcow.png')}
              style={styles.imgaeOfBullcow}
            />
          </View>
          <View>
            <Text style={styles.nameText}>Hi, Sant Surat</Text>
            <Text style={styles.contactText}>9798073407</Text>
            <Text style={styles.profileText}>Edit Profile</Text>
          </View>
          <View style={styles.walletBalance}>
            <View style={{flexDirection: 'row', marginTop: 10, right: 10}}>
              <Image
                source={require('../../assets/images/purse.png')}
                style={{width: 20, height: 20, marginLeft: 36}}
              />
              <Text style={styles.myWallet}>My Wallet</Text>
            </View>
            <View style={styles.zeroMainContainer}>
              <Rupee name="currency-rupee" color="white" size={20} />
              <Text style={{fontSize: 20, bottom: 4}}>0</Text>
            </View>
            <Text style={styles.avaliableBalance}>Available balance</Text>
          </View>
        </View>
        <ScrollView style={{flex: 1,backgroundColor:'#fff',marginTop:50}}>
        
            <View style={styles.mainDiv}>
              <TouchableWithoutFeedback   onPress={() => navigation.navigate('MyAddress')} >
                <View style={styles.myAddressDiv}>
                <Image source={require('../../assets/images/location.png')} style={{width:40,height:40,bottom:10}}/>
              <Text style={styles.textName}>My Address</Text>
              <Image source={require('../../assets/images/right.png')} style={{width:20,height:20,left:112,}}/>
              </View>
              </TouchableWithoutFeedback>
              <View style={styles.dividerView}></View>
              <TouchableWithoutFeedback onPress={() => navigation.navigate('OrderHistory')}>
                <View style={styles.myAddressDiv}>
                <Image source={require('../../assets/images/history.png')} style={{width:40,height:40,bottom:10}}/>
              <Text style={styles.textName}>Order History</Text>
              <Image source={require('../../assets/images/right.png')} style={{width:20,height:20,left:102,}}/>
              </View>
              </TouchableWithoutFeedback>
              <View style={styles.dividerView}></View>
              <TouchableWithoutFeedback onPress={() => navigation.navigate('DeliveryPreference')}>
                <View style={styles.myAddressDiv} > 
                <Image source={require('../../assets/images/bag.png')} style={{width:40,height:40,bottom:10}}/>
              <Text style={styles.textName}>Delivery Preference</Text>
              <Image source={require('../../assets/images/right.png')} style={{width:20,height:20,left:60,}}/>
              </View>
              </TouchableWithoutFeedback>
            </View>
        
            <View style={styles.mainDiv}>
              <TouchableOpacity  style={styles.myAddressDiv} disabled={true}>
              <Image  source={require('../../assets/images/holiday.png')} style={{width:30,height:30,bottom:10}} />
              <Text style={[styles.textName,{marginLeft:10}]}>Vacations Mode</Text>
              <Image source={require('../../assets/images/right.png')} style={{width:20,height:20,left:80,}}/>
              </TouchableOpacity>
              <View style={styles.dividerView}></View>
              <TouchableOpacity  style={styles.myAddressDiv} disabled={true}>
                <Image source={require('../../assets/images/language.png')} style={{width:40,height:40,bottom:10}} />
              <Text style={styles.textName}>Language</Text>
              <Image source={require('../../assets/images/right.png')} style={{width:20,height:20,left:123,}}/>
              </TouchableOpacity>
              <View style={styles.dividerView}></View>
              <TouchableOpacity  style={styles.myAddressDiv} disabled={true}>
                <Image source={require('../../assets/images/star.png')} style={{width:40,height:40,bottom:10}} tintColor='skyblue'/>
              <Text style={styles.textName}>Rate Us</Text>
              <Image source={require('../../assets/images/right.png')} style={{width:20,height:20,left:137,}}/>
              </TouchableOpacity>
              <View style={styles.dividerView}></View>
              <TouchableOpacity  style={styles.myAddressDiv} disabled={true}>
                <Image source={require('../../assets/images/support.png')} style={{width:40,height:40,bottom:10}}/>
              <Text style={styles.textName}>Help & Support</Text>
              <Image source={require('../../assets/images/right.png')} style={{width:20,height:20,left:87,}}/>
              </TouchableOpacity>
              <View style={styles.dividerView}></View>
              <TouchableOpacity  style={styles.myAddressDiv} disabled={true}>
                <Image source={require('../../assets/images/about.png')} style={{width:40,height:40,bottom:10}}/>
              <Text style={styles.textName}>Legal And About us</Text>
              <Image source={require('../../assets/images/right.png')} style={{width:20,height:20,left:59,}}/>
              </TouchableOpacity>
            </View>
            <View style={{marginBottom: 150}}>
              <View style={styles.mainDiv}>
              <TouchableOpacity style={styles.myAddressDiv} disabled={true}>
              <Image source={require('../../assets/images/logout.png')} style={{width:40,height:40,bottom:10}}/>
               <Text style={styles.textName}>Logout</Text>
               <Image source={require('../../assets/images/right.png')} style={{width:20,height:20,left:142,}}/>
              </TouchableOpacity>
              </View>
              <Text style={{color:'black',textAlign:'center',marginTop:20}}>Version: 2.0.1</Text>
            </View>
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
  profileText: {
    color: 'black',
    marginLeft: 15,
    fontWeight: '400',
    backgroundColor: '#fff',
    borderRadius: 5,
    textAlign: 'center',
    marginTop: 5,
    fontSize: 13,
    padding: 4,
  },
  imageBackground: {
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 65,
    height: 65,
    top: 35,
    marginLeft: 15,
  },
  imgaeOfBullcow: {
    width: 60,
    height: 60,
    borderRadius: 50 / 1,
    margin: 2.3,
    position: 'absolute',
  },
  walletBalance: {
    backgroundColor: 'rgba(229,229,229,0.35)',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    height: 90,
    width: '50%',
    top: 28,
    left: 46,
  },
  myWallet: {
    color: 'white',
    fontWeight: '300',
    fontSize: 12,
    marginTop: 2,
    marginHorizontal: 2,
    letterSpacing: 0.65,
  },
  avaliableBalance: {
    fontSize: 11,
    marginTop: 5,
    marginHorizontal: 24,
    color: 'white',
    letterSpacing: 0.15,
  },
  zeroMainContainer: {
    flexDirection: 'row',
    top: 10,
    left: 20,
  },
  nameText: {
    color: 'white',
    marginTop: 30,
    marginLeft: 15,
    fontWeight: '600',
  },
  contactText: {
    color: 'white',
    marginLeft: 15,
    fontWeight: '300',
  },
  mainDiv:{
    backgroundColor:'#dfdfdf',
    width:340,
    alignSelf:'center',
    marginTop:10,
    borderRadius:10
  },
  myAddressDiv:{
    flexDirection:'row',
    marginTop:20,
    marginLeft:30,
    gap:20
  },
  dividerView:{
    backgroundColor:'black',
    height:1,
    marginLeft:30,
    marginRight:15
  },
  textName:{
    color:'black',
    fontSize:15,
    fontWeight:'400'
  }
});

export default Profile;
