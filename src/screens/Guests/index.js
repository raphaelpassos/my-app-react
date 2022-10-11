import React, { useState } from "react";
import { View, Text, Pressable} from "react-native";
import styles from "./styles";

const GuestsScreen = (props) => {

    const [adults, setAdults] = useState(0)
    const [children, setChildren] = useState(0)
    const [infants, setInfants] = useState(0)

    
     return (
    <View>
        {/*Row 1: Adults */}
        <View style={styles.row}>

            {/*Titles */}
            <View>
                <Text style={{fontWeight:'bold'}}>Adults</Text>
                <Text style={{color:'#8d8d8d'}}>Ages 13 or above</Text>
            </View>

            {/*Buttons with value */}

            <View style={{flexDirection:'row', alignItems:'center'}}>
               
            {/*   -   */}
                <Pressable 
                onPress={()=> setAdults( Math.max( adults - 1))}
                style={styles.button}        
                >
                <Text style={{fontSize:20, color: '#474747'}}> - </Text>
                </Pressable>
                
            <Text style={{marginHorizontal:20, fontSize:16}}>{adults}</Text>

            {/*   +  */}
            <Pressable
             onPress={()=> setAdults( adults +1)}
             style={styles.button}        
            >
            <Text style={{fontSize:20, color: '#474747'}}> + </Text>
            </Pressable>

            </View>
        </View>

        {/*Row 2: Children */}
         <View style={styles.row}>

            {/*Titles */}
            <View>
                <Text style={{fontWeight:'bold'}}>Children</Text>
                <Text style={{color:'#8d8d8d'}}>Ages 2-12</Text>
            </View>

            {/*Buttons with value */}

            <View style={{flexDirection:'row', alignItems:'center'}}>
               
            {/*   -   */}
                <Pressable 
                onPress={()=> setChildren( Math.max( children - 1))}
                style={styles.button}        
                >
                <Text style={{fontSize:20, color: '#474747'}}> - </Text>
                </Pressable>
                
            <Text style={{marginHorizontal:20, fontSize:16}}>{children}</Text>

            {/*   +  */}
            <Pressable
             onPress={()=> setChildren( children +1)}
             style={styles.button}        
            >
            <Text style={{fontSize:20, color: '#474747'}}> + </Text>
            </Pressable>

            </View>
        </View>

                {/*Row 2: Infants */}

        <View style={styles.row}>

{/*Titles */}
<View>
    <Text style={{fontWeight:'bold'}}>Infants</Text>
    <Text style={{color:'#8d8d8d'}}>Under 2</Text>
</View>

{/*Buttons with value */}

<View style={{flexDirection:'row', alignItems:'center'}}>
   
{/*   -   */}
    <Pressable 
    onPress={()=> setInfants( Math.max( infants - 1))}
    style={styles.button}        
    >
    <Text style={{fontSize:20, color: '#474747'}}> - </Text>
    </Pressable>
    
<Text style={{marginHorizontal:20, fontSize:16}}>{infants}</Text>

{/*   +  */}
<Pressable
 onPress={()=> setInfants( infants +1)}
 style={styles.button}        
>
<Text style={{fontSize:20, color: '#474747'}}> + </Text>
</Pressable>

</View>
</View>
    </View>

    
  );
};

export default GuestsScreen;