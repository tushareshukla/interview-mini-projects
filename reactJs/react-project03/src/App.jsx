
import "./App.css";
import Navbar from "./component/Navbar";
import { LanguageProvider } from "./context/LanguageContext";

function App() {

  return (
    <>
     <LanguageProvider>
     <Navbar />
     </LanguageProvider>
    </>
  );
}

export default App;
