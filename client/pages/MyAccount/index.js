import React, {useEffect} from "react"
import {Text, Card} from "react-native-elements"
import {ScrollView, View} from "react-native"
import {useQuery} from "@apollo/client"
import { QUERY_ME } from "../../utils/queries"
import Auth from "../../utils/auth"

const MyAccount = ({isLoggedIn}) => {
    const {loading, data} =useQuery(QUERY_ME)
    // console.log(query)
    useEffect(() => {
        console.log("this is the data", data)
    }, [loading])
    if(loading){
        return(
            <Text>...loading</Text>
        )
    }
    
    return (
        <ScrollView>
            <View>
                <Card>
                    <Card.Title>{data?.me.username}</Card.Title>
                </Card>
            </View>
        </ScrollView>
    )
}

export default MyAccount