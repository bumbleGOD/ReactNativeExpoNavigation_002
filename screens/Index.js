import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { logoSena } from "../assets/ExporImages";
import GlobalStyles from "../assets/styles/GlobalStyles";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";

export const Index = () => {
   return (
      <View style={GlobalStyles.container}>
         <View style={GlobalStyles.navbar}>
            <Entypo
               style={GlobalStyles.iconNavbar}
               name="menu"
               size={24}
               color="black"
            />
            <View style={GlobalStyles.logoNav}>
               <Image source={logoSena} style={GlobalStyles.logoImage} />
               <Text style={GlobalStyles.title}>SofiaWork</Text>
            </View>
            <AntDesign
               style={GlobalStyles.iconNavbar}
               name="search1"
               size={24}
               color="black"
            />
         </View>
      </View>
   );
};

export default Index;
