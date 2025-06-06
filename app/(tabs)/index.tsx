import { StyleSheet, Text, View } from 'react-native';

export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome! 👋</Text>

      <Text style={styles.stepTitle}>Step 1: Try it</Text>
      <Text style={styles.stepDescription}>
        Edit <Text style={styles.code}>app/(tabs)/index.tsx</Text> to see changes. Press F12 to open developer tools.
      </Text>

      <Text style={styles.stepTitle}>Step 2: Explore</Text>
      <Text style={styles.stepDescription}>
        Tap the Explore tab to learn more about what's included in this starter app.
      </Text>

      <Text style={styles.stepTitle}>Step 3: Get a fresh start</Text>
      <Text style={styles.stepDescription}>
        When you're ready, run <Text style={styles.code}>npm run reset-project</Text> to get a fresh app directory. This will move the current app to app-example.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    padding: 24,
    paddingTop: 80,
  },
  title: {
    fontSize: 28,
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 32,
  },
  stepTitle: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: '600',
    marginBottom: 8,
  },
  stepDescription: {
    fontSize: 16,
    color: '#CCC',
    marginBottom: 20,
  },
  code: {
    fontFamily: 'monospace',
    color: '#4FC3F7',
  },
});
