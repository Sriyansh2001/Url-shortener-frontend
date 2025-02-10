import { useEffect, useState } from "react";

export default function useSmothText({ HEADING_LIST }) {
  const [heading, setHeading] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = HEADING_LIST[index];

    if (isDeleting) {
      // Deleting characters one by one
      if (charIndex > 0) {
        setTimeout(() => {
          setHeading(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 50);
      } else {
        // Move to the next text after deletion
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % HEADING_LIST.length);
      }
    } else {
      // Typing characters one by one
      if (charIndex < currentText.length) {
        setTimeout(() => {
          setHeading(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 100);
      } else {
        // Wait for a second before deleting
        setTimeout(() => setIsDeleting(true), 1500);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex, index, isDeleting]);

  return { heading };
}
