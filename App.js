import React from "react";
import {NativeRouter, Route, Routes, Link} from "react-router-native"
import CatPix from "./components/CatPix";
import { View, Text, StyleSheet } from "react-native";

const App = () =>{
    return(
        <View style = {styles.container}>
                <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Home</Text>
        </Link>
        <NativeRouter>
            <Route exact path= "/" component= {(props) => <CatPix {...props}/>}/>
        </NativeRouter>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      marginTop: 25,
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