import React, { useState } from "react";
import axios from "axios";
import "./translator.css";

const LANGUAGES = {
  English: "en",
  Hindi: "hi",
  Marathi: "mr",
  Gujarati: "gu",
  Tamil: "ta",
  Kannada: "kn",
  Telugu: "te",
  Bengali: "bn",
  Malayalam: "ml",
  Punjabi: "pa",
  Odia: "or",
};

const Translator = () => {
  const [text, setText] = useState("");
  const [targetLang, setTargetLang] = useState("hi");
  const [translatedText, setTranslatedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const GOOGLE_API_KEY = "AIzaSyBPNFdtNcABsfRq4KQ_RCVbLxPMJF0IFv8"; // Replace with your API Key

  const translateText = async () => {
    setIsLoading(true);
    try {
      // Translation API
      const response = await axios.post(
        `https://translation.googleapis.com/language/translate/v2?key=${GOOGLE_API_KEY}`,
        {
          q: text,
          source: "en",
          target: targetLang,
        }
      );

      const translation = response.data.data.translations[0].translatedText;
      setTranslatedText(translation);
    } catch (error) {
      console.error("Error during translation:", error);
      setTranslatedText("Translation failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="translation-app">
      <h1>Translator</h1>
      <textarea
        placeholder="Enter text to translate"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>
        <label>Target Language</label>
        <select
          value={targetLang}
          onChange={(e) => setTargetLang(e.target.value)}
        >
          {Object.keys(LANGUAGES).map((lang) => (
            <option key={lang} value={LANGUAGES[lang]}>
              {lang}
            </option>
          ))}
        </select>
      </div>
      <button onClick={translateText} disabled={isLoading}>
        {isLoading ? "Translating..." : "Translate"}
      </button>
      {translatedText && (
        <div>
          <h3>Translated Text:</h3>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default Translator;
