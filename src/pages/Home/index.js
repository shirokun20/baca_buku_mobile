import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import { colorPrimary, colorWhite } from '../../assets/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { icReadingBook, icDesktop, icMobile, icWeb, icGames, imgBook1, imgBook2, imgBook3 } from '../../assets/img';
import SkeletonContent from "react-native-skeleton-content-nonexpo";
export default class index extends Component {
    state = {
        search: '',
        isLoading: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 4000);
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.containerSearch}>
                    <SearchBar
                        placeholder="Cari buku pemrograman"
                        lightTheme={true}
                        containerStyle={{ backgroundColor: '#fff', borderBottomWidth: 0, borderTopWidth: 0 }}
                        inputContainerStyle={{ backgroundColor: '#e0e0e0' }}
                        inputStyle={{ fontSize: 16 }}
                        onChangeText={(value) => { this.setState({ search: value }) }}
                        value={this.state.search}
                    />
                </View>

                <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 7 }} >
                    <View style={{ flex: 1, borderRadius: 4, justifyContent: 'flex-start', backgroundColor: colorPrimary, padding: 20, flexDirection: 'row', marginTop: 5 }}>
                        <View style={{ flex: 2 }}>
                            <Text style={{ color: colorWhite, fontSize: 24, fontWeight: 'bold' }}>Selamat Membaca Buku Pemrograman</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <Image source={icReadingBook} style={{ width: 100, height: 100, resizeMode: 'contain' }} />
                        </View>
                    </View>
                    <View style={{ height: 10 }} />
                    <View>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#424242' }}>Berdasarkan Platform</Text>
                        </View>
                        <View style={styles.icWrapper}>
                            <TouchableOpacity style={styles.cardCustom}>
                                <SkeletonContent
                                    containerStyle={{ flex: 1 }}
                                    isLoading={this.state.isLoading}
                                    duration='1000'
                                    layout={[
                                        { key: 'someid', width: 50, height: 50 }
                                    ]}
                                >
                                    <Image source={icDesktop} style={styles.icContainer} />
                                    <Text style={styles.icText}>Desktop</Text>
                                </SkeletonContent>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cardCustom}>
                                <SkeletonContent
                                    containerStyle={{ flex: 1 }}
                                    isLoading={this.state.isLoading}
                                    duration='1000'
                                    layout={[
                                        { key: 'someid', width: 50, height: 50 }
                                    ]}
                                >
                                    <Image source={icMobile} style={styles.icContainer} />
                                    <Text style={styles.icText}>Mobile</Text>
                                </SkeletonContent>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cardCustom}>
                                <SkeletonContent
                                    containerStyle={{ flex: 1 }}
                                    isLoading={this.state.isLoading}
                                    duration='1000'
                                    layout={[
                                        { key: 'someid', width: 50, height: 50 }
                                    ]}
                                >
                                    <Image source={icWeb} style={styles.icContainer} />
                                    <Text style={styles.icText}>Web</Text>
                                </SkeletonContent>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cardCustom}>
                                <SkeletonContent
                                    containerStyle={{ flex: 1 }}
                                    isLoading={this.state.isLoading}
                                    duration='1000'
                                    layout={[
                                        { key: 'someid', width: 50, height: 50 }
                                    ]}
                                >
                                    <Image source={icGames} style={styles.icContainer} />
                                    <Text style={styles.icText}>Game</Text>
                                </SkeletonContent>
                            </TouchableOpacity>
                        </View >
                    </View>
                    <View>
                        <View style={styles.wrapperTitleBook}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#424242' }}>Buku Terpopuler</Text>
                            {/* <Text style={{ fontSize: 13, color: '#424242' }}>Lihat semua</Text> */}
                            <Icon name='arrow-forward' size={20} />
                        </View>
                        <ScrollView horizontal={true} style={styles.imgWrapper}>
                            <SkeletonContent
                            containerStyle={{flex:1}}
                            isLoading={this.state.isLoading}
                            layout={[
                                {key:'someid',width:85,height:125,marginRight:10}
                            ]}
                            >
                                <View style={styles.contentBookContainer}>
                                    <Image source={imgBook1} style={styles.imgContainer} />
                                    <Text style={styles.textContent}>Algoritma Pemdas</Text>
                                </View>
                            </SkeletonContent>
                            <SkeletonContent
                            containerStyle={{flex:1}}
                            isLoading={this.state.isLoading}
                            layout={[
                                {key:'someid',width:85,height:125,marginRight:10}
                            ]}
                            >
                                <View style={styles.contentBookContainer}>
                                    <Image source={imgBook2} style={styles.imgContainer} />
                                    <Text style={styles.textContent}>Bahasa C# Pemula</Text>
                                </View>
                            </SkeletonContent>
                            <SkeletonContent
                            containerStyle={{flex:1}}
                            isLoading={this.state.isLoading}
                            layout={[
                                {key:'someid',width:85,height:125,marginRight:10}
                            ]}
                            >
                                <View style={styles.contentBookContainer}>
                                    <Image source={imgBook3} style={styles.imgContainer} />
                                    <Text style={styles.textContent}>Mysql Untuk Pemula</Text>
                                </View>
                            </SkeletonContent>
                            <SkeletonContent
                            containerStyle={{flex:1}}
                            isLoading={this.state.isLoading}
                            layout={[
                                {key:'someid',width:85,height:125,marginRight:10}
                            ]}
                            >
                                <View style={styles.contentBookContainer}>
                                    <Image source={imgBook1} style={styles.imgContainer} />
                                    <Text style={styles.textContent}>Algoritma Pemdas</Text>
                                </View>
                            </SkeletonContent>
                            <SkeletonContent
                            containerStyle={{flex:1}}
                            isLoading={this.state.isLoading}
                            layout={[
                                {key:'someid',width:85,height:125,marginRight:10}
                            ]}
                            >
                                <View style={styles.contentBookContainer}>
                                    <Image source={imgBook2} style={styles.imgContainer} />
                                    <Text style={styles.textContent}>Bahasa C# Pemula</Text>
                                </View>
                            </SkeletonContent>
                            <SkeletonContent
                            containerStyle={{flex:1}}
                            isLoading={this.state.isLoading}
                            layout={[
                                {key:'someid',width:85,height:125,marginRight:10}
                            ]}
                            >
                                <View style={styles.contentBookContainer}>
                                    <Image source={imgBook3} style={styles.imgContainer} />
                                    <Text style={styles.textContent}>Mysql Untuk Pemula</Text>
                                </View>
                            </SkeletonContent>
                            <SkeletonContent
                            containerStyle={{flex:1}}
                            isLoading={this.state.isLoading}
                            layout={[
                                {key:'someid',width:85,height:125,marginRight:10}
                            ]}
                            >
                                <View style={styles.contentBookContainer}>
                                    <Image source={imgBook1} style={styles.imgContainer} />
                                    <Text style={styles.textContent}>Algoritma Pemdas</Text>
                                </View>
                            </SkeletonContent>
                        </ScrollView>
                    </View>
                    <View>
                        <View style={styles.wrapperTitleBook}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#424242' }}>Baru Di Rilis</Text>
                            {/* <Text style={{ fontSize: 13, color: '#424242' }}>Lihat semua</Text> */}
                            <Icon name='arrow-forward' size={20} />
                        </View>
                        <ScrollView horizontal={true} style={styles.imgWrapper}>
                            <SkeletonContent
                            containerStyle={{flex:1}}
                            isLoading={this.state.isLoading}
                            layout={[
                                {key:'someid',width:85,height:125,marginRight:10}
                            ]}
                            >
                                <View style={styles.contentBookContainer}>
                                    <Image source={imgBook1} style={styles.imgContainer} />
                                    <Text style={styles.textContent}>Algoritma Pemdas</Text>
                                </View>
                            </SkeletonContent>
                            <SkeletonContent
                            containerStyle={{flex:1}}
                            isLoading={this.state.isLoading}
                            layout={[
                                {key:'someid',width:85,height:125,marginRight:10}
                            ]}
                            >
                                <View style={styles.contentBookContainer}>
                                    <Image source={imgBook2} style={styles.imgContainer} />
                                    <Text style={styles.textContent}>Bahasa C# Pemula</Text>
                                </View>
                            </SkeletonContent>
                            <SkeletonContent
                            containerStyle={{flex:1}}
                            isLoading={this.state.isLoading}
                            layout={[
                                {key:'someid',width:85,height:125,marginRight:10}
                            ]}
                            >
                                <View style={styles.contentBookContainer}>
                                    <Image source={imgBook3} style={styles.imgContainer} />
                                    <Text style={styles.textContent}>Mysql Untuk Pemula</Text>
                                </View>
                            </SkeletonContent>
                            <SkeletonContent
                            containerStyle={{flex:1}}
                            isLoading={this.state.isLoading}
                            layout={[
                                {key:'someid',width:85,height:125,marginRight:10}
                            ]}
                            >
                                <View style={styles.contentBookContainer}>
                                    <Image source={imgBook1} style={styles.imgContainer} />
                                    <Text style={styles.textContent}>Algoritma Pemdas</Text>
                                </View>
                            </SkeletonContent>
                            <SkeletonContent
                            containerStyle={{flex:1}}
                            isLoading={this.state.isLoading}
                            layout={[
                                {key:'someid',width:85,height:125,marginRight:10}
                            ]}
                            >
                                <View style={styles.contentBookContainer}>
                                    <Image source={imgBook2} style={styles.imgContainer} />
                                    <Text style={styles.textContent}>Bahasa C# Pemula</Text>
                                </View>
                            </SkeletonContent>
                            <SkeletonContent
                            containerStyle={{flex:1}}
                            isLoading={this.state.isLoading}
                            layout={[
                                {key:'someid',width:85,height:125,marginRight:10}
                            ]}
                            >
                                <View style={styles.contentBookContainer}>
                                    <Image source={imgBook3} style={styles.imgContainer} />
                                    <Text style={styles.textContent}>Mysql Untuk Pemula</Text>
                                </View>
                            </SkeletonContent>
                            <SkeletonContent
                            containerStyle={{flex:1}}
                            isLoading={this.state.isLoading}
                            layout={[
                                {key:'someid',width:85,height:125,marginRight:10}
                            ]}
                            >
                                <View style={styles.contentBookContainer}>
                                    <Image source={imgBook1} style={styles.imgContainer} />
                                    <Text style={styles.textContent}>Algoritma Pemdas</Text>
                                </View>
                            </SkeletonContent>
                        </ScrollView>
                    </View>
                    <View>
                        <View style={styles.wrapperTitleBook}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#424242' }}>Untuk Pemula</Text>
                            {/* <Text style={{ fontSize: 13, color: '#424242' }}>Lihat semua</Text> */}
                            <Icon name='arrow-forward' size={20} />
                        </View>
                        <ScrollView horizontal={true} style={styles.imgWrapper}>
                            <SkeletonContent
                            containerStyle={{flex:1}}
                            isLoading={this.state.isLoading}
                            layout={[
                                {key:'someid',width:85,height:125,marginRight:10}
                            ]}
                            >
                                <View style={styles.contentBookContainer}>
                                    <Image source={imgBook1} style={styles.imgContainer} />
                                    <Text style={styles.textContent}>Algoritma Pemdas</Text>
                                </View>
                            </SkeletonContent>
                            <SkeletonContent
                            containerStyle={{flex:1}}
                            isLoading={this.state.isLoading}
                            layout={[
                                {key:'someid',width:85,height:125,marginRight:10}
                            ]}
                            >
                                <View style={styles.contentBookContainer}>
                                    <Image source={imgBook2} style={styles.imgContainer} />
                                    <Text style={styles.textContent}>Bahasa C# Pemula</Text>
                                </View>
                            </SkeletonContent>
                            <SkeletonContent
                            containerStyle={{flex:1}}
                            isLoading={this.state.isLoading}
                            layout={[
                                {key:'someid',width:85,height:125,marginRight:10}
                            ]}
                            >
                                <View style={styles.contentBookContainer}>
                                    <Image source={imgBook3} style={styles.imgContainer} />
                                    <Text style={styles.textContent}>Mysql Untuk Pemula</Text>
                                </View>
                            </SkeletonContent>
                            <SkeletonContent
                            containerStyle={{flex:1}}
                            isLoading={this.state.isLoading}
                            layout={[
                                {key:'someid',width:85,height:125,marginRight:10}
                            ]}
                            >
                                <View style={styles.contentBookContainer}>
                                    <Image source={imgBook1} style={styles.imgContainer} />
                                    <Text style={styles.textContent}>Algoritma Pemdas</Text>
                                </View>
                            </SkeletonContent>
                            <SkeletonContent
                            containerStyle={{flex:1}}
                            isLoading={this.state.isLoading}
                            layout={[
                                {key:'someid',width:85,height:125,marginRight:10}
                            ]}
                            >
                                <View style={styles.contentBookContainer}>
                                    <Image source={imgBook2} style={styles.imgContainer} />
                                    <Text style={styles.textContent}>Bahasa C# Pemula</Text>
                                </View>
                            </SkeletonContent>
                            <SkeletonContent
                            containerStyle={{flex:1}}
                            isLoading={this.state.isLoading}
                            layout={[
                                {key:'someid',width:85,height:125,marginRight:10}
                            ]}
                            >
                                <View style={styles.contentBookContainer}>
                                    <Image source={imgBook3} style={styles.imgContainer} />
                                    <Text style={styles.textContent}>Mysql Untuk Pemula</Text>
                                </View>
                            </SkeletonContent>
                            <SkeletonContent
                            containerStyle={{flex:1}}
                            isLoading={this.state.isLoading}
                            layout={[
                                {key:'someid',width:85,height:125,marginRight:10}
                            ]}
                            >
                                <View style={styles.contentBookContainer}>
                                    <Image source={imgBook1} style={styles.imgContainer} />
                                    <Text style={styles.textContent}>Algoritma Pemdas</Text>
                                </View>
                            </SkeletonContent>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#fff'
    },
    containerSearch: {
        height: 60
    },
    icWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingHorizontal: 1
    },
    icContainer: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    icText: {
        alignSelf: 'center',
        marginTop: 5,
        color: '#424242',
        fontSize: 13
    },
    contentBookContainer: {
        width: 85, marginRight: 10
    },
    textContent: {
        fontSize: 12,
    },
    wrapperTitleBook: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginTop: 10
    },
    imgWrapper: {
        flexDirection: 'row',
        marginTop: 10,
    },
    imgContainer: {
        width: 85,
        height: 125,
        borderRadius: 5,
        resizeMode: 'contain',
    },
    cardCustom: {
        padding: 3,
        width: '23%',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    }

})
