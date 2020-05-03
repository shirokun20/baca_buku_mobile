import React, { Component } from 'react'
import { SearchBar } from 'react-native-elements'
//
class index extends Component {

    state = {
        search: '',
    }

    render() {
        return (
            <SearchBar
                placeholder="Cari buku pemrograman"
                lightTheme={true}
                containerStyle={{ backgroundColor: '#fff', borderBottomWidth: 0, borderTopWidth: 0 }}
                inputContainerStyle={{ backgroundColor: '#e0e0e0' }}
                inputStyle={{ fontSize: 16 }}
                onChangeText={(value) => { this.setState({ search: value }) }}
                value={this.state.search}
            />
        )
    }
}

export default index
