import React, {useState,useEffect,useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
  BackHandler,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Rupee from 'react-native-vector-icons/MaterialIcons';
import styles from '../constants/productDetailsCss';
import {BottomSheetModalProvider, BottomSheetModal} from '@gorhom/bottom-sheet';
import BottomSheet from '../components/productBottomSheet';

const ProductDetails = ({route}) => {
  const {items, selectedIndex} = route.params;
  const selectedItem = items[selectedIndex];
  const {name, brand, quantity, price, imageSource, description} = selectedItem;
  const bottomSheetModalRef = useRef(null);
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);

  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack(); 
  };

  const showBottomSheet = () => {
    if (bottomSheetModalRef.current) {
      bottomSheetModalRef.current.present();
      setBottomSheetOpen(true);
    }
  };

  const hideBottomSheet = () => {
    if (bottomSheetModalRef.current) {
      bottomSheetModalRef.current.dismiss();
      setBottomSheetOpen(false);
    }
  };

  const handleBackPress = () => {
    if (isBottomSheetOpen) {
      hideBottomSheet();
      return true; 
    }
    return false;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [isBottomSheetOpen]); 

  const [activeSection, setActiveSection] = useState('delivery');

  const toggleSection = section => {
    setActiveSection(section);
  };

  return (
    <>
      <BottomSheetModalProvider enabled={false}>
      <View style={styles.mainContainer}>
        <View style={{top: 15, flexDirection: 'row', gap: 35}}>
          <TouchableWithoutFeedback onPress={goBack}>
            <Image
              source={require('../assets/images/left.png')}
              style={{width: 30, height: 30, marginLeft: 10}}
              tintColor="white"
            />
          </TouchableWithoutFeedback>
          <Text style={styles.productDetails}>Product Details</Text>
        </View>
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: '#F8F8F8',
            top: 30,
          }}>
          <Image source={imageSource} style={styles.imageSource} />
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.brand}>{brand}</Text>
          <View style={styles.ltrContainer}>
            <Image
              source={require('../assets/icons/veg.png')}
              style={styles.vegIcon}
            />
            <Text style={styles.ltrText}>{quantity}</Text>
            <View style={{flexDirection: 'row', left: '60%'}}>
              <Rupee name="currency-rupee" color="#228B22" size={20} />
              <Text
                style={{
                  color: '#228B22',
                  fontSize: 20,
                  bottom: 4,
                  fontWeight: '800',
                }}>
                {price}
              </Text>
            </View>
          </View>
          <View style={styles.containerOfDetails}>
            <TouchableWithoutFeedback
              onPress={() => toggleSection('description')}>
              <View
                style={[
                  styles.backgrounOfDescription,
                  {
                    backgroundColor:
                      activeSection === 'description' ? '#15616d' : '#c0c0c0',
                  },
                ]}>
                <Text style={styles.textOfDescription}>Description</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => toggleSection('delivery')}>
              <View
                style={[
                  styles.backgrounOfDescription,
                  {
                    backgroundColor:
                      activeSection === 'delivery' ? '#15616d' : '#c0c0c0',
                  },
                ]}>
                <Text style={styles.textOfDescription}>Delivery</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          {activeSection === 'description' ? (
            <View style={styles.bgCard}>
              <Text style={{color: 'black', letterSpacing: 0.5}}>
                {description}
              </Text>
            </View>
          ) : (
            <View style={styles.bgCard}>
              <Text
                style={styles.textTodayOrder}>
                 Order by today till{' '}
                <Text style={{color: 'blue'}}>10:00 PM</Text> & get the delivery{' '}
                <Text style={{color: 'blue'}}>'Next Day'.</Text>
              </Text>
            </View>
          )}

          {activeSection === 'description' ? null : (
            <>
              <Text
                style={styles.textSelectFrequency}>
                Select Frequency
              </Text>
              <View style={styles.bgCard}>
                <View style={{display: 'flex', flexDirection: 'row', gap: 40}}>
                  <View
                    style={styles.bgOftext}>
                    <Text style={{color: 'black', margin: 5}} onPress={showBottomSheet}>Everyday</Text>
                  </View>
                  <View
                   style={styles.bgOftext}>
                    <Text style={{color: 'black', margin: 5}}>On Interval</Text>
                  </View>
                  <View
                   style={styles.bgOftext}>
                    <Text style={{color: 'black', margin: 5}}>Custom</Text>
                  </View>
                </View>
                <View
                  style={{borderTopWidth: 0.5, borderColor: 'black', top: 8}}
                />
                <View
                  style={styles.bgOfQty}>
                  <Text style={{color: 'black', top: 10, fontSize: 20}}>
                    Qty : 1
                  </Text>
                  <Image
                    source={require('../assets/images/draw.png')}
                    style={{width: 20, height: 20, top: 15, left: 5}}
                  />
                </View>
              </View>

              <Text style={styles.textOfDeliveryAddress}>Delivery Address</Text>
              <View style={styles.bgCard}>
                <Text style={{color: 'black', fontWeight: '600'}}>Home</Text>
                <Text style={{color: 'black', top: 5, fontWeight: '300'}}>
                  207 Navbharat apartment, 2nd floor, opposite Raj shree garden,
                  near Amar vihar police chowki, Dayal Bagh p-2, Agra, 282005.
                </Text>
              </View>
              <View
                style={styles.bgOfSubscribe}>
                <Text style={{color: 'white', textAlign: 'center', margin: 15}}>
                  SUBSCRIBE
                </Text>
              </View>
            </>
          )}
          <View style={{marginTop: 60}} />
        </ScrollView>
      </View>
      {isBottomSheetOpen && (
          <TouchableOpacity
            style={styles.overlay}
            activeOpacity={1}
            onPress={hideBottomSheet}
          />
        )}

        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={['30%']}
          backgroundStyle={{ borderRadius: 20,backgroundColor:'#f8f8ff' }}
          onDismiss={hideBottomSheet}>
          <View style={{ flex: 1 }}>
            <BottomSheet />
          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </>
  );
};
export default ProductDetails;
