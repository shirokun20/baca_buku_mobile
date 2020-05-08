import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { colorWhite, colorPrimary } from '../../assets/colors'
import { SearchBar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import { imgBook1, imgBook2, imgBook3 } from '../../assets/img';
export class index extends Component {
    render() {
        return (
            <View style={style.wrapper}>
                <View style={style.vSearch}>
                    <Text style={style.tFaforit}>
                        Favorit
                    </Text>
                    <SearchBar
                        placeholder="Cari buku disini"
                        lightTheme={true}
                        containerStyle={{ backgroundColor: '#fff', borderBottomWidth: 0, borderTopWidth: 0 }}
                        inputContainerStyle={{ backgroundColor: '#e0e0e0' }}
                        inputStyle={{ fontSize: 16 }}
                    />
                </View>
                <ScrollView>
                    <View style={style.vContent}>
                        <View style={style.vCard}>
                            <Image source={imgBook1} style={style.imgCard} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const style = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colorWhite
    },
    tFaforit: {
        color: colorPrimary,
        marginLeft: 7.5,
        fontWeight: 'bold',
        fontSize: 20,
    },
    vSearch: {
        marginBottom: 1,
        backgroundColor: colorWhite,
        shadowColor: '#000',
        padding: 2,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    vContent: {
        width: '100%',
        padding: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    vCard: {
        width: '97%',
        backgroundColor: colorWhite,
        borderRadius: 10,
        padding: 10,
        // height: 100,
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    imgCard: {
        width: 85,
        height: 125,
        borderRadius: 5,
        resizeMode: 'contain',
    }
})

export default index
