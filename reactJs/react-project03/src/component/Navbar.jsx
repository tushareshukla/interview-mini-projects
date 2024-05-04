import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage } = useContext(LanguageContext);
  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };
  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("es")}>Spanish</button>
      <button onClick={() => changeLanguage("fr")}>French</button>
      <button onClick={() => changeLanguage("de")}>German</button>
      <button onClick={() => changeLanguage("it")}>Italian</button>
      <button onClick={() => changeLanguage("pt")}>Portuguese</button>
      <p> Current Language: {language}</p>
    </div>
  );
}
