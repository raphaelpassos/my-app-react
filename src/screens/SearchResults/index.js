import React from "react";
import { View, FlatList } from "react-native";
import feed from "../../../assets/data/feed";
import Post from '../../componentes/Post';
import Restaurant from "../../componentes/Restaurant";

const SearchResultsScreen = (props) => {

  const { posts } = props;

  return (
    <View>
      <FlatList
        data={feed}
        renderItem={({item}) => <Post post={item} />}
      />
    </View>
  );
};

export default SearchResultsScreen;