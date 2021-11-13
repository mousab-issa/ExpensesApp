import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { BottomTabBarButtonProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
// Screens
import Home from '../../screens/home/HomeScreen';
import AddExpenses from '../../screens/add-expenses/AddExpensesScreen';
import StatScreen from '../../screens/stats/StatScreen';
// 
import { theme } from '../../common/theme/theme';
import langauges from '../../common/langauges';
import Constants from '../../common/constants';
import SvgIcon from '../../components/shared/svg-icon/SvgIcon';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

// const TabIcon = ({ name, size }: { name: string; size: number }) => {
//     return <SvgIcon name={name} size={size} />
// }

const TabIcon = ({ name, color }: any) => {
    return <Icon
        color={color}
        name={name}
        size={name === "home" ? Constants.ResponsiveSize.f30 : Constants.ResponsiveSize.f25} />
}



const AddButton = (props: BottomTabBarButtonProps) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            // {...props}
            onPress={() => {
                navigation.navigate('AddExpenses');
            }}
            style={{
                top: -20,
                justifyContent: 'center',
                alignItems: "center",
                height: Constants.ResponsiveSize.f70,
                width: Constants.ResponsiveSize.f70,
                borderRadius: Constants.ResponsiveSize.f70 / 2,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 1.5,
                backgroundColor: theme.Colors.primary
            }}
        >
            <Text style={{ fontSize: 35, color: 'white', fontWeight: 'bold' }}>+</Text>
        </TouchableOpacity >
    )
}

const HomeTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: theme.Colors.primary,
                headerShown: false,
                tabBarStyle: {
                    borderTopWidth: 0,
                    position: "absolute",
                    bottom: Constants.ResponsiveSize.f30,
                    left: Constants.ResponsiveSize.f20,
                    right: Constants.ResponsiveSize.f20,
                    borderRadius: Constants.ResponsiveSize.f30,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 10,
                    elevation: 1.5,
                }
            }}


        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: langauges.home,
                    tabBarIcon: ({ color }) => <TabIcon color={color} name="home" />
                }}
            />
            <Tab.Screen
                name="Add"
                component={AddExpenses}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => <TabIcon color={color} name="plus" />,
                    tabBarButton: (props) => <AddButton {...props} />
                }}
            />
            <Tab.Screen
                name="History"
                component={StatScreen}
                options={{ tabBarLabel: langauges.history, tabBarIcon: ({ color }) => <TabIcon color={color} name="history" /> }}
            />
        </Tab.Navigator>
    );
}

export default HomeTabs;