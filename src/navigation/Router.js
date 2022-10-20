import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DestinationSearchScreen  from "../screens/DestinationSearch";

const Stack = createStackNavigator();

const Router = (props) => {
    return(
       <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
            name={"Destination Search"} 
            component={DestinationSearchScreen}
            />
        </Stack.Navigator>
       </NavigationContainer>
    )
}
export default Router;
