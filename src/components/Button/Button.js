import React from "react";
import "./button.css";

export default function Button({ onClick, loading, className, children }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`create-url-button ${className}`}
    >
      {children}
    </button>
  );
}
