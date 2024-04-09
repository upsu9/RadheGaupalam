import {
  
    StyleSheet,
  } from 'react-native';


  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#15616d',
    },
    productDetails: {
      textAlign: 'center',
      color: 'white',
      fontSize: 20,
      letterSpacing: 0.5,
      fontWeight: '400',
      marginLeft: 40,
    },
    vegIcon: {
      width: 15,
      height: 15,
      borderColor: 'green',
      borderWidth: 1,
      top: 2,
    },
    bgOftext:{
      borderWidth: 1,
      borderColor: '#333',
      borderRadius: 5,
    },
    bgOfQty:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    ltrText: {
      color: 'black',
      fontSize: 14,
      left: 8,
      alignItems: 'center',
      fontWeight: '400',
    },
    textTodayOrder:{
      color: 'black',
      letterSpacing: 0.5,
      fontWeight: '300',
      fontSize: 15,
    },
    brand: {
      color: 'black',
      marginTop: 3,
      left: 20,
      fontSize: 15,
      letterSpacing: 0.4,
      fontWeight: '300',
    },
    imageSource: {
      width: 200,
      height: 200,
      alignSelf: 'center',
      top: 10,
      borderRadius: 10,
    },
    name: {
      color: 'black',
      marginTop: 40,
      left: 20,
      fontSize: 20,
      letterSpacing: 0.2,
      fontWeight: '400',
    },
    ltrContainer: {
      left: 20,
      marginTop: 2,
      display: 'flex',
      flexDirection: 'row',
    },
    containerOfDetails: {
      marginTop: 20,
      backgroundColor: '#c0c0c0',
      width: '100%',
      height: 60,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    bgOfSubscribe:{
      backgroundColor: '#800080',
      top: 20,
      alignSelf: 'center',
      width: '95%',
      borderRadius: 5,
    },
    backgrounOfDescription: {
      backgroundColor: '#15616d',
      height: 50,
      borderRadius: 10,
      top: 5,
      width: '45%',
    },
    textOfDescription: {
      color: 'white',
      alignSelf: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      marginTop: 12,
      letterSpacing: 0.2,
      fontSize: 18,
    },
    textSelectFrequency:{
      color: 'black',
      left: 10,
      marginTop: 20,
      fontSize: 20,
      fontWeight: '300',
    },
    bgCard: {
      marginTop: 15,
      width: 330,
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 9,
        height: 1,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 2,
      alignSelf: 'center',
    },
    textOfDeliveryAddress: {
      color: 'black',
      left: 10,
      marginTop: 20,
      fontSize: 20,
      fontWeight: '300',
    },
  });

  export default styles;