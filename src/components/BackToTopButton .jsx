import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 p-4 bg-primary text-white rounded-full shadow-lg hover:bg-blue-600 transition"
      >
        <i className="fas fa-angle-double-up text-xl"></i>
      </button>
    )
  );
};

export default BackToTopButton;
