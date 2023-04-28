import React from "react";
import {NativeRouter, Route, Link} from "react-router-native"
// import { useHistory } from 'react-router-dom'
import { Header } from "react-native-elements"
import Pokedex from "./pages/Pokedex";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context"
import Pokemon from "./pages/Pokemon";

const App = () =>{
    // const history = useHistory()
    return(
        <SafeAreaProvider>
        <NativeRouter>
        <Header
            leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
            centerComponent={{ text: 'Pokedex', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff', onPress: () => window.redirect('/')}}
        />
        <View style = {styles.container}>
            <View style ={styles.nav}>
                <Link to='/' underlayColor="#f0f4f7" style={styles.navItem} replace>
                  <Text>Home</Text>
                </Link>
                <Link to="/pokemon/:id" underlayColor="#f0f4f7" style={styles.navItem}>
                    <Text>Poke</Text>
                </Link>
            </View>
            <Route exact path= "/" component= {Pokedex}/>
            <Route path = "/pokemon/:id" component = {Pokemon}/>
        </View>
        </NativeRouter>
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