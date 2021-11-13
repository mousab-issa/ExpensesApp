import React from "react";
import Toast from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';
//Stacks
import HomeStack from './home/home';

const Navigator = () => {
    return (
        <NavigationContainer>
            <HomeStack />
            <Toast />
        </NavigationContainer>
    );
}
export default Navigator;