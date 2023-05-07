import React from "react";
import { Header } from "react-native-elements";


const AppHead = ({ navigation }) => {


    return (
        <Header
        leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
        centerComponent={{ text: 'Pokedex', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff', onPress: () => navigation.navigate('home')}}
        />
    )
}

export default AppHead