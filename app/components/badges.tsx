'use client';

import { useEffect } from 'react';

interface Badge {
  id: string;
  width?: number;
  height?: number;
}

interface BadgesProps {
  badges: Badge[];
}

export default function Badges({ badges }: BadgesProps) {
  useEffect(() => {
    // Load the Credly embed script
    const script = document.createElement('script');
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {badges.map((badge) => (
        <div
          key={badge.id}
          data-iframe-width={badge.width || 500}
          data-iframe-height={badge.height || 250}
          data-share-badge-id={badge.id}
          data-share-badge-host="https://www.credly.com"
        />
      ))}
    </div>
  );
}
