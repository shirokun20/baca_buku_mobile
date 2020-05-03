import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home, SplashScreen, Login, Welcome, Register, Akun } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colorPrimary } from '../assets/colors';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabBottom = () => {
    return (
        <Tab.Navigator
        tabBarOptions={{
            activeTintColor: colorPrimary,
          }}>
            <Tab.Screen
                name="Beranda"
                component={Home}
                options={{
                    tabBarLabel:'Buku',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="book" size={25} color={color}/>
                      )
                }}
            />
            <Tab.Screen
                name="Favorit"
                component={Home}
                options={{
                    tabBarLabel:'Favorit',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="heart" size={25} color={color}/>
                      )
                }}
            />
            <Tab.Screen
                name="Akun"
                component={Akun}
                options={{
                    tabBarLabel:'Buku',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="account" size={25} color={color}/>
                      )
                }}
            />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator
            initialRouteName="SplashScreen"
        >
            <Stack.Screen
                name="Home"
                component={tabBottom}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default Router
