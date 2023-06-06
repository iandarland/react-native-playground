import React, {useState, useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Text} from "react-native-elements"
import SignIn from "../../pages/SignIn"
import Auth from "../../utils/auth"
import MyAccount from '../../pages/MyAccount';

const Stack = createNativeStackNavigator()

const AccountTab = () =>{
    const [loggedIn, setLoggedIn] = useState({
        loggedIn:false,
        complete: false
    })
    console.log("is logged in:", loggedIn)

    useEffect(()=> {
        async function getLoggedIn() {
        const check = await Auth.loggedIn()
        setLoggedIn({
            loggedIn: check,
            complete: true
        })
        }
        getLoggedIn()
    }, [])
    if(!loggedIn.complete){
        return(
            <Text>loading...</Text>
        )
    }

    if (loggedIn.complete && !loggedIn.loggedIn){
    return(
        <Stack.Navigator initialRouteName= "Sign In">
            <Stack.Screen name= "Sign In" component= {SignIn}/>
            <Stack.Screen name= "My Account" component = {MyAccount} initialParams={{ isLoggedIn: loggedIn, setLoggedIn: setLoggedIn}}/>
        </Stack.Navigator>
    )
    }else{
    return(
            <Stack.Navigator initialRouteName= "My Account">
                <Stack.Screen name= "Sign In" component= {SignIn} initialParams={{ isLoggedIn: loggedIn.loggedIn}}/>
                <Stack.Screen name= "My Account" component = {MyAccount}initialParams={{ isLoggedIn: loggedIn.loggedIn}}/>
            </Stack.Navigator>
    )
    }
}

export default AccountTab