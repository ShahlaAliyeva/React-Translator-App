import React from "react";

function Options({ languages, fromLang, toLang, setFromLang, setToLang }) {
  return (
    <div className="languages-side">
      <div className="selected-language from-lang">
        <span>Language: ({fromLang})</span>
        <select
          name="lang"
          id="lang"
          onChange={(e) => {
            fromLang = e.target.value;
            setFromLang(fromLang);
          }}
        >
          {languages.map((language, index) => (
            <option
              value={language.code}
              key={index}
              selected={language.code === fromLang ? language.name : false}
            >
              {language.name}
            </option>
          ))}
        </select>
      </div>
      <div className="selected-language to-lang">
        <span>Language: ({toLang})</span>
        <select
          name="lang"
          id="lang"
          onChange={(e) => {
            toLang = e.target.value
            setToLang(toLang);
          }}
        >
          {languages.map((language, index) => (
            <option
              value={language.code}
              key={index}
              selected={language.code === toLang ? language.name : false}
            >
              {language.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Options;
