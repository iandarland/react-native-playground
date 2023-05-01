import React, { useState, useEffect }from "react";
import { Text, View } from "react-native";
// import {useNavigate} from "react-router-dom"
import syles from "./style"
import axios from "axios"

const Pokemon = ({ route }) => {
    const [pokeData, setPokeData] = useState({})

    const { id } = route.params

    // const history = useNavigate()

    const getData = async () => {
        const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
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