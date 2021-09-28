import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Login from './src/Pages/Login';
import Home from './src/Pages/Home';
import Movie from './src/Pages/Movie';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator 
            initialRouteName="Home"
            activeColor={'#fff'}
            barStyle={{backgroundColor: '#141414'}}
            shifting={false}>
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Início',
                    tabBarIcon: ({color}) => {
                        return <Icon name="home" color={color} size={26}/>
                    }
                }}
            />
            <Tab.Screen 
                name="Buscar"
                component={Home}
                options={{
                    tabBarLabel: 'Buscar',
                    tabBarIcon: ({color}) => {
                        return <Icon name="magnify" color={color} size={26}/>
                    }
                }}
            />
            <Tab.Screen 
                name="Em breve"
                component={Home}
                options={{
                    tabBarLabel: 'Em breve',
                    tabBarIcon: ({color}) => {
                        return <Icon name="play-speed" color={color} size={26}/>
                    }
                }}
            />
            <Tab.Screen 
                name="Downloads"
                component={Home}
                options={{
                    tabBarLabel: 'Downloads',
                    tabBarIcon: ({color}) => {
                        return <Icon name="download" color={color} size={26}/>
                    }
                }}
            />
            <Tab.Screen 
                name="Mais"
                component={Home}
                options={{
                    tabBarLabel: 'Menu',
                    tabBarIcon: ({color}) => {
                        return <Icon name="menu" color={color} size={26}/>
                    }
                }}
            />
                
        </Tab.Navigator>
    )
}

const Routes = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" options={{ headerShown: false }}>
                <Stack.Screen options={{ headerShown: false }} name="Login" component={Login}/>
                <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeTabs}/>
                <Stack.Screen options={{ headerShown: false }} name="Movie" component={Movie}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;