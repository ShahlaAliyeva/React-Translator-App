import React, { useState } from "react";

function Input({ setInput, input }) {
  return (
    <textarea
      name=""
      id=""
      cols="30"
      rows="10"
      onChange={(e) => {
        setInput(e.target.value)
      }}
      value={input}
      placeholder="Write Something..."
    ></textarea>
  );
}

export default Input;
