import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet,Alert } from 'react-native';
import { useState } from 'react';

export default SignUp = ({ navigation }) => {

    const sendDataToServer = async (email, password) => {
        try {
          
          const response = await fetch('http://192.168.181.148:3000/easybills/users', {
           
            //when using localhost - Network request failed
            //when using ipaddress - Failed to insert user data
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password })
          });
          console.log(response.status);
          if (response.ok) {
            console.log(response.ok)
            const data = await response.json;
            console.log(data);
          console.log('User data inserted successfully:', data);
          Alert.alert('Success', 'User data inserted successfully');
          }else{
            throw new Error('Failed to insert user data');
          } 
        } catch (error) {
          console.log("In catch")
          console.error('Error inserting user data:', error);
          Alert.alert('Error', 'Failed to insert users data');
        }
      };
    // State variables for signup
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Function to handle signup submission
    
    const handleSendData=()=>{
        if(!email || !password){
          Alert.alert('Error','Please enter email and password');
          return;
        }
        sendDataToServer(email,password);
      }
    return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold',marginBottom:10 }}>Sign Up</Text>
            <View style={{ height: 500, width: 350, alignSelf: 'center', backgroundColor: '#e6e6fa',padding:8 }} >
                <TextInput
                    placeholder='Enter Email'
                    style={styles.input} value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    placeholder="Password"
                    style={styles.input}
                    secureTextEntry value={password}
                    onChangeText={(text) => setPassword(text)}
                />
               
                
                <Button title='Sign Up' onPress={handleSendData} />
                <View style={{justifyContent:'center',alignItems:'center',marginTop:70}}>
                <TouchableOpacity style={{backgroundColor:'white'}} onPress={() => navigation.navigate("Validate your email")}>
                    <Text style={{color:'#2196f3'}}>Already have an account? Login</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
        
    },
    input: {
        backgroundColor: 'white',
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#87cefa',//2196f3
        margin: 20,
        padding: 5,
        borderRadius: 8,
    }

})