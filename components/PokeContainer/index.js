import React, { useEffect, useState } from "react";
import { Text, FlatList, TouchableOpacity } from "react-native";
import axios from "axios";
import PokeCard from "../PokeCard";
import {ListItem, Avatar} from "react-native-elements"
import utils from '../../utils/index'

const PokeContainer = ({ navigation }) => {
  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    getPokes();
  }, []);

  const getPokes = async () => {

    const pokeCalls = [];

    for (let i = 1; i < 152; i++) {
      pokeCalls.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`));
    }

    const callWaiting = await Promise.all(pokeCalls);

    setPokeData(callWaiting);
  };
  return (
    <FlatList
      data={pokeData}
      keyExtractor={({ data }) => data.id}
      renderItem={({item}) => (
        // <Link to = {`/pokemon/${item.data.id}`}>
        <TouchableOpacity onPress = {() => navigation.navigate('pokemon', { id : item.data.id, title: utils.capitalize(item.data.name)} )}>
          <PokeCard data={item.data} />
        </TouchableOpacity>
        // {/* </Link> */}
      )}
    />
  );
};

export default PokeContainer;
