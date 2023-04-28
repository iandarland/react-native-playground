import React from "react";
import { ListItem, Avatar } from "react-native-elements"

const PokeCard = ({data:monster}) => {

    return(
        <ListItem key={monster.id} bottomDivider>
        <Avatar source={{uri: monster.sprites.front_default}} />
        <ListItem.Content>
          <ListItem.Title>{monster.name}</ListItem.Title>
          <ListItem.Subtitle>{monster.types[0].name}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    )
}

export default PokeCard