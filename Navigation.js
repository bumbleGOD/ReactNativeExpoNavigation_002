import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { createStackNavigator } from "@react-navigation/stack";

import Index from "./screens/Index";
import Apply from "./screens/Apply";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";

const Stack = createStackNavigator();

function AuthStack () {
   return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
   return (
      <Tab.Navigator>
         <Tab.Screen
            name="home"
            component={Index}
            options={{
               tabBarLabel: () => null,
               tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home-sharp" size={24} color="black" />
               ),
               tabBarBadge: 3,
               headerShown: false,
            }}
         />
         <Tab.Screen
            name="apply"
            component={Apply}
            options={{
               tabBarLabel: () => null,
               tabBarIcon: ({ color, size }) => (
                  <MaterialIcons name="work" size={24} color="black" />
               ),
               tabBarBadge: 1,
               headerShown: false,
            }}
         />
         <Tab.Screen
            name="auth"
            component={AuthStack}
            options={{
               tabBarLabel: () => null,
               tabBarIcon: ({ color, size }) => (
                  <FontAwesome name="user" size={24} color="black" />
               ),
               headerShown: false,
            }}
         />
      </Tab.Navigator>
   );
}

export default function Navigation() {
   return (
      <NavigationContainer>
         <MyTabs></MyTabs>
      </NavigationContainer>
   );
}
