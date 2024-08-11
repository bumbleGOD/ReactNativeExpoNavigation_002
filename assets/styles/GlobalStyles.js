import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const GlobalStyles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        borderWidth: 1,
        borderColor: 'red',
    },  
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },  
    logoNav: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,

    },
    logoImage: {
        width: 50,
        height: 50,
    },
    title: {
        fontSize: 30,
        display: 'flex',
        alignItems: 'center',
    },
    iconNavbar: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 25,
    }
});

export default GlobalStyles