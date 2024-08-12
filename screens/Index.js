import React, { Component } from "react";
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { logoSena, heroSection } from "../assets/ExporImages";
import GlobalStyles from "../assets/styles/GlobalStyles";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export const Index = () => {
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
         <View style={styles.heroSection}>
            <Image source={heroSection} style={styles.heroSectionImage} />
            <View style={styles.transparentCurtain}>
               <Text style={styles.heroText}>Encuentra tu empleo ideal</Text>
               <View style={[styles.heroContent]}>
                  <TextInput style={GlobalStyles.textInput} placeholder="¿Que cargo buscas?" placeholderTextColor={"#61677A"} />
                  <TextInput style={GlobalStyles.textInput} placeholder="¿Dondé te ecuentras?" placeholderTextColor={"#61677A"} />
                  <TouchableOpacity style={[GlobalStyles.buttonSubmit, styles.heroSubmit]}><AntDesign name="search1" size={24} color="white" />Buscar ofertas</TouchableOpacity>
               </View>
            </View>
         </View>
         <View style={styles.about}>
            <View style={styles.aboutRows}>
               <MaterialIcons style={styles.i} name="work-outline" size={24} color="gray" />
               <Text style={GlobalStyles.textGeneral}>Más de 100.000 ofertas de empleo</Text>
            </View>
            <View style={styles.aboutRows}>
               <AntDesign style={styles.i} name="linechart" size={24} color="gray" />
               <Text style={GlobalStyles.textGeneral}>Trabajo garantizado para todos</Text>
            </View>
         </View>
         <View style={styles.bodyContainer}>
            <View style={styles.bodyContent}>
               <Text style={[GlobalStyles.textGeneral, styles.textTitleBody]}>Programador sin metas ni aspiraciones</Text>
               <Text style={GlobalStyles.textGeneral}>TrujisCompany</Text>
               <View style={styles.divider}></View>
               <View style={styles.part}>
                  <Text style={styles.textPart}>Sin sueldo XD</Text>
                  <TouchableOpacity style={styles.applyButton}>Aplicar</TouchableOpacity>
               </View>
            </View>
            <View style={styles.bodyContent}>
               <Text style={[GlobalStyles.textGeneral, styles.textTitleBody]}>Programador senior para tareas sucias</Text>
               <Text style={GlobalStyles.textGeneral}>YairaShop</Text>
               <View style={styles.divider}></View>
               <View style={styles.part}>
                  <Text style={styles.textPart}>De $1'500.000 a $4'500.000</Text>
                  <TouchableOpacity style={styles.applyButton}>Aplicar</TouchableOpacity>
               </View>             
            </View>
            <View style={styles.bodyContent}>
               <Text style={[GlobalStyles.textGeneral, styles.textTitleBody]}>Trabajo 👍</Text>
               <Text style={GlobalStyles.textGeneral}>Microsoft</Text>
               <View style={styles.divider}></View>
               <View style={styles.part}>
                  <Text style={styles.textPart}>$10'000.000</Text>
                  <TouchableOpacity style={styles.applyButton}>Aplicar</TouchableOpacity>
               </View>
            </View>
            <View style={styles.bodyContent}>
               <Text style={[GlobalStyles.textGeneral, styles.textTitleBody]}>Trabajo bodrio (pero es trabajo)</Text>
               <Text style={GlobalStyles.textGeneral}>Tesla</Text>
               <View style={styles.divider}></View>
               <View style={styles.part}>
                  <Text style={styles.textPart}>A conveniencia</Text>
                  <TouchableOpacity style={styles.applyButton}>Aplicar</TouchableOpacity>
               </View>
            </View>
            <View style={styles.bodyContent}>
               <Text style={[GlobalStyles.textGeneral, styles.textTitleBody]}>Fontanero que sepa programar</Text>
               <Text style={GlobalStyles.textGeneral}>Dildos-Diego</Text>
               <View style={styles.divider}></View>
               <View style={styles.part}>
                  <Text style={styles.textPart}>$2'450.000 más iva</Text>
                  <TouchableOpacity style={styles.applyButton}>Aplicar</TouchableOpacity>
               </View>
            </View>
         </View>
      </ScrollView>
   );
};

const styles = StyleSheet.create({
   heroSection: {
      // borderWidth: 1,
      height: 350,
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
   },
   heroSectionImage: {
      flex: 1,
      resizeMode: 'contain',
   },
   transparentCurtain: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, .6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      // zIndex: 1,
   },
   heroText: {
      color: '#39A900',
      fontFamily: 'sans-serif',
      fontSize: 24,
      fontWeight: 'bold',
   },
   heroContent: {
      backgroundColor: 'rgba(255, 255, 255, .6)',
      padding: 15,
      borderRadius: 2,
      display: 'flex',
      gap: 15,
      alignItems: 'center',
   },
   heroSubmit: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 5,
   },
   about: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 2,
      width: '70%',
      position: 'relative',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'white',
      top: -30,
      paddingHorizontal: 10,
      paddingVertical: 30,
      gap: 20,
   },
   aboutRows: {
      display: 'flex',
      flexDirection: 'row',
      gap: 10,
      alignItems: 'center',
   },
   i: {
      fontSize: 25,
      borderWidth: 1,
      borderColor: 'gray',
      padding: 10,
      borderRadius: '100%',
   },
   bodyContainer: {
      backgroundColor: 'rgb(210, 210, 210)',
      padding: 20,
      gap: 20,
   },
   bodyContent: {
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: 'gray',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: .8,
      shadowRadius: 4,
      padding: 10,
   },
   textTitleBody: {
      color: '#39A900',
   },
   divider: {
      height: 4, 
      width: '100%', 
      backgroundColor: '#39A900', 
      marginTop: 50, 
      marginBottom: 10,
   },
   part: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   textPart: {
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      fontSize: 13,
   },
   applyButton: {
      backgroundColor: '#39A900',
      padding: 5,
      fontSize: 17,
      color: 'white',
   }
});

export default Index;
