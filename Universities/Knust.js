import { Text, View, StyleSheet, Image } from 'react-native'
import React from 'react'

 function Knust () {
    return (
        <View style={styles.UniName}>

            <View style={styles.uniLogo}>
            <Image
              source={require('../assets/knust.png')}
              style={styles.logoImage}
            />
            </View>

            <View style={styles.uniName}>
            <Text style={styles.mainName}>Kwame Nkrumah University  of  Science And Technology</Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
  UniName:{
    flexDirection:'row',
    alignItems:'center',
    height:70,
    marginHorizontal:20
   },
   uniLogo:{
    flex:0.2,
   },
   uniName:{
    flex:0.8
   },
   logoImage:{
    width:50,
    height:50
   },
   mainName:{
    fontSize:16,
    color:'#666',
    textTransform:'capitalize',
    letterSpacing:1
   }
})

export default Knust