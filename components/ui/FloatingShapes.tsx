'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingShapes = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const shapes = [
    {
      id: 1,
      size: 'w-32 h-32',
      color: 'bg-gradient-to-br from-purple-400/20 to-pink-400/20',
      position: 'top-20 left-10',
      delay: 0,
    },
    {
      id: 2,
      size: 'w-24 h-24',
      color: 'bg-gradient-to-br from-blue-400/20 to-cyan-400/20',
      position: 'top-40 right-20',
      delay: 1,
    },
    {
      id: 3,
      size: 'w-40 h-40',
      color: 'bg-gradient-to-br from-green-400/20 to-emerald-400/20',
      position: 'bottom-40 left-20',
      delay: 2,
    },
    {
      id: 4,
      size: 'w-28 h-28',
      color: 'bg-gradient-to-br from-yellow-400/20 to-orange-400/20',
      position: 'bottom-20 right-10',
      delay: 0.5,
    },
    {
      id: 5,
      size: 'w-36 h-36',
      color: 'bg-gradient-to-br from-indigo-400/20 to-purple-400/20',
      position: 'top-1/2 left-1/2',
      delay: 1.5,
    },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.size} ${shape.color} ${shape.position} rounded-full blur-xl`}
          animate={{
            x: mousePosition.x * 0.1,
            y: mousePosition.y * 0.1,
            rotate: mousePosition.x * 0.1,
          }}
          transition={{
            type: 'spring',
            stiffness: 50,
            damping: 20,
            delay: shape.delay,
          }}
          style={{
            transform: `translate(-50%, -50%)`,
          }}
        />
      ))}
      
      {/* Additional floating elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500 rounded-full"
        animate={{
          x: mousePosition.x * 0.2,
          y: mousePosition.y * 0.2,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      />
      
      <motion.div
        className="absolute top-3/4 right-1/4 w-3 h-3 bg-pink-500 rounded-full"
        animate={{
          x: -mousePosition.x * 0.15,
          y: -mousePosition.y * 0.15,
        }}
        transition={{ type: 'spring', stiffness: 80, damping: 15 }}
      />
      
      <motion.div
        className="absolute top-1/2 right-1/3 w-1 h-1 bg-blue-500 rounded-full"
        animate={{
          x: mousePosition.x * 0.3,
          y: -mousePosition.y * 0.2,
        }}
        transition={{ type: 'spring', stiffness: 120, damping: 8 }}
      />
    </div>
  );
};

export default FloatingShapes;