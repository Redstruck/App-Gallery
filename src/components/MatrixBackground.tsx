import { useEffect, useRef } from 'react';
import { personalInfo } from '../data/personal';

export const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Matrix alphabet - exactly like the article
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    
    // Add your code snippets (cleaned of spaces)
    const codeSnippets = personalInfo.codeSnippets.join('').replace(/\s+/g, '');
    
    const alphabet = katakana + latin + nums + codeSnippets;

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const rainDrops: number[] = [];
    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }

    const draw = () => {
      // Black background with transparency for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Matrix green color
      ctx.fillStyle = '#0F0';
      ctx.font = fontSize + 'px monospace';

      // Draw the rain
      for (let i = 0; i < rainDrops.length; i++) {
        // Pick random character from alphabet
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        
        // Draw character at position
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        // Reset raindrop when it goes off screen
        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        
        // Move raindrop down
        rainDrops[i]++;
      }
    };

    // Start animation - 30ms interval like the article
    const interval = setInterval(draw, 30);

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Reinitialize raindrops for new column count
      const newColumns = canvas.width / fontSize;
      rainDrops.length = 0;
      for (let x = 0; x < newColumns; x++) {
        rainDrops[x] = 1;
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'black',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};
