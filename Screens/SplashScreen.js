/*import React, { useEffect } from 'react';
import { View, ImageBackground, Image, StyleSheet ,Text} from 'react-native';

const Splash = ({ navigation }) => {
  // Simulate loading by delaying navigation
  useEffect(() => {
    setTimeout(() => {
      // Navigate to the main screen
      navigation.navigate('Welcome');
    }, 2000); // Adjust the duration as needed (2000ms = 2 seconds)
  }, []);

  return (
    <View style={styles.container}>
        <ImageBackground source={require('../assets/billing_background.png')} style={styles.background} />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover', // Cover the entire container
    justifyContent: 'center',
    alignItems: 'center',
  },
 
});

export default Splash;


import React ,{useEffect}from 'react';
import { View, ImageBackground, StyleSheet, Dimensions } from 'react-native';

const Splash = ({navigation}) => {
  const { width, height } = Dimensions.get('window');
  // Simulate loading by delaying navigation
  useEffect(() => {
    setTimeout(() => {
      // Navigate to the main screen
      navigation.navigate('Welcome');
    }, 2000); // Adjust the duration as needed (2000ms = 2 seconds)
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/Receipt.png')}
        style={{borderWidth:6,borderColor:'white',borderRadius:24,aspectRatio:1,marginLeft:15,marginRight:15}}
        resizeMode='center'
      >
        
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#E6E6FA',
    alignContent:'center',
    justifyContent:'center'
  },
  imageBackground: {
    flex: 1,
    //width:'width',
    //height:'height',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Splash;*/

/*
//Image drops from top and after 2 seconds navigates to welcome 

import React, { useEffect } from 'react';
import { View, Image, Animated, StyleSheet } from 'react-native';

const Splash = ({ navigation }) => {
    const translateY = new Animated.Value(-200); // Initial position offscreen

    useEffect(() => {
        // Animate the image dropping from the top
        Animated.timing(translateY, {
            toValue: 0,
            duration: 1000, // Adjust animation duration as needed
            useNativeDriver: true,
        }).start();

        // Wait for 2 seconds (2000 milliseconds)
        const timer = setTimeout(() => {
            // Navigate to the "Welcome" screen
            navigation.navigate('Welcome');
        }, 2000);

        // Clean up the timer when the component unmounts
        return () => clearTimeout(timer);
    }, [navigation]); // Include navigation as a dependency

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.imageContainer, { transform: [{ translateY }] }]}>
                <Image source={require('../assets/Receipt.png')} style={styles.image} />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white', // Set your desired background color
    },
    imageContainer: {
        alignItems: 'center',
    },
    image: {
        width: 150, // Adjust image size as needed
        height: 150,
        resizeMode: 'contain',
    },
});

export default Splash;*/



//images bounces
// BouncingSplashScreen.js

import React, { useEffect } from 'react';
import {Text, View, Image, Animated, Easing, StyleSheet } from 'react-native';
//import  Icon from 'react-native-vector-icons/Icon';
const Splash = ({navigation}) => {
    const translateY = new Animated.Value(0);

    useEffect(() => {
        // Create a bouncing animation
        Animated.loop(
            Animated.sequence([
                Animated.timing(translateY, {
                    toValue: -20,
                    duration: 500,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }),
                Animated.timing(translateY, {
                    toValue: 0,
                    duration: 500,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }),
            ]),
            { iterations: -1 } // Infinite loop
        ).start();

        // Wait for 2 seconds (2000 milliseconds)
        const timer = setTimeout(() => {
          // Navigate to the "Welcome" screen
          navigation.navigate('Welcome');
      }, 2000);

      // Clean up the timer when the component unmounts
      return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Animated.Image
                source={require('../assets/Receipt.png')} // Replace with your actual image path
                style={[styles.image, { transform: [{ translateY }] }]}
            />
            <View style={styles.textContainer}>
                <Text style={styles.splashText}>
                    Let's get all your bills done with{"\n"}EasyBills
                </Text>
                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white', 
    },
    image: {
        width: 150, 
        height: 150,
        resizeMode: 'contain',
    },
    textContainer: {
      marginTop: 20,
      flexDirection: 'row', 
      alignItems: 'center',
  },
  splashText: {
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black',
  },
});

export default Splash;

