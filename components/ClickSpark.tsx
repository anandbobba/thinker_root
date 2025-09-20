import React, { useState, useRef, useCallback } from 'react';

// A TypeScript interface for the spark properties
interface Spark {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  createdAt: number;
}

// Props for the ClickSpark component
interface ClickSparkProps {
  children: React.ReactNode;
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
}

// A separate component for the individual sparkle
interface SparkleProps {
    spark: Spark;
    color: string;
    duration: number;
}

const Sparkle: React.FC<SparkleProps> = ({ spark, color, duration }) => {
    const [style, setStyle] = React.useState<React.CSSProperties>({
        position: 'absolute',
        top: spark.y,
        left: spark.x,
        width: spark.size,
        height: spark.size,
        backgroundColor: color,
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        opacity: 1,
        transition: `transform ${duration}ms cubic-bezier(0.1, 1, 0.5, 1), opacity ${duration}ms ease-out`,
        zIndex: 9999,
    });

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setStyle(prev => ({
                ...prev,
                transform: `translate(-50%, -50%) translate(${spark.dx}px, ${spark.dy}px) scale(0)`,
                opacity: 0,
            }));
        }, 10); // Small delay to allow initial render

        return () => clearTimeout(timeout);
    }, [spark, duration]);

    return <span style={style} />;
}


const ClickSpark: React.FC<ClickSparkProps> = ({
  children,
  sparkColor = '#ef4444', // Default to red-500
  sparkSize = 10,
  sparkRadius = 25,
  sparkCount = 8,
  duration = 500,
}) => {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const createSpark = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const now = Date.now();

    const newSparks: Spark[] = Array.from({ length: sparkCount }).map((_, i) => {
      const angle = (i / sparkCount) * 2 * Math.PI;
      return {
        id: Math.random(),
        x,
        y,
        dx: Math.cos(angle) * sparkRadius,
        dy: Math.sin(angle) * sparkRadius,
        size: sparkSize,
        createdAt: now,
      };
    });

    setSparks(prev => [...prev, ...newSparks]);
  }, [sparkCount, sparkRadius, sparkSize]);

  // Clean up old sparks
  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setSparks(prev => prev.filter(spark => now - spark.createdAt < duration));
    }, duration + 100);
    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div ref={containerRef} onMouseDown={createSpark} style={{ position: 'relative', width: '100%', height: '100%' }}>
      {sparks.map(spark => (
        <Sparkle key={spark.id} spark={spark} color={sparkColor} duration={duration} />
      ))}
      {children}
    </div>
  );
};

export default ClickSpark;
