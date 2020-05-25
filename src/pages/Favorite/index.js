import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, Modal } from 'react-native';
import { colorWhite, colorPrimary } from '../../assets/colors';
import { SearchBar, Rating, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { imgBook1, imgBook2, imgBook3 } from '../../assets/img';
const { height, width } = Dimensions.get('window');

const initialState = {
    modalHapus: false,
    idHapus: 0,
}

class index extends Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }



    render() {

        const  { modalHapus } = this.state;

        const hapusModal = (
            <Modal visible={modalHapus} transparent={true}>
                <TouchableOpacity style={{
                    backgroundColor: 'black',
                    width: '100%',
                    height: '100%',
                    opacity: 0.5
                }} onPress={() => {
                    this.setState({
                        modalHapus: false,
                    })
                }} />
                <View style={{
                    position: 'absolute',
                    width: '80%',
                    alignSelf: 'center',
                    marginTop: height/3,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    padding: 5,
                }}>
                    <View style={{
                        padding: 15,
                        alignSelf: 'center',
                        position: 'absolute',
                        top: '-23%',
                        backgroundColor: 'red',
                        height: 70,
                        width: 70,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 150/2
                    }}>
                        <Icon 
                            size={30}
                            type="font-awesome"
                            name="trash"
                            color="white" />
                    </View>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 20,
                        marginBottom: 10,
                        marginTop: 40,
                    }}>Apakah anda yakin akan menghapus ini?</Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        width: '100%',
                        marginBottom: 5,
                    }}>
                        <TouchableOpacity style={{
                            marginRight: 10,
                            backgroundColor: 'red',
                            borderRadius: 5,
                            padding: 10,
                            width: '20%',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                color: 'white',
                                fontWeight: 'bold'
                            }}>Ya</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            backgroundColor: 'green',
                            borderRadius: 5,
                            padding: 10,
                            width: '20%',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                color: 'white',
                                fontWeight: 'bold'
                            }}>Tidak</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )

        const search = (
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
        )

        const cardButton = () => {
            return (
                <View style={{
                    width: '90%',
                    flexDirection: 'row',
                    marginTop: 3,
                }}>
                    <TouchableOpacity style={style.buttonDelete} onPress={() => {
                        this.setState({
                            modalHapus: true
                        })
                    }}>
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
            )
        }

        const cardContent = () => {
            return (
                <>
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
                                <TouchableOpacity>
                                    <Text style={{
                                        color: colorPrimary
                                    }}>Buku Khusus Algoritma</Text>
                                </TouchableOpacity>
                                <Rating
                                    readonly
                                    startingValue={5}
                                    ratingCount={5}
                                    imageSize={20}
                                />
                                <Text style={{
                                    color: 'grey'
                                }}>Dibaca: 100k</Text>
                                {cardButton()}
                            </View>
                        </View>
                    </View>
                </>
            )
        }

        const contentUtama = (
            <>
                {search}
                <ScrollView>
                    <View style={style.vContent}>
                        {cardContent()}
                    </View>
                </ScrollView>
                {hapusModal}
            </>
        )
        return (
            <View style={style.wrapper}>
                {contentUtama}
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
