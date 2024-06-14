

import React ,{useEffect, useState}from 'react';
import { View, Text, TouchableOpacity,TextInput, StyleSheet,Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/native';

const AddItem = ({ navigation }) => {
  useEffect(()=>{
    console.log("Route params:", route.params)
  })
  
    const route=useRoute();
    const {customerName,customerPhoneNo,businessName,email}=route.params
   
    const [items,setItems]=useState([]);
    const [itemName, setItemName] = useState('');
    const [quantity,setQuantity]=useState('');
    const [unit,setUnit]=useState("item");
    const [tax,setTax]=useState("Without Tax");
    const [rate,setRate]=useState('');

    const handleAddItem = () => {
      console.log(customerName)
      const newItem={customerName,customerPhoneNo,itemName,quantity,unit,tax,rate};
      setItems([...items,newItem]);
      console.log(customerName)
     // console.log("In add", itemData);
      // You can perform further actions here, like adding the item to the state
      setItemName('');
      setQuantity('');
      setUnit('');
      setTax('');
      setRate('');
    };
  
    return (
      <View style={styles.container}>
        <View style={{backgroundColor:"#6c63ff"}}>
        <Image source={require('../assets/addToCart.png')} style={styles.image}/>
        </View>
        <View style={{marginTop:20}}>
        <TextInput
          placeholder="Enter item name"
          value={itemName}
          onChangeText={setItemName}
          style={styles.title}
        />
        <View style={{flexDirection:'row'}}>
          <Text style={styles.quantityText}>Quantity</Text>
          <TextInput placeholder='1' value={quantity} onChangeText={setQuantity} style={styles.number}/>
          <View style={styles.pickerContainer}>
                         <Picker selectedValue={unit} onValueChange={(itemValue, itemIndex) =>setUnit(itemValue) } style={styles.tax}>
                          <Picker.Item label="item" value="item"/>
                          <Picker.Item label="kg" value="kg"/>
                          <Picker.Item label="Liter" value="Litre"/>
                          <Picker.Item label="" value=""/>
                        </Picker>
           </View>
           </View>
        </View>

        <View style={{flexDirection:'row'}}>
               <TextInput placeholder='Rate(Price/Unit)' value={rate} onChangeText={setRate} style={styles.rate}/>
                   <View style={styles.pickerContainer}>
                         <Picker selectedValue={tax} onValueChange={(itemValue, itemIndex) =>setTax(itemValue) } style={styles.tax}>
                          <Picker.Item label="Without Tax" value="Without Tax"/>
                         <Picker.Item label="With Tax" value="With Tax"/>
                        </Picker>
                    </View>
         </View>
        <TouchableOpacity onPress={handleAddItem} style={styles.title}>
          <Text style={styles.addItemText}>Add item</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate("Invoice",{items,businessName,email,customerName,customerPhoneNo})} style={styles.title}> 
          <Text>Go to Save</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor:'#ffffff'
  },
  title:{
    fontSize: 18,
    margin: 10,
    borderWidth:2,
    width:380,
    backgroundColor:'white',
    borderColor:'rgba(0,0,200,0.5)',
    borderRadius:5,
    height:50,
    padding:8,
    justifyContent:'center',
    alignItems:'center'
},
addItemText:{
  textAlign:'center',
      verticalAlign:'middle',
      fontSize:20
},
quantityText:{
  alignContent:'center',
  borderWidth:2,
  margin: 10,
  width:100,
    borderColor:'rgba(0,0,200,0.5)',
    borderRadius:5,
    height:50,
    padding:8
},
number:{
  borderWidth:2,
  margin: 10,
  backgroundColor:'white',
  borderColor:'rgba(0,0,200,0.5)',
    borderRadius:5,
  width:50,
  padding:8
},

rate:{
  width:170,
  borderWidth:2,
  backgroundColor:'white',

  borderColor:'rgba(0,0,200,0.5)',
  borderRadius:5,
  margin:10,
  padding:8
},
pickerContainer:{
  borderWidth: 2,
  backgroundColor:'white',
   borderColor: 'rgba(0,0,200,0.5)',
        borderRadius: 5,
        margin: 10,
},
tax:{ 
  height: 50,
        width: 170,
        padding: 8,
},
invoice:{
    alignContent:'center',
    justifyContent:'center',

},image: {
  height: 150,
  width: 200,
  alignSelf: 'center',
  marginBottom:20,
  marginTop:20
}

});

export default AddItem;

