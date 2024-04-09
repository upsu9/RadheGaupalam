import React, { useEffect, useRef, useState } from 'react';
import { View, FlatList, Image, Dimensions } from 'react-native';

const Carousel = () => {
  const screenWidth = Dimensions.get('window').width;
  const flatlistRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      
      const nextIndex = (activeIndex + 1) % CarouselData.length;
      flatlistRef.current.scrollToIndex({
        index: nextIndex,
        animated: true,
      });

      // Update the activeIndex
      setActiveIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const getItemLayout = (_, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });

  const CarouselData = [
    {
      id: '01',
      name: 'cowmilk',
      image: require('../assets/images/cowmilk.png'),
    },
    {
      id: '02',
      image: require('../assets/images/cowpaneer.png'),
    },
    {
      id: '03',
      image: require('../assets/images/desiGhee.png'),
    },
    {
      id: '04',
      image: require('../assets/images/buffalomilk.png'),
    },
    {
      id: '05',
      image: require('../assets/images/buffalopaneer.png'),
    },
    {
      id: '06',
      image: require('../assets/images/buffaloghee.png'),
    },
  ];

  
  const concatenatedData = [
    ...CarouselData,
    ...CarouselData.map(item => ({ ...item, id: `second_${item.id}` })),
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <Image
          source={item.image}
          style={{
            height: 150,
            width: screenWidth,
            resizeMode: 'contain',
            borderWidth: 5,
            borderRadius: 20,
            borderColor: '#F8F8FF',
            marginTop:10
          }}
        />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={concatenatedData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        ref={flatlistRef}
        getItemLayout={getItemLayout}
        pagingEnabled={true}
        onMomentumScrollEnd={(event) => {
          const scrollPosition = event.nativeEvent.contentOffset.x;
          const index = Math.floor(scrollPosition / screenWidth) % CarouselData.length;
          if (index !== activeIndex) {
            setActiveIndex(index);
          }
        }}
        initialScrollIndex={CarouselData.length}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 5,
          justifyContent: 'center',
          marginTop: 10,
        }}
      >
      </View>
    </View>
  );
};

export default Carousel;
