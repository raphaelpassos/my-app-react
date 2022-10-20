import React, {useState} from "react";
import { View, FlatList, Text, TextInput} from "react-native";
import styles from "./styles.js";
import searchResults from "../../../assets/data/search.js";
import Entypo from  "react-native-vector-icons/Entypo";

const DestinationSearchScreen = (props) => {
    
    const [inputText, setInputText] = useState([]);

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
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <Entypo name={"location-pin"} size={30} />
                </View>
                <Text style={{styles}}>{item.description}</Text>
            </View>
     )}
        />

    </View>

  );
};

export default DestinationSearchScreen;