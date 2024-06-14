import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Settings = ({navigation}) => {
    useEffect(() => {
        console.log('Profile component is rendered as a screen.');
        navigation.setOptions({ title: 'Profile' });
    }, []);

    return (
        <View style={{ width: 100, height: 100, backgroundColor: 'yellow' }}>
            <Text style={styles.profileText}>User Profile</Text>
            <Button title="Go back" onPress={() => navigation.navigate("Dashboard")} />
        </View>
    );
};

const styles = StyleSheet.create({
    profileText: {
        backgroundColor: 'lightgray',
        color: 'black',
        fontSize: 16,
        marginBottom:5
    },
});

export default Settings;
