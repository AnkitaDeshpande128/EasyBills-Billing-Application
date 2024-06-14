import React from "react";
import { View,TextInput,TouchableOpacity,Text,StyleSheet } from "react-native";
import { useState } from "react";
import TabNavigator from "./TabNavigator";
const Dashboard = ({navigation,route}) => {

   // console.log("Stack3" ,navigation)
    const [showTabs, setShowTabs] = useState(false);
    const [businessName,setBusinessName]=useState();
    const {email}=route.params;
  
    const handleTextChange = (text) => {
      setBusinessName(text);
      console.log(email)
      //setShowSaveButton(true);
    };
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
         <TextInput
            placeholder='Enter business Name'
            style={styles.email}
            onChangeText={handleTextChange}
            value={businessName}
          />
          <View style={{backgroundColor:'lightgray',marginHorizontal:5,marginTop:5,height:50,width:80,justifyContent:'center',alignContent:'center'}}>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setShowTabs(!showTabs)}
        >
          <Text style={styles.tabButtonText}>More</Text>
        </TouchableOpacity>
        </View>
        </View>
  
        <View style={styles.remainingContent}>
         <TouchableOpacity onPress={()=>navigation.navigate("Create Invoice",{email,businessName})} style={styles.newInvoice}><Text style={{textAlign:'center'}}>New Invoice</Text></TouchableOpacity>
        </View>
  
  
        {showTabs && (
          <View style={styles.tabsContainer}>
          <TabNavigator navigation={navigation} email={email} businessName={businessName}/>
          </View>
        )}
  
      </View>
    );
  };
  export default Dashboard;

  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'white' //try #e6fafa,#e6e6fa
    },
    tabButton: {
      backgroundColor: 'lightgray',
      height:50,
      width:60,
      margin:10,
      alignSelf: 'flex-end',
    },
    tabButtonText: {
      fontSize: 18,
      fontWeight: 'bold',
      height:30
    },
    tabsContainer: {
      height: 50,
      borderTopWidth: 1,
      borderTopColor: 'gray',
    },
    remainingContent: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginBottom:10
    },
    email:{
        backgroundColor:'white',
        fontSize:18,
        height:50,
        width:280, 
        margin:10, 
        borderWidth:2,
        borderColor:'rgba(0,0,200,0.5)',
        padding:8,
        borderRadius:8,
    },
    newInvoice:{
        height:50,
        width:120,
        borderRadius:20,
        backgroundColor:'#6c63ff',  //rgba(0,0,150,0.3)
        alignContent:'center',
        justifyContent:'center'
    }

  });
  
  