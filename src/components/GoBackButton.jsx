import React from "react";

const GoBackButton = ({ text }) => {
  return (
    <div>
      <button
        type="button"
        style={{
          padding: "11px 12px",
          backgroundColor: "#ff0000",
          color: "#fff",
          border: 0,
          borderRadius: "6px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default GoBackButton;
