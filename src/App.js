import './App.css';
import {Login} from './components/Authentication';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { Home } from './components/Home';
import { useState } from 'react';
import RouteSecurity from './components/RouteSecurity';

function App() {
  const [log, setLog] = useState(false);

  function handleChangeLog(x){
    setLog(x);
    console.log(log);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login changeLog={handleChangeLog}/>}/>
        <Route path='/home' element={<RouteSecurity log={log}><Home /></RouteSecurity>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
