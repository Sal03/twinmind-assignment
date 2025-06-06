import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import React, { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import TabbedSection from './TabbedSection';
import { transcribeAudioAsync } from './TranscriptionUtils';


const TranscriptScreen = () => {
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [uri, setUri] = useState<string | null>(null);
  const [transcript, setTranscript] = useState<string[]>([]);

  // For testing: prefill with sample transcript
  useEffect(() => {
    setTranscript([
      'This is a test sentence.',
      'Here is another sentence.',
      'And this one completes the test.'
    ]);
  }, []);

  const requestMicPermission = async () => {
    const { status } = await Audio.requestPermissionsAsync();
    return status === 'granted';
  };

  const startRecording = async () => {
    try {
      const permission = await requestMicPermission();
      if (!permission) throw new Error('Microphone permission not granted');

      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );

      setRecording(recording);
    } catch (err) {
      console.error('❌ Error starting recording:', err);
    }
  };

  const stopRecording = async () => {
    try {
      if (!recording) return;

      await recording.stopAndUnloadAsync();
      const originalUri = recording.getURI();
      if (!originalUri) return;

      const fileName = originalUri.split('/').pop();
      const newUri = `${FileSystem.documentDirectory}${fileName}`;

      await FileSystem.copyAsync({ from: originalUri, to: newUri });

      setUri(newUri);
      setRecording(null);

      console.log('✅ Recording saved to:', newUri);
      console.log('📤 Sending for transcription...');

      const result = await transcribeAudioAsync(newUri);
      console.log('📝 Transcript received:', result);

      setTranscript(result.split('. ').filter(Boolean));
    } catch (err) {
      console.error('❌ Error stopping/saving/transcribing:', err);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Start Recording" onPress={startRecording} disabled={!!recording} />
      <Button title="Stop Recording" onPress={stopRecording} disabled={!recording} />

      {uri && <Text style={styles.uriText}>Saved recording: {uri}</Text>}

      {transcript.length > 0 && (
        <>
          <Text style={styles.transcriptLabel}>Transcript:</Text>
          <FlatList
            data={transcript}
            renderItem={({ item }) => (
              <View style={styles.bubble}>
                <Text style={styles.bubbleText}>{item}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </>
      )}

      <TabbedSection transcript={transcript} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  uriText: {
    marginTop: 10,
    color: 'gray',
  },
  transcriptLabel: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  bubble: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 12,
    marginVertical: 5,
    alignSelf: 'flex-start',
  },
  bubbleText: {
    fontSize: 16,
    color: '#333',
  },
});

export default TranscriptScreen;
