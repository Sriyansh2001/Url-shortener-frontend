import React, { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import "./clipboardText.css";

export default function ClipboardText({ text }) {
  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="clipboard-container">
      {text} <MdContentCopy className="copy-icon" onClick={handleCopyText} />
    </div>
  );
}
