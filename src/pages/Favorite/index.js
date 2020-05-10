import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { colorWhite, colorPrimary } from '../../assets/colors';
import { SearchBar, Rating, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { imgBook1, imgBook2, imgBook3 } from '../../assets/img';
const { height, width } = Dimensions.get('window');
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
                        {/* Card Content */}
                        <View style={style.vCard}>
                            {/* Isi Konten */}
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Image source={imgBook1} style={style.imgCard} />
                                <View style={{
                                    marginLeft: 10,
                                    width: '80%',
                                    alignItems: 'flex-start'
                                }}>
                                    <Text style={{
                                        color: colorPrimary
                                    }}>Buku Khusus Algoritma</Text>
                                    <Rating
                                        readonly
                                        startingValue={5}
                                        ratingCount={5}
                                        imageSize={20}
                                    />
                                    <Text style={{
                                        color: 'grey'
                                    }}>Dibaca: 100k</Text>
                                    <View style={{
                                        width: '90%',
                                        flexDirection: 'row',
                                        marginTop: 3,
                                    }}>
                                        <TouchableOpacity style={style.buttonDelete}>
                                            <Icon
                                                size={20}
                                                type="font-awesome"
                                                name="trash"
                                                color="red"
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={style.detailButton}>
                                            <Text style={{
                                                color: colorPrimary
                                            }}>Detail Buku</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
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
        padding: 7,
        // height: 100,
        marginTop: 5,
        marginBottom: 5,
        elevation: 3,
    },
    imgCard: {
        width: '18%',
        height: '100%',
        borderRadius: 10,
        resizeMode: 'contain',
    },
    buttonDelete: {
        backgroundColor: colorWhite,
        elevation: 2,
        padding: 8,
        borderRadius: 5,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailButton: {
        width: '88%',
        backgroundColor: colorWhite,
        elevation: 2,
        padding: 8,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default index
