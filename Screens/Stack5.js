import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image, Button} from "react-native";
import * as Print from 'expo-print';
import { shareAsync } from "expo-sharing";


const Stack5=()=>{
    useEffect(() => {
        console.log("Route params:", route.params);
        // const {customerName,customerPhoneNo}=route.params;
        //console.log(customerName)
    }, []);
    const route = useRoute();
    const { customerName, customerPhoneNo, items, businessName, email } = route.params;
    const [totalAmount,setTotalAmount]=useState(0);
    
    useEffect(()=>{
        let total=0;
        items.forEach(item => {
            total+=parseFloat(item.quantity) * parseFloat(item.rate);
        });
        setTotalAmount(total);
    },[items]);

    const shareInvoice = async () => {
        console.log("Generate PDF");
        try {
            // Construct HTML content with user information
            let itemsHtml = '';
            items.forEach(item => {
                itemsHtml += `
                    <tr>
                        <td>${item.itemName}</td>
                        <td>${item.quantity}</td>
                        <td>${item.unit}</td>
                        <td>${item.rate}</td>
                        <td>${item.tax}</td>
                    </tr>
                `;
            });
    
            const htmlContent = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Invoice</title>
                    <style>
                        @page {
                            margin: 1cm;
                            header {
                                content: "Header content";
                                font-size: 12px;
                                text-align: center;
                                position: fixed;
                                top: 0;
                                left: 0;
                                right: 0;
                            }
                            footer {
                                content: "Footer content";
                                font-size: 12px;
                                text-align: center;
                                position: fixed;
                                bottom: 0;
                                left: 0;
                                right: 0;
                            }
                        }
                        body {
                            font-family: Arial, sans-serif;
                        }
                        .invoice-content {
                            margin-top: 2cm;
                            text-align: center;
                        }
                        table {
                            width: 100%;
                            border-collapse: collapse;
                        }
                        th, td {
                            border: 1px solid #ddd;
                            padding: 8px;
                        }
                        th {
                            background-color: #f2f2f2;
                        }
                    </style>
                </head>
                <body>
                    
                    <div class="invoice-content">
                        <h1>${businessName}</h1>
                        <p>Email: ${email}</p>
                        <p>Contact: ${customerPhoneNo}</p>
                        <p>${customerName}</p>
                        <p>Here is your Invoice</p>
                        <table>
                            <tr>
                                <th>Item Name</th>
                                <th>Quantity</th>
                                <th>Unit</th>
                                <th>Rate</th>
                                <th>Tax</th>
                            </tr>
                            ${itemsHtml}
                        </table>
                        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
                    </div>
                </body>
                </html>
            `;
    
            // Generate PDF from HTML content
            const pdfUri = await Print.printToFileAsync({ html: htmlContent });
    
            if (pdfUri) {
                console.log("PDF generated", pdfUri);
                // Share the generated PDF
                await shareAsync(pdfUri.uri);
            } else {
                console.log("PDF not generated");
            }
        } catch (error) {
            console.log("Error:", error);
        }
    };
    
    
return(
    <View>
       <ScrollView><View>
        <Image source={require('../assets/bill1.png')} style={styles.image}/>

            <Text style={styles.header}>Here is your Invoice !!</Text>
            <View style={{borderWidth:2,borderRadius:6}}>
            <Text style={styles.businessName}>{businessName}</Text>
            <View style={{borderWidth:2,margin:3}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'rgba(108,99,255,0.5)',padding:8}}>
                    <Text style={{color:'#fff'}}>Customer {'\n'}Details</Text>
                <Text  style={{color:'#fff'}}>{customerName}</Text>
                <Text  style={{color:'#fff'}}>{customerPhoneNo}</Text></View>
            {
                items.map((item, index) => (
                    <View style={styles.item} key={index}>
                        <Text >{item.itemName}{"\t\t\t"}</Text>
                        <Text >{item.quantity}</Text>
                        <Text >{item.unit}{"\t\t\t"}</Text>
                        <Text >{item.rate}{"\t\t\t\t"}</Text>
                        <Text >{item.tax}</Text>
                    </View>
                ))}
                
           <View style={styles.amount}>
                <Text style={{ fontSize:20,}}>Total Amount</Text>
                <View >
                <Text> {totalAmount.toFixed(2)}</Text>
                </View>
            </View>
            </View>
            </View>
        </View>
        <View style={{justifyContent:'center',margin:10}}>
        <Button title="Share" onPress={()=>shareInvoice()}/>
        </View>
       </ScrollView>
    </View>
)
}
export default Stack5;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white' //#e6e6fa
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: 'rgba(108,99,255,0.5)', //lightblue
        textAlign: 'center',
        margin: 10,
        padding: 8,
        color: '#fff',

    },
    item: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        margin: 10,
        padding: 16,
        justifyContent: 'center'
    },
    amount:{
       flexDirection:'row',
       alignItems: 'center',
       justifyContent: 'space-between',
       margin:10,
       padding:8,
       backgroundColor:'#fff'
   },
   image: {
    height: 150,
    width: 200,
    alignSelf: 'center',
    marginBottom:2,
    marginTop:15
  },
  businessName:{
    fontSize:20,
    textAlign:'center',
    backgroundColor:'#fff',
    margin:10
  }
  

})