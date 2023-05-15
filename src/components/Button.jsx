import React from "react";

function Button({ translate}) {

  return (
    <button className="translateBtn" onClick={ translate}>
      Translate
    </button>
  );
}

export default Button;
