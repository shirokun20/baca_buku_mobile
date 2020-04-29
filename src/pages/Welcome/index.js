import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, Image } from 'react-native'
import { Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { colorWhite, colorStatusBar, colorPrimary } from '../../assets/colors';
import { icWelcome } from '../../assets/img';

class index extends Component {

    handleGoto = (screen) => {
        this.props.navigation.navigate(screen);
    }

    render() {

        const statusBar = (
            <>
                <StatusBar barStyle="light-content" backgroundColor={colorStatusBar} />
            </>
        )

        return (
            <View style={styles.wrapper}>
                {statusBar}
                <View style={styles.imageContainer}>
                    <Image source={icWelcome} style={styles.imageWelcome} />
                    <Text style={styles.textLogo}>SELAMAT DATANG DI APLIKASI BUKU KU</Text>
                    <Text style={styles.textSubTitle}>Mari membaca buku karena dengan membaca kita bisa membuka jendela dunia</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Masuk"
                        onPress={() => this.handleGoto('Login')}
                    />
                    <View style={{ height: 10 }} />
                    <Button
                        title="Daftar"
                        type="outline"
                        onPress={() => this.handleGoto('Register')}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colorWhite,
        padding: 20,
        flexDirection: "column",

    },
    textLogo : {
            color: colorPrimary,
            fontWeight: 'bold',
            fontSize: 22,
            marginTop:20,
    },
    textSubTitle:{
        color: colorPrimary,
        fontSize: 12,
        
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    imageWelcome: {
        width: 225,
        height: 225,
        resizeMode: 'contain'
    }
})

export default index;