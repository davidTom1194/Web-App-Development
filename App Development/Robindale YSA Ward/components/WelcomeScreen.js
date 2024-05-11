// WelcomeScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, Button, SafeAreaView } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  // Function to navigate to another page
  const navigateToNext = () => {
    navigation.navigate('AssetExample'); // Replace 'NextScreen' with your actual screen name
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('../assets/Robindale-YSA-logo.jpg')} />
      <Text style={styles.heading}>Robindale YSA</Text>
      <Text style={styles.message}>
  Welcome to our community, where we're united in faith. As we journey together, remember the words of President Gordon B. Hinckley:
      </Text>
      <Text style={styles.message}>
  "Believe in yourself. Believe in your capacity to do great and good things. Believe that no mountain is so high that you cannot climb it." Explore the features and strengthen your spiritual path with us.
      </Text>
      <Button title="Get Started" onPress={navigateToNext} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30, // Adjust the margin to add space on both left and right sides
    marginVertical: 40, // Adds space at the top and bottom
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 15,
    color: '#555',
  },
});
