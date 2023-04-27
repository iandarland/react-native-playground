import React, { useState, useEffect }from "react";
import { Text, View } from "react-native";
import syles from "./style"
import axios from "axios"

const Pokemon = ({ match }) => {
    const [pokeData, setPokeData] = useState({})

    const getData = async () => {
        console.log(match)
        const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${+match?.params.id}/`)
        setPokeData(data.data)
    }

    useEffect(() => {
        getData()
    }, [])

    return(
        <View style= {syles.container}>
            <Text style= {{height: 100}}>{pokeData?.name}</Text>
        </View>
    )
}

export default Pokemon