import React from 'react';
import { StyleSheet, View, Button, Image, Text } from 'react-native';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native-web';
import Restaurant from '../Restaurant';

export default function TelaPasseios() {
  return (
    <ScrollView>
<StatusBar barStyle="dark-content"/>
    <SafeAreaView>
        <Restaurant/>
        <Restaurant/>
        <Restaurant/>
    </SafeAreaView>
</ScrollView>
  );
}
