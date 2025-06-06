import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

type TabbedSectionProps = {
  transcript: string[];
};

const TabbedSection: React.FC<TabbedSectionProps> = ({ transcript }) => {
  return (
    <View style={styles.container}>
      {/* Transcript Section */}
      <FlatList
        data={transcript}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({ item }) => (
          <View style={styles.bubble}>
            <Text style={styles.bubbleText}>{item}</Text>
          </View>
        )}
      />

      {/* Summary Section */}
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryTitle}>Summary</Text>
        <Text style={styles.summaryText}>
          This is a short summary of the conversation. You can replace this with actual logic
          later after integrating NLP or summary generation logic.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  bubble: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 15,
    marginVertical: 5,
    alignSelf: 'flex-start',
  },
  bubbleText: {
    fontSize: 16,
    color: '#333',
  },
  summaryContainer: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
  },
  summaryTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  summaryText: {
    fontSize: 14,
    color: '#444',
  },
});

export default TabbedSection;
