import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface MeetingDetailsHeaderProps {
  title: string;
  timer: string;
  dateTime: string;
  location: string;
}

const MeetingDetailsHeader: React.FC<MeetingDetailsHeaderProps> = ({
  title,
  timer,
  dateTime,
  location,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{timer}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.meta}>{`${dateTime} • ${location}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: '#fff',
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
  },
  timer: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginBottom: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginBottom: 2,
  },
  meta: {
    fontSize: 14,
    color: '#777',
  },
});

export default MeetingDetailsHeader;
