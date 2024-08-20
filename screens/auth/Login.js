import React, { Component, useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    Pressable,
    TouchableOpacity,
} from "react-native";
import { logoSena } from "../../assets/ExporImages";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleLogin = async () => {
        try {
            const storedData = await AsyncStorage.getItem("getData");

            if (storedData !== null) {
                const storedDataArray = JSON.parse(storedData);

                const userFound = storedDataArray.find(
                    user => user.email === email && user.password === password
                );

                if (userFound) {
                    navigation.navigate("Profile");
                } else {
                    window.alert("Información incorrecta vv");
                }
            }
        } catch (error) {
            throw new Error('pa probar');
        }
    };

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
                            onChangeText={setEmail}
                            value={email}
                        />
                    </View>
                    <View style={GlobalStyles.inputContainer}>
                        <Text style={GlobalStyles.textGeneral}>
                            Contraseña:
                        </Text>
                        <TextInput
                            style={GlobalStyles.textInput}
                            placeholder="Ingresa tu contraseña"
                            placeholderTextColor={"#61677A"}
                            secureTextEntry={true}
                            onChangeText={setPassword}
                            value={password}
                        />
                    </View>
                </View>
            </View>
            <View style={GlobalStyles.bodyBottom}>
                <Text style={GlobalStyles.textGeneral}>
                    ¿No tienes cuenta?{" "}
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Register")}
                        style={GlobalStyles.anchorLink}
                    >
                        <Text>Registrate aquí</Text>
                    </TouchableOpacity>
                </Text>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={GlobalStyles.buttonSubmit}
                >
                    <Text style={GlobalStyles.jaja}>Iniciar Sesión</Text>
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

export default Login;
