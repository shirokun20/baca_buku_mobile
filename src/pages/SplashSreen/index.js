import React, { Component } from 'react';
import {
    Text,
    View,
    StatusBar,
    StyleSheet,
    ActivityIndicator,
    ImageBackground,
    Image
} from 'react-native';

import { colorStatusBar, colorWhite } from '../../assets/colors';
import { ssStyle } from '../../assets/splashscreen.style';
import { logo, backgroundSS } from '../../assets/img';

class index extends Component {
    render() {

        const statusBar = (
            <>
                <StatusBar barStyle="light-content" backgroundColor={colorStatusBar} />
            </>
        )

        const gambarAplikasi = (
            <View style={ssStyle.viewParentLogo}>
                <Image source={logo} />
                <View>
                    <Text style={ssStyle.textLogo}>Buku Ku</Text>
                    <Text style={ssStyle.textMoto}>Tempat baca buku tentang {'\n'}Pemrograman</Text>
                </View>
            </View>
        )

        const viewBottom = (
            <View style={ssStyle.viewBottom}>
                <ActivityIndicator animating={true} color={colorWhite} size={50} />
                <View style={ssStyle.viewVersion}>
                    <Text style={ssStyle.textVersion}>Versi 1.0</Text>
                </View>
            </View>
        )

        const backgroundImage = (
            <Image  source={backgroundSS} style={ssStyle.imageBackground} />
        )

        return (
            <View style={ssStyle.container}>
                {backgroundImage}
                {statusBar}
                {gambarAplikasi}
                {viewBottom}
            </View>
        )
    }
}

export default index
