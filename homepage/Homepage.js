import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import Winneba from '../Universities/Winneba';
import Legon from '../Universities/Legon';
import Ck from '../Universities/Ck';
import Ucc from '../Universities/Ucc';
import Knust from '../Universities/Knust';

function Homepage() {
  
  return (
    <View style={styles.HomeContainer}>

              {/* -----HEADER------ */}

            <View style={styles.Header}>

             <View style={styles.headingContainer}>
              <Text style={styles.heading}>
                Uni explorer
              </Text>
             </View>

             <View style={styles.searchBtn}>
              <View>
                <Image
                   source={require('../assets/search-icon.png')}
                   style={styles.searchBtnImage}
                 />
              </View>
             </View>
              
            </View>

            {/* ------FIXED UNDER LINKS----- */}

            <View style={styles.fixedContainer}>

             <View style={styles.fixedmains}>
               <View>
               <Image
                   source={require('../assets/home.png')}
                   style={styles.fixedImage}
                 />
                 <Text style={styles.fixedHeading}>Home</Text>
               </View>
             </View>

             <View style={styles.fixedmains}>
             <View>
                <Image
                   source={require('../assets/update.png')}
                   style={styles.fixedImage}
                 />
                 <Text style={styles.fixedHeading}>update</Text>
               </View>
             </View>

             <View style={styles.fixedmains}>
             <View>
                <Image
                   source={require('../assets/trends.png')}
                   style={styles.fixedImage}
                 />
                 <Text style={styles.fixedHeading}>trends</Text>
               </View>
             </View>

            </View>

            {/* ======= LISTING THE UNIVERSITIES ======== */}

          
           <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.listContainer}>

              <View>
                <Winneba/>
              </View>

              <View>
                <Ck/>
              </View>

              <View>
                <Ucc/>
              </View>

              <View>
                <Knust/>
              </View>

              <View>
                <Legon/>
              </View>

              <View>
                <Winneba/>
              </View>

              <View>
                <Knust/>
              </View>

              <View>
                <Ucc/>
              </View>

              <View>
                <Winneba/>
              </View>

              {/* ===========REMEMBER  THE LAST  MARGIN============= */}

              <View style={{marginBottom:100}}>
                <Ck/>
              </View>





            </View>
           </ScrollView>            
    </View>
  );
}

const styles = StyleSheet.create({
 HomeContainer: {
   flex:1,
   backgroundColor: 'lightyellow',
  },
  Header: {
   backgroundColor:'#777',
   display:'flex',
   alignItems:'center',
   textAlign:'center',
   flexDirection:'row',
   justifyContent:'space-between',
   paddingTop:50,
   paddingBottom:20
  },
  heading: {
   color:'#fff',
   fontSize:30,
   marginLeft:10,
   textTransform:'capitalize'
  },
  searchBtnImage: {
   width:30,
   height:30,
   marginRight:20
  },

    // ======= FIXED NAVIGATION  ========

  fixedContainer:{
   position:'absolute',
   zIndex:10,
   bottom:0,
   flexDirection:'row',
   backgroundColor:'#666',
   width:'100%',
   height:90,
   justifyContent:'space-between',
   textAlign:'center',
   alignItems:'center'
  },
  fixedmains:{
   flex:0.21,
   alignItems:'center',
   textAlign:'center',
  },
  fixedImage:{
   maxWidth:'60%',
   maxHeight:'60%',
  },
  fixedHeading:{
   textTransform:'capitalize',
   color:'lightyellow',
   fontSize:14
  },

            /* ======= LISTING THE UNIVERSITIES ======== */

   listContainer:{
    width:'100%',
    flex:1,
    marginTop:10,
   },
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
});

export default Homepage