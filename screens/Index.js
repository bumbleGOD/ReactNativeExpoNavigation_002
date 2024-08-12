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
         <View style={GlobalStyles.bodyContainer}>
            <View style={GlobalStyles.bodyContent}>
               <Text style={[GlobalStyles.textGeneral, GlobalStyles.textTitleBody]}>Programador sin metas ni aspiraciones</Text>
               <Text style={GlobalStyles.textGeneral}>TrujisCompany</Text>
               <Text style={GlobalStyles.desc}>Necesitamos a un super programador que programe de todo, que sea un programador re pro y re crack y sobre todo que le sepa mucho al minecraft</Text>
               <View style={GlobalStyles.divider}></View>
               <View style={GlobalStyles.part}>
                  <Text style={GlobalStyles.textPart}>Sin sueldo XD</Text>
                  <View style={styles.row}>
                     <TouchableOpacity style={GlobalStyles.applyButton}>Más información</TouchableOpacity>
                     <TouchableOpacity style={GlobalStyles.applyButton}>Aplicar</TouchableOpacity>
                  </View>
               </View>
            </View>
            <View style={GlobalStyles.bodyContent}>
               <Text style={[GlobalStyles.textGeneral, GlobalStyles.textTitleBody]}>Programador senior para tareas sucias</Text>
               <Text style={GlobalStyles.textGeneral}>YairaShop</Text>
               <Text style={GlobalStyles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur eveniet harum dignissimos! Eveniet ipsum ducimus nesciunt similique assumenda? Quas ipsum cumque, alias ut veniam asperiores consectetur repellendus nemo saepe laboriosam.</Text>
               <View style={GlobalStyles.divider}></View>
               <View style={GlobalStyles.part}>
                  <Text style={GlobalStyles.textPart}>De $1'500.000 a $4'500.000</Text>
                  <View style={styles.row}>
                     <TouchableOpacity style={GlobalStyles.applyButton}>Más información</TouchableOpacity>
                     <TouchableOpacity style={GlobalStyles.applyButton}>Aplicar</TouchableOpacity>
                  </View>
               </View>
            </View>
            <View style={GlobalStyles.bodyContent}>
               <Text style={[GlobalStyles.textGeneral, GlobalStyles.textTitleBody]}>Trabajo 👍</Text>
               <Text style={GlobalStyles.textGeneral}>Microsoft</Text>
               <Text style={GlobalStyles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur eveniet harum dignissimos! Eveniet ipsum ducimus nesciunt similique assumenda? Quas ipsum cumque, alias ut veniam asperiores consectetur repellendus nemo saepe laboriosam.</Text>
               <View style={GlobalStyles.divider}></View>
               <View style={GlobalStyles.part}>
                  <Text style={GlobalStyles.textPart}>$10'000.000</Text>
                  <View style={styles.row}>
                     <TouchableOpacity style={GlobalStyles.applyButton}>Más información</TouchableOpacity>
                     <TouchableOpacity style={GlobalStyles.applyButton}>Aplicar</TouchableOpacity>
                  </View>
               </View>
            </View>
            <View style={GlobalStyles.bodyContent}>
               <Text style={[GlobalStyles.textGeneral, GlobalStyles.textTitleBody]}>Trabajo bodrio (pero es trabajo)</Text>
               <Text style={GlobalStyles.textGeneral}>Tesla</Text>
               <Text style={GlobalStyles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur eveniet harum dignissimos! Eveniet ipsum ducimus nesciunt similique assumenda? Quas ipsum cumque, alias ut veniam asperiores consectetur repellendus nemo saepe laboriosam.</Text>
               <View style={GlobalStyles.divider}></View>
               <View style={GlobalStyles.part}>
                  <Text style={GlobalStyles.textPart}>A conveniencia</Text>
                  <View style={styles.row}>
                     <TouchableOpacity style={GlobalStyles.applyButton}>Más información</TouchableOpacity>
                     <TouchableOpacity style={GlobalStyles.applyButton}>Aplicar</TouchableOpacity>
                  </View>
               </View>
            </View>
            <View style={GlobalStyles.bodyContent}>
               <Text style={[GlobalStyles.textGeneral, GlobalStyles.textTitleBody]}>Fontanero que sepa programar</Text>
               <Text style={GlobalStyles.textGeneral}>Dildos-Diego</Text>
               <Text style={GlobalStyles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur eveniet harum dignissimos! Eveniet ipsum ducimus nesciunt similique assumenda? Quas ipsum cumque, alias ut veniam asperiores consectetur repellendus nemo saepe laboriosam.</Text>
               <View style={GlobalStyles.divider}></View>
               <View style={GlobalStyles.part}>
                  <Text style={GlobalStyles.textPart}>$2'450.000 más iva</Text>
                  <View style={styles.row}>
                     <TouchableOpacity style={GlobalStyles.applyButton}>Más información</TouchableOpacity>
                     <TouchableOpacity style={GlobalStyles.applyButton}>Aplicar</TouchableOpacity>
                  </View>
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
   row: {
      display: 'flex',
      flexDirection: 'row',
      gap: 4,
   }
});

export default Index;
