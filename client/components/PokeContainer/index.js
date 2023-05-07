import React, { useEffect, useState } from "react";
import { Text, FlatList, TouchableOpacity } from "react-native";
import axios from "axios";
import PokeCard from "../PokeCard";
import {ListItem, Avatar, Input} from "react-native-elements";
import utils from '../../utils/index';
import AsyncStorage from '@react-native-async-storage/async-storage';


const PokeContainer = ({ navigation }) => {
  const [pokeData, setPokeData] = useState({control:[], search: []});
  const [search, setSearch] = useState('')

  useEffect(() => {
    getPokes();
  }, []);

  useEffect(() => {
    if(search){
      const filteredPokes = pokeData.control.filter(item => item.data.name.includes(search.toLowerCase()))
      setPokeData({...pokeData, search: filteredPokes})
    }else{
      setPokeData({...pokeData, search: pokeData.control})
    }
  }, [search])

  const getPokes = async () => {
    try {
    const savedPokes = await AsyncStorage.getItem('pokes')
  

    if(savedPokes){
      const parsedData = JSON.parse(savedPokes)
      return setPokeData({
        control: parsedData,
        search: parsedData
      })
    }
    const pokeCalls = [];

    for (let i = 1; i < 152; i++) {
      pokeCalls.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`));
    }
    
    const callWaiting = await Promise.all(pokeCalls);
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
    setPokeData({
      control: condensedData,
      search: condensedData
    });
  }
  catch (e){
    console.log(e)
  }
  };
  return (
    <>
    <Input
      placeholder='Search By Name'
      onChangeText={value => setSearch(value)}
    />
    <FlatList
      data={pokeData.search}
      keyExtractor={({ data }) => data.id}
      renderItem={({item}) => (
        <TouchableOpacity onPress = {() => navigation.navigate('Pokemon', { id : item.data.id, thumbData: item.data.sprites.front_default, title: utils.capitalize(item.data.name)} )}>
          <PokeCard data={item.data} />
        </TouchableOpacity>
      )}
    />
    </>
  );
};

export default PokeContainer;
