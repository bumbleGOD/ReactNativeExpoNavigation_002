import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const GlobalStyles = StyleSheet.create({
    container: {
        minWidth: '100%',
        height: '100%',
        // borderWidth: 1,
        // borderColor: 'red',
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
        fontFamily: 'Sans-serif',
    },
    iconNavbar: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 25,
    },
    bodyTop: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 20,
    },
    content: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginTop: 40,
    },
    bodyBottom: {
        marginTop: 'auto',
        marginBottom: 50,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
    },
    textTitle: {
        fontFamily: 'Sans-serif',
        fontSize: 26,
        fontWeight: 'bold',
        color: '#222831',
    },
    textGeneral: {
        fontFamily: 'Sans-serif',
        fontSize: 17,
        color: '#222831',
    },
    textInput: {
        color: '#222831',
        fontSize: 17,
        paddingHorizontal: 8,
        paddingVertical: 7,
        borderWidth: 1,
        borderColor: '#222831',
        fontFamily: 'Sans-serif',
        backgroundColor: 'white',
    },
    inputContainer: {
        width: '90%',
        gap: 4,
        marginBottom: 12,
    },
    buttonSubmit: {
        width: '90%',
        textAlign: 'center',
        backgroundColor: '#39A900',
        fontSize: 17,
        fontFamily: 'Sans-serif',
        padding: 10,
        color: 'white',
        cursor: 'pointer',
    },
    anchorLink: {
        textDecorationLine: 'underline',
        color: '#39A900',
        cursor: 'pointer',
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
        gap: 10,
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
        fontFamily: 'sans-serif',
    },
    desc: {
        fontFamily: 'sans-serif',
        marginTop: 8,
        fontSize: 13,
    },
    jaja: {
        color: 'white',
        textAlign: 'center',
    }
});

export default GlobalStyles