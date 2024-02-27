import React, { useState, useEffect } from 'react';

const HTMLComponent = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        const response = await fetch('./myLargeHTML.html');
        const html = await response.text();
        setHtmlContent(html);
      } catch (error) {
        console.error('Error fetching HTML content:', error);
      }
    };

    fetchHtmlContent();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

export default HTMLComponent;
