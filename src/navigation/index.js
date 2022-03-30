import React, {useState} from 'react';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { Divider, Image, Box, Text, Pressable } from 'native-base';

import BookScreen from '../screens/BookScreen';
import DetailScreen from '../screens/DetailScreen';
import WishlistScreen from '../screens/WishlistScreen';
import MybooksScreen from '../screens/MybooksScreen';

import MyTheme from '../Theme';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


const Navigation = () =>{
    return(
        <NavigationContainer theme={MyTheme}>
           <MyDrawer/>
        </NavigationContainer>
    );
}

const CustomDrawerContent = (props) => {

  return (
    <DrawerContentScrollView {...props}>
      <Box style={{paddingLeft:16,paddingTop:35}}>
      <Image
        source={require("../images/img_avatar.png")}
        alt='avater'
      />
      <Text style={{fontSize:24,fontWeight:'bold',paddingTop:20}}>May</Text>
      </Box>
      <Divider my="2"/>
      <DrawerItemList {...props} />
      <DrawerItem 
        label="Account"
        labelStyle={ {fontSize: 16} }
        icon={({ color }) => (
          <MaterialCommunityIcons name="account-circle" color={color} size={26} />
        )}
        onPress={()=>alert('Hi May')}
      />
      <DrawerItem 
        label="Setting"
        labelStyle={ {fontSize: 16} }
        icon={({ color }) => (
          <MaterialCommunityIcons name="cog" color={color} size={26} />
        )}
        onPress={()=>alert('Here will be setting someday')}
      />
    </DrawerContentScrollView>
  );
}

const MyDrawer = () => {
  const {colors} = useTheme();

  return (
    <Drawer.Navigator 
      initialRouteName="Home"
      screenOptions={{
        drawerActiveTintColor:colors.primary700,
        drawerStyle: { width: 260 },
        drawerLabelStyle: { fontSize: 16 },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen 
        name="HomeDeawer" 
        component={MyTabs} 
        options={{
          headerShown: false,
          title: "Home",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
    </Drawer.Navigator>
  );  
}

const MyTabs = () => {
  const {colors} = useTheme();

    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor:colors.primary700,
        }}
      >
        <Tab.Screen 
          name="HomeTab" 
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

const HomeStackNavigator =({navigation}) =>{
  const {colors} = useTheme();
  const[toggle,setToggle] = useState(true);
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={BookScreen}
                options={{
                    title: null,
                    headerShadowVisible:false,
                    headerLeft: () => (
                        <MaterialCommunityIcons
                          name={'menu'}
                          size={28}
                          onPress={() => navigation.openDrawer()}
                        />
                      ),
                    headerRight: () => (
                        <MaterialCommunityIcons
                          name={'magnify'}
                          size={28}
                          // style={{ marginRight: 8 }}
                        />
                      )
                }}
            />
            <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={{
                    title: null,
                    headerShadowVisible:false,
                    headerLeft: () => (
                      <MaterialCommunityIcons
                        name={'chevron-left'}
                        size={28}
                        onPress={() => navigation.goBack()}
                      />
                    ),
                    headerRight: () => (
                      <Pressable onPress={()=>setToggle(!toggle)}>
                        {toggle?
                        <MaterialCommunityIcons
                          name={'bookmark-outline'}
                          size={28}
                          color={'black'}
                          />:<MaterialCommunityIcons
                          name={'bookmark'}
                          size={28}
                          color={colors.primary700}
                          />
                        }
                        
                      </Pressable>
                    )
                }}
            />
        </Stack.Navigator>
    );
}

const WishlistStackScreen =({navigation}) =>{
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Wishlist"
                component={WishlistScreen}
                options={{
                    title: "",
                    headerShadowVisible:false,
                    headerLeft: () => (
                      <MaterialCommunityIcons
                        name={'menu'}
                        size={28}
                        onPress={() => navigation.openDrawer()}
                      />
                    ),
                  headerRight: () => (
                      <MaterialCommunityIcons
                        name={'magnify'}
                        size={28}
                        // style={{ marginRight: 8 }}
                      />
                  )
                }}
            />
        </Stack.Navigator>
    );
}

const MybooksStackScreen =({navigation}) =>{
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Mybooks"
                component={MybooksScreen}
                options={{
                    title: "",
                    headerShadowVisible:false,
                    headerLeft: () => (
                      <MaterialCommunityIcons
                        name={'menu'}
                        size={28}
                        onPress={() => navigation.openDrawer()}
                      />
                        ),
                      headerRight: () => (
                      <MaterialCommunityIcons
                        name={'magnify'}
                        size={28}
                        // style={{ marginRight: 8 }}
                      />)
                }}
            />
        </Stack.Navigator>
    );
}

export default Navigation;