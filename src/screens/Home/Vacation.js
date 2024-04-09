import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomSheetModalProvider, BottomSheetModal } from '@gorhom/bottom-sheet';
import BottomSheet from '../../components/bottomSheet';

const Vacation = () => {
  const navigation = useNavigation();

  const bottomSheetModalRef = useRef(null);
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);

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

  const goBack = () => {
    navigation.goBack(); 
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

  return (
    <>
      <BottomSheetModalProvider enabled={false}>
        <View style={styles.mainContainer}>
          <View style={{ top: 20, flexDirection: 'row', gap: 35 }}>
            <TouchableWithoutFeedback onPress={goBack}>
              <Image
                source={require('../../assets/images/left.png')}
                style={{ width: 30, height: 30, marginLeft: 10, bottom: 5 }}
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
                marginLeft: 70,
                bottom: 5,
              }}>
              Vacation
            </Text>
            <TouchableWithoutFeedback >
              <Image
                source={require('../../assets/images/i.png')}
                style={{ width: 20, height: 20, marginLeft: 60, bottom: 2 }}
              />
            </TouchableWithoutFeedback>
          </View>
          <ScrollView
            style={{
              flex: 1,
              backgroundColor: '#E5E5E5',
              top: 30,
            }}>
            <Image
              source={require('../../assets/images/Vacation.png')}
              style={{
                width: 300,
                height: 300,
                marginTop: 90,
                alignSelf: 'center',
                borderRadius: 0,
              }}
            />
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontWeight: '600',
                fontSize: 20,
              }}>
              You have no vacation added
            </Text>
            <TouchableWithoutFeedback onPress={showBottomSheet}>
              <View
                style={{
                  backgroundColor: '#15616d',
                  height: 50,
                  width: 320,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  marginTop: 115,
                  borderRadius: 5,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 20,
                    fontWeight: '300',
                  }}>
                  Add Vacation
                </Text>
              </View>
            </TouchableWithoutFeedback>
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
          backgroundStyle={{ borderRadius: 30 }}
          onDismiss={hideBottomSheet}>
          <View style={{ flex: 1 }}>
            <BottomSheet />
          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#15616d',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Vacation;
