import React, { useState } from 'react'
import {Text, TextInput, View} from 'react-native'
import styles from './style';

const Cat = () => {
    const [catName, setCatName] = useState('Joey')

    return (
        <View style = {styles.container}>
        <Text>Hello! My Name is {catName}!!!</Text>
        <TextInput style={{
            height: 40,
            width: 90,
            borderColor: 'black',
            borderWidth: 1

        }} 
        defaultValue = {catName} 
        onChangeText={(text)=> setCatName(text)}/>
        </View>
    )
};

export default Cat;