import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const BottomSheet = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const formatDateString = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const handleStartDateChange = (event, selectedDate) => {
    if (event.type === 'set') {
      setStartDate(selectedDate);
      setShowStartDatePicker(false);
    } else {
      setShowStartDatePicker(false);
    }
  };

  const handleEndDateChange = (event, selectedDate) => {
    if (event.type === 'set') {
      setEndDate(selectedDate);
      setShowEndDatePicker(false);
    } else {
      setShowEndDatePicker(false);
    }
  };

  const showStartPicker = () => {
    setShowStartDatePicker(true);
  };

  const showEndPicker = () => {
    setShowEndDatePicker(true);
  };

  return (
    <>
      <View style={styles.bottomSheetContainer}>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
        <TouchableWithoutFeedback onPress={showStartPicker}>
          <View style={styles.datePickerButton}>
            <View>
              <Text style={{ fontSize: 20, fontWeight: '500', color: 'black' }}>Starts On</Text>
              <Text style={{ color: 'blue', top: 15, letterSpacing: 0.5,right:10 }}>{formatDateString(startDate)}</Text>
            </View>
            <Image source={require('../assets/images/rightarrow.png')} style={{ width: 20, height: 20, top: 40,left:30 }} />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={showEndPicker}>
          <View style={styles.datePickerButton}>
            <View>
              <Text style={{ fontSize: 18, color: 'black', fontWeight: '500',left:10 }}>Ends On</Text>
              <Text style={{ color: 'blue', top: 15, letterSpacing: 0.5, left:10 }}>{endDate ? formatDateString(endDate) : 'Optional'}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        </View>
        <TouchableWithoutFeedback onPress={showStartPicker}>
          <View style={{ backgroundColor: 'purple', height: 50, width: 320, justifyContent: 'center', alignSelf: 'center', marginTop: 30, borderRadius: 5 }}>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, fontWeight: '300', letterSpacing: 0.5 }}>Add Vacation</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      {showStartDatePicker && (
        <DateTimePicker
          value={startDate}
          mode="date"
          display="spinner"
          onChange={handleStartDateChange}
        />
      )}

      {showEndDatePicker && (
        <DateTimePicker
          value={endDate || new Date()}
          mode="date"
          display="spinner"
          onChange={handleEndDateChange}
        />
      )}
    </>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    paddingHorizontal: 0,
    paddingTop: 20,
  },
  datePickerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
