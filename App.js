import { StyleSheet, View } from 'react-native';

import React from 'react';

import Homepage from './Homepage/Homepage';



export default function App() {
  return (

    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen name="Homepage" component={Homepage} />
    //     <Stack.Screen name="Winneba" component={Winneba} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    
    <View style={styles.container}>
            <Homepage/>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff',
  },
});
