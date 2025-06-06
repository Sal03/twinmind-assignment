import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Explore</Text>

      <View style={styles.section}>
        <Text style={styles.title}>Realtime Transcription</Text>
        <Text style={styles.description}>Record and transcribe audio with offline support.</Text>
        <Image
          source={require('../../assets/images/recording.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Interactive Transcript Chat</Text>
        <Text style={styles.description}>Ask questions or summarize the conversation using chat.</Text>
        <Image
          source={require('../../assets/images/chat.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Google Calendar Integration</Text>
        <Text style={styles.description}>Connect and sync your upcoming events.</Text>
        <Image
          source={require('../../assets/images/calendar.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    paddingBottom: 16,
  },
  section: {
    marginBottom: 32,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#444',
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: 160,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
});
