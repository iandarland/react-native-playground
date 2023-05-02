import React, { useEffect, useState } from "react";
import { Text, FlatList, TouchableOpacity } from "react-native";
import axios from "axios";
import PokeCard from "../PokeCard";
import {ListItem, Avatar} from "react-native-elements";
import utils from '../../utils/index';
import AsyncStorage from '@react-native-async-storage/async-storage';


const PokeContainer = ({ navigation }) => {
  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    getPokes();
  }, []);

  const getPokes = async () => {
    try {
    const savedPokes = await AsyncStorage.getItem('pokes')
  

    if(savedPokes){
      return setPokeData(JSON.parse(savedPokes))
    }
    const pokeCalls = [];

    for (let i = 1; i < 152; i++) {
      pokeCalls.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`));
      console.log('pop')
    }
    
    const callWaiting = await Promise.all(pokeCalls);
    console.log(callWaiting[0])
    const condensedData = callWaiting.map(item => {
      const miniPoke = {
        data: {
          id: item.data.id,
          name: item.data.name,
          sprites: {
            front_default: item.data.sprites.front_default
          },
          types: [
            {
              type: {
                name: item.data.types[0].type?.name
              }
            }
          ]
        }
      }
      return miniPoke
    })

    AsyncStorage.setItem('pokes', JSON.stringify(condensedData))
    setPokeData(condensedData);
  }
  catch (e){
    console.log(e)
  }
  };
  return (
    <FlatList
      data={pokeData}
      keyExtractor={({ data }) => data.id}
      renderItem={({item}) => (
        <TouchableOpacity onPress = {() => navigation.navigate('pokemon', { id : item.data.id, title: utils.capitalize(item.data.name)} )}>
          <PokeCard data={item.data} />
        </TouchableOpacity>
      )}
    />
  );
};

export default PokeContainer;
