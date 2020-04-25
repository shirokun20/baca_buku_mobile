import React, { Component } from 'react';
import {
    Text,
    View,
    StatusBar,
    ActivityIndicator,
    Image
} from 'react-native';

import { colorWhite } from '../../assets/colors';
import { ssStyle } from '../../assets/splashscreen.style';
import { logo, backgroundSS, layer } from '../../assets/img';
import { AppName, MottoSS, Versi } from '../../assets/string_value';

class index extends Component {

    state = {

    }

    componentDidMount() {
        this.loginRoute();
    }

    loginRoute() {
        setTimeout(() => {
            this.props.navigation.replace('Login');
        }, 3000);
    }

    render() {

        const statusBar = (
            <>
                <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            </>
        )

        const gambarAplikasi = (
            <View style={ssStyle.viewParentLogo}>
                <Image source={logo} />
                <View>
                    <Text style={ssStyle.textLogo}>{AppName}</Text>
                    <Text style={ssStyle.textMoto}>{MottoSS}</Text>
                </View>
            </View>
        )

        const viewBottom = (
            <View style={ssStyle.viewBottom}>
                <ActivityIndicator animating={true} color={colorWhite} size={50} />
                <View style={ssStyle.viewVersion}>
                    <Text style={ssStyle.textVersion}>Versi {Versi}</Text>
                </View>
            </View>
        )

        const backgroundImage = (
            <Image source={backgroundSS} style={ssStyle.imageBackground} />
        )

        const imageLayer = (
            <>
                <Image source={layer} style={ssStyle.layerOne} />
                <Image source={layer} style={ssStyle.layerTwo} />
            </>
        )
        return (
            <View style={ssStyle.container}>
                {backgroundImage}
                {imageLayer}
                {statusBar}
                {gambarAplikasi}
                {viewBottom}
            </View>
        )
    }
}

export default index
