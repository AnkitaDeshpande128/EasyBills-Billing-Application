import React from "react";
import { View, Text, StyleSheet,TouchableOpacity, Image } from "react-native";

export default WelcomeScreen=({navigation})=>{
  return (
      <View style={styles.container}>
        <Image source={require('../assets/Hello.png')} 
                style={{width:300,height:400,marginBottom:30,aspectRatio:1}}
                resizeMode='stretch'/>
        <View style={{flexDirection:'row'}}>
          <Image source={require('../assets/invoice.png')} 
                style={{width:50,height:50}} />
           <Text style={styles.appName}>EasyBills</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Validate your email')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent:'center',
    flex:1,
    backgroundColor:'white'//Lavender: #E6E6FA,light blue- #87CEEB
  },
  appName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#191970',
    marginBottom: 20,

  },
  welcomeText: {
    fontSize: 20,
   // fontWeight:'bold',
   fontStyle:'italic',
    marginBottom: 20,
    color:'#0C0C0C' //slate gray-#708090, ghost white-#F8F8FF
  },
  button: {
    backgroundColor: '#191970', //midnght blue
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop:30
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  icon: {
    width: 100, // Adjust as needed
    height: 100, // Adjust as needed
    marginBottom: 20,
  },
});

//<Image source={require("C:\Users\Ankita\Desktop\React Native\BillingApp\assets\billing-icon-17.jpg")} style={styles.icon}/>
//<Text style={{fontSize:20}}>---------------------------</Text>
//<Text style={styles.welcomeText}>Welcome to EasyBilling</Text>
//<Text style={{fontSize:20}}>---------------------------</Text>