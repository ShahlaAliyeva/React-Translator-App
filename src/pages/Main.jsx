import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import Options from "../components/Options";
import Input from "../components/Input";
import Output from "../components/Output";
import Details from "../components/Details";
import { useSpeechSynthesis } from "react-speech-kit";

function Main() {

  const [languages, setLanguages] = useState([]);
  const [fromLang, setFromLang] = useState("en");
  const [toLang, setToLang] = useState("az");

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  let translationUrl = `https://api.mymemory.translated.net/get?q=${input}&langpair=${fromLang}|${toLang}`;

  const { speak } = useSpeechSynthesis();

  useEffect(() => {
    let langArr = [];
    fetch("https://libretranslate.org/languages")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((element, index) => {
          langArr.push(element);
        });
        setLanguages(langArr);
      })
      .catch((err) => console.log(err));
  }, []);

  const translate = () => {
    fetch(translationUrl)
      .then((response) => response.json())
      .then((data) => {
        setOutput(data.matches[0].translation);
      });
  };

  const languageSwitcher = (e) => {
    let tempFromLang = toLang; //en
    let tempToLang = fromLang; // az
    setToLang(fromLang); // az => en
    setFromLang(toLang); // en => az

    if (output !== "") {
      console.log("Output:", output);
      setInput(output);
    }

    if (input && tempFromLang === toLang && tempToLang === fromLang) {
      translationUrl = `https://api.mymemory.translated.net/get?q=${output}&langpair=${tempFromLang}|${tempToLang}`;
     
      translate();
      
    }
    setOutput("");
    console.log(output);
  };

  return (
    <div className="container">
      <Options
        languages={languages}
        fromLang={fromLang}
        toLang={toLang}
        setFromLang={setFromLang}
        setToLang={setToLang}
      />
      <div className="translation-side">
        <Input setInput={setInput} input={input} />
        <Output output={output} />
      </div>

      <Details
        speak={speak}
        input={input}
        output={output}
        fromLang={fromLang}
        toLang={toLang}
        setToLang={setToLang}
        translate={translate}
        languageSwitcher={languageSwitcher}
      />

      <Button translate={translate}></Button>
    </div>
  );
}

export default Main;
