import React, { useState, useEffect } from "react";

const TypingText = ({
  strings,
  typeSpeed = 40,
  backSpeed = 50,
  loop = true,
}) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(pauseTimer);
    }

    const currentString = strings[currentStringIndex];
    const speed = isDeleting ? backSpeed : typeSpeed;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentString.length) {
          setCurrentText(currentString.substring(0, currentText.length + 1));
        } else {
          // Finished typing, pause then delete
          setIsPaused(true);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          // Finished deleting, move to next string
          setIsDeleting(false);
          if (loop || currentStringIndex < strings.length - 1) {
            setCurrentStringIndex((prev) => (prev + 1) % strings.length);
          }
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [
    currentText,
    isDeleting,
    isPaused,
    currentStringIndex,
    strings,
    typeSpeed,
    backSpeed,
    loop,
  ]);

  return (
    <span>
      {currentText}
      <span className="typed-cursor" aria-hidden="true">
        |
      </span>
    </span>
  );
};

export default TypingText;
