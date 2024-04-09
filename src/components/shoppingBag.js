
import { StyleSheet, Text, View,Image,TouchableWithoutFeedback, ScrollView } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const ShoppingBag = () => {

    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack(); 
      };

      const goToHomeScreen = () => {
       
        navigation.goBack(); 
      };

  return (
    <View style={styles.mainContainer}>
        <View style={{flexDirection:'row'}}>
         <TouchableWithoutFeedback onPress={goBack} >
            <Image
              source={require('../assets/images/left.png')}
              style={{ width: 30, height: 30, marginLeft: 10,top:18  }}
              tintColor="white"
            />
            </TouchableWithoutFeedback>
      <Text style={{color:'white',textAlign:'center',top:20,fontSize:20, left:80}}>Shopping Bag</Text>
    </View>
    <ScrollView 
     style={{
        flex: 1,
        backgroundColor: '#F8F8FF',
        top:35,
      }}>
        {/* <Image  source={require('../assets/images/shoppingcart.png')} style={{width:220, height:220,alignSelf:'center', marginTop:120}}/>
        <Text style={{textAlign:'center', color:'black',fontSize:18, fontWeight:'500'}}>You don't have any items in your bag</Text>
        <Text style={{textAlign:'center', color:'black',fontSize:13, fontWeight:'300',marginTop:8}}>Your favourite items are just a click away</Text>
        <View style={{ backgroundColor:"#15616d",marginTop:30,width:"50%",alignSelf:'center',borderRadius:5}}>
            <Text style={{color:'white',textAlign:'center',margin:10,}} onPress={goToHomeScreen}>Start Shopping</Text>
        </View> */}
      <View style={{display:'flex',flexDirection:'row', margin:20,gap:95}}>
     <Text style={{color:'#15616d'}}>1 item(s)in bag</Text>
     <Text style={{color:'#595959'}}>Deliver on : Next Day</Text>
     </View>
    </ScrollView>
    </View>
  )
}

export default ShoppingBag

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#15616d',
      },
})