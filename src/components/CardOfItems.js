import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import Rupee from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CardOfItems = ({selectedCategory, searchQuery, isEmpty}) => {
  const [items, setItems] = useState([
    {
      name: 'Cow Milk',
      imageSource: require('../assets/images/cowmilk.png'),
      brand: 'Radhe Gaupalam',
      quantity: '1 ltr',
      price: 60,
      description: 'Farm Fresh Cow Milk from Desi Cows.',
      isBuyOncePressed: true,
    },
    {
      name: 'Buffalo Milk',
      imageSource: require('../assets/images/buffalomilk.png'),
      brand: 'Radhe Gaupalam',
      quantity: '1 ltr',
      price: 70,
      description: 'Farm Fresh Buffalo Milk from Murrah Buffaloes.',
      isBuyOncePressed: true,
    },
    {
      name: 'Cow Paneer',
      imageSource: require('../assets/images/cowpaneer.png'),
      brand: 'Radhe Gaupalam',
      quantity: '1 kg',
      price: 420,
      description: 'Fresh cow paneer made with the finest ingredients.',
      isBuyOncePressed: true,
    },
    {
      name: 'Buffalo Paneer',
      imageSource: require('../assets/images/buffalopaneer.png'),
      brand: 'Radhe Gaupalam',
      quantity: '1 kg',
      price: 460,
      description:
        'Creamy and Soft paneer made fresh with buffalo milk goodness.',
      isBuyOncePressed: true,
    },
    {
      name: 'Cow Ghee',
      imageSource: require('../assets/images/desiGhee.png'),
      brand: 'Radhe Gaupalam',
      quantity: '1 ltr',
      price: 600,
      description:
        'The production of desi cow ghee is steeped in tradition and craftsmanship. It involves a meticulous process of simmering butter made from desi cow milk to remove water and milk solids, resulting in pure golden ghee.',
      isBuyOncePressed: true,
    },
    {
      name: 'Buffalo Ghee',
      imageSource: require('../assets/images/buffaloghee.png'),
      brand: 'Radhe Gaupalam',
      quantity: '1 ltr',
      price: 1260,
      description:
        'Our ghee is meticulously handcrafted from the milk of Murrah Buffaloes, known for their creamy and high-fat milk. The result is a velvety-smooth texture that melts in your mouth, leaving behind a luscious taste.',
      isBuyOncePressed: true,
    },
  ]);

  const filteredItems = items.filter(item => {
    const name = item.name.toLowerCase();
    const selectedCategoryLower = selectedCategory
      ? selectedCategory.toLowerCase()
      : '';
    const searchQueryLower = searchQuery ? searchQuery.toLowerCase() : '';

    if (isEmpty) {
      return false;
    }

    return (
      (selectedCategoryLower === '' || name.includes(selectedCategoryLower)) &&
      (searchQueryLower === '' || name.includes(searchQueryLower))
    );
  });

  const navigation = useNavigation();

  const navigateToProductDetail = selectedIndex => {
    navigation.navigate('ProductDetails', {items, selectedIndex});
  };

  const toggleBuyOncePressed = index => {
    const updatedItems = [...items];
    updatedItems[index].isBuyOncePressed =
      !updatedItems[index].isBuyOncePressed;
    setItems(updatedItems);
  };

  return (
    <ScrollView alwaysBounceVertical={true}>
      {filteredItems.map((item, index) => (
        <TouchableWithoutFeedback
          key={index}
          onPress={() => navigateToProductDetail(index)}>
          <View style={styles.cardContainer}>
            <Image source={item.imageSource} style={styles.imageCard} />
            <View>
              <Text style={styles.brand}>{item.brand}</Text>
              <Text style={styles.name}>{item.name}</Text>
              <View style={styles.ltrContainer}>
                <Text style={styles.ltrText}>
                  <Image
                    source={require('../assets/icons/veg.png')}
                    style={styles.vegIcon}
                  />
                </Text>
                <Text style={styles.ltrText}>{item.quantity}</Text>
                <View style={styles.detailsContainer}>
                  <View style={styles.priceContainer}>
                    <Rupee name="currency-rupee" color="black" size={15} />
                    <Text style={styles.priceText}>{item.price}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.mainConainerOfButton}>
                
              {item.isBuyOncePressed ? (
                  <View style={styles.bgOfBuyOnce}>
                    <Text
                      style={styles.buyOnceText}
                      onPress={() => toggleBuyOncePressed(index)}>
                      BUY ONCE
                    </Text>
                  </View>
                ) : (
                  <View style={styles.mainConainerOfSign}>
                    <View style={styles.bgOfMinus}>
                      <MaterialCommunityIcons
                        name="minus"
                        color="white"
                        size={20}
                        style={{top: 5}}
                      />
                    </View>
                    <Text style={styles.textOfNumber}>1</Text>
                    <View style={styles.bgOfPlus}>
                      <MaterialCommunityIcons
                        name="plus"
                        color="white"
                        size={20}
                        style={{top: 5}}
                      />
                    </View>
                  </View>
                )}
                <View style={styles.bgOfSubscribe}>
                  <Text style={styles.textOfSubscribe}>SUBSCRIBE</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      ))}
      <View style={styles.footer}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            textAlign: 'center',
            fontWeight: '400',
          }}>
          No More Items
        </Text>
      </View>
      <View style={{height: 200}}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 0.9,
    borderColor: '#15616d',
    padding: 20,
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 15,
    zIndex: 40,
    shadowColor: 'white',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
  },
  imageCard: {
    width: 100,
    height: 100,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#15616d',
  },
  brand: {
    color: 'black',
    fontSize: 8,
    marginLeft: 10,
  },
  noResultsText: {
    color: '#333',
    marginTop: '70%',
    fontSize: 18,
    textAlign: 'center',
  },
  name: {
    color: 'black',
    fontSize: 20,
    top: 5,
    marginLeft: 10,
  },
  detailsContainer: {
    display: 'flex',
    top: 10,
    left: 80,
  },
  ltrText: {
    color: 'black',
    fontSize: 14,
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceContainer: {
    marginLeft: '10%',
    display: 'flex',
    flexDirection: 'row',
    bottom: 10,
  },
  priceText: {
    color: 'black',
    fontSize: 15,
    bottom: 4,
  },

  vegIcon: {
    width: 15,
    height: 15,
    borderColor: 'green',
    borderWidth: 1,
    marginRight: 5,
  },
  footer: {
    color: 'black',
    top: 20,
    textAlign: 'center',
    marginLeft: 70,
    marginRight: 70,
  },
  ltrContainer: {
    flexDirection: 'row',
    top: 10,
  },
  buyOnceText: {
    color: 'black',
    fontWeight: '300',
    padding: 5,
    fontSize: 13,
  },
  mainConainerOfSign: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    width: 73,
  },
  mainConainerOfButton: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    gap: 20,
    left: 15,
  },
  bgOfBuyOnce: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  bgOfMinus: {
    backgroundColor: '#15616d',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  textOfNumber: {
    color: 'black',
    padding: 5,
    fontSize: 15,
    left: 7,
  },
  bgOfPlus: {
    backgroundColor: '#15616d',
    left: 15,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  bgOfSubscribe: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: '#15616d',
  },
  textOfSubscribe: {
    color: 'white',
    fontSize: 14,
    fontWeight: '300',
    padding: 5,
  },
});

export default CardOfItems;
