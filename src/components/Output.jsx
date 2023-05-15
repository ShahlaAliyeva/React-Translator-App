import React from "react";

function Output({ output }) {
  return (
    <textarea
      name=""
      id=""
      cols="30"
      rows="10"
      value={output}
      readOnly
      placeholder="Translation.."
    ></textarea>
  );
}

export default Output;
