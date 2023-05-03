import React, { useEffect, useState } from "react";
import {Card} from "react-native-elements";
import { Text } from "react-native";
import axios from "axios";
import utils from "../../utils";

const MoveDetail = ({route}) => {
    const { url } = route.params
    const [moveState, setMoveState] = useState({})

    const getMove = async () => {
        const moveData = await axios.get(url)
        setMoveState(moveData.data)
    }

    useEffect(()=>{
        getMove()
    },[])


    if(!moveState.name){
        return(
            <Text>...loading</Text>
        )
    }
    return(
    <Card>
  <Card.Title>{utils.capitalize(moveState.name)}</Card.Title>
  <Card.Divider/>
    <Text>{moveState.effect_entries[0].effect}</Text>
</Card>
)}

export default MoveDetail