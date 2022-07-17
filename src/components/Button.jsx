import React from "react";

const Button = ({ color, bgColor, text, borderRadius, size, width }) => {
  return (
    <button
      type="button"
      style={{ color, backgroundColor: bgColor, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl capitalize ${
        width && `w-full`
      } text-center `}
    >
      {text}
    </button>
  );
};

export default Button;
