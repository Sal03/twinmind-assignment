export async function transcribeAudioAsync(uri: string): Promise<string> {
  console.log('Simulating transcription for:', uri);

  // Simulated delay to mimic async call
  await new Promise((res) => setTimeout(res, 1000));

  // Return simulated transcript
  return 'This is a simulated transcript of your recording.';
}
