import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CardOfItems from './CardOfItems'; // Import your CardOfItems component

const SearchItems = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [submitted, setSubmitted] = useState(false); // Track if the submit button was pressed

  const goBack = () => {
    navigation.goBack();
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSubmit = () => {
    if (searchQuery.trim() !== '') {
      setSubmitted(true);
    }
  };

  const handleClear = () => {
    setSearchQuery('');
    setSubmitted(false);
  };

  return (
    <View style={styles.mainContainer}>
      <>
        <View style={{ top: 10, flexDirection: 'row', gap: 50 }}>
          <TouchableWithoutFeedback onPress={goBack}>
            <Image
              source={require('../assets/images/left.png')}
              style={{ width: 30, height: 30, left: 20, top: 4 }}
              tintColor="white"
            />
          </TouchableWithoutFeedback>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 25,
              letterSpacing: 0.8,
              fontWeight: '400',
              left: 68,
            }}>
            Search
          </Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', top: 50 }}>
          <View
            style={{
              backgroundColor: 'white',
              alignSelf: 'center',
              width: 315,
              left: 20,
              borderRadius: 5,
              flexDirection: 'row',
            }}>
            <Image
              source={require('../assets/images/search.png')}
              style={{ width: 30, height: 30, marginTop: 10, left: 10 }}
            />
            <TextInput
              placeholder="Search Products"
              placeholderTextColor="black"
              style={{
                left: 10,
                fontSize: 15,
                fontWeight: '300',
                letterSpacing: 0.1,
                color: 'black',
              }}
              onChangeText={handleSearch}
              value={searchQuery}
            />
            {submitted ? (
              <TouchableWithoutFeedback onPress={handleClear}>
                <Text style={{ color: 'red', position: 'absolute', left: 270, top: 15, fontSize: 15, fontWeight: '300' }}>
                  ✖️
                </Text>
              </TouchableWithoutFeedback>
            ) : (
              <TouchableWithoutFeedback onPress={handleSubmit} disabled={searchQuery.trim() === ''}>
                <Text style={{ color: 'blue', position: 'absolute', left: 250, top: 15, fontSize: 15, fontWeight: '300' }}>
                  SUBMIT
                </Text>
              </TouchableWithoutFeedback>
            )}
          </View>
        </View>
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: '#F8F8FF',
            top: 70,
            borderRadius: 20,
          }}>
          {submitted ? (
            <CardOfItems
              searchQuery={searchQuery}
              isEmpty={!searchQuery.trim()}
            />
          ) : (
            <Text style={styles.noResultsText}>No results to show</Text>
          )}
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
  noResultsText: {
    color: '#333',
    marginTop: '70%',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default SearchItems;
