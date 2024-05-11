
import { useEffect, useState } from 'react';
import './App.css'
import Card from './Card'

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  return (
   <>
   <Card/>
   </>
  )
}

export default App
