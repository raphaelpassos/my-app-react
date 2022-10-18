import React, {useState} from "react";
import { View, FlatList, Text, TextInput, Pressable} from "react-native";
import styles from "./styles.js";
import searchResults from "../../../assets/data/search.js";
import Entypo from  "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const DestinationSearchScreen = (props) => {
    
    const [inputText, setInputText] = useState([]);

    const navigation = useNavigation()

     return (

    <View style={styles.container}>

     {/* Input component*/}
    <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
        />

     {/* List of destination*/}
        <FlatList
        data={searchResults}
        renderItem={({item}) => (
            <Pressable onPress={() => navigation.navigate('Guests')} style={styles.row}>
                <View style={styles.iconContainer}>
                    <Entypo name={"location-pin"} size={30} />
                </View>
                <Text style={{styles}}>{item.description}</Text>
            </Pressable>
     )}
        />

    </View>

  );
};

export default DestinationSearchScreen;