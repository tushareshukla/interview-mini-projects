
import {ThemeContext} from '../context/ThemeContext'    
import { useContext } from 'react'


export default function Button() {
    const {theme, toggleTheme} = useContext(ThemeContext)


  return (
    
         <button onClick={toggleTheme} style={{ backgroundColor: theme === 'Light' ? '#ffffff' : '#333333', color: theme === 'Light' ? '#333333' : '#ffffff' }}>
      Toggle Theme
    </button>
    
  )
}
