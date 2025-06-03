export async function transcribeAudioAsync(uri: string): Promise<string> {
    console.log('Simulating transcription for URI:', uri);
  
    // Simulated processing delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("This is a mock transcription result of your recording.");
      }, 2000);
    });
  }
  