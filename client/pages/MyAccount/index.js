import React, {useEffect} from "react"
import {Text} from "react-native-elements"
import {useQuery} from "@apollo/client"
import { QUERY_ME } from "../../utils/queries"

const MyAccount = () => {
    const {loading, data} =useQuery(QUERY_ME)

    useEffect(() => {
        console.log(data)
    },[loading])

    return (
        <Text>This is the Account Page</Text>
    )
}

export default MyAccount