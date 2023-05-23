import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from "../../pages/SignIn"

const Stack = createNativeStackNavigator()

const AccountTab = () =>{
    return(
        <Stack.Navigator initialRouteName="Sign In">
            <Stack.Screen name= "Sign In" component= {SignIn}/>
        </Stack.Navigator>
    )
}

export default AccountTab