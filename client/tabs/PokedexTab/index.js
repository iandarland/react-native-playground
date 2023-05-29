import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pokedex from '../../pages/Pokedex';
import MoveDetail from '../../pages/MoveDetail';
import Pokemon from '../../pages/Pokemon';
import PokeHead from '../../pages/Pokemon/PokeHead';

const Stack = createNativeStackNavigator()

const PokedexTab = () =>{
    return(
        <Stack.Navigator initialRouteName="Global Pokedex">
            <Stack.Screen name= "Global Pokedex" component= {Pokedex}/>
            <Stack.Screen name= "Move Details" component= {MoveDetail}/>
            <Stack.Screen 
                name = "Pokemon" 
                component = { Pokemon }
                // options ={{
                //   headerTitle: (props) => <PokeHead {...props}/>
                // }}
                options= {({route}) => ({
                headerTitle: () => <PokeHead {...route}/>
                })} 
                // options= {({route}) => ({title: route.params.title})} 
            />
        </Stack.Navigator>
    )
}

export default PokedexTab