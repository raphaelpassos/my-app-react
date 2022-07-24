import React from 'react';
import {  StyleSheet, View, Button, Image, Text } from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native-web';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


const Post = (props) => {

const post = props.post;

const navigation = useNavigation();

const goToPostPage = () => {
    navigation.navigate('Post', {postId: post.id});
  }

 return (
    <View  style={ styles.container}>
    
             {/*Image*/}
            <Image 
            style={styles.image} 
            source={{uri: post.image}}
            />

             {/*Bed e Bedrom*/}
            <Text style={styles.bedroms}> 
             {post.bed} bed {post.bedroom} bedrom 
            </Text>

            {/*Type e Description*/}
            <Text style={styles.description}>
                {post.type}. {post.title}. 
            </Text>

            {/*Old price e new price*/} 
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}> ${post.oldPrice}</Text>
                <Text style={styles.price}> ${post.newPrice}</Text>
                    / night
            </Text>

             {/*Total price*/} 
             <Text style={styles.totalPrice}>${post.totalPrice}</Text>
       </View>
 );
}
export default Post;