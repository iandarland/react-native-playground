import React from 'react'
import { Input, Card, Button } from 'react-native-elements'
import { View } from 'react-native'

const Profile = () => {
    
    return(
        <View>
            <Card>
                <Card.Title>Sign In</Card.Title>
                <Card.Divider/>
                <Input placeholder ="Username" leftIcon={{type : "font-awesome", name: "user"}}/>
                <Input placeholder="Password" leftIcon= {{type : "font-awesome", name: "lock"}} secureTextEntry={true} />
                <Button title= "Submit"/>
            </Card>
        </View>
    )
}

export default Profile
