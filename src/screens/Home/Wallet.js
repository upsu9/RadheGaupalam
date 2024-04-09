import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Rupee from 'react-native-vector-icons/MaterialIcons';
import styles from '../../constants/walletCss';

const Wallet = () => {

  return (
    <KeyboardAvoidingView 
    style={{ flex: 1 }}
    behavior='padding'>
    <View style={styles.mainContainer}>
      <Text style={styles.myWallet}>My Wallet</Text>
      <View style={styles.innerContainer}>
        <ScrollView>
          <View>
            <View style={styles.ticketCard}>
              <View style={styles.firstDot} />
              <View style={styles.secondDot} />
              <View style={{marginTop: 35, flexDirection: 'row'}}>
                <Image
                  source={require('../../assets/images/purse.png')}
                  style={{width: 20, height: 20, marginLeft: 30}}
                />
                <Text style={styles.walletBalanceText}>Wallet Balance</Text>
                <Rupee
                  name="currency-rupee"
                  color="white"
                  size={20}
                  style={{justifyContent: 'flex-end', marginLeft: 70}}
                />
                <Text
                  style={{color: 'white', fontSize: 20, bottom: 5, left: 5}}>
                  0
                </Text>
              </View>
            </View>
            <View style={styles.containerOfRecharge}>
              <View style={styles.backgrounOfOnlineRecharge}>
                <Text style={styles.textOfOnlineRecharge}>Online Recharge</Text>
              </View>
              <Text
                style={{
                  color: 'black',
                  alignSelf: 'center',
                  letterSpacing: 0.2,
                }}>
                Cash Recharge
              </Text>
            </View>
            <View style={styles.mainContainerOfAddMoney}>
              <Text style={styles.addMoneyText}>ADD MONEY</Text>
              <View style={{flexDirection: 'row'}}>
                <Rupee
                  name="currency-rupee"
                  color="black"
                  size={20}
                  style={{
                    justifyContent: 'flex-end',
                    marginLeft: '30%',
                    marginTop: 40,
                  }}
                />
                <Text
                  style={styles.textOfZero}>
                  0
                </Text>
                <TouchableOpacity disabled={true}>
                  <View style={styles.circle}>
                    <Text style={styles.cancelText}>X</Text>
                  </View>
                </TouchableOpacity>
                <Text
                  style={styles.textOfAdd}>
                  Add
                </Text>
              </View>
              <View style={styles.borderLine}></View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  display: 'flex',
                  marginTop: 40,
                  gap: 15,
                }}
                disabled={true}>
                <View style={styles.backgrounOfAmounts}>
                  <Rupee
                    name="currency-rupee"
                    color="black"
                    size={20}
                    style={{
                      justifyContent: 'flex-end',
                      // marginLeft: '10%',
                    }}
                  />
                  <Text style={{color: 'black'}}>500</Text>
                </View>
                <View style={styles.backgrounOfAmounts}>
                  <Rupee
                    name="currency-rupee"
                    color="black"
                    size={20}
                    style={{
                      justifyContent: 'flex-end',
                      // marginLeft: '10%',
                    }}
                  />
                  <Text style={{color: 'black'}}>1500</Text>
                </View>
                <View style={styles.backgrounOfAmounts}>
                  <Rupee
                    name="currency-rupee"
                    color="black"
                    size={20}
                    style={{
                      justifyContent: 'flex-end',
                    }}
                  />
                  <Text style={{color: 'black'}}>2500</Text>
                </View>
                <View style={styles.backgrounOfAmounts}>
                  <Rupee
                    name="currency-rupee"
                    color="black"
                    size={20}
                    style={{
                      justifyContent: 'flex-end',
                      // marginLeft: '10%',
                    }}
                  />
                  <Text style={{color: 'black'}}>3500</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.backgrounOfTextInput}>
                <TextInput style={{color: 'black'}}></TextInput>
              </View>
            </View>
            <View style={styles.backgrounOfAdd}>
              <Text
                style={{
                  color: 'black',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                Add
              </Text>
            </View>
            <View style={styles.borderOfTranscationHistory}>
              <Image
                source={require('../../assets/images/transaction.png')}
                style={{width: 30, height: 30, margin: 10, left: 10}}
              />
              <Text style={styles.tarnscationHistory}>Transcation History</Text>
              <Image
                source={require('../../assets/images/right.png')}
                style={{width: 20, height: 20, left: 86, marginTop: 15}}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
    </KeyboardAvoidingView>
  );
};


export default Wallet;
