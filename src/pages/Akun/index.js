import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { icComingSoon } from '../../assets/img'

export default class index extends Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
                <Image source={icComingSoon} style={{ width:200,height:200,resizeMode:'contain' }}/>
                <Text style={{color:'#424242',fontSize:24,fontWeight:'bold'}}>Coming Soon !!!</Text>
            </View>
        )
    }
}
