import React, { useEffect } from "react";
import { ListItem, Avatar } from "react-native-elements"
import utils from "../../utils"

const PokeCard = ({data:monster}) => {
    useEffect(()=>{console.log(monster)},[])
    return(
        <ListItem key={monster.id} bottomDivider>
        <Avatar source={{uri: monster.sprites.front_default}} />
        <ListItem.Content>
          <ListItem.Title>{utils.capitalize(monster.name)}</ListItem.Title>
          <ListItem.Subtitle>{monster.types[0].type.name}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron/>
      </ListItem>
    )
}

export default PokeCard