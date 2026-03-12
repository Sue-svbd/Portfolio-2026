import { useState, useEffect } from 'react';

export default function VisualDesignerIndependentCreativeThinkerProblemSolverMusicLover() {
  const lines = [
    '/Visual designer ',
    '/Independent creative',
    '/Thinker',
    '/Problem solver',
    '/Music lover'
  ];

  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex];
    
    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => {
          const newText = [...prev];
          if (!newText[currentLineIndex]) {
            newText[currentLineIndex] = '';
          }
          newText[currentLineIndex] = currentLine.slice(0, currentCharIndex + 1);
          return newText;
        });
        setCurrentCharIndex(prev => prev + 1);
      }, 50); // Speed of typing (50ms per character)

      return () => clearTimeout(timeout);
    } else {
      // Move to next line after a brief pause
      const timeout = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, 200);

      return () => clearTimeout(timeout);
    }
  }, [currentCharIndex, currentLineIndex]);

  return (
    <div className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[normal] not-italic relative size-full text-[18px] text-white whitespace-pre-wrap">
      {displayedText.map((line, index) => (
        <p key={index} className="mb-0">
          {line}
          {index === currentLineIndex && currentCharIndex < lines[index].length && (
            <span className="animate-pulse">|</span>
          )}
        </p>
      ))}
      <p>&nbsp;</p>
    </div>
  );
}
