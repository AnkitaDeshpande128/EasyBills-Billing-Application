import React ,{useState} from "react";
import { View,Text, TouchableOpacity ,TextInput,StyleSheet} from "react-native";

export default NewInvoice=({navigation,route})=>{  
    //here we pass navigation as object therefore we have to use {}
    //console.log("Stack4",navigation)
    const [customerName,setCustomerName]=useState('');
    const [customerPhoneNo,setCustomerPhoneNo]=useState('');
    const {email,businessName}=route.params;
    return(
        <View style={styles.container}>
            <View style={{ marginTop:20,}}>
                <View style={{justifyContent:'center',alignItems:'center',margin:20}}>
                <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',borderColor:'black',borderWidth:2,padding:16}}>
                                {businessName}</Text>
                </View>
            <Text style={styles.header}>Enter customer details</Text>
            <TextInput placeholder='Enter Customer' style={styles.title} onChangeText={setCustomerName}/>
            <TextInput placeholder="Phone Number" style={styles.title} onChangeText={setCustomerPhoneNo}/>
            <TouchableOpacity onPress={()=>navigation.navigate("Add Items",{customerName,customerPhoneNo,businessName,email})} style={styles.addItem}>
              <Text style={styles.addItemText}>Add Item</Text>
            </TouchableOpacity>
           
            
            </View>
        </View>

    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    title:{
        justifyContent:'center',
        alignSelf:'center',
        fontSize: 18,
        marginTop: 20,
        borderWidth:2,
        width:350,
        backgroundColor:'white',
        borderColor:'rgba(0,0,200,0.5)',
        borderRadius:5,
        height:50,
        padding:8        
    },
     addItem:{
        justifyContent:'center',
        alignSelf:'center',
        marginTop: 20,
        fontSize: 18,
        margin: 10,
        borderWidth:2,
        width:350,
        height:50,
        backgroundColor:'white',
        borderColor:'rgba(0,0,150,0.5)',
        borderRadius:5
     },
     header:{
        fontSize:20,
        backgroundColor:'#6c63ff',//rgba(0,0,150,0.3)
        color:'#fff',
        height:80,
        margin:10,
       justifyContent:'center',
       textAlign:'center',
       textAlignVertical:'center',
     },
    addItemText:{
      textAlign:'center',
      verticalAlign:'middle',
      fontSize:20
    }
})