import './App.css';
import React from 'react';
import {User} from './components/User';
import {Home} from './components/Home';

function App() {
  const [getChange,setChange] = React.useState(false);

  const handleClick = () =>{
    setChange((oldValue)=>!oldValue)
    } 
  return (
    <div className="App">
      <header className="App-header">
        {getChange?<User/>:<Home/>}
      </header>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
