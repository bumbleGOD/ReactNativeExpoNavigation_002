import React, { Component } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import GlobalStyles from "../assets/styles/GlobalStyles";
import { logoSena } from "../assets/ExporImages";

export const Apply = () => {
   return (
      <ScrollView style={GlobalStyles.container}>
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
         <View style={styles.heroContainer}>
            <Text style={[GlobalStyles.title, styles.title]}>Ofertas aplicadas</Text>
            <View style={[styles.heroContent]}>
               <TextInput style={[GlobalStyles.textInput, styles.textInput]} placeholder="Aplicación a oferta" placeholderTextColor={"#61677A"} />
               <TouchableOpacity style={[GlobalStyles.buttonSubmit, styles.heroSubmit]}><AntDesign name="search1" size={24} color="white" />Buscar aplicaciones</TouchableOpacity>
            </View>
         </View>
         <View style={GlobalStyles.bodyContainer}>
            <View style={GlobalStyles.bodyContent}>
               <Text style={[GlobalStyles.textGeneral, GlobalStyles.textTitleBody]}>Programador sin experiencia</Text>
               <Text style={GlobalStyles.textGeneral}>ScotiaBank</Text>
               <Text style={GlobalStyles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolor quas labore ipsa fugiat. Blanditiis ipsum totam aut! Pariatur recusandae saepe magnam accusantium eos debitis assumenda, aut officia totam adipisci!</Text>
               <View style={GlobalStyles.divider}></View>
               <View style={GlobalStyles.part}>
                  <TouchableOpacity style={[GlobalStyles.applyButton, styles.applyButtonDelete]}>Eliminar aplicacion</TouchableOpacity>
                  <TouchableOpacity style={GlobalStyles.applyButton}>Más información</TouchableOpacity>
               </View>
            </View>
            <View style={GlobalStyles.bodyContent}>
               <Text style={[GlobalStyles.textGeneral, GlobalStyles.textTitleBody]}>Programador junior con poca experiencia</Text>
               <Text style={GlobalStyles.textGeneral}>SENA</Text>
               <Text style={GlobalStyles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolor quas labore ipsa fugiat. Blanditiis ipsum totam aut! Pariatur recusandae saepe magnam accusantium eos debitis assumenda, aut officia totam adipisci!</Text>
               <View style={GlobalStyles.divider}></View>
               <View style={GlobalStyles.part}>
                  <TouchableOpacity style={[GlobalStyles.applyButton, styles.applyButtonDelete]}>Eliminar aplicacion</TouchableOpacity>
                  <TouchableOpacity style={GlobalStyles.applyButton}>Más información</TouchableOpacity>
               </View>
            </View>
            <View style={GlobalStyles.bodyContent}>
               <Text style={[GlobalStyles.textGeneral, GlobalStyles.textTitleBody]}>Programador junior para videojuegos</Text>
               <Text style={GlobalStyles.textGeneral}>SofiaWork</Text>
               <Text style={GlobalStyles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolor quas labore ipsa fugiat. Blanditiis ipsum totam aut! Pariatur recusandae saepe magnam accusantium eos debitis assumenda, aut officia totam adipisci!</Text>
               <View style={GlobalStyles.divider}></View>
               <View style={GlobalStyles.part}>
                  <TouchableOpacity style={[GlobalStyles.applyButton, styles.applyButtonDelete]}>Eliminar aplicacion</TouchableOpacity>
                  <TouchableOpacity style={GlobalStyles.applyButton}>Más información</TouchableOpacity>
               </View>
            </View>
         </View>
      </ScrollView>
   );
};

const styles = StyleSheet.create({
   title: {
      color: '#39A900',
   },
   heroContainer: {
      display: 'flex',
      alignItems: 'center',
      paddingVertical: 20,
   },
   heroContent: {
      backgroundColor: 'white',
      padding: 15,
      display: 'flex',
      gap: 15,
      alignItems: 'center',
      width: '90%',
   },
   heroSubmit: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 5,
      width: '95%',
   },
   textInput: {
      width: '90%'
   },
   applyButtonDelete: {
      backgroundColor: 'red',
   },
});

export default Apply;