import Button from "./component/Button"
import { ThemeContextProvider } from "./context/ThemeContext"



function App() {


  return (
  <>
   <ThemeContextProvider>
      <Button />
   </ThemeContextProvider>
  </>
  )
}

export default App
