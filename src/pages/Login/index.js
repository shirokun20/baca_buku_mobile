import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, Image } from 'react-native'
import { Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { colorWhite, colorStatusBar, colorPrimary, colorSecondary } from '../../assets/colors';
import { icWelcome } from '../../assets/img';


class index extends Component {

    state = {
        loadingButton: false
    }

    handleGoto = screen => {
        this.props.navigation.replace('Home');
    }

    waitToHome = (screen) => {
        this.setState({ loadingButton: true });
        setTimeout((screen) => {
            this.handleGoto(screen)
        }, 2000);
    }

    render() {

        const statusBar = (
            <>
                <StatusBar barStyle="light-content" backgroundColor={colorStatusBar} />
            </>
        )

        return (
            <View style={styles.wrapper}>
                <Icon
                    name='arrow-left-circle'
                    size={40}
                    onPress={() => this.props.navigation.goBack()}
                    color='#757575'
                />
                <Text style={{ fontSize: 30, color: '#757575', marginTop: 35 }}>Halo Apa Kabar,</Text>
                <Text style={{ color: '#757575', fontSize: 16 }}>Silahkan masuk untuk melanjutkan ke aplikasi Buku Ku</Text>
                <View style={{ height: 40 }} />
                <Input
                    placeholder='Alamat Email'
                />
                <View style={{ height: 20 }} />
                <Input
                    placeholder='Kata Sandi'
                    secureTextEntry={true}
                />
                <View style={{ height: 30 }} />
                <View>
                    <Button
                        title="Masuk"
                        loading={this.state.loadingButton}
                        onPress={() => this.waitToHome('Home')}
                    />
                    <View style={{ height: 10 }} />
                    <Button
                        title="Masuk Lewat Nomor Handphone"
                        type="outline"
                    />
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <Text style={{ textAlign: 'center', color: colorPrimary }}>
                        Dengan masuk anda menyetujui syarat dan ketentetuan aplikasi
                </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
        flex: 1,
        backgroundColor: 'white',
    },
    layersatu: {
        flex: 3,
        backgroundColor: 'red',
    },
    layerdua: {
        flex: 3,
        backgroundColor: 'red',
    }
});

export default index;