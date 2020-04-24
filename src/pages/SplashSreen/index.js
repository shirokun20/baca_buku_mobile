import React, { Component } from 'react';
import {
    Text,
    View,
    StatusBar,
    StyleSheet,
    ActivityIndicator
} from 'react-native';

import { colorStatusBar, colorWhite } from '../../assets/colors';
import { ssStyle } from '../../assets/splashscreen.style';

class index extends Component {
    render() {

        const statusBar = (
            <>
                <StatusBar barStyle="light-content" backgroundColor={colorStatusBar} />
            </>
        )

        const gambarAplikasi = (
            <View style={ssStyle.viewParentLogo}>
                <View style={ssStyle.viewChildLogo}>

                </View>
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

        return (
            <View style={ssStyle.container}>
                {statusBar}
                {gambarAplikasi}
                {viewBottom}
            </View>
        )
    }
}

export default index
