import React, { Component, useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
} from "react-native";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import { logoSena } from "../../assets/ExporImages";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Register = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);

    const handleRegister = async () => {
        if (!username || !email || !password || password !== confirmPassword) {
            window.alert(
                "Error. Por favor, complete todos los campos y asegúrese de que las contraseñas coincidan."
            );
            return;
        }

        try {
            let localStorage = [];
            localStorage.push({username, email, password});

            const localStorageToString = JSON.stringify(localStorage);
            await AsyncStorage.setItem('getData', localStorageToString); 

            navigation.navigate("Login");
        } catch (error) {
            throw new Error('pasó algo');
        }
    };

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
                            maxLength={100}
                            value={username}
                            style={[GlobalStyles.textInput]}
                            placeholder="Ingresa tu nombre completo"
                            placeholderTextColor={"#61677A"}
                            onChangeText={setUsername}
                        />
                    </View>
                    <View style={[GlobalStyles.inputContainer]}>
                        <Text style={[GlobalStyles.textGeneral]}>
                            Correo electrónico:
                        </Text>
                        <TextInput
                            maxLength={100}
                            value={email}
                            style={[GlobalStyles.textInput]}
                            placeholder="Ingresa tu nombre completo"
                            placeholderTextColor={"#61677A"}
                            onChangeText={setEmail}
                        />
                    </View>
                    <View style={[GlobalStyles.inputContainer]}>
                        <Text style={[GlobalStyles.textGeneral]}>
                            Contraseña:
                        </Text>
                        <TextInput
                            maxLength={100}
                            value={password}
                            style={[GlobalStyles.textInput]}
                            placeholder="Ingresa tu nombre completo"
                            placeholderTextColor={"#61677A"}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={[GlobalStyles.inputContainer]}>
                        <Text style={[GlobalStyles.textGeneral]}>
                            Repetir contraseña:
                        </Text>
                        <TextInput
                            maxLength={100}
                            value={confirmPassword}
                            style={[GlobalStyles.textInput]}
                            placeholder="Ingresa tu nombre completo"
                            placeholderTextColor={"#61677A"}
                            onChangeText={setConfirmPassword}
                            secureTextEntry={true}
                        />
                    </View>
                </View>
            </View>
            <View style={GlobalStyles.bodyBottom}>
                <Text style={GlobalStyles.textGeneral}>
                    ¿Ya tienes cuenta?{" "}
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Login")}
                        style={[
                            GlobalStyles.textGeneral,
                            GlobalStyles.anchorLink,
                        ]}
                        >
                        
                       <Text>Ingresa aquí</Text>
                    </TouchableOpacity>
                </Text>
                <TouchableOpacity
                    onPress={handleRegister}
                    style={GlobalStyles.buttonSubmit}
                >
                  <Text style={GlobalStyles.jaja}>Registrarse</Text>
                </TouchableOpacity>
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
