#  TwinMind - Android Developer Assignment

This project is a React Native (Expo) application implementing the core requirements of the TwinMind Android Developer Interview Assignment. It includes Google Calendar integration, real-time audio recording, local transcription with offline support, and an interactive transcript display.

---

##  Features Implemented

-  **Firebase Authentication** – Secure login system
-  **Google Calendar Integration** – Syncs user’s upcoming meetings
-  **Real-time Audio Recording** – High-quality audio capture using `expo-av`
-  **Simulated Transcription & Summary** – Local audio-to-text with sample outputs
-  **Interactive Transcript** – Transcript displayed and styled inline
-  **Local File Save** – Audio files saved using `expo-file-system`
-  **Expo Tunnel** – Remote access via Expo’s public tunnel

---
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/2a409e18-3e12-4b28-ba6c-36bb8980ecdf" />

##  How to Run the App

### 1. Clone the Repository
```bash
git clone https://github.com/Sal03/twinmind-assignment.git
cd twinmind-assignment

Install Dependencies

npm install

Start the App (Web or Device)

npx expo start --tunnel

Press w to open the web version

Press i for iOS simulator (if available)

Or scan the QR code in Expo Go app

Tech Stack
React Native (Expo Router)

TypeScript

Firebase Auth

Google Calendar API

expo-av – Audio recording

expo-file-system – File storage

OAuthSession – Google Auth Flow

<img width="570" alt="image" src="https://github.com/user-attachments/assets/4c23b5c9-2c06-4dbc-b8f4-0eb797a836d6" />


Folder Structure
.
├── app/
│   ├── tabs/ (index.tsx, explore.tsx, transcript.tsx, calendar.tsx)
├── components/
│   ├── Transcript/ (TranscriptScreen.tsx, TranscriptionUtils.ts)
│   ├── ui/ (IconSymbol.tsx, TabBarBackground.tsx)
├── constants/ (OAuthConfig.ts, Colors.ts)
├── firebase.ts
└── README.md





 Author
Saloni Angre


# Welcome to your Expo app 

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
