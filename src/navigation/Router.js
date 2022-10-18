import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DestinationSearchScreen  from "../screens/DestinationSearch";
import GuestsScreen  from "../screens/Guests";


const Stack = createStackNavigator();

const Router = (props) => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name={"Destination Search"} 
            component={DestinationSearchScreen}
            options={{
                title: "Search your destination"
            }}
            />

        <Stack.Screen 
            name={"Guests"} 
            component={GuestsScreen}
            options={{
                title: "How many people?"
            }}
            />

        </Stack.Navigator>
    )
}
export default Router;
