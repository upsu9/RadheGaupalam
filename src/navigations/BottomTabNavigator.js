import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import Svg, {Path} from 'react-native-svg';
import {COLORS} from '../constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Subscription from '../screens/Home/Subscription';
import CalendarScreen from '../screens/Home/Calendar';
import Home from '../screens/Home/home';
import Wallet from '../screens/Home/Wallet';
import Profile from '../screens/Home/Profile';
import ShoppingBag from '../components/shoppingBag';

const Tab = createBottomTabNavigator();

const CustomTabBar = props => {
  return (
    <View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 30,
          backgroundColor: COLORS.gray,
        }}
      />
      <BottomTabBar {...props.props} />
    </View>
  );
};

const CustomTabBarButton = ({containerStyle, isFloat, children, onPress}) => {
  if (isFloat) {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{backgroundColor: '#d1d3e0'}}>
          <Svg width={90} height={61} viewBox="0 0 90 61">
            <Path
              d="M0 0a38.742 38.742 0 0113 7c5.313 4.4 6.7 8.593 12 13 5.993 4.98 12.987 8 20 8s14.007-3.02 20-8c5.3-4.408 6.687-8.6 12-13a38.742 38.742 0 0113-7v61H0V0z"
              fill="#F8F8F8"
            />
          </Svg>
        </View>
        <TouchableWithoutFeedback onPress={onPress}>
          <View
            style={{
              position: 'absolute',
              top: -38,
              alignItems: 'center',
              justifyContent: 'center',
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: '#15616d',
            }}>
            {children}
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  } else {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View
          style={{
            flex: 1,
            height: 50,
            backgroundColor: '#F8F8F8',
            ...containerStyle,
          }}>
          {children}
        </View>
      </TouchableWithoutFeedback>
    );
  }
};

const Tabs = () => {
  return (
    <KeyboardAvoidingView behavior="none" style={styles.container}>
      <Tab.Navigator
        initialRouteName="Home"
        backBehavior="initialRoute"
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarShowLabel: true,
          tabBarInactiveTintColor: 'black',
          tabBarActiveTintColor: '#15616d',
        })}
        tabBar={props => <CustomTabBar props={props}></CustomTabBar>}>
        <Tab.Screen
          name="Subscription"
          component={Subscription}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <AntDesign
                size={22}
                name="carryout"
                color={focused ? '#15616d' : 'black'}
              />
            ),
            tabBarButton: props => (
              <CustomTabBarButton
                {...props}
                containerStyle={{marginRight: 0}}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Calendar"
          component={CalendarScreen}
          options={{
            tabBarShowLabel: true,
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <AntDesign
                size={22}
                name="calendar"
                color={focused ? '#15616d' : 'black'}
              />
            ),
            tabBarButton: props => (
              <CustomTabBarButton
                {...props}
                containerStyle={{marginRight: 10}}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <MaterialCommunityIcons
                size={40}
                color="white"
                name="home"
                style={{top: 5}}
              />
            ),
            tabBarButton: props => (
              <CustomTabBarButton {...props} isFloat={true} />
            ),
            tabBarLabel: '',
          }}
        />
        <Tab.Screen
          name="Wallet"
          component={Wallet}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <AntDesign
                size={22}
                name="wallet"
                color={focused ? '#15616d' : 'black'}
              />
            ),
            tabBarButton: props => (
              <CustomTabBarButton
                {...props}
                containerStyle={{marginLeft: 10}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <AntDesign
                size={22}
                name="user"
                color={focused ? '#15616d' : 'black'}
              />
            ),
            tabBarButton: props => (
              <CustomTabBarButton {...props} containerStyle={{marginLeft: 0}} />
            ),
          }}
        />

      </Tab.Navigator>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
});

export default Tabs;
