import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pokedex from "./pages/Pokedex";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context"
import Pokemon from "./pages/Pokemon";


const Stack = createNativeStackNavigator()

const App = () =>{

    return(
        <SafeAreaProvider>
        <NavigationContainer>
        <View style = {styles.container}>
            <Stack.Navigator initialRouteName="Pokedex">
                <Stack.Screen name= "Pokedex" component= {Pokedex}/>
                <Stack.Screen 
                    name = "pokemon" 
                    component = {Pokemon}
                    options= {({route}) => ({title: route.params.title})} />
            </Stack.Navigator>
        </View>
        </NavigationContainer>
        </SafeAreaProvider>
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