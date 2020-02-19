import React from 'react';
import { View, Text } from 'react-native';
import RootStack from "./src/stack/RootStack"

export default class App extends React.Component {
  render(){
    return(
      // <View>
      //   <Text>Hello</Text>
      // </View>
      <RootStack/>
    )
  }
}
