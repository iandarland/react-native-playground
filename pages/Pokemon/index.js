import React, { useState, useEffect }from "react";
import { Text, View, Touchable, TouchableOpacity, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import { ListItem } from "react-native-elements"
import utils from "../../utils"
import styles from "./style"
import axios from "axios"

const Pokemon = ({ route }) => {
    const [pokeData, setPokeData] = useState({})
    const [expanded, setExpanded] = useState(
        {
            appearances: false,
            moves: false
        })

    const { id } = route.params

    // const history = useNavigate()

    const getData = async () => {
        const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        console.log(data.data)
        setPokeData(data.data)
    }

    useEffect(() => {
        getData()
    }, [])

    return(
        <ScrollView style= {styles.container}>
            <ListItem.Accordion 
                content={
                    <>
                        <Icon name = "gamepad" size={30}/>
                        <ListItem.Content style={styles.accordionTitle}>
                            <ListItem.Title>Appearances</ListItem.Title>
                        </ListItem.Content>
                    </>
                }
                isExpanded={expanded.appearances}
                onPress={() => setExpanded({...expanded, appearances: !expanded.appearances})}>
                {pokeData.game_indices?.map((item, i) => (
                    <ListItem key={i} bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title><Text>{utils.capitalize(item.version.name)}</Text></ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                ))}
            </ListItem.Accordion>
            <ListItem.Accordion 
                content={
                    <>
                        <Icon name = "exchange" size={30}/>
                        <ListItem.Content style={styles.accordionTitle}>
                            <ListItem.Title>Moves</ListItem.Title>
                        </ListItem.Content>
                    </>
                }
                isExpanded={expanded.moves}
                onPress={() => setExpanded({...expanded, moves: !expanded.moves})}>
                {pokeData.moves?.map((item, i) => (
                    <ListItem key={i} bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title><Text>{utils.capitalize(item.move.name)}</Text></ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                ))}
            </ListItem.Accordion>
        </ScrollView>
    )
}

export default Pokemon