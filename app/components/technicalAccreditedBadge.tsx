'use client';

import { useEffect } from 'react';

export default function TechnicalAccreditedBadge() {
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
      <div
        data-iframe-width="400"
        data-iframe-height="250"
        data-share-badge-id="a644b510-8cde-4636-8bf7-3ae93491d531"
        data-share-badge-host="https://www.credly.com"
      />
  );
}
