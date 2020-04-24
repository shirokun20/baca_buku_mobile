import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home, SplashScreen } from '../pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator
            initialRouteName="SplashScreen"
        >
            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default Router
