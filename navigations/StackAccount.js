import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Account from '../screens/Account'
const Stack = createStackNavigator()
export default function StackAccount() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="account"
                component={Account}
                options={{title:"Favoritos"}}
            />
        </Stack.Navigator>
    )
}
