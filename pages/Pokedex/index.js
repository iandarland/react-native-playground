import React, { useState } from "react";
import { Button, Image, ScrollView, View } from "react-native";
import PokeContainer from "../../components/PokeContainer";

const Pokedex = () => {
    const [pixState, setPixState] = useState(false)

    return(
        <>
        <View>
            <PokeContainer/>
        </View>
        </>
    )
}

export default Pokedex