import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Notification from 'react-native-vector-icons/Ionicons';
import Locationdot from 'react-native-vector-icons/FontAwesome6';
import Close from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel from '../../components/Carousel';
import CardOfItems from '../../components/CardOfItems';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [iscount, setIsCount] = useState(0);

  const handleCategoryPress = (category) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? null : category
    ); 
  };

  const isCategoryActive = (category) => {
    return selectedCategory === category;
  };


  return (
    <View style={styles.mainContainer}>
      <>
        <View style={{flexDirection: 'row'}}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Profile')}>
            <View>
              <Image
                source={require('../../assets/images/bullcow.png')}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 50 / 1,
                  top: 10,
                  marginLeft: 10,
                }}
              />
            </View>
          </TouchableWithoutFeedback>
          <View>
            <Text style={{color: 'white', marginTop: 20, marginLeft: 5}}>
              Hi, Sant Surat
            </Text>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('MyAddress')}>
              <View
                style={{marginLeft: 5, flexDirection: 'row', gap: 5, top: 3}}>
                <Locationdot name="location-dot" size={15} color="white" />
                <Text style={{color: 'white'}}>Home</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View
            style={{
              marginHorizontal: '25%',
              display: 'flex',
              flexDirection: 'row',
              gap: 18,
            }}>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('SearchItems')}>
              <View style={{justifyContent: 'center', top: 10}}>
                <Icon name="search" size={20} color="orange" />
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('ShoppingBag')}>
              <View style={{justifyContent: 'center', top: 10}}>
                <Icon name="shopping-bag" size={20} color="orange" />
                <View
                  style={{
                    width: 15,
                    height: 15,
                    backgroundColor: 'red',
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    left: 10,
                    position: 'absolute',
                  }}>
                  <Text style={{color: 'white', position: 'absolute'}}>
                    {iscount}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
            <View style={{justifyContent: 'center', top: 10}}>
              <Notification name="notifications" size={20} color="orange" />
            </View>
          </View>
        </View>
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: '#F8F8FF',
            top: 18,
          }}>
          <Carousel />
          <View
            style={{
              borderTopWidth: 0.8,
              marginLeft: 15,
              marginRight: 15,
              color: 'grey',
            }}></View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              padding: 15,
            }}>
            <TouchableWithoutFeedback
              onPress={() => handleCategoryPress('Milk')}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  paddingHorizontal: 5,
                  borderRadius: 4,
                  borderColor: isCategoryActive('Milk') ? 'orange' : 'black',
                }}>
                <Text
                  style={{
                    color: 'black',
                    marginRight: 5,
                  }}>
                  Milk
                </Text>
                {isCategoryActive('Milk') && (
                  <Close name="close" size={10} color="black" />
                )}
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => handleCategoryPress('Ghee')}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  paddingHorizontal: 5,
                  borderRadius: 4,
                  borderColor: isCategoryActive('Ghee') ? 'orange' : 'black',
                }}>
                <Text
                  style={{
                    color: 'black',
                    marginRight: 5,
                  }}>
                  Ghee
                </Text>
                {isCategoryActive('Ghee') && (
                  <Close name="close" size={10} color="black" />
                )}
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => handleCategoryPress('Paneer')}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  paddingHorizontal: 5,
                  borderRadius: 4,
                  borderColor: isCategoryActive('Paneer') ? 'orange' : 'black',
                }}>
                <Text
                  style={{
                    color: 'black',
                    marginRight: 5,
                  }}>
                  Paneer
                </Text>
                {isCategoryActive('Paneer') && (
                  <Close name="close" size={10} color="black" />
                )}
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View
            style={{
              borderTopWidth: 0.8, 
              marginLeft: 15,
              marginRight: 15,
              color: 'grey',
            }}></View>
          <CardOfItems selectedCategory={selectedCategory} /> 
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
});

export default Home;
