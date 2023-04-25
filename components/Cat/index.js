import React, { useState } from 'react'
import {Text, TextInput} from 'react-native'

const Cat = () => {
    const [catName, setCatName] = useState('Joey')

    return (
        <>
        <Text>Hello! My Name is {catName}!!!</Text>
        <TextInput style={{
            height: 40,
            width: 90,
            borderColor: 'black',
            borderWidth: 1

        }} 
        defaultValue = {catName} 
        onChangeText={(text)=> setCatName(text)}/>
        </>
    )
};

export default Cat;