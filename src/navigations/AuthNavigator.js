import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {COLORS, ROUTES} from '../constants';
import Login from '../screens/auth/Login';
import ForgotPassword from '../screens/auth/ForgotPassword';
import Signup from '../screens/auth/Signup';
import WelcomeScreen from '../screens/auth/Welcome';
import Tabs from './BottomTabNavigator';
import Home from '../screens/Home/home';
import Vacation from '../screens/Home/Vacation';
import MyAddress from '../components/MyAddress';
import SearchItems from '../components/searchItems';
import ShoppingBag from '../components/shoppingBag';
import ProductDetails from '../components/productDetails';
import OrderHistory from '../components/OrderHistory';
import DeliveryPreference from '../components/DeliveryPreference';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName={ROUTES.WELCOME} screenOptions={{}}>
      <Stack.Screen
        name={ROUTES.FORGOT_PASSWORD}
        component={ForgotPassword}
        options={({route}) => ({
          headerTintColor: COLORS.white,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          title: route.params.userId,
        })}
      />
      <Stack.Screen
        name={ROUTES.WELCOME}
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTES.SIGNUP}
        component={Signup}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Vacation"
        component={Vacation}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="MyAddress"
        component={MyAddress}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="SearchItems"
        component={SearchItems}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ShoppingBag"
        component={ShoppingBag}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          title: 'Product Detail',
          headerShown: false, 
        }}
      />
      <Stack.Screen
      name='OrderHistory'
      component={OrderHistory}
      options={{
        title: 'Order History',
        headerShown:false ,
      }}
      />
       <Stack.Screen
      name='DeliveryPreference'
      component={DeliveryPreference}
      options={{
        title: 'Order History',
        headerShown:false ,
      }}
      />


    </Stack.Navigator>
  );
}

export default AuthNavigator;
