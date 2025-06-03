// components/GoogleCalendarScreen.tsx

import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import React, { useEffect, useState } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { GOOGLE_CLIENT_ID } from '../constants/OAuthConfig';

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
  tokenEndpoint: 'https://oauth2.googleapis.com/token',
};

const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
const REDIRECT_URI = AuthSession.makeRedirectUri();

export default function GoogleCalendarScreen() {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [events, setEvents] = useState<any[]>([]);

  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: GOOGLE_CLIENT_ID,
      scopes: SCOPES,
      redirectUri: REDIRECT_URI,
      responseType: 'token',
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === 'success' && response.authentication?.accessToken) {
      setAccessToken(response.authentication.accessToken);
    }
  }, [response]);

  useEffect(() => {
    if (!accessToken) return;

    fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then(res => res.json())
      .then(data => {
        setEvents(data.items || []);
      });
  }, [accessToken]);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="Connect Google Calendar" onPress={() => promptAsync()} />
      <FlatList
        data={events}
        keyExtractor={(item, index) => item.id || index.toString()}
        renderItem={({ item }) => (
          <Text style={{ marginVertical: 8 }}>
            {item.summary} — {item.start?.dateTime || item.start?.date}
          </Text>
        )}
      />
    </View>
  );
}
