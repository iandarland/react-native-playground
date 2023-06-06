import React, { useState, useEffect } from 'react'
import { Input, Card, Button } from 'react-native-elements'
import { View } from 'react-native'
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations'
import Auth from '../../utils/auth'

const SignIn = ({ isLoggedIn, navigation }) => {
    const [signInData, setSignInData] = useState({email: "", password: ""})

    const [login, { error }] = useMutation(LOGIN_USER)

    useEffect(() => {
        isLoggedIn?.loggedIn && navigation.navigate("My Account")
    }, [])

    const handleFormSubmit = async () => {
        try{
            const { data } = await login({
                variables: signInData
            })
            console.log(data)
            await Auth.login(data.login.token, navigation)
            navigation.navigate('My Account');
            navigation.popToTop()
        }
        catch (err){
            console.log(err)
        }
    }

    return(
        <View>
            <Card>
                <Card.Title>Sign In</Card.Title>
                <Card.Divider/>
                <Input placeholder ="Username" leftIcon={{type : "font-awesome", name: "user"}} onChangeText ={value => setSignInData({...signInData, email: value})}/>
                <Input placeholder="Password" leftIcon= {{type : "font-awesome", name: "lock"}} secureTextEntry={true} onChangeText ={value => setSignInData({...signInData, password: value})}/>
                <Button title= "Submit" onPress={handleFormSubmit}/>
            </Card>
        </View>
    )
}

export default SignIn