import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TextInput, Pressable, TouchableOpacity } from "react-native";
import { logoSena } from "../../assets/ExporImages";
import GlobalStyles from "../../assets/styles/GlobalStyles";

export const Login = ( {navigation} ) => {
   return (
      <View style={GlobalStyles.container}>
         <View style={GlobalStyles.bodyTop}>
            <Image source={logoSena} style={styles.logo_img} />
            <Text style={GlobalStyles.textTitle}>Inicia Sesión</Text>
            <View style={GlobalStyles.content}>
               <View style={GlobalStyles.inputContainer}>
                  <Text style={GlobalStyles.textGeneral}>
                     Corre electrónico:
                  </Text>
                  <TextInput
                     style={GlobalStyles.textInput}
                     placeholder="Ingresa tu correo"
                     placeholderTextColor={"#61677A"}
                  />
               </View>
               <View style={GlobalStyles.inputContainer}>
                  <Text style={GlobalStyles.textGeneral}>Contraseña:</Text>
                  <TextInput
                     style={GlobalStyles.textInput}
                     placeholder="Ingresa tu contraseña"
                     placeholderTextColor={"#61677A"}
                  />
               </View>
            </View>
         </View>
         <View style={GlobalStyles.bodyBottom}>
            <Text style={GlobalStyles.textGeneral}>
               ¿No tienes cuenta?{" "}
               <TouchableOpacity
                  onPress={() => navigation.navigate('Register')}
                  style={GlobalStyles.anchorLink}
               >
                  Registrate aquí
               </TouchableOpacity>
            </Text>
            <Pressable style={GlobalStyles.buttonSubmit}>
               Iniciar Sesión
            </Pressable>
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

export default Login;
