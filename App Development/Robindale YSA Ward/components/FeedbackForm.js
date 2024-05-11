// FeedbackForm.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function FeedbackForm({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Feedback Form</Text>
      <Text>We value your feedback. Please provide your suggestions below.</Text>
      {/* Form fields and submit button go here */}
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
