export function generateSummary(transcript: string): string {
    if (!transcript || transcript.trim() === '') return 'No content to summarize.';
  
    const sentences = transcript.split(/[.!?]/);
    const firstSentence = sentences[0]?.trim();
  
    if (firstSentence && firstSentence.split(' ').length <= 15) {
      return firstSentence + '.';
    }
  
    const words = transcript.split(' ');
    return words.slice(0, 15).join(' ') + '...';
  }
  