import {
  exchangeCodeAsync,
  makeRedirectUri,
  ResponseType,
  useAuthRequest,
} from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import React, { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
  tokenEndpoint: 'https://oauth2.googleapis.com/token',
  revocationEndpoint: 'https://oauth2.googleapis.com/revoke',
};

const GoogleCalendarScreen = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const redirectUri = makeRedirectUri({
    native: 'com.googleusercontent.apps.7418859723-cjra22qrv64irnkb4do99gpaac1he2a0:/oauthredirect',
  });
  console.log("🔁 Redirect URI is:", redirectUri);
  
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '7418859723-cjra22qrv64irnkb4do99gpaac1he2a0.apps.googleusercontent.com',
      redirectUri,
      responseType: ResponseType.Code,
      scopes: ['https://www.googleapis.com/auth/calendar.readonly'],
      usePKCE: true,
    },
    discovery
  );

  useEffect(() => {
    const getAccessToken = async () => {
      if (response?.type === 'success' && request) {
        try {
          const tokenResult = await exchangeCodeAsync(
            {
              clientId: request.clientId!,
              code: response.params.code,
              redirectUri: request.redirectUri,
              extraParams: {
                code_verifier: request.codeVerifier!,
              },
            },
            discovery
          );
          setAccessToken(tokenResult.accessToken);
          fetchEvents(tokenResult.accessToken);
        } catch (err) {
          console.error('❌ Token exchange failed:', err);
        }
      }
    };

    getAccessToken();
  }, [response, request]);

  const fetchEvents = async (token: string) => {
    try {
      const now = new Date().toISOString();
      const res = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${now}&maxResults=10&singleEvents=true&orderBy=startTime`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      setEvents(data.items || []);
    } catch (error) {
      console.error('❌ Failed to fetch calendar events:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title="Connect Google Calendar"
        onPress={() => request && promptAsync()}
        disabled={!request}
      />
      {events.length > 0 && (
        <FlatList
          data={events}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.event}>
              <Text style={styles.title}>{item.summary}</Text>
              <Text style={styles.time}>
                {item.start?.dateTime || item.start?.date}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  event: {
    backgroundColor: '#f1f1f1',
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    marginTop: 4,
    color: '#555',
  },
});

export default GoogleCalendarScreen;
