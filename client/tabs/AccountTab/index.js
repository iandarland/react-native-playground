import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from "../../pages/SignIn"
import Auth from "../../utils/auth"
import MyAccount from '../../pages/MyAccount';

const Stack = createNativeStackNavigator()

const AccountTab = () =>{
    return(
        <Stack.Navigator initialRouteName= "Sign In">
            <Stack.Screen name= "Sign In" component= {SignIn}/>
            <Stack.Screen name= "My Account" component = {MyAccount}/>
        </Stack.Navigator>
    )
}

export default AccountTab