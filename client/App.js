import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import PokedexTab from "./tabs/PokedexTab"
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context"
import AccountTab from "./tabs/AccountTab";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GRAPHQL_URI } from "@env"



const Tab = createMaterialBottomTabNavigator()


const httpLink = createHttpLink({
  uri: GRAPHQL_URI
});

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

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