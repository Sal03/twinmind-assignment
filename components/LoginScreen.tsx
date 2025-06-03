// LoginScreen.tsx

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useRouter } from 'expo-router';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import React, { useEffect } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { auth } from '../firebase'; // adjust path if needed


const LoginScreen = () => {
    const router = useRouter();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '1:591546883314:web:eb6a1779ed2776216b446b', // Replace with your Firebase web client ID
    });
  }, []);

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const tokens = await GoogleSignin.getTokens();
      const idToken = tokens.idToken;
  
      const googleCredential = GoogleAuthProvider.credential(idToken);
      const userCredential = await signInWithCredential(auth, googleCredential);
  
      Alert.alert('Login Successful', `Welcome ${userCredential.user.displayName}`);
      console.log(userCredential.user);
    } catch (error: any) {
      console.error(error);
      Alert.alert('Login Failed', error?.message || 'Unknown error');
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TwinMind App</Text>
      <Button title="Sign in with Google" onPress={signInWithGoogle} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
