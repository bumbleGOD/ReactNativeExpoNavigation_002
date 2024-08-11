import React, { Component } from "react";
import { Text, View, ScrollView, StyleSheet, Image } from "react-native";
import GlobalStyles from "../assets/styles/GlobalStyles";
import { logoSena } from "../assets/ExporImages";

export const Profile = () => {
   return (
      <ScrollView>
         <View style={GlobalStyles.container}>
            <View style={GlobalStyles.bodyTop}>
               <Image source={logoSena} style={styles.logo_img} />
               <Text style={[GlobalStyles.textGeneral, styles.partition]}>
                  Datos de Usuario
               </Text>
               <View style={styles.content}>
                  <View style={styles.left}>
                     <Text
                        style={[GlobalStyles.textGeneral, styles.textGeneral]}
                     >
                        Nombre:
                     </Text>
                     <Text
                        style={[GlobalStyles.textGeneral, styles.textGeneral]}
                     >
                        Edad:
                     </Text>
                     <Text
                        style={[GlobalStyles.textGeneral, styles.textGeneral]}
                     >
                        Teléfono:
                     </Text>
                     <Text
                        style={[GlobalStyles.textGeneral, styles.textGeneral]}
                     >
                        Email:
                     </Text>
                     <Text
                        style={[GlobalStyles.textGeneral, styles.textGeneral]}
                     >
                        Dirección:
                     </Text>
                  </View>
                  <View style={styles.right}>
                     <Text
                        style={[GlobalStyles.textGeneral, styles.textGeneral]}
                     >
                        Juan Trujillo
                     </Text>
                     <Text
                        style={[GlobalStyles.textGeneral, styles.textGeneral]}
                     >
                        17
                     </Text>
                     <Text
                        style={[GlobalStyles.textGeneral, styles.textGeneral]}
                     >
                        3118977356
                     </Text>
                     <Text
                        style={[GlobalStyles.textGeneral, styles.textGeneral]}
                     >
                        juanjosetm.22@gmail.com
                     </Text>
                     <Text
                        style={[GlobalStyles.textGeneral, styles.textGeneral]}
                     >
                        Calle 69bis #105g-10
                     </Text>
                  </View>
               </View>
               <Text style={[GlobalStyles.textGeneral, styles.partition]}>
                  Perfil Laboral
               </Text>
               <Text style={styles.content}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  dolor accusantium fugit. Aut, eligendi, consequuntur
                  aspernatur incidunt, nisi sint fugiat minima aperiam velit ea
                  minus animi placeat laborum earum dolorem.
               </Text>
               <Text style={[GlobalStyles.textGeneral, styles.partition]}>
                  Skills
               </Text>
               <View style={styles.content}>
                  <View style={styles.left}>
                     <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>Lenguaje:</Text>
                     <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>Html</Text>
                     <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>Css3</Text>
                     <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>JavaScript</Text>
                     <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>Php</Text>
                     <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>Python</Text>
                     <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>MySql</Text>
                  </View>
                  <View style={styles.right}>
                     <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>Años:</Text>
                     <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>2</Text>
                     <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>2</Text>
                     <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>2</Text>
                     <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>2</Text>
                     <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>4 meses</Text>
                     <Text style={[GlobalStyles.textGeneral, styles.textGeneral]}>2</Text>
                  </View>
               </View>
               <Text style={[GlobalStyles.textGeneral, styles.partition]}>Otros</Text>
               <Text style={[styles.textGeneral, styles.labelLink]}>Sigue mi portafolio para más información</Text>
               <Text style={GlobalStyles.anchorLink}>Juan.portafolio.web</Text>
            </View>
            <View style={GlobalStyles.bodyBottom}></View>
         </View>
      </ScrollView>
   );
};

const styles = StyleSheet.create({
   logo_img: {
      width: 120,
      height: 120,
      resizeMode: "contain",
      marginBottom: 40,
   },
   content: {
      display: "flex",
      flexDirection: "row",
      width: "85%",
      paddingVertical: 10,
      textAlign: "center",
   },
   partition: {
      backgroundColor: "#39A900",
      color: "white",
      padding: 4,
      width: "85%",
      textAlign: "center",
   },
   left: {
      width: "50%",
      display: "flex",
      alignItems: "center",
      gap: 10,
   },
   right: {
      width: "50%",
      display: "flex",
      alignItems: "center",
      gap: 10,
   },
   textGeneral: {
      fontSize: 14,
   },
   labelLink: {
      marginTop: 15,
   },
});

export default Profile;
