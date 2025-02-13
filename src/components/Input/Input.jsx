import React from "react";
import "./input.css";

export default function Input({
  value,
  onChange,
  className,
  type = "text",
  placeholder,
}) {
  return (
    <input
      className={`url-input-field ${className}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
