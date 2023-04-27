import React, { useEffect, useState } from "react";
import { Text, FlatList } from "react-native";
import { Link } from "react-router-native"
import axios from "axios";
import PokeCard from "../PokeCard";
import {ListItem, Avatar} from "react-native-elements"

const PokeContainer = () => {
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
        <Link to = {`/pokemon/${item.data.id}`}>
        <PokeCard data={item.data}/>
        </Link>
      )}
    />
  );
};

export default PokeContainer;
