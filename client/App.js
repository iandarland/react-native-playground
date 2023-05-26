import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Pokedex from "./pages/Pokedex";
import PokedexTab from "./tabs/PokedexTab"
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context"
import Pokemon from "./pages/Pokemon";
import PokeHead from "./pages/Pokemon/PokeHead";
import MoveDetail from "./pages/MoveDetail";
import AccountTab from "./tabs/AccountTab";


const Stack = createNativeStackNavigator()
const Tab = createMaterialBottomTabNavigator()
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache()
})

const App = () =>{

    return(
      <ApolloProvider client ={client}>
        <SafeAreaProvider>
        <NavigationContainer>
        <View style = {styles.container}>
            <Tab.Navigator initialRouteName="Pokedex">
              <Tab.Screen name="Pokedex" component={PokedexTab}/>
              <Tab.Screen name= "Account" component={AccountTab}/>
            </Tab.Navigator>
        </View>
        </NavigationContainer>
        </SafeAreaProvider>
      </ApolloProvider>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        alignContent:'center',
        justifyContent: "flex-start",
      padding: 10

    },
    header: {
      fontSize: 20
    },
    nav: {
      flexDirection: "row",
      justifyContent: "space-around"
    },
    navItem: {
      flex: 1,
      alignItems: "center",
      padding: 10
    },
    subNavItem: {
      padding: 5
    },
    topic: {
      textAlign: "center",
      fontSize: 15
    }
  });

export default App