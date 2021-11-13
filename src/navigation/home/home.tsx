import React, { useEffect } from 'react'
import { Alert } from 'react-native'
// Stacks
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NetInfo from "@react-native-community/netinfo";
// Screens
import HomeTabs from './homeTabs';
import AddExpenses from '../../screens/add-expenses/AddExpensesScreen';
// Redux 
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
//common
import { getAsyncItem } from '../../helpers/common';

const moment = require('moment');

const Stack = createNativeStackNavigator();


export const ScreenNames = {
  Home: "Home",
  Expenses: "AddExpenses"
}

const HomeStack = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {

  }, [dispatch]);


  // Just in case we wanted to add screens outside of the tabs
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'green' },
      }}
    >
      <Stack.Screen name="HomeStack" component={HomeTabs} options={{ headerShown: false }} />
      <Stack.Screen name="AddExpenses" component={AddExpenses} options={{ headerShown: false, animation: 'slide_from_bottom' }} />
    </Stack.Navigator>
  )
}

export default HomeStack;