import { StyleSheet, Dimensions } from 'react-native';
// color.js
import { colorPrimary, colorWhite } from './colors';
// Dimenstion
const { height, width } = Dimensions.get('window');
const heightSisa = (height) - (height / 1.2);
// Style Splash Sreen
const ssStyle = StyleSheet.create({
    container: {
        height: '100%',
        width: width,
        backgroundColor: colorPrimary
    },
    viewParentLogo: {
        alignSelf: 'center',
        height: height / 1.3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewChildLogo: {
        backgroundColor: colorWhite,
        padding: 10,
        borderRadius: 150 / 2,
        marginBottom: 10,
    },
    textLogo: {
        color: colorWhite,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },
    textMoto: {
        color: colorWhite,
        textAlign: 'center',
        marginTop: 10,
    },
    viewBottom: {
        height: heightSisa,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'flex-end',
    },
    viewVersion: {
        marginTop: 100,
    },
    textVersion: {
        color: colorWhite,
        fontSize: 15,
    },
    imageBackground: {
        position: 'absolute',
        alignSelf: 'center',
        height: height,
        width: width
    },
    layerOne: {
        position: 'absolute',
        alignSelf: 'flex-end',
        height: 200,
        width: 200,
        opacity: 0.5,
        top: -60,
        right: -(width / 4),
    },
    layerTwo: {
        position: 'absolute',
        alignSelf: 'flex-start',
        height: 200,
        width: 200,
        opacity: 0.5,
        bottom: -60,
        left: -(width / 4),
    }
});

export {
    ssStyle,
}