import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const LoginScreen = () => {
  const router = useRouter();

  const handleGoogleLogin = () => {
    router.push('/calendar');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.logoWrapper}>
        <Image
          source={require('../assets/images/twinmind-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
        <Text style={styles.googleText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.appleButton}>
        <Text style={styles.appleText}>Continue with Apple</Text>
      </TouchableOpacity>

      <View style={styles.footerLinks}>
        <Text style={styles.linkText}>Privacy Policy</Text>
        <Text style={styles.separator}>|</Text>
        <Text style={styles.linkText}>Terms of Service</Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 24,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: '#888',
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  logoWrapper: {
    height: 360,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: '100%',
    width: '100%',
  },
  googleButton: {
    width: '100%',
    padding: 16,
    backgroundColor: '#4285F4',
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  googleText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  appleButton: {
    width: '100%',
    padding: 16,
    backgroundColor: '#000000',
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 24,
  },
  appleText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  linkText: {
    fontSize: 14,
    color: '#666',
  },
  separator: {
    fontSize: 14,
    color: '#ccc',
    marginHorizontal: 6,
  },
});
