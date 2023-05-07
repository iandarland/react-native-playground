import React, { useEffect } from 'react';
import { Image, Text } from "react-native";
import { Avatar } from "react-native-elements";
import styles from "./style";

const PokeHead  = ({params}) => {
    useEffect(()=>{console.log(params.title)});
    if(!params.title){
        return(
            <Text>...loading</Text>
        )
    }

    return(
        <>
            <Avatar
                style={{ width: 50, height: 50 }}
                source={{
                    uri: params.thumbData
                }}
                title= {params.title}
            />
            <Text style = {styles.headerTitle}>{params.title}</Text>
        </>
    )
};

export default PokeHead;