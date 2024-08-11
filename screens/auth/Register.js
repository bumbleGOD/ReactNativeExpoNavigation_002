import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import { logoSena } from "../../assets/ExporImages";

export const Register = ({ navigation }) => {
   return (
      <View style={[GlobalStyles.container]}>
         <View style={GlobalStyles.bodyTop}>
            <Image style={styles.logo_img} source={logoSena}></Image>
            <Text style={[GlobalStyles.textTitle]}>Registrate</Text>
            <View style={GlobalStyles.content}>
               <View style={[GlobalStyles.inputContainer]}>
                  <Text style={[GlobalStyles.textGeneral]}>
                     Nombre de usuario:
                  </Text>
                  <TextInput
                     style={[GlobalStyles.textInput]}
                     placeholder="Ingresa tu nombre completo"
                     placeholderTextColor={"#61677A"}
                  />
               </View>
               <View style={[GlobalStyles.inputContainer]}>
                  <Text style={[GlobalStyles.textGeneral]}>
                     Correo electrónico:
                  </Text>
                  <TextInput
                     style={[GlobalStyles.textInput]}
                     placeholder="Ingresa tu nombre completo"
                     placeholderTextColor={"#61677A"}
                  />
               </View>
               <View style={[GlobalStyles.inputContainer]}>
                  <Text style={[GlobalStyles.textGeneral]}>Contraseña:</Text>
                  <TextInput
                     style={[GlobalStyles.textInput]}
                     placeholder="Ingresa tu nombre completo"
                     placeholderTextColor={"#61677A"}
                  />
               </View>
               <View style={[GlobalStyles.inputContainer]}>
                  <Text style={[GlobalStyles.textGeneral]}>
                     Repetir contraseña:
                  </Text>
                  <TextInput
                     style={[GlobalStyles.textInput]}
                     placeholder="Ingresa tu nombre completo"
                     placeholderTextColor={"#61677A"}
                  />
               </View>
            </View>
         </View>
         <View style={GlobalStyles.bodyBottom}>
            <Text style={GlobalStyles.textGeneral}>
               ¿Ya tienes cuenta?{" "}
               <TouchableOpacity
               onPress={() => navigation.navigate('Login')}
                  style={[GlobalStyles.textGeneral, GlobalStyles.anchorLink]}
               >
                  Ingresa aquí
               </TouchableOpacity>
            </Text>
            <Text style={GlobalStyles.buttonSubmit}>Registrarse</Text>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   logo_img: {
      width: 120,
      height: 120,
      resizeMode: "contain",
   },
});

export default Register;
