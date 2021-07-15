
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import scanScreen from './screens/scanScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

export default class App extends React.Component{
render(){
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
}
}

const TabNavigator = createBottomTabNavigator({
  Scan : {screen:scanScreen},
})

const AppContainer = createAppContainer(TabNavigator);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'center',
  },
});