import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, Image } from 'react-native'
import { Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { colorWhite, colorStatusBar, colorPrimary, colorSecondary } from '../../assets/colors';
import { icWelcome } from '../../assets/img';


class index extends Component {
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
                <Text style={{ fontSize: 30, color: '#757575', marginTop: 35 }}>Halo Salam Kenal,</Text>
                <Text style={{ color: '#757575', fontSize: 16 }}>Silahkan daftar dulu untuk melanjutkan ke aplikasi Buku Ku</Text>
                <View style={{ height: 40 }} />
                <Input
                    placeholder='Nama Lengkap'
                />
                <View style={{ height: 20 }} />
                <Input
                    placeholder='Alamat Email'
                />
                <View style={{ height: 20 }} />
                <Input
                    placeholder='No Handphone'
                />
                <View style={{ height: 20 }} />
                <Input
                    placeholder='Kata Sandi'
                    secureTextEntry={true}
                />
                <Input
                    placeholder='Ulangi Kata Sandi'
                    secureTextEntry={true}
                />
                <View style={{ height: 30 }} />
                <View>
                    <Button
                        title="Daftar"
                    />
                </View>
                <View style={{flex:1,justifyContent:'flex-end'}}>
                    <Text style={{ textAlign: 'center',color:colorPrimary}}>
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