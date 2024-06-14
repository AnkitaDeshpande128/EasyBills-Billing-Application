import React from "react";
import {Text,View,StyleSheet,Image} from "react-native";

const About=()=>{
    <View>
        
        <Image source={require('../assets/Profile.png')} style={styles.image}/>
    </View>
}
export default About

const styles=StyleSheet.create({
    screen:{
        flex:1,
       
    },
    image:{
        height:300,
        width:300,
        aspectRatio:2,
        marginTop:10,
        
        alignSelf:'center'
    }
})
