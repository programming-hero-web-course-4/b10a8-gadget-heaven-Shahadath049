import React, { useEffect } from 'react';


// Custom hook for managing document title
const useDocumentTitle = (title) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${title} | Gadget Heaven`;

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};


export default useDocumentTitle;

// Example router component with dynamic titles
