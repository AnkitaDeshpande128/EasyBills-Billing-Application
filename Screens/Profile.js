import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const Profile = ({route}) => {
    
        const {email,businessName}=route.params
        console.log(email)
        console.log(businessName)
       
    return (
        <View style={styles.container}>
            <Image source={require('../assets/Profile.png')} style={styles.image}/>
            <Text style={styles.profileText}>Profile Details</Text>
            <View style={styles.info}>
            <Text>Email</Text>
            <Text>{email}</Text>
            </View>
            <View style={styles.info}>
            <Text>Business </Text>
            <Text>{businessName}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,  
        margin:10  
    },
    profileText: {
        backgroundColor: 'rgba(108,99,255,0.5)',
        color: 'white',
        fontSize: 30,
       margin:10,
       textAlign:'center',
       borderRadius:6
    },
    info:{
        margin:10,
        padding:8,
        borderBottomWidth:1,
        borderBottomColor:'#ccc'

    },
    image:{
        height:300,
        width:300,
        aspectRatio:2,
        marginTop:10,
        
        alignSelf:'center'
    }
});

export default Profile;
