import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import BookScreen from '../screens/BookScreen';
import DetailScreen from '../screens/DetailScreen';
import WishlistScreen from '../screens/WishlistScreen';
import MybooksScreen from '../screens/MybooksScreen';

import MyTheme from '../Theme';
import { useTheme } from 'native-base';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const Navigation = () =>{
    return(
        <NavigationContainer theme={MyTheme}>
           <MyTabs/>
        </NavigationContainer>
    );
}

const MyTabs = () => {

    return (
      <Tab.Navigator
        initialRouteName="HomeStack"
        screenOptions={{
            headerShown: false
        }}
      >
        <Tab.Screen 
          name="HomeStack" 
          component={HomeStackNavigator}
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={28} />
            ),
          }}
        />
        <Tab.Screen 
          name="WishlistStack" 
          component={WishlistStackScreen} 
          options={{
            title: "Wishlist",
            headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20
            },
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bookmark" color={color} size={28} />
            ),
          }}
        />
          <Tab.Screen 
          name="MybooksStack" 
          component={MybooksStackScreen} 
          options={{
            title: "Mybooks",
            headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20
            },
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="book-open" color={color} size={28} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

const HomeStackNavigator =() =>{
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={BookScreen}
                options={{
                    title: null,
                    headerShadowVisible:false,
                }}
            />
            <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={{
                    title: null,
                    headerShadowVisible:false,
                }}
            />
        </Stack.Navigator>
    );
}

const WishlistStackScreen =() =>{
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Wishlist"
                component={WishlistScreen}
                options={{
                    title: "",
                    headerShadowVisible:false,
                }}
            />
        </Stack.Navigator>
    );
}

const MybooksStackScreen =() =>{
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Mybooks"
                component={MybooksScreen}
                options={{
                    title: "",
                    headerShadowVisible:false,
                }}
            />
        </Stack.Navigator>
    );
}

export default Navigation;