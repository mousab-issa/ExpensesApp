import React, { useEffect } from 'react'
import { Alert } from 'react-native'
// Stacks
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NetInfo from "@react-native-community/netinfo";
// Screens
import HomeTabs from './homeTabs';
import AddExpenses from '../../screens/add-expenses/AddExpensesScreen';
import Login from '../../screens/login/login';
import Splash from '../../screens/splash/splash';
// Redux 
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
//common
import { getAsyncItem } from '../../helpers/common';
import { CheckTokenValid } from '../../redux/auth/asyncActions';
import { clearState } from '../../redux/auth/auth';

const Stack = createNativeStackNavigator();


export const ScreenNames = {
  Home: "Home",
  Expenses: "AddExpenses"
}

const HomeStack = () => {
  const dispatch = useAppDispatch();
  const {
    isInitiLoading,
    userToken,
  } = useAppSelector(state => state.authSlice);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected) {
        checkIsLogedIn();
      } else {
        Alert.alert(
          "Network Error",
          "Check your network",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
          ]
        );
      }
    });
    return unsubscribe;
  }, [dispatch]);

  // Check for valid tokens
  const checkIsLogedIn = async () => {
    try {
      const Token = await getAsyncItem('USER_TOKEN');
      if (Token) return dispatch(CheckTokenValid(Token));
      return dispatch(clearState());
    } catch (e) { }
  }


  // Just in case we wanted to add screens outside of the tabs
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'green' },
      }}
    >
      {isInitiLoading && <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />}
      {userToken === undefined ?
        (
          <>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={Login} options={{ headerShown: false }} />
          </>
        )
        :
        (
          <>
            <Stack.Screen name="HomeStack" component={HomeTabs} options={{ headerShown: false }} />
            <Stack.Screen name="AddExpenses" component={AddExpenses} options={{ headerShown: false, animation: 'slide_from_bottom' }} />
          </>
        )
      }
    </Stack.Navigator>
  )
}

export default HomeStack;