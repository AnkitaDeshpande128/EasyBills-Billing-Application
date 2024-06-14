import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Image, TouchableOpacity ,Alert} from "react-native";
import validator from "validator";
import SignUp from "./SignUp";

const sendDataToServer = async (email, password, setIsEmailValid) => {
  try {
    const response = await fetch('http://192.168.181.148:3000/easybills/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    if (response.ok) {
      // Login successful, navigate to home screen or perform other actions
      console.log('Login successful');
      Alert.alert('Success', 'Login successful');
      setIsEmailValid(true); // Assuming email is valid if login is successful
    } else {
      // Login failed, display error message
      console.log('Login failed');
      Alert.alert('Error', 'Invalid email or password');
      setIsEmailValid(false);
    }
  } catch (error) {
    console.error('Error logging in:', error);
    Alert.alert('Error', 'Failed to login');
    setIsEmailValid(false);
  }
};

const Email = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleSendData = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }
    if (!validator.isEmail(email.trim())) {
      Alert.alert('Error', 'Invalid email format');
      setIsEmailValid(false);
      return;
    }
    sendDataToServer(email, password, setIsEmailValid);
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Login.png')} style={styles.image} />
      <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Login</Text>
      <View style={{ height: 300, width: 300, alignSelf: 'center', backgroundColor: '#e6e6fa' }}>
        <TextInput placeholder='Enter Email' style={styles.input} onChangeText={(text) => setEmail(text)} />
        <TextInput placeholder="Password" style={styles.input} secureTextEntry onChangeText={(text) => setPassword(text)} />
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 70 }}>
          <TouchableOpacity style={{ backgroundColor: 'white' }} onPress={() => navigation.navigate("SignUp")}>
            <Text style={{ color: '#2196f3' }}>Not a User ? Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.validate}>
        <Button title='Login' onPress={handleSendData} />
      </View>
      {isEmailValid ? (
        <View>
          <Text style={styles.validEmailText}>Email Valid</Text>
          <View style={{ height: 50, width: 380, alignSelf: 'center' }}>
            <Button title='Go to Dashboard' onPress={() => navigation.navigate("Dashboard",{email})} />
          </View>
        </View>
      ) : (
        <Text style={styles.invalidEmailText}>Email is invalid</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white'//Lavender: #E6E6FA,light blue- #87CEEB
  },
  input: {
    backgroundColor: 'white',
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#87cefa',//2196f3
    margin: 20,
    padding: 5,
    borderRadius: 8,
  },
  validate: {
    margin: 10,
  },
  invalidEmailText: {
    alignSelf: 'center',
    color: 'rgba(240,0,0,0.8)',
    fontSize: 20
  },
  validEmailText: {
    alignSelf: 'center',
    marginBottom: 10,
    color: 'rgba(0,100,0,0.5)',
    fontSize: 18,
    //fontWeight:'bold'
  },
  textDanger: {
    color: "#dc3545",
  },
  image: {
    height: 150,
    width: 200,
    alignSelf: 'center',
    marginBottom: 2
  }
});

export default Email;
