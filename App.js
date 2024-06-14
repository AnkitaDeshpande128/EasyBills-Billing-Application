import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import WelcomeScreen from './Screens/Welcome';
import Email from './Screens/EmailValidation';
import Dashboard from './Screens/Dashboard';
import NewInvoice from './Screens/NewInvoice';
import AddItem from './Screens/AddItem';
import Stack5 from './Screens/Stack5';
import Splash from './Screens/SplashScreen';
import SignUp from './Screens/SignUp';
import Profile from './Screens/Profile';
import Settings from './Screens/Settings';
import About from './Screens/Screen3';

export default function App() {

  const Stack=createStackNavigator();
  //console.log("In App")
  return (
    <View style={{flex:2,padding:8}} >
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{headertitleStyle:{color:'red'},headerTitleAlign:'center'}}>
          <Stack.Screen name=' ' component={Splash}/>
          <Stack.Screen name='Welcome' component={WelcomeScreen}/>
          <Stack.Screen name='Validate your email' component={Email}/>
          <Stack.Screen name='SignUp' component={SignUp}/>
          <Stack.Screen name='Dashboard' component={Dashboard}/>
          <Stack.Screen name='Profile' component={Profile}/>
          <Stack.Screen name='Settings' component={Settings}/>
          <Stack.Screen name='About' component={About}/>
          <Stack.Screen name='Create Invoice' component={NewInvoice}/>
          <Stack.Screen name='Add Items' component={AddItem}/>
          <Stack.Screen name='Invoice' component={Stack5}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
