import {useState } from "react"
import './App.css';
import Search from './components/Search'
import List from './components/List'

function App() {

  const [users, setUsers] = useState([])
  const [isFirstTime, setIsFirstTime] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState ('')

  return (
    <section className="app">
      <Search setUsers={setUsers} setIsFirstTime={setIsFirstTime} setIsLoading={setIsLoading} setErrorMessage={setErrorMessage}/>
      <List users={users} isFirstTime={isFirstTime} isLoading={isLoading} errorMessage={errorMessage}/>
    </section>
  );
}

export default App;
