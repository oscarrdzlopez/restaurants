import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements/dist/icons/Icon'

import StackRestaurants from './StackRestaurants'
import StackFavorites from './StackFavorites'
import StackTopRestaurants from './StackTopRestaurants'
import StackSearch from './StackSearch'
import StackAccount from './StackAccount'


const Tab = createBottomTabNavigator()
export default function Navigation() {

    const screenOptions = (route, color) => {
        let iconName
        switch (route.name) {
            case "restaurants":
                iconName = "compass-outline"
                break;
            case "favorites":
                iconName = "heart-outline"
                break;
            case "top-restaurants":
                iconName = "star-outline"
                break;
            case "search":
                iconName = "magnify"
                break;
            case "account":
                iconName = "home-outline"
                break;
        }
        return (
            <Icon
                type="material-community"
                name={iconName}
                size={32}
                color={color}
            />
        )
    }

    return (
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName="restaurants"
                tabBarOptions={{
                    inactiveTintColor: "#a17dc3",
                    activeTintColor:"#442484"
                }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color)
                })}
            >
                <Tab.Screen 
                    name="restaurants"
                    component={StackRestaurants}
                    options={{title:"Restaurantes"}}
                />
            
                <Tab.Screen 
                    name="favorites"
                    component={StackFavorites}
                    options={{title:"Favoritos"}}
                />
            
                <Tab.Screen 
                    name="top-restaurants"
                    component={StackTopRestaurants}
                    options={{title:"Top 5"}}
                />
                
                <Tab.Screen 
                    name="search"
                    component={StackSearch}
                    options={{title:"Buscar"}}
                />

                <Tab.Screen 
                    name="account"
                    component={StackAccount}
                    options={{title:"Mi cuenta"}}
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
}
