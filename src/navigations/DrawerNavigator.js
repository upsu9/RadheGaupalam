import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { COLORS, ROUTES } from '../constants';
import BottomTabNavigator from './BottomTabNavigator';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Subscription from '../screens/Home/Subscription';
import CustomDrawer from '../components/CustomDrawer';
import CalendarScreen from '../screens/Home/Calendar';
import Wallet from '../screens/Home/Wallet';
import Profile from '../screens/Home/Profile';
import Home from '../screens/Home/home';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      // initialRouteName={ROUTES.HOME_DRAWER}
      backBehavior="initialRoute"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.white,
        drawerActiveTintColor: '#15616d',
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}
    >
      <Drawer.Screen
        name={ROUTES.SUBSCRIPTION_DRAWER}
        component={Subscription}
        options={{
          title: 'Subscription',
          drawerIcon: ({ focused, color, size }) => (
            <AntDesign size={size} color={color} name="carryout" />
          ),
        }}
      />

      <Drawer.Screen
        name={ROUTES.CALENDAR_DRAWER}
        component={CalendarScreen}
        options={{
          title: 'Calendar',
          drawerIcon: ({ focused, color, size }) => (
            <AntDesign size={size} color={color} name="calendar" />
          ),
        }}
      />

      <Drawer.Screen
        name={ROUTES.HOME_DRAWER}
        component={Home}
        options={{
          title: 'Home',
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons size={size} color={color} name="home" />
          ),
        }}
      />

      <Drawer.Screen
        name={ROUTES.WALLET_DRAWER}
        component={Wallet}
        options={{
          title: 'Wallet',
          drawerIcon: ({ focused, color, size }) => (
            <AntDesign size={size} color={color} name="wallet" />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.PROFILE_DRAWER}
        component={Profile}
        options={{
          title: 'Profile',
          drawerIcon: ({ focused, color, size }) => (
            <AntDesign size={size} color={color} name="user" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
