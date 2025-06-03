import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { generateSummary } from './SummaryUtils'; // ✅ Import the summary utility
import { transcribeAudioAsync } from './TranscriptionUtils';

const TranscriptScreen = () => {
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [uri, setUri] = useState<string | null>(null);
  const [transcript, setTranscript] = useState<string | null>(null);
  const [summary, setSummary] = useState<string | null>(null); // ✅ Summary state

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
      console.error('Error starting recording', err);
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

      await FileSystem.copyAsync({
        from: originalUri,
        to: newUri,
      });

      setUri(newUri);
      setRecording(null);

      console.log('Recording saved to', newUri);

      // ✅ Simulate transcription
      const result = await transcribeAudioAsync(newUri);
      setTranscript(result);

      // ✅ Generate and set summary
      const summaryResult = generateSummary(result);
      setSummary(summaryResult);

    } catch (err) {
      console.error('Error stopping or saving recording', err);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Start Recording" onPress={startRecording} disabled={!!recording} />
      <Button title="Stop Recording" onPress={stopRecording} disabled={!recording} />
      {uri && <Text style={{ marginTop: 20 }}>Saved recording: {uri}</Text>}
      {transcript && <Text style={{ marginTop: 20, fontStyle: 'italic' }}>Transcript: {transcript}</Text>}
      {summary && <Text style={{ marginTop: 20, fontWeight: 'bold' }}>Summary: {summary}</Text>}
    </View>
  );
};

export default TranscriptScreen;
